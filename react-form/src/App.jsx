import { useState } from "react";

const App = () => {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    age: "",
    password: "",
  });

  const [errors, setErrors] = useState({});

  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData({ ...formData, [name]: value });
  };

  const validate = () => {
    let errors = {};
    if ((!formData.username)) {
      errors.username = "Username is required";
    }

    if (!formData.email) {
      errors.email = "Please enter an email"
    } else if (!emailRegex.test(formData.email)) {
      errors.email = "Please enter a valid email";
    }

    if (!formData.age) {
      errors.age = "Input an age"
    } else if (formData.age < 18) {
      errors.age = "You are too young, you should be at least 18 or older."
    }

    if (formData.password.length < 8) {
      errors.password = "Password is too short"
    }
    setErrors(errors);

    return Object.keys(errors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log(formData);

    if (validate()) {
      setErrors({});
      alert("Login successful!")
    } else {
      console.log("There are errors")
    }
  };

  return (
    <div>
      <form action="" onSubmit={handleSubmit}>
        <label htmlFor="username">Name</label>
        <input
          type="text"
          name="username"
          id="username"
          value={formData.username}
          onChange={handleChange}
        />
        {errors.username && <p>{errors.username}</p>}

        <label htmlFor="username">Email</label>
        <input
          type="email"
          name="email"
          id="email"
          value={formData.email}
          onChange={handleChange}
        />
        {errors.email && <p>{errors.email}</p>}

        <label htmlFor="age">Age</label>
        <input
          type="number"
          name="age"
          id="age"
          value={formData.age}
          onChange={handleChange}
        />

        {errors.age && <p>{errors.age}</p>}

        <label htmlFor="password">Password</label>
        <input
          type="password"
          name="password"
          id="password"
          value={formData.password}
          onChange={handleChange}
        />
        {errors.password && <p>{errors.password}</p>}

        <button>Login</button>
      </form>
    </div>
  );
};

export default App;
