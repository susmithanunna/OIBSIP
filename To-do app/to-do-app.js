document.querySelector('#add').onclick=function(){
    if(document.querySelector('#class1 input').value.length ==0 ){
        alert("Please enter  the task");
    }
    else{
        document.querySelector("#task").innerHTML+=`
        <div class="task1">
        <span id="taskname">
        ${document.querySelector('#class1 input').value}
        </span>
        <button class="delete">Delete
        <i class="far fa-trash-alt"></i>
        </button>
        </div>
        `;
        var curtask=document.querySelectorAll(".delete");
        for(var i=0;i<curtask.length;i++){
            curtask[i].onclick=function(){
                this.parentNode.remove();
            }
        }
    }
}
