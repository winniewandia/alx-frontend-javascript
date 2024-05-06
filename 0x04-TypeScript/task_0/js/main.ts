interface Student {
  firstName: string;
  lastName: string;
  age: number;
  location: string;
}

const student1: Student = {
  firstName: 'John',
  lastName: 'Doe',
  age: 24,
  location: 'Nigeria',
};

const student2: Student = {
  firstName: 'Jane',
  lastName: 'Doe',
  age: 22,
  location: 'Nigeria',
};

const studentsList: Array<Student> = [student1, student2];

const table = document.createElement('table');

const thead = document.createElement('thead');
const headerRow = document.createElement('tr');
const nameHeader = document.createElement('th');
nameHeader.textContent = 'First Name';
const locationHeader = document.createElement('th');
locationHeader.textContent = 'Location';
headerRow.appendChild(nameHeader);
headerRow.appendChild(locationHeader);
thead.appendChild(headerRow);
table.appendChild(thead);

const tbody = document.createElement('tbody');
studentsList.forEach((student) => {
  const row = document.createElement('tr');
  const name = document.createElement('td');
  name.textContent = student.firstName;
  const location = document.createElement('td');
  location.textContent = student.location;
  row.appendChild(name);
  row.appendChild(location);
  tbody.appendChild(row);
});
table.appendChild(tbody);
