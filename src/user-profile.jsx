import { useEffect, useState } from "react";

const UserProfile = () => {

    const [profile, setProfile] = useState(null);
    const [loading, setLoading] = useState(true);
    const [errors, setErrors] = useState(null);

    useEffect(() => {
        const fetchProfile = async () => {
            try{
                const response = await api.get('/api/user-profile');
                setProfile(response.data);
                setLoading(false);
            } catch(error){
                console.log('failed to fetch profile')
            }
        }

        fetchProfile();
        
    }, []);

    if(loading){
        return ( <div> Loading </div>)
    }
    if(!profile){
        return ( <div> No profile data available</div>)
    }

    return ( 
        <div>
            <p>Username: {profile.username}</p>
            <p>Email: {profile.email}</p>
            <p>Password: {profile.password}</p>

        </div>
     );
}
 
export default UserProfile;