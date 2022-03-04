import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: '[app-card]',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
})
export class CardComponent implements OnInit {
  @Input() data: any;
  text: string = 'Copy';

  constructor() {}

  ngOnInit(): void {}

  copyLink() {
    copyToClipboard(this.data.shortLink)
      .then(() => {
        // copied
        this.text = 'Copied!';
      })
      .catch(() => {
        // error
        console.error("Couldn't copy the link");
      });
  }
}

function copyToClipboard(text: string) {
  return new Promise((resolve, reject) => {
    const textArea = document.createElement('textarea');

    document.body.appendChild(textArea);
    textArea.value = text;
    textArea.select();
    document.execCommand('copy');
    document.body.removeChild(textArea);

    if (document.execCommand('copy')) {
      resolve(true);
    } else {
      reject(false);
    }
  });
}
