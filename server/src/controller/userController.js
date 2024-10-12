import userService from "../services/userService"

const handleRegister = async (req, res) => {
    try {
        const { email, password, name, phone,role } = req.body;
        
        if (!email || !password || !name || !phone || !role) {
            return res.status(400).json({
                message: 'Missing required parameters'
            });
        }

        const isExist = await userService.checkUserEmail(email);
        if (isExist) {
            return res.status(409).json({
                message: 'Email already exists'
            });
        }

        const newUser = await userService.createNewUser(req.body);
        return res.status(201).json({
            message: 'User created successfully',
            user: newUser
        });
    } catch (error) {
        return res.status(500).json({
            message: 'Error from server',
            error: error.message
        });
    }
}

const handleLogin = async (req, res) => {
    try {
        const { email, password } = req.body;
        
        if (!email || !password) {
            return res.status(400).json({
                message: 'Missing email or password'
            });
        }

        const user = await userService.handleUserLogin(email, password);
        if (!user) {
            return res.status(401).json({
                message: 'Invalid email or password'
            });
        }

        return res.status(200).json({
            message: 'Login successful',
            user: {
                id: user.user_id,
                email: user.email,
                name: user.name,
                role: user.role
            }
        });
    } catch (error) {
        return res.status(500).json({
            message: 'Error from server',
            error: error.message
        });
    }
}

module.exports = {
    handleRegister,
    handleLogin
}