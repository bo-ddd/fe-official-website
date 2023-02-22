'use strict';

const { Controller } = require('egg');

class NewController extends Controller {
    async index() {
        const { ctx } = this;
        await ctx.render('news/new.html');
    }
    async home() {
        const { ctx } = this;
        await ctx.render('home/home.html');
    }
}

module.exports = NewController;