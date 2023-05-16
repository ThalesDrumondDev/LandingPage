import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  PopUp (){
    window.open('https://pro.quaddro.co/mariaeduardadrumond/servicos/wZ6DXN/', '_blank', 'width=900,height=800');
  }
}
