//----------------------
$(function () {   
    var urlParam = location.search.substring(1);
    // URLにパラメータが存在する場合なにもしない
    if(urlParam) {} else {
      let url = location.href;
      var result = url.match('...fix/');
      if(result) {
        location.replace(location.href + "?template=fix.md");
        location.reload;
      } else {
        var result = url.match('...features/');
        if(result) {
          location.replace(location.href + "?template=features.md");
          location.reload;
        } else {
          var result = url.match('...print/');
          if(result) {
            location.replace(location.href + "?template=print.md");
            location.reload;
          } else {
            var result = url.match('...spec');
            if(result) {
              location.replace(location.href + "?template=spec.md");
              location.reload;
            };
          };
        };
      };
    };
});
