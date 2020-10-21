
var list = document.getElementById("list");

function addtodo() {
	var todo_item = document.getElementById('todo-item')

// create li tag with text node
	var li = document.createElement("li")
	var liText = document.createTextNode(todo_item.value)
	li.appendChild(liText)

// create delete button
    var delBtn = document.createElement('button')
    var delText = document.createTextNode('DELETE')
    delBtn.setAttribute("class","btn")
    delBtn.setAttribute("onclick","deleteItem(this)")
    delBtn.appendChild(delText)

// create edit button
    var editBtn = document.createElement('button')
    var editText = document.createTextNode('EDIT')
    editBtn.setAttribute("class","btn")
    editBtn.appendChild(editText)
    editBtn.setAttribute("onclick","editItem(this)")

    li.appendChild(delBtn)
    li.appendChild(editBtn)

// when you write input on input field they remove the input field..
	list.appendChild(li)
	todo_item.value = ""
}
 
function deleteItem(e){
   e.parentNode.remove()
}

function editItem(e) {
	var val = e.parentNode.firstChild.nodeValue;
	var editItem = prompt("Enter your Edit Value",val)
	e.parentNode.firstChild.nodeValue = editItem
}

function deleteAll() {
	list.innerHTML = ""
}