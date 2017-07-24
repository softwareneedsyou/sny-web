id = $("#profilUserId").html();
console.log(id);
getUser(id)
    .then(function(data){
        $("#profilUsername").html ( data.username );
        $("#profilLastname").html ( data.lastname );
        $("#profilFirstname").html ( data.firstname );
        $("#profilEmail").html ( data.email );
        
        var img = document.createElement("img");
        img.classList.add("obj");
        img.file = picture;
        img.setAttribute("style", "height : 400px; width : 400px;");
        img.setAttribute("src", picture.webkitRelativePath);
        $("#profilPicture").append(img);
    
        var reader = new FileReader();
        reader.onload = (function(aImg) { 
            return function(e) 
            { aImg.src = e.target.result; 
            }; 
        })(img);
        reader.readAsDataURL(picture);
    
    }).catch(function(){
        console.log("Fail load data users");
    });