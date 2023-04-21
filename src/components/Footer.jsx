import piggylogo from '../images/logo.svg'
import audit from '../images/audit.png'

export const Footer = () =>{
    return(
        <>
        <section className='footer-1'>
                <div className='footer-block block-1'>
                    <a href='https://www.piggyvest.com/' target='_blank' rel='noreferrer'>
                        <img src={piggylogo} alt='piggyvest logo'/>
                    </a>
                    <img className='audit-logo' src={audit} alt='audit certification'/>

                </div>

                <div className='footer-block block-2'>
                    <ul>
                        <caption>Products</caption>
                            <a href='https://www.piggyvest.com/piggybank'> <li>Piggybank</li> </a>
                            <a href='https://www.piggyvest.com/invest'> <li>Invest</li>    </a>
                            <a href='https://www.piggyvest.com/safelock'> <li>Safelock</li>  </a>
                            <a href='https://www.piggyvest.com/targets'> <li>Target Savings</li> </a>
                            <a href='https://www.piggyvest.com/flex-naira'> <li>Flex Naira</li> </a>
                    </ul>
                </div>

                <div className='footer-block block-3'>
                    <ul>
                        <caption>Companies</caption>
                        <a href='https://www.piggyvest.com/about'> <li>About</li> </a>
                        <a href='https://www.piggyvest.com/faq'> <li>FAQs</li> </a>
                        <a href='https://blog.piggyvest.com/'> <li>Blog</li> </a>
                    </ul>
                </div>

                <div className='footer-block block-4'>
                    <ul>
                        <caption>Legal</caption>
                        <a href='https://www.piggyvest.com/terms'><li>Terms</li> </a>
                        <a href='https://www.piggyvest.com/privacy'><li>Privacy</li> </a>
                        <a href='https://www.piggyvest.com/security'>  <li>Security</li> </a>
                    </ul>
                </div>

                <div className='footer-block block-5'>
                    <div>

                    </div>
                    <p>Tesmot house, Abdulrahman Okene close,
                         Victoria Island, Lagos, Nigeria.</p>
                    <p className='contact'>contact@piggyvest.com</p>
                    <p>+234 700 933 933 933</p>
                </div>
            </section>

            <footer>
                <p>Piggyvest (formerly piggybank.ng) is the leading online 
                    savings & investing platform in Nigeria. 
                    For over 6 years, our customers have saved and invested billions of Naira 
                    that they would normally be tempted to spend.</p>
                <p className='copyright'>2016 - 2022 PiggyTech Global Limited - RC 1405222</p>

            </footer>
            
            


            <div className="socials">
                <ul className="flex--1 jc-fe socials">
                    <li className="mr-10"><a class="" target="_blank" rel="noreferrer noopener" 
                    href="https://www.facebook.com/PiggyBankNG/">
                        <i className="fab fa-facebook-square fa-2x"></i>
                        </a>
                    </li>
                    
                    <li className="mr-10">
                        <a className="" target="_blank" rel="noreferrer noopener" 
                        href="https://mobile.twitter.com/PiggyBankNG/">
                            <i class="fab fa-twitter-square fa-2x"></i>
                    </a>

                    </li>
                        <li className="">
                            <a className="" target="_blank" rel="noreferrer noopener" 
                            href="https://www.instagram.com/piggybankng/">
                                <i className="fab fa-instagram-square fa-2x"></i>
                            </a>
                    </li>
                </ul>
            </div>
        </>
    )
 }