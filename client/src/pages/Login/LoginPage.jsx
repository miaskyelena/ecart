import React, { useState, useEffect } from 'react'
import { createClient } from '@supabase/supabase-js'
import { Auth } from '@supabase/auth-ui-react'
import {
  // Import predefined theme
  ThemeSupa,
} from '@supabase/auth-ui-shared'
import  LoginImage  from '../../assets/images/boutique.jpg'
import './LoginPage.css'


const supabase = createClient('https://tgkovlzatftsifoxqxdi.supabase.co', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InRna292bHphdGZ0c2lmb3hxeGRpIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTg1NTI1MTcsImV4cCI6MjAxNDEyODUxN30.5Q7ata3VlXApFGHwyW8cAuPfYHG_c7WVgsVRNSBsJys')

const LoginPage = () => {
  const [session, setSession] = useState(null)

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

  console.log(session)

  return (
    <>
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
    </>
  )
}



export default LoginPage
