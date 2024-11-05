"use client";
import React, {
  ChangeEventHandler,
  FormEvent,
  useEffect,
  useRef,
  useState,
} from "react";
import styles from "./Form.module.scss";
import { useMask } from "@react-input/mask";
import instance from "@/axios/instance";
import { useRouter } from "next/navigation";
const Form = () => {
  const router = useRouter();
  const [name, setName] = useState<string | null>(null);
  const [phone, setPhone] = useState<string | null>(null);
  const [interested, setInterested] = useState<string | null>(null);

  const nameChange = (value: string) => {
    setName(value);
  };
  const phoneChange = (value: string) => {
    setPhone(value);
  };
  const interestedChange = (value: string) => {
    setInterested(value);
  };
  const senddata = async (e: FormEvent) => {
    e.preventDefault();
    try {
      const { data } = await instance.post("/api/", {
        name,
        phone,
        interested,
      });
      console.log(data);
      if (data.ok) {
        router.push("/succes");
      }
    } catch (error) {
      console.log(error);
    }
  };
  const inputRef = useMask({
    mask: "+7 (___) ___-__-__",
    replacement: { _: /\d/ },
  });
  return (
    <form className={styles.form} onSubmit={(e) => senddata(e)}>
      <label htmlFor="name" className={styles.form_label}>
        <span>Ваше имя</span>
        <input
          required
          type="text"
          name="name"
          onChange={(e) => {
            nameChange(e.target.value);
          }}
        />
      </label>

      <label htmlFor="number" className={styles.form_label}>
        <span> Номер телефона</span>
        <input
          ref={inputRef}
          required
          type="text"
          name="phone"
          placeholder="+7(___)_________"
          onChange={(e) => {
            phoneChange(e.target.value);
          }}
        />
      </label>
      <b className={styles.form_header}>Меня интересует</b>
      <div className={styles.checkbox_group}>
        <label htmlFor="landing" className={styles.checkbox_group_label}>
          <input
            required
            type="radio"
            name="syteType"
            id="landing"
            value="Одностраничный сайт"
            className={styles.checkbox_group_input}
            onChange={(e) => {
              interestedChange(e.target.value);
            }}
          />
          <span>Одностраничный сайт</span>
        </label>

        <label htmlFor="visitka" className={styles.checkbox_group_label}>
          <input
            type="radio"
            name="syteType"
            id="visitka"
            value={"Визитка"}
            className={styles.checkbox_group_input}
            onChange={(e) => {
              interestedChange(e.target.value);
            }}
          />
          <span>Многостраничный сайт</span>
        </label>

        <label htmlFor="shop" className={styles.checkbox_group_label}>
          <input
            type="radio"
            name="syteType"
            id="shop"
            value={"Магазин"}
            className={styles.checkbox_group_input}
            onChange={(e) => {
              interestedChange(e.target.value);
            }}
          />
          <span>Интернет магазин</span>
        </label>

        <label htmlFor="design" className={styles.checkbox_group_label}>
          <input
            type="radio"
            name="syteType"
            id="design"
            value={"Дизайн"}
            className={styles.checkbox_group_input}
            onChange={(e) => {
              interestedChange(e.target.value);
            }}
          />
          <span>Нужен только дизайн</span>
        </label>
        <label htmlFor="verstka" className={styles.checkbox_group_label}>
          <input
            type="radio"
            name="syteType"
            id="verstka"
            value={"Верстка"}
            className={styles.checkbox_group_input}
            onChange={(e) => {
              interestedChange(e.target.value);
            }}
          />
          <span>Верстка готового макета</span>
        </label>
      </div>
      <button className={styles.form_btn}>Отправить</button>
    </form>
  );
};

export default Form;
