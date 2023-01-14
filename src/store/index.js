import { createStore } from 'vuex'
import movies from '../modules/movies'
import seats from '../modules/seats'
import history from '../modules/history'

export default createStore({
    modules: {
        movies,
        seats,
        history,
    },
})