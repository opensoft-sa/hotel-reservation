import {
  RecordSchema,
  recordSchema,
  stringSchema,
  numberSchema,
  booleanSchema,
  tableSchema,
  Storage,
  ValidationIssue
} from '@lightweightform/storage';
import { dateRangeSchema } from '@lightweightform/bootstrap-theme';
import differenceInCalendarDays from 'date-fns/differenceInCalendarDays';
import { emailValidator } from '../../utils/validators';

/**
 * Reservation details schema.
 */
export const reservationDetailsSchema: RecordSchema = recordSchema({
  name: stringSchema({ minLength: 1 }),
  email: stringSchema({ minLength: 1, validate: emailValidator }),
  'check-in-out': dateRangeSchema({
    isNullable: true,
    isRequired: true,
    minDate: new Date(new Date().toJSON().slice(0, 10)), // Today (not "now")
    validate: checkInOutAtLeastOneNight
  }),
  'check-in-hour': numberSchema({
    isNullable: true,
    isInteger: true,
    min: 16,
    max: 23
  }),
  rooms: tableSchema(
    recordSchema({
      type: stringSchema({
        isNullable: true,
        isRequired: true,
        allowedValues: ['single', 'double', 'twin']
      }),
      'smoking-room': booleanSchema()
    }),
    { minSize: 1 }
  )
});

/**
 * Validate that the check-in and check-out aren't in the same day.
 * @param ctx Storage context.
 * @returns Validation issue with code `'CHECK_IN_OUT_SAME_DAY'` when the
 * check-in and check-out are on the same day.
 */
function checkInOutAtLeastOneNight(ctx: Storage): ValidationIssue | undefined {
  const range = ctx.get();
  const nightsSpent =
    range === null ? null : differenceInCalendarDays(range[1], range[0]);
  if (nightsSpent !== null && nightsSpent < 1) {
    return { code: 'CHECK_IN_OUT_SAME_DAY' };
  }
}
