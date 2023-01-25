import get_template from './get_template.js'

export default {
    data: function () {
        return {

            sobreActive: false,
            portifolioActive: false,
            habilidadeActive: false,
            contactoActive: false,
            blogActive: false,
            type: true,

            mobileView: true,
            showTrue: false,
            ativo: true,

            showEsconder: false,
            showMostrar: true,

             showDia: false,
            showNoite:  true,
        }
    },
    
    methods: {


        habilidade() {
            this.sobreActive = false,
                this.portifolioActive = false,
                this.habilidadeActive = true,
                this.contactoActive = false,
                this.blogActive = false,
                this.type = false
        },

        contacto() {
            this.sobreActive = false,
                this.portifolioActive = false,
                this.habilidadeActive = false,
                this.contactoActive = true,
                this.blogActive = false
        },

        blog() {
            this.sobreActive = false,
                this.portifolioActive = false,
                this.habilidadeActive = false,
                this.contactoActive = false,
                this.blogActive = true
        },
    },

    mounted() {

    },

    template: await get_template('./assets/js/components/footer')
}