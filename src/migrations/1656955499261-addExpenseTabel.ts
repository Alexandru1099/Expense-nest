import { MigrationInterface, QueryRunner } from 'typeorm';

export class addExpenseTabel1656955499261 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`CREATE EXTENSION IF NOT EXISTS "uuid-ossp"`);
    await queryRunner.query(`
                        CREATE TABLE "expense" (
                            id uuid DEFAULT uuid_generate_v4() NOT NULL,
                            "expense" varchar NOT NULL,
                            "date" timestamp NOT NULL DEFAULT NOW(),
                            "createdAt" timestamp NOT NULL DEFAULT NOW(),
                            "updatedAt" timestamp NOT NULL DEFAULT NOW()
                            )`);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`DROP TABLE exoense`);
  }
}
