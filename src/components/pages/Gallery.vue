<template>
    <div>
        <app-gallery></app-gallery>
    </div>
</template>

<script>
import Gallery from '@/components/shared/Gallery.vue';
import pageMixins from '@/mixins/pageMixins';


export default {
    components: {
        appGallery: Gallery
    },
    data () {
        return {
            package: 'gallery',
            msg: 'Home | Gallery'
        }
    },
    mixins: [pageMixins]
}
</script>
