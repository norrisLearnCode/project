import { Model } from "objection";

export class Todo extends Model {
  static get tableName() {
    return "todos";
  }

  id!: string;
  title!: string;
  done!: boolean;

  createdAt!: string;
  updatedAt!: string;

  $beforeInsert() {
    this.createdAt = new Date().toISOString();
    this.updatedAt = new Date().toISOString();
  }

  $beforeUpdate() {
    this.updatedAt = new Date().toISOString();
  }
}
