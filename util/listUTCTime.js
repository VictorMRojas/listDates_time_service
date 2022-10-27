// Listamos los atributos que personalmente consideramos necesarios para hacer la sincronización entre maquinas, o minimamente realizar un ejemplo
// Pretendemos sincronizar todas las maquinas al horario UTC
function listUTCTime() {
    const date = new Date();
    
    return {
        NOW: date.getTime(),
        ISO_STRING: date.toISOString(),
        UTC: date.getUTCDate(),
        UTC_SECONDS: (date.getTime() + date.getTimezoneOffset()*60*1000)/1000,
        UTC_MILISECONDS: new Date(Date.now()+(new Date().getTimezoneOffset()*60000)).getTime(),
    }
}

export { listUTCTime }
