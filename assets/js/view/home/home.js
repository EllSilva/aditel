import get_template from '../../components/get_template.js'

export default {
  data: function () {
    return {
      tamanho: 3,
    }
  },
  methods: {

  },
 
  async mounted() {

  new Glide('.cabelario_glide', {
      type: 'carousel',
      autoplay: 3000,
      perView: 1,
      gap: 20
    }).mount();

    
    new Glide('.destague_glide', {
      type: 'carousel',
      autoplay: 3500,
      perView: this.tamanho,
      gap: 20
    }).mount();

    
  
  },

  template: await get_template('./assets/js/view/home/home')
}