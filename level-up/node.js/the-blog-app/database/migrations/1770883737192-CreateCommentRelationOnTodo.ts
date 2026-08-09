import { MigrationInterface, QueryRunner } from "typeorm";

export class CreateCommentRelationOnTodo1770883737192 implements MigrationInterface {
    name = 'CreateCommentRelationOnTodo1770883737192'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "comment" ("id" SERIAL NOT NULL, "text" character varying NOT NULL, "todoId" integer, CONSTRAINT "PK_0b0e4bbc8415ec426f87f3a88e2" PRIMARY KEY ("id"))`);
        await queryRunner.query(`ALTER TABLE "comment" ADD CONSTRAINT "FK_f28138baab6c22e4b27f489d8be" FOREIGN KEY ("todoId") REFERENCES "todo"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "comment" DROP CONSTRAINT "FK_f28138baab6c22e4b27f489d8be"`);
        await queryRunner.query(`DROP TABLE "comment"`);
    }

}
