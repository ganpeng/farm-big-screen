/* eslint-disable */
const colors = ['#37a2da', '#32c5e9', '#67e0e3', '#9fe6b8', '#ffdb5c', '#ff9f7f', '#fb7293'];

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

export default {
  colors: colors,
  ringChartDefaultConfig: {
    color: colors,
    digitalFlopStyle: {
      fontSize: 16
    },
    radius: '70%',
    activeRadius: '80%',
    lineWidth: 16,
    data: []
  },
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