import { Component, ElementRef, OnInit, Input } from '@angular/core';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import MyReactComponent from '..-react-components-MyReactComponent';

@Component({
  selector: 'app-react-wrapper',
  template: `<div #reactContainer></div>`,
  styleUrls: ['./react-wrapper.component.css']
})
export class ReactWrapperComponent implements OnInit {
  @Input() message: string = 'Hello from Angular!'; // Input property to pass dynamic data from Angular to React

  constructor(private el: ElementRef) {}

  ngOnInit() {
    this.renderReactComponent();
  }

  ngOnChanges() {
    this.renderReactComponent(); // Re-render React component when Angular inputs change
  }

  // Function to render React component into Angular component's DOM
  private renderReactComponent() {
    const container = this.el.nativeElement.querySelector('#reactContainer');
    if (container) {
      ReactDOM.render(
        React.createElement(MyReactComponent, { message: this.message }),
        container
      );
    }
  }
}
