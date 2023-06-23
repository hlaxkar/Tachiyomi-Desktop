import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-tachi-svg-icons',
  templateUrl: './tachi-svg-icons.component.html',
  styleUrls: ['./tachi-svg-icons.component.scss']
})
export class TachiSvgIconsComponent {
@Input() svgName:string ='';
ngOnInit(){
  this.svgName = this.svgName.toLowerCase()
}
}
