'use strict';

const { Controller } = require('egg');

class NewController extends Controller {
    async home() {
        const { ctx } = this;
        await ctx.render('home/home.html');
    }
    async login() {
        const { ctx } = this;
        await ctx.render('login/login.html');
    }
    async register() {
        const { ctx } = this;
        await ctx.render('register/register.html');
    }
    async contact() {
        const { ctx } = this;
        await ctx.render('contact/contact.html');
    }
    async artifact() {
        const { ctx } = this;
        await ctx.render('artifact/artifact.html');
    }
    async fees() {
        const { ctx } = this;
        await ctx.render('fees/fees.html');
    }
    async about() {
        const { ctx } = this;
        await ctx.render('about/about.html');
    }


}

module.exports = NewController;