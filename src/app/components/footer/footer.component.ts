import { Component, OnInit } from '@angular/core';

@Component({
  selector: '[app-footer]',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
})
export class FooterComponent implements OnInit {
  footerSections: { title: string; links: string[] }[] = [
    {
      title: 'Features',
      links: ['Link Shortening', 'Branded Links', 'Analytics'],
    },
    { title: 'Resources', links: ['Blog', 'Developers', 'Support'] },
    {
      title: 'Company',
      links: ['About', 'Our Team', 'Careers', 'Contact'],
    },
  ];

  socialIcons: string[] = [
    'icon-facebook',
    'icon-twitter',
    'icon-pinterest',
    'icon-instagram',
  ];

  constructor() {}

  ngOnInit(): void {}

  getData() {
    //
  }
}
