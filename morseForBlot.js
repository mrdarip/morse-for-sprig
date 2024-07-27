/*
@title: morse writer
@author: mrdarip
@tags: ['tool','keyboard']
@addedOn: 2024-00-00
*/


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

})

onInput("l", () => { //dash

})