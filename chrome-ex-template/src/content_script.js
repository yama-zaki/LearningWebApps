//----------------------
$(function () {   
    var urlParam = location.search.substring(1);
    // URLにパラメータが存在する場合なにもしない
    if(urlParam) {} else {
      let url=location.href;
      var result = url.search('...fix/');
      if(result) {
        location.replace(location.href + "?template=fix.md");
      } else {
        var result = url.search('...features/');
        if(result) {
          location.replace(location.href + "?template=features.md");
        } else {
          var result = url.search('...print/');
          if(result) {
            location.replace(location.href + "?template=print.md");
          } else {
            var result = url.search('...spec');
            if(result) {
              location.replace(location.href + "?template=spec.md");
            }
          }
        }
      }      
    } 
});
