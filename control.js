function validarUsuario(form){
    let usuario=form.usuario
    if (usuario.value=="" || usuario.value.indexOf('@', 0)==-1){
        alert("Falta arroba en el usuario.")
        return false
    } else {
        return true
    }
}
function validarClave(form){
    let password=form.password
    if (password.value==""){
        alert("El campo Clave se encuentra vacio.")
        return false
    } else {
        return true
    }
}
function validar(form){
    if (validarUsuario(form) & validarClave(form)){
        alert("Todos los campo OK!")        

    }
}