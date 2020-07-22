const colors = ['#37a2da', '#32c5e9', '#67e0e3', '#9fe6b8', '#ffdb5c', '#ff9f7f', '#fb7293'];

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
  }
};
