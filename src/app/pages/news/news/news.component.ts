import { Component, OnInit } from '@angular/core';
import { LastNewsService } from '../../../core/services/last-news.service';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.scss']
})
export class NewsComponent implements OnInit {

  articles = [];

  articlesUs = [];

  article = null;

  news = [];

  saveNews: boolean = false;

  constructor(private newsService: LastNewsService) { }

  ngOnInit(): void {
    this.listNews();
    this.listNewsUs();
  }

  listNews() {
    this.newsService.getNews().subscribe(res => {
      this.articles = res.articles;
    }, err => {
      console.log(err);
    })
  }

  listNewsUs() {
    this.newsService.getNewsUs().subscribe(res => {
      this.articlesUs = res.articles;
    }, err => {
      console.log(err);
    })
  }

  saveNew(article) {
    this.newsService.saveNews(article).subscribe(res => {
      this.news.push(article);
    }, err => {
      console.log(err);
    })
  }

}
