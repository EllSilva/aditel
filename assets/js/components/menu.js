import get_template from './get_template.js'

export default {
    data: function () {
        return { 
            isActive: false,
            dropActive1: false,
            dropActive2: false,

            showEsconder: false,

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

        
        mostrarMenu(type) { 
         this.isActive = (this.isActive == type) ? true : type ; 
        },

        mostrarDop1(type) { 
            this.dropActive1 = (this.dropActive1 == type) ? true : type ; 
           },
           mostrarDop2(type) { 
            this.dropActive2 = (this.dropActive2 == type) ? true : type ; 
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