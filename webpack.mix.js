let mix = require('laravel-mix');
require('laravel-mix-purgecss');



mix.sass('assets/scss/argon.scss', 'assets/css/argon-rtl.css')
    .purgeCss({folders: ['examples','./'],extensions:['html']});
