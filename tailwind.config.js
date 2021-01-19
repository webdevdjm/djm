module.exports = {
  purge: {
    mode: "all",
    content: ["./**/*.html"],
    options: {
      whitelist: [],
    },
  },
  theme: {
    container: {
      center: true,
    },
    extend: {
      colors: {},
      // ~~~~~~~~~~~ Custom Google Fonts ~~~~~~~~~~~
      fontFamily: {
        // ~~~~~~~~~~~ Headings ~~~~~~~~~~~
        'ubuntu': ['ubuntu', 'sans-serif'],
        // ~~~~~~~~~~~ Body Copy ~~~~~~~~~~~
        'poppins': ['Poppins', 'sans-serif']
      },
    },
  },
  variants: {},
  plugins: [require("@tailwindcss/typography")],
  experimental: "all",
  future: {
    purgeLayersByDefault: true,
  },
};
