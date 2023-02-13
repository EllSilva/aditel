import get_template from '../../components/get_template.js'

export default {
    data: function () {
        return {
            jms1: null,
            jms2: null,
            jms4: null,
            jms3: null,
            jms5: null,
            jms6: null,
            jms7: null,
            jms8: null,
            jms9: null,
    }
   
},
 

    mounted() { 

 
    },
    
    template: await get_template('./assets/js/view/info_mult/telefone')
}