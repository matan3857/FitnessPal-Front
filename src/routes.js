import { Homepage } from './pages/Homepage'
import { Menu } from './pages/Menu'
import { BuildWorkout } from './pages/BuildWorkout'
import { Info } from './pages/Info'
import { MyWorkouts } from './pages/MyWorkouts'
import { MyMenus } from './pages/MyMenus'
import { WeightTrack } from './pages/WeightTrack'
import { StartWorkout } from './pages/StartWorkout'
import { BuildMenu } from './pages/BuildMenu'

const routes = [
    {
        path: '/menu',
        component: Menu,
        label: 'Menu',
        isExact: true
    },
    {
        path: '/buildWorkout',
        component: BuildWorkout,
        label: 'buildWorkout',
        isExact: true
    },
    {
        path: '/buildMenu',
        component: BuildMenu,
        label: 'buildMenu',
        isExact: true
    },
    {
        path: '/myWorkouts',
        component: MyWorkouts,
        label: 'myWorkouts',
        isExact: true
    },
    {
        path: '/myMenus',
        component: MyMenus,
        label: 'myMenus',
        isExact: true
    },
    {
        path: '/info',
        component: Info,
        label: 'info',
        isExact: true
    },
    {
        path: '/weight',
        component: WeightTrack,
        label: 'weight',
        isExact: true
    },
    {
        path: '/startWorkout/:workoutIdx',
        component: StartWorkout,
        label: 'startWorkout',
        isExact: true
    },
    {
        path: '/',
        component: Homepage,
        label: 'Home 🏠',
        isExact: true
    },

]


export default routes;