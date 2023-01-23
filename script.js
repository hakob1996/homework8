const btn = document.getElementById('btn');
const wrap = document.getElementById('wrap');
const inputV = document.getElementById('inputPlace');
const delBtn = document.getElementsByClassName('deleteContent')
const editBtn = document.getElementsByClassName('editBtn')




function deletion(){
    for(var i=0; i<delBtn.length; i++){
    delBtn[i].addEventListener('click', function(e){
        e.path[1].remove()
    })
    }
}
function edit(){
    for(var i=0; i<editBtn.length; i++){
        editBtn[i].addEventListener('click', function(e){
            console.log(e)
            var tempInput = document.createElement('input')
            var tempBtn = document.createElement('button')
            tempBtn.id = 'tempBtn'
            tempBtn.textContent = 'OK'
            tempInput.value = e.path[1].children[0].textContent;
            e.path[1].children[0].remove()
            e.path[1].prepend(tempInput)
            e.path[1].append(tempBtn)
            document.getElementById('tempBtn').addEventListener('click', function(e){
                var newP = document.createElement('p')
                newP.className = 'textContent'
                newP.textContent = tempInput.value.toUpperCase();
                e.path[1].children[0].remove()
                e.path[1].prepend(newP)
                tempBtn.remove()

            })
        })
    }
}
btn.addEventListener("click", function(){
    let domDiv = document.createElement('div')
    let domP = document.createElement('p')
    let domDelBtn = document.createElement('button')
    let domEdtBtn = document.createElement('button')
    domDiv.className = 'listDivs'
    domP.className = 'textContent'
    domDelBtn.className = 'deleteContent'
    domEdtBtn.className = 'editBtn'
    domDelBtn.textContent = 'DELETE'
    domEdtBtn.textContent = 'EDIT'
    domDiv.append(domP)
    domDiv.append(domDelBtn)
    domDiv.append(domEdtBtn)
    domP.textContent = inputV.value.toUpperCase()
    wrap.append(domDiv)
    inputV.value = ''
    deletion()
    edit()
});



deletion()
edit()