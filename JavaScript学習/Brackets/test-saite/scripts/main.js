var myImage = document.querySelector('img');
var mainTitle = document.querySelector('h1');
var subTitle1 = document.querySelector('h2');
var subTitle2 = document.querySelector('h3');
var subTitle3 = document.querySelector('h4');
var imgUrl = document.querySelector('a');
var msgP = document.getElementsByTagName('p')[2];
var bufm = mainTitle.innerHTML;
var buf1 = subTitle1.innerHTML;
var buf2 = subTitle2.innerHTML;
var buf3 = subTitle3.innerHTML;
var bufa = imgUrl.innerText;
var bufu = imgUrl.href;
var bufP = msgP.innerHTML;

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
    msgP.innerHTML = 'ななちの画像をもっと見る？';
    
  } else{
    myImage.setAttribute('src','images/Firefox.jpg');
    mainTitle.innerHTML = bufm;
    subTitle1.innerHTML = buf1;
    subTitle2.innerHTML = buf2
    subTitle3.innerHTML = buf3;
    imgUrl.href = bufu;
    imgUrl.innerText = bufa;
    msgP.innerHTML = bufP;
  }  
}
