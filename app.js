var stu = [
  {
    name: "ahmed",
    age: 13,
    contact: 032154,
    result: "1",
    rollNum: "",
  },

  {
    name: "ali",
    age: 15,
    contact: 032154,
    result: "0",
    rollNum: "",
  },
  {
    name: "farhan",
    age: 14,
    contact: 032154,
    result: "1",
    rollNum: "",
  },
  {
    name: "imran",
    age: 8,
    contact: 032154,
    result: "0",
    rollNum: "",
  },
  {
    name: "waheed",
    age: 9,
    contact: 032154,
    result: "1",
    rollNum: "",
  },
  {
    name: "khizer",
    age: 17,
    contact: 032154,
    result: "0",
    rollNum: "",
  },
  {
    name: "anas",
    age: 11,
    contact: 032154,
    result: "0",
    rollNum: "",
  },
  {
    name: "ahsan",
    age: 10,
    contact: 032154,
    result: "1",
    rollNum: "",
  },
  {
    name: "taha",
    age: 13,
    contact: 032154,
    result: "1",
    rollNum: "",
  },
  {
    name: "saad",
    age: 9,
    contact: 032154,
    result: "0",
    rollNum: "",
  },
];

for (var i = 0; i < 10; i++) {
  stu[i].rollNum = i + 1;
}

for (var i = 0; i < 10; i++) {
  if (stu[i].result == "1") {
    console.log("pass");
  } else {
    console.log("fail");
  }
}

var inp = document.getElementById("rollno");
var dName = document.getElementById("displayName");
var dres = document.getElementById("displayRes");

function result() {
  for (var j = 0; j < stu.length; j++) {
    if (stu[j].rollNum == inp.value) {
      if (stu[j].result) {
        dName.innerHTML = stu[j].name;
        dres.innerHTML = "fail";
      } else {
        dName.innerHTML = stu[j].name;
        dres.innerHTML = "pass";
      }
    }
  }
}

console.log(stu);
