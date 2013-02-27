InvaNode
========

NOTE!: This repo contains InvaNode CMS with MySQL support. For MongoDB support visit <a href="https://github.com/i-vetrov/InvaNode-mongo/">InvaNode-mongo repo</a>
============================================================================================================================================================

Blog CMS based on Node.js amd MySQL.

InvaNode official site: [invanode.org](http://www.invanode.org)

## Description

InvaNode is a simple blogging CMS. It has base functionality for simple web-site with manageable content and template engine.

It is light and easy customizable.


## Instalation

You have to install [node.js](https://github.com/joyent/node) with npm first. Just make sure you have lates version of node.js.

You will need to install mysql driver (<a href="https://github.com/i-vetrov/InvaNode-mongo/">InvaNode-mongo for mongo support</a>):

      npm install mysql

Then clone InvaNode sources:
    
      git clone git://github.com/i-vetrov/InvaNode.git

Edit options.js to set up database connection and some site description.

Use invanode.sql to create empty database with user "admin" and password "admin"

## More information

Visit [invanode.org](http://www.invanode.org) website to read some news and get help.

## Who uses InvaNode

[invatechs.com](http://www.invatechs.com/)

[invanode.org](http://www.invanode.org/)
