export const SEND_EMAIL_FOR_FORGET_PASSWORD = 'SEND_EMAIL_FOR_FORGET_PASSWORD';

export function sendEmailForgetPassword(email){
    return {
        type: SEND_EMAIL_FOR_FORGET_PASSWORD,
        email : email
    }
}