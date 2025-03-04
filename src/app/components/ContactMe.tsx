"use client";
import { useState } from "react";

function ContactMe() {
  const [submitted, setSubmitted] = useState(false);

  async function handleSubmit(event: any) {
    event.preventDefault();
    const formData = new FormData(event.target);    

    formData.append("access_key", "dfb23b9d-fa98-43b2-bffd-68aa6cb01f62");
    
    const object = Object.fromEntries(formData);
    if(object.name === '' || object.email === '' || object.message === ''){
      alert('Please fill in all fields');
      return;
    }
    
    const json = JSON.stringify(object);    

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: json,
    });
    const result = await response.json();
    if (result.success) {
      console.log(result);
      setSubmitted(true);
    }
  }

  return (
    <div className="w-full border border-[#606c38] p-4 rounded-lg" id="contact">
      <p className="text-2xl font-medium mb-4">Contact Me</p>
      <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
        <div className="flex gap-4 w-full">
          <input
            type="text"
            placeholder="Name"
            name="name"
            className="w-full bg-transparent text-white border border-[#606c38] rounded-lg p-2 placeholder-white focus:outline-none"
          />
          <input
            type="email"
            name="email"
            placeholder="Email"
            className="w-full bg-transparent text-white border border-[#606c38] rounded-lg p-2 placeholder-white focus:outline-none"
          />
        </div>
        <textarea
          name="message"
          placeholder="Message"
          className="bg-transparent text-white border border-[#606c38] rounded-lg p-2 placeholder-white focus:outline-none"
        />
        {submitted ? (
          <p className="text-[#606c38] text-lg text-center">Message sent!</p>
        ) : (
          <button
            className="bg-[#606c38] text-white rounded-md py-2 hover:bg-[#4d5c2e] focus:outline-none"
            type="submit"
          >
            Send
          </button>
        )}
      </form>
    </div>
  );
}

export default ContactMe;
