import { Controller, Get, Param } from '@nestjs/common';
import { ARTICLES } from './dummydata/articles';

@Controller()
export class AppController {
  getHello(): any {
    throw new Error('Method not implemented.');
  }
  @Get('/api/articles')
  getArticles() {
    return ARTICLES;
  }

  @Get('/api/articles/:id')
  getArticleById(@Param('id') id: string) {
    return ARTICLES.find((article) => article.id === id);
  }
}
