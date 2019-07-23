let rootNode = document.getElementById('root');


let addNewItem = document.getElementById('add_new_item');
let actionText = document.getElementById('action_text');
let itemNumber = 0;
const MAX_ITEM = 10;
function createNewListItem() {
  if (itemNumber === MAX_ITEM) {
    return false;
  }
  ++itemNumber;
  let listItem = document.createElement('li');
  listItem.setAttribute('class', 'list_item');
  let checkBox = document.createElement('input');
  document.getElementById('list').appendChild(listItem);
  listItem.appendChild(checkBox);
  checkBox.setAttribute('type', 'checkbox');
  checkBox.setAttribute('id', `${itemNumber}`);
  let checkBoxLabel = document.createElement('label');
  listItem.appendChild(checkBoxLabel);
  checkBoxLabel.setAttribute('for', `${itemNumber}`);
  checkBoxLabel.innerHTML = `<i class="material-icons">check_box_outline_blank</i>`;
  checkBoxLabel.innerHTML = `<i class='material-icons'>check_box</i> <p>${actionText.value}</p>`;
  checkBoxLabel.innerHTML += `<i class="material-icons" id=edit${itemNumber}>create</i>`;
  let editItem = document.getElementById(`edit${itemNumber}`);
  editItem.addEventListener('click', editListItem);
  let editDiv = document.createElement('div');
  editDiv.setAttribute('class', 'editDiv');
  editDiv.style.display = 'none';
  let editInput = document.createElement('input');
  editInput.setAttribute('type', 'text');
  editDiv.appendChild(editInput);
  let saveIcon = document.createElement('i');
  saveIcon.setAttribute('class', 'material-icons');
  saveIcon.innerHTML = 'save';
  editDiv.appendChild(saveIcon);
  listItem.appendChild(editDiv);

  function editListItem() {
    checkBoxLabel.style.display = 'none';
    editDiv.style.display = 'flex';
    saveIcon.addEventListener('click', saveEdit);

    function saveEdit() {
      checkBoxLabel.innerHTML = `<i class="material-icons">check_box_outline_blank</i>`;
      checkBoxLabel.innerHTML = `<i class='material-icons'>check_box</i> <p>${editInput.value}</p>`;
      editDiv.style.display = 'none';
      checkBoxLabel.style.display = 'flex';
    }
  }
}

actionText.addEventListener('input', doActive);
addNewItem.addEventListener('click', createNewListItem);
addNewItem.setAttribute('disabled', 'disabled');
let icon = document.getElementsByClassName('material-icons');

function doActive() {
  if (actionText.value > '') {
    icon[0].style.color = 'green';
    addNewItem.removeAttribute('disabled');
  } else {
    icon[0].style.color = '#687077';
    addNewItem.setAttribute('disabled', 'disabled');
  }
}
