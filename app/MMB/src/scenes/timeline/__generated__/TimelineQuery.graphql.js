/**
 * @flow
 * @relayHash 4dedc6445baff6ff6fa3b2fec1e299e6
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
type AirportArrivalTimelineEvent$ref = any;
type ArrivalTimelineEvent$ref = any;
type BoardingTimelineEvent$ref = any;
type BookedFlightTimelineEvent$ref = any;
type DepartureTimelineEvent$ref = any;
type DownloadETicketTimelineEvent$ref = any;
type DownloadInvoiceTimelineEvent$ref = any;
type LeaveForAirportTimelineEvent$ref = any;
type TransportFromAirportTimelineEvent$ref = any;
export type TimelineQueryVariables = {|
  id: string
|};
export type TimelineQueryResponse = {|
  +bookingTimeline: ?{|
    +events: ?$ReadOnlyArray<?{|
      +__typename: string,
      +timestamp: ?any,
      +$fragmentRefs: BookedFlightTimelineEvent$ref & LeaveForAirportTimelineEvent$ref & AirportArrivalTimelineEvent$ref & DownloadInvoiceTimelineEvent$ref & DownloadETicketTimelineEvent$ref & BoardingTimelineEvent$ref & DepartureTimelineEvent$ref & ArrivalTimelineEvent$ref & TransportFromAirportTimelineEvent$ref,
    |}>
  |}
|};
*/


/*
query TimelineQuery(
  $id: ID!
) {
  bookingTimeline(id: $id) {
    events {
      __typename
      timestamp
      ... on BookedFlightTimelineEvent {
        ...BookedFlightTimelineEvent
      }
      ... on LeaveForAirportTimelineEvent {
        ...LeaveForAirportTimelineEvent
      }
      ... on AirportArrivalTimelineEvent {
        ...AirportArrivalTimelineEvent
      }
      ... on DownloadInvoiceTimelineEvent {
        ...DownloadInvoiceTimelineEvent
      }
      ... on DownloadETicketTimelineEvent {
        ...DownloadETicketTimelineEvent
      }
      ... on BoardingTimelineEvent {
        ...BoardingTimelineEvent
      }
      ... on DepartureTimelineEvent {
        ...DepartureTimelineEvent
      }
      ... on ArrivalTimelineEvent {
        ...ArrivalTimelineEvent
      }
      ... on TransportFromAirportTimelineEvent {
        ...TransportFromAirportTimelineEvent
      }
    }
  }
}

fragment BookedFlightTimelineEvent on BookedFlightTimelineEvent {
  timestamp
  location {
    airport {
      city {
        name
      }
      id
    }
  }
}

fragment LeaveForAirportTimelineEvent on LeaveForAirportTimelineEvent {
  timestamp
}

fragment AirportArrivalTimelineEvent on AirportArrivalTimelineEvent {
  timestamp
  location {
    airport {
      locationId
      name
      id
    }
  }
}

fragment DownloadInvoiceTimelineEvent on DownloadInvoiceTimelineEvent {
  timestamp
  invoiceUrl
  numberPassengers
  legs {
    departure {
      airport {
        city {
          name
        }
        id
      }
    }
    arrival {
      airport {
        city {
          name
        }
        id
      }
    }
    id
  }
}

fragment DownloadETicketTimelineEvent on DownloadETicketTimelineEvent {
  timestamp
  ticketUrl
}

fragment BoardingTimelineEvent on BoardingTimelineEvent {
  timestamp
}

fragment DepartureTimelineEvent on DepartureTimelineEvent {
  timestamp
  location {
    airport {
      city {
        name
      }
      id
    }
  }
  duration
}

fragment ArrivalTimelineEvent on ArrivalTimelineEvent {
  timestamp
  location {
    airport {
      locationId
      city {
        name
      }
      id
    }
  }
}

fragment TransportFromAirportTimelineEvent on TransportFromAirportTimelineEvent {
  timestamp
}
*/

