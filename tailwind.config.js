const plugin = require('tailwindcss/plugin');

module.exports = {
  // Les fichiers où les classes Tailwind sont utilisées
  content: [
    './pages/**/*.{js,ts,jsx,tsx}', // Pour les pages Next.js ou React
    './components/**/*.{js,ts,jsx,tsx}', // Pour les composants réutilisables
  ],
  theme: {
    extend: {
      // Ajout de nouvelles couleurs pour la personnalisation
      colors: {
        main: '#ff0000', // Rouge principal
        body: '#0f0f0f', // Couleur principale pour le fond
      },
      // Ajout d'espacements personnalisés pour le design
      spacing: {
        headerHeight: '8rem', // Hauteur de l'en-tête
        headerShrinkHeight: '5rem', // Hauteur réduite de l'en-tête
      },
      // Définition des points de rupture pour le responsive
      screens: {
        sm: '640px', // Petit écran
        md: '768px', // Écran moyen
        lg: '1024px', // Grand écran
        xl: '1280px', // Très grand écran
        '2xl': '1536px', // Super grand écran
        'hover-hover': { raw: '(hover: hover)' }, // Pour les appareils supportant le hover
      },
      // Ajout de typographie pour le texte
      typography: (theme) => ({
        DEFAULT: {
          css: {
            color: theme('colors.body'),
            a: {
              color: theme('colors.main'),
              '&:hover': {
                color: theme('colors.main'),
              },
            },
          },
        },
      }),
    },
  },
  // Ajout de plugins pour des fonctionnalités avancées
  plugins: [
    require('@tailwindcss/forms'), // Pour styliser les formulaires
    require('@tailwindcss/typography'), // Pour gérer le texte et les articles
    require('@tailwindcss/aspect-ratio'), // Pour gérer les ratios (ex : images responsives)
    require('@tailwindcss/line-clamp'), // Pour limiter les lignes de texte
    plugin(function ({ addVariant }) {
      // Ajout de variantes personnalisées
      addVariant('&>*~*', '&>*', 'not-last', '&:not(:last-child)');
    }),
  ],
};
