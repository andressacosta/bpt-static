module.exports = {
  watch: true,
  plugins: [
    require('postcss-cssnext', {}),
    require('postcss-fontpath', {
	  formats: [
	    { type: 'woff2', ext: 'woff2' },
	    { type: 'woff', ext: 'woff' }
	  ]
	})
  ]
}