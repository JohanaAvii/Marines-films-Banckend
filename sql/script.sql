create table Actores
(
    id            int auto_increment
        primary key,
    url_imagen    varchar(191) not null,
    url_biografia varchar(191) not null,
    pelicula_id   int          not null
);

create table Usuario
(
    id              int auto_increment
        primary key,
    primerNombre    varchar(12)                            not null,
    segundoNombre   varchar(12)                            not null,
    PrimerApellido  varchar(12)                            not null,
    segundoApellido varchar(12)                            not null,
    correo          varchar(50)                            not null,
    contrasena      varchar(191)                           not null,
    genero          char                                   not null,
    telefono        varchar(10)                            not null,
    rol             enum ('USUARIO', 'ADMIN', 'PRODUCTOR') not null,
    constraint Usuario_correo_key
        unique (correo)
);

create table Pelicula
(
    id                 int auto_increment
        primary key,
    nombre             varchar(50)  not null,
    sipnosis           varchar(191) not null,
    fecha_distribucion datetime(3)  not null,
    duracion           double       not null,
    distribuidor       varchar(20)  not null,
    isan               varchar(96)  not null,
    url_poster         varchar(191) not null,
    aws_url            varchar(191) null,
    aws_trailer        varchar(191) null,
    usuario_id         int          not null,
    constraint Pelicula_usuario_id_fkey
        foreign key (usuario_id) references Usuario (id)
            on update cascade
);

create table Solicitud
(
    id              int auto_increment
        primary key,
    estado          varchar(10)                              not null,
    fecha_envio     datetime(3) default CURRENT_TIMESTAMP(3) not null,
    fecha_respuesta datetime(3)                              not null,
    observaciones   varchar(191)                             not null,
    usuario_id      int                                      not null,
    constraint Solicitud_usuario_id_fkey
        foreign key (usuario_id) references Usuario (id)
            on update cascade
);

create table _ActoresToPelicula
(
    A int not null,
    B int not null,
    constraint _ActoresToPelicula_AB_unique
        unique (A, B),
    constraint _ActoresToPelicula_A_fkey
        foreign key (A) references Actores (id)
            on update cascade on delete cascade,
    constraint _ActoresToPelicula_B_fkey
        foreign key (B) references Pelicula (id)
            on update cascade on delete cascade
);

create index _ActoresToPelicula_B_index
    on _ActoresToPelicula (B);

create table _prisma_migrations
(
    id                  varchar(36)                               not null
        primary key,
    checksum            varchar(64)                               not null,
    finished_at         datetime(3)                               null,
    migration_name      varchar(255)                              not null,
    logs                text                                      null,
    rolled_back_at      datetime(3)                               null,
    started_at          datetime(3)  default CURRENT_TIMESTAMP(3) not null,
    applied_steps_count int unsigned default '0'                  not null
);


