<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
	<head>
	<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
	<meta http-equiv="Content-style-Type" content="text/css">
	<link rel="stylesheet" href="StyleSheet.css" type="text/css">
	<title>index</title>
	</head>
<body>

<?php

$url = htmlspecialchars($_GET['navi_site'], ENT_QUOTES);
//echo "入力したお名前は".$url."ですね";

//$url="http://yahoo.co.jp";
header("Location: ".$url); 
?>
</body>
</html>
