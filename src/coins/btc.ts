import {Hash} from "../hash";
import {Algorithms} from "../algorithms";
import {run as index} from "../index";

export var coin = {
  name: "BTC",
  names: [
    "bitcoin",
  ],
  NiceHash: {
    hashrate: Hash.PETA,
    id: Algorithms.SHA256,
  },
  WhatToMine: {
    hashrate: 1000 * 1000,
    id: 1,
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