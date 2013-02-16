//InvaNode core app

var options = require("./options");
var db = require("./db");
<<<<<<< HEAD
var api = require("./api");
var plugins = require("./plugins");
=======

>>>>>>> 65bd8ae9e9554d763d7b21a1b8d30c4a50d8ae84
var http = require("http");
var crypto = require('crypto');
var path = require('path');
var fs = require("fs");
var url = require("url");
var querystring = require("querystring");

function respDone(response)
{
    response.writeHead(200, {"Content-Type": "text/plain"});
    response.end('done');
}
<<<<<<< HEAD

=======
    
>>>>>>> 65bd8ae9e9554d763d7b21a1b8d30c4a50d8ae84
function respError(response)
{
    response.writeHead(200, {"Content-Type": "text/plain"});
    response.end('error');
}
    
function respGoIndex(response)
{
    response.writeHead(200, {"Content-Type": "text/html"});
    response.end('<script>window.location.href = "/";</script>');
}
    
function respShow404(response)
{
    response.writeHead(404, {"Content-Type": "text/html"});
    response.end(template.page404);
}

<<<<<<< HEAD
function respTrue(response)
{
    response.writeHead(200, {"Content-Type": "text/plain"});
    response.end('true');
}

function respFalse(response)
{
    response.writeHead(200, {"Content-Type": "text/plain"});
    response.end('false');
}

