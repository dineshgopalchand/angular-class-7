import { Component, OnInit } from '@angular/core';
import { FormGroup, FormArray, FormControl } from '@angular/forms';

@Component({
  selector: 'app-topics',
  templateUrl: './topics.component.html',
  styleUrls: ['./topics.component.css']
})
export class TopicsComponent implements OnInit {
  form: any;
  constructor() { }

  ngOnInit() {
    this.form = new FormGroup({
      topics : new FormArray([])
    });
  }

  get topicsArr() {
    return this.form.get('topics') as FormArray;
  }
  addTopic(input: HTMLInputElement) {
    console.log(input.value);
    this.topicsArr.push(new FormControl(input.value));
    // console.log(this.topicsArr);
    input.value = '';
  }
  removeTopic(topic: FormControl) {
    const indexOfTopic = this.topicsArr.controls.indexOf(topic);
    console.log(indexOfTopic);
    this.topicsArr.removeAt(indexOfTopic);
  }

}
