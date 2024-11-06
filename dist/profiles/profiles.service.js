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
exports.ProfilesService = void 0;
const common_1 = require("@nestjs/common");
const profiles_repository_1 = require("./profiles.repository");
let ProfilesService = class ProfilesService {
    constructor(profilesRepository) {
        this.profilesRepository = profilesRepository;
    }
    async getAll(page, limit) {
        const skip = Math.max(0, (page - 1) * limit);
        const profiles = await this.profilesRepository.getAll(page, skip, limit);
        return profiles;
    }
    async getById(id) {
        const profile = await this.profilesRepository.findById(id);
        if (!profile) {
            throw new common_1.NotFoundException(`Profile with ID ${id} not found`);
        }
        return profile;
    }
    async create(createProfileDto) {
        const { email, emailConfirm } = createProfileDto;
        if (email !== emailConfirm) {
            throw new common_1.BadRequestException('Emails do not match');
        }
        return this.profilesRepository.create(createProfileDto);
    }
    async update(id, updateProfileDto) {
        return this.profilesRepository.update(id, updateProfileDto);
    }
    async delete(id) {
        try {
            return await this.profilesRepository.delete(id);
        }
        catch {
            throw new common_1.NotFoundException(`Profile with ID ${id} not found or already deleted`);
        }
    }
};
exports.ProfilesService = ProfilesService;
exports.ProfilesService = ProfilesService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [profiles_repository_1.ProfilesRepository])
], ProfilesService);
//# sourceMappingURL=profiles.service.js.map