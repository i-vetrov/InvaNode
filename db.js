// MySQL database functions
<<<<<<< HEAD
var options = require("./options");
var mysql = require("mysql");
var crypto = require('crypto');
var client;

function dbConnect(){
    var connect = mysql.createConnection({
        host: options.vars.dbHost,
        port: options.vars.dbPort,
        user: options.vars.dbUser,
        database : options.vars.dbName,
        password: options.vars.dbPass
    });
    connect.connect(function(err) {
        if (err) {
            console.log("sql connect error: " + err);
        }
    });
    connect.on("close", function (err) {
        console.log("sql connection closed.");
    });
    connect.on("error", function (err) {
        console.log("sql connection error: " + err);
        client = dbConnect();
    });
    return connect;
}

client = dbConnect();
setInterval(function(){client.query('USE '+options.vars.dbName);}, 3600000);

function sqlEscape (str) {
    if(typeof str !== "string") return str;
    else
       return str.replace(/[\0\x08\x09\x1a\n\r"'\\\%]/g, function (s) {
=======

var options = require("./options");
var mysql = require("mysql");
var crypto = require('crypto');
var querystring = require("querystring");

var client = mysql.createConnection({
      host: options.vars.dbHost,
      user: options.vars.dbUser,
      password: options.vars.dbPass
});

client.connect();
client.query('USE '+options.vars.dbName);
setInterval(function(){client.query('USE '+options.vars.dbName);}, 3600000);

String.prototype.realEscape=function() {
    return this.replace(/[\0\x08\x09\x1a\n\r"'\\\%]/g, function (s) {
>>>>>>> 65bd8ae9e9554d763d7b21a1b8d30c4a50d8ae84
        switch (s) {
            case "\0":
                return "\\0";
            case "\x08":
                return "\\b";
            case "\x09":
                return "\\t";
            case "\x1a":
                return "\\z";
            case "\n":
                return "\\n";
            case "\r":
                return "\\r";
            case "\"":
            case "'":
            case "\\":
            case "%":
                return "\\"+s; // prepends a backslash to backslash, percent,
<<<<<<< HEAD
                                  // and double/single quotes
        }
    });
}

exports.getIndexContent = function (stepFoo)
=======
                               // and double/single quotes
        }
    });
};

exports.getIndex = function (stepFoo)
>>>>>>> 65bd8ae9e9554d763d7b21a1b8d30c4a50d8ae84
{
    client.query("SELECT * FROM posts ORDER BY id", function (err, results, fields) {
        if (err) {
            console.log(err);
<<<<<<< HEAD
            stepFoo(err);
=======
>>>>>>> 65bd8ae9e9554d763d7b21a1b8d30c4a50d8ae84
        }
        else{
            stepFoo(results);
        }
    });   
}

<<<<<<< HEAD
exports.getRegularEntityByAlias = function (fname, dname, stepFoo)
{
    client.query(
        "SELECT * FROM pages WHERE alias='"+sqlEscape(fname)+"' UNION SELECT * FROM posts WHERE alias='"+sqlEscape(fname)+"'", function (err, results, fields) {
            if (err) {
                console.log(err);
                stepFoo(err);
            }
            else{
                stepFoo(results[0]);
            }
  });
}

