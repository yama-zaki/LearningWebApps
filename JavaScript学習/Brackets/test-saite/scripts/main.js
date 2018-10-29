var records = [
  {
    album: {src: 'images/Firefox.jpg', alt: 'My test image'},
    messages: {
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
      href: 'https://www.mozilla.org/en-US/about/manifesto',
      innerText: 'Mozilla Manifesto'
    }
  },
  {
    album: {src: 'images/Nanachi.jpg', alt: 'My image'},
    messages: {
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
      href: 'https://search.yahoo.co.jp/image/search?p=%E3%81%AA%E3%81%AA%E3%81%A1%E3%81%8C%E3%81%9E%E3%81%86&ei=UTF-8&fr=top_ga1_sa',
      innerText: 'ななち画像へのリンク (Yahoo)'
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

var messageElements = {
  tM: document.querySelector('h1'),
  t1: document.querySelector('h2'),
  t2: document.querySelector('h3'),
  t3: document.querySelector('h4'),
  m1: document.getElementsByTagName('p')[0],
  m2: document.getElementsByTagName('p')[1],
  m3: document.getElementsByTagName('p')[2],
  l1: document.getElementsByTagName('li')[0],
  l2: document.getElementsByTagName('li')[1],
  l3: document.getElementsByTagName('li')[2]
}

var myImage = document.querySelector('img');
var imgUrl = document.querySelector('a');

myImage.onclick = function() {
  var num = toggleAlbumIndexOf(myImage.getAttribute('src'));
  var record = records[num];
  assignAttributes(myImage, record.album);
  assignAttributes(imgUrl, record.link);
  for (var key in record.messages) {
    messageElements[key].innerHTML = record.messages[key];
  }
}

function assignAttributes(element, attrs) {
  for (var key in attrs) {
    var value = attrs[key];
    switch(key) {
    case 'innerText':
      element.innerText = value;
      break;
    default:
      element.setAttribute(key, value);
      break;
    }
  }
}
