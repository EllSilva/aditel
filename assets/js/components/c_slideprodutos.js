import get_template from './get_template.js'

export default {
    data: function () {
        return {
 
        }
    },
    
    
    mounted() {
        new Glide('.cabelario_glide_produto', {
            type: 'carousel',
            autoplay: 3000,
            perView: 1,
            gap: 20
          }).mount();
    },

    template: await get_template('./assets/js/components/c_slideprodutos')
}