const cont = document.querySelector("#container");

for (i = 0; i < 16; i++) {
    const row = document.createElement("div");

        row.addEventListener("mouseover", (event) => {

            event.target.style.backgroundColor = "#ff8653";
            
            });
                for(j = 0; j < 16; j++) {
                const col = document.createElement("div");  
                col.style.width = "30px";  
                col.style.height = "30px";
                col.style.backgroundColor = "#fffff";
                col.style.border = "0.5px solid grey";
                row.appendChild(col);
                
            
                    }
                    cont.appendChild(row);
                }




    const btn = document.querySelector("#new");
    btn.addEventListener("click", (event) => {
        let person = prompt("enter new size max 100");
        if(person >= 100){
            prompt("to big try again");
        } 

    });


    


