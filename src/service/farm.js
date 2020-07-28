import qs from 'querystring';
import _ from 'lodash';
import service from './config';

// 通用接口
export const getDistrict = (params) => {
  let paramsStr = qs.stringify(_.pickBy(params, (item) => {
      return item !== '' && item !== undefined;
  }));
  return service.get(`/v1/district?${paramsStr}`);
};

// 农场基本信息
export const createFarm = (reqBody) => {
  return service.post(`/v1/farm`, reqBody);
};

export const updateFarmById = (reqBody) => {
  return service.put(`/v1/farm`, reqBody);
};

export const deleteFarmById = (id) => {
  return service.delete(`/v1/farm/${id}`);
};

export const getFarmById = (id) => {
  return service.get(`/v1/farm/${id}`);
};

export const getFarmList = (params) => {
  let paramsStr = qs.stringify(_.pickBy(params, (item) => {
      return item !== '' && item !== undefined;
  }));
  return service.get(`/v1/farm/list?${paramsStr}`);
};

export const getStatistic = (id) => {
  return service.get(`/v1/farm/statistic?farmId=${id}`);
};

export const getFarmCount = () => {
  return service.get(`/v1/farm/count`);
};

// 农场农机具
export const createFarmMachine = (reqBody) => {
  return service.post(`/v1/machinery/add`, reqBody);
};

export const updateFarmMachineById = (reqBody) => {
  return service.put(`/v1/machinery/edit`, reqBody);
};

export const deleteFarmMachineById = (id) => {
  return service.delete(`/v1/machinery/${id}`);
};

export const getFarmMachineList = (params) => {
  let paramsStr = qs.stringify(_.pickBy(params, (item) => {
    return item !== '' && item !== undefined;
  }));
  return service.get(`/v1/machinery/list?${paramsStr}`);
};

export const getFarmMachineById = (id) => {
  return service.get(`/v1/machinery/${id}`);
};

// 经营人员
export const createManageMember = (reqBody) => {
  return service.post(`/v1/manage_member/add`, reqBody);
};

export const updateManageMemberById = (reqBody) => {
  return service.put(`/v1/manage_member/edit`, reqBody);
};

export const deleteManageMemberById = (id) => {
  return service.delete(`/v1/manage_member/${id}`);
};

export const getManageMemberList = (params) => {
  let paramsStr = qs.stringify(_.pickBy(params, (item) => {
    return item !== '' && item !== undefined;
  }));
  return service.get(`/v1/manage_member/list?${paramsStr}`);
};

export const getManageMemberById = (id) => {
  return service.get(`/v1/manage_member/${id}`);
};

// 种植人员
export const createPlantMember = (reqBody) => {
  return service.post(`/v1/plant_member/add`, reqBody);
};

export const updatePlantMemberById = (reqBody) => {
  return service.put(`/v1/plant_member/edit`, reqBody);
};

export const deletePlantMemberById = (id) => {
  return service.delete(`/v1/plant_member/${id}`);
};

export const getPlantMemberList = (params) => {
  let paramsStr = qs.stringify(_.pickBy(params, (item) => {
    return item !== '' && item !== undefined;
  }));
  return service.get(`/v1/plant_member/list?${paramsStr}`);
};

export const getPlantMemberById = (id) => {
  return service.get(`/v1/plant_member/${id}`);
};

// 宅基地
export const createHomestead = (reqBody) => {
  return service.post(`/v1/homestead`, reqBody);
};

export const updateHomesteadById = (reqBody) => {
  return service.put(`/v1/homestead`, reqBody);
};

export const deleteHomesteadById = (id) => {
  return service.delete(`/v1/homestead/${id}`);
};

export const getHomesteadList = (params) => {
  let paramsStr = qs.stringify(_.pickBy(params, (item) => {
    return item !== '' && item !== undefined;
  }));
  return service.get(`/v1/homestead/page?${paramsStr}`);
};

export const getHomesteadById = (id) => {
  return service.get(`/v1/homestead/${id}`);
};

// 耕地
export const createLand = (reqBody) => {
  return service.post(`/v1/land`, reqBody);
};

export const updateLandById = (reqBody) => {
  return service.put(`/v1/land`, reqBody);
};

