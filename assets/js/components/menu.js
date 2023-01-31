import get_template from './get_template.js'

export default {
    data: function () {
        return {
            isActive: false,
            dropActive1: false,
            dropActive2: false,

            showEsconder: false,

          
           
        }
    },



    methods: {


        mostrarMenu(type = true) {
            this.isActive = (this.isActive == type) ? false : type;
        },

        mostrarDop1(type = true) {
            this.dropActive1 = (this.dropActive1 == type) ? true : type;
        },
        mostrarDop2(type = true) {
            this.dropActive2 = (this.dropActive2 == type) ? true : type;
        },


        esconderMenu() {
         this.isActive = false;
         this.dropActive1 = false;
         this.dropActive2 = false;
        },
       
    },



    template: await get_template('./assets/js/components/menu')
}