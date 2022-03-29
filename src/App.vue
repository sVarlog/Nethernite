<template>
	<v-app>
		<Header />
		<v-main>
			<MainPage />
		</v-main>
		<Footer />
		<ModalsParent v-if="getCurrentModal.modalShow"/>
	</v-app>
</template>

<script>
import {mapActions, mapGetters} from 'vuex';

import Footer from './components/Footer';
import Header from './components/Header';
import MainPage from './components/MainPage';
import ModalsParent from './components/modals/ModalsParent';

export default {
	name: 'App',

	components: {
		Footer,
		Header,
		MainPage,
		ModalsParent
	},

	computed: {
		...mapGetters([
			'getCurrentModal'
		])	
	},

	created() {
		this.loadPackagesAction();
		this.setCurrentWidthAction(Number(document.documentElement.clientWidth));
		window.onresize = () => this.setCurrentWidthAction(Number(document.documentElement.clientWidth));
	},

	methods: {
		...mapActions([
			'loadPackagesAction',
			'setCurrentWidthAction'
		])
	},
};
</script>

<style lang="scss">
.openModal{
	position: fixed;
	overflow: hidden;
}
</style>

<style lang="scss" scoped>
.shrink{
	width: 2000px;
}
</style>