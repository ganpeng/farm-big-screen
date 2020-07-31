import _ from 'lodash';
const colors = [
  '#297CEB',
  '#7C82FB',
  '#71CACF',
  '#23A6F5',
  '#98BD72',
  '#E2CA7F',
  '#5FD2DB',
  '#E9C366',
  '#D9647E',
  '#DF7C57',
  '#884CDE',
  '#4796FF'
];

/**
 *  产生指定范围不重复的随机数(对数组随机排序思路)
 *  参数一: 最小值    int
 *  参数二: 最大值    int
 *  参数三: 随机数量  int
 *  返回值: 结果数组  Array
 **/

function getRandNumForRangen(least, max, num) {
  // 检查传值是否合法
  if (num > max - least) return false;
  // 产生指定范围的所有数值
  var numList = [];
  for (var i = least; i < max; i++) numList.push(i);
  // 对数组随机排序
  numList.sort(function () {
    return Math.random() < 0.5 ? -1 : 1
  });
  // 返回前N个值
  return numList.slice(0, num);
}

// 环形图数据
const ringChartData1 = [{
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

const ringChartData2 = [{
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
const barChartData1 = [{
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

const alertList = [{
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

const warningList = [{
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

const labelList1 = [{
    name: '总面积',
    color: colors[0]
  },
  {
    name: '水浇地',
    color: colors[1]
  },
  {
    name: '水田',
    color: colors[2]
  },
  {
    name: '旱田',
    color: colors[3]
  },
  {
    name: '耕地',
    color: colors[4]
  },
  {
    name: '宅基地',
    color: colors[5]
  },
];

// 从业人员
const labelList2 = [{
    name: '总人数',
    color: colors[0]
  },
  {
    name: '经营人员',
    color: colors[1]
  },
  {
    name: '种植人员',
    color: colors[2]
  }
];

// 农机具类型
const labelList3 = [{
    name: '总数',
    color: colors[0]
  },
  {
    name: '风力',
    color: colors[1]
  },
  {
    name: '太阳能',
    color: colors[2]
  },
  {
    name: '汽油',
    color: colors[3]
  },
  {
    name: '柴油',
    color: colors[4]
  },
  {
    name: '电力',
    color: colors[5]
  },
  {
    name: '煤炭',
    color: colors[6]
  },
  {
    name: '其他动力类型',
    color: colors[7]
  },
  {
    name: '运输',
    color: colors[8]
  },
  {
    name: '加工',
    color: colors[9]
  },
  {
    name: '种植',
    color: colors[10]
  },
  {
    name: '其他',
    color: colors[11]
  }
];

// 种植数据 水稻、大豆、玉米、其他粮食 其他
const labelList4 = [{
    name: '总量',
    color: '#297CEB'
  },
  {
    name: '水稻',
    color: '#7C82FB'
  },
  {
    name: '大豆',
    color: '#71CACF'
  },
  {
    name: '玉米',
    color: '#23A6F5'
  },
  {
    name: '其他粮食',
    color: '#98BD72'
  },
  {
    name: '其他',
    color: '#E2CA7F'
  }
];

// 投入品
const labelList5 = [{
    name: '总量',
    color: colors[0]
  },
  {
    name: '无机肥',
    color: colors[1]
  },
  {
    name: '有机肥',
    color: colors[2]
  },
  {
    name: '农药',
    color: colors[3]
  },
  {
    name: '其他',
    color: colors[4]
  }
];

// 经营统计
const labelList6 = [{
    name: '资金总额',
    color: colors[0]
  },
  {
    name: '项目拨款',
    color: colors[1]
  },
  {
    name: '补贴金额',
    color: colors[2]
  },
  {
    name: '农业社会化服务',
    color: colors[3]
  }
];

// 设备统计
const labelList7 = [{
    name: '总数',
    color: colors[0]
  },
  {
    name: '枪机摄像头',
    color: colors[1]
  },
  {
    name: '球机摄像头',
    color: colors[2]
  },
  {
    name: '传感器',
    color: colors[3]
  }
];

// 农场摄像头分布数据
const cameraData = {
  '粮食农田': {
    bgImage: require('../assets/image/农田03.jpg'),
    bgImages: [
      require('../assets/image/农田01.jpg'),
      require('../assets/image/农田02.jpg'),
      require('../assets/image/农田03.jpg')
    ],
    position: {
      left: {
        max: 84,
        min: 5
      },
      top: {
        max: 80,
        min: 20
      }
    }
  },
  '果树林地': {
    bgImage: require('../assets/image/果树01.jpg'),
    bgImages: [
      require('../assets/image/果树01.jpg'),
      require('../assets/image/果树02.jpg')
    ],
    position: {
      left: {
        max: 94,
        min: 5
      },
      top: {
        max: 80,
        min: 20
      }
    }
  },
  '育苗大棚': {
    bgImage: require('../assets/image/育苗大棚.jpg'),
    position: {
      left: {
        max: 90,
        min: 10
      },
      top: {
        max: 84,
        min: 20
      }
    }
  },
  '蔬菜大棚': {
    bgImage: require('../assets/image/蔬菜大棚.jpg'),
    position: {
      left: {
        max: 90,
        min: 10
      },
      top: {
        max: 84,
        min: 20
      }
    }
  },
  '仓储建筑': {
    bgImage: require('../assets/image/仓储01.jpg'),
    bgImages: [
      require('../assets/image/仓储01.jpg'),
      require('../assets/image/仓储02.jpg')
    ],
    position: {
      left: {
        max: 90,
        min: 10
      },
      top: {
        max: 54,
        min: 10
      }
    }
  },
  '生态观光': {
    bgImage: require('../assets/image/生态观光.jpg'),
    position: {
      left: {
        max: 94,
        min: 40
      },
      top: {
        max: 94,
        min: 54
      }
    }
  }
};

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

const trendChartLabelList = [{
    name: '空气温度',
    active: true,
    metric: 'dqwd',
    color: colors[0]
  },
  {
    name: '空气湿度',
    active: true,
    metric: 'dqsd',
    min: 0.2,
    color: colors[1]
  },
  {
    name: '光照度',
    active: true,
    metric: 'gzd',
    color: colors[2]
  },
  {
    name: '光照总辐射',
    active: true,
    metric: 'gzzfs',
    color: colors[3]
  },
  {
    name: '降雨量',
    active: true,
    metric: 'jyl',
    color: colors[4]
  },
  {
    name: '气压',
    active: true,
    metric: 'qy',
    min: 800,
    color: colors[5]
  },
  {
    name: '风速',
    active: true,
    metric: 'fs',
    color: colors[6]
  },
  {
    name: '土壤温度',
    active: false,
    metric: 'trwd',
    min: 10,
    color: colors[7]
  },
  {
    name: '土壤湿度',
    active: false,
    metric: 'trxdsd',
    color: colors[8]
  },
  {
    name: '捕虫量',
    active: false,
    metric: 'sccs',
    color: colors[9]
  },
  {
    name: '温度',
    active: false,
    metric: 'szwd',
    color: colors[10]
  },
  {
    name: 'PH值',
    active: false,
    metric: 'sph',
    color: colors[11]
  }
];

// 首页图表label
const landLabelList = [
  {name: '旱田', color: colors[0]},
  {name: '水浇地', color: colors[1]},
  {name: '水田', color: colors[2]}
];

const deviceLabelList = [
  {name: '传感器', color: colors[0]},
  {name: '球机摄像头', color: colors[1]},
  {name: '枪机摄像头', color: colors[2]}
];

// 传感器实时数据列表
const sensorRealList = [
  {
    title: '温度',
    value: '/',
    unit: '℃',
    icon: 'sensor_icon1'
  },
  {
    title: '湿度',
    value: '/',
    unit: '%',
    icon: 'sensor_icon2'
  },
  {
    title: '风速',
    value: '/',
    unit: 'm/s',
    icon: 'sensor_icon3'
  },
  {
    title: '风向',
    value: '/',
    unit: '°',
    icon: 'sensor_icon4'
  },
  {
    title: '雨量',
    value: '/',
    unit: 'mm',
    icon: 'sensor_icon5'
  },
  {
    title: '光照度',
    value: '/',
    unit: 'wlux',
    icon: 'sensor_icon6'
  },
  {
    title: '大气压',
    value: '/',
    unit: 'hpa',
    icon: 'sensor_icon7'
  },
  {
    title: '土壤温度',
    value: '/',
    unit: '℃',
    icon: 'sensor_icon8'
  },
  {
    title: '土壤湿度',
    value: '/',
    unit: '%',
    icon: 'sensor_icon9'
  },
  {
    title: 'PH值',
    value: '/',
    unit: '',
    isWarning: true,
    icon: 'sensor_icon10'
  },
  {
    title: '电导率',
    value: '/',
    unit: 'us/cm',
    icon: 'sensor_icon11'
  },
  {
    title: '捕虫量',
    value: '/',
    unit: '个',
    isDanger: true,
    icon: 'sensor_icon12'
  }
];

export default {
  ringChartData1,
  ringChartData2,
  barChartData1,
  alertList,
  warningList,
  warningTableList,
  borderColors,
  // 图表的label
  labelList1,
  labelList2,
  labelList3,
  labelList4,
  labelList5,
  labelList6,
  labelList7,
  // 农场摄像头
  cameraData,
  getRandNumForRangen,
  colors,
  // 首页图表
  landLabelList,
  deviceLabelList,
  // 趋势图表
  trendChartLabelList,
  sensorRealList
};