import { useState, useEffect } from "react";

const initialValues = { fullname: "", phone_number: "" };

function Form({ addContact, contacts }) {
  const [form, setForm] = useState(initialValues);

  useEffect(() => {
    setForm(initialValues);
  }, [contacts]);

  const onChangeInput = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const onSubmit = (e) => {
    e.preventDefault();

    if (form.fullname === "" || form.phone_number === "") {
      return false;
    }

    addContact([...contacts, form]);
    console.log(form);
  };

  return (
    <div>
      <form onSubmit={onSubmit}>
        <div>
          {" "}
          <input style={{marginBottom:"4px"}}
            name="fullname"
            placeholder="Fullname"
            onChange={onChangeInput}
            value={form.fullname}
          />
        </div>

        <div>
          {" "}
          <input
            name="phone_number"
            placeholder="Phone Number"
            onChange={onChangeInput}
            value={form.phone_number}
          />
        </div>

        <div  style={{display:"flex" , justifyContent:"center"}}>
          <button style={{width:"400px",height:"35px",marginTop:"7px"}} onClick={onSubmit}>Add</button>
        </div>
      </form>
    </div>
  );
}

export default Form;
