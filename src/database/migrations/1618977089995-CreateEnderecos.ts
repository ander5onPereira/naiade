import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class CreateEnderecos1618977089995 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query('CREATE EXTENSION IF NOT EXISTS "uuid-ossp"');
        await queryRunner.createTable(
            new Table({
                name: "enderecos",
                columns: [
                    {
                        name: "id",
                        type: "uuid",
                        isPrimary: true,
                        generationStrategy: "uuid",
                        default: "uuid_generate_v4()",
                    },
                    {
                        name: "endereco",
                        type: "varchar",
                        isNullable: false
                    },
                    {
                        name: "numero",
                        type: "integer",
                        isNullable: true

                    },
                    {
                        name: "complemento",
                        type: "varchar",
                        isNullable: true
                    },
                    {
                        name: "cep",
                        type: "varchar",
                        isNullable: false
                    },
                    {
                        name: "cidade",
                        type: "varchar",
                        isNullable: false
                    },
                    {
                        name: "estado",
                        type: "varchar",
                        isNullable: false
                    },
                    {
                        name: 'id_usuario',
                        type: "uuid",
                        isNullable: false
                    },
                    {
                        name: "createdAt",
                        type: "timestamp with time zone",
                        isNullable: false
                    },
                    {
                        name: "updatedAt",
                        type: "timestamp with time zone",
                        isNullable: false
                    }
                ]
            })
        );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("enderecos");
        await queryRunner.query('DROP EXTENSION "uuid-ossp"');
    }

}
