import jwt from ('jsonwebtoken')

export login = async ( req, res) => {
    const {email, password} = req.body;

    try{
        const [user] = await query('SELECT * FROM users WHERE email =?', [email]);

        //checking if user exists 
        if(user.length === 0){
            return res.status(400).json({message: 'Invalid creds'})
        }

        //checking if passwords matches
        if(user)
    }
}