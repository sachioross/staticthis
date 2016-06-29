#!/usr/bin/env node

var program = require('commander');
var cors = require('cors');
var express = require('express');
var app = express();

program
  .version('0.0.1')
  .option('-p, --port <n>', 'Port to run server')
  .option('-d, --dir [dir]', 'Directory to run static server from, default is directory from which this process is executed')
  .parse(process.argv);

var port = program.port || 9100;
var staticDir = process.cwd();

if (program.dir) {
  staticDir = program.dir.startsWith("/")
      ? program.dir
      : process.cwd() + "/" + program.dir;
}

app.use(cors());
app.use(express.static(staticDir));
app.listen(port, function() {
  console.log("Static file server has started on port "
      + port
      + " and is serving files from "
      + staticDir);
});
