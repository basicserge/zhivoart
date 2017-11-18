enduro.templating_engine.registerHelper('pageClass', function (a) {
    if (a == 'works' || a == 'sphere' || a == 'author') {
        return 'class="works-page"';
    }
});
