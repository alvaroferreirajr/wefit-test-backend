import { Test, TestingModule } from '@nestjs/testing';
import { ProfilesController } from './profiles.controller';
import { ProfilesService } from './profiles.service';
import { ProfileDtoMock } from '../mocks/profiles.dto.mock';
import { AuthService } from '../auth/auth.service';
import { AuthGuard } from '../auth/auth.guard';

describe('ProfilesController', () => {
  let profilesController: ProfilesController;
  let profilesService: ProfilesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ProfilesController],
      providers: [
        {
          provide: ProfilesService,
          useValue: {
            getAll: jest.fn().mockReturnValue([]),
            create: jest.fn().mockReturnValue({ id: 1, ...ProfileDtoMock }),
            getById: jest.fn().mockReturnValue({ id: 1, ...ProfileDtoMock }),
            update: jest.fn().mockReturnValue({ id: 1, ...ProfileDtoMock }),
            delete: jest.fn().mockReturnValue(undefined),
          },
        },
        {
          provide: AuthService,
          useValue: {
            verifyAccessToken: jest.fn().mockReturnValue(true),
          },
        },
        {
          provide: AuthGuard,
          useValue: {
            canActivate: jest.fn().mockReturnValue(true),
          },
        },
      ],
    }).compile();

    profilesController = module.get<ProfilesController>(ProfilesController);
    profilesService = module.get<ProfilesService>(ProfilesService);
  });

  describe('getAllProfiles', () => {
    it('should return an empty array', async () => {
      expect(await profilesController.getAll(1, 10)).toEqual([]);
    });
  });

  describe('createProfile', () => {
    it('should return the created profile', async () => {
      expect(await profilesController.create(ProfileDtoMock)).toEqual({
        id: 1,
        ...ProfileDtoMock,
      });
    });
  });

  describe('getProfileById', () => {
    it('should return a profile', async () => {
      expect(await profilesController.getById(1)).toEqual({
        id: 1,
        ...ProfileDtoMock,
      });
    });
  });

  describe('updateProfile', () => {
    it('should return the updated profile', async () => {
      const updateProfileDto = { name: 'Updated Profile' };
      expect(await profilesController.update(1, updateProfileDto)).toEqual({
        id: 1,
        ...ProfileDtoMock,
      });
    });
  });

  describe('deleteProfile', () => {
    it('should return undefined', async () => {
      expect(await profilesController.delete(1)).toBeUndefined();
    });
  });
});