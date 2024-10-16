import { useRef } from "react";

export default function NewsLetterSignUpForm() {
  const inputRef = useRef(null);

  const subscribeUser = async (e) => {
    e.preventDefault();

    // this is where your mailchimp request is made

    const res = await fetch("/api/subscribeUser", {
      body: JSON.stringify({
        email: inputRef.current.value,
      }),

      headers: {
        "Content-Type": "application/json",
      },

      method: "POST",
    });
  };

  return (
    <form onSubmit={subscribeUser}>
      <label htmlFor="email-input" className="form__label">
        Your Best Email
      </label>

      <input
        className="border-gray-600 border-2 block"
        type="email"
        id="email-input"
        name="email"
        placeholder="your best email"
        ref={inputRef}
        required
        autoCapitalize="off"
        autoCorrect="off"
      />

      <button
        type="submit"
        value=""
        name="subscribe"
        className="px-4 py-2 bg-orange-600 rounded-md mt-5"
      >
        Subscribe
      </button>
    </form>
  );
}
