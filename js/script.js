let allPost=document.querySelector(".allPost")
let name=document.querySelector(".name")
let caption=document.querySelector(".caption")
let postBtn=document.querySelector(".postBtn")
let updateBtn=document.querySelector(".updateBtn")
let error=document.querySelector(".error")
let indexStore;

let arr=[]
postBtn.addEventListener("click",function(){
    if(!(name.value && caption.value)){
        error.innerHTML="Please fill the required fields"
    }else{
        error.innerHTML=""
        arr.push({
            name:name.value,
            caption:caption.value 
        })
        name.value=""
        caption.value=""
        allPost.innerHTML=""
        display()
    }
})

updateBtn.addEventListener("click",function(){
    arr[indexStore].name=name.value
    arr[indexStore].caption=caption.value
    allPost.innerHTML=""
    display()

    updateBtn.style.display="none"
    postBtn.style.display="inline-block"
    name.value=""
    caption.value=""
})


function display(){
    arr.map(item=>{
        allPost.innerHTML+=`<div class="card mt-5" style="width: 18rem;">
                    <div class="card-body">
                      <h5 class="card-title">${item.name}</h5>
                      <p class="card-text">${item.caption}</p>
                      <button href="#" class="btn btn-primary edit">Edit</button>
                      <button href="#" class="btn btn-danger delete">Delete</button>
                    </div>
                </div>`
    })

    let deletebtn=document.querySelectorAll(".delete")
    let deletebtnConvert=Array.from(deletebtn)
    deletebtnConvert.map((item,index)=>{
        item.addEventListener("click",function(){
            arr.splice(index,1)
            allPost.innerHTML=""
            display()
        })
    })

    let editbtn=document.querySelectorAll(".edit")
    let editbtnConvert=Array.from(editbtn)
    editbtnConvert.map((item2,index)=>{
        item2.addEventListener("click",function(){
            name.value=arr[index].name
            caption.value=arr[index].caption
            updateBtn.style.display="inline-block"
            postBtn.style.display="none"

            indexStore=index
        })
    })
}

