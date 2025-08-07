import React, { useEffect, useRef, useState } from 'react';
import './Contact.css';

const Contact = () => {
    const contactRef = useRef(null);
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setVisible(true);
                    observer.disconnect();
                }
            },
            { threshold: 0.3 }
        );
        if (contactRef.current) observer.observe(contactRef.current);
        return () => observer.disconnect();
    }, []);

    return (
        <div className={`contact ${visible ? 'visible' : ''}`} ref={contactRef}>
            <div className='contact-container'>
                <div className="contact-header">
                    <h1>Get In Touch</h1>
                    <p>We'd love to hear about your project or idea. Fill out the form and let’s talk.</p>
                </div>

                <div className="contact-content">
                    <div className="contact-form">
                        <form>
                            <div className="form-group">
                                <label>Name</label>
                                <input type="text" placeholder="Your name" required />
                            </div>
                            <div className="form-group">
                                <label>Email</label>
                                <input type="email" placeholder="you@example.com" required />
                            </div>
                            <div className="form-group">
                                <label>Subject</label>
                                <input type="text" placeholder="What's this about?" required />
                            </div>
                            <div className="form-group">
                                <label>Message</label>
                                <textarea rows="5" placeholder="Type your message here..." required></textarea>
                            </div>
                            <button type="submit">Send Message</button>
                        </form>
                    </div>

                    <div className="contact-info">
                        <h3>Contact Info</h3>
                        <p><strong>Address:</strong> Enugu, Nigeria</p>
                        <p><strong>Email:</strong> info@hintcore.com.ng</p>
                        <p><strong>Phone:</strong> +234 803 259 8778</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;