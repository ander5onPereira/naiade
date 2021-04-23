import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class CreateUsuario1618977004769 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query('CREATE EXTENSION IF NOT EXISTS "uuid-ossp"');
        await queryRunner.createTable(
            new Table({
                name: "usuario",
                columns: [
                    {
                        name: "id",
                        type: "uuid",
                        isPrimary: true,
                        generationStrategy: "uuid",
                        default: "uuid_generate_v4()",
                    },
                    {
                        name: "nome",
                        type: "varchar",
                        isNullable: false
                    },
                    {
                        name: "telefone",
                        type: "varchar",
                        isNullable: true
                    },
                    {
                        name: "email",
                        type: "varchar",
                        isNullable: false
                    },
                    {
                        name: "idade",
                        type: "varchar",
                        isNullable: true
                    },
                    {
                        name: "peso",
                        type: "varchar",
                        isNullable: true
                    },
                    {
                        name: "etnia",
                        type: "enum",
                        enum: ["Branco", "Negro", "Indígena", "Pardo", "Mulato", "Caboclos", "Cafuzos"],
                        isNullable: false
                    },
                    {
                        name: "token",
                        type: "varchar",
                        isNullable: true
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
        await queryRunner.dropTable("usuario");
        await queryRunner.query('DROP EXTENSION "uuid-ossp"');
    }

}
