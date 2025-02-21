import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      animation: {
        fadeIn: 'fadeIn 0.5s ease-out',
        'gradient-x': 'gradient-x 15s ease infinite',
        'gradient-y': 'gradient-y 15s ease infinite',
        'gradient-xy': 'gradient-xy 15s ease infinite',
        'gradient-spin': 'gradient-spin 20s linear infinite',
        'pulse-slow': 'pulse 8s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'gradient-move': 'gradient-move 8s linear infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0', transform: 'translateY(10px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        'gradient-x': {
          '0%, 100%': {
            'background-position': '200% 0',
          },
          '50%': {
            'background-position': '0 0',
          },
        },
        'gradient-y': {
          '0%, 100%': {
            'background-position': '0 200%',
          },
          '50%': {
            'background-position': '0 0',
          },
        },
        'gradient-xy': {
          '0%, 100%': {
            'background-position': '200% 200%',
          },
          '50%': {
            'background-position': '0 0',
          },
        },
        'gradient-spin': {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(360deg)' },
        },
        'gradient-move': {
          '0%, 100%': {
            transform: 'translate(0%, 0%) rotate(30deg)',
          },
          '50%': {
            transform: 'translate(-20%, 0%) rotate(30deg)',
          }
        },
      },
    },
  },
  plugins: [],
} satisfies Config;
