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
    var table_data = { rows: [] };
    for (var n = 0; n < count; n++) {
      table_data.rows.push({index: n, padded_index: pad(n, 2)});
    }
    var source   = $("#table-template").html();
    var template = Handlebars.compile(source);
    table.html(template(table_data));
  }

  function write_result_to_table(table, row_index, link, title) {
    var table_row = table.find('tbody tr#result_row_' + pad(row_index, 2));
    var source   = $("#table-row-template").html();
    var template = Handlebars.compile(source);
    var context = {index: row_index, padded_index: pad(row_index, 2), url: link, video_title: title};
    table_row.html(template(context));
  }

  function copy_links_from_table_to_pre(table, pre) {
    pre.html('');
    $.each(table.find('tbody tr td.url'), function() {
      var value = $(this).html();
      pre.append(value);
      pre.append('\n');
    });
    pre.slideDown();
  }

  // function bindings to global scope

  win.pad = pad;
  win.append_to_input = append_to_input;
  win.prepare_numbered_rows = prepare_numbered_rows;
  win.write_result_to_table = write_result_to_table;
  win.copy_links_from_table_to_pre = copy_links_from_table_to_pre;

  // private functions

  function empty_table(table) {
    table.find('tbody').empty();
  }

})(this);
