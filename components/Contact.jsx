import axios from "axios";
import React, { useState } from "react";
import ReCAPTCHA from "react-google-recaptcha";

export default function Contact() {
    const formID = "mk3Zf2W2";
    const formSparkURL =`https://submit-form.com/${formID}`;
    const recaptchaKey ="6Le5aAIjAAAAAA_NG9xFLv-mgmoMT4VO2Ar-I6Ot";
    const recaptchaRef = React.useRef(null);
    const initialForm = {
        name: "",
        email: "",
        message: ""
    };

    const [formData, setFormData] = React.useState(initialForm);

    const [submitMessage, setSubmitMessage] = React.useState("");

    const [token, setToken] = React.useState("");

    const handleChange = (event) => {
        const {name, value} = event.target;
        setFormData(prev => {
            return {
                ...prev,
                [name]: value
            }
        })
    };

    const submitForm = async (event) => {
        event.preventDefault();
        await postSubmission();
    };

    const postSubmission = async () => {
        const payload = {
            ...formData,
            "g-recaptcha-response": token
        }

        try {
            const result = await axios.post(formSparkURL, payload);
            setSubmitMessage("Thanks! I'll keep in touch.");
            setFormData(initialForm);
            recaptchaRef.current.reset();
        } catch(error) {
            setSubmitMessage("Sorry, there was a problem. Please try again.")
        }
    };

    const updateToken = (token) => {
        setToken(token);
    };

    return (
        <section id="contact" className="section--contact">
            <h1 className="title">Contact</h1>
            {submitMessage && <div className="submitMessage">{submitMessage}</div>}
            <form className="form--container" onSubmit={submitForm}>
                <input 
                    type="text"
                    placeholder="Name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                />
                <input 
                    type="email"
                    placeholder="Email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                />
                <textarea 
                    placeholder="Message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                />
                <ReCAPTCHA 
                    ref={recaptchaRef}
                    sitekey={recaptchaKey}
                    onChange={updateToken}
                    theme="dark"
                />
                <button>Submit</button>
            </form>
        </section>
    )
}