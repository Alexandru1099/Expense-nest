import { MigrationInterface, QueryRunner } from 'typeorm';

export class addColumnPrice1656959677851 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`CREATE EXTENSION IF NOT EXISTS "uuid-ossp"`);
    await queryRunner.query(`
                                    ALTER TABLE "expense"
                                    ADD COLUMN "price" INT  NOT NULL
                                 `);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`DROP TABLE expense`);
  }
}
