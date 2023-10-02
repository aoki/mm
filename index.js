#! /usr/bin/env node

const env = process.env.NODE_ENV;
const log = (msg) => {
  env === "development" && console.log(msg);
};

const { mouse, up, down } = require("@nut-tree/nut-js");
const move = async () => {
  await mouse.move(down(1));
  await mouse.move(up(1));
  log("move!");
};

const interval = process.env.MM_MOVE_INTERVAL || 3;
log(`move interval: ${interval} minutes`);
setInterval(move, 1000 * 60 * interval);
