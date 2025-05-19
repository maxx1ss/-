function GetStudentInfo(name, surname, dateOfBirth) {
  this.name = name;
  this.surname = surname;
  this.dateOfBirth = dateOfBirth;

  this.arrayOfAttendance = new Array(11);
  this.present = function () {
    if (this.arrayOfAttendance[this.arrayOfAttendance.length - 1] !== undefined) {
      return this;
    }

    for (let i = 0; i < this.arrayOfAttendance.length; i++) {
      if (this.arrayOfAttendance[i] === undefined) {
        this.arrayOfAttendance[i] = true;
        break;
      }
    }

    return this;
  };

  this.absent = function () {
    if (this.arrayOfAttendance[this.arrayOfAttendance.length - 1] !== undefined) {
      return this;
    }

    for (let i = 0; i < this.arrayOfAttendance.length; i++) {
      if (this.arrayOfAttendance[i] === undefined) {
        this.arrayOfAttendance[i] = false;
        break;
      }
    }

    return this;
  };

  this.arrayOfMarks = new Array(11);

  this.mark = function (mark) {
    if (this.arrayOfMarks[this.arrayOfMarks.length - 1] !== undefined) {
      return this;
    }

    if (mark > 10) {
      console.log("Enter valid mark");
      return this;
    }

    for (let i = 0; i < this.arrayOfMarks.length; i++) {
      if (this.arrayOfMarks[i] === undefined) {
        this.arrayOfMarks[i] = mark;
        break;
      }
    }

    return this;
  };

  this.summary = function () {
    getArithmeticalMeanOfMarks = () => {
      let countOfmarks = 0;
      let sum = 0;

      for (let i = 0; i < this.arrayOfMarks.length; i++) {
        if (this.arrayOfMarks[i] === undefined) {
          break;
        }
        sum += this.arrayOfMarks[i];
        countOfmarks++;
      }

      return sum / countOfmarks;
    };

    const arithmeticalMeanOfMarks = getArithmeticalMeanOfMarks();

    getArithmeticalMeanOfAttendance = () => {
      let countOfAttendances = 0;
      let sum = 0;

      for (let i = 0; i < this.arrayOfAttendance.length; i++) {
        if (this.arrayOfAttendance[i] === undefined) {
          break;
        }

        sum += this.arrayOfAttendance[i];
        countOfAttendances++;
      }

      return sum / countOfAttendances;
    };

    const arithmeticalMeanOfAttendance = getArithmeticalMeanOfAttendance();

    if (arithmeticalMeanOfMarks > 9 && arithmeticalMeanOfAttendance > 0.9) {
      return "Ути какой молодчинка";
    }

    if (arithmeticalMeanOfMarks < 9 && arithmeticalMeanOfAttendance < 0.9) {
      return "Редиска";
    }

    return "Норм но можно лучше";
  };
}

const student1 = new GetStudentInfo("Max", "Doro", "September 22nd");

student1
  .present()
  .present()
  .absent()
  .absent()
  .absent()
  .present()
  .present()
  .present()
  .present()
  .present()
  .mark(10)
  .mark(1)
  .mark(1)
  .mark(1)
  .mark(10)
  .mark(10)
  .mark(10)
  .mark(10)
  .mark(10)
  .mark(10);
console.log(student1.summary());
console.log(student1);
