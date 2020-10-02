function changeurl(fname) {
  var urlParam = Chrom.tabs.location.search.substring(1);
  // URLにパラメータが存在し、同じ場合は何もしない
  if(urlParam) {} else {
    if(fname=='fix') {
      Chrom.tabs.location.replace(Chrom.tabs.location.href + "?template=fix.md");
    } else if(fname=='features') {
      Chrom.tabs.location.replace(Chrom.tabs.location.href + "?template=features.md");
    } else if(fname=='print') {
      Chrom.tabs.location.replace(Chrom.tabs.location.href + "?template=print.md");
    } else if(fname=='spec') {
      Chrom.tabs.location.replace(Chrom.tabs.location.href + "?template=spec.md");
    };
  };
};

document.getElementById('changefile_fix').onclick = changeurl('fix');
document.getElementById('changefile_features').onclick = changeurl('features');
document.getElementById('changefile_print').onclick = changeurl('print');
document.getElementById('changefile_spec').onclick = changeurl('spec');
