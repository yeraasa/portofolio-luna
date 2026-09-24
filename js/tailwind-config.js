tailwind.config = {
    darkMode: "class",
    theme: {
        extend: {
            "colors": {
                "surface-variant": "#e2e2e2",
                "primary-container": "#1b1b1b",
                "outline": "#7e7576",
                "on-tertiary-fixed": "#1b1c1c",
                "on-background": "#1b1b1b",
                "surface-tint": "#5e5e5e",
                "on-secondary-fixed": "#1a1c1c",
                "secondary-fixed": "#e2e2e2",
                "surface-container": "#eeeeee",
                "inverse-primary": "#c6c6c6",
                "tertiary-container": "#1b1c1c",
                "on-tertiary": "#ffffff",
                "on-surface": "#1b1b1b",
                "on-primary-fixed": "#1b1b1b",
                "background": "#f9f9f9",
                "surface-container-low": "#f3f3f3",
                "on-secondary": "#ffffff",
                "on-error-container": "#93000a",
                "surface": "#f9f9f9",
                "surface-container-highest": "#e2e2e2",
                "inverse-on-surface": "#f1f1f1",
                "inverse-surface": "#303030",
                "surface-dim": "#dadada",
                "on-tertiary-container": "#848484",
                "surface-container-lowest": "#ffffff",
                "on-tertiary-fixed-variant": "#464747",
                "on-secondary-fixed-variant": "#454747",
                "on-secondary-container": "#616363",
                "surface-container-high": "#e8e8e8",
                "on-error": "#ffffff",
                "error-container": "#ffdad6",
                "tertiary-fixed": "#e4e2e2",
                "secondary-container": "#dfe0e0",
                "outline-variant": "#cfc4c5",
                "error": "#ba1a1a",
                "tertiary-fixed-dim": "#c7c6c6",
                "primary": "#000000",
                "tertiary": "#000000",
                "surface-bright": "#f9f9f9",
                "on-surface-variant": "#4c4546",
                "on-primary": "#ffffff",
                "secondary": "#5d5f5f",
                "on-primary-fixed-variant": "#474747",
                "primary-fixed": "#e2e2e2",
                "secondary-fixed-dim": "#c6c6c7",
                "on-primary-container": "#848484",
                "primary-fixed-dim": "#c6c6c6"
            },
            "borderRadius": {
                "DEFAULT": "0.25rem",
                "lg": "0.5rem",
                "xl": "0.75rem",
                "full": "9999px"
            },
            "spacing": {
                "margin": "64px",
                "container-max": "1440px",
                "gutter": "32px",
                "stack-sm": "8px",
                "columns": "12",
                "stack-md": "16px",
                "stack-lg": "48px",
                "section-gap": "80px"
            },
            "fontFamily": {
                "headline-lg": ["Syne"],
                "body-lg": ["Inter"],
                "label-mono": ["JetBrains Mono"],
                "headline-md": ["Syne"],
                "body-md": ["Inter"],
                "display-xl": ["Syne"],
                "display-2xl": ["Syne"]
            },
            "fontSize": {
                "headline-lg": ["44px", { "lineHeight": "56px", "letterSpacing": "-0.01em", "fontWeight": "700" }],
                "body-lg": ["15px", { "lineHeight": "32px", "fontWeight": "400" }],
                "label-mono": ["12px", { "lineHeight": "16px", "letterSpacing": "0.05em", "fontWeight": "500" }],
                "headline-md": ["25px", { "lineHeight": "40px", "fontWeight": "600" }],
                "body-md": ["16px", { "lineHeight": "26px", "fontWeight": "400" }],
                "display-xl": ["65px", { "lineHeight": "88px", "letterSpacing": "-0.02em", "fontWeight": "700" }],
                "display-2xl": ["105px", { "lineHeight": "110px", "letterSpacing": "-0.04em", "fontWeight": "800" }]
            }

        },
    },
    plugins: [
        function ({ addComponents }) {
            addComponents({

                ".bloom-preview": {
                    "background-color": "#f9f9f9",
                    "border": "1px solid #000000",
                    "color": "#000000",
                    "overflow": "hidden"
                },

                ".bloom-nav": {
                    "display": "flex",
                    "justify-content": "space-between",
                    "align-items": "center",
                    "padding": "16px 20px",
                    "border-bottom": "1px solid #000000"
                },

                ".bloom-logo": {
                    "font-family": "Syne",
                    "font-size": "24px",
                    "font-weight": "700"
                },

                ".bloom-menu": {
                    "display": "flex",
                    "gap": "20px",
                    "font-family": "JetBrains Mono",
                    "font-size": "10px",
                    "letter-spacing": "0.05em"
                },

                ".bloom-content": {
                    "display": "grid",
                    "grid-template-columns": "1fr 1fr",
                    "min-height": "220px"
                },

                ".bloom-copy": {
                    "padding": "24px",
                    "display": "flex",
                    "flex-direction": "column",
                    "justify-content": "space-between",
                    "border-right": "1px solid #000000"
                },

                ".bloom-copy span": {
                    "font-family": "JetBrains Mono",
                    "font-size": "10px",
                    "letter-spacing": "0.05em"
                },

                ".bloom-copy h3": {
                    "font-family": "Syne",
                    "font-size": "32px",
                    "line-height": "0.95",
                    "font-weight": "700",
                    "text-transform": "uppercase",
                    "margin": "20px 0"
                },

                ".bloom-copy button": {
                    "font-family": "JetBrains Mono",
                    "font-size": "9px",
                    "border": "1px solid #000000",
                    "padding": "8px 10px",
                    "width": "fit-content",
                    "background": "transparent"
                },

                ".bloom-art": {
                    "position": "relative",
                    "display": "flex",
                    "align-items": "center",
                    "justify-content": "center",
                    "background-color": "#e2e2e2",
                    "overflow": "hidden"
                },

                ".bloom-circle": {
                    "width": "130px",
                    "height": "130px",
                    "border": "1px solid #000000",
                    "border-radius": "9999px",
                    "display": "flex",
                    "align-items": "center",
                    "justify-content": "center",
                    "font-family": "JetBrains Mono",
                    "font-size": "10px",
                    "letter-spacing": "0.1em"
                },

                ".bloom-line": {
                    "position": "absolute",
                    "height": "1px",
                    "width": "180px",
                    "background-color": "#000000"
                },

                ".line-one": {
                    "transform": "rotate(45deg)"
                },

                ".line-two": {
                    "transform": "rotate(-45deg)"
                },

                ".bloom-footer": {
                    "display": "flex",
                    "justify-content": "space-between",
                    "padding": "10px 20px",
                    "border-top": "1px solid #000000",
                    "font-family": "JetBrains Mono",
                    "font-size": "9px"
                },

                ".hero-section": {
                    "min-height": "calc(100vh - 80px)",
                    "display": "grid",
                    "align-items": "center"
                },

                ".hero-visual": {
                    "position": "relative",
                    "height": "500px"
                },

                ".hero-project": {
                    "position": "absolute",
                    "top": "32px",
                    "left": "16px",
                    "width": "82%",
                    "background-color": "#f9f9f9",
                    "border": "1px solid #000000",
                    "padding": "12px",
                    "box-shadow": "12px 12px 0px #000000"
                },

                ".hero-mobile": {
                    "position": "absolute",
                    "right": "8px",
                    "bottom": "8px",
                    "width": "155px",
                    "background-color": "#f9f9f9",
                    "border": "2px solid #000000",
                    "padding": "8px",
                    "box-shadow": "8px 8px 0px #000000"
                },

                ".hero-tag": {
                    "position": "absolute",
                    "background-color": "#000000",
                    "color": "#ffffff",
                    "padding": "12px 16px"
                },

                ".hero-figma": {
                    "position": "absolute",
                    "left": "0",
                    "bottom": "64px",
                    "background-color": "#f9f9f9",
                    "border": "1px solid #000000",
                    "padding": "12px 16px",
                    "transform": "rotate(-6deg)"
                }

            })

        }
    ]
}
