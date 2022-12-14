import './Footer.scss'
import logo from '../../assets/logosmall.png'
import Socials from '../Socials/Socials.jsx'

const Footer = () => {

    let pages = ['Hero', 'About', 'FAQ', 'Sponsors', 'Contact']

    return (
        <div id='footer'>
            
            <div className='column'>
                <div className='logowrapper mb-4'>
                    <img loading='lazy' alt='logo' src={logo} className='rounded-full'></img>
                    <h3>RythmHacks</h3>
                </div>
                <p className='mb-4'>Copyright © 2022-23 RythmHacks</p>
                <Socials />
            </div>

            <div className='column'>
                <h2>Navigation</h2>
                {pages.map((value, index) => {
                    return (
                        <button 
                        onClick = {
                            () => {
                                var element = document.getElementById(value.toLowerCase());
                                element.scrollIntoView({
                                  block: 'start',
                                  behavior: 'smooth'
                                });
                            }
                        }
                        >{value}</button>
                    )
                })}
            </div>
            
            <div className='column'>
                <h2>Links</h2>
                <button onClick={() => {window.scrollTo(0,0)}}>Back to Top</button>
                <a target='_blank' rel='noreferrer' href='https://github.com/RythmHacks/rythmhacks.ca/'>Source</a>
                <a target='_blank' rel='noreferrer' href='https://github.com/RythmHacks/rythmhacks.ca/blob/footer/LICENSE'>License</a>
                <a target='_blank' rel='noreferrer' href='https://links.rythmhacks.ca/'>Links Page</a>
                <a target='_blank' rel='noreferrer' href='https://static.mlh.io/docs/mlh-code-of-conduct.pdf'>MLH Code of Conduct</a>
                <a target='_blank' rel='noreferrer' href='mailto:rythmhacks@gmail.com'>Email</a>
            </div>
        </div>
    )
  }
  
  export default Footer
  