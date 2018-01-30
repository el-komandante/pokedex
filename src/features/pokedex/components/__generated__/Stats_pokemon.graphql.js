/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type {ConcreteFragment} from 'relay-runtime';
export type Stats_pokemon = {|
  +name: ?string;
  +height: ?number;
  +weight: ?number;
  +types: ?$ReadOnlyArray<?string>;
  +order: ?number;
  +description: ?string;
  +genus: ?string;
|};
*/


const fragment /*: ConcreteFragment*/ = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "Stats_pokemon",
  "selections": [
    {
      "kind": "ScalarField",
      "alias": null,
      "args": null,
      "name": "name",
      "storageKey": null
    },
    {
      "kind": "ScalarField",
      "alias": null,
      "args": null,
      "name": "height",
      "storageKey": null
    },
    {
      "kind": "ScalarField",
      "alias": null,
      "args": null,
      "name": "weight",
      "storageKey": null
    },
    {
      "kind": "ScalarField",
      "alias": null,
      "args": null,
      "name": "types",
      "storageKey": null
    },
    {
      "kind": "ScalarField",
      "alias": null,
      "args": null,
      "name": "order",
      "storageKey": null
    },
    {
      "kind": "ScalarField",
      "alias": null,
      "args": null,
      "name": "description",
      "storageKey": null
    },
    {
      "kind": "ScalarField",
      "alias": null,
      "args": null,
      "name": "genus",
      "storageKey": null
    }
  ],
  "type": "Pokemon"
};

module.exports = fragment;
