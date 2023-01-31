import get_template from '../../components/get_template.js'

export default {
    data: function () {
        return {
            nome: null,
            email: null,
            assunto: null,
            telef: null,
            produto: null,
            endereco: null,
            mensagem: "", 
            todos_mensagem: [], 

        
        }
    },
    methods:{
       
        async enviar(e) {  
       
        },
    },

    mounted() { 

 
    },
    
    template: await get_template('./assets/js/view/contacto/home')
}