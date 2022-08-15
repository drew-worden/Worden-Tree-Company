//Import Styles
import { useState } from "react"
import axios from "axios"
import styles from "styles/pages/index.module.css"

//Index Component
export default function Index() {
    //State
    const [name, setName] = useState(null)
    const [email, setEmail] = useState(null)
    const [phone, setPhone] = useState(null)
    const [subject, setSubject] = useState(null)
    const [inquiry, setInquiry] = useState(null)

    //Handlers
    function handleSubmit() {
        axios
            .post("/api/email", { name, email, phone, subject, inquiry })
            .then((response) => {})
            .catch((error) => {
                console.error(error)
            })
    }
    //Markup
    return (
        <main className={styles.main}>
            <section className={styles.heroSection} id="home">
                <img className={styles.logo} src="/images/logo.svg" />
                <a href="#contact">
                    <span className={styles.contactButton + " clickable"}>Contact</span>
                </a>
                <div className={styles.contactInfo}>
                    <span>shea@wordentree.com</span>
                    <span>(959) 202-8158</span>
                    <span>@wordentree</span>
                </div>
            </section>
            <section className={styles.workSection} id="work">
                <h2 className={styles.workSectionTitle}>Work</h2>
                <div className={styles.workContainer}>
                    <img className={styles.workPhoto} src="/images/work/1.jpg" />
                    <img className={styles.workPhoto} src="/images/work/2.jpg" />
                    <img className={styles.workPhoto} src="/images/work/3.jpg" />
                    <img className={styles.workPhoto} src="/images/work/4.jpg" />
                    <img className={styles.workPhoto} src="/images/work/5.jpg" />
                    <img className={styles.workPhoto} src="/images/work/6.jpg" />
                    <img className={styles.workPhoto} src="/images/work/7.jpg" />
                    <img className={styles.workPhoto} src="/images/work/8.png" />
                    <img className={styles.workPhoto} src="/images/work/9.png" />
                    <img className={styles.workPhoto} src="/images/work/10.png" />
                    <img className={styles.workPhoto} src="/images/work/11.png" />
                    <img className={styles.workPhoto} src="/images/work/12.png" />
                </div>
            </section>
            <section className={styles.aboutSection} id="about">
                <h2 className={styles.sectionTitle}>About</h2>
                <p className={styles.sectionPar}>
                    Write description to go here. Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus quo
                    consectetur accusamus eligendi, totam incidunt autem, possimus perspiciatis, molestiae alias
                    suscipit eius. Enim facilis beatae repudiandae ducimus, placeat excepturi nihil laboriosam modi
                    mollitia quo nisi esse perspiciatis quos nostrum iure quod doloribus accusantium minus quibusdam
                    amet dignissimos rem veritatis? Necessitatibus ullam voluptatibus veritatis. Culpa rerum nostrum
                    sequi nam? Earum enim quo minima est tenetur asperiores magnam at libero illum expedita iure
                    repellendus, laudantium reprehenderit itaque atque dolorum repellat placeat natus dignissimos sint
                    debitis ipsam eveniet dolor. Provident quis, aspernatur reiciendis aperiam, voluptas, facilis
                    possimus nesciunt inventore tenetur neque natus rerum!
                </p>
            </section>
            <section className={styles.servicesSection} id="services">
                <h2 className={styles.servicesTitle}>Services</h2>
                <div className={styles.servicesContainer}>
                    <div className={styles.service}>
                        <span className={styles.serviceTitle}>Tree Removal</span>
                        <p className={styles.servicePar}>Description of service 1.</p>
                    </div>
                    <div className={styles.service}>
                        <span className={styles.serviceTitle}>Land Clearing</span>
                        <p className={styles.servicePar}>Description of service 1.</p>
                    </div>
                    <div className={styles.service}>
                        <span className={styles.serviceTitle}>Brush Cutting</span>
                        <p className={styles.servicePar}>Description of service 1.</p>
                    </div>
                    <div className={styles.service}>
                        <span className={styles.serviceTitle}>Snow Plowing</span>
                        <p className={styles.servicePar}>Description of service 1.</p>
                    </div>
                </div>
            </section>
            <section className={styles.contactSection} id="contact">
                <h2 className={styles.contactTitle}>Contact</h2>
                <form className={styles.form} onSubmit={handleSubmit}>
                    <input type="text" placeholder="Name" required onChange={(e) => setName(e.target.value)} />
                    <input type="email" placeholder="Email" required onChange={(e) => setEmail(e.target.value)} />
                    <input type="text" placeholder="Phone" required onChange={(e) => setPhone(e.target.value)} />
                    <input type="text" placeholder="Subject" required onChange={(e) => setSubject(e.target.value)} />
                    <textarea
                        rows="10"
                        placeholder="Inquiry/Job Description"
                        required
                        onChange={(e) => setInquiry(e.target.value)}
                    />
                    <button className="clickable">Submit</button>
                </form>
            </section>
        </main>
    )
}
