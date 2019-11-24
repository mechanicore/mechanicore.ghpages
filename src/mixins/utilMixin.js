import { PRODUCTION, GH_PAGES } from '@/defines/constants'

export default {
  computed: {
    basePath() {
      return (PRODUCTION) ? GH_PAGES.REPOSITORY : ''
    },
  },
}