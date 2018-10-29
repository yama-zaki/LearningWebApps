var records = [
  {
    album: {src: 'images/Firefox.jpg', alt: 'My test image'},
    strings: {
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
    link: {
      url: 'https://www.mozilla.org/en-US/about/manifesto',
      text: 'Mozilla Manifesto'
    }
  },
  {
    album: {src: 'images/Nanachi.jpg', alt: 'My image'},
    strings: {
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
    },
    link: {
      url: 'https://search.yahoo.co.jp/image/search?p=%E3%81%AA%E3%81%AA%E3%81%A1%E3%81%8C%E3%81%9E%E3%81%86&ei=UTF-8&fr=top_ga1_sa',
      text: 'ななち画像へのリンク (Yahoo)'
    }
  }
];

function toggleAlbumIndexOf(src) {
  if (src === records[0].album.src) {
    return 1;
  }else{
    return 0;
  }
}

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
  var num = toggleAlbumIndexOf(myImage.getAttribute('src'));
  var record = records[num];
  for (var key in record.album) {
    myImage.setAttribute(key, record.album[key]);
  }
  var strings = record.strings;
  mainTitle.innerHTML = strings.tM;
  subTitle1.innerHTML = strings.t1;
  subTitle2.innerHTML = strings.t2;
  subTitle3.innerHTML = strings.t3;
  msgP1.innerHTML = strings.m1;
  msgP2.innerHTML = strings.m2;
  msgP3.innerHTML = strings.m3;
  lsti1.innerHTML = strings.l1;
  lsti2.innerHTML = strings.l2;
  lsti3.innerHTML = strings.l3;
  var link = record.link;
  imgUrl.href = link.url;
  imgUrl.innerText = link.text;
}
