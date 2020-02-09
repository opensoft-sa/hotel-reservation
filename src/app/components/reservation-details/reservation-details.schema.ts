import {
  RecordSchema,
  recordSchema,
  stringSchema,
  numberSchema,
  booleanSchema,
  tableSchema
} from '@lightweightform/storage';
import { dateRangeSchema } from '@lightweightform/bootstrap-theme';

/**
 * Reservation details schema.
 */
export const reservationDetailsSchema: RecordSchema = recordSchema({
  name: stringSchema(),
  email: stringSchema(),
  'check-in-out': dateRangeSchema({ isNullable: true }),
  'check-in-hour': numberSchema({ isNullable: true, isInteger: true }),
  rooms: tableSchema(
    recordSchema({
      type: stringSchema({ isNullable: true }),
      'smoking-room': booleanSchema()
    })
  )
});
