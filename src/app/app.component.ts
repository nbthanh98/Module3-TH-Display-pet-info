import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'myProject';

  demoBinding = false;

  onChangeFontSize() {
    this.demoBinding = !this.demoBinding;
  }
}
