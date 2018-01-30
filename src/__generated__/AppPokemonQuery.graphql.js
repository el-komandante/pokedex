/**
 * @flow
 * @relayHash 270bc4e97c04bf50761282748f1a804d
 */

/* eslint-disable */

'use strict';

/*::
import type {ConcreteBatch} from 'relay-runtime';
export type AppPokemonQueryResponse = {|
  +pokemon: ?{| |};
|};
*/


/*
query AppPokemonQuery(
  $name: String
) {
  pokemon(name: $name) {
    ...Viewer_pokemon
    ...Stats_pokemon
  }
}

fragment Viewer_pokemon on Pokemon {
  name
  types
  height
  weight
  image
}

fragment Stats_pokemon on Pokemon {
  name
  height
  weight
  types
  order
  description
  genus
}
*/

const batch /*: ConcreteBatch*/ = {
  "fragment": {
    "argumentDefinitions": [
      {
        "kind": "LocalArgument",
        "name": "name",
        "type": "String",
        "defaultValue": null
      }
    ],
    "kind": "Fragment",
    "metadata": null,
    "name": "AppPokemonQuery",
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "args": [
          {
            "kind": "Variable",
            "name": "name",
            "variableName": "name",
            "type": "String"
          }
        ],
        "concreteType": "Pokemon",
        "name": "pokemon",
        "plural": false,
        "selections": [
          {
            "kind": "FragmentSpread",
            "name": "Viewer_pokemon",
            "args": null
          },
          {
            "kind": "FragmentSpread",
            "name": "Stats_pokemon",
            "args": null
          }
        ],
        "storageKey": null
      }
    ],
    "type": "Query"
  },
  "id": null,
  "kind": "Batch",
  "metadata": {},
  "name": "AppPokemonQuery",
  "query": {
    "argumentDefinitions": [
      {
        "kind": "LocalArgument",
        "name": "name",
        "type": "String",
        "defaultValue": null
      }
    ],
    "kind": "Root",
    "name": "AppPokemonQuery",
    "operation": "query",
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "args": [
          {
            "kind": "Variable",
            "name": "name",
            "variableName": "name",
            "type": "String"
          }
        ],
        "concreteType": "Pokemon",
        "name": "pokemon",
        "plural": false,
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
        "storageKey": null
      }
    ]
  },
  "text": "query AppPokemonQuery(\n  $name: String\n) {\n  pokemon(name: $name) {\n    ...Viewer_pokemon\n    ...Stats_pokemon\n  }\n}\n\nfragment Viewer_pokemon on Pokemon {\n  name\n  types\n  height\n  weight\n  image\n}\n\nfragment Stats_pokemon on Pokemon {\n  name\n  height\n  weight\n  types\n  order\n  description\n  genus\n}\n"
};

module.exports = batch;
