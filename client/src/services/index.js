import axiosInstance from '@/api/axiosInstance.js';


export async function registerService(signUpFormData){
    const {token} = await axiosInstance.post('/api/register', {
        
        ...signUpFormData,
        
    })

    return token
}


export async function loginService(formData){
    const token = await axiosInstance.post('/api/login', {
        ...formData,
        
    })
    console.log(token)

    return token
}


export async function checkAuthService(){
    const token = JSON.parse(sessionStorage.getItem('accessToken'))
    if(token){
        return token
    }
    else{
        return null
    }
}

export async function getListingService(){
    const response = await axiosInstance.get('/api/')
    const data = response.data
    return data
}