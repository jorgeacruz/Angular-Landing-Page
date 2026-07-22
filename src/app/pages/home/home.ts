import { Component } from '@angular/core';

import Accordion from '../../components/accordion-letf/accordion-left';
import { AccordionRight } from '../../components/accordion-right/accordion-right';
import { Formulario } from '../../components/formulario/formulario';

@Component({
  selector: 'app-home',
  imports: [Accordion, AccordionRight, Formulario],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {}
