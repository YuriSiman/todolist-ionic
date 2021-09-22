import { Component } from '@angular/core';

import { Platform } from '@ionic/angular';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent {

  public appPages = [
    { title: 'Home', url: '/home', icon: 'home' },
    { title: 'Favoritos', url: '/folder/Favorites', icon: 'heart' },
    { title: 'Histórico', url: '/historic', icon: 'archive' },
    { title: 'Lixeira', url: '/folder/Trash', icon: 'trash' },
    { title: 'Sair', url: '/login', icon: 'log-out' },
  ];
  public labels = ['Pessoal', 'Trabalho', 'Estudos'];

  constructor(
    private platform: Platform,
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
    });
  }
}
