import React from 'react'
import {useState, useEffect} from 'react'
import {useNavigate} from 'react-router-dom'
import {Link} from 'react-router-dom'
import {HiOutlineArrowNarrowRight} from 'react-icons/hi'
const Success = () => {
  const [countdown, setCountdown] = useState(10);
  const navigate = useNavigate();
  useEffect(() => {
const timeOutId = setInterval(() => {
  setCountdown(prevCount => {
    if (prevCount === 1) {
      clearInterval(timeOutId);
      navigate('/');
    }
    return prevCount - 1;
  })
}, 1000);
return () => clearInterval(timeOutId);
  }, [navigate])

  return (
    <>
    <section className='notFound'>
    <div className="container">
      <img src="/sandwich.png" alt="success" />
      <h1>Redirecting to Home in {countdown} seconds...</h1>
      <Link to={"/"}>Click here to go back now{" "}<span><HiOutlineArrowNarrowRight/></span> </Link>
    </div>
    </section>
    </>
  )
}

export default Success