/*
  Warnings:

  - You are about to drop the column `PrimerApellido` on the `Usuario` table. All the data in the column will be lost.
  - You are about to drop the column `contrasena` on the `Usuario` table. All the data in the column will be lost.
  - You are about to drop the column `primerNombre` on the `Usuario` table. All the data in the column will be lost.
  - You are about to drop the column `segundoApellido` on the `Usuario` table. All the data in the column will be lost.
  - You are about to drop the column `segundoNombre` on the `Usuario` table. All the data in the column will be lost.
  - Added the required column `password` to the `Usuario` table without a default value. This is not possible if the table is not empty.
  - Added the required column `primer_apellido` to the `Usuario` table without a default value. This is not possible if the table is not empty.
  - Added the required column `primer_nombre` to the `Usuario` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `Usuario` DROP COLUMN `PrimerApellido`,
    DROP COLUMN `contrasena`,
    DROP COLUMN `primerNombre`,
    DROP COLUMN `segundoApellido`,
    DROP COLUMN `segundoNombre`,
    ADD COLUMN `password` VARCHAR(191) NOT NULL,
    ADD COLUMN `primer_apellido` VARCHAR(20) NOT NULL,
    ADD COLUMN `primer_nombre` VARCHAR(20) NOT NULL,
    ADD COLUMN `segundo_apellido` VARCHAR(20) NULL,
    ADD COLUMN `segundo_nombre` VARCHAR(20) NULL;
