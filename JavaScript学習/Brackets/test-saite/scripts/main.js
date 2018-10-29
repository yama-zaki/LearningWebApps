var album = [
  {src: 'images/Firefox.jpg', alt: 'My test image'},
  {src: 'images/Nanachi.jpg', alt: 'My image'}
];

function albumIndexOf(aStr) {
  if (aStr === album[0].src) {
    return 1;
  }else{
    return 0;
  }
}

var strings = [
  {
    tM: 'My main title',
    t1: 'My top level heading',
    t2: 'My subheading',
    t3: 'My sub-subheading',
    m1: 'This is a single paragraph',
    m2: 'At Mozilla, we’re a global community of',
    m3: 'working togethr...',
    l1: 'technologists',
    l2: 'thinkers',
    l3: 'builders'
  },
  {
    tM: 'ななちはかわいい',
    t1: 'ミーティもかわいい',
    t2: '疲れた時はかわいいを見よう',
    t3: '和んだらお仕事に戻ろう',
    m1: 'これは一つの物語です',
    m2: 'このかわいいを作っているのは',
    m3: 'ななちの画像をもっと見る？',
    l1: 'ななち',
    l2: 'ミーティ',
    l3: 'なべ'
  }
];

var link = [
  {
    url: 'https://www.mozilla.org/en-US/about/manifesto',
    text: 'Mozilla Manifesto'
  },
  {
    url: 'https://search.yahoo.co.jp/image/search?p=%E3%81%AA%E3%81%AA%E3%81%A1%E3%81%8C%E3%81%9E%E3%81%86&ei=UTF-8&fr=top_ga1_sa',
    text: 'ななち画像へのリンク (Yahoo)'
  }
];

var myImage = document.querySelector('img');
var mainTitle = document.querySelector('h1');
var subTitle1 = document.querySelector('h2');
var subTitle2 = document.querySelector('h3');
var subTitle3 = document.querySelector('h4');
var imgUrl = document.querySelector('a');
var msgP1 = document.getElementsByTagName('p')[0];
var msgP2 = document.getElementsByTagName('p')[1];
var msgP3 = document.getElementsByTagName('p')[2];
var lsti1 = document.getElementsByTagName('li')[0];
var lsti2 = document.getElementsByTagName('li')[1];
var lsti3 = document.getElementsByTagName('li')[2];

myImage.onclick = function() {
  var num = albumIndexOf(myImage.getAttribute('src'));
  myImage.setAttribute('src', album[num].src);
  myImage.setAttribute('alt', album[num].alt);
  mainTitle.innerHTML = strings[num].tM;
  subTitle1.innerHTML = strings[num].t1;
  subTitle2.innerHTML = strings[num].t2;
  subTitle3.innerHTML = strings[num].t3;
  msgP1.innerHTML = strings[num].m1;
  msgP2.innerHTML = strings[num].m2;
  msgP3.innerHTML = strings[num].m3;
  lsti1.innerHTML = strings[num].l1;
  lsti2.innerHTML = strings[num].l2;
  lsti3.innerHTML = strings[num].l3;
  imgUrl.href = link[num].url;
  imgUrl.innerText = link[num].text;
}
