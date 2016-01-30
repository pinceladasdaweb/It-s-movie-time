/*jslint node: true */
"use strict";

const express = require('express'),
      moment  = require('moment'),
      request = require('request'),
      router  = express.Router();

router.get('/:searchText', (req, res) => {
    request({
        url: 'https://yts.ag/api/v2/list_movies.json?query_term=' + req.params.searchText,
        json: true,
        timeout: 10000
    }, (error, response, body) => {
        if (body.status === 'ok') {
            res.render('partials/result', {
                search: body
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