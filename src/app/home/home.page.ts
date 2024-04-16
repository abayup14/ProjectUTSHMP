import { Component } from '@angular/core';
import { NewsService } from '../news.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  news:any[] = []

  constructor(private newsService: NewsService) {}

  ngOnInit() {
    this.news = this.newsService.news
  }
}
