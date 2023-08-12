import { contact } from '../../portfolio'
import EmailIcon from '@material-ui/icons/Email';
import PhoneIcon from '@material-ui/icons/Phone';
import './Contact.css'

const Contact = () => {
  if (!contact.email) return null

  return (
    <section className='section contact center' id='contact'>
      <h2 className='section__title'>Contact</h2>
      <a href={`mailto:${contact.email}`}>
        {/* <span type='button' className='btn btn--outline'>
          Email me
        </span> */}    
      </a>
      <EmailIcon/>
      <h5>Email</h5>
      <a href={`mailto:${contact.email}`}>
        <p>goreguruprasad48@gmail.com</p>
      </a>
      <br/>
      <PhoneIcon/>
      <h5>Phone</h5>
      9960957833
    </section>
  )
}

export default Contact