export const deleteLandById = (id) => {
  return service.delete(`/v1/land/${id}`);
};

export const getLandList = (params) => {
  let paramsStr = qs.stringify(_.pickBy(params, (item) => {
    return item !== '' && item !== undefined;
  }));
  return service.get(`/v1/land/page?${paramsStr}`);
};

export const getLandById = (id) => {
  return service.get(`/v1/land/${id}`);
};

// 政府项目
export const createGovernmentProject = (reqBody) => {
  return service.post(`/v1/government-project`, reqBody);
};

export const updateGovernmentProjectById = (reqBody) => {
  return service.put(`/v1/government-project`, reqBody);
};

export const deleteGovernmentProjectById = (id) => {
  return service.delete(`/v1/government-project/${id}`);
};

export const getGovernmentProjectList = (params) => {
  let paramsStr = qs.stringify(_.pickBy(params, (item) => {
    return item !== '' && item !== undefined;
  }));
  return service.get(`/v1/government-project/list?${paramsStr}`);
};

export const getGovernmentProjectById = (id) => {
  return service.get(`/v1/government-project/${id}`);
};

// 专项补贴
export const createSubsidy = (reqBody) => {
  return service.post(`/v1/subsidy`, reqBody);
};

export const updateSubsidyById = (reqBody) => {
  return service.put(`/v1/subsidy`, reqBody);
};

export const deleteSubsidyById = (id) => {
  return service.delete(`/v1/subsidy/${id}`);
};

export const getSubsidyList = (params) => {
  let paramsStr = qs.stringify(_.pickBy(params, (item) => {
    return item !== '' && item !== undefined;
  }));
  return service.get(`/v1/subsidy/list?${paramsStr}`);
};

export const getSubsidyById = (id) => {
  return service.get(`/v1/subsidy/${id}`);
};

// 农业社会化服务
export const createSocial = (reqBody) => {
  return service.post(`/v1/social`, reqBody);
};

export const updateSocialById = (reqBody) => {
  return service.put(`/v1/social`, reqBody);
};

export const deleteSocialById = (id) => {
  return service.delete(`/v1/social/${id}`);
};

export const getSocialList = (params) => {
  let paramsStr = qs.stringify(_.pickBy(params, (item) => {
    return item !== '' && item !== undefined;
  }));
  return service.get(`/v1/social/list?${paramsStr}`);
};

// 种植管理
export const createPlant = (reqBody) => {
  return service.post(`/v1/plant`, reqBody);
};

export const getPlantById = (id) => {
  return service.get(`/v1/plant?farmLandId=${id}`);
};

export const getPlantHistory = (params) => {
  let paramsStr = qs.stringify(_.pickBy(params, (item) => {
    return item !== '' && item !== undefined;
  }));
  return service.get(`/v1/plant/history?${paramsStr}`);
};

// 字典接口
export const getDictByKey = (params) => {
  let paramsStr = qs.stringify(_.pickBy(params, (item) => {
    return item !== '' && item !== undefined;
  }));
  return service.get(`/v1/dict/list?${paramsStr}`);
};

export const getDictList = (params) => {
  let paramsStr = qs.stringify(_.pickBy(params, (item) => {
    return item !== '' && item !== undefined;
  }));
  return service.get(`/v1/dict/listDict?${paramsStr}`);
};

export const getAllDictList = () => {
  return service.get(`/v1/dict/all`);
};

export const postDict = (reqBody) => {
  return service.post(`/v1/dict/add`, reqBody);
};

// 警告
export const getWarningList = (params) => {
  let paramsStr = qs.stringify(_.pickBy(params, (item) => {
    return item !== '' && item !== undefined;
  }));
  return service.get(`/v1/warn/page?${paramsStr}`);
};

// 预警统计
export const getWarnStatisticsByFarmId = (id) => {
  return service.get(`/v1/warn/warnStatistics?farmId=${id}`);
}

// 统计
export const getStatisticsAll = (params) => {
  let paramsStr = qs.stringify(_.pickBy(params, (item) => {
    return item !== '' && item !== undefined;
  }));
  return service.get(`/v1/statistics/all?${paramsStr}`);
};

