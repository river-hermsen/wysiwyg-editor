<template>
  <div id="app">
    <nav class="navbar navbar-light">
      <div class="navbar-brand">
        <img src="./assets/logo.png" width="30" height="30" class="d-inline-block align-top" alt="">
        Code Editor
      </div>
    </nav>
    <div class="row">
      <div class="col-md-6 editor-views" id="html-editor-view">
        <html-editor></html-editor>
      </div>
      <div class="col-md-6 editor-views" id="css-editor-view">
        <css-editor></css-editor>
      </div>
      <div class="col-md-12" id="viewer-view">
        <viewer></viewer>
      </div>
    </div>
  </div>
</template>

<script>
import htmlEditor from './components/htmlEditor.vue'
import cssEditor from './components/cssEditor.vue'
import Viewer from './components/Viewer.vue'
export default {
  name: 'app',
  components: {
    htmlEditor,
    Viewer,
    cssEditor
  }
}
</script>

<style lang="scss">
body {
  background-color:  #112435;
  color: white;
}
nav {
  background-color: #112435;
  .navbar-brand {
    color: white !important;
  }
}
.editor-views {
  height: 500px;
}

#html-editor-view {
  padding-right: 0px;
}

#css-editor-view {
  padding-left: 0px;
}
.editor-type-header {
  background-color: #112435;
  margin: 0;
}

.warning-code {
  color: #dc3545;
  display: inline;
}

</style>
