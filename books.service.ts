import { Injectable } from '@nestjs/common';
import { CreateBookDto } from './dto/create-book.dto';
import { Book } from './entities/book.entity';

@Injectable()
export class BooksService {
  private books: Book[] = [];

  create(createBookDto: CreateBookDto): Book {
    const newBook: Book = { id: Date.now(), ...createBookDto };
    this.books.push(newBook);
    return newBook;
  }

  findAll(): Book[] {
    return this.books;
  }
}
export class CreateBookDto {
  title: string;
  author: string;
  publishedDate: string;
}
export class Book {
  id: number;
  title: string;
  author: string;
  publishedDate: string;
}
