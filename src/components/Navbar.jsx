import piggylogo from '../images/logo.svg'
export const NavBar = () =>{
    return(
        <>
        <nav >
                <div className='nav-div-1'>
                    <a href='https://www.piggyvest.com/'>
                        <img src={piggylogo} alt='piggyvest-logo'/>
                    </a>
                </div >
                <div className='nav-div-2'>
                    <a href='https://www.piggyvest.com/'>
                        Save
                    </a>
                    <a href='https://www.piggyvest.com/'>
                        Invest
                    </a>
                    <a href='https://www.piggyvest.com/'>
                        Stories
                    </a>
                    <a href='https://www.piggyvest.com/'>
                        FAQs
                    </a>
                    <a href='https://www.piggyvest.com/'>
                        Stories
                    </a>
                </div>
                <div className='nav-div-3 nav-buttons'>
                    <a href='https://apps.apple.com/ng/app/piggyvest/id1263117994' className='btn-left btn'>Sign In</a>
                    <a href='https://play.google.com/store/apps/details?id=com.piggybankng.piggy' className='account-btn black-btn'>Create new account</a>
                </div>
                {/* <div></div> */}
            </nav>
        </>
    )
 }