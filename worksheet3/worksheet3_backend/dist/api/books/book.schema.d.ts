import { Date, HydratedDocument } from 'mongoose';
export type BookDocument = HydratedDocument<Book>;
export declare class Book {
    title: string;
    isbn: string;
    author: string;
    description: string;
    published_date: Date;
    publisher: string;
    updated_date: Date;
}
export declare const BookSchema: import("mongoose").Schema<Book, import("mongoose").Model<Book, any, any, any, import("mongoose").Document<unknown, any, Book, any, {}> & Book & {
    _id: import("mongoose").Types.ObjectId;
} & {
    __v: number;
}, any>, {}, {}, {}, {}, import("mongoose").DefaultSchemaOptions, Book, import("mongoose").Document<unknown, {}, import("mongoose").FlatRecord<Book>, {}, import("mongoose").ResolveSchemaOptions<import("mongoose").DefaultSchemaOptions>> & import("mongoose").FlatRecord<Book> & {
    _id: import("mongoose").Types.ObjectId;
} & {
    __v: number;
}>;
