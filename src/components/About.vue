<template>
    <div>
        <h1 style="opacity: 0;">
            .
        </h1>
        <br>
        <h1>Giới thiệu</h1>
        <h2>{{ status }}</h2>
        <button @click="updateStatus('du lieu')">Change data to Store</button>
    </div>
</template>

<script>
import { mapGetters, mapMutations, mapActions } from 'vuex'
export default {
    name: 'About',
    computed: {
        ...mapGetters(['status']),
        //=> this.status
    },
    methods: {
        ...mapMutations(['setStatus']),
        //lấy hàm setStatus từ mutation của store  về component thành this
        //1. Cach lam thay đổi giá trị ko thông qua action
        // handleChange() {
        //     this.setStatus('Thay đổi dữ liệu của store')
        // },
        //2. Cach lam thay đổi giá trị  thông qua action
        ...mapActions(['updateStatus']),
    },
}
</script>

<style></style>
