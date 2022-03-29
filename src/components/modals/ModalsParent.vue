<template>
    <div class="modal" :class="{active: showModal}" @click.self="closeModal">
        <package-modal
            v-if="getCurrentModal.modalType === 'packageModal'" 
            class="inner"
            :modalData="getCurrentModal.modalData"
            :class="{mobile: getIsMobile}"
            @closeModal="closeModal"
        />
    </div>
</template>

<script>
import {mapGetters, mapActions} from 'vuex';

import PackageModal from './PackageModal.vue';

export default {
    name: 'ModalsParent',

    data: () => ({
        showModal: false
    }),

    components: {
        PackageModal,
    },

    computed: {
        ...mapGetters([
            'getIsMobile',
            'getCurrentModal'
        ]),
    },

    mounted() {
        document.body.classList.add('openModal');
        setTimeout(() => {
            this.showModal = true;
        }, 50);
    },

    beforeDestroy() {
        document.body.classList.remove('openModal');
    },

    methods: {
        ...mapActions({
            hideModalAction: 'hideModalAction'
        }),
        closeModal() {
            this.showModal = false;
            setTimeout(() => {
                this.hideModalAction();
            }, 250);
        }
    }
}
</script>

<style lang="scss" scoped>
.modal{
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 120;
    display: flex;
    justify-content: center;
    align-items: center;
    background: rgba(0,0,0,0);
    backdrop-filter: blur(0);
    -webkit-backdrop-filter: blur(0);
    opacity: 0;
    transition: .25s;
    &.active{
        opacity: 1;
        background: rgba(0,0,0,.8);
        backdrop-filter: blur(15px);
        -webkit-backdrop-filter: blur(15px);
        .inner{
            transform: scale(1);
            opacity: 1;
        }
    }
    .inner{
        transition: .25s;
        opacity: 0;
        transform: scale(.8);
        max-height: 80vh;
        overflow: auto;
        &::-webkit-scrollbar {
            width: 0;
            background: transparent;
        }
        &::-webkit-scrollbar-thumb {
            background: transparent;
        }
    }
}
</style>