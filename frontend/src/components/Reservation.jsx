import React from 'react'
import {HiOutlineArrowNarrowRight} from "react-icons/hi"
import axios from 'axios'
import { useState } from 'react'
import toast from 'react-hot-toast'
import {useNavigate} from 'react-router-dom'

const Reservation = () => {
    const [firstName, setFirstName] = useState("") //shift+alt+downarrow to copy the line and paste
    const [lastName, setLastName] = useState("")
    const [email, setEmail] = useState("")
    const [time, setTime] = useState("")
    const [date, setDate] = useState("")
    const [phone, setPhone] = useState(0)
    const navigate = useNavigate();

    const handleReservation = async (e) => {
        e.preventDefault();
        try{

            console.log("hereee")
            const data = await axios.post("http://localhost:4000/api/v1/reservation/send",
            {firstName, lastName, email, date, time, phone},  {headers: {'Content-Type': 'application/json'}, withCredentials: true});
            toast.loading("Sending your reservation...");

            toast.success(data.data.message);
            console.log("message", data)
            setFirstName("");
            setLastName("");
            setEmail("");
            setDate("");
            setTime("");
            setPhone(0);
            navigate("/success");
            toast.success("Reservation sent successfully");
        }
        catch(err){
            console.log("Errrpr", err)
            toast.error(err.response.data.message);
        }
    }
  return (
    <section className='reservation' id='reservation'>
        <div className="container">
            <div className="banner">
                <img src="/reservation.png" alt="reservation" />
            </div>
            <div className="banner">
                <div className="reservation_form_box">
                    <h1>MAKE A RESERVATION</h1>
                    <p>For further questions, Please Call</p>
                    <form>
                        <div>
                            <input type="text" placeholder='First Name' value={firstName} onChange={e => setFirstName(e.target.value)} />
                            <input type="text" placeholder='Last Name' value={lastName} onChange={e => setLastName(e.target.value)} />
                        </div>
                        <div>
                            <input type="date" placeholder='Date' value={date} onChange={e => setDate(e.target.value)}/>
                            <input type="time" placeholder='Time' value={time} onChange={e => setTime(e.target.value)}/>
                            </div>
                            <div>
                                <input type="email" placeholder='Email' className='email_tag' value={email} onChange={e => setEmail(e.target.value)} />
                                <input type="number" placeholder='Phone no' value={phone} onChange={e => setPhone(e.target.value)} />
                            </div>
                            <button type='submit' onClick={handleReservation}>RESERVE NOW{""} <span><HiOutlineArrowNarrowRight/></span></button>

                    </form>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Reservation