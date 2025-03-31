"use client";
import React, { useState } from "react";
import { FaUser, FaEnvelope, FaComments } from "react-icons/fa";
import emailjs from "emailjs-com";
import Toast from "./Toast";
import { useLanguage } from '@/context/LanguageProvider';
import { contactText } from "@/scripts/contactData";
import { IoIosSend } from "react-icons/io";

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
    const { language } = useLanguage();
    const data = contactText(language);

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
            formErrors.name = data.form.errors.nameRequired;
            isValid = false;
        }

        const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        if (!formData.email.trim()) {
            formErrors.email = data.form.errors.emailRequired;
            isValid = false;
        } else if (!emailPattern.test(formData.email)) {
            formErrors.email = data.form.errors.emailInvalid;
            isValid = false;
        }

        if (!formData.message.trim()) {
            formErrors.message = data.form.errors.messageRequired;
            isValid = false;
        }

        setErrors(formErrors);
        return isValid;
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!validateForm()) return;

        const updatedFormData = {
            ...formData,
            timestamp: new Date().toISOString(),
        };

        emailjs
            .send(
                process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID,
                process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID,
                updatedFormData,
                process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_ID
            )
            .then(() => {
                setFormData({
                    name: "",
                    email: "",
                    message: "",
                    timestamp: "",
                });
                setToastMessage(data.form.toast.success);
                setToastType("success");
                setShowToast(true);
            })
            .catch(() => {
                setToastMessage(data.form.toast.error);
                setToastType("error");
                setShowToast(true);
            });
    };

    return (
        <section className="contact background-svg" id="contact" data-aos="fade-up">
            <div className={`contact-container ${language}`}>
                <h2>{data.contactTitle}</h2>

                <form onSubmit={handleSubmit} className="contact-form">
                    <div className="form-group">
                        <label htmlFor="name">
                            <FaUser className="form-icon" />
                            {data.form.nameLabel}
                        </label>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            placeholder={data.form.namePlaceholder}
                        />
                        {errors.name && <p className="error">{errors.name}</p>}
                    </div>

                    <div className="form-group">
                        <label htmlFor="email">
                            <FaEnvelope className="form-icon" />
                            {data.form.emailLabel}
                        </label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            placeholder={data.form.emailPlaceholder}
                        />
                        {errors.email && <p className="error">{errors.email}</p>}
                    </div>

                    <div className="form-group">
                        <label htmlFor="message">
                            <FaComments className="form-icon" />
                            {data.form.messageLabel}
                        </label>
                        <textarea
                            id="message"
                            name="message"
                            value={formData.message}
                            onChange={handleChange}
                            placeholder={data.form.messagePlaceholder}
                        />
                        {errors.message && <p className="error">{errors.message}</p>}
                    </div>

                    <button type="submit">
                        <IoIosSend/>
                        {data.form.submitButton}
                    </button>
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
