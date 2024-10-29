import db from '../models/index';
import bcrypt from 'bcryptjs';
import nodemailer from 'nodemailer';
import otpGenerator from 'otp-generator';

const salt = bcrypt.genSaltSync(10);

const transporter = nodemailer.createTransport({
    service: 'gmail',
    port: 465,
    secure: true,
    logger: true,
    debug: true,
    secureConnection: false,

    auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS
    },
    tls:{
        rejectUnauthorized: true
    }
});

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




const sendOtpEmail = async (email, otp) => {
    const mailOptions = {
        from: 'process.env.EMAIL_USER',
        to: email,
        subject: 'Your OTP Code',
        text: `Your OTP code is ${otp}`
    };

    await transporter.sendMail(mailOptions);
}

const generateOtp = () => {
    return otpGenerator.generate(6, { upperCase: false, specialChars: false });
}

const forgotPassword = async (email) => {
    try {
        const user = await db.User.findOne({ where: { email: email }});
        if (user) {
            const otp = generateOtp();
            user.otp = otp;
            await user.save();
            await sendOtpEmail(email, otp);
            return true;
        }
        return false;
    } catch (error) {
        throw error;
    }
}

const resetPassword = async (email, otp, newPassword) => {
    try {
        const user = await db.User.findOne({ where: { email: email, otp: otp }});
        if (user) {
            user.password = hashPassword(newPassword);
            user.otp = null; 
            await user.save();
            return true;
        }
        return false;
    } catch (error) {
        throw error;
    }
}

module.exports = {
    createNewUser,
    checkUserEmail,
    handleUserLogin,
    forgotPassword,
    resetPassword
}