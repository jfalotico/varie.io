import AppServiceProvider from "@app/providers/AppServiceProvider";
import StateServiceProvider from "varie/lib/state/ServiceProvider";
import ConfigServiceProvider from "varie/lib/config/ServiceProvider";
import RoutingServiceProvider from "varie/lib/routing/ServiceProvider";
import DocumentationProvider from "@app/providers/DocumentationProvider";
import AutoRegisterMixinsServiceProvider from "varie/lib/plugins/autoRegisterMixins/ServiceProvider";
import AutoRegisterFiltersServiceProvider from "varie/lib/plugins/autoRegisterFilters/ServiceProvider";
import AutoRegisterComponentsServiceProvider from "varie/lib/plugins/autoRegisterComponents/ServiceProvider";
import AutoRegisterDirectivesServiceProvider from "varie/lib/plugins/autoRegisterDirectives/ServiceProvider";

export default {
  /*
  |--------------------------------------------------------------------------
  | Mounting Element
  |--------------------------------------------------------------------------
  |
  | This is the element that the app will bind to
  |
  */
  mount: "#app",

  /*
  |--------------------------------------------------------------------------
  | App Name
  |--------------------------------------------------------------------------
  |
  */
  name: "Varie",

  /*
  |--------------------------------------------------------------------------
  | Application Timezone
  |--------------------------------------------------------------------------
  |
  | Here you may specify the default timezone for your application, which
  | will be used by the moment functions.
  |
  */
  timezone: "UTC",

  /*
  |--------------------------------------------------------------------------
  | Application Locale Configuration
  |--------------------------------------------------------------------------
  |
  |
  */
  locale: "en",

  /*
  |--------------------------------------------------------------------------
  | Service Providers
  |--------------------------------------------------------------------------
  | These will get auto loaded into the application to provide features
  |
  */
  providers: {
    /*
     * Framework Service Providers...
     */
    ConfigServiceProvider,
    StateServiceProvider,
    RoutingServiceProvider,
    AutoRegisterMixinsServiceProvider,
    AutoRegisterFiltersServiceProvider,
    AutoRegisterComponentsServiceProvider,
    AutoRegisterDirectivesServiceProvider,

    /*
     * Application Service Providers...
     */
    AppServiceProvider,
    DocumentationProvider
  }
};
