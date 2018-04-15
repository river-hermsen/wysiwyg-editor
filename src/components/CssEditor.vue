<template>
  <div class="">
    <div class="editor-type-header row">
      <h5 class="col-md-2">CSS</h5>
      <span v-show="errorCss" class="warning-code col-md-1 offset-md-9"><i class="fas fa-exclamation-triangle"></i></span>
    </div>
    <div class="editor">
      <codemirror v-model="$store.state.cssCode" :options='cmOption' @changes='edit'></codemirror>
    </div>
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
        tabSize: 2,
        styleActiveLine: true,
        lineNumbers: true,
        line: true,
        foldGutter: true,
        styleSelectedText: true,
        mode: 'text/css',
        keyMap: "sublime",
        matchBrackets: true,
        showCursorWhenSelecting: true,
        theme: "rubyblue",
        extraKeys: { "Ctrl": "autocomplete" },
        hintOptions:{
          completeSingle: false
        }
      },
      errorCss: false
    }
  },
  components: {
    codemirror
  },
  methods: {
    loadCss() {
      try {
        var css = require('css');
        var obj = css.parse(this.$store.state.cssCode);
        // console.log(obj.stylesheet.rules);
        var vm = this;
        var styleTag = document.getElementById("stylesTag");
        // the style sheet
        var sheet = styleTag.sheet ? styleTag.sheet : styleTag.styleSheet;
        //clear styleSheet
        for (var i = 0; i < sheet.rules.length; i++) {
          sheet.deleteRule(i)
        }
        // sheet.rules = obj.stylesheet.rules;
        for (var i = 0; i < obj.stylesheet.rules.length; i++) {
          var fullValue = obj.stylesheet.rules[i].declarations[0].property + ': ' + obj.stylesheet.rules[i].declarations[0].value;
          var fullSelector = '#viewer-view ' + obj.stylesheet.rules[i].selectors[0];
          console.log(fullSelector + fullValue);
          sheet.addRule(fullSelector, fullValue, 0);
        }
        this.errorCss = false;
      } catch(err) {
        console.log('Error: ' + err);
        this.errorCss = true;
      }
    },
    edit() {
      this.loadCss();
    }
  },
  mounted: function () {
    this.loadCss();
  }
}
</script>

<style>
.CodeMirror {
  height: 460px;
  background-color: #1a364f !important;
}
</style>
