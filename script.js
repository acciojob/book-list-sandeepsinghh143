//your JS code here. If required.
let tbody=document.getElementById("book-list");
function addBook(){
	let row=tbody.insertRow();
	let td1=row.insertCell(0);
	td1.innerText=document.getElementById("title").value;
	let td2=row.insertCell(1);
	td2.innerText=document.getElementById("author").value;
	let td3=row.insertCell(2);
	td3.innerText=document.getElementById("isbn").value;
	let td4=row.insertCell(3);
	td4.innerText="X";
	td4.innerText.style.backgroundColor="red";

	tr.append(td1);
	tr.append(td2);
	tr.append(td3);
	tr.append(td4);
	tbody.append(tr);
}