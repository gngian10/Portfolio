import { TAGS } from "./tags";

// bg: #1d2432

export const PROJECTS = [
    {
        title: "Red Emprende Las Bambas",
        description:
            "Proyecto diseñado para gestionar y visualizar oportunidades de licitación dentro de la mina, proporcionando una plataforma donde los usuarios pueden consultar las oportunidades vigentes, conocer los requisitos específicos para participar y postularse de manera eficiente.",
        link: "https://redemprende.lasbambas.com/",
        image: "/red-proyecto.webp",
        tags: [
            TAGS.REACT,
            TAGS.TS,
            TAGS.FIGMA,
            TAGS.TAILWIND,
            TAGS["C#"],
            TAGS.ASP,
            TAGS.POSTMAN,
            TAGS.SQL_SERVER,
            TAGS.AZURE,
            TAGS.SWAGGER,
            TAGS.VITE,
        ],
    },
    {
        title: "Fast Pizza",
        description:
            "Deliciosa experiencia e-commerce: explora, filtra y personaliza tus pizzas favoritas. Navega fácilmente con React Router y disfruta de un carrito dinámico gestionado con Redux.",
        link: "https://pizza-cart-react-vite.netlify.app",
        github: "https://github.com/gngian10/Pizza-Cart",
        image: "/pizza-proyecto.webp",
        tags: [
            TAGS.REACT,
            TAGS.REACT_ROUTER,
            TAGS.REDUX,
            TAGS.TS,
            TAGS.TAILWIND,
            TAGS.VITE,
        ],
    },
    {
        title: "Boardly",
        description:
            "Aplicación de productividad para capturar ideas, convertirlas en notas accionables y ordenarlas en tableros visuales.",
        github: "https://github.com/gngian10/boardly",
        image: "/boardly-proyecto.webp",
        tags: [
            TAGS.REACT,
            TAGS.REACT_ROUTER,
            TAGS.TS,
            TAGS.TAILWIND,
            TAGS.VITE,
            TAGS.NODE,
            TAGS.MONGODB,
            TAGS.POSTMAN,
        ],
    },
    {
        title: "Kanban Board",
        description:
            "Tablero Kanban moderno para planificar tareas, con drag-and-drop, autosave y persistencia. Ideal para proyectos personales o equipos que necesitan foco y visibilidad en su proyecto.",
        link: "https://codepen.io/giandev10/pen/ByyMGrp",
        github: "https://github.com/gngian10/Kanban-Board",
        image: "/board-proyecto.webp",
        tags: [TAGS.HTML, TAGS.CSS, TAGS.JS],
    },
    {
        title: "Shopping List",
        description:
            "Aplicación que permite organizar compras de manera ágil. Con una interfaz en la que el usuario puede añadir, editar, eliminar y marcar productos en tiempo real, manteniendo siempre su lista actualizada y ordenada. Está diseñada para ser ligera, rápida y adaptable, demostrando buenas prácticas en manejo de estado y experiencia de usuario.",
        github: "https://github.com/gngian10/Shopping-List",
        image: "/shopping-list-proyecto.webp",
        tags: [TAGS["JETPACK COMPOSE"], TAGS.ANDROID, TAGS.KOTLIN],
    },
];
