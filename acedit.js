(function ($) { 
    $(document).ready(function() {
      
      var editor;
      var textarea;
      
      if (typeof Drupal.settings.acedit != "undefined") {
        if (Drupal.settings.acedit.form == "css_injector") {  // CSS Injector
          editor = get_editor();
          editor.getSession().setMode("ace/mode/css");
          textarea = $('textarea[id="edit-css-text"]').hide();
          $('.grippie').hide();
          editor.getSession().setValue(textarea.val());
          editor.getSession().on('change', function(){
            textarea.val(editor.getSession().getValue());
          });
          editor.resize();
        }
        else if (Drupal.settings.acedit.form == "js_injector") {  // JS Injector
          editor = get_editor();
          editor.getSession().setMode("ace/mode/javascript");
          textarea = $('textarea[id="edit-js-text"]').hide();
          $('.grippie').hide();
          editor.getSession().setValue(textarea.val());
          editor.getSession().on('change', function(){
            textarea.val(editor.getSession().getValue());
          });
          editor.resize();
        }
      }
    });

    function get_editor() {
        $('.form-textarea-wrapper').prepend('<div id="acedit"></div>');
        var editor = ace.edit("acedit");
        editor.setTheme("ace/theme/textmate");
        $('#acedit').css(
          {
            'width' : '100%', 
            'height' : '400px', 
            'position' : 'relative',
            'border' : '1px solid #AAA'
          }
        );
                
        return editor;
    }
    
})(jQuery);