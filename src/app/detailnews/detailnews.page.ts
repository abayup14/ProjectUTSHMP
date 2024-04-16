import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NewsService } from '../news.service';

@Component({
  selector: 'app-detailnews',
  templateUrl: './detailnews.page.html',
  styleUrls: ['./detailnews.page.scss'],
})
export class DetailnewsPage implements OnInit {
  index = 0
  news:any[] = []

  constructor(private route: ActivatedRoute, private newsService: NewsService) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.index = params["index"]
    })
    this.news = this.newsService.news
  }

}
