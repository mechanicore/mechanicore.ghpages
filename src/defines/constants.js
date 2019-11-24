console.log('---DEFINES')
console.log(process.env.NODE_ENV)

module.exports = {
  GH_PAGES: {
    BASE_PATH: '/',
    REPOSITORY : '/mechanicore.ghpages',
  },
  PRODUCTION: process.env.NODE_ENV === 'production',
}