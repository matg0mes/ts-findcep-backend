import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class adress1620307702379 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: "address",
        columns: [
          { name: "id", type: "uuid", isPrimary: true },
          { name: "zipCode", type: "varchar" },
          { name: "street", type: "varchar" },
          { name: "complement", type: "varchar" },
          { name: "neighborhood", type: "varchar" },
          { name: "city", type: "varchar" },
          { name: "state", type: "varchar" },
          { name: "updated_at", type: "timestamp", default: "now()" },
          { name: "created_at", type: "timestamp", default: "now()" },
        ],
      })
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable("address");
  }
}
