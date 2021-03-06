// @flow

import * as React from 'react';
import { Translation } from '@kiwicom/mobile-localization';

const DepartureNote = (
  duration: ?number,
): ?React.Element<typeof Translation> => {
  if (!duration) {
    return null;
  }
  const hours = Math.trunc(duration / 60);
  const minutes = duration % 60;
  let id = 'mmb.booking_timeline.event.departure.note';
  if (hours === 0 && minutes === 1) {
    id = 'mmb.booking_timeline.event.departure.note_minute';
  }
  if (hours === 1 && minutes === 0) {
    id = 'mmb.booking_timeline.event.departure.note_hour';
  }
  if (hours === 1 && minutes === 1) {
    id = 'mmb.booking_timeline.event.departure.note_hour_minute';
  }
  if (hours === 1 && minutes > 1) {
    id = 'mmb.booking_timeline.event.departure.note_hour_minutes';
  }
  if (hours > 1 && minutes === 0) {
    id = 'mmb.booking_timeline.event.departure.note_hours';
  }
  if (hours > 1 && minutes === 1) {
    id = 'mmb.booking_timeline.event.departure.note_hours_minute';
  }
  if (hours > 1 && minutes > 1) {
    id = 'mmb.booking_timeline.event.departure.note_hours_minutes';
  }

  return <Translation id={id} values={{ hours, minutes }} />;
};

export default DepartureNote;
