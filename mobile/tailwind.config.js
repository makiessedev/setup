/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./App.{js,jsx,ts,tsx}", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        background: '#09090A',
      },
      fontFamily: {
        'inter-regular': 'Inter_400Regular', 
        'inter-semibold': 'Inter_600SemiBold', 
        'inter-bold': 'Inter_700Bold', 
        'extra-bold': 'Inter_800ExtraBold',
      }
    },
  },
  plugins: [],
}

