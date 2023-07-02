const credits_text = `
Music:
"Aerosol of my Love" Kevin MacLeod (incompetech.com)
Licensed under Creative Commons: By Attribution 4.0 License
http://creativecommons.org/licenses/by/4.0/

Bug facts:
https://facts.net/bug-facts/
`.split('\n');

let state = 'main';

const audio = new JamLib.Audio(['music.mp3'], ['boom.wav']);
const store = new JamLib.Store('testing-jamlib');
const credits_screen = new JamLib.Credits(credits_text);

const button1 = new JamLib.Button('Play', [400, 600 * 0.4, 300, 75], () => {
  if (audio.is_playing) {
    audio.stop();
  } else {
    audio.play_track('music.mp3');
  }
});

const button2 = new JamLib.Button('Credits', [400, 600 * 0.6, 300, 75], () => {
  state = 'credits';
  credits_screen.start().then(() => (state = 'main'));
});

function preload() {
  audio.preload();
}

function mouseClicked() {
  switch (state) {
    case 'main':
      button1.handle_click();
      button2.handle_click();
      return;

    case 'credits':
      credits_screen.handle_click();
      return;

    default:
      return;
  }
}

function keyPressed() {
  if (state === 'main' && keyCode === 32) {
    audio.play_sound('boom.wav');
    return false; // Prevents default behaviour
  }
}

function setup() {
  createCanvas(800, 600);
}

function draw() {
  cursor();

  switch (state) {
    case 'main':
      background('#A0E77D');
      button1.show();
      button2.show();
      store.show();
      return;

    case 'credits':
      credits_screen.show();
      return;

    default:
      return;
  }
}
