import { randomUUID } from "crypto";
import test from "node:test";

class User {
  id: string
  constructor(
    public name: string,
    public mail: string,
    public pass: string,
    id?: string,
  ) {
    this.id = id ?? randomUUID();
  }

  static fromJSON(json: UserJSON): User {
    return new User(json.name, json.email, json.pass, json.id);
  }
}

type UserJSON = {
  id: string;
  name: string;
  email: string;
  pass: string;
}

const response = {
  body: [
    {
      "id": "any_uid",
      "name": "any_name",
      "email": "any_mail",
      "pass": "any_pass",
    }
  ],
};

const teste = () => {
  const users = response.body.map((user) => User.fromJSON(user));

  console.log(users);
}

teste();