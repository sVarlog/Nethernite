<template>
    <v-container class="wrap">
        <template v-if="getLoading">
            <div class="loaderWrap">
                <v-progress-circular
                    indeterminate
                    color="primary"
                />
            </div>
        </template>
        <template v-else-if="getError">
            <div class="loaderWrap">
                <strong>{{getError}}</strong>
            </div>
        </template>
        <template v-else>
            <div class="packageWrap">
                <h2>Popular packages list</h2>
                <div class="packageList">
                    <v-row class="packageListRow">
                        <v-col cols="6" v-for="pack in paginatedFilteredList" :key="pack.name">
                            <v-card class="mx-auto mb-4" tile>
                                <v-list-item three-line>
                                    <v-list-item-content>
                                        <v-list-item-title><strong>{{pack.name}}</strong></v-list-item-title>
                                        <v-list-item-subtitle>
                                            {{pack.type}}
                                        </v-list-item-subtitle>
                                        <v-list-item-subtitle>
                                            <v-btn class="mt-2" color="primary" elevation="2" @click="showModal(pack.name)">Open details</v-btn>
                                        </v-list-item-subtitle>
                                    </v-list-item-content>
                                </v-list-item>
                            </v-card>
                        </v-col>
                    </v-row>
                </div>
                <v-pagination
                    v-if="(getPackageList.length / postsPerPage) > 2"
                    v-model="page"
                    :length="getPages"
                ></v-pagination>
            </div>
        </template>
    </v-container>
</template>

<script>
import {mapGetters, mapActions} from 'vuex';

export default {
    name: 'MainPage',

    data: () => ({
        page: 1,
        postsPerPage: 10
    }),

    computed: {
        ...mapGetters([
            'getLoading',
            'getError',
            'getPackageList',
            'getCurrentModal'
        ]),
        paginatedFilteredList() {
            const newList = [];
            for (let i = 1; i <= this.postsPerPage; i++) {
                newList.push(this.getPackageList[(i * this.page) - 1]);
            }
            return newList;
        },
        getPages() {
            return this.getPackageList.length / this.postsPerPage
        }
    },

    methods: {
        ...mapActions([
            'showModalAction'
        ]),
        showModal(name) {
            console.log('show modal', name);
            this.showModalAction({modalShow: true, modalType: 'packageModal', modalData: name});
            console.log(this.getCurrentModal);
        }
    }
}
</script>

<style lang="scss" scoped>
.wrap{
    min-height: calc(100vh - 80px);
    align-items: center;
    display: flex;
    .loaderWrap{
        height: 100%;
        width: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
    }
    .packageWrap{
        display: flex;
        flex-direction: column;
        width: 100%;
        min-height: calc(100vh - 120px);
        justify-content: space-between;
        h2{
            text-align: center;
            margin-bottom: 25px;
        }
    }
}
</style>