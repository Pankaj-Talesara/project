/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./src/pages/**/*.{js,ts,jsx,tsx}",
        "./src/components/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                evening: "#2A1D2E",
                "evening-dark": "#1B121E",
                heliotroupe: "#99173C",
                Vichyssoise: "#E9CA78",
                "Vichyssoise-dark": "#E9CA78",
                dirt: "#569C97",
                "dirt-light": "#787273",
                curiousity: "#DCE9BE",
                piup: "#59515D",
                browny: "#73626E",
                color1: "#2b1d2f",
                color2: "#162237",
            },
        },
        fontFamily: {
            sans: ["Montserrat"],
            roboto: ["Roboto", "sans-serif"],
            Montserrat: ["Montserrat"],
        },
    },
    plugins: [
        require("@tailwindcss/forms"),
        require("@headlessui/tailwindcss"),
    ],

    variants: {
        extend: {
            border: ["focus"],
            ring: ["focus"],
        },
    },
};
