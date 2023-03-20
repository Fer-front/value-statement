const { engine } = require('express-handlebars')

module.exports = {
    config: (express) => {
        express.engine('handlebars', engine());
        express.set('view engine', 'handlebars');
        express.set('views', './views');
    }
}