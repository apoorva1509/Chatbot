import React , {useState} from "react";
import Image1 from "../images/imag1.svg"
import Emoji from "../images/wavingHand.svg"
import Question from "../images/question.svg"
import Chat from "../images/chat.svg"
import "../App.css"
import Bulletin from "../images/bulletin.svg"

function Chatbot() {

    const [popup,setPopup] = useState(false);
    const [divPopup,setDivPopup]= useState(false);
    return <div>
            <button class="chat-btn" onClick={()=>[setPopup(!popup),setDivPopup(false)]}>
            <img src={Image1} alt="React Logo" />
            </button>
            <div className={popup?"chat-popup show":"chat-popup"}>
                <div class="chat-header">
                    <div class="chat-header-animation">
                    <span class="name">IRIS</span>
                    <span class="greet">Hello <img src={Emoji} alt="Waving Hand" /></span>
                    <span class="header1">I am Iris, a Virtual Assistant How may I help you?</span>
                    <button class="btn" onClick={()=>setDivPopup(true)}>
                        <img src={Image1} alt="React Logo" />
                    </button>
                    </div>
                </div>
                <div class={divPopup?"chat-questions show1":"chat-questions"}>
                    <p class="heading">Frequently Asked Questions </p>
                   <img src={Question} alt="Question" class="question"/> 
                   <div class="question-box box1">
                        <img class="bulletin-img"src={Bulletin} alt="Bulletin" />
                        <p class="bulletin">Can I redeem my FB before the original term?</p>
                   </div>
                   <div class="question-box box2">
                        <img class="bulletin-img"src={Bulletin} alt="Bulletin" />
                        <p class="bulletin">How do I pay my Credit card bill?</p>
                   </div>
                   <div class="question-box box3">
                        <img class="bulletin-img"src={Bulletin} alt="Bulletin" />
                        <p class="bulletin">How can I get my Account Statement?</p>
                   </div>
                   <div class="question-box box4">
                        <img class="bulletin-img"src={Bulletin} alt="Bulletin" />
                        <p class="bulletin">What is the tenure of Fixed Deposit?</p>
                   </div>
                   <div class="conversation">
                        <img class="chat-img"src={Chat} alt="Chat" />
                        <p class="chat">Start a New Conversation</p>
                   </div>
                </div>
            </div>
        </div>
}

export default Chatbot;