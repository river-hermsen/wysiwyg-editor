<template>
  <div class="">
    <div class="editor-type-header row">
      <h5 class="col-md-2">HTML</h5>
      <span v-show="errorHtml" class="warning-code col-md-1 offset-md-9"><i class="fas fa-exclamation-triangle"></i></span>
    </div>
    <codemirror v-model="$store.state.htmlCode" :options='cmOption'></codemirror>
  </div>
</template>

<script>
import { codemirror } from 'vue-codemirror'
import 'codemirror/lib/codemirror.css'
import 'codemirror/theme/rubyblue.css'
import 'codemirror/keymap/sublime.js'

export default {
  data() {
    return {
      cmOption: {
        tabSize: 4,
        styleActiveLine: true,
        lineNumbers: true,
        line: true,
        foldGutter: true,
        styleSelectedText: true,
        mode: 'text/html',
        keyMap: "sublime",
        matchBrackets: true,
        showCursorWhenSelecting: true,
        theme: "rubyblue",
        extraKeys: { "Ctrl": "autocomplete" },
        hintOptions:{
          completeSingle: false
        }
      },
      errorHtml: false
    }
  },
  components: {
    codemirror
  }
}
</script>

<style>
</style>
