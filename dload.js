function waitFor(testFx, onReady, timeOutMillis) {
  var maxtimeOutMillis = timeOutMillis ? timeOutMillis : 20000, //< Default Max Timout is 20s
      start = new Date().getTime(),
      condition = false,
      interval = setInterval(function() {
          if ( (new Date().getTime() - start < maxtimeOutMillis) && !condition ) {
              // If not time-out yet and condition not yet fulfilled
              condition = (typeof(testFx) === "string" ? eval(testFx) : testFx()); //< defensive code
          } else {
              if(!condition) {
                  // If condition still not fulfilled (timeout but condition is 'false')
                  console.log("Could not be processed! See Interactive link online");
                  phantom.exit(1);
              } else {
                  // Condition fulfilled (timeout and/or condition is 'true')
                  // console.log("'waitFor()' finished in " + (new Date().getTime() - start) + "ms.");
                  typeof(onReady) === "string" ? eval(onReady) : onReady(); //< Do what it's supposed to do once the condition is fulfilled
                  clearInterval(interval); //< Stop this interval
              }
          }
      }, 1000); //< repeat check every 1s
};


var system = require('system');

if (system.args.length === 1) {
    console.log('Provide the fiddle');
} else {
  var fiddle = system.args[1]
}

var page = require('webpage').create()

// var url = 'https://dbfiddle.uk/markdown?rdbms=oracle_11.2&fiddle=79b355c7fe6c5203d3ff74d8d3e368f2'
// var url = 'https://dbfiddle.uk/markdown?rdbms=oracle_11.2&fiddle=' + fiddle
var url = fiddle

page.settings.userAgent = 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10.12; rv:49.0) Gecko/20100101 Firefox/49.0'
// console.log('Opening ' + url)

page.onConsoleMessage = function(msg) {
  console.log(msg)
}


page.open(url, function() {
    waitFor(function() {
            // Check in the page if a specific element is now visible
            return page.evaluate(function() {
                return $(".ace_line").is(":visible")
            });
        }, function() {
           var foo = page.evaluate(function() {
              var contents = ''
              content = document.getElementsByClassName('ace_line')
              // console.log('visiting all...')
              for (var i = 0; i < content.length; i++) {
                var line = content[i].textContent
                // contents += line.textContent.slice(2)
                if (line.indexOf("|") !== -1 && line.indexOf("|") !== 2) line = "> |" + line.slice(1) + " |"
                if (line.indexOf("pre") == -1)
                   contents += line + '\n'
              }
              console.log(contents)
              // var path = 'fiddle_contents.md';
              // var fs = require('fs');
              // fs.write(path, contents, 'w');

            });
            phantom.exit();
        });
});
