import get_template from './get_template.js'

export default {
    data: function () {
        return {
            isActive: false,
            dropActive1: false,
            dropActive2: false,
            dropActive3: false,
            dropActive4: false,
            showEsconder: false,
 
        }
    },



    methods: {


        mostrarMenu(type = true) {
            this.isActive = (this.isActive == type) ? false : type;
        },

        mostrarDop1(type = true) {
            this.dropActive1 = (this.dropActive1 == type) ? false : type;
        },
        mostrarDop2(type = true) {
            this.dropActive2 = (this.dropActive2 == type) ? false : type;
        },
        mostrarDop3(type = true) {
            this.dropActive3 = (this.dropActive3 == type) ? false : type;
        },

        mostrarDop4(type = true) {
            this.dropActive4 = (this.dropActive4 == type) ? false : type;
        },



        esconderMenu() {
         this.isActive = false;
         this.dropActive1 = false;
         this.dropActive2 = false;
         this.dropActive3 = false;
         this.dropActive4 = false;
        },
       
    },



    template: await get_template('./assets/js/components/menu')
}