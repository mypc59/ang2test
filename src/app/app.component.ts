import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app works!';
  name = "CK";

  words:Array<string>=[
    '哦，听说楼主很帅？',
    '是吗，没见过啊'
  ];
}
