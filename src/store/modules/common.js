import {
    setStore
} from "@/util/store"

const common = {
    state: {
        screen: -1,
        routeList: [],
        register_step: 0,
        register_role: 0,
        
    },
    actions: {

    },
    mutations: {
        SET_SCREEN: (state, screen) => {
            state.screen = screen
            setStore({
                name: 'screen',
                content: state.screen,
                type: 'session'
            })
        },
        SET_ROUTELIST: (state, routeList) => {
            state.routeList = routeList
            setStore({
                name: 'routeList',
                content: state.routeList,
                type: 'session'
            })
        },
        SET_REGISTER_STEP: (state, register_step) => {
            if (register_step++ > 2) register_step = 0;
            state.register_step = register_step
            setStore({
                name: 'register_step',
                content: state.register_step,
                type: 'session'
            })
        },
        SET_REGISTER_ROLE: (state, register_role) => {
            state.register_role = register_role
            setStore({
                name: 'register_role',
                content: state.register_role,
                type: 'session'
            })
        }
    }
}

export default common