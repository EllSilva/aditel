import get_template from './get_template.js'

export default {
    data: function () {
        return { 
            showEsconder: false,
            showMostrar: true,

            type: false,
            showTrue: true,
            ativo: true,

            casaX: true,
            sobreX: false,
            equipeX: false,
            galariaX: false,
            portifolio: true


        }
    },
   
    
    
    methods: {

        
        mostrarMenu() {
            this.showTrue = false
            this.ativo = false

            this.showEsconder = true
            this.showMostrar = false

        },

        esconderMenu() {
            this.showTrue = true
            this.ativo = true 
            
            this.showEsconder = false
            this.showMostrar = true
        },
        

        casa() { 
            this.casaX = true,
            this.sobreX = false,
            this.equipeX = false,
            this.galariaX = false,
            this.esconderMenu()
        },

        sobre() { 
              this.casaX = false,
                this.sobreX = true,
                this.equipeX = false,
                this.galariaX = false,
                this.esconderMenu()
        },

        equipe() { 
            this.casaX = false,
                this.sobreX = false,
                this.equipeX = true,
                this.galariaX = false,
                this.esconderMenu()
        },

        galaria() { 
            this.casaX = false,
                this.sobreX = false,
                this.equipeX = false,
                this.galariaX = true,
                this.esconderMenu()
        },
   
        
    },
 
    

    template: await get_template('./assets/js/components/menu')
}