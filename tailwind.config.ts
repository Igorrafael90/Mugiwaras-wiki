import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  safelist: [
    'hover:border-red-500',
    'hover:border-green-500',
    'hover:border-yellow-500',
    'hover:border-orange-500',
    "hover:border-yellow-800",
    'hover:border-pink-500',
    'hover:border-gray-500',
    'hover:border-purple-500',
    'hover:border-blue-500',
    'hover:border-blue-300',
    'shadow-orange-300',
    'shadow-green-300',
    'shadow-yellow-300',
    'shadow-orange-500',
    'shadow-yellow-900',
    'shadow-pink-500',
    'shadow-gray-500',
    'shadow-purple-500',
    'shadow-blue-500',
    'shadow-blue-300'
    // Inclua todas as outras variações que você usará.
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
};
export default config;
