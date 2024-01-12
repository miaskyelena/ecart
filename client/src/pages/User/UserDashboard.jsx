
import React, { useState } from 'react';
import { useUser, useSupabaseClient } from '@supabase/auth-helpers-react';
import SearchBar from '../../components/Bar/SearchBar/SearchBar';

const UserDashboard = () => {
    const user = useUser();
    const supabase = useSupabaseClient();
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [website, setWebsite] = useState('');

    const handleUsernameChange = (event) => {
        setUsername(event.target.value);
    };

    const handleEmailChange = (event) => {
        setEmail(event.target.value);
    };

    const handleWebsiteChange = (event) => {
        setWebsite(event.target.value);
    };

    const handleSave = async () => {
        // Save the user profile data to the database using supabase
        // You can use supabase.client to interact with the database
        // For example:
        // const { data, error } = await supabase.client
        //   .from('users')
        //   .update({ username, email, website })
        //   .eq('id', user.id);

        // Handle success or error response
    };

    return (
        <>
        <SearchBar />
        <div className="container">
            <div className="row">
                <div className="col-md-12">
                    <h3 className="text-left">Welcome, {user?.email}</h3>
                    <p className="text-left">Manage your profile settings.</p>
                </div>
            </div>
            <div className="row">
                <div className="col-md-6">
                    <span>Profile Photo</span>
                    <br/>
                    <img src={user?.user_metadata.avatar_url} />
                    

                </div>
                <div className="col-md-6">
                    <span>Username </span><br />
                    <input type="text" value={username} onChange={handleUsernameChange} /> <br />
                    <span>Email</span> <br />
                    <input type="text" value={email} onChange={handleEmailChange} /> <br />
                    <span>Website</span> <br />
                    <input type="text" value={website} onChange={handleWebsiteChange} /> <br />
                    <button onClick={handleSave}>Save</button>
                </div>
            </div>
        </div>
        </>
    
    );
};

export default UserDashboard;

