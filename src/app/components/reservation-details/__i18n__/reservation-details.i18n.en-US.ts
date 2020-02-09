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
    label: 'E-mail'
  },
  '/reservation-details/check-in-out': {
    label: 'Check-in/check-out dates'
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
