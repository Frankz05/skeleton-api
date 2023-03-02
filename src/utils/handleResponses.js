//? Respuestas exitosas
const success = ({status, data, message, res}) => {
    res.status(status).json({
        error: false,
        status: status,
        message: message,
        data: data
    })
}
//? Respuestas de errores
const error = ({status, data, message, res, fields}) => {
    res.status(status).json({
        error: true,
        status: status,
        message: message,
        fields: fields 
    })
}


//? Error de conexión
//? Not found
//? Errores de sintaxis
//? Errores en peticiones creaccionales

module.exports = {
    success, 
    error
}