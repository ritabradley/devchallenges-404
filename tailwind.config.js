module.exports = {
  future : {
      // removeDeprecatedGapUtilities: true,
      // purgeLayersByDefault: true,
  },
  purge : [],
  theme : {
    fontFamily : {
      display : [ 'Inconsolata', 'monospace' ],
      body : [ 'Space Mono', 'monospace' ],
      footer : [ 'Montserrat', 'sans-serif' ],
    },
    backgroundColor : (theme) => ({
      primary : '#333',
    }),

    extend : {},
  },
  variants : {},
  plugins : [],
};
