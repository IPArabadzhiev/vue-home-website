import Vue from 'vue';

export default {
    data() {
        return {
            txt: { }
        }
    },

    async created() {
        const response = await Vue.http({
            method: 'GET',
            url: '/api/getTexts/' + this.package
        });

        this.txt = response.body;
    }
}