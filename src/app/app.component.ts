import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'firstProject';
  test = "this is a test";
  randOutput: string =""
  rand = () => {
    let randNum: string = "";
    for (let i: number = 0; i < 10; i++) {
      randNum += Math.floor(Math.random() * 10).toString()
    }
    this.randOutput = randNum
  }
}
