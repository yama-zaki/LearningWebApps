//----------------------
chrome.runtime.onMessage.addListener(function(msg) {
  console.log(msg)
  var urlParam = location.search.substring(1);
  // URLにパラメータが存在し、同じ場合は何もしない
  if(urlParam) {} else {
    if(msg.typename=='fix') {
      location.replace(location.href + "?template=fix.md");
    } else if(msg.typename=='features') {
      location.replace(location.href + "?template=features.md");
    } else if(msg.typename=='print') {
      location.replace(location.href + "?template=print.md");
    } else if(msg.typename=='spec') {
      location.replace(location.href + "?template=spec.md");
    };
  };
});
