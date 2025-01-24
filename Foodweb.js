
function myFun(){
    let searchVal = document.getElementById("inp").value.toUpperCase() ;
    let table = document.getElementsByTagName("table")
    let tr = document.getElementsByTagName("tr");

    let front = document.querySelector(".main")

    for(let i=0; i<tr.length; i++){
        let td = tr[i].getElementsByTagName("td")[0];
        if(td){
            let text = td.innerText;
            if(text.toLocaleUpperCase().indexOf(searchVal) > -1){
                tr[i].style.display="";
                front.style.display="none"
            }else{
                tr[i].style.display="none"
            }
        }
    }

    if(searchVal == ""){
        front.style.display="flex"
    }
    console.log(searchVal);
}



// function nav(){
//     let nav = document.querySelector(".nav");
//     nav.style.display="block"
//     let login = document.querySelector(".login");
//     login.style.display="none";

// }

// function login(){
//     let login = document.querySelector(".login");
//     login.style.display="block";

//     let nav = document.querySelector(".nav");
//     nav.style.display="none"

// }
let loginBtn = document.querySelector(".log");
let login = document.querySelector(".login");

let vis1=true;
loginBtn.addEventListener("click",()=>{
    if(vis1==true){
        login.style.display="block";
        vis1=false;
    }else{
        login.style.display="none";
        vis1=true;
    }
});
let navBtn = document.querySelector(".navigation");
let nav = document.querySelector(".nav");

let vis2=true;
navBtn.addEventListener("click",()=>{
    if(vis2==true){
        nav.style.display="block";
        vis2=false;
    }else{
        nav.style.display="none";
        vis2=true;
    }
});

// Slide bar

let slide = document.querySelectorAll(".customer");
let count = 0;
console.log(slide);

slide.forEach(function(customer, index){
    customer.style.left=`${index * 100}%`
})

function next(){
    count ++;
    if(count == slide.length){
        count=0;
    }
    bar()
}

function pre(){
    count--;
    if(count == -1){
        count = slide.length-1
    }
    bar()
}


function bar(){
    slide.forEach(function(customer){
        customer.style.transform = `translateX(-${count * 100}%)`
    })
}
 

