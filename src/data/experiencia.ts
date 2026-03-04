export interface Experiencia {
    title: string;
    company: string;
    descriptions: Array<string>;
    date: string;
}

export const EXPERIENCE: Array<Experiencia> = [
    {
        date: "octubre 2025 - Actualmente",
        title: " Desarrollador Full Stack",
        company: "Joinnus",
        descriptions: [
            "Implemento aplicaciones móviles y web con React Native y Nuxt, listas para producción.",
            "Desarrollo APIs y servicios backend con Nest.js, integrando servicios cloud en AWS, asegurando escalabilidad y mantenibilidad.",
        ],
    },
    {
        date: "julio 2023 - julio 2024",
        title: "Analista de Software",
        company: "IDS Latam",
        descriptions: [
            "Implementé APIs REST con Java, C# conectadas a frontend en React, Angular y React Native para plataformas mineras",
            "Migré sistemas a microfrontends y microservicios con CQRS y Docker, mejorando rendimiento y escalabilidad",
            "Integré Azure Blob Storage para acceso seguro a documentos técnicos en campo.",
        ],
    },
    {
        date: "enero 2022 - enero 2023",
        title: "Analista de Datos",
        company: "Professional Business Peru",
        descriptions: [
            "Automaticé la limpieza de archivos Excel con Python e integré un dashboard en React, lo que redujo el 35% los tiempos de procesamiento.",
            "Optimicé índices y consultas en SQL Server.",
            "Usé AWS S3 para almacenar y procesar datasets.",
        ],
    },
];
