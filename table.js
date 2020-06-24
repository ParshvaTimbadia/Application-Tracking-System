// Cdoe to add the data into the table

var row=1;
var entry = Document.getElementById('submit');
entry.addEventListener("click", displayDetails);



function displayDetails(){
    var fname= Document.getElementById("Mfname").value;
    var lname= Document.getElementById("Mlname").value;
    var tname= Document.getElementById("tname").value;
    var Reqname= Document.getElementById("Requirement_type").value;
    var duration= Document.getElementById("Duration").value;

    if(!fname || !lname || !tname || !Reqname || !duration){

            alert("Please Fill in All the Details");
            return;
    }

    var display = document.getElementById('requirement_table');

    var newRow = display.insertRow(row);

    var cell1 =newRow.insertCell(0);
    var cell2 =newRow.insertCell(1);
    var cell3 =newRow.insertCell(2);
    var cell4 =newRow.insertCell(3);
    var cell5 =newRow.insertCell(4);

    cell1.innerHTML = fname;
    cell2.innerHTML = lname;
    cell3.innerHTML = tname;
    cell4.innerHTML = Reqname;
    cell5.innerHTML = duration;

    row++;

}
