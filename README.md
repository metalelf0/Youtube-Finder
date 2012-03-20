== How to use

* Copy your search terms into the top textarea
* click search
* look at the results in the bottom textarea

== Other tools

* considering AJAX is by definition asynchronous, I added two buttons to
  sort links in the bottom textarea and to remove the counter
* I also added a button to automatically prepend a text to all the
  search terms in the top text area

== Compatibility

* results (after the counters have been removed) can be pasted in a txt
  file ready to be used with [youtube-dl](http://rg3.github.com/youtube-dl/):

    $ youtube-dl --extract-audio --audio-format mp3 -t -A -a /tmp/download_links

