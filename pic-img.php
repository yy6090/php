<!DOCTYPE html>
<html>
<head> 
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" /> 
<meta http-equiv="Content-Language" content="zh-CN" /> 
<title>Hello World</title> 
</head>
<body>
<?php
/*图片防盗链处理代码*/
error_reporting(0);
header("Content-Type:image/jpeg");
$picurl = $_GET['pic'];
echo npimgcurl($picurl);
function npimgcurl($url){
	$ch=curl_init();
	curl_setopt($ch, CURLOPT_URL, $url);
	curl_setopt($ch, CURLOPT_SSL_VERIFYPEER, FALSE); // 对认证证书来源的检查
	curl_setopt($ch, CURLOPT_SSL_VERIFYHOST, FALSE); // 从证书中检查SSL加密算法是	
	curl_setopt($ch, CURLOPT_RETURNTRANSFER,1);
	$data=curl_exec($ch);
	curl_setopt($ch, CURLOPT_CONNECTTIMEOUT,5);
	curl_setopt($ch,CURLOPT_REFERER,$url);	
	curl_close($ch);
	return $data;
}
?>
</body>
</html> 
