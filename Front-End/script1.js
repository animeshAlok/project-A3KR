var stu=document.querySelector('.student');
var fakea=document.querySelector('.fake');
var cal=document.querySelector(".faculty");
var addStu = document.querySelector('.form');
var editContainer = document.querySelector('.edit-form');

fetch('http://localhost:3003/students')
    .then(function (response) {
        return response.json();
    })
    .then(function (data) {
        console.log(data.students[0]);
        appendData(data);
    })
    .catch(function (err) {
        console.log('error: ' + err);
    });

function dropstudent(){
    stu.style.display="block";
    editContainer.style.display="none";
    fakea.style.display="none";
    cal.style.display="none";
    addStu.style.display="none";
}
function faculty(){
    stu.style.display="none";
    editContainer.style.display="none";
    fakea.style.display="none";
    cal.style.display="block";
    addStu.style.display="none";
}
function addStudent() {
    stu.style.display="none";
    editContainer.style.display="none";
    fakea.style.display="none";
    cal.style.display="none";
    addStu.style.display="block";
}

function appendData(data) {
    var mainContainer = document.querySelector(".student");
    var indiv=document.createElement("div");
    indiv.className="inserta"
    mainContainer.appendChild(indiv);
    for (var i = 0; i < data.students.length; i++) {
        var div = document.createElement("div");
        div.setAttribute('class','insert');
        div.setAttribute('onClick', `opener(${data.students[i].id})`)
        div.innerHTML = 'Name : ' + data.students[i].Name + 
        "<br/>" +'Roll : ' + data.students[i].Roll + "<br/>" + 'Course : ' + 
        data.students[i].Course + "<br/>" + 'Phone : ' + data.students[i].Phone + 
        "<br/>" + 'Address : ' + data.students[i].Address  + "<br/>" + 'Email : ' + 
        data.students[i].Email;
        
        indiv.appendChild(div);

    }
}

fetch('Person.json')
    .then(function (response) {
        return response.json();
    })
    .then(function (data) {
        facappendData(data);
        console.log(data);
    })
    .catch(function (err) {
        console.log('error: ' + err);
    });
function facappendData(data) {
    var mainContaint = document.querySelector(".faculty");
    var facdiv=document.createElement("div");
    facdiv.className="facins"
    mainContaint.appendChild(facdiv);
    for (var i = 0; i < data.length; i++) {
        var div = document.createElement("div");
        div.setAttribute('class','insert');
        div.innerHTML = " Name: " + data[i].firstName + " " + data[i].lastName;
        facdiv.appendChild(div);
    }
}

function submitFormStudent() {
// const data = Array.from(document.querySelectorAll('.add-student input')).reduce((acc, input) => ({ ...acc, [input.id]: input.value}), {});
const data = {
    Name: document.getElementById('Name').value,
    id: document.getElementById('Regno').value,
    Roll: document.getElementById('Roll').value,
    Course: document.getElementById('Course').value,
    Phone: document.getElementById('Phone').value,
    Address: document.getElementById('Address').value,
    Email: document.getElementById('Email').value 
}

const data2 = {
    id: document.getElementById('Regno').value,
    Stream: document.getElementById('Stream').value,
    HOD: document.getElementById('HOD').value
}

const cgpa = document.getElementById('CGPA').value;
if(cgpa >= 9)
    grade = 'A';
else if(cgpa >= 8)
    grade = 'B';
else if(cgpa >= 7)
    grade = 'C';
else if(cgpa >= 6)
    grade = 'D';
else
    grade = 'E';

const data3 = {
    id: document.getElementById('Regno').value,
    CGPA: document.getElementById('CGPA').value,
    Grade: grade
}

console.log(data);
console.log(data2);
const options = {
    method: 'POST',
    body: JSON.stringify(data),
    headers: {
        'Content-Type': 'application/json'
    }
    };
    fetch('http://localhost:3003/students', options);

    fetch('http://localhost:3003/department', {
        method: 'POST',
        body: JSON.stringify(data2),
        headers: {
            'Content-Type': 'application/json'
        }
    });
    fetch('http://localhost:3003/marks', {
        method: 'POST',
        body: JSON.stringify(data3),
        headers: {
            'Content-Type': 'application/json'
        }
    });
}

