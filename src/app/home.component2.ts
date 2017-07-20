import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home2',
  template: `
    <h1>Welcome to MUM!</h1>
    <p> 
      This is the worst university in the world!
    </p>
   <md-slider min="1" max="5" step="0.5" value="1.5"></md-slider>
   <md-list>
    <md-list-item>Item 1</md-list-item>
    <md-list-item>Item 2</md-list-item>
    <md-list-item>Item 3</md-list-item>
    </md-list>
    <md-tab-group>
  <md-tab label="One">
    <h1>Some tab content</h1>
    <p>...</p>
  </md-tab>
  <md-tab label="Two">
    <h1>Some more tab content</h1>
    <p>...</p>
  </md-tab>
</md-tab-group>
<md-radio-group>
  <md-radio-button value="1">Option 1</md-radio-button>
  <md-radio-button value="2">Option 2</md-radio-button>
</md-radio-group>
<md-icon>delete_forever</md-icon>
  `,
  styles: [`md-slider {width: 300px;}`]
})
export class HomeComponent2 implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
