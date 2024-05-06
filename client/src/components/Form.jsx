import { useState } from "react";
import validation from "../utils/Validation";
import styles from './estilos/Form.module.css'

const Form = ({login}) => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [errors, setErrors] = useState({})

  const handlersubmit = (event)=>{
    event.preventDefault();
    login(formData);
  }

  const handlerChange = (event)=>{
    const property = event.target.name;
    const value = event.target.value;

    setFormData({...formData, [property]: value})
    setErrors(validation({...formData, [property]: value})) 

  }


  return (
    <div className={styles.form}>
      <form onSubmit={handlersubmit}>
        <div>
          <label htmlFor="">Email : </label>
          <input type="text" name="email" onChange={handlerChange} value={formData.email}/>
          <p>{errors.email}</p>
        </div>

        <div>
          <label htmlFor="password:">Password : </label>
          <input type="password" name="password" onChange={handlerChange} value={formData.password}/>
          <p>{errors.password}</p>
        </div>

        <button>Enviar</button>
      </form>
    </div>
  );
};

export default Form;
