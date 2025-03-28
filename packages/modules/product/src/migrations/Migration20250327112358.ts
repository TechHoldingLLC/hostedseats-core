import { Migration } from '@mikro-orm/migrations';

export class Migration20250327112358 extends Migration {

  override async up(): Promise<void> {
    this.addSql(`alter table if exists "product" add column if not exists "custom_field_2" text null;`);
  }

  override async down(): Promise<void> {
    this.addSql(`alter table if exists "product" drop column if exists "custom_field_2";`);
  }

}
