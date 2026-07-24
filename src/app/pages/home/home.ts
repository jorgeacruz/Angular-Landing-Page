import { Component } from '@angular/core';

import Accordion from '../../components/accordion-letf/accordion-left';
import { AccordionRight } from '../../components/accordion-right/accordion-right';
import { Formulario } from '../../components/formulario/formulario';
import { CarousselComponent } from '../../components/caroussel/caroussel';
import { FaqAccordionComponent } from '../../components/faq-questions/faq-accordion';

@Component({
  selector: 'app-home',
  imports: [Formulario, CarousselComponent, FaqAccordionComponent],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {}
