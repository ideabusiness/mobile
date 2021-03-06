// @flow

import * as React from 'react';
import { View } from 'react-native';
import type { TranslationType } from '@kiwicom/mobile-localization';

import Popup from './Popup';
import TextButton from '../buttons/TextButton';
import StyleSheet from '../PlatformStyleSheet';

type Props = {|
  +buttonTitle: TranslationType,
  +children: React.Node,
  +isVisible: boolean,
  +onClose: Function,
  +onSave: Function,
  +style?: Object,
  +testID?: string,
|};

const POPUP_PADDING = 20;

/**
 * Simple popup with confirmation button at the bottom.
 */
export default class ButtonPopup extends React.Component<Props> {
  onClose = () => this.props.onClose();

  onSave = () => this.props.onSave();

  render = () => (
    <Popup isVisible={this.props.isVisible} onClose={this.onClose}>
      <View
        style={[styles.content, this.props.style && this.props.style.content]}
      >
        {this.props.children}
      </View>
      <View style={styles.button}>
        <TextButton title={this.props.buttonTitle} onPress={this.onSave} />
      </View>
    </Popup>
  );
}

const styles = StyleSheet.create({
  content: {
    padding: POPUP_PADDING,
    paddingBottom: 0,
  },
  button: {
    marginTop: 20,
    margin: POPUP_PADDING,
  },
});
