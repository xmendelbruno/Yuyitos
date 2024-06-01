$(document).ready(function(){
    $("#registro").submit(function(event){
        event.preventDefault();

        var correo = $("#correo").val();
        var contraseña = $("#contraseña").val();
        var nombre = $("#nombre").val();
        var apellido = $("#apellido").val();
        var rut = $("#rut").val();
        var genero = $("#genero").val();
        var edad = $("#edad").val();

        if(correo.length < 10 || correo.length > 40 ){
            alert("El correo invalido");
            return;
        }

        if(contraseña.length < 9 || contraseña.length > 12){
            alert("La contraseña debe tener entre 9 y 12 caracteres");
        }

        if(nombre.length < 3 || nombre.length > 20 ||
            apellido.length < 3 || apellido.length > 20){
            alert("El Nombre y el apellido deben tener entre 3 y 20 caracteres");
            return;
        }

        if(rut.length < 9 || rut.length > 12){
            alert("El Rut debe tener entre 9 y 12 caracteres.");
            return;
        }

        if(genero === ""){
            alert("Por favor, seleccione un genero");
            return;
        }

        if(edad < 18 || edad > 100){
            alert("debes ser mayor de 18");
            return;
        }

        alert("¡Registro exitoso!");
    })
})

$(document).ready(function(){
    $("#provee").submit(function(event){
        event.preventDefault();

        var nombre = $("#nombre").val();
        var rut = $("#rut").val();
        var contacto = $("#contacto").val();

        if(nombre.length < 3 || nombre.length > 20){
            alert("El Nombre debe tener entre 3 y 20 caracteres");
            return;
        }

        if(rut.length < 9 || rut.length > 12){
            alert("El Rut debe tener entre 9 y 12 caracteres.");
            return;
        }

        if(contacto.length < 9 || contacto.length > 12){
            alert("El Contacto debe tener entre 9 y 12 caracteres.");
            return;
        }

        alert("¡Registro exitoso!");
        
    })
})


