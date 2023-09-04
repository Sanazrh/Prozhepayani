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


import editFilm from './components/shared/control/editFilm.vue'
import editAdmin from './components/shared/control/editAdmin.vue'
import editConsultant from './components/shared/control/editConsultant.vue'
import ConCseminar from './components/shared/control/creatSeminar.vue'
import fff from './components/shared/control/cooperationList.vue'
import reservationList from './components/shared/control/reservationList.vue'
import massageList from './components/shared/control/massageList.vue'
import chartseminar from './components/shared/control/chartseminar.vue'
import chartreserve from './components/shared/control/chartreserve.vue'
import ConTodo from './components/shared/control/todo.vue'

export const Routes=[
    {
        path:'/home',
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
        path:'/', 
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


     {
        path:'/editFilm', 
        component: editFilm
    },
    {
        path:'/editAdmin', 
        component: editAdmin
    },
    {
        path:'/editConsultant', 
        component: editConsultant
    },
    {
        path:'/creatSeminar', 
        component: ConCseminar
    },
    {
        path:'/cooperationList', 
        component: fff
    },
    {
        path:'/reservationList', 
        component: reservationList
    },
    {
        path:'/massageList', 
        component: massageList
    },
    {
        path:'/ConTodo', 
        component: ConTodo
    },
    {
        path:'/chartreserve', 
        component: chartreserve
    },
    {
        path:'/chartseminar', 
        component: chartseminar
    },


]