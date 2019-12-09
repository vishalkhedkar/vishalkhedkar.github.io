function calc() {
  var java = parseInt(document.getElementById('javam').value);
  var dbms = parseInt(document.getElementById('dbm').value);
  var or = parseInt(document.getElementById('orm').value);
  var ssd = parseInt(document.getElementById('ssdm').value);
  var ai = (parseInt(document.getElementById('aim').value) / 40) * 100;
  var javal = (parseInt(document.getElementById('javalm').value) / 40) * 100;
  var dbl = (parseInt(document.getElementById('dblm').value) / 40) * 100;
  var uml = (parseInt(document.getElementById('umlm').value) / 50) * 100;
  var dwl = 100;
  // var mp = (parseInt(document.getElementById('mpm').value) / 50) * 100;

  var gradep = [
    gradePoints(java), //0
    gradePoints(dbms), //1
    gradePoints(or), //2
    gradePoints(ssd), //3
    gradePoints(ai), //4
    gradePoints(javal), //5
    gradePoints(dbl), //6
    gradePoints(uml), //7
    gradePoints(dwl) //8
    //gradePoints(mp) //9
  ];

  console.log(gradep);

  var total_credits =
    4 * gradep[0] +
    4 * gradep[1] +
    4 * gradep[2] +
    4 * gradep[3] +
    1 * gradep[4] +
    1 * gradep[5] +
    1 * gradep[6] +
    1 * gradep[7] +
    4 * gradep[8];

  console.log(total_credits);

  var gpa = parseFloat((total_credits / 24).toPrecision(4));
  document.getElementById('res').innerHTML =
    '<h2>Your GPA is: ' + gpa + '</h2>';

  if (java == 91) {
    alert('Omkar kutte, congrats!');
    console.log('Omkar kutte, congrats!');
  }

  console.log(gpa);
}

function gradePoints(marks) {
  if (marks < 45) {
    return 0;
  } else if (marks < 50) {
    return 4;
  } else if (marks < 55) {
    return 5;
  } else if (marks < 60) {
    return 6;
  } else if (marks < 70) {
    return 7;
  } else if (marks < 75) {
    return 8;
  } else if (marks < 80) {
    return 9;
  } else if (marks >= 80) {
    return 10;
  }
}
