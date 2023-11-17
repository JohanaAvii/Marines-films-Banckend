-- CreateTable
CREATE TABLE `Usuario` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `primerNombre` VARCHAR(12) NOT NULL,
    `segundoNombre` VARCHAR(12) NOT NULL,
    `PrimerApellido` VARCHAR(12) NOT NULL,
    `segundoApellido` VARCHAR(12) NOT NULL,
    `correo` VARCHAR(50) NOT NULL,
    `contrasena` VARCHAR(191) NOT NULL,
    `genero` CHAR(1) NOT NULL,
    `telefono` VARCHAR(10) NOT NULL,
    `rol` ENUM('USUARIO', 'ADMIN', 'PRODUCTOR') NOT NULL,

    UNIQUE INDEX `Usuario_correo_key`(`correo`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Pelicula` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `nombre` VARCHAR(50) NOT NULL,
    `sipnosis` VARCHAR(191) NOT NULL,
    `fecha_distribucion` DATETIME(3) NOT NULL,
    `duracion` DOUBLE NOT NULL,
    `distribuidor` VARCHAR(20) NOT NULL,
    `isan` VARCHAR(96) NOT NULL,
    `url_poster` VARCHAR(191) NOT NULL,
    `aws_url` VARCHAR(191) NULL,
    `aws_trailer` VARCHAR(191) NULL,
    `usuario_id` INTEGER NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Solicitud` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `estado` VARCHAR(10) NOT NULL,
    `fecha_envio` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `fecha_respuesta` DATETIME(3) NOT NULL,
    `observaciones` VARCHAR(191) NOT NULL,
    `usuario_id` INTEGER NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Actores` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `url_imagen` VARCHAR(191) NOT NULL,
    `url_biografia` VARCHAR(191) NOT NULL,
    `pelicula_id` INTEGER NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `_ActoresToPelicula` (
    `A` INTEGER NOT NULL,
    `B` INTEGER NOT NULL,

    UNIQUE INDEX `_ActoresToPelicula_AB_unique`(`A`, `B`),
    INDEX `_ActoresToPelicula_B_index`(`B`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `Pelicula` ADD CONSTRAINT `Pelicula_usuario_id_fkey` FOREIGN KEY (`usuario_id`) REFERENCES `Usuario`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Solicitud` ADD CONSTRAINT `Solicitud_usuario_id_fkey` FOREIGN KEY (`usuario_id`) REFERENCES `Usuario`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `_ActoresToPelicula` ADD CONSTRAINT `_ActoresToPelicula_A_fkey` FOREIGN KEY (`A`) REFERENCES `Actores`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `_ActoresToPelicula` ADD CONSTRAINT `_ActoresToPelicula_B_fkey` FOREIGN KEY (`B`) REFERENCES `Pelicula`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;
