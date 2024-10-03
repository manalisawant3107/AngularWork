import { Component } from '@angular/core';

@Component({
  selector: 'app-student-feedback',
  templateUrl: './student-feedback.component.html',
  styleUrls: ['./student-feedback.component.css']
})
export class StudentFeedbackComponent {

  number:any=50;

  num:number=1234.87667;

  student:any={
    name:"manali",
    age:23
  }

  birthDate:any;

  genderMapping:any={
    male:"Mr.",
    female:"Ms.",
    other:"NA"
  }

  gender="male";


  stud_name: any = "";
  batch_number: any = "";
  feedback: any = "";
  feedbackList: any[] = [];

  // Flag to control table visibility
  showTable: boolean = false;

  submitForm() {
    // Push the current feedback into the feedbackList array
    this.feedbackList.push({
      stud_name: this.stud_name,
      batch_number: this.batch_number,
      feedback: this.feedback
    });

    // Clear the input fields after submission
    this.stud_name = "";
    this.batch_number = "";
    this.feedback = "";

    // Show the table after feedback submission
    this.showTable = true;
  }

  deleteFeedback(index: number) {
    if (confirm('Are you sure you want to delete this feedback?')) {
      this.feedbackList.splice(index, 1);
    }
    if(this.feedbackList.length<=0){
      this.showTable= false;
    }
  }
}
