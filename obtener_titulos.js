var casper = require('casper').create();

casper.start('http://google.com/', function() {
    this.echo(this.getTitle());
});

casper.thenOpen('http://chevere.pw', function() {
    this.echo(this.getTitle());
});

casper.run();