function deleteStudent(id) {
    fetch('http://localhost:3003/students/' + id, {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json'
        }
    })
    fetch('http://localhost:3003/department/' + id, {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json'
        }
    })
    fetch('http://localhost:3003/marks/' + id, {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json'
        }
    })
}

function modifyStudent(data) {
    console.log(data);
}

function opener(id){
    editContainer.style.display="block";
    stu.style.display="none";
    fakea.style.display="none";
    cal.style.display="none";
    addStu.style.display="none";

    fetch(`http://localhost:3003/students/${id}`)
    .then(function (response) {
        return response.json();
    })
    .then(function (data) {
        document.getElementById('logo-name').innerText = data.students[0].Name;
        document.getElementById('logo-email').innerText = data.students[0].Email;
        document.getElementById('name').value = data.students[0].Name;
        document.getElementById('phone').value = data.students[0].Phone;
        document.getElementById('address').value = data.students[0].Address;
        document.getElementById('roll').value = data.students[0].Roll;
        document.getElementById('regno').value = data.students[0].id;
        document.getElementById('email').value = data.students[0].Email;

    })
    .catch(function (err) {
        console.log('error: ' + err);
    });

    fetch(`http://localhost:3003/department/${id}`)
    .then(function (response) {
        return response.json();
    })
    .then(function (data) {
        document.getElementById('hod').value = data.department[0].HOD;
        document.getElementById('stream').value = data.department[0].Stream;
    })
    .catch(function (err) {
        console.log('error: ' + err);
    });

    fetch(`http://localhost:3003/marks/${id}`)
    .then(function (response) {
        return response.json();
    })
    .then(function (data) {
        console.log(data.marks);
        document.getElementById('grade').value = data.marks[0].Grade;
        document.getElementById('cgpa').value = data.marks[0].CGPA;
    })
    .catch(function (err) {
        console.log('error: ' + err);
    });

    var save = document.getElementById('save');
    save.setAttribute('onClick', `updateProfile(${id})`);
    var del = document.getElementById('delete');
    del.setAttribute('onClick', `deleteStudent(${id})`);
}

function updateProfile(id) {
    console.log(id);
    const data = {
        Name: document.getElementById('name').value,
        id: document.getElementById('regno').value,
        Roll: document.getElementById('roll').value,
        Phone: document.getElementById('phone').value,
        Address: document.getElementById('address').value,
        Email: document.getElementById('email').value  
    }
    const data2 = {
        id: document.getElementById('regno').value,
        Stream: document.getElementById('stream').value,
        HOD: document.getElementById('hod').value
    }
    const cgpa = document.getElementById('cgpa').value;
    if(cgpa >= 9)
        grade = 'A';
    else if(cgpa >= 8)
        grade = 'B';
    else if(cgpa >= 7)
        grade = 'C';
    else if(cgpa >= 6)
        grade = 'D';
    else
        grade = 'E';
    const data3 = {
        id: document.getElementById('regno').value,
        CGPA: document.getElementById('cgpa').value,
        Grade: grade
    }
    console.log(data);
    console.log(data2);
    console.log(data3);

    fetch(`http://localhost:3003/students/${id}`, {
        method: 'PATCH',
        body: JSON.stringify(data),
        headers: {
            'Content-Type': 'application/json'
        }
    });

    fetch(`http://localhost:3003/department/${id}`, {
        method: 'PATCH',
        body: JSON.stringify(data2),
        headers: {
            'Content-Type': 'application/json'
        }
    });

    alert('Hello');

    fetch(`http://localhost:3003/marks/${id}`, {
        method: 'PATCH',
        body: JSON.stringify(data3),
        headers: {
            'Content-Type': 'application/json'
        }
    });

}