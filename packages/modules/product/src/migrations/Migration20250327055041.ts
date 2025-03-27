import { Migration } from '@mikro-orm/migrations';

export class Migration20250327055041 extends Migration {

  override async up(): Promise<void> {
    this.addSql(`alter table if exists "product" add column if not exists "custom_brand" text null;`);
  }

  override async down(): Promise<void> {
    this.addSql(`alter table if exists "product" drop column if exists "custom_brand";`);
  }

}
