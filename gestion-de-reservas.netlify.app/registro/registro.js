

registrar=() =>{
    
    const form= document.getElementById("form");
    const email= document.getElementById("email").value;
    const password= document.getElementById("contraseña").value;
    const rnombre= document.getElementById("rnombre").value;
    const rapellido= document.getElementById("rapellido").value;
    const rdomicilio= document.getElementById("rdomicilio").value;
    const rdni= document.getElementById("rdni").value;
    

   
    const expresiones = {
      /*  user:  /[A-Za-z0-9]{1,30}/,*/
        cuenta: /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/ ,
        pass: /^(?=(?:.*[A-Z]){1})(?=(?:.*[a-z]){1})\S{8,}$/, 
        rnombre: /^[A-z]/  ,
        rapellido: /^[A-z]/ ,
        rdomicilio: /^([a-zA-Z_\s]{1,}\d{1,})+|(\d{1,}[a-zA-Z_]{1,})+$ / ,   
        dni: /[1-9]{8,9}/ }
    
        
        if( ! expresiones.rnombre.test(rnombre)){
            swal({
                title: "Nombre no valido",
                text: "",
                icon: "warning",
                button: "Volver a ingresar dato",
              });
            return;
             } 
        if( ! expresiones.rapellido.test(rapellido)){
            swal({
                title: "Apellido no valido",
                text: "",
                icon: "warning",
                button: "Volver a ingresar dato",
              });
            return;
             } 
        if( ! expresiones.rdomicilio.test(rdomicilio)){
            swal({
                title: "domicilio no valido",
                text: "",
                icon: "warning",
                button: "Volver a ingresar dato",
              });
            return;
             } 

        if( ! expresiones.dni.test(rdni)){
            swal({
                title: "Dni no valido",
                text: "",
                icon: "warning",
                button: "Volver a ingresar dato",
              });
            return;
             } 

class Usuario{
    email;
    password;
    turnos;
    conectado;
    constructor(email, password){
        this.email = email;
        this.password = password;
        this.turnos="";
        this.conectado="";
    }
}

   form.addEventListener("submit", function(event){

        event.preventDefault();
    })
    
let  listaUsuarios = JSON.parse (localStorage.getItem('usuarios'));
let admin = new Usuario("administrador@hotmail.com", "Administrador","","");

if(listaUsuarios == null){
    listaUsuarios = new Array();
    listaUsuarios.push(admin);
    localStorage.setItem('usuarios',JSON.stringify(listaUsuarios));
}

let user = new Usuario(email, password);

for(u of listaUsuarios){

    if(u.email == email){
        swal({
            title: "Usuario ya existente",
            text: "",
            icon: "warning",
            button: "Volver a ingresar dato",
          });  
        return; }

    if(u.email == email || email =="administrador@hotmail.com") {
        swal({
            title: "Usuario ya existente",
            text: "",
            icon: "warning",
            button: "Volver a ingresar dato",
          });  
        return; }
       if( ! expresiones.cuenta.test(email)){
        swal({
            title: "Email no valido",
            text: "",
            icon: "warning",
            button: "Volver a ingresar dato",
          });
        return;
         } 

   /* if( ! expresiones.user.test(usuario)){
       alert("Usuario no valido")
        return; }*/
   
    if( ! expresiones.pass.test(password)){
    swal({
        title: "Password no valido, debe tener como minimo 8 caracteres y una mayuscula",
        text: "",
        icon: "warning",
        button: "Volver a ingresar dato",
      });
    return;
     } 
   
}

swal({
    title: "Registro exitoso",
    text: "",
    icon: "success",
    button: "Volver a ingresar dato",
  });  






listaUsuarios.push(user);

localStorage.setItem('usuarios',JSON.stringify(listaUsuarios));

for(u of listaUsuarios){
    if(u.email == email){
       u.conectado="true";
       localStorage.setItem('usuarios',JSON.stringify (listaUsuarios));
        return; }
}

}



 //test()	Prueba una coincidencia en una cadena. Devuelve true o false

validartarjeta=()=>{
    const formularioTarjeta= document.getElementById("contenedor-formulario-tarjeta");
    const furmularioPrincipal= document.getElementById("contenedor-formulario-principal");

    const numeroTarjeta= document.getElementById("tarjeta").value;
    const formnombres= document.getElementById("tnombres").value;
    const formcodigo= document.getElementById("codigo").value;

    const expresiones = {
        nombres: /^[a-z]/  ,
        tarjeta: /[1-9]{16}/,    
        codigo: /[1-9]{3}/
    }

    if( ! expresiones.tarjeta.test(numeroTarjeta)){
        swal({
            title: "Tarjeta no valida",
            text: "",
            icon: "warning",
            button: "Volver a ingresar dato",
          });
        return;
         } 
     if( ! expresiones.nombres.test(formnombres) || formnombres!= rnombre.value + " " + rapellido.value){
        swal({
            title: "La tarjeta debe pertenecer al paciente registrado",
            text: "",
            icon: "warning",
            button: "Volver a ingresar dato",
          });
        return;
         }           
      if( ! expresiones.codigo.test(formcodigo)){
        swal({
            title: "Codigo no valido",
            text: "",
            icon: "warning",
            button: "Volver a ingresar dato",
          });
        return;
         }   
                 
    else{formularioTarjeta.style.display="none";
    furmularioPrincipal.style.display="";
    titulo.innerHTML="Crea tu cuenta";
   
    }

    


}



