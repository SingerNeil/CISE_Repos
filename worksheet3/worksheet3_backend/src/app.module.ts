import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { ConfigModule } from '@nestjs/config';
import { BookModule } from './api/books/book.module';

// @Module({
//   imports: [
//     ConfigModule.forRoot(),
//     MongooseModule.forRoot(
//       'mongodb+srv://ming_db_user:xcm040423@cluster0.hzkai4w.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0',
//     ),
//   ],
//   controllers: [AppController],
//   providers: [AppService],
// })
// export class AppModule {}

@Module({
  imports: [
    ConfigModule.forRoot(),
    MongooseModule.forRoot(
      'mongodb+srv://ming_db_user:xcm040423@cluster0.hzkai4w.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0',
    ),
    BookModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
