import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent {
  navlinks = [
    {id:1, title: 'Library', icon: 'Collection.svg' },
    {id:2, title: 'History', icon: 'History.svg' },
    {id:3,title: 'Updates', icon: 'NewRelease.svg' },
    {id:4, title: 'Browse', icon: 'Explore.svg' },
    {id:5, title: 'More', icon: 'meatball.svg' }
  ];
}
