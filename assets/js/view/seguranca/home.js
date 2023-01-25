import get_template from '../../components/get_template.js'

export default {
    data: function () {
        return {
            jms: "todos",
            todos: true,
            crecheX: false,
            eventoX: false,
            festaX: false,
            portifolio: true
        }
    },
   
    
    
    methods: {

        todas() {
            this.jms = "todos",
            this.todos = true,
            this.crecheX = false,
            this.eventoX = false,
            this.festaX = false
        },

        creche() {
            this.jms = "creche",
              this.todos = false,
                this.crecheX = true,
                this.eventoX = false,
                this.festaX = false
        },

        evento() {
            this.jms = "evento",
            this.todos = false,
                this.crecheX = false,
                this.eventoX = true,
                this.festaX = false
        },

        festa() {
            this.jms = "festa",
            this.todos = false,
                this.crecheX = false,
                this.eventoX = false,
                this.festaX = true
        },
   
        
    },

    mounted() { 

 
    },
    
    template: await get_template('./assets/js/view/seguranca/home')
}