'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
    const { router, controller } = app;
    router.get('/', controller.render.home);
    router.get('/home', controller.render.home);
    router.get('/login', controller.render.login);
    router.get('/register', controller.render.register);
    router.get('/contact', controller.render.contact);
    router.get('/artifact', controller.render.artifact);
    router.get('/fees', controller.render.fees);
    router.get('/about', controller.render.about);

};