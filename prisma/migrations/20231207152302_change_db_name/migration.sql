/*
  Warnings:

  - You are about to drop the column `usuario_id` on the `Pelicula` table. All the data in the column will be lost.
  - You are about to drop the `_ActoresToPelicula` table. If the table is not empty, all the data it contains will be lost.
  - A unique constraint covering the columns `[solicitud_id]` on the table `Pelicula` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `solicitud_id` to the `Pelicula` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE `Pelicula` DROP FOREIGN KEY `Pelicula_usuario_id_fkey`;

-- DropForeignKey
ALTER TABLE `_ActoresToPelicula` DROP FOREIGN KEY `_ActoresToPelicula_A_fkey`;

-- DropForeignKey
ALTER TABLE `_ActoresToPelicula` DROP FOREIGN KEY `_ActoresToPelicula_B_fkey`;

-- AlterTable
ALTER TABLE `Pelicula` DROP COLUMN `usuario_id`,
    ADD COLUMN `promocionar` BOOLEAN NULL DEFAULT true,
    ADD COLUMN `solicitud_id` INTEGER NOT NULL,
    MODIFY `nombre` VARCHAR(191) NOT NULL,
    MODIFY `fecha_distribucion` VARCHAR(4) NOT NULL,
    MODIFY `duracion` DOUBLE NULL;

-- AlterTable
ALTER TABLE `Solicitud` MODIFY `estado` ENUM('PENDIENTE', 'RECHAZADA', 'APROBADA') NULL DEFAULT 'PENDIENTE',
    MODIFY `fecha_envio` DATETIME(3) NULL DEFAULT CURRENT_TIMESTAMP(3);

-- DropTable
DROP TABLE `_ActoresToPelicula`;

-- CreateTable
CREATE TABLE `ActoresOnPeliculas` (
    `actor_id` INTEGER NOT NULL,
    `pelicula_id` INTEGER NOT NULL,

    INDEX `ActoresOnPeliculas_pelicula_id_fkey`(`pelicula_id`),
    PRIMARY KEY (`actor_id`, `pelicula_id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateIndex
CREATE UNIQUE INDEX `Pelicula_solicitud_id_key` ON `Pelicula`(`solicitud_id`);

-- AddForeignKey
ALTER TABLE `Pelicula` ADD CONSTRAINT `Pelicula_solicitud_id_fkey` FOREIGN KEY (`solicitud_id`) REFERENCES `Solicitud`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `ActoresOnPeliculas` ADD CONSTRAINT `ActoresOnPeliculas_actor_id_fkey` FOREIGN KEY (`actor_id`) REFERENCES `Actores`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `ActoresOnPeliculas` ADD CONSTRAINT `ActoresOnPeliculas_pelicula_id_fkey` FOREIGN KEY (`pelicula_id`) REFERENCES `Pelicula`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
