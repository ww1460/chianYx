import request from '@/router/axios'
// 登录
export function Login(query) {
    return request({
        url: '/api/services/app/CommonApi/Login',
        method: 'post',
        data: query,
    })
}

// 注册
export function Register(query) {
    return request({
        url: '/api/services/app/CommonApi/Register',
        method: 'post',
        data: query
    })
}

// 修改密码
export function ModifyPassword(query) {
    return request({
        url: '/api/services/app/CommonApi/ModifyPassword',
        method: 'post',
        data: query
    })
}


// 获取个人信息
export function GetPersonalInfo(query) {
    return request({
        url: '/api/services/app/CommonApi/GetPersonalInfo',
        method: 'post',
        data: query
    })
}

// 修改个人信息
export function UpdateorInsertUserInfo(query) {
    return request({
        url: '/api/services/app/CommonApi/UpdateorInsertUserInfo',
        method: 'post',
        data: query,
    })
}

// 修改运动员个人信息
export function UpdateorInsertAthleteInfo(query) {
    return request({
        url: '/api/services/app/CommonApi/UpdateorInsertAthleteInfo',
        method: 'post',
        data: query,
    })
}
