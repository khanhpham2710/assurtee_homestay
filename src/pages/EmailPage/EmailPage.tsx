import React, { useRef } from 'react';
import images from '../../assets/images';
import Download from '../../components/Download/Download';
import Grid from '@mui/material/Grid2';
import Box from '@mui/material/Box';
import emailjs from '@emailjs/browser';
import { Divider } from '@mui/material';
import axios from 'axios';
export default function EmailPage() {
    const form = useRef<HTMLFormElement>();

    import.meta.env.VITE_PUBLIC_KEY;
    console.log('.meta.env.VITE_PUBLIC_KEY: ', import.meta.env.VITE_PUBLIC_KEY);
    import.meta.env.VITE_EMAIL_SERVICE_ID;
    console.log(
        'import.meta.env.VITE_EMAIL_SERVICE_ID: ',
        import.meta.env.VITE_EMAIL_ID
    );
    import.meta.env.VITE_TEMPLATE_ID,
        console.log(
            'import.meta.env.VITE_TEMPLATE_ID,: ',
            import.meta.env.VITE_TEMPLATE_ID
        );

    const handleSendEmail = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();

        const templateParams: any = {
            // Replace these with the actual parameters your template requires
            to_name: 'Recipient Name',
            message: 'Your message here',
            // ...any other params
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
