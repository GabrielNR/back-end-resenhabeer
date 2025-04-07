import { MigrationInterface, QueryRunner, TableColumn } from 'typeorm';

export default class AddProducts1744053250542 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.addColumn(
      'products',
      new TableColumn({
        name: 'barcode',
        type: 'varchar',
        isNullable: true,
      }),
    );

    await queryRunner.addColumn(
      'products',
      new TableColumn({
        name: 'description',
        type: 'varchar',
        isNullable: true,
      }),
    );

    await queryRunner.addColumn(
      'products',
      new TableColumn({
        name: 'expirationDate',
        type: 'timestamp',
        isNullable: true,
      }),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropColumn('products', 'expirationDate'),

    await queryRunner.dropColumn('products', 'description'),
    
    await queryRunner.dropColumn('products', 'barcode')
  }
}
