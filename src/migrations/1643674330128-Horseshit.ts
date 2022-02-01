import {MigrationInterface, QueryRunner} from "typeorm";

export class Horseshit1643674330128 implements MigrationInterface {
    name = 'Horseshit1643674330128'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "coffee" ADD "horseshit" character varying`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "coffee" DROP COLUMN "horseshit"`);
    }

}
