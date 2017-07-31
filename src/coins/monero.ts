import {Hash} from "../hash";
import {Algorithms} from "../algorithms";
import {run as index} from "../index";

export var coin = {
  name: "XMR",
  names: [
    "cryptonight", "monero",
  ],
  NiceHash: {
    hashrate: Hash.MEGA,
    id: Algorithms.CryptoNight,
  },
  WhatToMine: {
    hashrate: 1000 * 1000,
    id: 101,
  },
  enabled: false,
}

const runningAsScript = require.main === module;

function run(){
  index(coin);
}

if (runningAsScript){
  run();
}