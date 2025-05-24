import { Component, Input } from '@angular/core';

@Component({
    selector: 'app-navlinks',
    templateUrl: './navlinks.component.html',
    styleUrls: ['./navlinks.component.scss'],
    standalone: false
})
export class NavlinksComponent {
@Input() data:any
}
