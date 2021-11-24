const field = document.querySelector('input');
const btn = document.querySelector('button');

const container = document.querySelector('.container');
const listUl = document.querySelector('.list');

// icon
const trash = `<svg class="icon" style="width: 1em;height: 1em;vertical-align: middle;fill: currentColor;overflow: hidden;" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="574"><path d="M880 864c0 88.37-71.63 160-160 160H304c-88.37 0-160-71.63-160-160l-3.2-608H128c-26.51 0-48-21.49-48-48s21.49-48 48-48h768c26.51 0 48 21.49 48 48s-21.49 48-48 48h-16v608zM672 0c26.51 0 48 21.49 48 48s-21.49 48-48 48H352c-26.51 0-48-21.49-48-48s21.49-48 48-48h320z m-48 384c26.51 0 48 21.49 48 48v320c0 26.51-21.49 48-48 48s-48-21.49-48-48V432c0-26.51 21.49-48 48-48z m-224 0c26.51 0 48 21.49 48 48v320c0 26.51-21.49 48-48 48s-48-21.49-48-48V432c0-26.51 21.49-48 48-48z m384-128H240v608c0 35.35 28.65 64 64 64h416c35.35 0 64-28.65 64-64V256z" p-id="575"></path></svg>`;

// Create an array to store my list data
var list = [];

// Retrieve from storage, if it exists
var storage = localStorage.getItem('myList') || '';
if (storage) {
  storage = JSON.parse(storage);
  list = storage;
  
  // display the items too, in an <li>
  listUl.innerHTML = displayItem();
}

// Type in stuff and add it to the array
btn.addEventListener('click', function(){
  // reset the display
  listUl.innerHTML = '';
  
  // presses button, capture stuff written
  if (field.value) {
    list.push(field.value);
  }
  
  // store the data
  localStorage.setItem('myList', JSON.stringify(list));
  
  // display the items too, in an <li>
  listUl.innerHTML = displayItem();
  
  // clear the input field
  field.value = '';
})

// Delete an item when I press "delete icon"
function deleteItem(item) {
  // reset the display
  listUl.innerHTML = '';
  
  // find the index position and delete the item
  var pos = item.dataset.pos;
  list.splice(pos, 1);
  
  // store the data
  localStorage.setItem('myList', JSON.stringify(list));
  
  // display the items too, in an <li>
  listUl.innerHTML = displayItem();
}

// Displays our list
function displayItem() {
  return list.map((item, i) => `<li>${item}<a data-pos="${i}" onclick="deleteItem(this)">${trash}</a></li>`).join('');
}
