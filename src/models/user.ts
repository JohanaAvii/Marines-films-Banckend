import { Usuario } from "../generated/client";
import prismaClient from "../helpers/prismaClient";

const saveUser = async (user: Usuario): Promise<Usuario | unknown> => {
  return new Promise(async (resolve, reject) => {
    try {
      await prismaClient.$connect();
    } catch (error) {
      reject(error);
    }
    try {
      const { password, ...userSaved } = await prismaClient.usuario.create({
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

const getAll = async (
  page: number,
  size: number
): Promise<Usuario[] | unknown> => {
  return new Promise(async (resolve, reject) => {
    try {
      await prismaClient.$connect();
    } catch (error) {
      reject(error);
    }
    try {
      const offset = page * size;
      const users = await prismaClient.usuario.findMany({
        take: size,
        skip: offset,
        select: {
          correo: true,
          genero: true,
          id: true,
          primer_apellido: true,
          primer_nombre: true,
          rol: true,
          segundo_apellido: true,
          segundo_nombre: true,
          telefono: true,
        },
      });
      // const users =
      //   (await prismaClient.$queryRaw`select correo, genero, id, primer_apellido, rol, primer_nombre, segundo_apellido, segundo_nombre, telefono from Usuario limit ${offset},${size}`) as Usuario[];
      const count =
        (await prismaClient.$queryRaw`select count(*) as count from Usuario`) as [
          { count: string }
        ];
      resolve({
        count: Number.parseInt(count[0].count),
        next: users.length == size ? page + 1 : null,
        previous: page > 0 ? page - 1 : null,
        results: users,
      });
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
