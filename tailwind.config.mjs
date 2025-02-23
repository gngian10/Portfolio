/** @type {import('tailwindcss').Config} */
export default {
    content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
    darkMode: "class",
    theme: {
        extend: {
            width: {
                "custom-width": "min(896px, 100%)",
            },
            margin: {
                16.5: "72px",
            },
        },
    },
    plugins: [],
};
