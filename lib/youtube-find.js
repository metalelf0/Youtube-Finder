(function(win){

  "use strict";

  Array.prototype.clean = function(deleteValue) {
    for (var i = 0; i < this.length; i++) {
      if (this[i] === deleteValue) {
        this.splice(i, 1);
        i--;
      }
    }
    return this;
  };

  function pad(number, length) {
    var str = '' + number;
    while (str.length < length) {
      str = '0' + str;
    }
    return str;
  }

  function append_to_input(input, content) {
    var current_input_content = input.val();
    input.val(current_input_content + content);
  }

  win.pad = pad;
  win.append_to_input = append_to_input;

})(this);
