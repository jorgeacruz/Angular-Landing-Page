import { Component } from '@angular/core';

import { Formulario } from '../../components/formulario/formulario';
import { CarousselComponent } from '../../components/caroussel/caroussel';
import { FaqAccordionComponent } from '../../components/faq-questions/faq-accordion';
import { RouterLink, Router } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [Formulario, CarousselComponent, FaqAccordionComponent, RouterLink],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {
  constructor(private readonly router: Router) {}

  irParaContato(): void {
    this.router.navigate(['/'], { fragment: 'Inicio' });
  }
}
