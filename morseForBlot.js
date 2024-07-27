/*
@title: morse writer
@author: 
@tags: []
@addedOn: 2024-00-00
*/

msPerSignal = 2000

const bibip = tune`
75: E4/75,
75: F4/75,
2250`
const bop = tune`
75: C4/75,
2325`
const bip = tune`
100: B5/100,
3100`


let level = 0
const levels = [
  map`
..........
..........
..........
..........
..........
..........
..........
..........`
]

setMap(levels[level])

chars = {
  a: ".-",
  b: "-...",
  c: "-.-.",
  d: "-..",
  e: ".",
  f: "..-.",
  g: "--.",
  h: "....",
  i: "..",
  j: ".---",
  k: "-.-",
  l: ".-..",
  m: "--",
  n: "-.",
  o: "---",
  p: ".--.",
  q: "--.-",
  r: ".-.",
  s: "...",
  t: "-",
  u: "..-",
  v: "...-",
  w: ".--",
  x: "-..-",
  y: "-.--",
  z: "--.."
}

onInput("a", () => { //dot
  playTune(bip)
})

onInput("l", () => { //dash
  playTune(bip)
})

var tick = false
var tickLoop = setInterval(() => {
  tick = !tick
  if (tick) {
    playTune(bibip)
  } else {
    playTune(bop)
  }
}, msPerSignal / 2);