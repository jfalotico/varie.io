import ServiceProvider from "varie/lib/state/ServiceProvider";
import StateServiceInterface from "varie/lib/state/StateServiceInterface";

import MenuStore from "@store/menu/MenuStore";

/*
|--------------------------------------------------------------------------
| Store Service Provider
|--------------------------------------------------------------------------
|
*/
export default class StoreServiceProvider extends ServiceProvider {
  public $store: StateServiceInterface;

  map() {
    this.$store.registerStore(MenuStore);
  }
}
