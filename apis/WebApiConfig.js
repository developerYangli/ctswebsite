/**
 *  Class: WebApiConfig
 *  Author:Yangli
 *  Date: 16/7/9.
 *  Description: 请求配置项
 */

import global from '../apis/global';

export default {
  baseurl: '',
  api: [
    {
      name: 'getBanner',
      method: 'get',
      url: global.webApiURL + '/mock/banner.json',
      desc: '创建广告'
    },
  ]
};
