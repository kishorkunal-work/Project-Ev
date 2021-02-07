import { Component } from '@angular/core';
import { ToasterService } from './service/toaster.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'insuranceApp';

  constructor(private toaster: ToasterService) {
    toaster.showSuccess("1", "2")
  }
}
