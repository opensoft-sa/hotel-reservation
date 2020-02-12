/**
 * Reservation details i18n object for the en-US locale.
 */
export const reservationDetailsI18nEnUS: Record<string, any> = {
  '/reservation-details': {
    label: 'Reservation details'
  },
  '/reservation-details/name': {
    label: 'Name',
    helpMessage: 'The reservation will be made in this name'
  },
  '/reservation-details/email': {
    label: 'E-mail',
    validations: {
      INVALID_EMAIL: 'The e-mail is invalid.'
    }
  },
  '/reservation-details/check-in-out': {
    label: 'Check-in/check-out dates',
    legend: 'Check-in from 16:00h to 23:00h',
    validations: {
      CHECK_IN_OUT_SAME_DAY:
        'The check-in and check-out cannot be on the same day.'
    }
  },
  '/reservation-details/check-in-hour': {
    label: 'Arrival time',
    suffix: 'h',
    helpMessage: 'Approximate check-in hour (if known)'
  },
  '/reservation-details/rooms': {
    label: 'Rooms',
    addRowActionText: 'Add room',
    removeRowsActionText: 'Remove rooms',
    noRowsText: 'No rooms added.',
    columnLabels: {
      type: 'Room type',
      'smoking-room': 'Smoking room?'
    },
    validations: {
      LF_SIZE_OUT_OF_BOUNDS: 'At least 1 room must be added.'
    }
  },
  '/reservation-details/rooms/?/type': {
    label: 'Room type',
    options: [
      { value: 'single', label: 'Single' },
      { value: 'double', label: 'Double' },
      { value: 'twin', label: 'Twin' }
    ]
  },
  '/reservation-details/rooms/?/smoking-room': {
    label: 'Room for smokers?'
  }
};