validarTarjetaBancaria=()=>{
    const formularioTarjetaMercado= document.getElementById("contenedor-formulario-tarjeta-mercado");
    const furmularioPrincipal= document.getElementById("contenedor-formulario-principal");
    const formularioTarjeta= document.getElementById("contenedor-formulario-tarjeta");
    const formularioBancaria= document.getElementById("contenedor-formulario-tarjeta-bancaria");

    const numeroBancaria= document.getElementById("numero-bancaria").value;
    const nombrebancaria= document.getElementById("nombre-bancaria").value;
    const expresiones = {
        /*  user:  /[A-Za-z0-9]{1,30}/,*/
        nombres: /^[a-z]/  ,
             codigo: /[1-9]{20}/, }


          if( ! expresiones.codigo.test(numeroBancaria)){
            swal({
                title: "Cuenta invalida",
                text: "",
                icon: "warning",
                button: "Volver a ingresar dato",
              });  
             return; } 

             if( ! expresiones.nombres.test(nombrebancaria)){
                swal({
                    title: "Cuenta invalida",
                    text: "",
                    icon: "warning",
                    button: "Volver a ingresar dato",
                  });  
                 return; } 
                
                 if( ! expresiones.nombres.test(nombrebancaria) || nombrebancaria!= rnombre.value+" "+rapellido.value){
                    swal({
                        title: "La cuenta debe pertenecer al paciente registrado",
                        text: "",
                        icon: "warning",
                        button: "Volver a ingresar dato",
                      });  
                     return; } 
                 
        else{
            formularioTarjeta.style.display="none";
            furmularioPrincipal.style.display="";
            formularioBancaria.style.display="none";
            formularioTarjetaMercado.style.display="none";
            titulo.innerHTML="Crea tu cuenta";
}


}

validarTarjetaMercado=()=>{
    const formularioTarjetaMercado= document.getElementById("contenedor-formulario-tarjeta-mercado");
    const furmularioPrincipal= document.getElementById("contenedor-formulario-principal");
    const formularioTarjeta= document.getElementById("contenedor-formulario-tarjeta");
    const formularioBancaria= document.getElementById("contenedor-formulario-tarjeta-bancaria");

    const numeroTarjeta= document.getElementById("cuenta-mercado").value;
    const expresiones = {
        /*  user:  /[A-Za-z0-9]{1,30}/,*/
          cuenta: /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/ ,   }


          if( ! expresiones.cuenta.test(numeroTarjeta)){
            swal({
                title: "cuenta erronea",
                text: "",
                icon: "warning",
                button: "Volver a ingresar dato",
              });  
             return; } 

        else{
            formularioTarjeta.style.display="none";
            furmularioPrincipal.style.display="";
            formularioBancaria.style.display="none";
            formularioTarjetaMercado.style.display="none";
            titulo.innerHTML="Crea tu cuenta";
}


}





formularioTarjeta=()=>{
    const titulo= document.getElementById("titulo");
     const formularioTarjeta= document.getElementById("contenedor-formulario-tarjeta");
    const furmularioPrincipal= document.getElementById("contenedor-formulario-principal");
    const formularioTarjetaMercado= document.getElementById("contenedor-formulario-tarjeta-mercado");
    const formularioBancaria= document.getElementById("contenedor-formulario-tarjeta-bancaria");
   

    formularioTarjeta.style.display="";
    furmularioPrincipal.style.display="none";
    formularioTarjetaMercado.style.display="none";
    formularioBancaria.style.display="none";
    titulo.innerHTML="Tarjeta de credito";
    
    
}

formularioMercadopago=()=>{
    const titulo= document.getElementById("titulo");
     const formularioTarjeta= document.getElementById("contenedor-formulario-tarjeta");
    const furmularioPrincipal= document.getElementById("contenedor-formulario-principal");
    const formularioTarjetaMercado= document.getElementById("contenedor-formulario-tarjeta-mercado");
    const formularioBancaria= document.getElementById("contenedor-formulario-tarjeta-bancaria");
   

    formularioTarjeta.style.display="none";
    furmularioPrincipal.style.display="none";
    formularioBancaria.style.display="none";
    formularioTarjetaMercado.style.display="";
    titulo.innerHTML="Mercado Pago";

}

formularioBancaria=()=>{
    const titulo= document.getElementById("titulo");
    const formularioTarjeta= document.getElementById("contenedor-formulario-tarjeta");
   const furmularioPrincipal= document.getElementById("contenedor-formulario-principal");
   const formularioBancaria= document.getElementById("contenedor-formulario-tarjeta-bancaria");
   const formularioTarjetaMercado= document.getElementById("contenedor-formulario-tarjeta-mercado");

   formularioTarjeta.style.display="none";
   furmularioPrincipal.style.display="none";
   formularioBancaria.style.display="";
   formularioTarjetaMercado.style.display="none";
   titulo.innerHTML="Cuenta bancaria";

}

volveratras=(b)=>{
    const titulo= document.getElementById("titulo");
    const formularioTarjeta= document.getElementById("contenedor-formulario-tarjeta");
    const furmularioPrincipal= document.getElementById("contenedor-formulario-principal");
    const formularioTarjetaMercado= document.getElementById("contenedor-formulario-tarjeta-mercado");
    const formularioBancaria= document.getElementById("contenedor-formulario-tarjeta-bancaria");

    formularioTarjeta.style.display="none";
    formularioTarjetaMercado.style.display="none";
    formularioBancaria.style.display="none";
    furmularioPrincipal.style.display="";
    titulo.innerHTML="Crea tu cuenta";


}