var inputfield = document.getElementById('inputfield');
var addbutton = document.getElementById('add');
var container = document.getElementById('container');

addbutton.addEventListener('click', function() {
    var task = inputfield.value.trim();
    
    if (task !== '') {
        var para = document.createElement('p');
        para.classList.add('pstyle');
        para.innerText = task;
        
        var deleteButton = document.createElement('button');
        deleteButton.classList.add('delete');
        deleteButton.innerText = 'Delete';
        deleteButton.addEventListener('click', function() {
            container.removeChild(para);
        });
        
        para.appendChild(deleteButton);
        container.appendChild(para);
        inputfield.value = '';

        para.addEventListener('click',function(){
            para.style.textDecoration = "line-through";
        });
    }
});
