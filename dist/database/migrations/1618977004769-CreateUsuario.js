"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateUsuario1618977004769 = void 0;
const typeorm_1 = require("typeorm");
class CreateUsuario1618977004769 {
    async up(queryRunner) {
        await queryRunner.query('CREATE EXTENSION IF NOT EXISTS "uuid-ossp"');
        await queryRunner.createTable(new typeorm_1.Table({
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
        }));
    }
    async down(queryRunner) {
        await queryRunner.dropTable("usuario");
        await queryRunner.query('DROP EXTENSION "uuid-ossp"');
    }
}
exports.CreateUsuario1618977004769 = CreateUsuario1618977004769;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMTYxODk3NzAwNDc2OS1DcmVhdGVVc3VhcmlvLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vc3JjL2RhdGFiYXNlL21pZ3JhdGlvbnMvMTYxODk3NzAwNDc2OS1DcmVhdGVVc3VhcmlvLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUFBLHFDQUFpRTtBQUVqRSxNQUFhLDBCQUEwQjtJQUU1QixLQUFLLENBQUMsRUFBRSxDQUFDLFdBQXdCO1FBQ3BDLE1BQU0sV0FBVyxDQUFDLEtBQUssQ0FBQyw0Q0FBNEMsQ0FBQyxDQUFDO1FBQ3RFLE1BQU0sV0FBVyxDQUFDLFdBQVcsQ0FDekIsSUFBSSxlQUFLLENBQUM7WUFDTixJQUFJLEVBQUUsU0FBUztZQUNmLE9BQU8sRUFBRTtnQkFDTDtvQkFDSSxJQUFJLEVBQUUsSUFBSTtvQkFDVixJQUFJLEVBQUUsTUFBTTtvQkFDWixTQUFTLEVBQUUsSUFBSTtvQkFDZixrQkFBa0IsRUFBRSxNQUFNO29CQUMxQixPQUFPLEVBQUUsb0JBQW9CO2lCQUNoQztnQkFDRDtvQkFDSSxJQUFJLEVBQUUsTUFBTTtvQkFDWixJQUFJLEVBQUUsU0FBUztvQkFDZixVQUFVLEVBQUUsS0FBSztpQkFDcEI7Z0JBQ0Q7b0JBQ0ksSUFBSSxFQUFFLFVBQVU7b0JBQ2hCLElBQUksRUFBRSxTQUFTO29CQUNmLFVBQVUsRUFBRSxJQUFJO2lCQUNuQjtnQkFDRDtvQkFDSSxJQUFJLEVBQUUsT0FBTztvQkFDYixJQUFJLEVBQUUsU0FBUztvQkFDZixVQUFVLEVBQUUsS0FBSztpQkFDcEI7Z0JBQ0Q7b0JBQ0ksSUFBSSxFQUFFLE9BQU87b0JBQ2IsSUFBSSxFQUFFLFNBQVM7b0JBQ2YsVUFBVSxFQUFFLElBQUk7aUJBQ25CO2dCQUNEO29CQUNJLElBQUksRUFBRSxNQUFNO29CQUNaLElBQUksRUFBRSxTQUFTO29CQUNmLFVBQVUsRUFBRSxJQUFJO2lCQUNuQjtnQkFDRDtvQkFDSSxJQUFJLEVBQUUsT0FBTztvQkFDYixJQUFJLEVBQUUsTUFBTTtvQkFDWixJQUFJLEVBQUUsQ0FBQyxRQUFRLEVBQUUsT0FBTyxFQUFFLFVBQVUsRUFBRSxPQUFPLEVBQUUsUUFBUSxFQUFFLFVBQVUsRUFBRSxTQUFTLENBQUM7b0JBQy9FLFVBQVUsRUFBRSxLQUFLO2lCQUNwQjtnQkFDRDtvQkFDSSxJQUFJLEVBQUUsT0FBTztvQkFDYixJQUFJLEVBQUUsU0FBUztvQkFDZixVQUFVLEVBQUUsSUFBSTtpQkFDbkI7Z0JBQ0Q7b0JBQ0ksSUFBSSxFQUFFLFdBQVc7b0JBQ2pCLElBQUksRUFBRSwwQkFBMEI7b0JBQ2hDLFVBQVUsRUFBRSxLQUFLO2lCQUNwQjtnQkFDRDtvQkFDSSxJQUFJLEVBQUUsV0FBVztvQkFDakIsSUFBSSxFQUFFLDBCQUEwQjtvQkFDaEMsVUFBVSxFQUFFLEtBQUs7aUJBQ3BCO2FBQ0o7U0FDSixDQUFDLENBQ0wsQ0FBQztJQUNOLENBQUM7SUFFTSxLQUFLLENBQUMsSUFBSSxDQUFDLFdBQXdCO1FBQ3RDLE1BQU0sV0FBVyxDQUFDLFNBQVMsQ0FBQyxTQUFTLENBQUMsQ0FBQztRQUN2QyxNQUFNLFdBQVcsQ0FBQyxLQUFLLENBQUMsNEJBQTRCLENBQUMsQ0FBQztJQUMxRCxDQUFDO0NBRUo7QUF2RUQsZ0VBdUVDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTWlncmF0aW9uSW50ZXJmYWNlLCBRdWVyeVJ1bm5lciwgVGFibGUgfSBmcm9tIFwidHlwZW9ybVwiO1xuXG5leHBvcnQgY2xhc3MgQ3JlYXRlVXN1YXJpbzE2MTg5NzcwMDQ3NjkgaW1wbGVtZW50cyBNaWdyYXRpb25JbnRlcmZhY2Uge1xuXG4gICAgcHVibGljIGFzeW5jIHVwKHF1ZXJ5UnVubmVyOiBRdWVyeVJ1bm5lcik6IFByb21pc2U8dm9pZD4ge1xuICAgICAgICBhd2FpdCBxdWVyeVJ1bm5lci5xdWVyeSgnQ1JFQVRFIEVYVEVOU0lPTiBJRiBOT1QgRVhJU1RTIFwidXVpZC1vc3NwXCInKTtcbiAgICAgICAgYXdhaXQgcXVlcnlSdW5uZXIuY3JlYXRlVGFibGUoXG4gICAgICAgICAgICBuZXcgVGFibGUoe1xuICAgICAgICAgICAgICAgIG5hbWU6IFwidXN1YXJpb1wiLFxuICAgICAgICAgICAgICAgIGNvbHVtbnM6IFtcbiAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgbmFtZTogXCJpZFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgdHlwZTogXCJ1dWlkXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBpc1ByaW1hcnk6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgICAgICBnZW5lcmF0aW9uU3RyYXRlZ3k6IFwidXVpZFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgZGVmYXVsdDogXCJ1dWlkX2dlbmVyYXRlX3Y0KClcIixcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgbmFtZTogXCJub21lXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICB0eXBlOiBcInZhcmNoYXJcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIGlzTnVsbGFibGU6IGZhbHNlXG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6IFwidGVsZWZvbmVcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU6IFwidmFyY2hhclwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgaXNOdWxsYWJsZTogdHJ1ZVxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICBuYW1lOiBcImVtYWlsXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICB0eXBlOiBcInZhcmNoYXJcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIGlzTnVsbGFibGU6IGZhbHNlXG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6IFwiaWRhZGVcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU6IFwidmFyY2hhclwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgaXNOdWxsYWJsZTogdHJ1ZVxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICBuYW1lOiBcInBlc29cIixcbiAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU6IFwidmFyY2hhclwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgaXNOdWxsYWJsZTogdHJ1ZVxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICBuYW1lOiBcImV0bmlhXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICB0eXBlOiBcImVudW1cIixcbiAgICAgICAgICAgICAgICAgICAgICAgIGVudW06IFtcIkJyYW5jb1wiLCBcIk5lZ3JvXCIsIFwiSW5kw61nZW5hXCIsIFwiUGFyZG9cIiwgXCJNdWxhdG9cIiwgXCJDYWJvY2xvc1wiLCBcIkNhZnV6b3NcIl0sXG4gICAgICAgICAgICAgICAgICAgICAgICBpc051bGxhYmxlOiBmYWxzZVxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICBuYW1lOiBcInRva2VuXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICB0eXBlOiBcInZhcmNoYXJcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIGlzTnVsbGFibGU6IHRydWVcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgbmFtZTogXCJjcmVhdGVkQXRcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU6IFwidGltZXN0YW1wIHdpdGggdGltZSB6b25lXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBpc051bGxhYmxlOiBmYWxzZVxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICBuYW1lOiBcInVwZGF0ZWRBdFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgdHlwZTogXCJ0aW1lc3RhbXAgd2l0aCB0aW1lIHpvbmVcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIGlzTnVsbGFibGU6IGZhbHNlXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICB9KVxuICAgICAgICApO1xuICAgIH1cblxuICAgIHB1YmxpYyBhc3luYyBkb3duKHF1ZXJ5UnVubmVyOiBRdWVyeVJ1bm5lcik6IFByb21pc2U8dm9pZD4ge1xuICAgICAgICBhd2FpdCBxdWVyeVJ1bm5lci5kcm9wVGFibGUoXCJ1c3VhcmlvXCIpO1xuICAgICAgICBhd2FpdCBxdWVyeVJ1bm5lci5xdWVyeSgnRFJPUCBFWFRFTlNJT04gXCJ1dWlkLW9zc3BcIicpO1xuICAgIH1cblxufVxuIl19