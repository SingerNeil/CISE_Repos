import { Book } from './book.schema';
import { Model } from 'mongoose';
import { CreateBookDto } from './create-book.dto';
export declare class BookService {
    private bookModel;
    constructor(bookModel: Model<Book>);
    test(): string;
    findAll(): Promise<Book[]>;
    findOne(id: string): Promise<Book>;
    create(createBookDto: CreateBookDto): Promise<import("mongoose").Document<unknown, {}, Book, {}, {}> & Book & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    }>;
    update(id: string, createBookDto: CreateBookDto): Promise<(import("mongoose").Document<unknown, {}, Book, {}, {}> & Book & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    }) | null>;
    delete(id: string): Promise<(import("mongoose").Document<unknown, {}, Book, {}, {}> & Book & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    }) | null>;
}
