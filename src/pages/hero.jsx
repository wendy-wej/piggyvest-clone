import React from 'react';
import card1 from '../images/card1.png';
import card2 from '../images/card2.png';
import heroGirl from "../images/hero-girl.png";
import rect from '../images/rect.png'
import shield from '../images/security.png'
import target from '../images/target.png'
import safelock from '../images/safelock.png'
import piggy from '../images/piggy.png'
import flex from '../images/flex.png'
import investphone from '../images/invest.png'
import monthSaver from '../images/saver_of_the_month.jpg'
import feature1 from '../images/feature1.png'
import feature2 from '../images/feature2.png'
import feature3 from '../images/feature3.png'
import piggylogo from '../images/logo.svg'
import audit from '../images/audit.png'
import purplePlus from '../images/purple-plus.svg'
import greenDot from  '../images/green-dot.svg'
import pinkCircle from '../images/pink-circle.svg'
import purpleDot from '../images/purple-dot.svg'
import appleLogo from '../images/apple-icon.svg'
import playStoreLogo from '../images/google-play-store-icon.svg'
import { NavBar } from '../components/Navbar';

export const HeroPage = () =>{
    return (
        <div>
            <section className='navi'>
                <NavBar/>
            </section>

            <header className="first-pane">
                <div className="first-pane-text">
                    <h1>The Better Way to Save & Invest.</h1>
                    <p className='dm-sans first-pane-text-subtext'>PiggyVest helps over 4 million customers achieve
                         their financial goals by helping them save and invest with ease.</p>
                    
                    <div>
                        <a href='https://dashboard.piggyvest.com/register' className='black-btn'>Create free account</a>
                        <div className='download-btns'>
                        
                            <a href='https://apps.apple.com/ng/app/piggyvest/id1263117994' className='download btn'>
                                <img className='app-store-image' src={appleLogo} alt=''/>
                                Get on iPhone
                            </a>

                            <a href='https://play.google.com/store/apps/details?id=com.piggybankng.piggy' className='download btn playstore'>
                                <img className='app-store-image' src={playStoreLogo} alt=''/>   
                                Get on Android
                            </a>
                        </div>
                    </div>
                </div>

                <div className="group-images">
                    <div className="main-cards">
                        <img src={heroGirl} className="hero-girl" alt='' />
                        <div>

                            <img src={rect}  className="rect" alt='' />
                            <img src={card1} className="card one" alt='My Rent Card' />
                            <img src={card2} className="card two" alt='Investify Card' />
                        </div>

                        <div className='animated-svgs'>
                            <img src={purplePlus}  className="purple-plus" alt='' />
                            <img src={greenDot}  className="green-dot" alt='' />
                            <img src={pinkCircle}  className="pink-circle" alt='' />
                        </div>
                        
                    </div>   
                </div>
            </header>
            <section className='second-pane'>
                <div className="shield-area">
                    <img src={shield}  className="shield-icon" alt='A blue shield'/>
                </div>
                <div className='security-text'>
                    <h3 className='security-header'>Your security is our priority</h3>
                    <p className='security-paragraph'>PiggyVest uses the highest level of Internet Security and it is secured by 256 bits SSL 
                        security encryption to ensure that your information is comepletely protected from fraud.</p>
                    <a href='https://www.piggyvest.com/security' target='_blank' rel='noreferrer'>{`Learn more >`}  </a>
                </div>
            </section>

            <section className='third-pane'>
                <div className='third-pane-intro'>
                    <h2>4 ways to build your savings</h2>
                    <p>Earn 5%-15% when you save with any of these PiggyVest plans.</p>
                    <a href='https://dashboard.piggyvest.com/register' className='btn'>Start Saving</a>
                </div>

                <div className='all-options'>
                    <div className='row-options'>
                        <div className='saving-options left-saving-options'>
                            <img className='saving-option-icon' src={piggy} alt='a saving option logo'/>
                            <h4>Automated Savings</h4>
                            
                            <p>Build a dedicated savings faster on your terms automatically or manually.</p>
                            
                            <img className='' alt='' src=''/>
                                <p className='optio'>Piggybank</p>     
                            

                        </div>

                        <div className='saving-options'>
                            <a href='https://www.piggyvest.com/piggybank' target='_blank' rel='noreferrer'>
                                <img className='saving-option-icon' src={safelock} alt='a saving option logo'/>
                                <h4>Fixed Savings</h4>
                                <p>Lock money away for a fixed duration with no access to it until maturity. It’s like having a custom fixed deposit.</p>
                                <div className='saving-option-links'>
                                    <img className='' alt='' src=''/>
                                </div>
                            </a>
                        </div>
                    </div>

                    <div className='row-options'>
                        <div className='saving-options left-saving-options'>
                            <a href='https://www.piggyvest.com/targets' target='_blank' rel='noreferrer'>
                                <img className='saving-option-icon' src={target} alt='a saving option logo'/>
                                <h4>Goal-oriented Savings</h4>
                                <p>Reach all your savings goals faster. Save towards multiple goals on your own or with a group.</p>
                                <div>
                                    <img className='' alt='' src=''></img>
                                    <p>Target Savings</p>
                                </div>
                            </a>
                        </div>

                        <div className='saving-options'>
                            <a href='https://www.piggyvest.com/flex-naira' target='_blank' rel='noreferrer'>
                                <img className='saving-option-icon' src={flex} alt='a saving option logo'/>
                                <h4>Flexible Savings</h4>
                                <p>Save, transfer, withdraw, manage and organise your money for free at any time.</p>
                                <div>  
                                    <img className='' alt='' src=''/>
                                    <p>Flex Naira</p>
                                </div>
                            </a>
                        </div>
                    </div>
                </div>
            </section>

            <section className='fourth-pane'>
                <div className='invesify-images'>
                    
                    
                        <svg className=" invesify-circle investIcon" width="280" height="280" viewBox="0 0 300 300" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <circle cx="150" cy="150" r="150" fill="white"></circle>
                            <circle cx="150" cy="150" r="100" stroke="#7913E5" stroke-opacity="0.07" stroke-width="100"></circle>
                        </svg>
                    
                    <img className='invesify-dots investIcon' src={purpleDot} alt=''/>
                    <img className='invesify-phone' src={investphone} alt='a phone showing the invesify section'/>
                </div>

                <div className='investify-text'>
                    <p className='investify-returns'>Up To 25% Returns</p>
                    <h2>Access investment opportunities</h2>
                    <p className='investify-subtext'>Invest securely and confidently on the go. 
                            Grow your money confidently by investing in pre-vetted investment opportunities.</p>
                    <p>{`Learn more about Investments >`}</p>
                </div>
            </section>


            <section className='fifth-pane'>
                <div className='fifth-pane-text'>
                    <h2>Meet the saver of the month!</h2>
                    <p>Every month, we shine a spotlight on one saver, 
                        asking them questions about their savings culture and 
                        how the product is specifically helping them shape 
                        how they spend and save for future responsibilities.
                    </p>
                    
                    <div >
                        <a id='saver-month-link' href='https://www.youtube.com/watch?v=-jnxad4JXCw' target='_blank' rel='noreferrer'>

                            <svg width="33" height="33" viewBox="0 0 33 33" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <circle cx="16.2173" cy="16.1587" r="16.0254" fill="white"></circle>
                            <path d="M18.6211 10.5498L17.4913 11.6796L21.1611 15.3574L8.20461 15.3574L8.20461 16.96L21.1611 16.96L17.4833 20.6378L18.6211 21.7676L24.23 16.1587L18.6211 10.5498Z" fill="#2295F2"></path>
                            </svg>

                        <p id='meet-ovie'> Meet Ovie  </p>  
                        </a>
                    </div>      
                </div>

                <div className='fifth-pane-image-area'>
                    <img className='' alt='The saver of the Month' src={monthSaver}/>
                </div>
            </section>
            <br/>

            <section className='sixth-pane'>
                <div class="col-md-5x left ">
                    <div class="testimonials">
                    <div height="815" class="sc-bcXHqe rolling">
                        <div class="box">
                            <small>Sunday, 2nd of April 2023 by 10:08 AM</small>
                            <div class="d-flex mt-20 clear-right">
                                <img src="https://storage.googleapis.com/piggybankservice.appspot.com/_story_pics/img9a94d4620c.jpeg" alt="Balqeez J" width="35" height="10"/>
                                    <div className='testimonial-text'>
                                        <h6>Balqeez J</h6>
                                        <p>{`Thank you piggy vest for creating this platform for young entrepreneurs like me, 
                                            this is my third year with Piggyvest. When I started saving with Piggyvest, 
                                            I was just a 20 years old girl struggling as a beginner lash tech while in uni. 
                                            Within these years I have been able to save over 5 million naira from my business. 
                                            And every time I cash out my money I've been able to do tangible things with it. 
                                            In 2021 I launched my branded lash tray from the money I saved with PiggyVest. 
                                            I've been able to grow myself from 0-100. Recently I opened a beauty salon, all thanks to Piggyvest. 
                                            I could go on and on 😫😫😫`}
                                        </p>
                                    </div>
                            </div>
                        </div>

                        <div class="box">
                            <small>Saturday, 1st of April 2023 by 18:54 PM</small>
                            <div class="d-flex mt-20 clear-right">
                                <img src="https://storage.googleapis.com/piggybankservice.appspot.com/_story_pics/img392384b241.jpeg" 
                                alt="Juliana M" width="35" height="10"/>
                                    <div className='testimonial-text'>
                                        <h6>Juliana M</h6>
                                        <p>Piggyvest has really helped me in the cause of my business, it has been amazing saving my money with them.
                                                I encourage you all to give them a trial by investing your money today, you will thank me later. I am a living testimony, no scam here!
                                        </p>
                                    </div>
                            </div>
                        </div>

                        <div class="box">
                            <small>Wednesday, 29th of March 2023 by 13:06 PM</small>
                            <div class="d-flex mt-20 clear-right">
                                <img src="https://storage.googleapis.com/piggybankservice.appspot.com/_story_pics/img9c3066126a.jpeg" alt="Favour Nnenna J" width="35" height="10"/>
                                <div className='testimonial-text'>
                                    <h6>Favour Nnenna J</h6>
                                    <p>Piggyvest has helped me with discipline principles for saving. 
                                        I'm grateful to come this far, thanks.</p>
                                </div>
                            </div>
                        </div>

                        <div class="box">
                            <small>Tuesday, 28th of March 2023 by 09:17 AM</small>
                            <div class="d-flex mt-20 clear-right">
                                <img src="https://storage.googleapis.com/piggybankservice.appspot.com/_story_pics/img39a12a4c9c.jpeg" alt="Blessing E" width="35" height="10"/>
                                <div className='testimonial-text'>
                                    <h6>Blessing E</h6>
                                    <p>PiggyVest has helped me a lot in saving. 
                                        It helps me to spend less and helps me to set a target for things I want to achieve and maintain. 
                                        Thank you PiggyVest for this great opportunity.
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div class="box">
                            <small>Sunday, 2nd of April 2023 by 10:08 AM</small>
                            <div class="d-flex mt-20 clear-right">
                                <img src="https://storage.googleapis.com/piggybankservice.appspot.com/_story_pics/img9a94d4620c.jpeg" alt="Balqeez J" width="35" height="10"/>
                                <div className='testimonial-text'>
                                    <h6>Balqeez J</h6>
                                    <p>Thank you piggy vest for creating this platform for young entrepreneurs like me, 
                                        this is my third year with Piggyvest. When I started saving with Piggyvest, 
                                        I was just a 20 years old girl struggling as a beginner lash tech while in uni. 
                                        Within these years I have been able to save over 5 million naira from my business. 
                                        And every time I cash out my money I've been able to do tangible things with it. 
                                        In 2021 I launched my branded lash tray from the money I saved with PiggyVest.
                                            I've been able to grow myself from 0-100. Recently I opened a beauty salon, all thanks to Piggyvest. 
                                            I could go on and on 😫😫😫
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div class="box">
                            <small>Saturday, 1st of April 2023 by 18:54 PM</small>
                            <div class="d-flex mt-20 clear-right">
                                <img src="https://storage.googleapis.com/piggybankservice.appspot.com/_story_pics/img392384b241.jpeg" alt="Juliana M" width="35" height="10"/>
                                <div className='testimonial-text'>
                                    <h6>Juliana M</h6>
                                    <p>Piggyvest has really helped me in the cause of my business, 
                                        it has been amazing saving my money with them.
                                        I encourage you all to give them a trial by investing your money today, 
                                        you will thank me later. I am a living testimony, no scam here!
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div class="box">
                            <small>Wednesday, 29th of March 2023 by 13:06 PM</small>
                            <div class="d-flex mt-20 clear-right">
                                <img src="https://storage.googleapis.com/piggybankservice.appspot.com/_story_pics/img9c3066126a.jpeg" 
                                     alt="Favour Nnenna J" width="35" height="10"/>
                                <div className='testimonial-text'>
                                    <h6>Favour Nnenna J</h6>
                                    <p>Piggyvest has helped me with discipline principles for saving. 
                                        I'm grateful to come this far, thanks.
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div class="box">
                            <small>Tuesday, 28th of March 2023 by 09:17 AM</small>
                            <div class="d-flex mt-20 clear-right">
                                <img src="https://storage.googleapis.com/piggybankservice.appspot.com/_story_pics/img39a12a4c9c.jpeg" 
                                        alt="Blessing E" width="35" height="10"/>
                                <div className='testimonial-text'>
                                    <h6>Blessing E</h6>
                                    <p>PiggyVest has helped me a lot in saving.
                                        It helps me to spend less and helps me to set a target for things I want to achieve and maintain. 
                                        Thank you PiggyVest for this great opportunity.</p>
                                </div>
                            </div>
                        </div>
                        </div>
                    </div>
                    </div>
                    
                    <div className='sixth-pane-text'>
                        <h3>4 Million + customers</h3>
                        <p>Since launching in 2016, 
                            over 4,000,000 people have used PiggyVest 
                            to manage their money better, avoid over-spending 
                            and be more accountable.</p>
                            <div>
                                <a href='https://dashboard.piggyvest.com/register' className='black-btn' id='black-btn-border'>Create free account</a>

                                <div className='two-buttons'>
                                    <a href='https://apps.apple.com/ng/app/piggyvest/id1263117994' className='download btn'>
                                        <img className='app-store-image' src={appleLogo} alt=''/>
                                        Get on iPhone
                                    </a>

                                    <a href='https://play.google.com/store/apps/details?id=com.piggybankng.piggy'  className='download btn playstore'>
                                        <img className='app-store-image' src={playStoreLogo} alt=''/>   
                                        Get on Android
                                    </a>
                                </div>
                            </div>
                    </div>
            </section>

            <section className='seventh-pane'>
                <div className='seventh-pane-text'>
                    <h3>As featured in</h3>
                </div>
                <div className='seventh-pane-images'>
                    <img className='feature-images' alt='' src={feature3}/>
                    <img className='feature-images' alt='' src={feature1}/>
                    <img className='feature-images' alt='' src={feature2}/>
                    
                </div>
            </section>

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

        </div>
    );
}