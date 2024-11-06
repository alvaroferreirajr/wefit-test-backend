import { BadRequestException, Injectable, NotFoundException } from "@nestjs/common";
import { ProfileDto } from "./dtos/profile.dto";
import { ProfilesRepository } from "./profiles.repository";

@Injectable()
export class ProfilesService {
    constructor(private readonly profilesRepository: ProfilesRepository) { }

    async getAll(page: number, limit: number) {
        const skip = Math.max(0, (page - 1) * limit); 

        const profiles = await this.profilesRepository.getAll(page, skip, limit);

        return profiles
    }

    async getById(id: number) {
        const profile = await this.profilesRepository.findById(id);

        if (!profile) {
            throw new NotFoundException(`Profile with ID ${id} not found`);
        }

        return profile;
    }


    async create(createProfileDto: ProfileDto) {
        const { email, emailConfirm } = createProfileDto;

        if (email !== emailConfirm) {
            throw new BadRequestException('Emails do not match');
        }

        return this.profilesRepository.create(createProfileDto);
    }

    async update(id: number, updateProfileDto: Partial<ProfileDto>) {
        return this.profilesRepository.update(id, updateProfileDto);
    }

    async delete(id: number) {
        try {
            return await this.profilesRepository.delete(id);
        } catch {
            throw new NotFoundException(`Profile with ID ${id} not found or already deleted`);
        }
    }
}