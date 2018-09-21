import { Component } from '@angular/core';

import { OrdersPage } from '../orders/orders';
import { ContactPage } from '../contact/contact';
import { HomePage } from '../home/home';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = HomePage;
  tab2Root = OrdersPage;
  tab3Root = ContactPage;

  constructor() {

  }
}
