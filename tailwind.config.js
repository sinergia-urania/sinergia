// tailwind.config.js
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      animation: {
        'spin-slow': 'spin 4s linear infinite',
        'fade-in-eye': 'fadeInEye 3s ease-out forwards', // ključna reč: forwards
      },
      keyframes: {
        fadeInEye: {
          '0%': { opacity: '0' },
          '100%': { opacity: '0.4' }, // zadržava se na 40%
        },
      },
      backgroundImage: {
        space: "url('/background-space.png')",
      },
    },
  },
  plugins: [],
};
