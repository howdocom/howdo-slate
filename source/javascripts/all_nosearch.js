//= require ./lib/_energize
//= require ./app/_toc

$(function() {
  loadToc($('#toc'), '.toc-link', '.toc-list-h2, .toc-list-h3', 10);
  $('.content').imagesLoaded( function() {
    window.recacheHeights();
    window.refreshToc();
  });
});
