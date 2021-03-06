// @flow

import * as React from 'react';
import { graphql, PrivateApiRenderer } from '@kiwicom/mobile-relay';

import PassengerDetail from './PassengerDetail';
import BookingDetailContext from '../../context/BookingDetailContext';
import type { PassengerDetailContainerQuery } from './__generated__/PassengerDetailContainerQuery.graphql';

type Props = {||};

export default class PassengerDetailContainer extends React.Component<Props> {
  renderInner = (renderProps: PassengerDetailContainerQuery) => {
    return <PassengerDetail booking={renderProps.node} />;
  };

  render = () => (
    <BookingDetailContext.Consumer>
      {({ bookingId }) => (
        <PrivateApiRenderer
          query={graphql`
            query PassengerDetailContainerQuery($id: ID!) {
              node(id: $id) {
                ... on BookingInterface {
                  ...PassengerDetail_booking
                }
              }
            }
          `}
          variables={{ id: bookingId }}
          render={this.renderInner}
        />
      )}
    </BookingDetailContext.Consumer>
  );
}
