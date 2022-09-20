var testNum = 0;
var testNum2 = 0;
var testNum3 = 0;
var testNumIdFirst;
var testNumIdSecond;
var testNumClassFirst;
var testNumClassSecond;
var mainEmptyMass = [];
var ConstantMassiv = [];
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

// ------------------------------------------

function press(num) {
  var test = document.getElementById(num);
  test.onclick = makeClick;
}
function makeClick(eventObj) {
  var mouseMoove;
  var testText;
  mouseMoove = eventObj.target;
  if (testNum < 2) {
    if (testNum === 0) {
      testNumIdFirst = mouseMoove.id;
      if (mainEmptyMass[testNumIdFirst] === "empty") {
        alert("картинка уже открыта");
        testNum = 0;
        return 0;
      }
      testText = document.getElementById(mouseMoove.id);
      testText.setAttribute("class", mainEmptyMass[mouseMoove.id]);
      testNumClassFirst = testText.classList.value;
      testNum = 1;
    } else if (testNum === 1) {
      testNumIdSecond = mouseMoove.id;
      if (mainEmptyMass[testNumIdSecond] === "empty") {
        alert("картинка уже открыта");
        testNum = 1;
        return 0;
      } else if (testNumIdFirst === testNumIdSecond) {
        alert("нужно выбрать другое поле");
        testNum = 1;
      } else {
        testText = document.getElementById(mouseMoove.id);
        testText.setAttribute("class", mainEmptyMass[mouseMoove.id]);
        testNumClassSecond = testText.classList.value;
        testNum = 3;
        setTimeout(funcchangeback, 900);
      }
    }
  }
}
function funcchangeback() {
  var timeTest1 = document.getElementById(testNumIdFirst);
  var timeTest2 = document.getElementById(testNumIdSecond);
  if (testNumClassFirst === testNumClassSecond) {
    timeTest1.setAttribute("class", testNumClassFirst);
    timeTest2.setAttribute("class", testNumClassSecond);
    mainEmptyMass[testNumIdFirst] = "empty";
    mainEmptyMass[testNumIdSecond] = "empty";
    testNum = 0;
    return 0;
  } else {
    for (var i = 0; i < 16; i++) {
      if (mainEmptyMass[i] !== "empty") {
        var test = document.getElementById(i);
        test.setAttribute("class", "pickbackground");
      }
    }
    testNum = 0;
  }
}
function counter2() {
  for (var i = 0; i < mainEmptyMass.length; i++) {
    var time = [i];
    press(time);
  }
}
// test = document.getElementById(mouseMoove.id);
//   test.setAttribute("class", mainEmptyMass[mouseMoove.id]);
// console.log(test);
// function init() {
//   var test = document.getElementById("button");
//   test.onclick = startFun;
// }
// function startFun() {
//   makeMass();
//   makeMassivNum();
//   counter();
//   counter2();
// }
// function changeTextOnButton(elem) {
//   elem.value = "Game is started ";
// }
// window.onload = init;

makeMass();
counter2();
