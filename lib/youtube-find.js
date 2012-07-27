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

  function prepare_numbered_rows(table, count) {
    empty_table(table);
    var table_body = table.find('tbody');
    for (var n = 0; n < count; n++) {
      table_body.append('<tr id="result_row_' + pad(n, 2) + '"><td class="index"></td><td class="url"></td><td class="title"></td></tr>');
    }
  }

  function write_results_to_table(table, row_index, link, title) {
    var table_row = table.find('tbody tr#result_row_' + pad(row_index, 2));
    table_row.find('td.index').append(row_index);
    table_row.find('td.url').append(link);
    table_row.find('td.title').append(title);
  }

  // private functions

  function empty_table(table) {
    table.find('tbody').empty();
  }

  win.pad = pad;
  win.append_to_input = append_to_input;
  win.prepare_numbered_rows = prepare_numbered_rows;
  win.write_results_to_table = write_results_to_table;

})(this);
