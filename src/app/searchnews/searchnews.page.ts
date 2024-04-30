import { Component, OnInit } from '@angular/core';
import { NewsService } from '../news.service';

@Component({
  selector: 'app-searchnews',
  templateUrl: './searchnews.page.html',
  styleUrls: ['./searchnews.page.scss'],
})
export class SearchnewsPage implements OnInit {

  judul_berita = ""
  news:any[] = []

  constructor(private newsService: NewsService) { }

  ngOnInit() {
    this.news = [];
  }

  getBerita() {
    if (this.judul_berita.trim() !== "") {
      this.news = this.newsService.news.filter(newsItem =>
        newsItem.judul.toLowerCase().includes(this.judul_berita.toLowerCase())
      );
    } else {
      this.news = [];
    }
  }

}
