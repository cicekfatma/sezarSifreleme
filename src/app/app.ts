import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.html',
  imports: [RouterOutlet, ],
  styleUrls: ['./app.css']
})
export class App {
  protected title = 'sezarSifreleme';
}
