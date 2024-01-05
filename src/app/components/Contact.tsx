export default function Contact() {
    return (
        <>
            <section className="contact">
                <div className="contact__container">
                    <div className="contact__info">
                        <h2>Contact Us</h2>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas
                            voluptatem, quidem, voluptate, quibusdam voluptas voluptatibus
                            doloribus iusto voluptatum quae nemo quos! Quisquam, quibusdam
                            voluptate. Quisquam, quibusdam voluptate.
                        </p>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas
                            voluptatem, quidem, voluptate, quibusdam voluptas voluptatibus
                            doloribus iusto voluptatum quae nemo quos! Quisquam, quibusdam
                            voluptate. Quisquam, quibusdam voluptate.
                        </p>
                    </div>
                    <div className="contact__form">
                        <form action="">
                            <div className="form__group">
                                <label htmlFor="name">Name</label>
                                <input type="text" id="name" />
                            </div>
                            <div className="form__group">
                                <label htmlFor="email">Email</label>
                                <input type="email" id="email" />
                            </div>
                            <div className="form__group">
                                <label htmlFor="message">Message</label>
                                <textarea name="message" id="message" cols={30} rows={10}></textarea>
                            </div>
                            <button className="button-start">Send</button>
                        </form>
                    </div>
                </div>
            </section>
        </>
    );
}