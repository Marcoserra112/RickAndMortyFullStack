const validation = (dataForm) => {
    const errors = {};
    const regexEmail =  /^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/ ; 
    const regexp_password = /^(?=\w*\d)(?=\w*[A-Z])(?=\w*[a-z])\S{8,16}$/;
    if(!regexEmail.test(dataForm.email)){
        errors.email = 'Debe ser un email valido'
    }

    if(!dataForm.email){
        errors.email = 'No puede ser vacio'
    }

    if(dataForm.email.length > 35 ){
        errors.email = 'Debe tener menos de 35 caracteres'
    }

    if(!regexp_password.test(dataForm.password)){
        errors.password = 'La contraseña debe tener al entre 8 y 16 caracteres, numeros, minusculas y mayusculas ';
    }

    return errors;
    
}
 
export default validation;