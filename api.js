getEntityByAlias = function(data, db, plugins, stepFoo){
    var dataObj = JSON.parse(data);
    db.getRegularEntityByAlias(dataObj.alias, "/", function(result){
       if(result !== undefined){
            if(result.code !== undefined){
                stepFoo("error"); 
            }
            else{
                plugins.fire(result.smalldata, dataObj.type, function(smalldata){
                    result.smalldata = smalldata;
                    plugins.fire(result.data, dataObj.type, function(bigdata){
                    result.data = bigdata;
                    stepFoo(result);
                    });
                });
            }
        }
        else{
            stepFoo("error");    
        }
    });
}
exports.getEntityByAlias = getEntityByAlias;

getEntityById = function(data, db, plugins, stepFoo){
    var dataObj = JSON.parse(data);
    db.getRegularEntityById(dataObj.id, dataObj.type, function(result){
        if(result !== undefined){
            if(result.code !== undefined){
                stepFoo("error"); 
            }
            else{
                plugins.fire(result.smalldata, dataObj.type, function(smalldata){
                    result.smalldata = smalldata;
                    plugins.fire(result.data, dataObj.type, function(bigdata){
                    result.data = bigdata
                    stepFoo(result);
                    });
                });
            }
        }
        else{
            stepFoo("error");    
        }
    });
}
exports.getEntityById = getEntityById;

getLatestPosts = function(data, db, plugins, stepFoo){
    var dataObj = JSON.parse(data);
    db.getIndexContent(function(results){
      var out =[];
      var max = (parseInt(dataObj.count)<(results.length))? parseInt(dataObj.count) : results.length; 
      while (max--){
          out[max] = results[max];  
      }
      plugins.fire(JSON.stringify(out), "posts", function(data){
                    stepFoo(data);
      });
    });
}
exports.getLatestPosts = getLatestPosts;

getAllPages = function(db, plugins, stepFoo){
    db.getAll("pages" ,function(results){
        plugins.fire(results, "pages", function(data){
                    stepFoo(data);
        });
    });
}
exports.getAllPages = getAllPages;

getTemplate = function(data, template, plugins, stepFoo){
    var dataObj = JSON.parse(data);
    var list = ['page','post','small_post','footer','header','index']
    if(list.indexOf(dataObj.name) != -1){
        plugins.fire(template[dataObj.name], dataObj.name, function(data){
                    stepFoo(data);
        });
    }
    else{
        stepFoo("error");
    }
}
exports.getTemplate = getTemplate;

getPageType = function(data, db, stepFoo)
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
                    stepFoo(result.type);
    });
}
exports.getPageType = getPageType;

exports.textApi = function(db, template, request, plugins){
    var ret = {api: function(p1, p2, p3){
        var call, data, callback
        if(typeof p1 == 'undefined') {
            if(typeof p2 == 'function'){
                p2("error")
            }
            else if(typeof p3 == 'function'){
                p3("error");
            }
        }
        else{
            call = p1;
        }
        if(typeof p2 == 'undefined') {
            data = 'default';
        }
        else if(typeof p2 == 'function'){
            callback = p2;
        }
        else{
            data = p2;
        }
        if(typeof p3 == 'function'){
            callback = p3;
        }
        if (typeof data == 'undefined') data = '{"default":"default"}';
        var dataStr = JSON.stringify(data);
        switch(call){
            case "is_logged_in":db.loggedIn(request, function(check, userName){
                                    if(check){
                                        callback('{logged:"true","name":'+userName+'}');
                                    }
                                    else{
                                        callback("false") 
                                    }
                                });
                            break;
            case "get_entity_by_alias":getEntityByAlias(dataStr, db, plugins, function(data){
                                            callback(data);
                                       });
                            break;
            case "get_entity_by_id":getEntityById(dataStr, db, plugins, function(data){
                                            callback(data);
                                       });
                            break;
            case "get_latest_posts":getLatestPosts(dataStr, db, plugins, function(data){
                                            callback(data);
                                       });
                            break;
            case "get_all_pages":getAllPages(db, plugins, function(data){
                                            callback(data);
                                       });
                            break;
            case "get_page_type":getPageType(dataStr, db, function(data){
                                            callback(data);
                                       });
                            break;
            case "get_template":getTemplate(dataStr, template, plugins, function(data){
                                            callback(data);
                                       });
                            break;                
            default: callback("error");
                break;
        } 
    }
  }
  return ret;
}    