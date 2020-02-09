/**
 * Guest i18n object for the en-US locale.
 */
export const guestI18nEnUS: Record<string, any> = {
  '/guests/?': {
    label: 'Guest'
  },
  '/guests/?/name': {
    label: 'Full name'
  },
  '/guests/?/document-type': {
    label: 'Document type',
    options: [
      { value: 'passport', label: 'Passport' },
      { value: 'id', label: 'Id card' }
    ]
  },
  '/guests/?/document-number': {
    label: 'Document number'
  },
  '/guests/?/birth-date': {
    label: 'Date of birth'
  },
  '/guests/?/email': {
    label: 'E-mail'
  }
};
