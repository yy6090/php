            var clipboard = new Clipboard('body', {
                text: function() {
                    //return "￥qLNfciDyyql$";//这里替换成你的口令代码
                    return randomKL(randomNum(1,2));//随机口令代码
                }
            });
            clipboard.on('success', function(e) {
                //alert('复制成功,打开最新版淘宝就能领取红包')
            });
            clipboard.on('error', function(e) {
                //alert('您的浏览器不支持点击复制')
            });

//生成从minNum到maxNum的随机数
function randomNum(minNum,maxNum){ 
    switch(arguments.length){ 
        case 1: 
            return parseInt(Math.random()*minNum+1,2); 
        break; 
        case 2: 
            return parseInt(Math.random()*(maxNum-minNum+1)+minNum,2); 
        break; 
            default: 
                return 0; 
            break; 
    } 
}
//随机口令
function randomKL(num){ 
    switch(num){ 
        case 1: 
            return "6fu植本段内容￥qLNfciDyyql$到淘t..宝或点几链街 https://m.tb.cn/h.41Q4TTQ 至流览器【2020天喵双11—主会场（全球好货预售，最高领1111元红 鉋！）】"; //这里替换成你的口令代码 双十一超级红包
        break; 
        case 2: 
            return "7.0付致本段内容￥KqkjciDBreR$到ホ兆bao或點击链街 https://m.tb.cn/h.4cdM45P 至流览器【超级红 鉋主会场（大额红 鉋50万个，最低6元起，24日20点开抢！）】"; //双十一超级红包2
        break; 
            default: 
                return "6fu植本段内容￥qLNfciDyyql$到淘t..宝或点几链街 https://m.tb.cn/h.41Q4TTQ 至流览器【2020天喵双11—主会场（全球好货预售，最高领1111元红 鉋！）】"; 
            break; 
    } 
}
