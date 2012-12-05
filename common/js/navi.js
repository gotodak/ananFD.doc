/**
 * Class Cms_Admin_Navi
 */
function Cms_Admin_Navi() {
  ;
}

/**
 * Toggle navi.
 */
function Cms_Admin_Navi_showNavi() {
  if ($('menu').getStyle('display') != 'block') {
    $('menu').setStyle({'display' : 'block'});
    $('content').setStyle({'display' : 'none'});
  } else {
    $('menu').setStyle({'display' : 'none'});
    $('content').setStyle({'display' : 'block'});
  }
}
Cms_Admin_Navi.showNavi = Cms_Admin_Navi_showNavi;


/**
 * リンクの処理
 */

function disp(url){

	location.href = url;


//	if(!window.opener || window.opener.closed){ // メインウィンドウの存在をチェック
//		window.alert('メインウィンドウがありません'); // 存在しない場合は警告ダイアログを表示
//	}
//	else{
//		window.opener.location.href = url; // 存在する場合はページを切りかえる
//	}

}

function jump(url){

//	location.href =  url + '/index.html';
	location.href =  url ;

}



/**
 * 「戻る」「進む」の処理
 */ 
function hist(goback){

	if(goback == 'back'){
		history.back(); // 戻る
	}
	else if(goback == 'next'){
		history.forward(); // 進む
	}

//	if(!window.opener || window.opener.closed){ // メインウィンドウの存在をチェック
//		window.alert('メインウィンドウがありません'); // 存在しない場合は警告ダイアログを表示
//	}
//	else if(goback == 'back'){
//		window.opener.history.back(); // 戻る
//	}
//	else if(goback == 'next'){
//		window.opener.history.forward(); // 進む
//	}

}


