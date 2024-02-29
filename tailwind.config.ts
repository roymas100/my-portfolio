import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'picture': "linear-gradient(150deg, rgba(23,20,33,1) 0%, rgba(23,20,33,0) 33%, rgba(23,20,33,0) 66%, rgba(23,20,33,1) 100%), url('/picture.jpeg')",
        // gradient: 'linear-gradient(150deg, rgba(23,20,33,1) 100%, rgba(23,20,33,1) 0%, rgba(23,20,33,1)  100%);'
      },
      fontFamily: {
        poppins: ['var(--font-poppins)', 'sans-serif'],
        inter: ['var(--font-inter)', 'sans-serif']
      },
      colors: {
        'border': 'var(--border)',
        'light-text': 'var(--light-text)',
        'lighter-text': 'var(--lighter-text)',
        'primary': 'var(--primary)'
      }
    },
  },
  plugins: [
  ],
};
export default config;
