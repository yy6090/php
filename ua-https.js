/*!UA判断跳转 */
UA = navigator.userAgent.toLowerCase();
url = window.location;
url = url.toString();
if ((UA.indexOf('iphone') != -1 || UA.indexOf('mobile') != -1 || UA.indexOf('android') != -1 || UA.indexOf('ipad') != -1 || UA.indexOf('windows ce') != -1 || UA.indexOf('ipod') != -1) && UA.indexOf('ipod') == -1) {
if (url.indexOf("m.") < 0) {
if (url.indexOf("www.") < 0){
var index = url.indexOf("https://");
if (index < 0){
url = "m." + url;
}else{
url = url.replace("https://", "https://m.");
}
}else{
url = url.replace("www.", "m.");
}
Go(url);
}
}
function Go(url) {
window.location = url;
}
