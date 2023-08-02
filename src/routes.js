import AppHome from './components/shared/AppHome.vue'
import AppAbout from './components/shared/AppAbout.vue'
import AppInput from './components/shared/input.vue'
import AppCoop from './components/shared/cooperation.vue'
import AppFilm from './components/shared/films.vue'

export const Routes=[
    {
        path:'/',
        component: AppHome
    },
    {
        path:'/about',
        component: AppAbout
    },
    {
        path:'/input', 
        component: AppInput
    },
    {
        path:'/cooperation', 
        component: AppCoop
    },
    {
        path:'/films', 
        component: AppFilm
    }
]