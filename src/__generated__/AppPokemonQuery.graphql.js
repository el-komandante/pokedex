/**
 * @flow
 * @relayHash c30fef2049f27207334c96ab3bf3bca1
 */

/* eslint-disable */

'use strict';

/*::
import type {ConcreteBatch} from 'relay-runtime';
export type AppPokemonQueryResponse = {|
  +pokemons: ?$ReadOnlyArray<?{|
    +name: ?string;
  |}>;
|};
*/


/*
query AppPokemonQuery {
  pokemons(first: 50) {
    name
    id
  }
}
*/

const batch /*: ConcreteBatch*/ = {
  "fragment": {
    "argumentDefinitions": [],
    "kind": "Fragment",
    "metadata": null,
    "name": "AppPokemonQuery",
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "args": [
          {
            "kind": "Literal",
            "name": "first",
            "value": 50,
            "type": "Int!"
          }
        ],
        "concreteType": "Pokemon",
        "name": "pokemons",
        "plural": true,
        "selections": [
          {
            "kind": "ScalarField",
            "alias": null,
            "args": null,
            "name": "name",
            "storageKey": null
          }
        ],
        "storageKey": "pokemons{\"first\":50}"
      }
    ],
    "type": "Query"
  },
  "id": null,
  "kind": "Batch",
  "metadata": {},
  "name": "AppPokemonQuery",
  "query": {
    "argumentDefinitions": [],
    "kind": "Root",
    "name": "AppPokemonQuery",
    "operation": "query",
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "args": [
          {
            "kind": "Literal",
            "name": "first",
            "value": 50,
            "type": "Int!"
          }
        ],
        "concreteType": "Pokemon",
        "name": "pokemons",
        "plural": true,
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
            "name": "id",
            "storageKey": null
          }
        ],
        "storageKey": "pokemons{\"first\":50}"
      }
    ]
  },
  "text": "query AppPokemonQuery {\n  pokemons(first: 50) {\n    name\n    id\n  }\n}\n"
};

module.exports = batch;
