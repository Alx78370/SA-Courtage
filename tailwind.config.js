/** @type {import('tailwindcss').Config} */
export default {
  content: [],
  theme: {
    extend: {
      backgroundImage: {
        "hero-pattern": "url('/assets/images/fake.webp')",
      },
      height: {
        section: "calc(100vh - 88px)",
        sectionlg: "calc(100vh - 319px)",
        sectionxl: "calc(100vh - 366px)",
      },
    },
  },
  plugins: [],
};
