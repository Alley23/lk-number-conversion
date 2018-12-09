// 千分符
function thousand(num) {
    return (num || 0).toString().replace(/(\d)(?=(?:\d{3})+$)/g, '$1,');
}


// 数字如果超过5位，采用十万进制 ，十万进制后一般有小数点且小数点后保留1位，表现形式：99.9万。
function tenThousand(count) {
    count >= 1e4 && (count = (count / 1e4).toFixed(1) + '万')
    return count
}


// 转换百分比
function percent(point) {
    var str = Number(point * 100).toFixed(1);
    str += "%";
    return str;
}

exports.thousand = thousand;
exports.tenThousand = tenThousand;
exports.percent = percent;