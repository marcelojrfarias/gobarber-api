import { MigrationInterface, QueryRunner, TableColumn } from 'typeorm';

export default class ChangeIdTypeAndRemoveIsNullable1587700271862
  implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.changeColumn(
      'appointments',
      'id',
      new TableColumn({
        name: 'id',
        type: 'uuid',
        isPrimary: true,
        generationStrategy: 'uuid',
        default: 'uuid_generate_v4()',
      }),
    );

    await queryRunner.changeColumn(
      'appointments',
      'date',
      new TableColumn({
        name: 'date',
        type: 'timestamp with time zone',
      }),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {}
}
