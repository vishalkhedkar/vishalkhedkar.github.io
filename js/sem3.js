function calc() {
  var java = parseInt(document.getElementById('javam').value);
  var dbms = parseInt(document.getElementById('dbm').value);
  var or = parseInt(document.getElementById('orm').value);
  var ssd = parseInt(document.getElementById('ssdm').value);
  var ai = parseInt(document.getElementById('aim').value);
  var javal = (parseInt(document.getElementById('javalm').value) / 40) * 100;
  var dbl = (parseInt(document.getElementById('dblm').value) / 40) * 100;
  var uml = (parseInt(document.getElementById('umlm').value) / 40) * 100;
  var mp = (parseInt(document.getElementById('mpm').value) / 50) * 100;

  var gradep = [
    gradePoints(java),
    gradePoints(dbms),
    gradePoints(or),
    gradePoints(ssd),
    gradePoints(ai),
    gradePoints(javal),
    gradePoints(dbl),
    gradePoints(uml),
    gradePoints(mp)
  ];

  console.log(gradep);

  var total_credits =
    4 * gradep[0] +
    4 * gradep[1] +
    4 * gradep[2] +
    4 * gradep[3] +
    3 * gradep[4] +
    2 * gradep[5] +
    2 * gradep[6] +
    2 * gradep[7] +
    1 * gradep[8];

  console.log(total_credits);

  var gpa = parseFloat((total_credits / 26).toPrecision(4));

  document.getElementById('res').innerHTML =
    '<h2>Your GPA is: ' + gpa + '</h2>';

  if (java == 95) {
    alert('Omkar kutte, congrats!');
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
