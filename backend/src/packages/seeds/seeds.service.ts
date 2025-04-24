import { Injectable, Logger, OnModuleInit } from '@nestjs/common';
import fs from 'fs';
import { Types } from 'mongoose';
import { UserService } from 'src/apis/users/user.service';
import { appSettings } from 'src/configs/app-settings';
import { MetadataService } from 'src/apis/metadata/metadata.service';
import { RolesService } from '@libs/super-authorize/modules/roles/roles.service';
import { PermissionsService } from '@libs/super-authorize/modules/permissions/permissions.service';
import { RoleType } from '@libs/super-authorize/modules/roles/constants';
import { CreditsService } from 'src/apis/credits/credits.service';
import { CohortsService } from 'src/apis/cohorts/cohorts.service';
import { GradesService } from 'src/apis/grades/grades.service';
import { profile } from 'console';
import { ProfilesService } from 'src/apis/profiles/profiles.service';

@Injectable()
export class SeedsService implements OnModuleInit {
    public readonly logger = new Logger(SeedsService.name);
    constructor(
        private readonly roleService: RolesService,
        private readonly userService: UserService,
        private readonly permissionService: PermissionsService,
        private readonly metadataService: MetadataService,
        private readonly creditService: CreditsService,
        private readonly cohortService: CohortsService,
        private readonly gradeService: GradesService,
        private readonly profileService: ProfilesService,
    ) {}

    async onModuleInit() {
        if (!appSettings.development) {
            return;
        }

        // await this.seedPermissions();
        await this.seedRoles();
        // await this.seedMetadata();
        await this.seedProfiles();
        await this.seedUsers();
        await this.seedCredits();
        await this.seedCohorts();
        await this.seedGrades();

        this.logger.debug('Seeding completed');
    }

    async seedPermissions() {}

    async seedRoles() {
        const roles = JSON.parse(
            fs.readFileSync(process.cwd() + '/public/data/roles.json', 'utf8'),
        );

        this.logger.debug('Seeding roles');

        for (const role of roles) {
            delete role.createdAt;
            delete role.updatedAt;
            const { type } = role;
            if (type === RoleType.SUPER_ADMIN) {
                const permissions = await this.permissionService.model
                    .find({
                        path: 'admin',
                    })
                    .exec();

                const superAdmin = await this.roleService.model
                    .findOne({
                        type: RoleType.SUPER_ADMIN,
                    })
                    .exec();

                if (!superAdmin) {
                    await this.roleService.model.create({
                        ...role,
                        _id: new Types.ObjectId(role._id.$oid),
                        permissions: permissions.map((p) => p._id),
                    });
                } else {
                    await this.roleService.model.updateMany(
                        { type: RoleType.SUPER_ADMIN },
                        {
                            permissions: permissions.map((p) => p._id),
                        },
                    );
                }
            }

            if (type === RoleType.USER) {
                const permissions = await this.permissionService.model
                    .find({ path: 'front' })
                    .exec();

                const userRole = await this.roleService.model
                    .findOne({
                        type: RoleType.USER,
                    })
                    .exec();

                if (!userRole) {
                    await this.roleService.model.create({
                        ...role,
                        _id: new Types.ObjectId(role._id.$oid),
                        permissions: permissions.map((p) => p._id),
                    });
                } else {
                    await this.roleService.model.updateMany(
                        { type: RoleType.USER },
                        {
                            permissions: permissions.map((p) => p._id),
                        },
                    );
                }
            }

            if (type === RoleType.LECTURER) {
                const permissions = await this.permissionService.model
                    .find({ path: 'front' })
                    .exec();

                const userRole = await this.roleService.model
                    .findOne({
                        type: RoleType.LECTURER,
                    })
                    .exec();

                if (!userRole) {
                    await this.roleService.model.create({
                        ...role,
                        _id: new Types.ObjectId(role._id.$oid),
                        permissions: permissions.map((p) => p._id),
                    });
                } else {
                    await this.roleService.model.updateMany(
                        { type: RoleType.USER },
                        {
                            permissions: permissions.map((p) => p._id),
                        },
                    );
                }
            }
        }
    }

