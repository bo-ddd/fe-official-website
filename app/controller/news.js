'use strict';

const { Controller } = require('egg');

class NewController extends Controller {
  async index() {
    const { ctx } = this;
    await ctx.render('news/new.html');
  }
}

module.exports = NewController;
