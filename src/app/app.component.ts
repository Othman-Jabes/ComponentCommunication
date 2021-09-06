import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  name = 'Othman Jabes';
  val = 'My Nice Input';
  title = 'ComponentCommunication';
  num=5;
  red = true;
  green = false;
  bgcolor = false;
  textValue = '';
  inputValue(){
    return 'Value From Function';
  }
  changeColor(){
    this.green = !this.green;
    this.red = !this.red;
  }
  changeBackgroundColor(){
    this.bgcolor = !this.bgcolor;
  }
  onClickButton(el: any){
    console.log(el)
  }
  showMsg(event : any){
    this.textValue = event;
    if (this.textValue === 'Othman'){
      alert('Welcome ' + this.textValue);
    }
  }
}
