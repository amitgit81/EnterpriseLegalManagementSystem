////////////////////     GET request in AJAX        ///////////////////////////

// let getData = document.getElementById('getData');  //here 'getData' is id. and getData is variable which holds/selects returned html element.
// //console.log(getData);

// getData.addEventListener('click', function (){
//     //console.log("Hi, I am Amit");

//     let xhr = new XMLHttpRequest();
//     //console.log(xhr);

//     xhr.open('GET','loadData.txt', true);

//     xhr.onprogress = function(){
//         console.log("I am progressing");
//     }

//     xhr.onreadystatechange = function(){
//         console.log("request state: "+xhr.readyState);
//     }

//     xhr.onload = function(){
//         if(this.status==200){
//             console.log(this.responseText);
//         }
//         else{
//             console.log("Page not found");
//         }
//     }

//     xhr.send();
//     console.log("Last line of the block");
// });


// ////////////////            POST request in AJAX             ///////////////////////////////

let getData = document.getElementById('getData');               //here 'getData' is id. and getData is variable which holds/selects returned html element.

getData.addEventListener('click', function (){
    let xhr = new XMLHttpRequest();
   xhr.open('POST','https://fakestoreapi.com/products', true);

    xhr.onprogress = function(){
        console.log("I am progressing");
    }

    xhr.onreadystatechange = function(){
        console.log("request state: "+xhr.readyState);
    }

    xhr.onload = function(){
        if(this.status == 200 || this.status == 201){
            console.log(this.responseText);
        }else{
            console.log("Page not found");
        }
    }
    
    let data = { title: "Product Price"};

    xhr.send(data);
    console.log("Last line of the block");
});