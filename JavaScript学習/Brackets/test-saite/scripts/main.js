var myImage = document.querySelector('img');
var mainTitle = document.querySelector('h1');
var subTitle1 = document.querySelector('h2');
var subTitle2 = document.querySelector('h3');
var subTitle3 = document.querySelector('h4');
var bufm = mainTitle.innerHTML;
var buf1 = subTitle1.innerHTML;
var buf2 = subTitle2.innerHTML;
var buf3 = subTitle3.innerHTML;

myImage.onclick = function(){
  var mySrc = myImage.getAttribute('src');
  if(mySrc === 'images/Firefox.jpg'){
    myImage.setAttribute('src','images/Nanachi.jpg');
    mainTitle.innerHTML = 'ななちはかわいい';
    subTitle1.innerHTML = 'ミーティもかわいい';
    subTitle2.innerHTML = '疲れた時はかわいいを見よう';
    subTitle3.innerHTML = '和んだらお仕事に戻ろう！';
  } else{
    myImage.setAttribute('src','images/Firefox.jpg');
    mainTitle.innerHTML = bufm;
    subTitle1.innerHTML = buf1;
    subTitle2.innerHTML = buf2
    subTitle3.innerHTML = buf3;
  }  
}