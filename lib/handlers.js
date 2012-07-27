(function() {

  "use strict";

  $('#lookup').click(function(ev) {
    ev.preventDefault();
    $('#results').val('');
    var lines = $('#queries').val().split('\n').clean("");
    $.each(lines, function(index){
      console.log("" + this);
      $.ajax({
        url: 'http://gdata.youtube.com/feeds/api/videos?callback=?',
        dataType: 'jsonp',
        data: { alt: 'json', q: ""+this },
        success: function(json){
          console.log("Writing to results index " + index);
          append_to_input($("#results"), pad(index, 2) + " " + json.feed.entry[0].link[0].href + " # " + json.feed.entry[0].title.$t + "\n");
          return index;
        }
      });
    });
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

  $('#sort').click(function(ev) {
    ev.preventDefault();
    var links = $('#results').val().split('\n').clean("").sort().join("\n");
    $('#results').val(links);
  });

  $('#clean').click(function(ev) {
    ev.preventDefault();
    var links = $('#results').val().split('\n');
    var new_links = "";
    $.each(links, function() {
      new_links = new_links + this.substring(3) + "\n";
    });
    $('#results').val(new_links);
  });

}());
