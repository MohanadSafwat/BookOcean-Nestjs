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
exports.PublisherService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("../typeorm");
const typeorm_3 = require("typeorm");
let PublisherService = class PublisherService {
    constructor(publisherRpository) {
        this.publisherRpository = publisherRpository;
    }
    getAllPublishers() {
        return this.publisherRpository.find();
    }
    getPublisherById(publisherId) {
        return this.publisherRpository.findOne({
            where: { id: publisherId },
            relations: ['books'],
        });
    }
    createPublisher(publisherDto) {
        const newPublisher = this.publisherRpository.create(publisherDto);
        return this.publisherRpository.save(newPublisher);
    }
};
PublisherService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(typeorm_2.PublisherEntity)),
    __metadata("design:paramtypes", [typeorm_3.Repository])
], PublisherService);
exports.PublisherService = PublisherService;
//# sourceMappingURL=publisher.service.js.map