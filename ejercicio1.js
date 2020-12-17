

function logIn(user, pass){

    switch (true) {
        case user !=="admin" && pass !== 1234 :
            console.log("Usuario y contraseña incorrectos")
            break;
        case user !== "admin" && pass == 1234 :
            return ("Usuario incorrecto")
            break;
        case user == "admin" && pass == 1234 :
            return("Bienvenido a nuestro sitio!")
            break;
        case user == "admin" && pass !== 1234 :
            return("Contraseña incorrecta")
            break ;
        case user == null||pass == null :
        return("Debe ingresar los datos requeridos") 
            
    }
}

    console.log(logIn("Pepe", 5482))
    console.log(logIn("admin", 1234))
    console.log(logIn("Mauro", 1234))
    console.log(logIn("admin", 1233))
    console.log(logIn())
    
    