    async seedUsers() {
        const users = JSON.parse(
            fs.readFileSync(process.cwd() + '/public/data/users.json', 'utf8'),
        );

        this.logger.debug('Seeding users');

        if (appSettings.development) {
            await this.userService.model.updateMany({}, { deletedAt: null });
        }

        for (const user of users) {
            const { _id } = user;
            delete user.createdAt;
            delete user.updatedAt;
            const exit = await this.userService.model.findById(_id.$oid).exec();

            if (!exit) {
                await this.userService.model.create({
                    ...user,
                    _id: new Types.ObjectId(_id.$oid),
                    role: new Types.ObjectId(user.role.$oid),
                    profile: new Types.ObjectId(user.profile.$oid),
                });
            }
        }
    }

    async seedMetadata() {
        const metadata = JSON.parse(
            fs.readFileSync(
                process.cwd() + '/public/data/metadata.json',
                'utf8',
            ),
        );

        this.logger.debug('Seeding metadata');
        await this.metadataService.model.deleteMany({});

        const result = metadata.map((item) => {
            delete item.createdAt;
            delete item.updatedAt;
            return {
                ...item,
                _id: new Types.ObjectId(item._id.$oid),
            };
        });

        await this.metadataService.model.insertMany(result);
    }

    async seedCredits() {
        const credits = JSON.parse(
            fs.readFileSync(
                process.cwd() + '/public/data/credits.json',
                'utf8',
            ),
        );

        this.logger.debug('Seeding credits');

        for (const credit of credits) {
            const { _id } = credit;
            delete credit.createdAt;
            delete credit.updatedAt;
            const exist = await this.creditService.model
                .findById(_id.$oid)
                .exec();

            if (!exist) {
                await this.creditService.model.create({
                    ...credit,
                    _id: new Types.ObjectId(_id.$oid),
                });
            }
        }
    }

    async seedCohorts() {
        const cohorts = JSON.parse(
            fs.readFileSync(
                process.cwd() + '/public/data/cohorts.json',
                'utf8',
            ),
        );

        this.logger.debug('Seeding cohorts');

        for (const cohort of cohorts) {
            const { _id } = cohort;
            delete cohort.createdAt;
            delete cohort.updatedAt;
            const exist = await this.cohortService.model
                .findById(_id.$oid)
                .exec();

            if (!exist) {
                await this.cohortService.model.create({
                    ...cohort,
                    _id: new Types.ObjectId(cohort._id.$oid),
                });
            }
        }
    }

    async seedGrades() {
        const grades = JSON.parse(
            fs.readFileSync(process.cwd() + '/public/data/grades.json', 'utf8'),
        );

        this.logger.debug('Seeding grades');

        for (const grade of grades) {
            const { _id } = grade;
            delete grade.createdAt;
            delete grade.updatedAt;
            const exist = await this.gradeService.model
                .findById(_id.$oid)
                .exec();

            if (!exist) {
                await this.gradeService.model.create({
                    ...grade,
                    _id: new Types.ObjectId(grade._id.$oid),
                });
            }
        }
    }

    async seedProfiles() {
        const profiles = JSON.parse(
            fs.readFileSync(
                process.cwd() + '/public/data/profiles.json',
                'utf8',
            ),
        );

        this.logger.debug('Seeding profiles');

        for (const profile of profiles) {
            const { _id } = profile;
            delete profile.createdAt;
            delete profile.updatedAt;
            const exist = await this.profileService.model
                .findById(_id.$oid)
                .exec();

            if (!exist) {
                // Create a copy of the profile without the grade field
                const profileToCreate = {
                    ...profile,
                    _id: new Types.ObjectId(_id.$oid),
                    createdBy: profile.createdBy
                        ? new Types.ObjectId(profile.createdBy.$oid)
                        : undefined,
                };

                // Add grade field only if it exists in the original profile
                if (profile.grade && profile.grade.$oid) {
                    profileToCreate.grade = new Types.ObjectId(
                        profile.grade.$oid,
                    );
                }

                await this.profileService.model.create(profileToCreate);
            }
        }
    }
}
