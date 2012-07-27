(function() {

  "use strict";

  $('#lookup').click(function(ev) {
    ev.preventDefault();
    var lines = $('#queries').val().split('\n').clean("");
    prepare_numbered_rows($('#results-table'), lines.length);
    $.each(lines, function(index){
      console.log("" + this);
      $.ajax({
        url: 'http://gdata.youtube.com/feeds/api/videos?callback=?',
        dataType: 'jsonp',
        data: { alt: 'json', q: ""+this },
        success: function(json){
          write_results_to_table($('#results-table'), index, json.feed.entry[0].link[0].href, json.feed.entry[0].title.$t );
          return index;
        }
      });
    });
    $('#results-table').show();
  });

  $('#prepend').click(function(ev) {
    ev.preventDefault();
    var strings = $('#queries').val().split('\n').clean("");
    var new_queries = "";
    var text_to_prepend = $('#text_to_prepend').val();
    $.each(strings, function() {
      new_queries = new_queries + text_to_prepend + " " + this + "\n";
    });
    $('#queries').val(new_queries);
  });

  $('#prepare-raw').click(function(ev) {
    ev.preventDefault();
    copy_links_from_table_to_pre($('#results-table'), $('#raw-links'));
  });

}());
