import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/database/prisma.service';
import { ProfileDto } from './dtos/profile.dto';

@Injectable()
export class ProfilesRepository {
    constructor(private readonly prisma: PrismaService) { }

    async getAll(page: number, skip: number, limit: number) {
        const profiles = await this.prisma.profile.findMany({
            skip: skip,
            take: limit,
        });

        const total = await this.prisma.profile.count();

        return {
            total,
            page,
            limit,
            data: profiles,
        };
    }

    async create(data: ProfileDto) {
        return this.prisma.profile.create({ data });
    }

    async findById(id: number) {
        return this.prisma.profile.findUnique({ where: { id } });
    }

    async update(id: number, data: Partial<ProfileDto>) {
        return this.prisma.profile.update({
            where: { id },
            data,
        });
    }

    async delete(id: number) {
        return this.prisma.profile.delete({ where: { id } });
    }
}