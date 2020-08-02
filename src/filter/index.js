import _ from 'lodash';
export function borderColor() {
  return ['#1F4071', '#417FC8'];
}

export function toFixed2(value) {
  return _.isNumber(value) ? (value / 10000) .toFixed(2) : '';
}