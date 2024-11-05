import { render } from '@react-email/render';
import EmailPage from '../../pages/EmailPage/EmailPage';

const html  = await render(<EmailPage />, {
    pretty: true,
  });

export default html ;  

console.log(html );