let mouseX = 0;
let mouseY = 0;
let dotc = 0;
let tlc = 0;
let tgc = 0;

window.onload = () => {
  console.log("page loaded :)");
  page = 1;
  count = 0;
  timeText = 0;
  num = 0;
  textp = [];

  //
  setDot();
  setLine();
  setGrid();

  setText();
  time();

  setInterval(time, 1000);
  setInterval(changeText, 1000);

  // button
  let button = document.getElementById("button");
  button.onclick = () => {
    console.log("button pressed");
    if (page == 1) {
      page = 2;
      console.log("page2");
    } else if (page == 2) {
      page = 1;
      console.log("page1");
    }
    pageC();
  };

  //mouse

  document.addEventListener("mousemove", (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;
    console.log(mouseX+", "+ mouseY);
  });

  /// change dot per s
  setInterval(() => {
    const tc = document.getElementsByClassName("tc");

    const r = mouseX % 350;
    const g = mouseY % 300;
    const b = (mouseX + mouseY) % 550;

    tc[dotc % tc.length].style.backgroundColor = `rgb(${r}, ${g}, ${b})`;

    dotc++;
    if (dotc >= 60) {
      dotc = 0;
    }
  }, 1000);

  /// change line per min
  setInterval(() => {
    const tl = document.getElementsByClassName("tl");

    const r = mouseX % 350;
    const g = mouseY % 300;
    const b = (mouseX + mouseY) % 550;

    tl[tlc % tl.length].style.backgroundColor = `rgb(${r}, ${g}, ${b})`;

    tlc++;
    if (tlc >= 60) {
      tlc = 0;
    }
  }, 60000);
  /// change block per hour

  setInterval(() => {
    const tg = document.getElementsByClassName("tg");

    const r = mouseX % 350;
    const g = mouseY % 300;
    const b = (mouseX + mouseY) % 550;

    tg[tgc % tg.length].style.backgroundColor = `rgb(${r}, ${g}, ${b})`;

    tgc++;
    if (tgc >= 24) {
      tgc = 0;
    }
  }, 3600000);
};

function setDot() {
  for (let r = 1; r <= 12; r++) {
    for (let c = 1; c <= 5; c++) {
      const div = document.createElement("div");
      div.className = `p2 tc row${r} col${c}`;
      document.body.appendChild(div);
    }
  }
}

function setLine() {
  for (let i = 0; i < 30; i++) {
    const vLine = document.createElement("div");
    vLine.classList.add("tl", "vline");
    vLine.style.left = `${(i / 29) * 100}%`;
    document.body.appendChild(vLine);
  }

  for (let i = 0; i < 30; i++) {
    const hLine = document.createElement("div");
    hLine.classList.add("tl", "hline");
    hLine.style.top = `${(i / 29) * 100}%`;
    document.body.appendChild(hLine);
  }
}

function setGrid() {
  for (let row = 1; row <= 6; row++) {
    for (let col = 1; col <= 4; col++) {
      const block = document.createElement("div");
      block.className = `tg brow${row} bcol${col}`;
      document.body.appendChild(block);
    }
  }
}

function pageC() {
  let page1 = document.getElementById("page1");
  let page2 = document.getElementById("page2");

  if (page == 1) {
    page1.style.opacity = 1;
    page2.style.opacity = 0;
  } else if (page == 2) {
    page1.style.opacity = 0;
    page2.style.opacity = 1;
  }
}

function time() {
  const date = new Date();
  let timeHere = document.getElementById("timeHere");
  timeHere.textContent = date.toLocaleTimeString();
}

function changeText() {
  let text = document.getElementsByClassName("c1");
  choseText();

  text[count].textContent = textp[num];

  if (count < 26) {
    count++;
  } else {
    count = 0;
  }
}

function choseText() {
  num = Math.floor(Math.random() * 201);
  console.log(num);
}

