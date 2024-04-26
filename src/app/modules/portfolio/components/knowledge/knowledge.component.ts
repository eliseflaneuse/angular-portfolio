import { Component, signal } from '@angular/core';

// Interface
import { IKnowledge } from '../../interface/IKnowledge.interface';

@Component({
  selector: 'app-knowledge',
  standalone: true,
  imports: [],
  templateUrl: './knowledge.component.html',
  styleUrl: './knowledge.component.scss'
})
export class KnowledgeComponent {
  public arrayKnowledge = signal<IKnowledge[]>([
    {
      src: 'assets/icons/knowledge/html5.svg',
      alt: 'Html5 icon',
    },
    {
      src: 'assets/icons/knowledge/css3.svg',
      alt: 'Css3 icon',
    },
    {
      src: 'assets/icons/knowledge/javascript.svg',
      alt: 'JavaScript icon',
    },
    {
      src: 'assets/icons/knowledge/angular.svg',
      alt: 'Angular icon',
    },
    {
      src: 'assets/icons/knowledge/nodejs.svg',
      alt: 'Nodejs icon',
    },
  ]);
}
