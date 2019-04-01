import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-sample',
  templateUrl: './sample.component.html',
  styleUrls: ['./sample.component.css', './samply-custom.css'],
  styles : ['p{color: #ff0000}', 'p{font-weight:bold}'],
  // encapsulation : ViewEncapsulation.ShadowDom
  // encapsulation : ViewEncapsulation.Native/none
  // encapsulation : ViewEncapsulation.Emulated
})
export class SampleComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
