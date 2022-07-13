"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BookEntity = exports.PublisherEntity = exports.AuthorEntity = void 0;
const author_entity_1 = require("./author.entity");
Object.defineProperty(exports, "AuthorEntity", { enumerable: true, get: function () { return author_entity_1.AuthorEntity; } });
const book_entity_1 = require("./book.entity");
Object.defineProperty(exports, "BookEntity", { enumerable: true, get: function () { return book_entity_1.BookEntity; } });
const publisher_entity_1 = require("./publisher.entity");
Object.defineProperty(exports, "PublisherEntity", { enumerable: true, get: function () { return publisher_entity_1.PublisherEntity; } });
const entities = [author_entity_1.AuthorEntity, publisher_entity_1.PublisherEntity, book_entity_1.BookEntity];
exports.default = entities;
//# sourceMappingURL=index.js.map