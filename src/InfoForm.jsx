import { useState, useEffect } from 'react'
import './InfoForm.css'

function InfoForm() {
  const [field, setField] = useState({
    firstName: '',
    surname: '',
    email: '',
    phone: '',
    country: 'Ukraine'
  });

  const [gender, setGender] = useState('');

  const [agree, setAgree] = useState('false');

  const [formData, setFormData] = useState([]);

  useEffect(() => {
    setFormData((formData) => {
      const {firstName, surname, email, phone, country} = field;
      // formData = `
      // First Name: ${firstName}
      // Surname: ${surname}
      // Email: ${email}
      // Phone: ${phone}
      // Country: ${country}
      // Gender: ${gender}
      // Agree: ${agree}
      // `;

      for (const [key, value] of Object.entries(field)) {
        formData.push(`${key}: ${value}`);
      };

      formData.push(`gender: ${gender}`);
      formData.push(`agree: ${agree}`);

      return formData;
    })
  }, [field, gender, agree])

  const onChangeHandler = (e) => {
    e.preventDefault();

    const { value, name } = e.target;
    // console.log(value, name);

    setField((field) => (
      {
        ...field,
        [name]: value
      }
    ))
  }

  const onChangeGenderHandler = (e) => {
    const { name, id } = e.target;
    // console.log(name, id);
    setGender(id);
  }

  const onChangeAgreeHandler = (e) => {
    const { name, checked } = e.target;
    console.log(name, checked);
    setAgree(checked+'');
  }

  const onClickSubmitButtonHandler = (e) => {
    // console.log(field, gender);
  }

  const onSubmitFormHandler = (e) => {
    e.preventDefault();
    console.log(field, gender, agree);

    
  }

  return (
    <div className='wrapper'>
      <div className='form'>
        <h2>React Form</h2>
        <form onSubmit={onSubmitFormHandler}>
          <fieldset>
            <legend>First Name:</legend>
            <label htmlFor="firstName">
              <input onChange={onChangeHandler} type="text" name='firstName' id='firstName' autoComplete="first name" />
            </label>
          </fieldset>

          <fieldset>
            <legend>Surname:</legend>
            <label htmlFor="surname">
              <input onChange={onChangeHandler} type="text" name='surname' id='surname' autoComplete="family name" />
            </label>
          </fieldset>

          <fieldset>
            <legend>Email:</legend>
            <label htmlFor="email">
              <input onChange={onChangeHandler} type="text" name='email' id='email' autoComplete="email" />
            </label>
          </fieldset>

          <fieldset>
            <legend>Phone:</legend>
            <label htmlFor="phone">
              <input onChange={onChangeHandler} type="text" name='phone' id='phone' autoComplete="phone" />
            </label>
          </fieldset>

          <fieldset>
            <legend>Choose country:</legend>
            <label htmlFor="country">
              <select onChange={onChangeHandler} name='country' id='country' autoComplete="country">
                <option value="Ukraine">Ukraine</option>
                <option value="Poland">Poland</option>
                <option value="Germany">Germany</option>
              </select>
            </label>
          </fieldset>

          <fieldset>
            <legend>Gender:</legend>
            <label htmlFor="male">Male
              <input type='radio' onChange={onChangeGenderHandler} value={gender} name='gender' id='male' />
            </label>
            <br />
            <label htmlFor="female">Female
              <input type='radio' onChange={onChangeGenderHandler} value={gender} name='gender' id='female' />
            </label>
          </fieldset>

          <label htmlFor="agree">Agree
            <input type="checkbox" onChange={onChangeAgreeHandler} name='agree' id='agree' value={field.agree} />
          </label>
          <hr />

          <button onClick={onClickSubmitButtonHandler} type="submit">Submit</button>
        </form>
      </div>

      <div>
        <h2>Form Data</h2>
        <div className='formData'>
          <p>First Name: {field.firstName}</p>
          <p>Surname: {field.surname}</p>
          <p>Email: {field.email}</p>
          <p>Phone: {field.phone}</p>
          <p>Country: {field.country }</p>
          <p>Gender: {gender}</p>
          <p>Agree: {agree}</p>
        </div>
      </div>
    </div>
  )
}

export default InfoForm;
