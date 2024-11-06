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
exports.ProfileDto = void 0;
const class_validator_1 = require("@nestjs/class-validator");
const swagger_1 = require("@nestjs/swagger");
class ProfileDto {
}
exports.ProfileDto = ProfileDto;
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Type of the profile, either Individual or Legal Entity' }),
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], ProfileDto.prototype, "type", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Document number, either CPF or CNPJ' }),
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.Matches)(/^\d{11}$|^\d{14}$/, {
        message: 'Document must be a valid CPF (11 digits) or CNPJ (14 digits)',
    }),
    __metadata("design:type", String)
], ProfileDto.prototype, "document", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Responsible person CPF, required for Legal Entity', required: false }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.Matches)(/^\d{11}$/, {
        message: 'Document Responsible must be a valid CPF (11 digits)',
    }),
    __metadata("design:type", String)
], ProfileDto.prototype, "documentResponsible", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Full name of the profile' }),
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], ProfileDto.prototype, "name", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Mobile phone number in Brazilian format' }),
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsPhoneNumber)('BR', { message: 'Mobile must be a valid phone number in Brazil' }),
    __metadata("design:type", String)
], ProfileDto.prototype, "mobile", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Phone number in Brazilian format' }),
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsPhoneNumber)('BR', { message: 'Phone must be a valid phone number in Brazil' }),
    __metadata("design:type", String)
], ProfileDto.prototype, "phone", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Email address' }),
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsEmail)(),
    __metadata("design:type", String)
], ProfileDto.prototype, "email", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Email confirmation address' }),
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsEmail)(),
    __metadata("design:type", String)
], ProfileDto.prototype, "emailConfirm", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'ZIP code in Brazilian format' }),
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.Matches)(/^\d{5}-?\d{3}$/, { message: 'ZipCode must be a valid format' }),
    __metadata("design:type", String)
], ProfileDto.prototype, "zipCode", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Street name' }),
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], ProfileDto.prototype, "street", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'House or building number' }),
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], ProfileDto.prototype, "number", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Additional address information', required: false }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], ProfileDto.prototype, "complement", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'City name' }),
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], ProfileDto.prototype, "city", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Neighborhood name' }),
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], ProfileDto.prototype, "neighborhood", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'State abbreviation' }),
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], ProfileDto.prototype, "state", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Indicates if terms are accepted' }),
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsBoolean)(),
    __metadata("design:type", Boolean)
], ProfileDto.prototype, "termsAccepted", void 0);
//# sourceMappingURL=profile.dto.js.map