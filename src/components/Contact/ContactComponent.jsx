import { useState, useReducer } from "react";
import { motion } from "framer-motion";

import { parent, child } from "../../utils/staggerAnimation";

const formReducer = (state, action) => {
  if (action.type === "FIRST_NAME") {
    return {
      firstName: action.val,
      lastName: state.lastName,
      email: state.email,
      message: state.message,
    };
  }
  if (action.type === "LAST_NAME") {
    return {
      firstName: state.firstName,
      lastName: action.val,
      email: state.email,
      message: state.message,
    };
  }
  if (action.type === "EMAIL") {
    return {
      firstName: state.firstName,
      lastName: state.lastName,
      email: action.val,
      message: state.message,
    };
  }
  if (action.type === "MESSAGE") {
    return {
      firstName: state.firstName,
      lastName: state.lastName,
      email: state.email,
      message: action.val,
    };
  }

  return {
    firstName: "",
    lastName: "",
    email: "",
    message: "",
  };
};

const Contact = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, etEmail] = useState("");
  const [message, setMessage] = useState("");

  const [formState, dispatchForm] = useReducer(formReducer, {
    firstName: "",
    lastName: "",
    email: "",
    message: "",
  });

  const submitHandler = (event) => {
    event.preventDefault();

    console.log(formState);
    // Todo: post formState to DB 

    // clear form inputs
    dispatchForm({ type: null });
  };

  const firstNameHandler = (event) => {
    dispatchForm({ type: "FIRST_NAME", val: event.target.value });
  };

  const lastNameHandler = (event) => {
    dispatchForm({ type: "LAST_NAME", val: event.target.value });
  };

  const emailHandler = (event) => {
    dispatchForm({ type: "EMAIL", val: event.target.value });
  };

  const messageHandler = (event) => {
    dispatchForm({ type: "MESSAGE", val: event.target.value });
  };

  return (
    <>
      <div className="p-14">
        <motion.form
          variants={parent}
          initial="hidden"
          animate="show"
          autoComplete="false"
          onSubmit={submitHandler}
        >
          <div className="grid grid-rows-4 grid-cols-1">
            <motion.div variants={child} className="relative">
              <input
                type="text"
                id="fname"
                name="fname"
                autoComplete="off"
                className="peer 
                                                      h-10 w-full bg-dark-blue 
                                                      border-b-2 border-off-white text-off-white
                                                      focus:outline-none 
                                                      focus:border-accent-color 
                                                      placeholder-dark-blue"
                placeholder="First Name:"
                onChange={firstNameHandler}
                value={formState.firstName}
              />
              <label
                htmlFor="fname"
                className="absolute 
                                                      left-0 -top-3.5
                                                      text-off-white 
                                                      transition-all
                                                      peer-placeholder-shown:text-gray-400
                                                      peer-placeholder-shown:text-base
                                                      peer-placeholder-shown:top-2
                                                      peer-focus:-top-3.5 peer-focus:text-yellow-200
                                                      "
              >
                First Name:
              </label>
            </motion.div>

            <motion.div variants={child} className="relative">
              <input
                type="text"
                id="lname"
                name="lname"
                className="peer 
                                                      h-10 w-full bg-dark-blue 
                                                      border-b-2 border-off-white text-off-white
                                                      focus:outline-none 
                                                      focus:border-accent-color 
                                                      placeholder-dark-blue"
                placeholder="Last Name:"
                onChange={lastNameHandler}
                value={formState.lastName}
              />
              <label
                htmlFor="lname"
                className="absolute 
                                                      left-0 -top-3.5
                                                      text-off-white 
                                                      transition-all
                                                      peer-placeholder-shown:text-gray-400
                                                      peer-placeholder-shown:text-base
                                                      peer-placeholder-shown:top-2
                                                      peer-focus:-top-3.5 peer-focus:text-yellow-200
                                                      "
              >
                Last Name:
              </label>
            </motion.div>
            <motion.div variants={child} className="relative">
              <input
                type="email"
                id="email"
                name="email"
                className="peer 
                                                      h-10 w-full bg-dark-blue 
                                                      border-b-2 border-off-white text-off-white
                                                      focus:outline-none 
                                                      focus:border-accent-color 
                                                      placeholder-dark-blue"
                placeholder="Email:"
                onChange={emailHandler}
                value={formState.email}
              />
              <label
                htmlFor="email"
                className="absolute 
                                                      left-0 -top-3.5
                                                      text-off-white 
                                                      transition-all
                                                      peer-placeholder-shown:text-gray-400
                                                      peer-placeholder-shown:text-base
                                                      peer-placeholder-shown:top-2
                                                      peer-focus:-top-3.5 peer-focus:text-yellow-200
                                                      "
              >
                Email:
              </label>
            </motion.div>
            <motion.div variants={child} className="relative">
              <textarea
                id="message"
                name="message"
                rows="4"
                className="peer
                                      w-full
                                      bg-dark-blue text-off-white
                                      border-b-2 border-off-white
                                      focus:outline-none 
                                                      focus:border-accent-color
                                      placeholder-dark-blue
                                      "
                placeholder="Message:"
                onChange={messageHandler}
                value={formState.message}
              ></textarea>
              <label
                htmlFor="message"
                className="absolute 
                                                      left-0 -top-7
                                                      text-off-white 
                                                      transition-all
                                                      peer-placeholder-shown:text-gray-400
                                                      peer-placeholder-shown:text-base
                                                      peer-placeholder-shown:top-2
                                                      peer-focus:-top-7 peer-focus:text-yellow-200
                                                      "
              >
                Message:
              </label>
            </motion.div>

            <motion.div variants={child} className="">
              <button className="border-2 border-accent-color py-2 px-4 mt-5 rounded text-accent-color">
                Submit
              </button>
            </motion.div>
          </div>
        </motion.form>
      </div>
    </>
  );
};

export default Contact;
