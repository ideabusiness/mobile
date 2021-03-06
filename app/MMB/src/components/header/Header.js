// @flow

import * as React from 'react';
import { graphql, createFragmentContainer } from '@kiwicom/mobile-relay';
import { AdaptableLayout, Touchable, TextIcon } from '@kiwicom/mobile-shared';
import { SeparatorFullWidth, MenuItem } from '@kiwicom/mobile-navigation';
import { Translation } from '@kiwicom/mobile-localization';
import idx from 'idx';

import StatusBar from './StatusBar';
import TripInfo from './TripInfo';
import MobileTripOverviewHandle from './MobileTripOverviewHandle';
import TripOverview from '../../scenes/tripOverview/TripOverview';
import type { Header as HeaderType } from './__generated__/Header.graphql';

type HeaderSharedProps = {|
  +data: ?HeaderType,
  +children: React.Node,
|};

function HeaderShared(props: HeaderSharedProps) {
  const booking = idx(props, _ => _.data);

  return (
    <React.Fragment>
      <StatusBar data={booking} />
      <SeparatorFullWidth />
      {props.children}
    </React.Fragment>
  );
}

type HeaderProps = {|
  +data: HeaderType,
  +openSubmenu: (activeId: string, menuId: string) => void,
  +activeId: string,
|};

type HeaderState = {|
  expanded: boolean,
|};

class Header extends React.Component<HeaderProps, HeaderState> {
  state = {
    expanded: false,
  };

  toggleExpandable = () => {
    this.setState(prevState => ({
      expanded: !prevState.expanded,
    }));
  };

  handleOpenTripOverviewSubmenu = () => {
    this.props.openSubmenu('mmb.main_menu.trip_overview', 'mmb.trip_overview');
  };

  render = () => {
    const booking = idx(this.props, _ => _.data);

    return (
      <AdaptableLayout
        renderOnWide={
          <React.Fragment>
            <HeaderShared data={booking}>
              <TripInfo data={booking} />
            </HeaderShared>
            <MenuItem
              onPress={this.handleOpenTripOverviewSubmenu}
              title={<Translation id="mmb.flight_overview.title" />}
              isActive={this.props.activeId === 'mmb.main_menu.trip_overview'}
              icon={<TextIcon code="&#xe08f;" />}
            />
          </React.Fragment>
        }
        renderOnNarrow={
          <HeaderShared data={booking}>
            <Touchable onPress={this.toggleExpandable}>
              <React.Fragment>
                <TripInfo data={booking} />
                <MobileTripOverviewHandle isExpanded={this.state.expanded}>
                  <TripOverview data={booking} />
                </MobileTripOverviewHandle>
              </React.Fragment>
            </Touchable>
          </HeaderShared>
        }
      />
    );
  };
}

export default createFragmentContainer(
  Header,
  graphql`
    fragment Header on BookingInterface {
      isPastBooking
      ...StatusBar
      ...TripInfo
      ...TripOverview
    }
  `,
);
