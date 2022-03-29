<template>
    <div class="packageModal">
        <div class="top">
            <h2>{{modalData}}</h2>
        </div>
        <div class="bottom">
            <template v-if="getPackageLoading">
                <div class="infoWrap">
                    <v-progress-circular
                        indeterminate
                        color="primary"
                    />
                </div>
            </template>
            <template v-else-if="getPackageError">
                <div class="infoWrap">
                    {{getPackageError}}
                </div>
            </template>
            <template v-else>
                <div class="content">
                    <div class="topPart">
                        <span class="title">BASE INFO:</span>
                        <div v-for="(key, index) in Object.keys(element)" :key="index" class="item">
                            <span class="name">{{key}}: </span>
                            <span class="value">{{element[key]}}</span>
                        </div>
                    </div>
                    <div class="bottomPart">
                        <span class="title">SERVER INFO:</span>
                        <div v-for="(key, index) in Object.keys(getPackageData)" :key="index" class="item">
                            <span class="name">{{key}}: </span>
                            <span class="value">{{getPackageData[key]}}</span>
                        </div>
                    </div>
                </div>
            </template>
        </div>
    </div>
</template>

<script>
import {mapGetters, mapActions} from 'vuex';

export default {
    name: 'PackageModal',

    props: {
        modalData: {
            type: String,
            required: true
        }
    },

    data: () => ({
        element: {
            name: '',
            type: ''
        }
    }),

    computed: {
        ...mapGetters([
            'getPackageList',
            'getPackageLoading',
            'getPackageError',
            'getPackageData'
        ])
    },

    beforeDestroy() {
        this.resetOnePackageAction();
    },

    created() {
        this.element = this.getPackageList.find(el => el.name === this.$props.modalData);
        console.log(this.element, 'elem');
        this.loadOnePackageAction({type: this.element.type, name: this.element.name})
    },

    methods: {
        ...mapActions([
            'getPackageOnName',
            'loadOnePackageAction',
            'resetOnePackageAction'
        ])
    },
}
</script>

<style lang="scss" scoped>
.packageModal{
    width: 100%;
    max-width: 480px;
    margin-left: 20px;
    margin-right: 20px;
    background: #FFFFFF;
    border-radius: 10px;
    .top{
        padding: 28px 35px;
        border-bottom: 1px solid #E0DFE3;
        h2{
            font-family: "Gilroy", sans-serif;
            font-style: normal;
            font-weight: bold;
            font-size: 20px;
            line-height: 24px;
            color: #08003B;
        }
    }
    .bottom{
        display: flex;
        align-items: center;
        padding: 20px 35px;
        min-height: 300px;
        .infoWrap{
            width: 100%;
            height: 100%;
            display: flex;
            justify-content: center;
            align-items: center;
        }
        .content{
            align-self: flex-start;
            width: 100%;
            .name{
                font-weight: 700;
                margin-right: 5px;
            }
            .title{
                font-weight: 700;
                text-align: center; 
                align-self: center;
            }
            .item{
                margin-top: 10px;
                margin-bottom: 10px;
                display: flex;
            }
            .topPart{
                display: flex;
                flex-direction: column;
                justify-content: center;
                align-items: flex-start;
                padding-bottom: 20px;
                border-bottom: 1px solid #E0DFE3;
            }
            .bottomPart{
                display: flex;
                flex-direction: column;
                justify-content: center;
                align-items: flex-start;
                margin-top: 20px;
            }
        }
    }
    &.mobile{
        .top{
            padding: 20px 25px;
            h2{
                font-size: 16px;
                line-height: 19px;
            }
        }
    }
}
</style>