import classes from "./RegisterForm.module.scss";

const RegisterForm = ({ submitCallback }) => {
  return (
    <form className={classes.Register} onSubmit={submitCallback}>
      <h1>BELLA</h1>
      <div className={classes.input_cont}>
        <h5>Ваше имя</h5>
        <input
          type="text"
          placeholder="введите имя"
          name="name"
          id="name"
          required
        />
      </div>

      <div className={classes.input_cont}>
        <h5>Ваше Фамилия</h5>
        <input
          type="text"
          placeholder="введите фамилию"
          name="lastName"
          required
          id="lastName "
        />
      </div>

      <div className={classes.input_cont}>
        <h5>Номер телефона</h5>
        <input
          type="text"
          name="phone"
          placeholder="введите номер телефона"
          required
          pattern="0[0-9]{9}|+[0-9]{13}"
          minLength="9"
          maxLength="13"
        />
      </div>

      <div className={classes.btn_cont}>
        <span>
          <input
            type="checkbox"
            name="checked"
            required
            className={classes.chec}
          />
          <p>Согласен с условиями публичной аферты</p>
        </span>
        <button className={classes.btn}>
          <p>Продолжить </p>
        </button>
      </div>
    </form>
  );
};

export default RegisterForm;
