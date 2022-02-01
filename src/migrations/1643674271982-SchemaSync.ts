import {MigrationInterface, QueryRunner} from "typeorm";

export class SchemaSync1643674271982 implements MigrationInterface {
    name = 'SchemaSync1643674271982'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "coffee" ADD "fakefield" character varying`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "coffee" DROP COLUMN "fakefield"`);
    }

}
