/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useRef } from 'react';
import { useAppDispatch, useAppSelector } from '../../utils/hooks/reduxHooks';
import emailjs from '@emailjs/browser';

export default function EmailPage() {
    const { email, contractor } = useAppSelector((state) => state.info);

    const to_name: string = 'nguyendeptrai';
    const to_email: string = 'nguyenndev037@gmail.com';

    const handleSendEmail = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();

        const templateParams = {
            to_name: to_name,
            to_email: to_email,
            message: 'Your message here',
            title: 'Confirm successful order payment',
        };

        emailjs
            .send(
                import.meta.env.VITE_EMAIL_ID,
                import.meta.env.VITE_TEMPLATE_ID,
                templateParams,
                import.meta.env.VITE_PUBLIC_KEY
            )
            .then(
                (response) => {
                    console.log('SUCCESS!', response.status, response.text);
                    alert('Your mail has been sent successfully!');
                },
                (error) => {
                    console.log('FAILED...', error);
                    alert('Failed to send email. Please try again.');
                }
            );
    };

    return (
        <section
            className="dflex_center fullWidth_item"
            style={{ backgroundColor: 'yellow' }}
        >
            <button
                onClick={handleSendEmail}
                type="submit"
                style={{ backgroundColor: 'green' }}
            >
                Send Email
            </button>
        </section>
    );
}
