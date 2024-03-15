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
        'picture': "linear-gradient(150deg, rgba(23,20,33,1) 0%, rgba(23,20,33,0) 33%, rgba(23,20,33,0) 66%, rgba(23,20,33,1) 100%), url('/images/picture.jpeg')",
        'card': 'rgba(0,0,0,0.24)',
        'chest': "linear-gradient(180deg, rgba(23,20,33, 0.24) 0, rgba(23,20,33, 0.24)  100%), url('/chest.png')",
        'swot': "linear-gradient(180deg, rgba(23,20,33, 0.24) 0, rgba(23,20,33, 0.24)  100%), url('/swot.png')",
        'synsquad': "linear-gradient(180deg, rgba(23,20,33, 0.24) 0, rgba(23,20,33, 0.24)  100%), url('/synsquad.png')",
      },
      boxShadow: {
        'default': '0 0px 24px 2px rgb(249, 249, 249, 0.3)',
        'button': '0 0px 6px 1px rgba(249, 249, 249, 0.3)'
      },
      fontFamily: {
        poppins: ['var(--font-poppins)', 'sans-serif'],
        inter: ['var(--font-inter)', 'sans-serif']
      },
      colors: {
        'background': 'var(--background)',
        'border': 'var(--border)',
        'light-text': 'var(--light-text)',
        'lighter-text': 'var(--lighter-text)',
        'primary': 'var(--primary)',
        'chest-pain-score': 'rgba(160, 209, 86, 0.5)',
        'swot-service-engenharia': '',
        'synsquad': ''
      }
    },
  },
  plugins: [
  ],
};
export default config;
