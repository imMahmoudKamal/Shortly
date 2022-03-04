import { Component, OnInit } from '@angular/core';

@Component({
  selector: '[app-statistics]',
  templateUrl: './statistics.component.html',
  styleUrls: ['./statistics.component.scss'],
})
export class StatisticsComponent implements OnInit {
  cards: { iconUrl: string; title: string; text: string }[] = [
    {
      iconUrl: 'icon-brand-recognition.svg',
      title: 'Brand Recognition',
      text: 'Boost your brand recognition with each click. Generic linksdon’t mean a thing. Branded links help instil confidence in your content.',
    },
    {
      iconUrl: 'icon-detailed-records.svg',
      title: 'Detailed Records',
      text: 'Gain insights into who is clicking your links. Knowing when and where people engage with your content helps inform better decisions.',
    },
    {
      iconUrl: 'icon-fully-customizable.svg',
      title: 'Fully Customizable',
      text: 'Improve brand awareness and content discoverability through customizable links, supercharging audience engagement.',
    },
  ];

  constructor() {}

  ngOnInit(): void {}
}
