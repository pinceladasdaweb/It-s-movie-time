/*jslint node: true */
"use strict";

var express = require('express'),
    request = require('request'),
    router  = express.Router();

router.get('/:id', function (req, res) {
    var page = parseInt(req.params.id);
    request({
        url: 'http://yts.to/api/v2/list_movies.json?page=' + page,
        json: true,
        timeout: 10000
    }, function (error, response, body) {
        if (body.status === 'ok') {
            res.render('page', {
                data: body
            });
        } else {
            res.render('error', {
                data: body
            });
        }
    });
});

module.exports = router;