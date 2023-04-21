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

import purplePlus from '../images/purple-plus.svg'
import greenDot from  '../images/green-dot.svg'
import pinkCircle from '../images/pink-circle.svg'
import purpleDot from '../images/purple-dot.svg'
import appleLogo from '../images/apple-icon.svg'
import playStoreLogo from '../images/google-play-store-icon.svg'
import { NavBar } from '../components/Navbar';
import { Footer } from '../components/Footer';
import { Testimonials } from '../components/Testimonials';

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

            <Testimonials/>

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

            <Footer/>

        </div>
    );
}