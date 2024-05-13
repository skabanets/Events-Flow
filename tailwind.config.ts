/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    fontFamily: {
      'nunito-regular': ['Nunito-Regular', 'sans-serif'],
      'nunito-medium': ['Nunito-Medium', 'sans-serif'],
      'nunito-semibold': ['Nunito-SemiBold', 'sans-serif'],
    },
    extend: {},
  },
  plugins: [],
};
