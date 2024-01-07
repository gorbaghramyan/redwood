import styles from "./Contact.module.css"; // Importing CSS module

const InputField = ({
    label,
    type,
    placeholder,
}: {
    label: string;
    type: string;
    placeholder: string;
}) => (
    <div className={styles.inputField}>
        <label className={styles.label}>{label}</label>
        <input type={type} className={styles.input} placeholder={placeholder} />
    </div>
);

const ContactSection = () => {
    return (
        <section className={styles.contactUs}>
            <div className="absolute inset-0 bg-black bg-opacity-20"></div>
            <div className={styles.container}>
                <div className={styles.formContainer}>
                    <div className={styles.formCard}>
                        <div className={styles.header}>
                            <h2 className="text-4xl text-red-800 mb-2">
                                Contact Us
                            </h2>
                            <p>
                                If you&apos;re interested in custom Redwood
                                furniture, reach out to us!
                            </p>
                            <p>
                                Complete this form and we will get back to you
                                in 24 hours.
                            </p>
                        </div>
                        <InputField
                            label="Full Name"
                            type="text"
                            placeholder="Full Name"
                        />
                        <div className={styles.contactFields}>
                            <InputField
                                label="Email"
                                type="email"
                                placeholder="Email"
                            />
                            <InputField
                                label="Phone Number"
                                type="text"
                                placeholder="Phone Number"
                            />
                        </div>
                        <div className={styles.inputField}>
                            <label className={styles.label}>Message</label>
                            <textarea
                                className={styles.textarea}
                                placeholder="Type a message..."
                            ></textarea>
                        </div>
                        <button className={styles.submitButton}>
                            Send Message
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ContactSection;
