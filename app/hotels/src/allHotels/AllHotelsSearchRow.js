// @flow

import * as React from 'react';
import idx from 'idx';
import { View } from 'react-native';
import { createFragmentContainer, graphql } from '@kiwicom/mobile-relay';
import { SimpleCard, NetworkImage, StyleSheet } from '@kiwicom/mobile-shared';

import HotelTitle from './HotelTitle';
import HotelReviewScore from './HotelReviewScore';
import type { AllHotelsSearchRow as AllHotelsSearchRowProps } from './__generated__/AllHotelsSearchRow.graphql';

type Props = {|
  +openSingleHotel: (id: string) => void,
  +data: AllHotelsSearchRowProps,
|};

const style = StyleSheet.create({
  row: {
    flexDirection: 'row',
  },
  image: {
    marginEnd: 10,
    width: 50,
    borderRadius: 2,
    android: {
      height: 80,
    },
    ios: {
      height: 70,
    },
  },
  hotelTitleWrapper: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
  },
  hotelTitle: {
    flex: 1,
  },
  hotelReviewScore: {
    marginStart: 10,
  },
  cardStyle: {
    marginVertical: 0,
    marginBottom: 5,
  },
});

class AllHotelsSearchRow extends React.Component<Props> {
  onGoToSingleHotel = () => {
    const hotelId = idx(this.props, _ => _.data.hotel.id);
    if (hotelId) {
      this.props.openSingleHotel(hotelId);
    }
  };

  render = () => {
    const { data } = this.props;
    const lowResUrl = idx(data, _ => _.hotel.mainPhoto.lowResUrl);

    return (
      <SimpleCard onPress={this.onGoToSingleHotel} style={style.cardStyle}>
        <View style={style.row}>
          <NetworkImage
            style={style.image}
            resizeMode="cover"
            source={{ uri: lowResUrl }}
          />

          <View style={style.hotelTitleWrapper}>
            <View style={style.hotelTitle}>
              <HotelTitle data={data} />
            </View>
            <View style={style.hotelReviewScore}>
              <HotelReviewScore hotel={data.hotel} />
            </View>
          </View>
        </View>
      </SimpleCard>
    );
  };
}

export default createFragmentContainer(
  AllHotelsSearchRow,
  graphql`
    fragment AllHotelsSearchRow on HotelAvailability {
      ...HotelTitle
      hotel {
        id
        mainPhoto {
          lowResUrl
        }
        ...HotelReviewScore_hotel
      }
    }
  `,
);
