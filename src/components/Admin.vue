<template lang="pug">
  div(class="hello")
    h1 {{ msg }}

    router-link(:to="basePath" ref='home') Home
    span  | 
    router-link(:to="basePath.concat('admin')" ref='admin') Admin
    span  | 
    router-link(:to="basePath.concat('info')" ref='info') Information
</template>

<script>
import utilMixin from '@/mixins/utilMixin'

export default {
  name: 'Admin',
  mixins: [utilMixin],

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
