function myFunction(btnPage, pages)
{
    console.log(btnPage)
    console.log(pages)

    var modal = document.getElementById("myModal");

    // Get the button that opens the modal
    var divWeather = document.getElementById("div"+pages);
    var divContent = document.getElementById("modelContent");
    // When the user clicks the button, open the modal 
    btnPage.onclick = function() {     
        divContent.innerHTML = divWeather.innerHTML;
        modal.style.display = "block";  
    }

    var btn = document.getElementById("btnClose");
        btn.onclick = function() {   
        modal.style.display = "none";
    }

    // When the user clicks anywhere outside of the modal, close it
    window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    }
}
function btnIntroClick(btn)
{
    console.log(inputName);
    if (btn.style.display != 'none'){    
        let name =document.getElementById('inputName').value;    
        console.log(name)
       document.getElementById('introMsg').innerText = `Nice to meet you ${name} !Thanks for introducing yourself`;
       btn.style.display = 'none';
    }
}

