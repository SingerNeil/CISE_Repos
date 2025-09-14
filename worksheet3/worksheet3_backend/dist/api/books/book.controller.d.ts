import { BookService } from './book.service';
import { CreateBookDto } from './create-book.dto';
export declare class BookController {
    private readonly bookService;
    constructor(bookService: BookService);
    test(): string;
    findAll(): Promise<import("./book.schema").Book[]>;
    findOne(id: string): Promise<import("./book.schema").Book>;
    addBook(createBookDto: CreateBookDto): Promise<{
        message: string;
    }>;
    updateBook(id: string, createBookDto: CreateBookDto): Promise<{
        message: string;
    }>;
    deleteBook(id: string): Promise<(import("mongoose").Document<unknown, {}, import("./book.schema").Book, {}, {}> & import("./book.schema").Book & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    }) | null>;
}
