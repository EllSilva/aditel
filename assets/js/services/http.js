import config from './config.js'

const optionsmagem = {
    headers: {
        'Content-Type': 'multipart/form-data'
    }, 
    method: 'POST',
    mode: 'cors',
    cache: 'default',
    body: null
}

const optionsPost = {
    headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
    }, 
    method: 'POST',
    mode: 'cors',
    cache: 'default',
    body: null
}

const optionsPut = {
    headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
    },
    method: 'PUT', 
    mode: 'cors',
    cache: 'default',
    body: null
}

const optionsPatch = {
    headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
    },
    method: 'PATCH', 
    mode: 'cors',
    cache: 'default',
    body: null
}

const error_default = {
    status_code: 500,
    next: false,
    message: 'Não foi possivel acessar api'
}
 
function obj_to_url(obj, next_level = null) {
    var query = [];
    for (var key in obj) {
        switch (typeof obj[key]) {
            case 'string':
            case 'number':
                if (next_level != null) {
                    query.push(`${next_level}[${key}]=${obj[key]}&`)
                } else {
                    query.push(`${key}=${obj[key]}&`)
                }
                break
            case 'object':
                query.push(obj_to_url(obj[key], key))
        }
    }
    return query.join('');
}



async function post(path, data) {
    let base = config.path
    let token = localStorage.getItem('token')
    if(token){
        data.token = token
    }
    optionsPost.body = obj_to_url(data)
    let res = await fetch(`${base}${path}`, optionsPost)
    let status_code = res.status
    return await res.json()
}

async function put(path, data ) {
    let base = config.path
    let token = localStorage.getItem('token')
    if(token){
        data.token = token
    }
    optionsPut.body = obj_to_url(data)
    let res = await fetch(`${base}${path}`, optionsPut)
    let status_code = res.status
    return await res.json()
}

async function patch(path, data = {}) {
    let base = config.path
    let token = localStorage.getItem('token')
    if(token){
        data.token = token
    }
    optionsPut.body = obj_to_url(data)
    let res = await fetch(`${base}${path}`, optionsPut)
    let status_code = res.status
    return await res.json()
}

async function get(path, data = {}) {
    let base = config.path
    let token = localStorage.getItem('token')
    if(token){
        data.token = token
    }
    let res = await fetch(`${base}${path}?${obj_to_url(data)}`)
    let res_in_json = await res.json()
    return res_in_json
}

export default {
    post,
    put,
    patch,
    get
}