import { Component } from '@angular/core';

import { Formulario } from '../../components/formulario/formulario';
import { CarousselComponent } from '../../components/caroussel/caroussel';
import { FaqAccordionComponent } from '../../components/faq-questions/faq-accordion';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-home',
  imports: [Formulario, CarousselComponent, FaqAccordionComponent, RouterLink],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {}
