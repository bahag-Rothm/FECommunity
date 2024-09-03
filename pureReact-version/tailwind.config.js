/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./index-store.html",
        "./src/**/*.{html,js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            fontFamily: {
                taz: ["Taz", "sans-serif"],
            },
            colors: {
                "utility-success": "#537e1b",
                "utility-success-hover": "#426516",
                "base-dark": "#666666",
                "base-gray": "#707070",
                "base-light-darken": "#efefef",
                addition: "#648198",
                "blue-gray": "#667a8b",
                "brand-primary": "#ee1f26",
                "error-box": "#ff9900",
                "text-color": "#636363",
                selected: "#f21c2a",
                "red-500": "#f21c2a",
                "gray-300": "#edeced",
                "sky-500": "#3399cc",
            },
            width: {
                70: "280px",
                63: "63%",
            },
            height: {
                45: "45px",
            },
            fontWeight: {
                thin: 300,
                normal: 400,
                medium: 500,
                semibold: 600,
                bold: 700,
            },
            zIndex: {
                ...Array.from({ length: 101 }, (_, i) => i).reduce(
                    (acc, curr) => {
                        acc[curr] = curr;
                        return acc;
                    },
                    {}
                ),
            },
            screens: {
                "lp-xs": { max: "320px" },
                "lp-sm": "321px",
                "lp-md": "360px",
                "lp-lg": "768px",
                "lp-xl": "1024px",
                "lp-2xl": "1160px",
                "lp-3xl": "1440px",
                "lp-sb": "659px",
            },
            boxShadow: {
                sidebar:
                    "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)",
                "open-sidebar": "0 3px 6px rgba(0, 0, 0, 0.1);",
                footer: "  0px 0px #888, 0px -2px 5px #b9b6b697;",
                cancellation: " 0 8px 12px rgba(0, 0, 0, 0.1);",
                "home-card": " 0 2px 9px rgba(0, 0, 0, 0.1);",
                "home-card-hover": " 0 4px 16px rgba(0, 0, 0, 0.2);",
            },
            animation: {
                spin: "spin 1s ease infinite",
            },
            gridTemplateColumns: {
                "auto-fit-minmax": "repeat(auto-fit, minmax(96px, auto))",
                "home-grid": "repeat(auto-fit, minmax(300px, auto));",
            },
            backgroundImage: {
                "bh-standard": "url('/assets/V6.jpeg')",
                "Radio-img": "url('../public/assets/images/Radio.png')",
                "Checkbox-img": "url('../public/assets/images/Checkmark.png')",
            },
        },
        // DONT PUT STUFF BELOW THIS LINE UNLESS YOU KNOW WHAT YOU ARE DOING
    },
    plugins: [],
};
