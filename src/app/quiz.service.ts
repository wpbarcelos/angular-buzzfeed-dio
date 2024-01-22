// quiz.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import StudentQuizData, { QuizResults } from './interfaces/StudentQuizData';

@Injectable({
  providedIn: 'root',
})
export class QuizService {
  private readonly dataUrl = 'assets/studentData.json';
  private userResponses: { [questionId: number]: string } = {};

  constructor(private http: HttpClient) { }

  getData(): Observable<StudentQuizData> {
    return this.http.get<StudentQuizData>(this.dataUrl);
  }

  getUserResponses(): { [questionId: number]: string } {
    return this.userResponses;
  }

  setUserResponse(questionId: number, response: string): void {
    this.userResponses[questionId] = response;
  }

  calculateStudentProfile(): string {
    const userResponses = this.getUserResponses();

    // Contagem das respostas para cada opção
    const counts: { [key: string]: number } = {};
    Object.values(userResponses).forEach(response => {
      counts[response] = (counts[response] || 0) + 1;
    });

    // Determinar a opção com a maior contagem
    const maxOption = Object.keys(counts).reduce((a, b) => (counts[a] > counts[b] ? a : b), 'indeciso');

    return maxOption;

    // const userResponses = this.getUserResponses();

    // // Count the number of "a" and "b" responses
    // const counts: { [key: string]: number } = {};
    // Object.values(userResponses).forEach(response => {
    //   counts[response] = (counts[response] || 0) + 1;
    // });

    // // Determine the profile based on the option with the most responses
    // const profile = Object.keys(counts).reduce((maxOption, option) => {
    //   return counts[option]! > counts[maxOption]! ? option : maxOption;
    // }, 'indeciso');

    // return profile;
  }
  // getProfileResult(profile: string, data: StudentQuizData): string {
  //   return data.results[profile as keyof<typeof QuizResults>] || 'Nenhum resultado encontrado para este perfil.';
  // }
  getProfileResult(profile: string, data: StudentQuizData): string {
    // Certifique-se de acessar QuizResults corretamente
    return (data.results as QuizResults)[profile as keyof QuizResults] || 'Nenhum resultado encontrado para este perfil.';
  }
}
