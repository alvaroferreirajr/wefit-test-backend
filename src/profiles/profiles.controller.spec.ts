import { Test, TestingModule } from '@nestjs/testing';
import { ProfilesController } from './profiles.controller';
import { ProfilesService } from './profiles.service';
import { HttpException, HttpStatus } from '@nestjs/common';
import { ProfileDto } from './dtos/profile.dto';
import { ProfileDtoMock } from '../mocks/profiles.dto.mock';

describe('ProfilesController', () => {
    let controller: ProfilesController;
    let service: ProfilesService;

    beforeEach(async () => {
        const module: TestingModule = await Test.createTestingModule({
            controllers: [ProfilesController],
            providers: [
                {
                    provide: ProfilesService,
                    useValue: {
                        getAllProfiles: jest.fn(),
                        createProfile: jest.fn(),
                        getProfileById: jest.fn(),
                        updateProfile: jest.fn(),
                        deleteProfile: jest.fn(),
                    },
                },
            ],
        }).compile();

        controller = module.get<ProfilesController>(ProfilesController);
        service = module.get<ProfilesService>(ProfilesService);
    });

    it('should be defined', () => {
        expect(controller).toBeDefined();
    });

    describe('getAllProfiles', () => {
        it('should call ProfilesService.getAllProfiles and return data', async () => {
            const mockProfiles = [{ id: 1, ...ProfileDtoMock }];
            (service.getAll as jest.Mock).mockResolvedValue({
                total: 1,
                page: 1,
                limit: 10,
                data: mockProfiles,
            });

            const result = await controller.getAll(1, 10);
            expect(service.getAll).toHaveBeenCalledWith(1, 10);
            expect(result).toEqual({
                total: 1,
                page: 1,
                limit: 10,
                data: mockProfiles,
            });
        });
    });

    describe('createProfile', () => {
        it('should call ProfilesService.createProfile and return the created profile', async () => {
            const mockProfile = { id: 1, ...ProfileDtoMock };
            (service.create as jest.Mock).mockResolvedValue(mockProfile);

            const result = await controller.create(ProfileDtoMock);
            expect(service.create).toHaveBeenCalledWith(ProfileDto);
            expect(result).toEqual(mockProfile);
        });
    });

    describe('getProfileById', () => {
        it('should call ProfilesService.getProfileById and return the profile', async () => {
            const mockProfile = { id: 1, ...ProfileDtoMock };
            (service.getById as jest.Mock).mockResolvedValue(mockProfile);

            const result = await controller.getById(1);
            expect(service.getById).toHaveBeenCalledWith(1);
            expect(result).toEqual(mockProfile);
        });

        it('should throw an error if profile is not found', async () => {
            (service.getById as jest.Mock).mockRejectedValue(
                new HttpException('Profile not found', HttpStatus.NOT_FOUND),
            );

            await expect(controller.getById(1)).rejects.toThrow(
                'Profile not found',
            );
        });
    });

    describe('updateProfile', () => {
        it('should call ProfilesService.updateProfile and return the updated profile', async () => {
            const mockProfile = { id: 1, ...ProfileDtoMock };
            const updateProfileDto = ProfileDtoMock;
            
            (service.update as jest.Mock).mockResolvedValue(mockProfile);

            const result = await controller.update(1, updateProfileDto);
            expect(service.update).toHaveBeenCalledWith(1, updateProfileDto);
            expect(result).toEqual(mockProfile);
        });
    });

    describe('deleteProfile', () => {
        it('should call ProfilesService.deleteProfile and return void', async () => {
            (service.delete as jest.Mock).mockResolvedValue(undefined);

            const result = await controller.delete(1);
            expect(service.delete).toHaveBeenCalledWith(1);
            expect(result).toBeUndefined();
        });
    });
});