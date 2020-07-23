import _ from 'lodash';
// 环形图数据
const ringChartData1 = [
  {
    name: '旱田',
    value: 55
  },
  {
    name: '水浇地',
    value: 120
  },
  {
    name: '水田',
    value: 78
  }
];

const ringChartData2 = [
  {
    name: '传感器',
    value: 55
  },
  {
    name: '球机摄像头',
    value: 120
  },
  {
    name: '枪机摄像头',
    value: 78
  }
];

// 柱状图数据
const barChartData1 = [
  {
    name: '水稻',
    value: 167
  },
  {
    name: '大豆',
    value: 123
  },
  {
    name: '高粱',
    value: 98
  },
  {
    name: '其他',
    value: 75
  }
];

const alertList = [
  {
    type: '设备异常状态',
    description: '空气温度: 43℃, 上升3度，最高阈值: 40℃ 土壤温度: 5℃,下降5，最低阈值: 10℃',
    date: '2-25 12:00:32',
    status: '未处理'
  },
  {
    type: '设备异常状态',
    description: '空气温度: 43℃, 上升3度，最高阈值: 40℃ 土壤温度: 5℃,下降5，最低阈值: 10℃',
    date: '2-25 12:00:32',
    status: '未处理'
  },
  {
    type: '设备异常状态',
    description: '空气温度: 43℃, 上升3度，最高阈值: 40℃ 土壤温度: 5℃,下降5，最低阈值: 10℃',
    date: '2-25 12:00:32',
    status: '未处理'
  },
  {
    type: '设备异常状态',
    description: '空气温度: 43℃, 上升3度，最高阈值: 40℃ 土壤温度: 5℃,下降5，最低阈值: 10℃',
    date: '2-25 12:00:32',
    status: '未处理'
  },
  {
    type: '设备异常状态',
    description: '空气温度: 43℃, 上升3度，最高阈值: 40℃ 土壤温度: 5℃,下降5，最低阈值: 10℃',
    date: '2-25 12:00:32',
    status: '未处理'
  },
  {
    type: '设备异常状态',
    description: '空气温度: 43℃, 上升3度，最高阈值: 40℃ 土壤温度: 5℃,下降5，最低阈值: 10℃',
    date: '2-25 12:00:32',
    status: '未处理'
  },
  {
    type: '设备异常状态',
    description: '空气温度: 43℃, 上升3度，最高阈值: 40℃ 土壤温度: 5℃,下降5，最低阈值: 10℃',
    date: '2-25 12:00:32',
    status: '未处理'
  },
  {
    type: '设备异常状态',
    description: '空气温度: 43℃, 上升3度，最高阈值: 40℃ 土壤温度: 5℃,下降5，最低阈值: 10℃',
    date: '2-25 12:00:32',
    status: '未处理'
  },
  {
    type: '设备异常状态',
    description: '空气温度: 43℃, 上升3度，最高阈值: 40℃ 土壤温度: 5℃,下降5，最低阈值: 10℃',
    date: '2-25 12:00:32',
    status: '未处理'
  }
]

const warningList = [
  {
    title: '总数',
    count: 22
  },
  {
    title: '模型预警',
    count: 10
  },
  {
    title: '设备状态异常',
    count: 5
  },
  {
    title: '已处理',
    count: 4
  },
  {
    title: '未处理',
    count: 1
  }
];

const warningTableList = _.times(30, () => {
  let obj = {
    id: 'YJ-2020070122334400001',
    deviceId: 'V134124124',
    farm: 'V134124124',
    type: '设备异常状态',
    description: '空气温度: 43℃, 上升3度，最高阈值: 40℃ 土壤温度: 5℃,下降5，最低阈值: 10℃',
    date: '2-25 12:00:32',
    status: '未处理'
  };
  return Object.assign({}, obj);
});

const borderColors = ['#0B142B', '#1C56A5'];

export default {
  ringChartData1,
  ringChartData2,
  barChartData1,
  alertList,
  warningList,
  warningTableList,
  borderColors
};
