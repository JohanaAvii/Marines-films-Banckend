import { Usuario } from "@prisma/client";
import prismaClient from "../helpers/prismaClient";

const saveUser = async (user: Usuario): Promise<Usuario | unknown> => {
  return new Promise(async (resolve, reject) => {
    try {
      await prismaClient.$connect();
    } catch (error) {
      reject(error);
    }
    try {
      const { contrasena, ...userSaved } = await prismaClient.usuario.create({
        data: user,
      });
      resolve(userSaved);
    } catch (error) {
      console.log(error);

      reject(error);
    } finally {
      prismaClient.$disconnect();
    }
  });
};

const getAll = async (): Promise<Usuario[] | unknown> => {
  return new Promise(async (resolve, reject) => {
    try {
      await prismaClient.$connect();
    } catch (error) {
      reject(error);
    }
    try {
      const users = await prismaClient.usuario.findMany();
      resolve(users);
    } catch (error) {
      reject(error);
    } finally {
      prismaClient.$disconnect();
    }
  });
};

const findUser = async (email: string): Promise<Usuario | null> => {
  return new Promise(async (resolve, reject) => {
    try {
      await prismaClient.$connect();
    } catch (error) {
      reject(error);
    }
    try {
      const user = await prismaClient.usuario.findUnique({
        where: { correo: email },
      });
      resolve(user);
    } catch (error) {
      reject(error);
    } finally {
      prismaClient.$disconnect();
    }
  });
};
export { getAll, saveUser, findUser };
