<template>
    <div class="searchInput">
        <v-autocomplete
            @change="selectPackage"
            v-model="value"
            :items="getPackageList.map(el => el.name)"
            filled
            :hide-details="true"
            label="Search package"
        ></v-autocomplete>
    </div>
</template>

<script>
import {mapGetters, mapActions} from 'vuex';

export default {
    name: 'SearchInput',

    data: () => ({
        value: ''
    }),

    computed: {
        ...mapGetters([
            'getPackageList'
        ])
    },

    methods: {
        ...mapActions([
            'showModalAction'
        ]),
        selectPackage(name) {
            if (name) this.showModalAction({modalShow: true, modalType: 'packageModal', modalData: name});
        }
    }
}
</script>

<style lang="scss" scoped>
.searchInput{
    height: 100%;
    width: 40%;
}
</style>