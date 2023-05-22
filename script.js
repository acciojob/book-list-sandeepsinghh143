//your JS code here. If required.
document.getElementById("submit").addEventListener("click", function(event) {
      event.preventDefault();
      addBookToList();
    });
let tbody=document.getElementById("book-list");
function addBookToList(){
	let row=tbody.insertRow();
	let td1=row.insertCell(0);
	td1.innerText=document.getElementById("title").value;
	let td2=row.insertCell(1);
	td2.innerText=document.getElementById("author").value;
	let td3=row.insertCell(2);
	td3.innerText=document.getElementById("isbn").value;
	let td4=row.insertCell(3);
	let newBtn = document.createElement('button');
	newBtn.className="delete";
    newBtn.innerText = 'X';
	td4.append(newBtn);
	tr.append(td1);
	tr.append(td2);
	tr.append(td3);
	tr.append(td4);
	tbody.append(tr);
      document.getElementById("title").value = "";
      document.getElementById("author").value = "";
      document.getElementById("isbn").value = ""
	var deleteButtons = document.getElementsByClassName("delete");
      for (var i = 0; i < deleteButtons.length; i++) {
        deleteButtons[i].addEventListener("click", function() {
          var row = this.parentNode.parentNode;
          row.parentNode.removeChild(row);
        });
      }
}
