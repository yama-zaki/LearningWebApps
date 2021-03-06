﻿//----------------------
chrome.runtime.onMessage.addListener(function(msg) {
  console.log(msg)
  let url = location.href;
  // URLに`compare/[branch]...[branch]`が含まれない時は何もしない
  let result = url.match('compare/');
  if(!result) {
    exit;
  };
  let urlParam = location.search.substring(1);
  // URLにパラメータが存在し、同じ場合は何もしない
  if(urlParam) {
    let result = urlParam.match(msg.typename);
    if(!result) {
      url = url.replace(urlParam, '');
      if(msg.typename=='fix') {        
        location.replace(url + "template=fix.md");
      } else if(msg.typename=='features') {
        location.replace(url + "template=features.md");
      } else if(msg.typename=='print') {
        location.replace(url + "template=print.md");
      } else if(msg.typename=='spec') {
        location.replace(url + "template=spec.md");
      }; 
    };
  } else {
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
