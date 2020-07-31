/* eslint-disable */
import constants from './constants';

function dateFormat(fmt, date) {
  let ret;
  const opt = {
    "Y+": date.getFullYear().toString(), // 年
    "m+": (date.getMonth() + 1).toString(), // 月
    "d+": date.getDate().toString(), // 日
    "H+": date.getHours().toString(), // 时
    "M+": date.getMinutes().toString(), // 分
    "S+": date.getSeconds().toString() // 秒
    // 有其他格式化字符需求可以继续添加，必须转化成字符串
  };
  for (let k in opt) {
    ret = new RegExp("(" + k + ")").exec(fmt);
    if (ret) {
      fmt = fmt.replace(ret[1], (ret[1].length == 1) ? (opt[k]) : (opt[k].padStart(ret[1].length, "0")));
    }
  }
  return fmt;
}

export function strNumSize(tempNum) {
  let stringNum = tempNum.toString();
  let index = stringNum.indexOf(".");
  let newNum = stringNum;
  if (index != -1) {
    newNum = stringNum.substring(0, index);
  }
  return newNum.length;
}

export function unitConvert(num) {
  let moneyUnits = ["元", "万元", "亿元", "万亿"];
  let dividend = 10000;
  let curentNum = num;
  //转换数字
  let curentUnit = moneyUnits[0];
  //转换单位
  for (let i = 0; i < 4; i++) {
    curentUnit = moneyUnits[i];
    if (strNumSize(curentNum) < 5) {
      break;
    }
    curentNum = curentNum / dividend;
  }
  let m = {
    num: 0,
    unit: ""
  };
  m.num = curentNum.toFixed(2);
  m.unit = curentUnit;
  return m;
}

export default {
  ringChartDefaultConfig: {
    color: constants.colors,
    digitalFlopStyle: {
      fontSize: 16
    },
    radius: '70%',
    activeRadius: '80%',
    lineWidth: 16,
    data: []
  },
  unitConvert,
  serializeAlertData(list) {
    return list.map((item) => {
      let _list = [];
      _list.push(item.type);
      _list.push(item.description);
      _list.push(item.date);
      _list.push(item.status);
      return _list;
    });
  },
  serializeWarningData(list) {
    return list.map((item) => {
      let _list = [];
      _list.push(item.id);
      _list.push(item.deviceId);
      _list.push(item.farm);
      _list.push(item.type);
      _list.push(item.description);
      _list.push(item.date);
      _list.push(item.status);
      return _list;
    });
  },
  dateFormat
};