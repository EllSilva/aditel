import http from './http.js'

export default {
 
    async enviarmail( 
       nome,
       email,
       assunto,
       telef,
       produto,
       endereco,
       mensagem ) { 
        return await http.post('/sedmail', {
           nome,
           email,
           assunto,
           telef,
           produto,
           endereco,
           mensagem
        })
    },
  
}   