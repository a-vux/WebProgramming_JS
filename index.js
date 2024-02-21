// localStorage.clear()
// localStorage.setItem("id", 1)

let createStudent = () => {
    // console.log(document.getElementById("msv").value)
    let msv = document.getElementById("msv").value
    let s_name = document.getElementById("s_name").value
    let dob = document.getElementById("dob").value
    let s_class = document.getElementById("s_class").value
    let gpa = document.getElementById("gpa").value
    console.log(msv,s_name,dob,s_class,gpa)
    // let id = localStorage.getItem("id")
    if (msv == "" || s_name == "" || dob == "" || s_class == "" || gpa == "") {
        alert("Vui lòng nhập đầy đủ thông tin")
        return
    }
    localStorage.setItem(msv,JSON.stringify({msv,s_name,dob,s_class,gpa}));

    displayStudent();
}

let displayStudent = () => {
    let table = document.getElementById("studentTable")
    let data = ""
    console.log("Displaying: " + localStorage.length)
    for (let i = 0; i < localStorage.length; i++) {
        let key = localStorage.key(i)
        let student = JSON.parse(localStorage.getItem(key))
        console.log(key + " " + localStorage.getItem(key))
        data += `<tr id="id${student.msv}">
                    <td>${student.msv}</td>
                    <td>${student.s_name}</td>
                    <td>${student.dob}</td>
                    <td>${student.s_class}</td>
                    <td>${student.gpa}</td>
                    <td><button onclick="editStudent('${student.msv}')">Edit</button></td>
                </tr>`
    }
    table.innerHTML = data
}

let editStudent = (msv) => {
    console.log("Editing " + msv)
    let student = document.getElementById("id" + msv)
    let student_data = JSON.parse(localStorage.getItem(msv))
    console.log(student_data)
    let data = ""
    data += `<tr id="id${student}">
                <th><input type="text" id="update_msv" style="width: 125px" placeholder="Mã sinh viên" value="${student_data.msv}"></th>
                <th><input type="text" id="update_s_name" placeholder="Tên" value="${student_data.s_name}"></th>
                <th><input type="date" id="update_dob" value="${student_data.dob}"></th>
                <th><input type="text" id="update_s_class" placeholder="Lớp" value="${student_data.s_class}"></th>
                <th><input type="text" id="update_gpa" placeholder="Điểm" value="${student_data.gpa}"></th>
                <td><button onclick="ok('${msv}')">OK</button></td>
            </tr>`
    student.innerHTML = data
}

let ok = (msvID) => {
    // let student = document.getElementById("id" + msv)
    // student.remove()
    let msv = document.getElementById("update_msv").value;
    let s_name = document.getElementById("update_s_name").value;
    let dob = document.getElementById("update_dob").value;
    let s_class = document.getElementById("update_s_class").value;
    let gpa = document.getElementById("update_gpa").value;
    console.log(msv,s_name,dob,s_class, gpa)
    localStorage.removeItem(msvID)
    localStorage.setItem(msv,JSON.stringify({msv,s_name,dob,s_class, gpa}));
    for (let i = 0; i < localStorage.length; i++){
        let key = localStorage.key(i)
        console.log(localStorage.getItem(key))
    }
    let students = document.getElementById("studentTable")
    while (students.hasChildNodes()) {
        students.removeChild(students.firstChild);    
    }
    displayStudent();
    // student.id = "id" + update_msv
}