/*jslint node: true */
"use strict";

var express = require('express'),
    moment  = require('moment'),
    request = require('request'),
    router  = express.Router();

router.get('/', function (req, res) {
    request({
        url: 'https://yts.ag/api/v2/list_movies.json',
        json: true,
        timeout: 10000
    }, function (error, response, body) {
        if (body.status === 'ok') {
            res.render('index', {
                data: body,
                moment: moment
            });
        } else {
            res.render('error', {
                data: body,
                moment: moment
            });
        }
    });
});

module.exports = router;