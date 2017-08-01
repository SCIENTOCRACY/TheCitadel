<template name="MyAds">
  <div class="leaderboard"></div>
</template>

Template.MyAds.rendered = function() {
  $.getScript("//pagead2.googlesyndication.com/pagead/js/adsbygoogle.js", function() {
    var ads, adsbygoogle;
    ads = '<ins class="adsbygoogle" style="display:block" data-ad-client="ca-pub-72414***074839" data-ad-slot="4009***57" data-ad-format="auto"></ins>';
    $('.leaderboard').html(ads);
    return (adsbygoogle = window.adsbygoogle || []).push({});
  });
};

Router.map( function () {
  this.route('MyRoute', {
    waitOn: function() {
      return IRLibLoader.load("//pagead2.googlesyndication.com/pagead/js/adsbygoogle.js");
    }
  });
});
