import React, { useState, useEffect } from 'react'
import { createClient } from '@supabase/supabase-js'
import { Auth } from '@supabase/auth-ui-react'
import { useNavigate } from 'react-router-dom'
import {
  // Import predefined theme
  ThemeSupa,
} from '@supabase/auth-ui-shared'
import  LoginImage  from '../../assets/images/boutique.jpg'
import supabase from '../../Client'
import './LoginPage.css'

const LoginPage = () => {
  const [session, setSession] = useState(null)
  const navigate = useNavigate()

  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      setSession(session)
    })

    const { 
      data: { subscription },  
    } = supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session)
    })

    return () => subscription.unsubscribe()
  }, [])

  return (
    <>
    { session === null ?
    <div className='login-container'>
       <div className='login-container-item'>
            <div className='login-container-auth mt-5 w-50'>
            <h1 className='login-title text-center mb-5'>Sign in</h1>
                <Auth
                supabaseClient={supabase}
                appearance={{ theme: ThemeSupa }}
                providers={['google']}
                socialColors={true}
                />
            </div>
        </div>
        <div className='login-container-item'>
            <img src={LoginImage} alt='Authentication' className='login-image' />
        </div>
    </div>
    :
    navigate('/')
    }
    </>
  )
}



export default LoginPage
