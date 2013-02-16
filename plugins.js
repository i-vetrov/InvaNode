var fs = require("fs");

String.prototype.replaceAll=function(find, replace_to){
     return this.replace(new RegExp(find, "g"), replace_to);
};


var Plugins = function(){
   var context = this; 
   var folder = __dirname + "/plugins"; 
   this.plugin = [];
   this.list = fs.readdirSync(folder);
   this.list.forEach(function(name){
           var i = context.plugin.length;
           context.plugin[i] = JSON.parse(fs.readFileSync(folder + "/" + name + "/plugin.json", 'utf-8'));
           context.plugin[i].content.replaceWith = fs.readFileSync(folder + "/" + name + "/" + context.plugin[i].content.source, 'utf-8');
           context.plugin[i].alias = name;
    });
    this.reloadPlugins = function(){
            context.plugin = [];
            context.list = fs.readdirSync(folder);
            context.list.forEach(function(name){
                var i = context.plugin.length;
                context.plugin[i] = JSON.parse(fs.readFileSync(folder + "/" + name + "/plugin.json", 'utf-8'));
                context.plugin[i].content.replaceWith = fs.readFileSync(folder + "/" + name + "/" + context.plugin[i].content.source, 'utf-8');
                context.plugin[i].alias = name;
            });
    } 
}

var plugins = new Plugins();

exports.fire = function(template, place, stepFoo){
    plugins.plugin.forEach(function(plugin){
       plugin.applyTo.push('page','post','small_post','footer','header'); 
       if(plugin.applyTo.indexOf(place) != -1){ 
          template = template.replaceAll(plugin.content.replace, plugin.content.replaceWith);
        }  
    });
    stepFoo(template);   
};

exports.reloadPlugins = function(response)
{
    plugins.reloadPlugins();
    response.writeHead(200, {"Content-Type": "text/plain"});
    response.end("done");
}

exports.fireAdmin = function(response){ 
      response.writeHead(200, {"Content-Type": "text/plain"});
      response.end(JSON.stringify(plugins));
};

exports.savePlugin = function(fs, data, response)
{
    var postDadaObj = JSON.parse(data);
    var name = postDadaObj.name;
    var author = postDadaObj.author;
    var description = postDadaObj.description;
    var replace = postDadaObj.replace;
    var replacewith = postDadaObj.replacewith;
    var applyto = postDadaObj.applyto;
    var alias = postDadaObj.alias;
    applyto = applyto.split(",");
    var curP;
    plugins.plugin.forEach(function(plugin){
                    if(plugin.alias == alias) curP = plugin;
                });
    if(curP === undefined) {
        response.writeHead(200, {"Content-Type": "text/plain"});
        response.end("error");
        return;
    }
    var pluginJSON = new Object({
    "name": name,
    "author":author,
    "description":description,
    "content":{
        "replace":replace,
        "source":curP.content.source,
        "replaceWith":""
    },
    "applyTo":applyto
    });
    try{
        fs.writeFileSync( __dirname + "/plugins/" + alias + "/plugin.json", JSON.stringify(pluginJSON), 'utf-8');
        fs.writeFileSync( __dirname + "/plugins/" + alias + "/" + curP.content.source, replacewith, 'utf-8');
    }
    catch(exception_var)
    {
        console.log('saving plugin error: '+exception_var);
        response.writeHead(200, {"Content-Type": "text/plain"});
        response.end("error");
        return;
    }
    plugins.reloadPlugins();
    response.writeHead(200, {"Content-Type": "text/plain"});
    response.end("done");
    
}