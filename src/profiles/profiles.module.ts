import { Module } from "@nestjs/common";
import { ProfilesService } from "./profiles.service";
import { ProfilesController } from "./profiles.controller";
import { PrismaService } from "src/database/prisma.service";
import { ProfilesRepository } from "./profiles.repository";
import { AuthModule } from "src/auth/auth.module";

@Module({
    imports: [AuthModule],
    providers: [ProfilesService, PrismaService, ProfilesRepository],
    controllers: [ProfilesController]
})
export class ProfilesModule {}