var myImage = document.querySelector('img');
var mainTitle = document.querySelector('h1');
var subTitle1 = document.querySelector('h2');
var subTitle2 = document.querySelector('h3');
var subTitle3 = document.querySelector('h4');
var imgUrl = document.querySelector('a');
var msgP0 = document.getElementsByTagName('p')[0];
var msgP1 = document.getElementsByTagName('p')[1];
var msgP2 = document.getElementsByTagName('p')[2];
var lsti0 = document.getElementsByTagName('li')[0];
var lsti1 = document.getElementsByTagName('li')[1];
var lsti2 = document.getElementsByTagName('li')[2];
var bufm = mainTitle.innerHTML;
var buf1 = subTitle1.innerHTML;
var buf2 = subTitle2.innerHTML;
var buf3 = subTitle3.innerHTML;
var bufa = imgUrl.innerText;
var bufu = imgUrl.href;
var bufP0 = msgP0.innerHTML;
var bufP1 = msgP1.innerHTML;
var bufP2 = msgP2.innerHTML;
var bufl0 = lsti0.innerHTML;
var bufl1 = lsti1.innerHTML;
var bufl2 = lsti2.innerHTML;

myImage.onclick = function(){
  var mySrc = myImage.getAttribute('src');
  if(mySrc === 'images/Firefox.jpg'){
    myImage.setAttribute('src','images/Nanachi.jpg');
    mainTitle.innerHTML = 'ななちはかわいい';
    subTitle1.innerHTML = 'ミーティもかわいい';
    subTitle2.innerHTML = '疲れた時はかわいいを見よう';
    subTitle3.innerHTML = '和んだらお仕事に戻ろう！';
    imgUrl.href = "https://search.yahoo.co.jp/image/search?p=%E3%81%AA%E3%81%AA%E3%81%A1%E3%81%8C%E3%81%9E%E3%81%86&ei=UTF-8&fr=top_ga1_sa";
    imgUrl.innerText = "ななち画像へのリンク (Yahoo)";
    msgP0.innerHTML = 'これは一つの物語です';
    msgP1.innerHTML = 'このかわいいを作っているのは...';
    msgP2.innerHTML = 'ななちの画像をもっと見る？';
    lsti0.innerHTML = 'ななち';
    lsti1.innerHTML = 'ミーティ';
    lsti2.innerHTML = 'なべ';
  } else{
    myImage.setAttribute('src','images/Firefox.jpg');
    mainTitle.innerHTML = bufm;
    subTitle1.innerHTML = buf1;
    subTitle2.innerHTML = buf2
    subTitle3.innerHTML = buf3;
    imgUrl.href = bufu;
    imgUrl.innerText = bufa;
    msgP0.innerHTML = bufP0;
    msgP1.innerHTML = bufP1;
    msgP2.innerHTML = bufP2;
    lsti0.innerHTML = bufl0;
    lsti1.innerHTML = bufl1;
    lsti2.innerHTML = bufl2; 
  }  
}
