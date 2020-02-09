import {
  RecordSchema,
  recordSchema,
  stringSchema,
  dateSchema
} from '@lightweightform/storage';

/**
 * Guest schema.
 */
export const guestSchema: RecordSchema = recordSchema({
  name: stringSchema(),
  'document-type': stringSchema({ isNullable: true }),
  'document-number': stringSchema(),
  'birth-date': dateSchema({ isNullable: true }),
  email: stringSchema()
});
