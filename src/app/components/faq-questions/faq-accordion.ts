import { Component, OnInit, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';

export interface FaqItem {
  id: number;
  question: string;
  answer: string;
}

@Component({
  selector: 'app-faq-accordion',
  standalone: true,
  imports: [CommonModule, HttpClientModule],
  templateUrl: './faq-accordion.html',
  styleUrls: ['./faq-accordion.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FaqAccordionComponent implements OnInit {
  /**
   * Caminho do arquivo JSON com as perguntas e respostas.
   * Coloque o arquivo em: src/assets/faq-data.json
   * Para adicionar ou remover uma pergunta, basta editar
   * esse arquivo — não é necessário mexer neste componente.
   */
  private readonly dataUrl = 'assets/faq-data.json';

  items: FaqItem[] = [];
  isLoading = true;
  hasError = false;

  /** Nome do grupo de radios: garante que só um item fique aberto por vez. */
  readonly groupName = 'faq-accordion-group';

  constructor(
    private readonly http: HttpClient,
    private readonly cdr: ChangeDetectorRef,
  ) {}

  ngOnInit(): void {
    this.loadFaqItems();
  }

  loadFaqItems(): void {
    this.isLoading = true;
    this.hasError = false;

    this.http.get<FaqItem[]>(this.dataUrl).subscribe({
      next: (data) => {
        this.items = data;
        this.isLoading = false;
        this.cdr.markForCheck();
      },
      error: () => {
        this.isLoading = false;
        this.hasError = true;
        this.cdr.markForCheck();
      },
    });
  }

  /**
   * Adiciona uma nova pergunta em memória (na sessão atual).
   * Para persistir a pergunta permanentemente, adicione o mesmo
   * objeto dentro do arquivo assets/faq-data.json.
   */
  addQuestion(question: string, answer: string): void {
    const nextId = this.items.length > 0 ? Math.max(...this.items.map((item) => item.id)) + 1 : 1;

    this.items = [...this.items, { id: nextId, question, answer }];
    this.cdr.markForCheck();
  }

  /**
   * Remove uma pergunta em memória (na sessão atual) pelo id.
   * Para removê-la permanentemente, apague a entrada correspondente
   * no arquivo assets/faq-data.json.
   */
  removeQuestion(id: number): void {
    this.items = this.items.filter((item) => item.id !== id);
    this.cdr.markForCheck();
  }

  trackByFaqId(_index: number, item: FaqItem): number {
    return item.id;
  }
}
