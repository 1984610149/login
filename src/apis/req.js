import request from '@/utils/request'
export function loginReq(username,password) {
    return request.post('/index.php/index/wxapp.login/simple',{
        username: username,
        password: password
    })
}
export function getCode(phone) {
    return request.post('/index.php/index/wxapp.login/get_phone_num',{
        phone: phone,
    })
}
export function codeLogin(num) {
    return request.post('/index.php/index/wxapp.login/check_phone_num',{
        num:num
    })
}

export function phoneRegister(username,password,email,phone_code) {
    return request.post('/index.php/index/wxapp.login/phone_reg',{
        username: username,
        password: password,
		email:email,
		phone_code:phone_code
    })
}

export function loginOut(uid) {
    return request.get('/index.php/index/wxapp.login/quitweb',{
        uid:uid
    })
}