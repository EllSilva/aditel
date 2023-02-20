import get_template from '../../components/get_template.js'
import api from "../../services/jms.js";

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
            error: "",
            msg: "",
        }
    },
    methods: {

        async salvarEmail() {
            this.error = null;

            // localStorage.removeItem('token')
            let res = await api.enviarmail(

                this.nome,
                this.email,
                this.assunto,
                this.telef,
                this.produto,
                this.endereco,
                this.mensagem
            )
             
            
            if (!res.messageId) {
             
              iziToast.error({
                title: "Error",
                message: "Erro Ao enviar o email",
                position: "bottomCenter",
              });
              return null;
            }
      
        
            iziToast.success({
              title: "OK",
              message: "email enviado com sucesso",
              position: "bottomCenter",
            });

        
        },
    },



    mounted() {


    },

    template: await get_template('./assets/js/view/contacto/home')
}