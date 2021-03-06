// @flow strict

/**
 * Styles are only reexported here to avoid importing internal RN libraries
 * everywhere (types are not exported directly).
 */

import {
  type ____DangerouslyImpreciseStyleProp_Internal,
  type DangerouslyImpreciseStyle,
} from 'react-native/Libraries/StyleSheet/StyleSheetTypes';

type ReducedDangerouslyImpreciseStyle = $Rest<
  DangerouslyImpreciseStyle,
  {|
    left: *, // use 'start' instead
    right: *, // use 'end' instead
    paddingLeft: *, // use 'paddingStart' instead
    paddingRight: *, // use 'paddingEnd' instead
    marginLeft: *, // use 'marginStart' instead
    marginRight: *, // use 'marginEnd' instead
    borderLeftWidth: *, // use 'borderStartWidth' instead
    borderRightWidth: *, // use 'borderEndWidth' instead
    borderLeftColor: *, // use 'borderStartColor' instead
    borderRightColor: *, // use 'borderEndColor' instead
    borderBottomLeftRadius: *, // use 'borderBottomStartRadius' instead
    borderBottomRightRadius: *, // use 'borderBottomEndRadius' instead
    borderTopLeftRadius: *, // use 'borderTopStartRadius' instead
    borderTopRightRadius: *, // use 'borderTopEndRadius' instead
  |},
>;

export type StyleObjectType = {
  +[key: string]: $Shape<ReducedDangerouslyImpreciseStyle>,
};

export type PlatformStyleObjectType = {
  +[key: string]: $Shape<
    $Rest<
      ReducedDangerouslyImpreciseStyle,
      {|
        elevation: *, // elevation should be only used under the Android key
      |},
    > & {
      android: ReducedDangerouslyImpreciseStyle,
      ios: ReducedDangerouslyImpreciseStyle,
    },
  >,
};

export type StylePropType = ____DangerouslyImpreciseStyleProp_Internal;
