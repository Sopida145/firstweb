import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected title = 'POPO';
  me = {
      name: 'POPO',
      description: 'A simple web app to demonstrate Angular capabilities.',
      Image: 'https://angular.io/assets/images/logos/angular/angular.png',
      
}
}
