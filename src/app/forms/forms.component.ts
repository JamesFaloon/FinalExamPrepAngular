import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Validators } from '@angular/forms';
@Component({
  selector: 'app-forms',
  standalone: false,

  templateUrl: './forms.component.html',
  styleUrl: './forms.component.css'
})
export class FormsComponent {
  constructor(private http: HttpClient) { }
  title = 'Forms';
  studentForm !: FormGroup;


  Submit() {
    if (this.studentForm.valid) {
      this.http.post('http://localhost:8080/students/api/v1', this.studentForm.value).subscribe((response) => {
        console.log('Data sent successfully');
      });
      this.studentForm.reset();
    } else {
      console.log('Form is invalid');

    }

  }
  ngOnInit() {
    this.studentForm = new FormGroup({
      name: new FormControl(null, Validators.required)

    });
  }


}
