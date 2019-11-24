<template lang="pug">
  div(class="hello")
    h1 {{ msg }}

    router-link(:to="basePath === '' ? '/' : basePath") Home
    span  | 
    router-link(:to="basePath.concat('/admin')") Admin
    span  | 
    router-link(:to="basePath.concat('/info')") Information
</template>

<script>
import ghpagesResolver from '@/mixins/ghpagesRouteResolver'

export default {
  name: 'Admin',
  mixins: [ghpagesResolver],

  data () {
    return {
      msg: 'Admin',
    }
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}

h1 {
  color: orange;
}
</style>
