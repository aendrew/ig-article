import { Component } from '@angular/core';
import { IgHeaderComponent } from './ig-header';
import { IgFooterComponent } from './ig-footer';

@Component({
  moduleId: module.id,
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.css'],
  directives: [IgHeaderComponent, IgFooterComponent]
})
export class AppComponent {}
