/*
@title: morse writer
@author: 
@tags: []
@addedOn: 2024-00-00
*/

msPerSignal = 1000;

const bibip = tune`
75: E4/75,
75: F4/75,
2250`;
const bop = tune`
75: C4/75,
2325`;
const bip = tune`
100: B5/100,
3100`;

var tickQueue = "";
var currentInput = "";
var inputText = "";

const dot = "x";
const dash = "-";
const del = "d";
const ret = "r";
const view = "v";

// assign bitmap art to each sprite
setLegend(
  [dot, bitmap`
................
................
................
................
................
................
......0000......
......0000......
......0000......
......0000......
................
................
................
................
................
................`],
  [dash, bitmap`
................
................
................
................
................
................
..000000000000..
..000000000000..
..000000000000..
..000000000000..
................
................
................
................
................
................`],
  [del, bitmap`
....00000000....
....0......0....
0000000000000000
..011111111110..
..0L1101101110..
..0L1101101110..
..0L1101101110..
..0L1101101110..
..0L1101101110..
..0L1101101110..
...0L10110110...
...0L10110110...
...0L10110110...
...0L10110110...
...0L11111110...
...0000000000...`],
  [ret, bitmap`
................
................
................
....0...........
...00...........
..0000000000....
...00.......0...
....0.......0...
............0...
..0.........0...
..0.........0...
...0........0...
....00000000....
................
................
................`],
  [view, bitmap`
................
................
................
................
................
......00000.....
....002222200...
...02227552220..
..0222250522220.
...02225552220..
....002222200...
......00000.....
................
................
................
................`],
)

let level = 0;
const levels = [
  map`
..........
..........
..........
..........
..........
..v.......
.x....r.-.
.......d..`,
];

setMap(levels[level]);

chars = {
  ".-": "a",
  "-...": "b",
  "-.-.": "c",
  "-..": "d",
  ".": "e",
  "..-.": "f",
  "--.": "g",
  "....": "h",
  "..": "i",
  ".---": "j",
  "-.-": "k",
  ".-..": "l",
  "--": "m",
  "-.": "n",
  "---": "o",
  ".--.": "p",
  "--.-": "q",
  ".-.": "r",
  "...": "s",
  "-": "t",
  "..-": "u",
  "...-": "v",
  ".--": "w",
  "-..-": "x",
  "-.--": "y",
  "--..": "z",
};

onInput("a", () => {
  //dot
  playTune(bip);
  currentInput = ".";
  updateUI();
});

onInput("l", () => {
  //dash
  playTune(bip);
  currentInput = "-";
  updateUI();
});

onInput("k", () => {
  tickQueue = "";
  playTune(bop);
  updateUI()
});

onInput("j", () => {
  inputText = inputText.substring(0, inputText.length - 1);
  playTune(bop);
  updateUI()

});

var tick = false;
var tickLoop = setInterval(() => {
  tick = !tick;
  if (tick) {
    playTune(bibip);

    if (currentInput.length > 0) {
      tickQueue += currentInput;
      currentInput = "";
    } else {
      if (chars[tickQueue]) {
        inputText += chars[tickQueue]
        tickQueue = "";
        currentInput = "";
      }
    }

    updateUI();
  }
}, msPerSignal / 2);

function displayCurrentInput() {
  addText(tickQueue + currentInput, {
    x: 0,
    y: 0,
    color: color`0`,
  });
}

function displayInputtedText() {
  addText(inputText + "_", {
    x: 0,
    y: 1,
    color: color`0`,
  });
}

function updateUI() {
  clearText();
  displayCurrentInput();
  displayInputtedText();
}