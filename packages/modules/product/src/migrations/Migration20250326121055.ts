import { Migration } from '@mikro-orm/migrations';

export class Migration20250326121055 extends Migration {

  override async up(): Promise<void> {
    this.addSql(`alter table if exists "product" add column if not exists "is_featured" text null;`);
  }

  override async down(): Promise<void> {
    this.addSql(`alter table if exists "product" drop column if exists "is_featured";`);
  }

}
