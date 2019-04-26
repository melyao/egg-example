'use strict';
module.exports = app => {
  class IndexController extends app.Controller {
    async index() {
      const json = await this.app.mysql.queryOne('SELECT id as projectId,name as projectName, DATE_FORMAT(endDate,"%Y-%d-%m %H:%i:%s") as endDate ,info as projectInfo FROM project ');
      if (json) {
        json.courtList = [];
        const courtList = await this.app.mysql.query('select id as courtId, courtName, coverUrl, maxCommission from court where projectId = ?', [ json.projectId ]);
        if (courtList.length > 0) {
          json.courtList = courtList;
        }
      }
      const res = {
        retMsg: '获取成功',
        retCode: '0000',
        result: json,
      };
      this.ctx.body = res;
    }
    async courtinfo() {
      const courtId = this.ctx.query.courtId;
      const result = await this.app.mysql.get('court', { // 搜索 post 表
        id: courtId,
      });
      const res = {
        retMsg: '获取成功',
        retCode: '0000',
        result,
      };
      this.ctx.body = res;
    }

  }
  return IndexController;
};
