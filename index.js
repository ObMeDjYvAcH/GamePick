var testNum = 0;
var testNum2 = 0;
var testNum3 = 0;
var testNumIdFirst;
var testNumIdSecond;
var testNumClassFirst;
var testNumClassSecond;
var mainEmptyMass = [];
var ConstantMassiv = [];
function makeMassivNum() {
  for (var i = 0; i < 4; i++) {
    for (var j = 0; j < 4; j++) {
      var time = [i] + [j];
      ConstantMassiv.push(time);
    }
  }
}
function makeMass() {
  var emptyMass = [];
  var emptyMass2 = [];
  var mainArr = [
    "pick0",
    "pick1",
    "pick2",
    "pick3",
    "pick4",
    "pick5",
    "pick6",
    "pick7",
  ];
  var mainArrCophy = mainArr.slice();
  var mainArrCophy2 = mainArr.slice();
  for (i = 0; i < 8; i++) {
    var time1 = Math.floor(Math.random() * (8 - i));
    var result = mainArrCophy[time1];
    emptyMass.push(result);
    mainArrCophy.splice(time1, 1);
  }
  for (i = 0; i < 8; i++) {
    var time1 = Math.floor(Math.random() * (8 - i));
    var result = mainArrCophy2[time1];
    emptyMass2.push(result);
    mainArrCophy2.splice(time1, 1);
  }
  for (i = 0; i < 8; i++) {
    mainEmptyMass.push(emptyMass[i]);
    mainEmptyMass.push(emptyMass2[i]);
  }
  console.log(mainEmptyMass);
}

function getPick(location, num) {
  var image = document.getElementById(location);
  image.setAttribute("class", mainEmptyMass[num]);
}

function counter() {
  var counter = 0;
  for (var i = 0; i < 4; i++) {
    for (var j = 0; j < 4; j++) {
      var time = "0" + [i] + [j];
      getPick(time, counter);
      counter++;
    }
  }
}
function press(num) {
  var test = document.getElementById(num);
  test.onclick = makeClick;
}
function makeClick(eventObj) {
  var mouseMoove;
  mouseMoove = eventObj.target;
  if (testNum < 2) {
    if (testNum === 0) {
      testNumIdFirst = mouseMoove.id;
      testNumClassFirst = document.getElementById("0" + mouseMoove.id);
      if (testNum2 === 1) {
        if (ConstantMassiv.indexOf(testNumIdFirst) === -1) {
          alert("картинка уже открыта");
          testNum = 0;
          return 0;
        }
      }
      mouseMoove.setAttribute("class", testNumClassFirst.classList.value);
      testNum++;
    } else if (testNum === 1) {
      testNumIdSecond = mouseMoove.id;
      if (testNumIdFirst === testNumIdSecond) {
        alert("нужно выбрать другое поле");
        testNum = 1;
      } else if (ConstantMassiv.indexOf(testNumIdSecond) === -1) {
        alert("картинка уже открыта");
        testNum = 1;
        return 0;
      } else {
        testNumClassSecond = document.getElementById("0" + mouseMoove.id);
        mouseMoove.setAttribute("class", testNumClassSecond.classList.value);
        testNum = 3;
        setTimeout(funcchangeback, 900);
      }
    }
  }
}
function funcchangeback() {
  if (
    testNumClassFirst.classList.value === testNumClassSecond.classList.value
  ) {
    for (var i = 0; i < ConstantMassiv.length; i++) {
      if (testNumIdFirst === ConstantMassiv[i]) {
        ConstantMassiv.splice(i, 1);
      }
    }
    for (var i = 0; i < ConstantMassiv.length; i++) {
      if (testNumIdSecond === ConstantMassiv[i]) {
        ConstantMassiv.splice(i, 1);
        testNum = 0;
        testNum2 = 1;
        return 0;
      }
    }
  }
  for (var i = 0; i < ConstantMassiv.length; i++) {
    var test = ConstantMassiv[i];
    var test2 = document.getElementById(test);
    test2.setAttribute("class", "pickbackground");
    testNum = 0;
  }
}
function counter2() {
  for (var i = 0; i < 4; i++) {
    for (var j = 0; j < 4; j++) {
      var time = [i] + [j];
      press(time);
    }
  }
}
function init() {
  var test = document.getElementById("button");
  test.onclick = startFun;
}
function startFun() {
  makeMass();
  makeMassivNum();
  counter();
  counter2();
}
function changeTextOnButton(elem) {
  elem.value = "Game is started ";
}
window.onload = init;
