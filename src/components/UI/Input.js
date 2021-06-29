import classes from "./Input.module.css";

const Input = () => {
  return (
    <div className={classes.inputName} id="inputfields">
      <label htmlFor="inputName">Full Name</label>
      <input
        className={classes.textInput}
        id="inputName"
        type="text"
        required
      />
    </div>
  );
};

export default Input;
