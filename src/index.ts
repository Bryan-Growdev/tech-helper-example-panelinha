import { randomUUID } from "crypto";
import { backEndResponse } from "./back";
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


const a = User.fromJSON({
  id: "algum id",
  email: "email@teste.com",
  pass: "alguma senha",
  name: "fulano de tal",
});



const get = async (url: string): Promise<{
  body: {
    id: string;
    name: string;
    email: string;
    pass: string;
  }[];
}> => {
  return backEndResponse;
}

const requisicao = async () => {
  const result = await get('/users');
  const arrayComObjetoComUsuarios = result.body;
  const users = arrayComObjetoComUsuarios.map((user) => User.fromJSON(user))

  console.log(users);
}

requisicao();