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
Object.defineProperty(exports, "__esModule", { value: true });
exports.BookEntity = void 0;
const typeorm_1 = require("typeorm");
const author_entity_1 = require("./author.entity");
const publisher_entity_1 = require("./publisher.entity");
let BookEntity = class BookEntity {
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], BookEntity.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({
        nullable: false,
    }),
    __metadata("design:type", Number)
], BookEntity.prototype, "isbn", void 0);
__decorate([
    (0, typeorm_1.Column)({
        nullable: false,
        default: '',
    }),
    __metadata("design:type", String)
], BookEntity.prototype, "name", void 0);
__decorate([
    (0, typeorm_1.Column)({
        nullable: false,
    }),
    __metadata("design:type", Number)
], BookEntity.prototype, "year", void 0);
__decorate([
    (0, typeorm_1.Column)({
        nullable: false,
        default: '',
    }),
    __metadata("design:type", String)
], BookEntity.prototype, "category", void 0);
__decorate([
    (0, typeorm_1.Column)({
        nullable: false,
        default: '',
        name: 'photo_url',
    }),
    __metadata("design:type", String)
], BookEntity.prototype, "photoUrl", void 0);
__decorate([
    (0, typeorm_1.Column)({
        name: 'author_id',
    }),
    __metadata("design:type", Number)
], BookEntity.prototype, "authorId", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => author_entity_1.AuthorEntity, (author) => author.books, { eager: true }),
    (0, typeorm_1.JoinColumn)({ name: 'author_id' }),
    __metadata("design:type", author_entity_1.AuthorEntity)
], BookEntity.prototype, "author", void 0);
__decorate([
    (0, typeorm_1.Column)({
        name: 'publisher_id',
    }),
    __metadata("design:type", Number)
], BookEntity.prototype, "publisherId", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => publisher_entity_1.PublisherEntity, (publisher) => publisher.books, {
        eager: true,
    }),
    (0, typeorm_1.JoinColumn)({ name: 'publisher_id' }),
    __metadata("design:type", publisher_entity_1.PublisherEntity)
], BookEntity.prototype, "publisher", void 0);
BookEntity = __decorate([
    (0, typeorm_1.Entity)()
], BookEntity);
exports.BookEntity = BookEntity;
//# sourceMappingURL=book.entity.js.map