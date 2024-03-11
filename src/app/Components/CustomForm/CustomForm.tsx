import { useState } from "react";

export default function CustomForm() {
  return (
    <form className="w-[445px] h-40 text-base font-medium leading-relaxed opacity-75 grid gap-y-6">
      <div>
        <input
          className="h-11 w-[445px] border-b-2 border-white bg-grayCustom uppercase px-6 focus:border-greenCustom focus:ring-0 "
          type="text"
          id="name"
          name="name"
          placeholder="name"
          required
        />
      </div>
      <div>
        <input
          className="h-11 w-[445px] border-b-2 border-white bg-grayCustom uppercase px-6"
          type="email"
          id="email"
          name="email"
          placeholder="email"
          required
        />
      </div>
      <div>
        <textarea
          className="h-28 w-[445px] border-b-2 border-white bg-grayCustom uppercase px-6"
          id="message"
          name="message"
          placeholder="message"
          required
        />
      </div>
      <button
        className=" justify-self-end w-36 h-8 font-bold leading-relaxed tracking-widest uppercase border-b-2 pb-2 border-greenCustom"
        type="submit"
      >
        send message
      </button>
    </form>
  );
}
