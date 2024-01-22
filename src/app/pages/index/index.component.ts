import { Component } from '@angular/core';
import { QuizModule } from '../../components/quiz/quiz.module';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-index',
  standalone: true,
  imports: [
    QuizModule,
    HttpClientModule
  ],
  templateUrl: './index.component.html',
  styleUrl: './index.component.css'
})
export class IndexComponent {

}