const node/*: ConcreteRequest*/ = (function(){
var v0 = [
  {
    "kind": "LocalArgument",
    "name": "id",
    "type": "ID!",
    "defaultValue": null
  }
],
v1 = [
  {
    "kind": "Variable",
    "name": "id",
    "variableName": "id",
    "type": "ID!"
  }
],
v2 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "__typename",
  "args": null,
  "storageKey": null
},
v3 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "timestamp",
  "args": null,
  "storageKey": null
},
v4 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "name",
  "args": null,
  "storageKey": null
},
v5 = {
  "kind": "LinkedField",
  "alias": null,
  "name": "city",
  "storageKey": null,
  "args": null,
  "concreteType": "LocationArea",
  "plural": false,
  "selections": [
    v4
  ]
},
v6 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "id",
  "args": null,
  "storageKey": null
},
v7 = [
  {
    "kind": "LinkedField",
    "alias": null,
    "name": "airport",
    "storageKey": null,
    "args": null,
    "concreteType": "Location",
    "plural": false,
    "selections": [
      v5,
      v6
    ]
  }
],
v8 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "locationId",
  "args": null,
  "storageKey": null
},
v9 = {
  "kind": "LinkedField",
  "alias": null,
  "name": "location",
  "storageKey": null,
  "args": null,
  "concreteType": "RouteStop",
  "plural": false,
  "selections": v7
};
return {
  "kind": "Request",
  "operationKind": "query",
  "name": "TimelineQuery",
  "id": null,
  "text": "query TimelineQuery(\n  $id: ID!\n) {\n  bookingTimeline(id: $id) {\n    events {\n      __typename\n      timestamp\n      ... on BookedFlightTimelineEvent {\n        ...BookedFlightTimelineEvent\n      }\n      ... on LeaveForAirportTimelineEvent {\n        ...LeaveForAirportTimelineEvent\n      }\n      ... on AirportArrivalTimelineEvent {\n        ...AirportArrivalTimelineEvent\n      }\n      ... on DownloadInvoiceTimelineEvent {\n        ...DownloadInvoiceTimelineEvent\n      }\n      ... on DownloadETicketTimelineEvent {\n        ...DownloadETicketTimelineEvent\n      }\n      ... on BoardingTimelineEvent {\n        ...BoardingTimelineEvent\n      }\n      ... on DepartureTimelineEvent {\n        ...DepartureTimelineEvent\n      }\n      ... on ArrivalTimelineEvent {\n        ...ArrivalTimelineEvent\n      }\n      ... on TransportFromAirportTimelineEvent {\n        ...TransportFromAirportTimelineEvent\n      }\n    }\n  }\n}\n\nfragment BookedFlightTimelineEvent on BookedFlightTimelineEvent {\n  timestamp\n  location {\n    airport {\n      city {\n        name\n      }\n      id\n    }\n  }\n}\n\nfragment LeaveForAirportTimelineEvent on LeaveForAirportTimelineEvent {\n  timestamp\n}\n\nfragment AirportArrivalTimelineEvent on AirportArrivalTimelineEvent {\n  timestamp\n  location {\n    airport {\n      locationId\n      name\n      id\n    }\n  }\n}\n\nfragment DownloadInvoiceTimelineEvent on DownloadInvoiceTimelineEvent {\n  timestamp\n  invoiceUrl\n  numberPassengers\n  legs {\n    departure {\n      airport {\n        city {\n          name\n        }\n        id\n      }\n    }\n    arrival {\n      airport {\n        city {\n          name\n        }\n        id\n      }\n    }\n    id\n  }\n}\n\nfragment DownloadETicketTimelineEvent on DownloadETicketTimelineEvent {\n  timestamp\n  ticketUrl\n}\n\nfragment BoardingTimelineEvent on BoardingTimelineEvent {\n  timestamp\n}\n\nfragment DepartureTimelineEvent on DepartureTimelineEvent {\n  timestamp\n  location {\n    airport {\n      city {\n        name\n      }\n      id\n    }\n  }\n  duration\n}\n\nfragment ArrivalTimelineEvent on ArrivalTimelineEvent {\n  timestamp\n  location {\n    airport {\n      locationId\n      city {\n        name\n      }\n      id\n    }\n  }\n}\n\nfragment TransportFromAirportTimelineEvent on TransportFromAirportTimelineEvent {\n  timestamp\n}\n",
  "metadata": {},
  "fragment": {
    "kind": "Fragment",
    "name": "TimelineQuery",
    "type": "RootQuery",
    "metadata": null,
    "argumentDefinitions": v0,
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "bookingTimeline",
        "storageKey": null,
        "args": v1,
        "concreteType": "BookingTimeline",
        "plural": false,
        "selections": [
          {
            "kind": "LinkedField",
            "alias": null,
            "name": "events",
            "storageKey": null,
            "args": null,
            "concreteType": null,
            "plural": true,
            "selections": [
              v2,
              v3,
              {
                "kind": "InlineFragment",
                "type": "DownloadInvoiceTimelineEvent",
                "selections": [
                  {
                    "kind": "FragmentSpread",
                    "name": "DownloadInvoiceTimelineEvent",
                    "args": null
                  }
                ]
              },
              {
                "kind": "InlineFragment",
                "type": "TransportFromAirportTimelineEvent",
                "selections": [
                  {
                    "kind": "FragmentSpread",
                    "name": "TransportFromAirportTimelineEvent",
                    "args": null
                  }
                ]
              },
              {
                "kind": "InlineFragment",
                "type": "ArrivalTimelineEvent",
                "selections": [
                  {
                    "kind": "FragmentSpread",
                    "name": "ArrivalTimelineEvent",
                    "args": null
                  }
                ]
              },
              {
                "kind": "InlineFragment",
                "type": "DepartureTimelineEvent",
                "selections": [
                  {
                    "kind": "FragmentSpread",
                    "name": "DepartureTimelineEvent",
                    "args": null
                  }
                ]
              },
              {
                "kind": "InlineFragment",
                "type": "BoardingTimelineEvent",
                "selections": [
                  {
                    "kind": "FragmentSpread",
                    "name": "BoardingTimelineEvent",
                    "args": null
                  }
                ]
              },
              {
                "kind": "InlineFragment",
                "type": "DownloadETicketTimelineEvent",
                "selections": [
                  {
                    "kind": "FragmentSpread",
                    "name": "DownloadETicketTimelineEvent",
                    "args": null
                  }
                ]
              },
              {
                "kind": "InlineFragment",
                "type": "BookedFlightTimelineEvent",
                "selections": [
                  {
                    "kind": "FragmentSpread",
                    "name": "BookedFlightTimelineEvent",
                    "args": null
                  }
                ]
              },
              {
                "kind": "InlineFragment",
                "type": "AirportArrivalTimelineEvent",
                "selections": [
                  {
                    "kind": "FragmentSpread",
                    "name": "AirportArrivalTimelineEvent",
                    "args": null
                  }
                ]
              },
              {
                "kind": "InlineFragment",
                "type": "LeaveForAirportTimelineEvent",
                "selections": [
                  {
                    "kind": "FragmentSpread",
                    "name": "LeaveForAirportTimelineEvent",
                    "args": null
                  }
                ]
              }
            ]
          }
        ]
      }
    ]
  },
  "operation": {
    "kind": "Operation",
    "name": "TimelineQuery",
    "argumentDefinitions": v0,
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "bookingTimeline",
        "storageKey": null,
        "args": v1,
        "concreteType": "BookingTimeline",
        "plural": false,
        "selections": [
          {
            "kind": "LinkedField",
            "alias": null,
            "name": "events",
            "storageKey": null,
            "args": null,
            "concreteType": null,
            "plural": true,
            "selections": [
              v2,
              v3,
              {
                "kind": "InlineFragment",
                "type": "DownloadInvoiceTimelineEvent",
                "selections": [
                  {
                    "kind": "ScalarField",
                    "alias": null,
                    "name": "invoiceUrl",
                    "args": null,
                    "storageKey": null
                  },
                  {
                    "kind": "ScalarField",
                    "alias": null,
                    "name": "numberPassengers",
                    "args": null,
                    "storageKey": null
                  },
                  {
                    "kind": "LinkedField",
                    "alias": null,
                    "name": "legs",
                    "storageKey": null,
                    "args": null,
                    "concreteType": "Leg",
                    "plural": true,
                    "selections": [
                      {
                        "kind": "LinkedField",
                        "alias": null,
                        "name": "departure",
                        "storageKey": null,
                        "args": null,
                        "concreteType": "RouteStop",
                        "plural": false,
                        "selections": v7
                      },
                      {
                        "kind": "LinkedField",
                        "alias": null,
                        "name": "arrival",
                        "storageKey": null,
                        "args": null,
                        "concreteType": "RouteStop",
                        "plural": false,
                        "selections": v7
                      },
                      v6
                    ]
                  }
                ]
              },
              {
                "kind": "InlineFragment",
                "type": "ArrivalTimelineEvent",
                "selections": [
                  {
                    "kind": "LinkedField",
                    "alias": null,
                    "name": "location",
                    "storageKey": null,
                    "args": null,
                    "concreteType": "RouteStop",
                    "plural": false,
                    "selections": [
                      {
                        "kind": "LinkedField",
                        "alias": null,
                        "name": "airport",
                        "storageKey": null,
                        "args": null,
                        "concreteType": "Location",
                        "plural": false,
                        "selections": [
                          v8,
                          v5,
                          v6
                        ]
                      }
                    ]
                  }
                ]
              },
              {
                "kind": "InlineFragment",
                "type": "DepartureTimelineEvent",
                "selections": [
                  v9,
                  {
                    "kind": "ScalarField",
                    "alias": null,
                    "name": "duration",
                    "args": null,
                    "storageKey": null
                  }
                ]
              },
              {
                "kind": "InlineFragment",
                "type": "DownloadETicketTimelineEvent",
                "selections": [
                  {
                    "kind": "ScalarField",
                    "alias": null,
                    "name": "ticketUrl",
                    "args": null,
                    "storageKey": null
                  }
                ]
              },
              {
                "kind": "InlineFragment",
                "type": "BookedFlightTimelineEvent",
                "selections": [
                  v9
                ]
              },
              {
                "kind": "InlineFragment",
                "type": "AirportArrivalTimelineEvent",
                "selections": [
                  {
                    "kind": "LinkedField",
                    "alias": null,
                    "name": "location",
                    "storageKey": null,
                    "args": null,
                    "concreteType": "RouteStop",
                    "plural": false,
                    "selections": [
                      {
                        "kind": "LinkedField",
                        "alias": null,
                        "name": "airport",
                        "storageKey": null,
                        "args": null,
                        "concreteType": "Location",
                        "plural": false,
                        "selections": [
                          v8,
                          v4,
                          v6
                        ]
                      }
                    ]
                  }
                ]
              }
            ]
          }
        ]
      }
    ]
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = 'e197557c95805d441d0153558d800c9a';
module.exports = node;
