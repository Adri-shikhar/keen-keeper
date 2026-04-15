/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,jsx,ts,tsx}",
    ],
    theme: {
        extend: {
            height: {
                '413px': '413px',
            },
            maxWidth: {
                '1600px': '1600px',
            },
        },
    },
    plugins: [],
}
