import { Body, Controller, Delete, Get, HttpCode, HttpStatus, Param, Post, Put, Query, UseGuards } from "@nestjs/common";
import { ApiTags } from '@nestjs/swagger';
import { ProfilesService } from "./profiles.service";
import { ProfileDto } from "./dtos/profile.dto";
import { AuthGuard } from "../auth/auth.guard";

@ApiTags('profiles')
@Controller('profiles')
@UseGuards(AuthGuard)
export class ProfilesController {
  constructor(private readonly profilesService: ProfilesService) { }

  @Get()
  async getAll(
    @Query('page') page: number = 1,
    @Query('limit') limit: number = 10,
  ) {
    // Converte page e limit para números inteiros
    page = Number(page);
    limit = Number(limit);

    // Valida os valores de paginação
    if (page < 1) {
      page = 1;
    }
    if (limit < 1 || limit > 100) {
      limit = 10; // Limita a paginação a um máximo de 100 itens por página
    }

    return this.profilesService.getAll(page, limit);
  }

  @Post()
  @HttpCode(HttpStatus.CREATED)
  async create(@Body() ProfileDto: ProfileDto) {
    return this.profilesService.create(ProfileDto);
  }

  @Get(':id')
  async getById(@Param('id') id: number) {
    return this.profilesService.getById(Number(id));
  }

  @Put(':id')
  async update(@Param('id') id: number, @Body() updateProfileDto: Partial<ProfileDto>) {
    return this.profilesService.update(Number(id), updateProfileDto);
  }

  @Delete(':id')
  @HttpCode(HttpStatus.NO_CONTENT)
  async delete(@Param('id') id: number) {
    await this.profilesService.delete(Number(id));
  }
}