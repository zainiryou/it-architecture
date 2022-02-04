var soap = require('soap');

var myService = {
    MyService: {
        MyPort: {
            HelloWorld: function(args) {
                return {
                    name: "Hello : " + args.name
                };
            },           
        }
    }
};



var xml = require('fs').readFileSync('myservice.wsdl', 'utf8');

//http server example
var server = require("http").createServer(function(request,response) {
    response.end('404: Not Found test: ' + request.url);
});

server.listen(8000);
soap.listen(server, '/wsdl', myService, xml, function(){
  console.log('server initialized');
});

//express server example
/*var app = express();
//body parser middleware are supported (optional)
app.use(bodyParser.raw({type: function(){return true;}, limit: '5mb'}));
app.listen(8001, function(){
    //Note: /wsdl route will be handled by soap module
    //and all other routes & middleware will continue to work
    soap.listen(app, '/wsdl', myService, xml, function(){
      console.log('server initialized');
    });
});*/

var xml = require('fs').readFileSync('myservice.wsdl', 'utf8');

soap.listen(server, {
  // Server options.
  path: '/wsdl',
  services: myService,
  xml: xml,

  // WSDL options.
  attributesKey: 'theAttrs',
  valueKey: 'theVal',
  xmlKey: 'theXml'
});