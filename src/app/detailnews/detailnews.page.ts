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
  // news:any[] = []
  item:any

  constructor(private route: ActivatedRoute, private newsService: NewsService) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.index = params["index"]
    })
    this.item = this.getNewsByID(this.index)
    // this.item = this.newsService.news[this.index]
  }

  getNewsByID(id: number) {
    return this.newsService.news.find(item => item.id === id)
  }

}
