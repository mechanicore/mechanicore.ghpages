import { GH_PAGES } from '@/mixins/ghpagesRouteResolver/constants'

export default {
  computed: {
    basePath() {
      return (process.env.NODE_ENV === 'production') ? GH_PAGES.REPOSITORY : ''
    },
  },
}