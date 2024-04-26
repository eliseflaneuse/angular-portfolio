import { Component, signal } from '@angular/core';

// Interface
import { IExperiences } from '../../interface/IExperiences.interface';

@Component({
  selector: 'app-experiences',
  standalone: true,
  imports: [],
  templateUrl: './experiences.component.html',
  styleUrl: './experiences.component.scss'
})
export class ExperiencesComponent {
  public arrayExperiences = signal<IExperiences[]>([
    {
      summary: {
        strong: 'Fullstack Developer',
        p: 'IBM | Aug 23 - Present',
      },
      text: '<p>Text</p>',
    },
    {
      summary: {
        strong: 'Front-end Developer',
        p: 'Flaneuse Studios | Jun 23 - Present',
      },
      text: '<p>Text</p>',
    },
  
  ]);
}
