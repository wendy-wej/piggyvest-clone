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
import plus from "../images/download.svg";


export const HeroPage = () =>{
    return (
        <div>
            <header className="first-pane">
                <div className="first-pane-text">
                    <h1>The Better Way to Save & Invest.</h1>
                    <p>PiggyVest helps over 4 million customers achieve
                         their financial goals by helping them save and invest with ease.</p>
                </div>

                <div className="group-images">
                    <div className="main-cards">
                        <img src={heroGirl} className="hero-girl"placeholder='' />
                        <div>
                            <img src={rect}  className="rect" placeholder='' />
                            <img src={card1} className="card one" placeholder='My Rent Card' />
                            <img src={card2} className="card two" placeholder='Investify Card' />
                        </div>
                    </div>   
                </div>
            </header>
            <section className='second-pane'>
                <div className="shield-area">
                    <img src={shield}  className="shield-icon" placeholder='A blue shield'/>
                </div>
                <div className='security-text'>
                    <h2 className='security-header'>Your security is our priority</h2>
                    <p>PiggyVest uses the highest level of Internet Security and it is secured by 256 bits SSL 
                        security encryption to ensure that your information is comepletely protected from fraud.</p>
                    <a>Learn more  </a>
                </div>
            </section>
            <section>
                <div className='first-row-options'>
                    <div className='saving-options'>
                        <img className='saving-option-icon' src={piggy} placeholder='a saving option logo'/>
                        <h4>Automated Savings</h4>
                        <p>Build a dedicated savings faster on your terms automatically or manually.</p>
                        <div>
                            <img className='' placeholder='' src=''></img>
                            <p>Piggybank</p>     
                        </div>

                    </div>

                    <div className='saving-options'>
                        <a>
                            <img className='saving-option-icon' src={safelock} placeholder='a saving option logo'/>
                            <h4>Fixed Savings</h4>
                            <p>Lock money away for a fixed duration with no access to it until maturity. It’s like having a custom fixed deposit.</p>
                            <div className='saving-option-links'>
                                <img className='' placeholder='' src=''></img>
                                <p>Safelock</p>   
                            </div>
                        </a>
                    </div>
                </div>

                <div className='first-row-options'>
                    <div className='saving-options'>
                        <a>
                            <img className='saving-option-icon' src={target} placeholder='a saving option logo'/>
                            <h4>Goal-oriented Savings</h4>
                            <p>Reach all your savings goals faster. Save towards multiple goals on your own or with a group.</p>
                            <div>
                                <img className='' placeholder='' src=''></img>
                                <p>Target Savings</p>
                            </div>
                        </a>
                    </div>

                    <div className='saving-options'>
                        <a>
                            <img className='saving-option-icon' src={flex} placeholder='a saving option logo'/>
                            <h4>Flexible Savings</h4>
                            <p>Save, transfer, withdraw, manage and organise your money for free at any time.</p>
                            <div>  
                                <img className='' placeholder='' src=''></img>
                                <p>Flex Naira</p>
                            </div>
                        </a>
                    </div>
                </div>
            </section>
        </div>
    );
}