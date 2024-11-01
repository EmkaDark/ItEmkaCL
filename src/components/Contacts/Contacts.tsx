import React from "react";
import styles from "./Contacts.module.scss";
import Form from "./Form";
const Contacts = () => {
  return (
    <section className={styles.contacts} id="contacts">
      <div className={[styles.contacts_container, "container"].join(" ")}>
        <div className={styles.contacts_head}>
          <h2 className={styles.contacts_header}>Контакты</h2>

          <p className={styles.contacts_head_desc}>
            Если у вас есть проект, который вы хотите обсудить, или вопросы по
            нашим услугам, мы всегда на связи. Оставьте заявку, и мы свяжемся с
            вами в ближайшее время.
          </p>
        </div>
        <div className={styles.form_container}>
          <Form />
        </div>
      </div>
    </section>
  );
};

export default Contacts;
