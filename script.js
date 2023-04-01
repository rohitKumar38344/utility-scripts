// SCRIPT TO CALCULATE PERCENTAGE FOR THE COURSE MCA_NEW

const extractData = (tCol) => {
  const table = document.querySelectorAll(
    "#ctl00_ContentPlaceHolder1_gvDetail tr"
  );
  const arr = [];
  for (let i = 1; i <= 13; i++) {
    const data = table[i].childNodes[tCol].textContent;

    if (!isNaN(data)) {
      arr.push(Number(data));
    }
  }
  const sum = arr.reduce((prev, curr) => prev + curr, 0);
  return {
    data: arr,
    total: sum,
  };
};

const calculatePerc = function () {
  const assign = extractData(2);
  const lab1 = extractData(3);
  const termEnd = extractData(7);
  const termEndPractical = extractData(8);

  const assignmentSum = assign.total;
  const lab1Sum = lab1.total;
  const termEndSum = termEnd.total;
  const termEndPracticalSum = termEndPractical.total;

  const assignmentTotal = assign.data.length * 100 * 0.3;
  const marksOutOfAssignmentTotal = assignmentSum * 0.3;

  const theoryTotal =
    (lab1.data.length + termEndPractical.data.length + termEnd.data.length) *
    100 *
    0.7;
  const marksOutOfTheoryTotal =
    (lab1Sum + termEndPracticalSum + termEndSum) * 0.7;

  const percentage =
    ((marksOutOfAssignmentTotal + marksOutOfTheoryTotal) /
      (assignmentTotal + theoryTotal)) *
    100;

  console.log("Your percentage is: ", percentage.toFixed(2));
};

calculatePerc();
