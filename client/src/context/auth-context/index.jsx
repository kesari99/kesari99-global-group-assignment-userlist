import { initialSignInFormData, initialSignUpFormData } from "@/config"
import { checkAuthService, loginService, registerService } from "@/services"
import { createContext, useEffect, useState } from "react"


export const AuthContext = createContext()


const AuthProvider = ({children}) => {

    const [signInFormData, setSignInFormData] = useState(initialSignInFormData)
    const [signUpFormData, setSignUpFormData] = useState(initialSignUpFormData)
    const [auth, setAuth] = useState({
        authenticate:false,
        user:null
    })


    const [loading, setLoading] = useState(true)   

    async function handleRegisterUser(event){
        event.preventDefault()

        const data = await registerService(signUpFormData)

        console.log(data)

    }

    async function handleLoginUser(event){
        event.preventDefault()

        const token = await loginService(signInFormData)
        console.log(token)  

        if(token){

           
            
            sessionStorage.setItem('accessToken', JSON.stringify(token))
            setAuth({
                authenticate:true,
            })
            
        }
        else{
            setAuth({
                authenticate:false,
            })

        }


    }

    async function checkAuthUser(){

        try{
            const token = await checkAuthService()
    

        if(token){
            
            setAuth({
                authenticate:true,
            })
            setLoading(false)

        }
        else{
            setAuth({
                authenticate:false,
            })
            setLoading(false)

        }

        // console.log(data.data)

        }catch(error){
            if(error?.response?.data?.success){
                setAuth({
                    authenticate:false,
                })
                setLoading(false)
            }

        }

       

        



    }

    function resetCredentials() {
        setAuth({
        authenticate: false,
        });
      }




    useEffect(() => {
        checkAuthUser()
        

    },[])

    console.log('auth', auth)


    

  return  <AuthContext.Provider value={{
    signInFormData,
    setSignInFormData,
    signUpFormData,
    setSignUpFormData,
    handleRegisterUser,
    handleLoginUser,
    auth,
    resetCredentials
  }}>
    {children}
  </AuthContext.Provider>
    
}

export default AuthProvider