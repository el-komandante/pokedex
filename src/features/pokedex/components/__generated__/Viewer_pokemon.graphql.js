/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type {ConcreteFragment} from 'relay-runtime';
export type Viewer_pokemon = {|
  +name: ?string;
  +types: ?$ReadOnlyArray<?string>;
  +height: ?number;
  +weight: ?number;
  +image: ?string;
|};
*/


const fragment /*: ConcreteFragment*/ = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "Viewer_pokemon",
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
      "name": "types",
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
      "name": "image",
      "storageKey": null
    }
  ],
  "type": "Pokemon"
};

module.exports = fragment;
