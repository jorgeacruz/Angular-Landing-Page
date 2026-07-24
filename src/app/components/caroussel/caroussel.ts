import { Component, OnInit, OnDestroy, ChangeDetectionStrategy } from '@angular/core';
import { CommonModule } from '@angular/common';

export interface CarousselSlide {
  id: number;
  imageUrl: string;
  alt: string;
  /**
   * URL para onde o usuário será levado ao clicar na imagem.
   * - Link externo: 'https://www.seusite.com.br/promocao'
   * - Rota interna do Angular: '/promocoes/cap-fiador'
   * - Sem link: deixe como null
   */
  linkUrl: string | null;
  /**
   * Se true, abre o link em uma nova aba (target="_blank").
   * Só é aplicado para links externos (http/https).
   */
  openInNewTab?: boolean;
}

@Component({
  selector: 'app-caroussel',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './caroussel.html',
  styleUrls: ['./caroussel.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CarousselComponent implements OnInit, OnDestroy {
  // Troque as imagens abaixo pelas suas próprias imagens.
  // A primeira imagem é o banner "Seu Cap Fiador em até 48x" fornecido.
  // 👉 Personalize o "linkUrl" de cada slide com a URL desejada.
  // Deixe "linkUrl: null" se aquele slide não deve ser clicável.
  slides: CarousselSlide[] = [
    {
      id: 1,
      imageUrl: '/assets/images/banner1.jpg',
      alt: 'Seu Cap Fiador em até 48x - BB Parcelado de Contas',
      linkUrl: 'https://www.bb.com.br/site/imoveis/cap-fiador/',
      openInNewTab: true,
    },
    {
      id: 2,
      imageUrl: '/assets/images/banner2.png',
      alt: 'Segundo slide do carrossel',
      linkUrl: '/promocoes/segundo-slide',
      openInNewTab: true,
    },
    {
      id: 3,
      imageUrl: '/assets/images/banner1.jpg',
      alt: 'Terceiro slide do carrossel',
      linkUrl: null,
    },
  ];

  currentIndex = 0;

  /** Intervalo de rotação automática, em milissegundos (6 segundos). */
  private readonly intervalMs = 6000;
  private autoplayTimer: ReturnType<typeof setInterval> | null = null;

  ngOnInit(): void {
    this.startAutoplay();
  }

  ngOnDestroy(): void {
    this.stopAutoplay();
  }

  startAutoplay(): void {
    this.stopAutoplay();
    this.autoplayTimer = setInterval(() => {
      this.next();
    }, this.intervalMs);
  }

  stopAutoplay(): void {
    if (this.autoplayTimer) {
      clearInterval(this.autoplayTimer);
      this.autoplayTimer = null;
    }
  }

  next(): void {
    this.currentIndex = (this.currentIndex + 1) % this.slides.length;
  }

  previous(): void {
    this.currentIndex = (this.currentIndex - 1 + this.slides.length) % this.slides.length;
  }

  goTo(index: number): void {
    this.currentIndex = index;
    // Reinicia a contagem para que o slide selecionado
    // manualmente também fique 6s em exibição.
    this.startAutoplay();
  }

  trackBySlideId(_index: number, slide: CarousselSlide): number {
    return slide.id;
  }

  /** Verifica se o link é externo (http/https) para decidir o alvo (_blank). */
  isExternalLink(url: string | null): boolean {
    return !!url && /^https?:\/\//i.test(url);
  }

  /** Pausa o autoplay quando o mouse está sobre o carrossel. */
  onMouseEnter(): void {
    this.stopAutoplay();
  }

  onMouseLeave(): void {
    this.startAutoplay();
  }
}
