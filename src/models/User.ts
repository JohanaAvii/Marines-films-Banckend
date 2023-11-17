import { Usuario } from "@prisma/client";
import prismaClient from "../helpers/prismaClient";

class User {
  saveUser(user: Usuario) {
    prismaClient.usuario.create({
      data: user,
    });
  }
}

export default User;
