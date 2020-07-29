import _ from 'lodash';

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
    color: '#297CEB'
  },
  {
    name: '耕地',
    color: '#7C82FB'
  },
  {
    name: '宅基地',
    color: '#71CACF'
  },
  {
    name: '水田',
    color: '#23A6F5'
  },
  {
    name: '旱田',
    color: '#98BD72'
  },
  {
    name: '水浇地',
    color: '#E2CA7F'
  }
];

// 从业人员
const labelList2 = [{
    name: '总人员',
    color: '#297CEB'
  },
  {
    name: '经营人员',
    color: '#7C82FB'
  },
  {
    name: '种植人员',
    color: '#71CACF'
  }
];

// 农机具类型
const labelList3 = [{
    name: '总人员',
    color: '#297CEB'
  },
  {
    name: '经营人员',
    color: '#7C82FB'
  },
  {
    name: '种植人员',
    color: '#71CACF'
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
    color: '#297CEB'
  },
  {
    name: '无机肥',
    color: '#7C82FB'
  },
  {
    name: '有机肥',
    color: '#71CACF'
  },
  {
    name: '农药',
    color: '#23A6F5'
  },
  {
    name: '其他',
    color: '#98BD72'
  }
];

// 经营统计
const labelList6 = [{
    name: '资金总额',
    color: '#297CEB'
  },
  {
    name: '项目拨款',
    color: '#7C82FB'
  },
  {
    name: '补贴金额',
    color: '#71CACF'
  },
  {
    name: '农业社会化服务',
    color: '#23A6F5'
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
  // 农场摄像头
  cameraData,
  getRandNumForRangen
};