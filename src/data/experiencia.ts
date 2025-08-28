export interface Experiencia {
    title: string;
    company: string;
    descriptions: Array<string>;
    date: string;
}

export const EXPERIENCE: Array<Experiencia> = [
    {
        date: "octubre 2024 - Actualmente",
        title: " Desarrollador Full Stack Freelance",
        company: "Fiverr",
        descriptions: [
            "Desarrollo APIs en Node.js y TypeScript que integran aplicaciones web con bases de datos.",
            "Implemento aplicaciones con Astro y Next.js (SSR) optimizadas para SEO, UX y rendimiento.",
            "Diseño interfaces en Figma que garantizan coherencia visual y mejor experiencia de usuario.",
        ],
    },
    {
        date: "julio 2023 - julio 2024",
        title: "Analista de Software",
        company: "IDS Latam",
        descriptions: [
            "Implementé APIs REST conectadas a frontend en React, Angular y React Native para plataformas mineras",
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
