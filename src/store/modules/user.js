import {
    setStore
} from "@/util/store"
import {
    Login,
    GetPersonalInfo
} from "@/api/admin/login.js";
const common = {
    state: {
        userInfo: {},
        userToken: "",
        userRole: 0,
        personalInfo:{}
    },
    actions: {
        Login({
            commit
        }, userInfo) {
            return new Promise((resolve, reject) => {
                Login(userInfo).then(data => {
                    const list = data.data.result
                    if (data.data.success) {
                        if (list.isSuccess) {
                            commit('SET_USERIFNO', list.userData)
                            commit('SET_USERTOKEN', list.userData.userToken)
                            commit('SET_USERROLE', list.userData.usertype)
                        }
                        resolve(list)
                    }
                }).catch(error => {
                    reject(error)
                })
            })
        },
        // 退出
        loginOut({
            commit
        }) {
            commit('SET_USERIFNO', {})
            commit('SET_USERTOKEN', "")
            commit('SET_USERROLE', 0)
            window.sessionStorage.clear()
            window.localStorage.clear()
        },
        // 获取用户信息
        GetPersonalInfo({
            commit
        }, personalInfo) {
            return new Promise((resolve, reject) => {
                GetPersonalInfo(personalInfo).then(data => {
                    const list = data.data.result
                    if (data.data.success) {
                        if (list.isSuccess) {
                            commit('SET_PERSONALINFO', list.userData)
                        }
                        resolve(list)
                    }
                }).catch(error => {
                    reject(error)
                })
            })
        },
    },
    mutations: {
        SET_USERIFNO: (state, userInfo) => {
            state.userInfo = userInfo;
            setStore({
                name: "userInfo",
                content: userInfo,
                type: "session"
            });

        },
        SET_USERTOKEN: (state, userToken) => {
            state.userToken = userToken;
            setStore({
                name: "userToken",
                content: userToken,
                type: "session"
            });
        },
        SET_USERROLE: (state, userRole) => {
            state.userRole = userRole;
            setStore({
                name: "userRole",
                content: userRole,
                type: "session"
            });

        },
        SET_PERSONALINFO: (state, personalInfo) => {
            state.personalInfo = personalInfo;
            setStore({
                name: "personalInfo",
                content: personalInfo,
                type: "session"
            });

        },
    }
}

export default common