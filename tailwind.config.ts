import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Brand Colors
        "blue": {
          "100": "rgba(236, 235, 250, 1)",
          "200": "rgba(208, 207, 243, 1)",
          "300": "rgba(171, 169, 234, 1)",
          "400": "rgba(132, 128, 224, 1)",
          "500": "rgba(95, 90, 215, 1)",
          "600": "rgba(60, 54, 206, 1)",
          "700": "rgba(51, 46, 175, 1)",
          "800": "rgba(43, 38, 146, 1)",
          "900": "rgba(34, 31, 117, 1)",
          "1000": "rgba(8, 15, 40, 1)",
        },
        "violet": {
          "100": "rgba(241, 235, 250, 1)",
          "200": "rgba(222, 207, 243, 1)",
          "300": "rgba(196, 169, 234, 1)",
          "400": "rgba(168, 128, 224, 1)",
          "500": "rgba(142, 90, 215, 1)",
          "600": "rgba(117, 54, 206, 1)",
          "700": "rgba(99, 46, 175, 1)",
          "800": "rgba(83, 38, 146, 1)",
          "900": "rgba(67, 31, 117, 1)",
          "1000": "rgba(53, 24, 93, 1)",
        },
        "grey": {
          "100": "rgba(236, 237, 239, 1)",
          "200": "rgba(210, 211, 217, 1)",
          "300": "rgba(174, 177, 187, 1)",
          "400": "rgba(137, 140, 155, 1)",
          "500": "rgba(101, 106, 125, 1)",
          "600": "rgba(67, 73, 97, 1)",
          "700": "rgba(57, 62, 82, 1)",
          "800": "rgba(48, 52, 69, 1)",
          "900": "rgba(38, 42, 55, 1)",
          "1000": "rgba(30, 33, 44, 1)",
        },
        
        // Alias Colors
        "primary": {
          "100": "var(--primary-100)",
          "200": "var(--primary-200)",
          "300": "var(--primary-300)",
          "400": "var(--primary-400)",
          "500": "var(--primary-500)",
          "DEFAULT": "var(--primary-default)",
          "700": "var(--primary-700)",
          "800": "var(--primary-800)",
          "900": "var(--primary-900)",
          "1000": "var(--primary-1000)",
        },
        "secondary": {
          "100": "var(--secondary-100)",
          "200": "var(--secondary-200)",
          "300": "var(--secondary-300)",
          "400": "var(--secondary-400)",
          "500": "var(--secondary-500)",
          "DEFAULT": "var(--secondary-default)",
          "700": "var(--secondary-700)",
          "800": "var(--secondary-800)",
          "900": "var(--secondary-900)",
          "1000": "var(--secondary-1000)",
        },
        "neutral": {
          "100": "var(--neutral-100)",
          "200": "var(--neutral-200)",
          "300": "var(--neutral-300)",
          "400": "var(--neutral-400)",
          "500": "var(--neutral-500)",
          "DEFAULT": "var(--neutral-default)",
          "700": "var(--neutral-700)",
          "800": "var(--neutral-800)",
          "900": "var(--neutral-900)",
          "1000": "var(--neutral-1000)",
          "black": "var(--neutral-black)",
          "white": "var(--neutral-white)",
          "overlay": "var(--neutral-overlay)",
        },
        
        // Mapped Colors
        "text": {
          "headings": "var(--text-headings)",
          "body": "var(--text-body)",
          "action": "var(--text-action)",
          "action-hover": "var(--text-action-hover)",
          "disabled": "var(--text-disabled)",
          "on-action": "var(--text-on-action)",
          "on-disabled": "var(--text-on-disabled)",
        },
        "surface": {
          "primary": "var(--surface-primary)",
          "secondary": "var(--surface-secondary)",
          "overlay": "var(--surface-overlay)",
          "action": "var(--surface-action)",
          "action-hover": "var(--surface-action-hover)",
          "disabled": "var(--surface-disabled)",
        },
        "icon": {
          "primary": "var(--icon-primary)",
          "on-action": "var(--icon-on-action)",
          "on-disabled": "var(--icon-on-disabled)",
        },
        "border": {
          "primary": "var(--border-primary)",
          "secondary": "var(--border-secondary)",
          "tertiary": "var(--border-tertiary)",
          "action": "var(--border-action)",
          "action-hover": "var(--border-action-hover)",
          "disabled": "var(--border-disabled)",
          "focus": "var(--border-focus)",
        },
      },
      
      // Font Families
      fontFamily: {
        heading: ["var(--type-font-family-heading)", "sans-serif"],
        body: ["var(--type-font-family-body)", "sans-serif"],
      },
      
      // Font Weight
      fontWeight: {
        light: "var(--type-font-weight-light)",
        regular: "var(--type-font-weight-regular)",
        medium: "var(--type-font-weight-medium)",
        semibold: "var(--type-font-weight-semibold)",
        bold: "var(--type-font-weight-bold)",
      },
      
      // Border Width
      borderWidth: {
        none: "var(--border-width-none)",
        sm: "var(--border-width-sm)",
        md: "var(--border-width-md)",
        lg: "var(--border-width-lg)",
      },
      
      // Border Radius
      borderRadius: {
        none: "var(--border-radius-none)",
        xs: "var(--border-radius-xs)",
        sm: "var(--border-radius-sm)",
        md: "var(--border-radius-md)",
        lg: "var(--border-radius-lg)",
        xl: "var(--border-radius-xl)",
        round: "var(--border-radius-round)",
      },
      
      // Font Sizes
      fontSize: {
        // Body Font Sizes
        "body-xs": ["var(--fontsize-body-xs)", {
          lineHeight: "var(--line-height-body-xs)",
        }],
        "body-sm": ["var(--fontsize-body-sm)", {
          lineHeight: "var(--line-height-body-sm)",
        }],
        "body-md": ["var(--fontsize-body-md)", {
          lineHeight: "var(--line-height-body-md)",
        }],
        "body-lg": ["var(--fontsize-body-lg)", {
          lineHeight: "var(--line-height-body-lg)",
        }],
        
        // Heading Font Sizes
        "h6": ["var(--fontsize-heading-h6)", {
          lineHeight: "var(--line-height-heading-h6)",
        }],
        "h5": ["var(--fontsize-heading-h5)", {
          lineHeight: "var(--line-height-heading-h5)",
        }],
        "h4": ["var(--fontsize-heading-h4)", {
          lineHeight: "var(--line-height-heading-h4)",
        }],
        "h3": ["var(--fontsize-heading-h3)", {
          lineHeight: "var(--line-height-heading-h3)",
        }],
        "h2": ["var(--fontsize-heading-h2)", {
          lineHeight: "var(--line-height-heading-h2)",
        }],
        "h1": ["var(--fontsize-heading-h1)", {
          lineHeight: "var(--line-height-heading-h1)",
        }],
      },
      
      // Spacing
      spacing: {
        "3xs": "var(--spacing-3xs)",
        "2xs": "var(--spacing-2xs)",
        "xs": "var(--spacing-xs)",
        "sm": "var(--spacing-sm)",
        "md": "var(--spacing-md)",
        "lg": "var(--spacing-lg)",
        "xl": "var(--spacing-xl)",
        "2xl": "var(--spacing-2xl)",
        "3xl": "var(--spacing-3xl)",
      },
      
      // Sizing
      sizing: {
        "3xs": "var(--sizing-3xs)",
        "2xs": "var(--sizing-2xs)",
        "xs": "var(--sizing-xs)",
        "sm": "var(--sizing-sm)",
        "md": "var(--sizing-md)",
        "lg": "var(--sizing-lg)",
        "xl": "var(--sizing-xl)",
        "2xl": "var(--sizing-2xl)",
        "3xl": "var(--sizing-3xl)",
      },
    },
  },
  plugins: [],
};

export default config;

