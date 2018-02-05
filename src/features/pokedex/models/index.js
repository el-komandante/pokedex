import { observable, action } from 'mobx'

export default class PokedexModel {
  @observable pokemon = 'rayquaza'

  @action changePokemon = pokemon => this.pokemon = pokemon
}