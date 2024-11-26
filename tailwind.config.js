/** @type {import('tailwindcss').Config} */
export default {
  content: [],
  theme: {
    extend: {
      backgroundImage: {
        'hero-pattern': 'url(\'/assets/images/fake.webp\')',
      },
      height: {
        section: 'calc(100vh - 100px)',
      },
    },
  },
  plugins: [],
}