function setText() {
  textp = [
    "Why can't school be over yet",
    "The clock is barely moving",
    "This class feels endless",
    "Nothing exciting is happening",
    "Time is dragging so slow",
    "Still stuck in this lecture",
    "Another minute wasted",
    "When will this be done",
    "The bell never rings",
    "Waiting feels unbearable",
    "Everything feels stuck",
    "Nothing is changing",
    "The day refuses to end",
    "Still trapped here",
    "Minutes feel like hours",
    "The screen keeps freezing",
    "No progress at all",
    "It's only noon",
    "Barely halfway through",
    "Just sitting in boredom",
    "Stuck in the same moment",
    "Can't escape this place",
    "It's too early still",
    "So much time left",
    "The meeting drags on",
    "This work is endless",
    "Still no break",
    "Everything feels delayed",
    "Waiting is torture",
    "Today is crawling",
    "Barely any time passed",
    "Still the same slide",
    "The teacher keeps talking",
    "Not even close to the end",
    "The clock is frozen",
    "Everything feels stalled",
    "Still the same page",
    "Lecture won't stop",
    "Home feels far away",
    "The bus is late again",
    "Workday just started",
    "Lunch feels far away",
    "Can't fast forward this",
    "Why is it still morning",
    "No end in sight",
    "Still the same assignment",
    "So much left to do",
    "Nothing is moving forward",
    "The queue is endless",
    "Traffic won’t clear up",
    "This silence is heavy",
    "Too early to leave",
    "Waiting for nothing",
    "Lecture goes in circles",
    "Teacher repeats the same thing",
    "Still the same problem",
    "Progress feels impossible",
    "Calendar moves so slowly",
    "The game won’t load",
    "Everything feels stuck in place",
    "Still trapped in boredom",
    "Movie is dragging on",
    "Song takes forever to end",
    "Can’t skip this part",
    "Meeting has no point",
    "The line isn’t moving",
    "Download takes forever",
    "Still buffering",
    "Another wasted second",
    "Alarm hasn’t gone off yet",
    "Weekend feels far away",
    "Friday will never come",
    "Still at the office",
    "Can’t leave early",
    "The day stretches too long",
    "Nothing new is happening",
    "Same tasks over and over",
    "Morning feels endless",
    "Afternoon is dragging",
    "Night won’t come",
    "Waiting for bedtime",
    "Can’t skip to tomorrow",
    "The teacher won’t stop talking",
    "So many hours left",
    "This feels pointless",
    "No progress happening",
    "Everything repeats itself",
    "Still stuck in waiting",
    "Loading bar crawls slowly",
    "Printer won’t finish",
    "Still no results",
    "The internet lags again",
    "Page won’t load",
    "Call never ends",
    "Voice keeps droning on",
    "Nothing feels urgent",
    "Moments feel stretched",
    "Why is this taking so long",
    "Still at the starting point",
    "Lecture has no end",
    "Bus stop feels forever",
    "Train is still late",
    "Work pile isn’t shrinking",
    "Still typing the same line",
    "Essay feels endless",
    "Homework drags forever",
    "Chores never finish",
    "Waiting in silence",
    "The room feels frozen",
    "This second won’t pass",
    "No change in sight",
    "Life feels paused",
    "Everything’s in slow motion",
    "Time refuses to move",
    "The task is dragging",
    "Meeting is repetitive",
    "School feels like forever",
    "Lecture drones endlessly",
    "Same dull routine",
    "Still stuck at desk",
    "Hours crawl by",
    "Minutes take forever",
    "Countdown feels endless",
    "Waiting room never empties",
    "Still waiting my turn",
    "Doctor’s office is so slow",
    "Traffic jam is endless",
    "Red light won’t change",
    "Ride feels too long",
    "Plane won’t take off",
    "Boarding is delayed",
    "Still on the runway",
    "Bags take forever",
    "Security line crawls",
    "Everything is late",
    "Nothing arrives on time",
    "Delivery is delayed",
    "Package hasn’t come yet",
    "Food takes too long",
    "Still hungry",
    "Restaurant is too slow",
    "Waiting for the check",
    "Still not served",
    "Drinks never come",
    "Cooking takes forever",
    "Oven timer crawls",
    "Microwave feels slow",
    "Still heating up",
    "Laundry cycle never ends",
    "Washer takes too long",
    "Dryer won’t finish",
    "Dishes pile up",
    "Cleaning never ends",
    "Room still messy",
    "Vacuuming is endless",
    "Waiting for water to boil",
    "Still not ready",
    "Shower is too long",
    "Bath won’t drain",
    "Waiting for hair to dry",
    "Paint isn’t dry yet",
    "Nails dry so slow",
    "Still waiting outside",
    "Door won’t open yet",
    "Mail hasn’t come",
    "Message still not sent",
    "No reply yet",
    "Text takes forever",
    "Call not picked up",
    "Voicemail takes too long",
    "Meeting invite still pending",
    "Approval isn’t coming",
    "Boss won’t reply",
    "Still waiting for feedback",
    "Grades not posted",
    "Test results take forever",
    "Nothing updates",
    "Still no email",
    "Software update takes ages",
    "Restart is too slow",
    "Computer lags",
    "Phone freezes",
    "Apps won’t load",
    "Game is stuck",
    "Console is slow",
    "Download bar crawls",
    "Update stuck at 99%",
    "Buffering again",
    "Ad won’t end",
    "Video loads too slow",
    "Playlist won’t play",
    "Music skips",
    "Nothing is working",
    "Still waiting for connection",
    "Wi-Fi keeps lagging",
    "Signal is too weak",
    "Hotspot won’t connect",
    "Waiting for password reset",
    "Still logging in",
    "Password takes too long",
    "Login failed again",
    "Verification is endless",
    "Code hasn’t arrived",
    "Two-step is too slow",
    "Still loading screen",
    "Game hasn’t started",
    "Character takes forever",
    "Spawn time is too long",
    "Waiting for teammates",
    "Match won’t begin",
    "Queue is too long",
    "Nothing is happening yet",
    "Still not over",
  ];
}
