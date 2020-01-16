import { TableSchema, tableSchema } from '@lightweightform/storage';

import { guestSchema } from './guest/guest.schema';

/**
 * Guests schema.
 */
export const guestsSchema: TableSchema = tableSchema(guestSchema);
