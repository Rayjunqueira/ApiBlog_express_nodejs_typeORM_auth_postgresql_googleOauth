import { MigrationInterface, QueryRunner } from "typeorm";

export class default1672441537362 implements MigrationInterface {
    name = 'default1672441537362'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "users" ADD "googleId" character varying NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "users" DROP COLUMN "googleId"`);
    }

}
