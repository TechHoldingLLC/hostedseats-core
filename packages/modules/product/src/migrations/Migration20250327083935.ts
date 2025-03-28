import { Migration } from '@mikro-orm/migrations';

export class Migration20250327083935 extends Migration {

  override async up(): Promise<void> {
    this.addSql(`alter table if exists "product" alter column "custom_field" type text using ("custom_field"::text);`);
    this.addSql(`alter table if exists "product" alter column "custom_field" drop not null;`);
  }

  override async down(): Promise<void> {
    this.addSql(`alter table if exists "product" alter column "custom_field" type text using ("custom_field"::text);`);
    this.addSql(`alter table if exists "product" alter column "custom_field" set not null;`);
  }

}
