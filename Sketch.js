const cont = document.querySelector("#container");

function base(size) {
    
    for (i = 0; i < size; i++) {
    const row = document.createElement("div");

        row.addEventListener("mouseover", (event) => {
            
            event.target.style.backgroundColor = "#ff8653";
            });
             
                for(j = 0; j < size; j++) {
                const col = document.createElement("div");  
                col.style.width = "30px";  
                col.style.height = "30px";
                col.style.backgroundColor = "#fffff";
                col.style.border = "0.01px solid grey";
                row.appendChild(col);
                
            
                    }
                    cont.appendChild(row);
                }

            }
            base(16);

            
    const btn = document.querySelector("#new");
    btn.addEventListener("click", (event) => {
        let person = prompt("enter new size max 100");
        
        cont.innerHTML = "";
        
        for (i = 0; i < person; i++) {
            const nrow = document.createElement("div");
            nrow.addEventListener("mouseover", (event) => {
                
              
                event.target.style.backgroundColor = "#ff8653";
                
                });
                        const nsp = 480 / person;
                        for(j = 0; j < person; j++) {
                        const ncol = document.createElement("div");
                        ncol.style.width =  nsp + "px";   
                        ncol.style.height =  nsp + "px";
                        ncol.style.backgroundColor = "#fffff";
                        ncol.style.border = "0.01px solid grey";
                        nrow.appendChild(ncol);
                        
                      
                            }
                           
                            cont.appendChild(nrow);
                          
                        }
        if(person > 100){
            prompt("to big try again");
        } else if (person == null){
            alert("enter new size max 100");
            base(16);
        }

    });

    const btn2 = document.querySelector("#reset");

    btn2.addEventListener("click", (event) => {
        cont.innerHTML = "";
        base(16);
    });