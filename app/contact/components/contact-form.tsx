"use client";

import { useActionState } from "react";
import { submitContactForm, type ContactFormState } from "@/app/contact/actions";

const initialState: ContactFormState = { status: "idle" };

export function ContactForm() {
  const [state, formAction, pending] = useActionState(submitContactForm, initialState);

  return (
    <form action={formAction} className="flex flex-col gap-5">
      {/* Honeypot field, hidden from real visitors */}
      <input
        type="text"
        name="company"
        tabIndex={-1}
        autoComplete="off"
        className="hidden"
        aria-hidden="true"
      />

      <div className="flex flex-col gap-1.5">
        <label htmlFor="name" className="font-display font-semibold text-ink">
          Name
        </label>
        <input
          id="name"
          name="name"
          type="text"
          required
          className="border-2 border-brick/30 bg-white px-4 py-2.5 outline-none focus:border-crimson"
        />
        {state.fieldErrors?.name ? (
          <p className="text-sm text-crimson">{state.fieldErrors.name}</p>
        ) : null}
      </div>

      <div className="flex flex-col gap-1.5">
        <label htmlFor="email" className="font-display font-semibold text-ink">
          Email
        </label>
        <input
          id="email"
          name="email"
          type="email"
          required
          className="border-2 border-brick/30 bg-white px-4 py-2.5 outline-none focus:border-crimson"
        />
        {state.fieldErrors?.email ? (
          <p className="text-sm text-crimson">{state.fieldErrors.email}</p>
        ) : null}
      </div>

      <div className="flex flex-col gap-1.5">
        <label htmlFor="message" className="font-display font-semibold text-ink">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          rows={5}
          required
          className="resize-none border-2 border-brick/30 bg-white px-4 py-2.5 outline-none focus:border-crimson"
        />
        {state.fieldErrors?.message ? (
          <p className="text-sm text-crimson">{state.fieldErrors.message}</p>
        ) : null}
      </div>

      <button
        type="submit"
        disabled={pending}
        className="mt-2 rounded-full bg-crimson px-7 py-3 font-semibold text-white shadow-[0_4px_0_0_#9b3729] transition-transform hover:-translate-y-0.5 active:translate-y-0 active:shadow-none disabled:opacity-60"
      >
        {pending ? "Sending..." : "Send Message"}
      </button>

      {state.status === "success" ? (
        <p className="font-script text-xl text-brick">
          {state.message ?? "Thanks for reaching out!"}
        </p>
      ) : null}
      {state.status === "error" && state.message ? (
        <p className="text-sm text-crimson">{state.message}</p>
      ) : null}
    </form>
  );
}
