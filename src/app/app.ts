import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Menu } from './components/menu/menu';
import { Footer } from './components/footer/footer';
import { CanalSocial } from './components/canal-social/canal-social';

@Component({
  selector: 'app-root',
  imports: [Menu, Footer, CanalSocial],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  protected readonly title = signal('CapFiador - A chave para ser Feliz');
}
