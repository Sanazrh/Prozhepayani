import AppHome from './components/shared/AppHome.vue'
import AppAbout from './components/shared/AppAbout.vue'
import AppInput from './components/shared/input.vue'
import AppCoop from './components/shared/cooperation.vue'
import AppFilm from './components/shared/films.vue'
import AppConsultant from './components/shared/consultants.vue'
import AppReservation from './components/shared/reservation.vue'
import AppSeminar from './components/shared/seminar.vue'
import AppPayment from './components/shared/payment.vue'
import AppDashboard from './components/shared/dashboard.vue'
import AppContact from './components/shared/contactPage.vue'
import AppRegister from './components/shared/register.vue'
import AppControl from './components/shared/control-panel.vue'

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
        path:'/control', 
        component: AppControl
    },
    {
        path:'/cooperation', 
        component: AppCoop
    },
    {
        path:'/films', 
        component: AppFilm
    },
    {
        path:'/consultant', 
        component: AppConsultant
    },
    {
        path:'/reservation', 
        component: AppReservation
    },
    {
        path:'/seminar', 
        component: AppSeminar
    },
    {
        path:'/contact', 
        component: AppContact
    },
    {
        path:'/register', 
        component: AppRegister
    },
            {
                path:'/payment', 
                component: AppPayment
            },
            {
                path:'/dashboard', 
                component: AppDashboard
            },
]