import { Hash } from "../../hash";
import { Algorithms } from "../../algorithms";

export var coin = {
  name: "Dash",
  names: [
    "dash", "x11",
  ],
  NiceHash: {
    hashrate: Hash.GIGA,
    id: Algorithms.X11,
  },
  WhatToMine: {
    hashrate: 1000,
    id: 34,
  },
  enabled: false,
};
