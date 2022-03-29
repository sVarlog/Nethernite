<template>
    <v-app-bar app height="80" color="primary" dark>
        <v-container class="d-flex align-center">
            <div class="d-flex align-center">
                <v-img
                    alt="Vuetify Logo"
                    class="shrink mr-2"
                    contain
                    src="https://cdn.vuetifyjs.com/images/logos/vuetify-logo-dark.png"
                    transition="scale-transition"
                    width="40"
                />
        
                <v-img
                    alt="Vuetify Name"
                    class="shrink mt-1 hidden-sm-and-down"
                    contain
                    min-width="100"
                    src="https://cdn.vuetifyjs.com/images/logos/vuetify-name-dark.png"
                    width="100"
                />
            </div>
        
            <v-spacer></v-spacer>
        
            <Search-input />
        </v-container>
    </v-app-bar>
</template>

<script>
import SearchInput from './ui/SearchInput';
    
export default {
    name: 'Header',
    components: {
        SearchInput
    }
}
</script>