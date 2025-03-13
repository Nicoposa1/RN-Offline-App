import { BSON, Realm, ObjectSchema } from "realm";

export class Task extends Realm.Object<Task> {
  id!: BSON.ObjectId;
  description!: string;

  static schema: ObjectSchema = {
    name: "Task",
    primaryKey: "_id",
    properties: {
      _id: "objectId",
      description: "string"
    }
  }
}