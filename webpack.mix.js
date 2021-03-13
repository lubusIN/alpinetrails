const mix = require('laravel-mix');

mix.postCss('src/style.css', 'build', [require('tailwindcss')]);
mix.js('src/script.js', 'build');
mix.options({
    processCssUrls: false,
});
mix.disableNotifications();