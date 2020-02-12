import { Storage, ValidationIssue } from '@lightweightform/storage';

/**
 * Regex used to validate an email.
 */
const EMAIL_REGEX = /^.+@.+$/;

/**
 * E-mail validator.
 * @param ctx Storage context.
 * @returns Validation issue with code `'INVALID_EMAIL'` when the e-mail is
 * invalid.
 */
export function emailValidator(ctx: Storage): ValidationIssue | undefined {
  const email = ctx.get();
  if (!EMAIL_REGEX.test(email)) {
    return { code: 'INVALID_EMAIL' };
  }
}
