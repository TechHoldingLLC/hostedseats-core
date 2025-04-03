import { Migration } from '@mikro-orm/migrations';

export class Migration20250403042117 extends Migration {

  override async up(): Promise<void> {
    this.addSql(`alter table if exists "product" add column if not exists "is_featured" boolean not null default false;`);
  }

  override async down(): Promise<void> {
    this.addSql(`alter table if exists "product" drop column if exists "is_featured";`);
  }

}
