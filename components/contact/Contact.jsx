"use client";
import React, { useState } from "react";
import { FaUser, FaEnvelope, FaRegComments } from "react-icons/fa";
import emailjs from "emailjs-com";
import Toast from "./Toast";

const ContactForm = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: "",
        timestamp: "",
    });
    const [errors, setErrors] = useState({});
    const [toastMessage, setToastMessage] = useState("");
    const [showToast, setShowToast] = useState(false);
    const [toastType, setToastType] = useState("");

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevState) => ({
            ...prevState,
            [name]: value,
        }));
    };

    const validateForm = () => {
        let formErrors = {};
        let isValid = true;

        if (!formData.name.trim()) {
            formErrors.name = "Name is required";
            isValid = false;
        }

        const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        if (!formData.email.trim()) {
            formErrors.email = "Email is required";
            isValid = false;
        } else if (!emailPattern.test(formData.email)) {
            formErrors.email = "Invalid email format";
            isValid = false;
        }

        if (!formData.message.trim()) {
            formErrors.message = "Message is required";
            isValid = false;
        }

        setErrors(formErrors);
        return isValid;
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!validateForm())
            return

        const updatedFormData = {
            ...formData,
            timestamp: new Date().toISOString(),
        };

        emailjs
            .send(
                process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID,
                process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID,
                updatedFormData,
                process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY
            )
            .then((response) => {
                setFormData({
                    name: "",
                    email: "",
                    message: "",
                    timestamp: "",
                });
                setToastMessage("Message sent successfully!");
                setToastType("success");
                setShowToast(true);
            })
            .catch((err) => {
                setToastMessage("Failed to send message. Please try again.");
                setToastType("error");
                setShowToast(true);
            });

    };

    return (
        <section className="contact background-svg" id="contact" data-aos="fade-up">
            <div className="contact-container">
                <h2>Contact Us</h2>

                <form onSubmit={handleSubmit} className="contact-form">
                    <div className="form-group">
                        <label htmlFor="name">
                            <FaUser className="form-icon" />
                            Name:
                        </label>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            placeholder="Your name"
                        />
                        {errors.name && <p className="error">{errors.name}</p>}
                    </div>

                    <div className="form-group">
                        <label htmlFor="email">
                            <FaEnvelope className="form-icon" />
                            Email:
                        </label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            placeholder="Your email"
                        />
                        {errors.email && <p className="error">{errors.email}</p>}
                    </div>

                    <div className="form-group">
                        <label htmlFor="message">
                            <FaRegComments className="form-icon" />
                            Message:
                        </label>
                        <textarea
                            id="message"
                            name="message"
                            value={formData.message}
                            onChange={handleChange}
                            placeholder="Your message"
                        />
                        {errors.message && <p className="error">{errors.message}</p>}
                    </div>

                    <button type="submit">Submit</button>
                </form>

            </div>

            <Toast
                message={toastMessage}
                show={showToast}
                onClose={() => setShowToast(false)}
                type={toastType}
            />
        </section>
    );
};

export default ContactForm;
