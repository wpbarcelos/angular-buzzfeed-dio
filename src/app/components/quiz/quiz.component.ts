import { Component, OnInit } from '@angular/core';
import StudentQuizData, { QuizQuestion } from '../../interfaces/StudentQuizData';
import { QuizService } from '../../quiz.service';

@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.css']
})
export class QuizComponent implements OnInit {
  quizData!: StudentQuizData;
  currentQuestionIndex = 0;
  studentProfile: string | null = null;
  profileResult: string | null = null;

  constructor(private quizService: QuizService) { }

  ngOnInit(): void {
    this.quizService.getData().subscribe(data => {
      this.quizData = data;
    });
  }

  getCurrentQuestion(): QuizQuestion {
    return this.quizData?.questions[this.currentQuestionIndex];
  }

  onNextQuestion(response: string): void {
    this.quizService.setUserResponse(this.getCurrentQuestion().id, response);
    this.currentQuestionIndex++;

    if (this.currentQuestionIndex === this.quizData.questions.length) {
      this.studentProfile = this.quizService.calculateStudentProfile();
      this.profileResult = this.quizService.getProfileResult(this.studentProfile!, this.quizData);

      console.log(`O perfil do estudante é: ${this.studentProfile}`);
      console.log(`Resultado do perfil: ${this.profileResult}`);
    }
  }
}

