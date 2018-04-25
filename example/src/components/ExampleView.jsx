import React, { Component } from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';

import '../../../src/lib/styles/Timeline.scss';
import Timeline from '../../../src/lib/Timeline';

class ExampleView extends Component {
  static propTypes = {};

  constructor(props) {
    super(props);
    this.state = {
      bookings: [
        {
          id: 1,
          title: 'Room 1',
          cellRenderer: (group, height) => (
            <div style={{ lineHeight: `${height}px`, height: `${height}px`, textAlign: 'center' }}>
              {29}€
            </div>
          ),
        },
        {
          id: 2,
          title: 'Room 2',
          cellRenderer: (group, height) => (
            <div style={{ lineHeight: `${height}px`, height: `${height}px`, textAlign: 'center' }}>
              {29}€
            </div>
          ),
        },
        {
          id: 3,
          title: 'Room 2',
          cellRenderer: (group, height) => (
            <div style={{ lineHeight: `${height}px`, height: `${height}px`, textAlign: 'center' }}>
              {29}€
            </div>
          ),
        },
      ],
      items: [
        {
          id: 1,
          group: 1,
          content: () => 'Booking #163432',
          start_time: parseInt(
            moment()
              .add(10, 'minutes')
              .format('x'),
            10,
          ),
          end_time: parseInt(
            moment()
              .add(1, 'days')
              .format('x'),
            10,
          ),
          canChangeGroup: false,
          itemProps: {
            'aria-hidden': true,
          },
        },
        {
          id: 2,
          group: 2,
          content: () => 'Booking #556524',
          start_time: parseInt(
            moment()
              .add(2, 'days')
              .format('x'),
            10,
          ),
          end_time: parseInt(
            moment()
              .add(5, 'days')
              .format('x'),
            10,
          ),
          canChangeGroup: false,
          itemProps: {
            'aria-hidden': true,
          },
        },
      ],
      defaultTimeStart: moment()
        .startOf('day')
        .toDate(),
      defaultTimeEnd: moment()
        .startOf('day')
        .add(2, 'week')
        .toDate(),
    };
  }

  render() {
    return (
      <div style={{ minHeight: '100vh' }}>
        <Timeline
          groups={this.state.bookings}
          groupRenderer={({ group }) => (
            <div className="list-column list-column--link" role="presentation">
              {group.title}
            </div>
          )}
          items={this.state.items}
          fullUpdate={false}
          sidebarContent={<div>Booking ID</div>}
          itemTouchSendsClick={false}
          stackItems
          dragSnap={60 * 60 * 1000}
          itemHeightRatio={1}
          showCursorLine
          lineHeight={48}
          timeSteps={{
            second: 0,
            minute: 0,
            hour: 0,
            day: 1,
            month: 1,
            year: 1,
          }}
          minZoom={24 * 60 * 60 * 1000}
          maxZoom={365.24 * 86400 * 1000}
          defaultTimeStart={this.state.defaultTimeStart}
          defaultTimeEnd={this.state.defaultTimeEnd}
          onItemDoubleClick={(item, e, time) => {}}
          onCanvasDoubleClick={(group, time, e) => {
            console.error(group, time, e);
          }}
          canMove={false}
          canResize={false}
        />
      </div>
    );
  }
}

export default ExampleView;
