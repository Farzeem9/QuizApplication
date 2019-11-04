import { Injectable } from '@angular/core';
import { Http } from '../../../node_modules/@angular/http';
import { catchError, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class QuizService {

  
  constructor(private http: Http) { }

  getAllQuiz(){
    return JSON.parse(localStorage.getItem('allQuiz'));
  }

  setAllQuiz(quizzes){
    localStorage.setItem('allQuiz',JSON.stringify(quizzes));
  }

  generateQuiz(url){
    return this.http.get(url)
    .pipe(map(response => response.json()));
  }
}