exports.getRegularEntityById = function (id, type, stepFoo)
{
    client.query(
        "SELECT * FROM "+sqlEscape(type)+" WHERE id='"+sqlEscape(id)+"'", function (err, results, fields) {
            if (err) {
                console.log(err);
                stepFoo(err);
=======
exports.getOtherPage = function (fname, dname, stepFoo)
{
    client.query(
        "SELECT * FROM pages WHERE alias='"+fname+"' UNION SELECT * FROM posts WHERE alias='"+fname+"'", function (err, results, fields) {
            if (err) {
                console.log(err);
>>>>>>> 65bd8ae9e9554d763d7b21a1b8d30c4a50d8ae84
            }
            else{
                stepFoo(results[0]);
            }
  });
}

<<<<<<< HEAD

exports.coutStatistics = function (stepFoo)
{     
    var outResults={
         pages_num: 0,
         posts_num: 0,
         users_num: 0
    };
    client.query('SELECT COUNT(*) AS pgs FROM pages', function (err, results, fields) {
        if (err) {
            console.log(err);
        }
        else{
            outResults.pages_num = results[0].pgs;
            client.query('SELECT COUNT(*) AS pst FROM posts', function (err, results, fields){               
                if (err) {
                    console.log(err);
                }  
                else{
                    outResults.posts_num = results[0].pst;
                    client.query('SELECT COUNT(*) AS usr FROM users', function (err, results, fields){               
                        if (err) {
                            console.log(err);
                        }  
                        else{
                            outResults.users_num = results[0].usr;
                            stepFoo(outResults);
                        }
                    });
                }
            });
        }
    });
=======
exports.coutStatistics = function (stepFoo)
{     
  var outResults={
         pages_num: 0,
         posts_num: 0,
         users_num: 0
  };
  client.query('SELECT COUNT(*) AS pgs FROM pages', function (err, results, fields) {
        if (err) {
                    console.log(err);
        }
        else{
                    outResults.pages_num = results[0].pgs;
                    client.query('SELECT COUNT(*) AS pst FROM posts', function (err, results, fields){               
                              if (err) {
                                      console.log(err);
                              }  
                              else{
                                      outResults.posts_num = results[0].pst;
                                      client.query('SELECT COUNT(*) AS usr FROM users', function (err, results, fields){               
                                              if (err) {
                                                        console.log(err);
                                              }  
                                              else{
                                                        outResults.users_num = results[0].usr;
                                                        stepFoo(outResults);
                                              }
                                      });
                              }
                   });
       }
  });
>>>>>>> 65bd8ae9e9554d763d7b21a1b8d30c4a50d8ae84
}

exports.editDataProc = function (request, data, stepFoo)
{   
<<<<<<< HEAD
    var name = sqlEscape(data.name);
    var text = sqlEscape(data.text);
=======
    var name = querystring.parse(data).name;
    var text = querystring.parse(data).text;
>>>>>>> 65bd8ae9e9554d763d7b21a1b8d30c4a50d8ae84
    var afterCut = text.split("--CUT--");
    if(afterCut[1]===undefined){
        afterCut[1]='';
    }
<<<<<<< HEAD
    var alias = sqlEscape(data.alias);
    var type = sqlEscape(data.type);
    var id = sqlEscape(data.id);
    var description = sqlEscape(data.description);
    loggedIn(request, function(check, userName){              
        if(check){
            client.query("UPDATE "+type+" SET name='"+name+"', data='"+afterCut[1]+"', smaldata='"+afterCut[0]+"', alias='"+alias+"', description='"+description+"' WHERE id='"+id+"'",
                function (err, results, fields) {
                    if(!err){
                        stepFoo(false);           
                    }
                    else{
                        console.log(err);
                    }
                });
        }
        else{
            stepFoo(true); 
        }
=======
    var alias = querystring.parse(data).alias;
    var type = querystring.parse(data).type;
    var id = querystring.parse(data).id;
    var description = querystring.parse(data).description;
    loggedIn(request, function(check){              
                            if(check){
                                client.query("UPDATE "+type+" SET name='"+name+"', data='"+afterCut[1]+"', smaldata='"+afterCut[0]+"', alias='"+alias+"', description='"+description+"' WHERE id='"+id+"'",
                                        function (err, results, fields) {
                                                if(!err){
                                                    stepFoo(false);           
                                                }
                                                else{
                                                    console.log(err);
                                                }
                                        });
                            }
                            else{
                                stepFoo(true); 
                            }
>>>>>>> 65bd8ae9e9554d763d7b21a1b8d30c4a50d8ae84
});  
}


exports.editUserProc = function (request, data, stepFoo)
{   
<<<<<<< HEAD
  var id = sqlEscape(data.id);
  var password = sqlEscape(data.password);
  loggedIn(request, function(check, userName){              
        if(check){
            client.query("UPDATE users SET password=md5('"+password+"') WHERE id='"+id+"'",
                function (err, results, fields) {
                        if(!err){
                            stepFoo(false);           
                        }
                        else{
                            console.log(err);
                        }
            });
        }
        else{
            stepFoo(true); 
        }
=======
  var id = querystring.parse(data).id;
  var password = querystring.parse(data).password;
  loggedIn(request, function(check){              
                            if(check){
                                client.query("UPDATE users SET password=md5('"+password+"') WHERE id='"+id+"'",
                                        function (err, results, fields) {
                                                if(!err){
                                                    stepFoo(false);           
                                                }
                                                else{
                                                    console.log(err);
                                                }
                                        });
                            }
                            else{
                                stepFoo(true); 
                            }
>>>>>>> 65bd8ae9e9554d763d7b21a1b8d30c4a50d8ae84
});  
}


exports.deleteDataProc = function (request, data, stepFoo)
{
<<<<<<< HEAD
    var type = sqlEscape(data.type);
    var id = sqlEscape(data.id);
    loggedIn(request, function(check, userName){              
        if(check){
            client.query("DELETE FROM "+type+" WHERE id="+id,
                    function (err, results, fields) {
                        if(!err){
                            stepFoo(false);           
                        }
                        else{
                            console.log(err);
                        }
                        });
        }
        else{
              stepFoo(true);
        }     
=======
    var type = querystring.parse(data).type;
    var id = querystring.parse(data).id;
    loggedIn(request, function(check){              
                            if(check){
                                client.query("DELETE FROM "+type+" WHERE id="+id,
                                        function (err, results, fields) {
                                                if(!err){
                                                    stepFoo(false);           
                                                }
                                                else{
                                                    console.log(err);
                                                }
                                            });
                            }
                            else{
                                  stepFoo(true);
                            }     
>>>>>>> 65bd8ae9e9554d763d7b21a1b8d30c4a50d8ae84
    });
}

exports.saveDataProc = function (request, type, data, stepFoo)
{
  if(type!="users"){
    var date = Math.round(new Date().getTime() / 1000);
<<<<<<< HEAD
    var name = sqlEscape(data.name);
    var text = sqlEscape(data.text);
=======
    var name = querystring.parse(data).name;
    var text = querystring.parse(data).text;
>>>>>>> 65bd8ae9e9554d763d7b21a1b8d30c4a50d8ae84
    var afterCut = text.split("--CUT--");
    if(afterCut[1]===undefined){
        afterCut[1]='';
    }
<<<<<<< HEAD
    var alias = sqlEscape(data.alias);
    var description = sqlEscape(data.description);
  }
  else{
    var username = sqlEscape(data.name);
    var password = sqlEscape(data.password); 
  }
      
  loggedIn(request, function(check, userName){              
        if(check){
              if(type!="users"){
                  client.query("INSERT INTO "+type+" VALUES(NULL, "+date+", '"+name+"', '"+afterCut[1]+"', '"+afterCut[0]+"','"+alias+"','"+type+"','"+description+"')",
                        function (err, results, fields) {
                            if(!err){
                                stepFoo(false);           
                            }
                            else{
                                console.log(err);
                            }
                  });
              }      
              else{
                 client.query("INSERT INTO "+type+" VALUES(NULL, '"+username+"', md5('"+password+"'), '')",
                        function (err, results, fields) {
                            if(!err){
                                stepFoo(false);           
                            }
                            else{
                                console.log(err);
                            }
                 }); 
              }
        }
        else{
            stepFoo(true);
        }
=======
    var alias = querystring.parse(data).alias;
    var description = querystring.parse(data).description;
  }
  else{
    var username = querystring.parse(data).name;
    var password = querystring.parse(data).password; 
  }
      
  loggedIn(request, function(check){              
                            if(check){
                                      if(type!="users"){
                                          client.query("INSERT INTO "+type+" VALUES(NULL, "+date+", '"+name+"', '"+afterCut[1]+"', '"+afterCut[0]+"','"+alias+"','"+type+"','"+description+"')",
                                                function (err, results, fields) {
                                                            if(!err){
                                                                stepFoo(false);           
                                                            }
                                                            else{
                                                                console.log(err);
                                                            }
                                                    });
                                      }      
                                      else{
                                         client.query("INSERT INTO "+type+" VALUES(NULL, '"+username+"', md5('"+password+"'), '')",
                                                function (err, results, fields) {
                                                            if(!err){
                                                                stepFoo(false);           
                                                            }
                                                            else{
                                                                console.log(err);
                                                            }
                                                    }); 
                                          
                                          
                                      }
                        
                    
                
                            }
                            else{
                                stepFoo(true);
                            }
>>>>>>> 65bd8ae9e9554d763d7b21a1b8d30c4a50d8ae84
    });
}

exports.openDataForEditProc = function (request, data, stepFoo)
{
<<<<<<< HEAD
    var type = sqlEscape(data.type);
    var id = sqlEscape(data.id);
    
    loggedIn(request, function(check, userName){              
        if(check){
            client.query("SELECT * FROM "+type+" WHERE id="+id,
                    function (err, results, fields) {
                        if(!err){
                            var json = JSON.stringify(results);
                            stepFoo(false, JSON.stringify(results));           
                        }
                        else{
                            console.log(err);
                        }
            });
        }
        else{
            stepFoo(true, "nodata"); 
        }
=======
    var type = querystring.parse(data).type;
    var id = querystring.parse(data).id;
    
    loggedIn(request, function(check){              
                            if(check){
                                client.query("SELECT * FROM "+type+" WHERE id="+id,
                                        function (err, results, fields) {
                                                if(!err){
                                                    var json = JSON.stringify(results);
                                                    stepFoo(false, JSON.stringify(results));           
                                                }
                                                else{
                                                    console.log(err);
                                                }
                                            });
                            }
                            else{
                                stepFoo(true, "nodata"); 
                            }
>>>>>>> 65bd8ae9e9554d763d7b21a1b8d30c4a50d8ae84
});
}

exports.getAll = function (type, stepFoo)
{
  switch(type)
  {
      case 'pages':
<<<<<<< HEAD
      case 'posts':  client.query('SELECT id,time,name,alias FROM '+type, function (err, results, fields) {
                            if (err) {console.log(err);}
                            else{
                                stepFoo(JSON.stringify(results, function (key, value) {
                                    if (typeof value === 'number' && !isFinite(value)) {
                                        return String(value);
                                    }
                                    return value;
                                          })
                                ); 
                            }
                     });      
        break;
      case 'users':  client.query('SELECT id,name FROM users', function (err, results, fields) {
                            if (err) {console.log(err);}
                            else{
                                stepFoo(JSON.stringify(results, function (key, value) {
                                    if (typeof value === 'number' && !isFinite(value)) {
                                                       return String(value);
                                        }
                                    return value;
                                          })
                                ); 
                            }                                    
=======
      case 'posts':
                     client.query('SELECT id,time,name,alias FROM '+type, function (err, results, fields) {
                                    if (err) {console.log(err);}
                                    else{
                                        stepFoo(JSON.stringify(results, function (key, value) {
                                            if (typeof value === 'number' && !isFinite(value)) {
                                                return String(value);
                                            }
                                            return value;
                                                  })
                                        ); 
                                    }
                     });      
        break;
      case 'users':
                     client.query('SELECT id,name FROM users', function (err, results, fields) {
                                    if (err) {console.log(err);}
                                    else{
                                        stepFoo(JSON.stringify(results, function (key, value) {
                                            if (typeof value === 'number' && !isFinite(value)) {
                                                               return String(value);
                                                }
                                            return value;
                                                  })
                                        ); 
                                    }                                    
>>>>>>> 65bd8ae9e9554d763d7b21a1b8d30c4a50d8ae84
                     });      
       break;                           
  }
}

exports.setLogin = function (request, stepFoo)
{   
    var postData = "";
    var postDadaObj = {};
    request.setEncoding("utf8");
    request.addListener("data", function(postDataChunk) {
                  postData += postDataChunk;
    });
<<<<<<< HEAD
    request.addListener("end", function() {
        postData && postData.split('&').forEach(function( onePostData ) {
        var postParts = onePostData.split('=');
        postDadaObj[ postParts[ 0 ].trim() ] = ( postParts[ 1 ] || '' ).trim();
        });
        client.query("SELECT * FROM users WHERE name='"+sqlEscape(postDadaObj.login)+"'",
            function(err, results, fields){
                if (err) {
                    console.log(err);
                }
                else{    
                    if(results[0]!==undefined){
                        if(results[0].id!==undefined&&results[0].password==crypto.createHash('md5').update(postDadaObj.password).digest("hex")){
                            var hash = crypto.createHash('md5').update("inva"+Math.round(new Date().getTime())+results[0].name).digest("hex");
                            client.query("UPDATE users SET session_hash='"+hash+"' WHERE name='"+sqlEscape(postDadaObj.login)+"'", function(err, results, fields){
                                if (err) {console.log(err);}
                                else{
                                    stepFoo(hash, 0);  
                                }
                            });
                        }
                        else{
                            stepFoo(0, 1);  
                        }
                    }
                    else{
                        stepFoo(0, 1);  
                    }
                }    
            }
        );    
=======

    request.addListener("end", function() {
                  postData && postData.split('&').forEach(function( onePostData ) {
                  var postParts = onePostData.split('=');
                  postDadaObj[ postParts[ 0 ].trim() ] = ( postParts[ 1 ] || '' ).trim();
                  });
                client.query("SELECT * FROM users WHERE name='"+postDadaObj.login.realEscape()+"'",
                             function(err, results, fields){
                                        if (err) {
                                            console.log(err);
                                        }
                                        else{    
                                            if(results[0]!==undefined){
                                                if(results[0].id!==undefined&&results[0].password==crypto.createHash('md5').update(postDadaObj.password).digest("hex")){
                                                    var hash = crypto.createHash('md5').update("inva"+Math.round(new Date().getTime())+results[0].name).digest("hex");
                                                    client.query("UPDATE users SET session_hash='"+hash+"'", function(err, results, fields){
                                                        if (err) {console.log(err);}
                                                        else{
                                                            stepFoo(hash, 0);  
                                                        }
                                                    });
                                                }
                                                else{
                                                  stepFoo(0, 1);  
                                                }
                                            }
                                            else{
                                                stepFoo(0, 1);  
                                            }
                                        }    
            });    
    
>>>>>>> 65bd8ae9e9554d763d7b21a1b8d30c4a50d8ae84
    });
}

loggedIn = function (request, stepFoo)
{
    var cookies = {};
    request.headers.cookie && request.headers.cookie.split(';').forEach(function( cookie ) {
    var parts = cookie.split('=');
    cookies[ parts[ 0 ].trim() ] = ( parts[ 1 ] || '' ).trim();
    }); 
<<<<<<< HEAD
    client.query('SELECT session_hash, name FROM users WHERE session_hash=\''+sqlEscape(cookies.INSSID)+'\'',
    function (err, results, fields) {
        if(!err){
            if(results[0]!==undefined&&results!==undefined)
            {
                stepFoo(true, results[0].name);           
            }
            else{
               stepFoo(false, null);
            }
        }
        else{
            console.log(err);
        }
=======
    client.query('SELECT session_hash FROM users WHERE session_hash=\''+cookies.INSSID+'\'',
    function (err, results, fields) {
      if(!err){
           
           if(results[0]!==undefined&&results!==undefined)
           {
                stepFoo(true);           
           }
           else{
               stepFoo(false);
           }
      }
      else{
          console.log(err);
      }
>>>>>>> 65bd8ae9e9554d763d7b21a1b8d30c4a50d8ae84
    });   
}

exports.loggedIn = loggedIn;

exports.getMainMenu = function (fname, stepFoo)
{
<<<<<<< HEAD
    client.query('SELECT name, alias FROM pages', function (err, results, fields) {
        if (err) {
            console.log(err);
        }
        else{
            var mmOut ='<ul><li><a';
            if(fname==="") {mmOut +=' class="active"';}
            mmOut +=' href="'+options.vars.siteUrl+'" alias="" page-type="index" page-title="'+options.vars.appName.replaceAll('["]', "\\'")+'">Home</a></li>';
            results.forEach(function(result){
                mmOut += '<li><a';
                if(fname==result.alias){mmOut +=' class="active"';}
                mmOut +=' href="'+options.vars.siteUrl+result.alias+'" alias="'+result.alias+'" page-type="pages" page-title="'+result.name.replaceAll('["]', "\\'")+'">'+result.name+'</a></li>';
            });
            mmOut += '</ul>';
            stepFoo(mmOut);  
        }
    });
=======
  client.query('SELECT name, alias FROM pages', function (err, results, fields) {
                            if (err) {
                              console.log(err);
                            }
                            else{
                                var mmOut ='<ul><li><a';
                                         if(fname==="") {mmOut +=' class="active"';}
                                mmOut +=' href="'+options.vars.siteUrl+'">Home</a></li>';
                                results.forEach(function(result){
                                    mmOut += '<li><a';
                                                if(fname==result.alias){mmOut +=' class="active"';}
                                    mmOut +=' href="'+options.vars.siteUrl+result.alias+'">'+result.name+'</a></li>';
                                });
                                mmOut += '</ul>';
                              stepFoo(mmOut);  
                            }
   });
>>>>>>> 65bd8ae9e9554d763d7b21a1b8d30c4a50d8ae84
}