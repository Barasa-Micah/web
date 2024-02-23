import React,{useState, useEffect} from 'react'

const LandingPage = () => {
    const [showWelcome, setShowWelcome] = useState(false);

    
    // Adding a simple animation when the component mounts
    useEffect (() => {
        setTimeout(() => {
            setShowWelcome(true);
        }, 500);
    }, []);

  return (
    <div className='landing-container'>
        <div className='landimg-content'>
            <h1 className={`welcome-message ${showWelcome ? 'show' : ''}`}>
               Welcome To My Portfolio
            </h1>
            <p>
                Hi I'm Micah Barasa, a passionate FullStack Software Engineer with a love for building robust and scalable applications.
            </p>
            <div className='call-to-action'>
                <p>Explore my work and skills below</p>
            </div>
            <div className='action-buttons'>
                <Link to='/projects' className='explore button'>
                    Explore Projects
                </Link>
                <Link to='about' className='learn-more-button'>
                    Learn More About Me
                </Link>
            </div>
        </div>
    </div>
  )
}

export default LandingPage