=======
>>>>>>> 65bd8ae9e9554d763d7b21a1b8d30c4a50d8ae84
function Template()
{
    this.header = fs.readFileSync(__dirname+"/template/theme/header.html", 'utf-8'); 
    this.index = fs.readFileSync(__dirname+"/template/theme/index.html", 'utf-8');
    this.page = fs.readFileSync(__dirname+"/template/theme/page.html", 'utf-8');
    this.post = fs.readFileSync(__dirname+"/template/theme/post.html", 'utf-8');
    this.footer = fs.readFileSync(__dirname+"/template/theme/footer.html", 'utf-8');
    this.small_post = fs.readFileSync(__dirname+"/template/theme/small_post.html", 'utf-8');
    this.page404 = fs.readFileSync(__dirname+"/template/theme/404.html", 'utf-8');
    this.loginpage = fs.readFileSync(__dirname+"/template/theme/loginpage.html", 'utf-8');
<<<<<<< HEAD
    this.style = fs.readFileSync(__dirname+"/template/theme/style.css", 'utf-8');
    this.jquery = fs.readFileSync(__dirname+"/template/assets/js/jquery.js", 'utf-8');
    this.injs = fs.readFileSync(__dirname+"/template/assets/js/in.js", 'utf-8');
    this.reloadTemplate = function(request, response)
    {
        var context = this;
        db.loggedIn(request, function(check, userName){              
            if(check){
                  try{
                        context.header = fs.readFileSync(__dirname+"/template/theme/header.html", 'utf-8'); 
                        context.index = fs.readFileSync(__dirname+"/template/theme/index.html", 'utf-8');
                        context.page = fs.readFileSync(__dirname+"/template/theme/page.html", 'utf-8');
                        context.post = fs.readFileSync(__dirname+"/template/theme/post.html", 'utf-8');
                        context.footer = fs.readFileSync(__dirname+"/template/theme/footer.html", 'utf-8');
                        context.small_post = fs.readFileSync(__dirname+"/template/theme/small_post.html", 'utf-8');
                        context.loginpage = fs.readFileSync(__dirname+"/template/theme/loginpage.html", 'utf-8');
                        context.style = fs.readFileSync(__dirname+"/template/theme/style.css", 'utf-8');
                        context.jquery = fs.readFileSync(__dirname+"/template/assets/js/jquery.js", 'utf-8');
                        context.injs = fs.readFileSync(__dirname+"/template/assets/js/in.js", 'utf-8');
                        respDone(response);
                  }catch (exception_var){
                        console.log('reloading template error: '+exception_var);
                  }
            }
            else{
                  respGoIndex(response);
                  console.log("login error"); 
            }
=======
    this.user = Object({
        logged : fs.readFileSync(__dirname+"/template/theme/logged.html", 'utf-8'),
        nouser : fs.readFileSync(__dirname+"/template/theme/sign.html", 'utf-8')
    });
    
    this.style = fs.readFileSync(__dirname+"/template/theme/style.css", 'utf-8');
    this.jquery = fs.readFileSync(__dirname+"/template/assets/js/jquery.js", 'utf-8');
    this.reloadTemplate = function(request, response)
    {
        var context = this;
        db.loggedIn(request, function(check){              
                            if(check){
                                  try{
                                        context.header = fs.readFileSync(__dirname+"/template/theme/header.html", 'utf-8'); 
                                        context.index = fs.readFileSync(__dirname+"/template/theme/index.html", 'utf-8');
                                        context.page = fs.readFileSync(__dirname+"/template/theme/page.html", 'utf-8');
                                        context.post = fs.readFileSync(__dirname+"/template/theme/post.html", 'utf-8');
                                        context.footer = fs.readFileSync(__dirname+"/template/theme/footer.html", 'utf-8');
                                        context.small_post = fs.readFileSync(__dirname+"/template/theme/small_post.html", 'utf-8');
                                        context.loginpage = fs.readFileSync(__dirname+"/template/theme/loginpage.html", 'utf-8');
                                        context.style = fs.readFileSync(__dirname+"/template/theme/style.css", 'utf-8');
                                        context.jquery = fs.readFileSync(__dirname+"/template/assets/js/jquery.js", 'utf-8');
                                        respDone(response);
                                  }catch (exception_var){
                                        console.log('reloading template error: '+exception_var);
                                  }
                            }
                            else{
                                  respGoIndex(response);
                                  console.log("login error"); 
                            }
>>>>>>> 65bd8ae9e9554d763d7b21a1b8d30c4a50d8ae84
        });                        
    };
}

var template = new Template();
console.log('InvaNode started');



String.prototype.replaceAll=function(find, replace_to){
     return this.replace(new RegExp(find, "g"), replace_to);
};

String.prototype.md5=function(){
     return crypto.createHash('md5').update(this).digest("hex");
};

function popTemplate(request, response, fname, dname)
<<<<<<< HEAD
{   
    var forbiddenAlias = ["api", "login", "logout", "admin"]
    if(forbiddenAlias.indexOf(fname) != -1){
        respShow404(response);
        return;
    }
=======
{
>>>>>>> 65bd8ae9e9554d763d7b21a1b8d30c4a50d8ae84
    var outTemplate = "no data";
    var cookies = {};
      request.headers.cookie && request.headers.cookie.split(';').forEach(function( cookie ) {
        var parts = cookie.split('=');
        cookies[ parts[ 0 ].trim() ] = ( parts[ 1 ] || '' ).trim();
      });
<<<<<<< HEAD
    db.getMainMenu(fname, function(res) {
        getPageContent(fname, dname, function(cont){
            var title;
            if(cont===undefined)
                {
                    respShow404(response); 
                }
            else{
                if(cont.code)
                {
                    respError(response)
                    return;
                }
                if(fname==="" && dname=="/"){
                outTemplate = template.header+template.index+template.footer;
                title = options.vars.title;
                cont.type = "index";
                } else {
                if(cont.type=="pages"){
                    outTemplate = template.header+template.page+template.footer; 
                }
                else if(cont.type=="posts") {
                    outTemplate = template.header+template.post+template.footer;
                }
                title = cont.name+' | '+options.vars.title;
                } 
                plugins.fire(outTemplate.replaceAll("{{JS_CUR_PAGE_URL}}", fname)
                    .replaceAll("{{JS_SITE_URL}}",options.vars.siteUrl)
                    .replaceAll("{{JS_SITE_NAME}}",options.vars.appName)
                    .replaceAll("{{POST_NAME}}", cont.name)
                    .replaceAll("{{POST_DATE}}", new Date(cont.time*1000).toLocaleDateString())
                    .replaceAll("{{PAGE_CONTENT}}", cont.smaldata+cont.data)
                    .replaceAll("{{MAIN_MENU}}", res)
                    .replaceAll("{{TITLE}}", title)
                    .replaceAll("{{APPNAME}}", options.vars.appName)
                    .replaceAll("{{SITE_URL}}", options.vars.siteUrl)
                    .replaceAll('{{PAGE_DESCRIPTION}}', cont.description), cont.type, function(data){
                        response.writeHead(200, {"Content-Type": "text/html"});
                        response.end(data);
                });
            }
        });
    });                 
}

function popAdminTemplate(userName, request, response)
{       
        try{
        var logged = fs.readFileSync(__dirname+"/template/admin/logged.html", 'utf-8');
        var admin =  fs.readFileSync(__dirname+"/template/admin/a_template.html", 'utf-8');
        db.coutStatistics(function(results){
            response.writeHead(200, {"Content-Type": "text/html"});
            response.write(admin.replaceAll("{{APPNAME}}", options.vars.appName)
                               .replaceAll("{{SITE_URL}}", options.vars.siteUrl)
                               .replaceAll("{{USER_MENU}}", logged.replaceAll("{{USER_NAME}}", userName))
                               .replaceAll("{{NUMBER_OF_PAGES}}", results.pages_num)
                               .replaceAll("{{NUMBER_OF_POSTS}}", results.posts_num)
                               .replaceAll("{{NUMBER_OF_USERS}}", results.users_num));
            response.end();
        });
        }    
        catch(e){
            respShow404(response);
            console.log("file loading error: " + e);
        }    
=======

    var userMenuTemplate = '';
    if(cookies.INSSID!== undefined)
    { 
        userMenuTemplate = template.user.logged;
    }
    else
    {
        userMenuTemplate = template.user.nouser;
    }    
    db.getMainMenu(fname, function(res) {
        getPageContent(fname, dname, function(cont){
                                var title;
                                if(cont===undefined)
                                    {
                                        respShow404(response); 
                                    }
                                else{    
                                if(fname==="" && dname=="/"){
                                    outTemplate = template.header+template.index+template.footer;
                                    title = options.vars.title;
                                } else {
                                    if(cont.type=="pages"){
                                        outTemplate = template.header+template.page+template.footer; 
                                    }
                                    else if(cont.type=="posts") {
                                        outTemplate = template.header+template.post+template.footer;
                                    }
                                    title = cont.name+' | '+options.vars.title;
                               } 
                               response.writeHead(200, {"Content-Type": "text/html"});
                               response.write(outTemplate.replaceAll("{{JS_CUR_PAGE_URL}}", fname)
                                        .replaceAll("{{POST_NAME}}", cont.name)
                                        .replaceAll("{{POST_DATE}}", new Date(cont.time*1000).toLocaleDateString())
                                        .replaceAll("{{PAGE_CONTENT}}", cont.smaldata+cont.data)
                                        .replaceAll("{{MAIN_MENU}}", res)
                                        .replaceAll("{{USER_MENU}}", userMenuTemplate)
                                        .replaceAll("{{TITLE}}", title)
                                        .replaceAll("{{APPNAME}}", options.vars.appName)
                                        .replaceAll("{{SITE_URL}}", options.vars.siteUrl)
                                        .replaceAll('{{PAGE_DESCRIPTION}}', cont.description)
                                        );
                               response.end();    
                               }
                  });
           });                 
}

function popAdminTemplate(request, response)
{       
        fs.readFile(__dirname+"/template/admin/a_template.html", 'utf-8', function(error, data){
            if(!error) {
                        db.coutStatistics(function(results){
                                   
                                                response.writeHead(200, {"Content-Type": "text/html"});
                                                response.write(data.replaceAll("{{APPNAME}}", options.vars.appName)
                                                                   .replaceAll("{{SITE_URL}}", options.vars.siteUrl)
                                                                   .replaceAll("{{USER_MENU}}", template.user.logged)
                                                                   .replaceAll("{{NUMBER_OF_PAGES}}", results.pages_num)
                                                                   .replaceAll("{{NUMBER_OF_POSTS}}", results.posts_num)
                                                                   .replaceAll("{{NUMBER_OF_USERS}}", results.users_num)
                                                              );
                                                response.end();
                                    
                        });
            }
            else {
                        console.log(error);
            }
        });
       
>>>>>>> 65bd8ae9e9554d763d7b21a1b8d30c4a50d8ae84
}

function getLocalImages(stepFoo)
{ 
   fs.readdir(__dirname+"/images",function(error, files){
         if(error){
         console.log(error);
         stepFoo("error")
     }
     else{    
         stepFoo(JSON.stringify(files));
     }
   });
}

function getPageContent(fname, dname, stepFoo)
{
     if(fname==="" && dname=="/"){
        var results = {
           id:'',
           time:'',
           name:'',
           data:'',
           smaldata:'',
           alias:'',
           type:'index',
           description:options.vars.indexDescription
        }; 
<<<<<<< HEAD
        db.getIndexContent(function(contents){
           if(contents.code === undefined){
               var i = contents.length;
               var d = new Date();
               while (i--)
               {  
                    results.data += template.small_post.replaceAll("{{SMALL_POST_NAME}}", contents[i].name)
                                            .replaceAll("{{SMALL_POST_DATE}}", new Date(contents[i].time*1000).toLocaleDateString()) //new Date(contents[i].time*1000).getDate()+' '+new Date(contents[i].time*1000).getFullYear())
                                            .replaceAll("{{SMALL_POST_CONTENT}}", contents[i].smaldata)
                                            .replaceAll("{{SMALL_POST_LINK}}", contents[i].alias)
                                            .replaceAll("{{LINK_ALIAS}}", contents[i].alias)
                                            .replaceAll("{{LINK_TITLE}}", contents[i].name.replaceAll('["]', "\\'"));
               }
               stepFoo(results);
               }
           else{
               stepFoo("error");
           }
        });  
     }
     else{                     
        db.getRegularEntityByAlias(fname, dname, stepFoo);
     }
}

function editOldData(postData, request, response)
{   
   var postDadaObj = JSON.parse(postData);
   switch(postDadaObj.todo)
            {   
                case "delete":db.deleteDataProc(request, postDadaObj, function(err){
=======
        db.getIndex(function(contents){
           var i = contents.length;
           var d = new Date();
           while (i--)
           {  
             results.data += template.small_post.replaceAll("{{SMALL_POST_NAME}}", contents[i].name)
                                        .replaceAll("{{SMALL_POST_DATE}}", new Date(contents[i].time*1000).toLocaleDateString()) //new Date(contents[i].time*1000).getDate()+' '+new Date(contents[i].time*1000).getFullYear())
                                        .replaceAll("{{SMALL_POST_CONTENT}}", contents[i].smaldata)
                                        .replaceAll("{{SMALL_POST_LINK}}", contents[i].alias);
           }
           stepFoo(results);
        });  
     }
     else{                     
        db.getOtherPage(fname, dname, stepFoo);
     }
}

function structuralLoad(request, response)
{   
    var postData = '';
    var postDadaObj = {};
    
    request.setEncoding("utf8");
    request.addListener("data", function(postDataChunk) {
                    postData += postDataChunk;
    });

    request.addListener("end", function() {
                  postData && postData.split('&').forEach(function( onePostData ) {
                  var postParts = onePostData.split('=');
                  postDadaObj[ postParts[ 0 ].trim() ] = ( postParts[ 1 ] || '' ).trim();
                  });
                   
            switch(postDadaObj.todo)
            {   
                case "load_all_pages": db.getAll('pages', function(outData){
                                            response.writeHead(200, {"Content-Type": "text/plain"});
                                            response.end(outData);
                                       });
                                
                                break;
                case "load_all_posts": db.getAll('posts', function(outData){
                                            response.writeHead(200, {"Content-Type": "text/plain"});
                                            response.end(outData);
                                       });
                                
                                break;
                case "load_all_users": db.getAll('users', function(outData){
                                            response.writeHead(200, {"Content-Type": "text/plain"});
                                            response.end(outData);
                                       });
                                
                                break;
               case "load_all_templates": fs.readdir(__dirname+"/template/theme",function(error, files){
                                            if(error){
                                                console.log(error);
                                                respError(response);
                                            }
                                            else{
                                                response.writeHead(200, {"Content-Type": "text/plain"});
                                                response.end(JSON.stringify(files));
                                            }
                                          });
                                
                                break;                  
            }
    });   
}

function editOldData(request, response)
{   
 
    
    var postData = '';
    var postDadaObj = {};
    
    request.setEncoding("utf8");
    request.addListener("data", function(postDataChunk) {
                    postData += postDataChunk;
    });

    request.addListener("end", function() {
                  postData && postData.split('&').forEach(function( onePostData ) {
                  var postParts = onePostData.split('=');
                  postDadaObj[ postParts[ 0 ].trim() ] = ( postParts[ 1 ] || '' ).trim();
                  });
           switch(postDadaObj.todo)
            {   
                case "delete":db.deleteDataProc(request, postData, function(err){
>>>>>>> 65bd8ae9e9554d763d7b21a1b8d30c4a50d8ae84
                                            if(!err){
                                                respDone(response);
                                            }
                                            else{
                                                respGoIndex(response); 
                                                console.log("login error");
                                            }
                                         });
                        
                        break;
<<<<<<< HEAD
                case "edit":db.editDataProc(request, postDadaObj, function(err){
=======
                case "edit":db.editDataProc(request, postData, function(err){
>>>>>>> 65bd8ae9e9554d763d7b21a1b8d30c4a50d8ae84
                                            if(!err){
                                                respDone(response);
                                            }
                                            else{
                                                respGoIndex(response);
                                                console.log("login error");
                                            }
                                        });
                        break;
<<<<<<< HEAD
                case "edit_user_pass":db.editUserProc(request, postDadaObj, function(err){
=======
                case "edit_user_pass":db.editUserProc(request, postData, function(err){
>>>>>>> 65bd8ae9e9554d763d7b21a1b8d30c4a50d8ae84
                                            if(!err){
                                                respDone(response);
                                            }
                                            else{
                                                respGoIndex(response);
                                                console.log("login error");
                                            }
                                        });
                        break;        
<<<<<<< HEAD
                case "opendata":db.openDataForEditProc(request, postDadaObj, function(err, data){
=======
                case "opendata":db.openDataForEditProc(request, postData, function(err, data){
>>>>>>> 65bd8ae9e9554d763d7b21a1b8d30c4a50d8ae84
                                            if(!err){
                                                response.writeHead(200, {"Content-Type": "text/plain"});
                                                response.end(data);
                                            }
                                            else{
                                                respGoIndex(response); 
                                                console.log("login error");
                                            }
                                        });
                        break;    
                default:
                    response.writeHead(200, {"Content-Type": "text/plain"});
                    response.write('error');
                    response.end();
                    return;
                    break;
<<<<<<< HEAD
            }  
}

function saveNewData(postData, request, response)
{   
    var postDadaObj = JSON.parse(postData);
    var forbiddenAlias = ["api", "login", "logout", "admin"]
    if(forbiddenAlias.indexOf(postDadaObj.alias) != -1){
        response.writeHead(200, {"Content-Type": "text/plain"});
        response.end('You can\'t use word <b>"'+ postDadaObj.alias + '"</b> as alias.');
        return;
    }
    switch(postDadaObj.type)
            {   
                case "posts":db.saveDataProc(request, "posts", postDadaObj, function(err){
=======
            }


    });
     
}

function saveNewData(request, response)
{   
    var postData = '';
    var postDadaObj = {};
    
    request.setEncoding("utf8");
    request.addListener("data", function(postDataChunk) {
                    postData += postDataChunk;
    });

    request.addListener("end", function() {
                  postData && postData.split('&').forEach(function( onePostData ) {
                  var postParts = onePostData.split('=');
                  postDadaObj[ postParts[ 0 ].trim() ] = ( postParts[ 1 ] || '' ).trim();
                  });
           switch(postDadaObj.type)
            {   
                case "posts":db.saveDataProc(request, "posts", postData, function(err){
>>>>>>> 65bd8ae9e9554d763d7b21a1b8d30c4a50d8ae84
                                            if(!err){
                                                respDone(response);
                                            }    
                                            else{
                                                respGoIndex(response);
                                                console.log("login error");
                                            }
<<<<<<< HEAD
                                        });                 
                        break;
                case "pages":db.saveDataProc(request, "pages", postDadaObj, function(err){
=======
                                        });
                                            
                                                 
                        break;
                case "pages":db.saveDataProc(request, "pages", postData, function(err){
>>>>>>> 65bd8ae9e9554d763d7b21a1b8d30c4a50d8ae84
                                            if(!err){
                                                respDone(response);
                                            }    
                                            else{
                                                respGoIndex(response); 
                                                console.log("login error");
                                            }
                                        });   
                        break;
<<<<<<< HEAD
                case "users":db.saveDataProc(request, "users", postDadaObj, function(err){
=======
                case "users":db.saveDataProc(request, "users", postData, function(err){
>>>>>>> 65bd8ae9e9554d763d7b21a1b8d30c4a50d8ae84
                                            if(!err){
                                                respDone(response);
                                            }    
                                            else{
                                                respGoIndex(response); 
                                                console.log("login error");
                                            }
                                        });   
                        break;         
<<<<<<< HEAD
                default:respError(response);
                    break;
            } 
}

function uploadImageFile(postData, request, response)
{
    var postDadaObj = JSON.parse(postData);
    var data = postDadaObj.filedata;
    var name = postDadaObj.name;
    var size = postDadaObj.size;                       
    db.loggedIn(request, function(check, userName){                            
        if(check){
             try{           
             var dta64 = data.split(',');
             var buf = new Buffer(dta64[1], 'base64');
             fs.open(__dirname+"/images/"+name, 'w', 0755, function(err, fd){
                     fs.write(fd, buf, 0, buf.length, 0, function(err, written, buffer){
                        if(err) {
                            respError(response);
                            console.log(err); 
                        }
                        else{
                            respDone(response);
                        }    
                     });        
             });
             }
             catch(errorCatched){
                 console.log(errorCatched);
             }
        }
        else{
            respError(response); 
            console.log("login error");
        }
     });
}

function processTemplateData(postData, request, response)
{
   var postDadaObj = JSON.parse(postData);
   var fname = postDadaObj.fname;
   var todo = postDadaObj.todo;
   var fdata = postDadaObj.fdata;
   db.loggedIn(request, function(check, userName){
        if(check){
            switch(todo)
            {
                case 'get':
                        fs.readFile(__dirname+"/template/theme/"+fname, function(err, data){
                            if(err)
                            {
                                respError(response);
                                console.log(err);
                            }
                            else{
                                response.writeHead(200, {"Content-Type": "text/plain"});
                                response.end(data);
                            }
                        });       
                break;
                case 'save':
                           fs.writeFile(__dirname+"/template/theme/"+fname, fdata, function(err){
                                        if(err) {
                                            respError(response);
                                            console.log(err);
                                        }
                                        else{
                                            template.reloadTemplate(request, response);
                                        }    
                           });        
                break;
            }
        }    
        else{
           respError(response); 
           console.log("login error");
        }  
    });
}

function apiCall(request, response)
{   
    var postData = "";
    var postDadaObj = {};
    request.setEncoding("utf8");
    request.addListener("data", function(postDataChunk) {
                  postData += postDataChunk;
    });
    request.addListener("end", function() {
        postData && postData.split('&').forEach(function( onePostData ) {
            var postParts = onePostData.split('=');
            postDadaObj[ postParts[ 0 ].trim() ] = ( postParts[ 1 ] || '' ).trim();
        });
        var call = querystring.parse(postData).call;
        var data = querystring.parse(postData).data;
        switch(call){   
            case "is_logged_in":db.loggedIn(request, function(check, userName){
                                    if(check){
                                        response.writeHead(200, {"Content-Type": "text/plain"});
                                        response.end('{logged:"true","name":'+userName+'}');
                                    }
                                    else{
                                        respFalse(response) 
                                    }
                                });
                            break;
            case "get_local_images":getLocalImages(function(localImages){
                                        response.writeHead(200, {"Content-Type": "text/html"});
                                        response.end(localImages); 
                                     });

                            break;
            case "reload_template_immediate":template.reloadTemplate(request, response);
                            break;
            case "load_all_pages":db.getAll('pages', function(outData){
                                        response.writeHead(200, {"Content-Type": "text/plain"});
                                        response.end(outData);
                                   });

                            break;
            case "load_all_posts":db.getAll('posts', function(outData){
                                        response.writeHead(200, {"Content-Type": "text/plain"});
                                        response.end(outData);
                                   });

                            break;
            case "load_all_users":db.getAll('users', function(outData){
                                        response.writeHead(200, {"Content-Type": "text/plain"});
                                        response.end(outData);
                                   });

                            break;
            case "load_all_templates":fs.readdir(__dirname+"/template/theme",function(error, files){
                                        if(error){
                                            console.log(error);
                                            respError(response);
                                        }
                                        else{
                                            response.writeHead(200, {"Content-Type": "text/plain"});
                                            response.end(JSON.stringify(files));
                                        }
                                      });

                            break;     
            case "process_template_data":processTemplateData(data, request, response);                     
                            break;
            case "upload_image_file":uploadImageFile(data, request, response);
                            break;
            case "post_page_savings":saveNewData(data, request, response);                     
                            break;
            case "post_page_editing":editOldData(data, request, response);                     
                            break;
            case "get_entity_by_alias":api.getEntityByAlias(data, db, plugins, response);
                            break;
            case "get_entity_by_id":api.getEntityById(data, db, plugins, response);
                            break;
            case "get_latest_posts":api.getLatestPosts(data, db, plugins, response);
                            break;
            case "get_all_pages":api.getAllPages(db, plugins, response);
                            break;
            case "get_page_type":api.getPageType(data, db, response);
                            break;
            case "load_plugins_admin":db.loggedIn(request, function(check, userName){
                                            if(check){
                                                 plugins.fireAdmin(response);
                                            }
                                            else{
                                                respError(response); 
                                            }
                                });
                            break;
            case "save_plugin":db.loggedIn(request, function(check, userName){
                                            if(check){
                                                 plugins.savePlugin(fs, data, response);
                                            }
                                            else{
                                                respError(response); 
                                            }
                                });
                            break;
            case "get_template":api.getTemplate(data, template, plugins, response);
                            break;
            case "reload_plugins":plugins.reloadPlugins(response);
                            break;
            default:respError(response);
                            break;
        } 
    });
}

function  makeLogin(request, response)
{
    db.setLogin(request, function(sessionHash, error){
        if(error==1) {
                respGoIndex(response); 
                console.log("login error");
        }
        else{
                response.writeHead(301, { 
                    "Set-Cookie": "INSSID="+sessionHash+"; path=/",
                    "Location": options.vars.siteUrl+"admin"
                     });
                response.end();
        }
    });
}

function  makeLogout(response)
{
    response.writeHead(200, {"Set-Cookie": "INSSID=EXP; expires=Fri, 31 Dec 2010 23:59:59 GMT; path=/",
                             "Content-Type": "text/html"});
    response.end('<script>window.location.href = "/";</script>');
}

function serveStatic(dname, fname, ext, response)
{
    if(fname=="index.js" || fname=="options.js" || fname=="db.js" || fname=="api.js" || fname=="plugins.js") {
        respShow404(response);
    }
    else if(fname=="style.css"){
        response.writeHead(200, {"Content-Type": "text/css"});
        response.end(template.style); 
    }
    else if(fname == "jquery.js"){
        response.writeHead(200, {"Content-Type": "text/javascript"});
        response.end(template.jquery);
    }
    else if(fname == "in.js"){
        response.writeHead(200, {"Content-Type": "text/javascript"});
        response.end(template.injs);
    }
    fs.readFile(__dirname+dname+"/"+ decodeURI(fname), function(error, data){
        if(!error){ 
            switch(ext){   
                case ".ico":response.writeHead(200, {"Content-Type": "image/x-icon"});
                                break;
                case ".png":response.writeHead(200, {"Content-Type": "image/png"});
                                break;
                case ".jpg":response.writeHead(200, {"Content-Type": "image/jpeg"});
                                break;
                case ".jpeg":response.writeHead(200, {"Content-Type": "image/jpeg"});
                                break;
                case ".gif":response.writeHead(200, {"Content-Type": "image/gif"});
                                break;
                case ".css":response.writeHead(200, {"Content-Type": "text/css"});  
                                break;   
                case ".js":response.writeHead(200, {"Content-Type": "text/javascript"});
                                break;
                case ".txt":response.writeHead(200, {"Content-Type": "text/plain"});
                                break;                
            }
            response.end(data);  
        }
        else{
            respShow404(response);
            console.log(error);
        }
     });
=======
                default:    respError(response);
                    break;
            }
    });  
}

function uploadImageFile(request, response)
{var postData = "";
                        var postDadaObj = {};
                        request.setEncoding("utf8");
                        request.addListener("data", function(postDataChunk) {
                                        postData += postDataChunk;
                        });

                        request.addListener("end", function() {
                                      postData && postData.split('&').forEach(function( onePostData ) {
                                      var postParts = onePostData.split('=');
                                      postDadaObj[ postParts[ 0 ].trim() ] = ( postParts[ 1 ] || '' ).trim();
                                      });

                       var data = querystring.parse(postData).data;
                       var name = querystring.parse(postData).name;
                       var size = querystring.parse(postData).size;
                       
  db.loggedIn(request, function(check){              
                        
                                        if(check){




                                 dta64 = data.split(',');
                                 buf = new Buffer(dta64[1], 'base64');
                                 fs.open(__dirname+"/images/"+name, 'w', 0755, function(err, fd){
                                         fs.write(fd, buf, 0, buf.length, 0, function(err, written, buffer){
                                            if(err) {
                                                respError(response);
                                                console.log(err); 
                                            }
                                            else{
                                                respDone(response);
                                            }    
                                         });        
                                 });



               }
               else{
                   respError(response); 
                   console.log("login error");
               }
     });
 });
}

function processTemplateData(request, response)
{
   var postData = "";
    var postDadaObj = {};
    request.setEncoding("utf8");
    request.addListener("data", function(postDataChunk) {
                    postData += postDataChunk;
    });

    request.addListener("end", function() {
                  postData && postData.split('&').forEach(function( onePostData ) {
                  var postParts = onePostData.split('=');
                  postDadaObj[ postParts[ 0 ].trim() ] = ( postParts[ 1 ] || '' ).trim();
                  });

   var fname = querystring.parse(postData).fname;
   var todo = querystring.parse(postData).todo;
   var fdata = querystring.parse(postData).fdata;
   
            db.loggedIn(request, function(check){
                            if(check){
                                        switch(todo)
                                        {
                                            case 'get':
                                                    fs.readFile(__dirname+"/template/theme/"+fname, function(err, data){
                                                        if(err)
                                                        {
                                                            respError(response);
                                                            console.log(err);
                                                        }
                                                        else{
                                                            response.writeHead(200, {"Content-Type": "text/plain"});
                                                            response.end(data);
                                                        }
                                                    });       
                                            break;
                                            case 'save':
                                                       fs.writeFile(__dirname+"/template/theme/"+fname, fdata, function(err){
                                                                    if(err) {
                                                                        respError(response);
                                                                        console.log(err);
                                                                    }
                                                                    else{
                                                                        template.reloadTemplate(request, response);
                                                                    }    
                                                                 });        
                                            break;
                                        }
                          }    
                          else{
                               respError(response); 
                               console.log("login error");
                          }  
            });
});
>>>>>>> 65bd8ae9e9554d763d7b21a1b8d30c4a50d8ae84
}

http.createServer(function(request, response) {
     var fname =  path.basename(request.url);
     var ext = path.extname(request.url); 
     var dname = path.dirname(request.url);
<<<<<<< HEAD
     if(ext!==""){                          // need to set only needed extentions
          serveStatic(dname, fname, ext, response);      
     }
     else{   
          if(fname=="api"){
             apiCall(request, response);
          } 
          else{
               switch(fname){   
                   case "admin":db.loggedIn(request, function(check, userName){              
                                    if(check){
                                        popAdminTemplate(userName, request, response);
                                    }
                                    else{
                                        response.writeHead(200, {"Content-Type": "text/html"});
                                        response.end(template.loginpage);  
                                    }
                                });
                       break;
                   case "login":makeLogin(request, response); 
                       break;
                   case "logout":makeLogout(response);               
                       break;
                   default:popTemplate(request, response, fname, dname);
                       break;
               } 
          }
     }
}).listen(options.vars.serverListenPort, options.vars.serverListenIP);
=======
     if(ext!=="")// need to set only needed extentions
     { 
                if(fname=="index.js" || fname=="options.js" || fname=="db.js") {
                    respShow404(response);
                }
                else if(fname=="style.css")
                {
                    response.writeHead(200, {"Content-Type": "text/css"});
                    response.end(template.style); 
                }
                else if(fname == "jquery.js")
                {
                    response.writeHead(200, {"Content-Type": "text/javascript"});
                    response.end(template.jquery);
                }    
       fs.readFile(__dirname+dname+"/"+ decodeURI(fname), function(error, data){
        if(!error)
            { 
                switch(ext)
                {   
                    case ".ico":response.writeHead(200, {"Content-Type": "image/x-icon"});
                                    break;
                    case ".png":response.writeHead(200, {"Content-Type": "image/png"});
                                    break;
                    case ".jpg":response.writeHead(200, {"Content-Type": "image/jpeg"});
                                    break;
                    case ".jpeg":response.writeHead(200, {"Content-Type": "image/jpeg"});
                                    break;
                    case ".gif":response.writeHead(200, {"Content-Type": "image/gif"});
                                    break;
                    case ".css":response.writeHead(200, {"Content-Type": "text/css"});  
                                    break;   
                    case ".js":response.writeHead(200, {"Content-Type": "text/javascript"});
                                    break;
                    case ".txt":response.writeHead(200, {"Content-Type": "text/plain"});
                                    break;                
                }
                 response.end(data);  
            }
            else
            {
                respShow404(response);
                console.log(error);
            }
      });
     }
     else
       {   
           switch(fname)
           {   
               case "get_local_images": getLocalImages(function(localImages){
                                                                   response.writeHead(200, {"Content-Type": "text/html"});
                                                                   response.end(localImages); 
                                                                 });      
                   break;
               case "upload_image_file": uploadImageFile(request, response);
                   break;
               case "reload_template_immidiate":template.reloadTemplate(request, response);
                   break;
               case "structural_load":structuralLoad(request, response);              
                   break;
               case "post_page_savings":saveNewData(request, response);                     
                   break;
               case "post_page_editing":editOldData(request, response);                     
                   break;
               case "process_template_data":processTemplateData(request, response);                     
                   break;
               case "admin":db.loggedIn(request, function(check){              
                                if(check){
                                    popAdminTemplate(request, response);
                                }
                                else{
                                      response.writeHead(200, {"Content-Type": "text/html"});
                                      response.end(template.loginpage);  
                                }
                                });
                   break;
               case "login":db.setLogin(request, function(sessionHash, error){
                                                    if(error==1) {
                                                            respGoIndex(response); 
                                                            console.log("login error");
                                                    }
                                                    else{
                                                            response.writeHead(301, { 
                                                                "Set-Cookie": "INSSID="+sessionHash+"; path=/",
                                                                "Location": options.vars.siteUrl+"admin"
                                                                 });
                                                            response.end();
                                                    }
                                    });
                   break;
               case "logout":response.writeHead(200, {
                                         "Set-Cookie": "INSSID=EXP; expires=Fri, 31 Dec 2010 23:59:59 GMT; path=/",
                                         "Content-Type": "text/html"
                                    });
                                    response.end('<script>window.location.href = "/";</script>');              
                   break;
               default:popTemplate(request, response, fname, dname);
                   break;
           } 
       }
}).listen(options.vars.serverListenPort);
>>>>>>> 65bd8ae9e9554d763d7b21a1b8d30c4a50d8ae84
