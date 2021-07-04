import { Component } from '@angular/core';
import { NewsService } from './services/news.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  title = 'NewsApp';
  listNew: any[] = [];
  loading = false;

  constructor(
    private _newsService: NewsService
  ) {}

  searchNews(params: any) {
    this.loading = true;
    this.listNew = [];

    setTimeout(() => {
      this._newsService.getNews(params).subscribe(data => {
        this.loading = false;
        this.listNew = data.articles;
      }, error => {
        console.log(error);
        this.loading = false;
      });
    }, 1000);
  }
}
