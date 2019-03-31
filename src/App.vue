<template>
  <div id="app">
    <h2>Scoped CSS</h2>
    <ParentComponent></ParentComponent>
    <h2>Styled Components</h2>
    <parent-component-styled>
      <p>Parent</p>
      <child-component-styled>Child</child-component-styled>
    </parent-component-styled>
    <h2>CSS</h2>
    <ParentComponentCSS></ParentComponentCSS>
  </div>
</template>

<script>
  import ParentComponent from './components/scoped-components/ParentComponent'
  import ParentComponentCSS from './components/css-components/ParentComponentCSS'

  export default {
    name: 'App',
    components: {
      ParentComponent,
      ParentComponentCSS
    }
  }
</script>

<style>
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
  }
</style>
