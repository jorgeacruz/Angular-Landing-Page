import { Component } from '@angular/core';
import { CanalSocial } from '../../components/canal-social/canal-social';
import Accordion from '../../components/accordion-letf/accordion-left';
import { AccordionRight } from '../../components/accordion-right/accordion-right';

@Component({
  selector: 'app-home',
  imports: [CanalSocial, Accordion, AccordionRight],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {}
