let getData = document.getElementById('getData');               //here 'getData' is id. and getData is variable which holds/selects returned html element.

getData.addEventListener('click', ()=>{
    let xhr = new XMLHttpRequest();
    xhr.open('GET','https://fakestoreapi.com/products',true)

    xhr.onprogress = function(){
        console.log("I am progressing");
    }

    xhr.onreadystatechange = function(){
        console.log("ready status: "+xhr.readyState);
    }

    xhr.onload = function(){
        if(this.status == 200 || this.status == 201){
            
            let objectData = JSON.parse(this.responseText);
            let data = "";
            
            let table_data = document.getElementById('table_data');
            data = `<thead class="table table-dark">
                        <tr>
                            <th scope="col">Title</th>
                            <th scope="col">Price</th>
                            <th scope="col">Image</th>
                        </tr>
                    </thead>`;

                

            for(value in objectData){
                data += `<tr>
                    <td>${objectData[value].title}</td>
                    <td>${objectData[value].price}</td>
                    <td><img src="${objectData[value].image}" style="width:100px"></td>
                </tr>`;
            }
            table_data.innerHTML = data;

        }else{
            console.log("Custom Error: Page not found");
        }
    } 

    xhr.send();
})