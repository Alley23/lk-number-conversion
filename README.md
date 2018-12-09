
## 数字常用类型转换

### Installation

```bash
$ npm install lk-number-conversion
```

### Examples

```js
var conversionSet = require('lk-number-conversion');

// 千分符
conversionSet.thousand(10000000000);  // 10,000,000,000

// 百分比
conversionSet.percent(0.12) // 12.0%

// 数字如果超过5位，采用十万进制
conversionSet.tenThousand(1211212121) // 121121.2万
```


