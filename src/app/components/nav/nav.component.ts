import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: '[app-nav]',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss'],
  host: {
    '(document: click)': 'clickOutSide($event)',
  },
})
export class NavComponent implements OnInit {
  @ViewChild('menu') menu!: ElementRef;

  showClass = false;

  constructor() {}

  ngOnInit(): void {}

  menuToggle(event: any): void {
    this.showClass = !this.showClass;
    event.stopPropagation();
  }

  clickOutSide(event: any) {
    if (!this.menu.nativeElement.contains(event.target)) {
      this.showClass = false;
    }
  }
}
