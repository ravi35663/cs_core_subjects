import { MigrationInterface, QueryRunner } from "typeorm";

export class AddStatusToTodo1770808737309 implements MigrationInterface {
    name = 'AddStatusToTodo1770808737309'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TYPE "public"."todo_static_enum" AS ENUM('Completed', 'Open', 'Inprogress', 'Done')`);
        await queryRunner.query(`ALTER TABLE "todo" ADD "static" "public"."todo_static_enum" NOT NULL DEFAULT 'Open'`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "todo" DROP COLUMN "static"`);
        await queryRunner.query(`DROP TYPE "public"."todo_static_enum"`);
    }

}
