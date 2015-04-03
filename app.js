var express   = require('express'),
    path      = require('path'),
    index     = require('./routes/index'),
    movie     = require('./routes/movie'),
    page      = require('./routes/page'),
    app       = express();

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(express.static(__dirname + '/public', {maxAge: 86400000}));

app.use('/', index);
app.use('/page', page);
app.use('/movie', movie);

module.exports = app;