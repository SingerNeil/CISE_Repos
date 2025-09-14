"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BookController = void 0;
const common_1 = require("@nestjs/common");
const book_service_1 = require("./book.service");
const create_book_dto_1 = require("./create-book.dto");
const console_1 = require("console");
let BookController = class BookController {
    bookService;
    constructor(bookService) {
        this.bookService = bookService;
    }
    test() {
        return this.bookService.test();
    }
    async findAll() {
        try {
            return this.bookService.findAll();
        }
        catch {
            throw new common_1.HttpException({
                status: common_1.HttpStatus.NOT_FOUND,
                error: 'No Books found',
            }, common_1.HttpStatus.NOT_FOUND, { cause: console_1.error });
        }
    }
    async findOne(id) {
        try {
            return this.bookService.findOne(id);
        }
        catch {
            throw new common_1.HttpException({
                status: common_1.HttpStatus.NOT_FOUND,
                error: 'No Book found',
            }, common_1.HttpStatus.NOT_FOUND, { cause: console_1.error });
        }
    }
    async addBook(createBookDto) {
        try {
            await this.bookService.create(createBookDto);
            return { message: 'Book added successfully' };
        }
        catch {
            throw new common_1.HttpException({
                status: common_1.HttpStatus.BAD_REQUEST,
                error: 'Unable to add this book',
            }, common_1.HttpStatus.BAD_REQUEST, { cause: console_1.error });
        }
    }
    async updateBook(id, createBookDto) {
        try {
            await this.bookService.update(id, createBookDto);
            return { message: 'Book updated successfully' };
        }
        catch {
            throw new common_1.HttpException({
                status: common_1.HttpStatus.BAD_REQUEST,
                error: 'Unable to update this book',
            }, common_1.HttpStatus.BAD_REQUEST, { cause: console_1.error });
        }
    }
    async deleteBook(id) {
        try {
            return await this.bookService.delete(id);
        }
        catch {
            throw new common_1.HttpException({
                status: common_1.HttpStatus.NOT_FOUND,
                error: 'No such a book',
            }, common_1.HttpStatus.NOT_FOUND, { cause: console_1.error });
        }
    }
};
exports.BookController = BookController;
__decorate([
    (0, common_1.Get)('/test'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], BookController.prototype, "test", null);
__decorate([
    (0, common_1.Get)('/'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], BookController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)('/:id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], BookController.prototype, "findOne", null);
__decorate([
    (0, common_1.Post)('/'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_book_dto_1.CreateBookDto]),
    __metadata("design:returntype", Promise)
], BookController.prototype, "addBook", null);
__decorate([
    (0, common_1.Put)('/:id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, create_book_dto_1.CreateBookDto]),
    __metadata("design:returntype", Promise)
], BookController.prototype, "updateBook", null);
__decorate([
    (0, common_1.Delete)('/:id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], BookController.prototype, "deleteBook", null);
exports.BookController = BookController = __decorate([
    (0, common_1.Controller)('api/books'),
    __metadata("design:paramtypes", [book_service_1.BookService])
], BookController);
//# sourceMappingURL=book.controller.js.map