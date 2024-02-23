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
    <div>
      
    </div>
  )
}

export default LandingPage
