// リクエストパラメータのセット
var KEY = 'AIzaSyBSIZnYyv3E4Nmojo-xCTe_IKeBvZUg-pA';       // API KEY
var url = 'https://www.googleapis.com/youtube/v3/search?'; // API URL
url += 'type=video';             // 動画を検索する
url += '&part=snippet';          // 検索結果に全てのプロパティを含む
url += '&q=music';               // 検索ワード このサンプルでは music に指定
url += '&videoEmbeddable=true';  // Webページに埋め込み可能な動画のみを検索
url += '&videoSyndicated=true';  // youtube.com 以外で再生できる動画のみに限定
url += '&maxResults=6';          // 動画の最大取得件数
url += '&key=' + KEY;            // API KEY

// HTMLが読み込まれてから実行する処理
$(function() {
  // youtubeの動画を検索して取得
  $.ajax({
    url: url,
    dataType : 'jsonp'
  }).done(function(data) {
    if (data.items) {
      setData(data); // データ取得が成功した時の処理      
    } else {
    console.log(data);
    alert('該当するデータが見つかりませんでした');
    }
  }).fail(function(data) {
    alert('通信に失敗しました');
  });
});

// データ取得が成功した時の処理
function setData(data) {
  var result = '';
  var video  = '';
  // 動画を表示するHTMLを作る
  for (var i = 0; i < data.items.length; i++) {
    video  = '<iframe src="https://www.youtube.com/embed/';
    video  += data.items[i].id.videoId;
    video  += '" allowfullscreen></iframe>';
    result += '<div class="video">' + video + '</div>'
  }
  // HTMLに反映する
  $('#videoList').html(result);
}