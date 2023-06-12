import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-navlinks',
  templateUrl: './navlinks.component.html',
  styleUrls: ['./navlinks.component.scss']
})
export class NavlinksComponent {
@Input() data:any
}
