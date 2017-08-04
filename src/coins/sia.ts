import {Hash} from "../hash";
import {Algorithms} from "../algorithms";
import {run as index} from "../index";

export var coin = {
  name: "SC",
  names: [
    "sia", "siacoin", "dual",
  ],
  NiceHash: {
    hashrate: Hash.TERA,
    id: Algorithms.Sia,
  },
  WhatToMine: {
    hashrate: 1000 * 1000,
    id: 161,
  },
  enabled: true,
}

const runningAsScript = require.main === module;

function run(){
  index(coin);
}

if (runningAsScript){
  run();
}
