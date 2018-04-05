import { CdkTableModule } from '@angular/cdk/table'
import { HttpClientModule } from '@angular/common/http'
import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'

import { AboutComponent } from './about/about.component'
import { AppRoutingModule } from './app-routing.module'
import { AppComponent } from './app.component'
import { AddressService } from './core/service/address.service'
import { CartService } from './core/service/cart.service'
import { CatalogService } from './core/service/catalog.service'
import { ConfigService } from './core/service/config.service'
import { PriceService } from './core/service/price.service'
import { PromoService } from './core/service/promo.service'
import { ShopService } from './core/service/shop.service'
import { HeaderComponent } from './header/header.component'
import { AngularJsReusablesComponent } from './reusables/angular-js-reusables/angular-js-reusables.component'
import { AngularReusablesComponent } from './reusables/angular-reusable/angular-reusables.component'
import { ReusablesComponent } from './reusables/reusables.component'
import { VanillaReusablesComponent } from './reusables/vanilla-reusables/vanilla-reusables.component'
import { SharedModule } from './shared/shared.module'
import { WildcardRoutingModule } from './wildcard-routing.module'

@NgModule({
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    CdkTableModule,
    HttpClientModule,
    SharedModule,
    AppRoutingModule,
    WildcardRoutingModule, //WildcardRoutingModule always last
  ],
  declarations: [
    AppComponent,
    HeaderComponent,
    AboutComponent,
    ReusablesComponent,
    VanillaReusablesComponent,
    AngularReusablesComponent,
    AngularJsReusablesComponent,
  ],
  providers: [
    AddressService,
    CartService,
    ConfigService,
    PriceService,
    CatalogService,
    PromoService,
    ShopService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
