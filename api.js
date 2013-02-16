exports.getEntityByAlias = function(data, db, plugins, response){
    var dataObj = JSON.parse(data);
    db.getRegularEntityByAlias(dataObj.alias, "/", function(result){
       if(result !== undefined){
            if(result.code !== undefined){
                response.writeHead(200, {"Content-Type": "text/plain"});
                response.end("error"); 
            }
            else{
                plugins.fire(JSON.stringify(result), dataObj.type, function(data){
                    response.writeHead(200, {"Content-Type": "text/plain"});
                    response.end(data);
                });
            }
        }
        else{
            response.writeHead(200, {"Content-Type": "text/plain"});
            response.end("error");    
        }
    });
}

exports.getEntityById = function(data, db, plugins, response){
    var dataObj = JSON.parse(data);
    db.getRegularEntityById(dataObj.id, dataObj.type, function(result){
        if(result !== undefined){
            if(result.code !== undefined){
                response.writeHead(200, {"Content-Type": "text/plain"});
                response.end("error"); 
            }
            else{
                plugins.fire(JSON.stringify(result), dataObj.type, function(data){
                    response.writeHead(200, {"Content-Type": "text/plain"});
                    response.end(data);
                });
            }
        }
        else{
            response.writeHead(200, {"Content-Type": "text/plain"});
            response.end("error");    
        }
    });
}

exports.getLatestPosts = function(data, db, plugins, response){
    var dataObj = JSON.parse(data);
    db.getIndexContent(function(results){
      var out =[];
      var max = (parseInt(dataObj.count)<(results.length))? parseInt(dataObj.count) : results.length; 
      while (max--){
          out[max] = results[max];  
      }
      plugins.fire(JSON.stringify(out), "posts", function(data){
                    response.writeHead(200, {"Content-Type": "text/plain"});
                    response.end(data);
      });
    });
}

exports.getAllPages = function(db, plugins, response){
    db.getAll("pages" ,function(results){
        plugins.fire(results, "pages", function(data){
                    response.writeHead(200, {"Content-Type": "text/plain"});
                    response.end(data);
        });
    });
}

exports.getTemplate = function(data, template, plugins, response){
    var dataObj = JSON.parse(data);
    var list = ['page','post','small_post','footer','header','index']
    if(list.indexOf(dataObj.name) != -1){
        plugins.fire(template[dataObj.name], dataObj.name, function(data){
                    response.writeHead(200, {"Content-Type": "text/plain"});
                    response.end(data);
        });
    }
    else{
        response.writeHead(200, {"Content-Type": "text/plain"});
        response.end("error");
    }
}

exports.getPageType = function(data, db, response)
{
    var dataObj = JSON.parse(data);
    db.getRegularEntityByAlias(dataObj.alias, "/", function(result){
                    if(result == undefined){
                        if(dataObj.alias == "") {
                            result = {type:"index"};
                        }
                        else{
                            result = {type:"error"};
                        }
                    }
                    response.writeHead(200, {"Content-Type": "text/plain"});
                    response.end(result.type);
        
    });
}