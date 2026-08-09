import { MigrationInterface, QueryRunner } from "typeorm";

export class AddViewFeildIntoTodoTable1770881959582 implements MigrationInterface {
    name = 'AddViewFeildIntoTodoTable1770881959582'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "todo" ADD "view" integer NOT NULL DEFAULT '0'`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "todo" DROP COLUMN "view"`);
    }

}
