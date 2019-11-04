import { Question } from './../models/question';
import { Option } from './../models/option';
import { Component, OnInit, Inject } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';

@Component({
  selector: 'app-add-question',
  templateUrl: './add-question.component.html',
  styleUrls: ['./add-question.component.css']
})
export class AddQuestionComponent implements OnInit {

  selectedQuestionType: string;
  nestedQuestionType: string[] = [];
  
  constructor(public dialogRef: MatDialogRef<AddQuestionComponent>) { }

  ngOnInit() {
  }

  selectQuestionChangeHandler (event: any) {
    this.selectedQuestionType = event.value;
    //console.log(event);
  }

  nestedQuestionChangeHandler(event,iterator){
    if(event.target.value === 'mcq')
      this.nestedQuestionType[iterator] = 'mcq'; 
    else  
      this.nestedQuestionType[iterator] = 'value';
  }

  arrayOne(n: number): any[] {
    return Array(n);
  }

onNoClick(): void {
  this.dialogRef.close();
}

}
