import classes from "./Confirmation.module.scss";

const Confirmation = () => {
  return (
    <form className={classes.Confirmation}>
      <h1>BELLA</h1>
      <div className={classes.input_cont}>
        <h5>ВХОД</h5>
        <input
          type="phone"
          placeholder="введите номер телефона"
          name="phone"
          required
          pattern="0[0-9]{9}|+[0-9]{13}"
          minLength="13"
        />
      </div>
      <div className={classes.btn_cont}>
        <button className={classes.btn_3}>
          <p>Продолжить</p>
        </button>

        <button className={classes.btn_2}>
          <p>Не пришло SMS?</p>
        </button>
        <button className={classes.btn}>
          <p>Отправить снова </p>
          <p>0:59</p>
        </button>
      </div>
    </form>
  );
};

export default Confirmation;
