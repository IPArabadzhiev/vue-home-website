<template>
    <div>
        <app-gallery></app-gallery>
    </div>
</template>

<script>
import Gallery from '@/components/shared/Gallery.vue';

export default {

    name: 'Gallery',
    components: {
        appGallery: Gallery
    },
    data () {
        return {
            msg: 'Home | Gallery'
        }
    }
}
</script>
