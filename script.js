const insert = () => {

    let type = document.querySelector('#type').value
    let label = document.querySelector('#label').value

    switch(type){
        case 'text': appendText(label)
            break
        case 'button': appendButton(label)
            break
        case 'checkbox': appendCheckbox(label)
            break
        case 'email': appendEmail(label)
            break
    }

}

const appendText = (label = "Default") => {

    let elem = document.createElement('input')

    elem.setAttribute('placeholder', label)
    elem.setAttribute('class', 'form-control mt-2')

    let container = document.createElement('div');
    container.setAttribute('class', 'form-element-container');

    let removeButton = document.createElement('button');
    removeButton.setAttribute('class', 'btn btn-outline-dark remove-button');
    removeButton.textContent = 'Remove';
    removeButton.addEventListener('click', () => {
        container.remove();
    });

    container.appendChild(elem);
    container.appendChild(removeButton);

    document.querySelector('#display').appendChild(container);

}

const appendButton = (label = "Default") => {

    let elem = document.createElement('button')
 
    elem.setAttribute('class', 'btn btn-outline-secondary form-control mt-2')
    elem.textContent = label

    let container = document.createElement('div');
    container.setAttribute('class', 'form-element-container');

    let removeButton = document.createElement('button');
    removeButton.setAttribute('class', 'btn btn-outline-dark remove-button');
    removeButton.textContent = 'Remove';
    removeButton.addEventListener('click', () => {
        container.remove();
    });

    container.appendChild(elem);
    container.appendChild(removeButton);

    document.querySelector('#display').appendChild(container);

}

const appendCheckbox = (label = "Default") => {
    let checkbox = document.createElement('input');
    checkbox.type = "checkbox";
    checkbox.id = label.toLowerCase().replace(" ", "-");
    checkbox.name = label.toLowerCase().replace(" ", "-");
    checkbox.value = label;
  
    
    checkbox.style.display = "block";
    checkbox.style.marginBottom = "5px";
  
    let labelElem = document.createElement('label');
    labelElem.htmlFor = checkbox.id;
    labelElem.textContent = label;
  
    let container = document.createElement('div');
    container.setAttribute('class', 'form-element-container');
  
    let removeButton = document.createElement('button');
    removeButton.setAttribute('class', 'btn btn-outline-dark remove-button');
    removeButton.textContent = 'Remove';
    removeButton.addEventListener('click', () => {
        container.remove();
    });

    container.style.display = "flex";
    container.style.flexDirection = "column";
  
    container.appendChild(checkbox);
    container.appendChild(labelElem);
    container.appendChild(removeButton);

    document.querySelector('#display').appendChild(container);

}

const appendPhoneNumber = (label = "Default") => {

    let elem = document.createElement('input')

    elem.setAttribute('placeholder', label)
    elem.setAttribute('class', 'form-control mt-2')

    let container = document.createElement('div');
    container.setAttribute('class', 'form-element-container');

    let removeButton = document.createElement('button');
    removeButton.setAttribute('class', 'btn btn-outline-dark remove-button');
    removeButton.textContent = 'Remove';
    removeButton.addEventListener('click', () => {
        container.remove();
    });

    container.appendChild(elem);
    container.appendChild(removeButton);

    document.querySelector('#display').appendChild(container);
}
const appendEmail = (label = "Default") => {
    let elem = document.createElement('input')

    elem.setAttribute('placeholder', label)
    elem.setAttribute('class', 'form-control mt-2')

    let container = document.createElement('div');
    container.setAttribute('class', 'form-element-container');

    let removeButton = document.createElement('button');
    removeButton.setAttribute('class', 'btn btn-outline-dark remove-button');
    removeButton.textContent = 'Remove';
    removeButton.addEventListener('click', () => {
        container.remove();
    });

    container.appendChild(elem);
    container.appendChild(removeButton);

    document.querySelector('#display').appendChild(container);
  };