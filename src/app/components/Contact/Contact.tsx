import React from 'react';
import styles from "./stylesForContact.module.css";
import Link from "next/link";

const Contact = () => {
    return (
        <div className={styles.contactContainer}>
            <div className={styles.textContent}>
                <div className={styles.titlecontact}>
                    <h2>Контакти</h2>
                </div>
                <div className={styles.blockInst} style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '10px'}}>
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        fill="currentColor"
                        className={styles.iconStyle}
                        viewBox="0 0 16 16"
                    >
                        <path
                            d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.9 3.9 0 0 0-1.417.923A3.9 3.9 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.9 3.9 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.9 3.9 0 0 0-.923-1.417A3.9 3.9 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599s.453.546.598.92c.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.5 2.5 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.5 2.5 0 0 1-.92-.598 2.5 2.5 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233s.008-2.388.046-3.231c.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92s.546-.453.92-.598c.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92m-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217m0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334"
                        />
                    </svg>
                    <h3

                    ><Link target="_blank" href={"https://www.instagram.com/demchenko_cosmetologist/"} className={styles.instagramLink}>@demchenko_cosmetologist</Link>

                    </h3>
                </div>
                <div id={styles.blockViber} style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '10px' }} className={styles.viberContainer}>
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        fill="currentColor"
                        className={styles.iconStyle}
                        viewBox="0 0 16 16"
                    >
                        <path
                            d="M3.654 1.328a.678.678 0 0 0-1.015-.063L1.605 2.3c-.483.484-.661 1.169-.45 1.77a17.6 17.6 0 0 0 4.168 6.608 17.6 17.6 0 0 0 6.608 4.168c.601.211 1.286.033 1.77-.45l1.034-1.034a.678.678 0 0 0-.063-1.015l-2.307-1.794a.68.68 0 0 0-.58-.122l-2.19.547a1.75 1.75 0 0 1-1.657-.459L5.482 8.062a1.75 1.75 0 0 1-.46-1.657l.548-2.19a.68.68 0 0 0-.122-.58zM1.884.511a1.745 1.745 0 0 1 2.612.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.68.68 0 0 0 .178.643l2.457 2.457a.68.68 0 0 0 .644.178l2.189-.547a1.75 1.75 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.6 18.6 0 0 1-7.01-4.42 18.6 18.6 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877zM11 .5a.5.5 0 0 1 .5-.5h4a.5.5 0 0 1 .5.5v4a.5.5 0 0 1-1 0V1.707l-4.146 4.147a.5.5 0 0 1-.708-.708L14.293 1H11.5a.5.5 0 0 1-.5-.5"
                        />
                    </svg>
                    <a
                        className={styles.viberLink}
                        href="viber://chat?number=+380931486762"
                        target="_blank"
                    >
                        Написати у Viber
                    </a>
                </div>
                <div className={styles.blockPhone}>
                    <h2 className={styles.phoneStyle}>Мій телефон:<a href="tel:+380123456789" className={styles.removeTextDecoration}><p className={styles.styleForPhone}>+380-(93)-148-67-62</p> </a></h2>
                </div>
                <div className={styles.locationStyle}>
                    <h3>Локація:</h3>
                    <h3><Link target={"_blank"} className={styles.linkForMap} href={"https://www.google.com/maps?ll=50.077413,29.91161&z=16&t=m&hl=ru&gl=UA&mapclient=embed&q=%D1%83%D0%BB.+%D0%A1%D0%B8%D0%BC%D0%BE%D0%BD%D0%B0+%D0%9F%D0%B5%D1%82%D0%BB%D1%8E%D1%80%D1%8B,+13%D0%B0+%D0%A4%D0%B0%D1%81%D1%82%D0%BE%D0%B2+%D0%9A%D0%B8%D0%B5%D0%B2%D1%81%D0%BA%D0%B0%D1%8F+%D0%BE%D0%B1%D0%BB%D0%B0%D1%81%D1%82%D1%8C+08505"}>м. Фастів вул. Симона Петлюри, 13а, 2 поверх</Link></h3>
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1076.5464732788487!2d29.911314408079765!3d50.07742202420652!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40d3551c1f7bffff%3A0x36915fc6f682bd0e!2z0YPQuy4g0KHQuNC80L7QvdCwINCf0LXRgtC70Y7RgNGLLCAxM9CwLCDQpNCw0YHRgtC-0LIsINCa0LjQtdCy0YHQutCw0Y8g0L7QsdC70LDRgdGC0YwsIDA4NTA1!5e0!3m2!1sru!2sua!4v1737277838483!5m2!1sru!2sua"
                        width="70%"
                        height="150"
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                        className={styles.iframe}
                    ></iframe>
                </div>
            </div>
        </div>
    );
};

export default Contact;
