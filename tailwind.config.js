/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: "#FD5948",
        border: "#eee",
        lemonade: "#FBFFA7",
        pearmint: "#B6FFC0",
        lavender: "#D5B3FF",
        lightBlue: "#B1C5FF",
        facebook: "#3477F2",
        twitter: "#1DA1F2",
        youtube: "#FF001D",
        instagram: "#F77737",
        selects: "#eee"
      },
      screens: {
        '2xl': {'max': '1535px'},
        // => @media (max-width: 1535px) { ... }

        'xl': {'max': '1279px'},
        // => @media (max-width: 1279px) { ... }

        'lg': {'max': '1023px'},
        // => @media (max-width: 1023px) { ... }

        'md': {'max': '767px'},
        // => @media (max-width: 767px) { ... }

        'sm': {'max': '639px'},
        // => @media (max-width: 639px) { ... }
      },
      backgroundImage: {
        'image-one' : "url('/assets/photo-1.jpg')",
        'image-two' : "url('/assets/photo-2.jpg')",
        'image-three' : "url('/assets/photo-3.jpg')",
        'image-four' : "url('/assets/photo-4.jpg')",
        'image-five' : "url('/assets/photo-5.jpg')",
        'image-six' : "url('/assets/photo-6.jpg')",
        'image-seven' : "url('/assets/photo-7.jpg')",
        'image-eight' : "url('/assets/photo-8.jpg')",
        'image-poster' : "url('/assets/poster-meet-the-makers.jpg')"
      }
    },
  },
  plugins: [],
}
