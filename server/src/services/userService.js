import db from '../models/index';
import bcrypt from 'bcryptjs';

const salt = bcrypt.genSaltSync(10);

const hashPassword = (password) => {
    return bcrypt.hashSync(password, salt);
}

const createNewUser = async (userData) => {
    try {
        const hashedPassword = hashPassword(userData.password);
        const newUser = await db.User.create({
            email: userData.email,
            password: hashedPassword,
            name: userData.name,
            phone: userData.phone,
            role: "Customer"
        });
        return newUser;
    } catch (error) {
        throw error;
    }
}

const checkUserEmail = async (userEmail) => {
    try {
        const user = await db.User.findOne({ where: { email: userEmail }});
        if (user) {
            return true;
        }
        return false;
    } catch (error) {
        throw error;
    }
}

const handleUserLogin = async (email, password) => {
    try {
        const user = await db.User.findOne({ where: { email: email }});
        if (user) {
            const isValidPassword = bcrypt.compareSync(password, user.password);
            if (isValidPassword) {
                return user;
            }
        }
        return null;
    } catch (error) {
        throw error;
    }
}

module.exports = {
    createNewUser,
    checkUserEmail,
    handleUserLogin
}