// @flow strict

import * as React from 'react';
import { graphql, createFragmentContainer } from '@kiwicom/mobile-relay';
import idx from 'idx';

import Timeline from './Timeline';
import type { MulticityTimeline as MulticityTimelineType } from './__generated__/MulticityTimeline.graphql';

type Props = {|
  +data: MulticityTimelineType,
|};

function MulticityTimeline(props: Props) {
  const trips = idx(props.data, _ => _.trips) || [];

  return trips.map((trip, index) => <Timeline key={index} data={trip} />);
}

export default createFragmentContainer(
  MulticityTimeline,
  graphql`
    fragment MulticityTimeline on BookingMulticity {
      trips {
        ...Timeline
      }
    }
  `,
);
