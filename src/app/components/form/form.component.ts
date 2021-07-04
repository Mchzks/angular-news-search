import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  @Output() paramsSelected = new EventEmitter<any>();

  categorySelected = 'general';
  countrySelected = 'ar';

  categories: any[] = [
    { value: 'general', name: 'General' },
    { value: 'business', name: 'Business' },
    { value: 'entertainment', name: 'Entertaiment' },
    { value: 'health', name: 'Health' },
    { value: 'science', name: 'Science' },
    { value: 'sports', name: 'Sports' },
    { value: 'technology', name: 'Technology' }
  ];
  countries: any[] = [
    { value: 'ar', name: 'Argentina' },
    { value: 'co', name: 'Colombia' },
    { value: 'br', name: 'Brasil' },
    { value: 'fr', name: 'France' },
    { value: 'hu', name: 'Hungry' },
    { value: 'mx', name: 'Mexico' },
    { value: 'gb', name: 'United Kingdom' }
  ];

  constructor() { }

  ngOnInit(): void {
  }

  searchNews() {
    const params = {
      category: this.categorySelected,
      country: this.countrySelected
    };

    this.paramsSelected.emit(params);
  }

}
