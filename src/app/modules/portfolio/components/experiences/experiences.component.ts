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
      text: '<p>I developed and maintained applications using TypeScript and Angular, seamlessly integrated Microsoft Azure services, collaborated with cross-functional teams, demonstrated strong problem-solving skills, adapted swiftly to dynamic environments, and committed to continuous learning and incorporating emerging technologies, with a focus on TDD and CI/CD practices in an Angular and TypeScript environment.</p>',
    },
    {
      summary: {
        strong: 'Front-end Developer',
        p: 'Flaneuse Studios | Jun 23 - Present',
      },
      text: '<p>Full-stack developer specializing in website development. I provide services ranging from conception and design to implementation and maintenance of web projects. My experience includes using various front-end and back-end technologies to create efficient and customized digital solutions for my clients.</p>',
    },
  
  ]);
}
