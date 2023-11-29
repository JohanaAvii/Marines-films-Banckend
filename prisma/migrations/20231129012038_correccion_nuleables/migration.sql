/*
  Warnings:

  - You are about to alter the column `estado` on the `Solicitud` table. The data in that column could be lost. The data in that column will be cast from `VarChar(10)` to `Enum(EnumId(1))`.

*/
-- AlterTable
ALTER TABLE `Solicitud` MODIFY `estado` ENUM('PENDIENTE', 'RECHAZADA', 'APROBADA') NOT NULL,
    MODIFY `fecha_respuesta` DATETIME(3) NULL,
    MODIFY `observaciones` VARCHAR(191) NULL;

-- AlterTable
ALTER TABLE `Usuario` MODIFY `segundoNombre` VARCHAR(12) NULL,
    MODIFY `segundoApellido` VARCHAR(12) NULL;
