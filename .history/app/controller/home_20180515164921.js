'use strict';

const Controller = require('egg').Controller;

class HomeController extends Controller {
  async index() {
    const json = {
      retMsg: '操作成功',
      retCode: '0000',
      result: {
        hotCity: [{
          provinceId: 19,
          cityId: 210,
          cityName: '广州市',
          pinyinAll: 'Guangzhou shi',
        }, {
          provinceId: 23,
          cityId: 111,
          cityName: '成都市',
          pinyinAll: 'Chengdu shi',
        }, {
          provinceId: 22,
          cityId: 109,
          cityName: '重庆市',
          pinyinAll: 'ChongqingShi',
        }, {
          provinceId: 6,
          cityId: 42,
          cityName: '沈阳市',
          pinyinAll: 'Shenyang shi',
        }, {
          provinceId: 1,
          cityId: 122,
          cityName: '北京市',
          pinyinAll: 'BeijingShi',
        }, {
          provinceId: 9,
          cityId: 78,
          cityName: '上海市',
          pinyinAll: 'ShanghaiShi',
        }, {
          provinceId: 11,
          cityId: 89,
          cityName: '杭州市',
          pinyinAll: 'Hangzhou shi',
        }, {
          provinceId: 2,
          cityId: 124,
          cityName: '天津市',
          pinyinAll: 'TianjinShi',
        }],
        baseCity: [{
          provinceId: 16,
          cityId: 23,
          cityName: '安阳市',
          pinyinAll: 'Anyang shi',
        }, {
          provinceId: 1,
          cityId: 122,
          cityName: '北京市',
          pinyinAll: 'BeijingShi',
        }, {
          provinceId: 3,
          cityId: 131,
          cityName: '沧州市',
          pinyinAll: 'Cangzhou shi',
        }, {
          provinceId: 7,
          cityId: 56,
          cityName: '长春市',
          pinyinAll: 'Changchun shi',
        }, {
          provinceId: 18,
          cityId: 32,
          cityName: '常德市',
          pinyinAll: 'Changde shi',
        }, {
          provinceId: 18,
          cityId: 200,
          cityName: '长沙市',
          pinyinAll: 'Changsha shi',
        }, {
          provinceId: 10,
          cityId: 2,
          cityName: '常州市',
          pinyinAll: 'Changzhou shi',
        }, {
          provinceId: 23,
          cityId: 111,
          cityName: '成都市',
          pinyinAll: 'Chengdu shi',
        }, {
          provinceId: 22,
          cityId: 109,
          cityName: '重庆市',
          pinyinAll: 'ChongqingShi',
        }, {
          provinceId: 6,
          cityId: 43,
          cityName: '大连市',
          pinyinAll: 'Dalian shi',
        }, {
          provinceId: 6,
          cityId: 47,
          cityName: '丹东市',
          pinyinAll: 'Dandong shi',
        }, {
          provinceId: 23,
          cityId: 309,
          cityName: '德阳市',
          pinyinAll: 'Deyang shi',
        }, {
          provinceId: 19,
          cityId: 40,
          cityName: '东莞市',
          pinyinAll: 'Dongguan shi',
        }, {
          provinceId: 19,
          cityId: 214,
          cityName: '佛山市',
          pinyinAll: 'Foshan shi',
        }, {
          provinceId: 13,
          cityId: 12,
          cityName: '福州市',
          pinyinAll: 'Fuzhou shi',
        }, {
          provinceId: 14,
          cityId: 171,
          cityName: '赣州市',
          pinyinAll: 'Ganzhou shi',
        }, {
          provinceId: 19,
          cityId: 210,
          cityName: '广州市',
          pinyinAll: 'Guangzhou shi',
        }, {
          provinceId: 21,
          cityId: 106,
          cityName: '海口市',
          pinyinAll: 'Haikou shi',
        }, {
          provinceId: 11,
          cityId: 89,
          cityName: '杭州市',
          pinyinAll: 'Hangzhou shi',
        }, {
          provinceId: 12,
          cityId: 155,
          cityName: '合肥市',
          pinyinAll: 'Hefei shi',
        }, {
          provinceId: 19,
          cityId: 218,
          cityName: '惠州市',
          pinyinAll: 'Huizhou shi',
        }, {
          provinceId: 19,
          cityId: 215,
          cityName: '江门市',
          pinyinAll: 'Jiangmen shi',
        }, {
          provinceId: 4,
          cityId: 137,
          cityName: '晋中市',
          pinyinAll: 'Jinzhong shi',
        }, {
          provinceId: 14,
          cityId: 329,
          cityName: '九江市',
          pinyinAll: 'Jiujiang shi',
        }, {
          provinceId: 28,
          cityId: 269,
          cityName: '兰州市',
          pinyinAll: 'Lanzhou shi',
        }, {
          provinceId: 10,
          cityId: 84,
          cityName: '连云港市',
          pinyinAll: 'Lianyungang shi',
        }, {
          provinceId: 15,
          cityId: 180,
          cityName: '临沂市',
          pinyinAll: 'Linyi shi',
        }, {
          provinceId: 16,
          cityId: 183,
          cityName: '洛阳市',
          pinyinAll: 'Luoyang shi',
        }, {
          provinceId: 19,
          cityId: 35,
          cityName: '茂名市',
          pinyinAll: 'Maoming shi',
        }, {
          provinceId: 23,
          cityId: 343,
          cityName: '眉山市',
          pinyinAll: 'Meishan shi',
        }, {
          provinceId: 19,
          cityId: 219,
          cityName: '梅州市',
          pinyinAll: 'Meizhou shi',
        }, {
          provinceId: 23,
          cityId: 114,
          cityName: '绵阳市',
          pinyinAll: 'Mianyang shi',
        }, {
          provinceId: 14,
          cityId: 168,
          cityName: '南昌市',
          pinyinAll: 'Nanchang shi',
        }, {
          provinceId: 10,
          cityId: 1,
          cityName: '南京市',
          pinyinAll: 'Nanjing shi',
        }, {
          provinceId: 10,
          cityId: 83,
          cityName: '南通市',
          pinyinAll: 'Nantong shi',
        }, {
          provinceId: 11,
          cityId: 5,
          cityName: '宁波市',
          pinyinAll: 'Ningbo shi',
        }, {
          provinceId: 13,
          cityId: 165,
          cityName: '莆田市',
          pinyinAll: 'Putian shi',
        }, {
          provinceId: 15,
          cityId: 331,
          cityName: '青岛市',
          pinyinAll: 'Qingdao shi',
        }, {
          provinceId: 19,
          cityId: 222,
          cityName: '清远市',
          pinyinAll: 'Qingyuan shi',
        }, {
          provinceId: 3,
          cityId: 127,
          cityName: '秦皇岛市',
          pinyinAll: 'Qinhuangdao shi',
        }, {
          provinceId: 13,
          cityId: 327,
          cityName: '泉州市',
          pinyinAll: 'Quanzhou shi',
        }, {
          provinceId: 21,
          cityId: 107,
          cityName: '三亚市',
          pinyinAll: 'Sanya shi',
        }, {
          provinceId: 9,
          cityId: 78,
          cityName: '上海市',
          pinyinAll: 'ShanghaiShi',
        }, {
          provinceId: 19,
          cityId: 39,
          cityName: '汕头市',
          pinyinAll: 'Shantou shi',
        }, {
          provinceId: 19,
          cityId: 36,
          cityName: '汕尾市',
          pinyinAll: 'Shanwei shi',
        }, {
          provinceId: 19,
          cityId: 211,
          cityName: '韶关市',
          pinyinAll: 'Shaoguan shi',
        }, {
          provinceId: 6,
          cityId: 42,
          cityName: '沈阳市',
          pinyinAll: 'Shenyang shi',
        }, {
          provinceId: 3,
          cityId: 312,
          cityName: '石家庄市',
          pinyinAll: 'Shijiazhuang shi',
        }, {
          provinceId: 23,
          cityId: 310,
          cityName: '遂宁市',
          pinyinAll: 'Suining shi',
        }, {
          provinceId: 4,
          cityId: 133,
          cityName: '太原市',
          pinyinAll: 'Taiyuan shi',
        }, {
          provinceId: 2,
          cityId: 124,
          cityName: '天津市',
          pinyinAll: 'TianjinShi',
        }, {
          provinceId: 7,
          cityId: 60,
          cityName: '通化市',
          pinyinAll: 'Tonghua shi',
        }, {
          provinceId: 31,
          cityId: 295,
          cityName: '乌鲁木齐市',
          pinyinAll: 'Urumqi shi',
        }, {
          provinceId: 17,
          cityId: 191,
          cityName: '武汉市',
          pinyinAll: 'Wuhan shi',
        }, {
          provinceId: 12,
          cityId: 41,
          cityName: '芜湖市',
          pinyinAll: 'Wuhu shi',
        }, {
          provinceId: 27,
          cityId: 259,
          cityName: '西安市',
          pinyinAll: 'Xi,an shi',
        }, {
          provinceId: 13,
          cityId: 164,
          cityName: '厦门市',
          pinyinAll: 'Xiamen shi',
        }, {
          provinceId: 2,
          cityId: 125,
          cityName: '县',
          pinyinAll: 'Xian',
        }, {
          provinceId: 22,
          cityId: 110,
          cityName: '县',
          pinyinAll: 'Xian',
        }, {
          provinceId: 19,
          cityId: 221,
          cityName: '阳江市',
          pinyinAll: 'Yangjiang shi',
        }, {
          provinceId: 17,
          cityId: 192,
          cityName: '宜昌市',
          pinyinAll: 'Yichang shi',
        }, {
          provinceId: 6,
          cityId: 49,
          cityName: '营口市',
          pinyinAll: 'Yingkou shi',
        }, {
          provinceId: 18,
          cityId: 204,
          cityName: '岳阳市',
          pinyinAll: 'Yueyang shi',
        }, {
          provinceId: 19,
          cityId: 216,
          cityName: '湛江市',
          pinyinAll: 'Zhanjiang shi',
        }, {
          provinceId: 19,
          cityId: 217,
          cityName: '肇庆市',
          pinyinAll: 'Zhaoqing shi',
        }, {
          provinceId: 16,
          cityId: 22,
          cityName: '郑州市',
          pinyinAll: 'Zhengzhou shi',
        }, {
          provinceId: 19,
          cityId: 223,
          cityName: '中山市',
          pinyinAll: 'Zhongshan shi',
        }, {
          provinceId: 19,
          cityId: 213,
          cityName: '珠海市',
          pinyinAll: 'Zhuhai shi',
        }],
      },
    };
    this.ctx.body = json;
  }
  async list() {
    const json = {
      retMsg: '操作成功',
      retCode: '0000',
      result: [
        {
          img: '/public/img/pic1.png',
          name: '重庆-保利高尔夫',
          place: '重庆市九龙坡区1街01号',
          price: 400,
          hole: '18洞',
          geography: '山地',
        }, {
          img: '/public/img/pic2.png',
          name: '成都-198高尔夫',
          place: '四川省成都市蜀龙大道... ...',
          price: 1688,
          hole: '18洞',
          geography: '山地',
        }],
    };
    this.ctx.body = json;
  }
}

module.exports = HomeController;
