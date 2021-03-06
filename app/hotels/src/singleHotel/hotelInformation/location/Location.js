// @flow

import * as React from 'react';
import { View, TouchableWithoutFeedback } from 'react-native';
import MapView from 'react-native-maps';
import {
  StyleSheet,
  StretchedImage,
  DropMarker,
  Text,
  Color,
} from '@kiwicom/mobile-shared';
import { createFragmentContainer, graphql } from '@kiwicom/mobile-relay';
import { Translation } from '@kiwicom/mobile-localization';
import idx from 'idx';

import gradient from './white-to-alpha-horizontal.png';
import type { Location_hotel } from './__generated__/Location_hotel.graphql';

type ContainerProps = {|
  +hotel: any,
  +onGoToMap: () => void,
  +isWide: boolean,
|};

type Props = {|
  ...ContainerProps,
  +hotel: ?Location_hotel,
|};

export function Location({ hotel, onGoToMap, isWide }: Props) {
  const address = idx(hotel, _ => _.address);
  const coordinates = idx(hotel, _ => _.coordinates);
  const latitude = idx(coordinates, _ => _.lat);
  const longitude = idx(coordinates, _ => _.lng);
  return (
    <View style={[styles.background, isWide ? styles.wideContainer : null]}>
      <TouchableWithoutFeedback onPress={onGoToMap}>
        <View style={styles.container}>
          <View style={styles.leftColumn}>
            <Text style={[styles.addressLine, styles.streetLine]}>
              <Translation passThrough={idx(address, _ => _.street)} />
            </Text>
            <Text style={[styles.addressLine, styles.cityLine]}>
              <Translation passThrough={idx(address, _ => _.city)} />
            </Text>
          </View>
          <View style={styles.rightColumn}>
            {typeof latitude === 'number' &&
              typeof longitude === 'number' && (
                <MapView
                  region={{
                    latitude: latitude,
                    longitude: longitude - 0.005, // move center little bit right
                    latitudeDelta: 0.01,
                    longitudeDelta: 0.01,
                  }}
                  scrollEnabled={false}
                  style={[StyleSheet.absoluteFillObject, styles.mapBottom]}
                >
                  <MapView.Marker
                    coordinate={{
                      latitude,
                      longitude,
                    }}
                  >
                    <DropMarker size={30} />
                  </MapView.Marker>
                </MapView>
              )}
            <StretchedImage source={gradient} />
          </View>
        </View>
      </TouchableWithoutFeedback>
    </View>
  );
}

const styles = StyleSheet.create({
  background: {
    backgroundColor: Color.white,
  },
  wideContainer: {
    borderRadius: 2,
  },
  container: {
    height: 100,
    flexDirection: 'row',
  },
  leftColumn: {
    flex: 1,
    justifyContent: 'center',
    padding: 15,
  },
  rightColumn: {
    flex: 1,
  },
  addressLine: {
    fontSize: 14,
    lineHeight: 19,
    letterSpacing: -0.15,
  },
  streetLine: {
    color: Color.textDark,
  },
  cityLine: {
    color: Color.textLight,
  },
  mapBottom: {
    android: {
      bottom: -25,
    },
  },
});

export default (createFragmentContainer(
  Location,
  graphql`
    fragment Location_hotel on Hotel {
      address {
        street
        city
      }
      coordinates {
        lat
        lng
      }
    }
  `,
): React.ComponentType<ContainerProps>);
