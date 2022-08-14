<template>
    <div class="header">
        <nav class="navbar navbar-expand-lg navbar-light fixed-top">
            <!-- <a class="navbar-brand" href="#">Navbar</a> -->
            <button
                class="navbar-toggler"
                type="button"
                data-toggle="collapse"
                data-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent"
                aria-expanded="false"
                aria-label="Toggle navigation"
            >
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="container item-header">
                <div
                    class="collapse navbar-collapse"
                    id="navbarSupportedContent"
                >
                    <ul class="navbar-nav mr-auto">
                        <li class="nav-item active">
                            <router-link class="nav-link text-black" to="/"
                                ><h3>Home</h3>
                            </router-link>
                        </li>
                        <li class="nav-item">
                            <router-link class="nav-link text-black" to="/about"
                                ><h3>About</h3>
                            </router-link>
                        </li>
                        <li class="nav-item">
                            <router-link class="nav-link text-black" to="/info"
                                ><h3>Infor</h3>
                            </router-link>
                        </li>
                        <form class="form-inline my-2 my-lg-0">
                            <input
                                class="form-control mr-sm-2"
                                type="string"
                                placeholder="Search"
                                @input="onChangeMethod($event)"
                            />
                            <button
                                class="btn btn-outline-success my-2 my-sm-0"
                            >
                                Search
                            </button>
                        </form>
                    </ul>
                    <div class="cart">
                        <router-link to="/shopping-cart">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="30"
                                height="30"
                                fill="currentColor"
                                class="bi bi-cart3"
                                viewBox="0 0 16 16"
                            >
                                <path
                                    d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .49.598l-1 5a.5.5 0 0 1-.465.401l-9.397.472L4.415 11H13a.5.5 0 0 1 0 1H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM3.102 4l.84 4.479 9.144-.459L13.89 4H3.102zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"
                                />
                            </svg>
                            <span> {{ cart.length }}</span>
                        </router-link>
                    </div>
                </div>
            </div>
        </nav>
    </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

export default {
    name: 'Header',
    computed: {
        ...mapGetters(['searchValue', 'cart']),
    },
    methods: {
        ...mapActions(['changesFilterValue']),
        onChangeMethod(event) {
            console.log(event.target.value)
            this.changesFilterValue(event.target.value)
        },
    },
}
</script>

<style scope>
.header {
    background-color: rgb(108, 108, 255);
}

.item-header {
    padding: 10px 0px;
}

.cart svg {
    color: black;
    margin-top: 10px;
}

.cart span {
    color: black;
    margin-bottom: 10px;
}
</style>
