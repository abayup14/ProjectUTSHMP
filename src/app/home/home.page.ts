import { Component } from '@angular/core';
import { NewsService } from '../news.service';
import { UserserviceService } from '../userservice.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  news:any[] = []
  now_login_username = ""

  constructor(private newsService: NewsService, private userService: UserserviceService) {}

  ngOnInit() {
    this.newsService.sortByDate(false)
    this.news = this.newsService.news
    this.now_login_username = this.userService.now_username_login
  }

  addLike(i: number) {
    this.news[i].jumlah_like++
  }
}
