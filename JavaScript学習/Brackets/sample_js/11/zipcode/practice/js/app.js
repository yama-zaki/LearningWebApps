$(function(){
  $('#btn').on('click', function() {
    // 入力された郵便番号でWebAPIに住所情報をリクエスト
    $.ajax({
      url: "http://zipcloud.ibsnet.co.jp/api/search?zipcode=" + $('#zipcode').val(),
      dataType : 'jsonp',
    }).done(function(data) {
      if (data.results) {
        setData(data.results[0]);
      } else {
        alert('該当するデータが見つかりませんでした');
      }
    }).fail(function(data) {
      alert('通信に失敗しました');
    });
  });

  // データ取得が成功した時の処理
  function setData(data) {
    //取得したデータを各HTML要素に代入
    $('#prefecture').val(data.address1); // 都道府県名
    $('#city').val(data.address2);       // 市区町村名
    $('#address').val(data.address3);    // 町域名
  } 
});