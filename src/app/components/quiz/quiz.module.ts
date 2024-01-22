// quiz.module.ts
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { QuizComponent } from './quiz.component';

@NgModule({
  declarations: [QuizComponent],
  imports: [CommonModule],
  exports: [QuizComponent], // Exporte o componente se você quiser usá-lo em outros módulos
})
export class QuizModule {}
