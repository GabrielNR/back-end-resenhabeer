import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class CreateAccounts1744056572074 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.createTable(
            new Table({
              name: "users",
              columns: [
                {
                  name: "id",
                  type: "uuid",
                  isPrimary: true,
                },
                {
                  name: "name",
                  type: "varchar"
                },
                {
                  name: "password",
                  type: "varchar"
                },
                {
                  name: "email",
                  type: "varchar"
                },
                {
                  name: "created_at",
                  type: "timestamp",
                  default: "now()"
                },
                {
                    name: "updated_at",
                    type: "timestamp",
                    default: "now()"
                }
              ]
            })
          )
    }

    public async down(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.dropTable("users")
    }

}
