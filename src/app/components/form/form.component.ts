import { Component, OnInit } from '@angular/core';
import { ShortService } from './../../services/short.service';

@Component({
  selector: '[app-form]',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss'],
})
export class FormComponent implements OnInit {
  search: string = '';
  erorrMessage: string = `Please add a link`;
  showError: boolean = false;
  recentLinks: { fullLink: string; shortLink: string }[] = [];
  loadding: boolean = false;

  constructor(private shortService: ShortService) {}

  ngOnInit(): void {
    // check if there is data in local storage
    if (localStorage['recentLinks']) {
      this.recentLinks = JSON.parse(localStorage['recentLinks']);
    }
  }

  onSearch() {
    // if field is empty
    if (!this.search.trim()) {
      this.erorrMessage = `Please add a link`;
      this.showError = true;
      return;
    }

    // validate url
    const urlRegEx: RegExp = /^(https?|chrome):\/\/[^\s$.?#].[^\s]*$/;
    if (!urlRegEx.test(this.search.trim())) {
      this.erorrMessage = `Please enter a valid link`;
      this.showError = true;
      return;
    }

    // remove erorr class
    this.showError = false;

    // show spinner
    this.loadding = true;

    // call the api
    this.shortService.shortLink(this.search.trim()).subscribe((data) => {
      if (data) {
        // hide spinner
        this.loadding = false;
      }

      const obj = {
        fullLink: data.result.original_link,
        shortLink: data.result.full_short_link2,
      };
      // check if array has more than 5 items
      if (this.recentLinks.length === 5) {
        this.recentLinks.splice(0, 1); // remove first element
        this.recentLinks.push(obj); // push obj to end of array
      } else {
        this.recentLinks.push(obj);
      }

      // save to local storage
      localStorage['recentLinks'] = JSON.stringify(this.recentLinks);

      // clear search field
      this.search = '';
    });
  }
}
