"use client";

import { useState } from 'react';
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import axios from "axios";
import { Controller } from "react-hook-form";
import { Field, FieldGroup, FieldError } from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

const schema = z.object({
  name: z.string().min(1, "Name is required"),
  email: z.email("Invalid email address"),
  message: z.string().min(1, "Message is required"),
})

export function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const form = useForm<z.infer<typeof schema>>({
    resolver: zodResolver(schema),
    defaultValues: {
      name: "",
      email: "",
      message: "",
    },
  });

  async function onSubmit(data: z.infer<typeof schema>) {
    setIsSubmitting(true);
    setSubmitted(false);
    try {
      await axios.post("/api/contact", data);
      form.reset();
      setSubmitted(true);
    } catch (error) {
      console.error("Error submitting contact form:", error);
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <form className="w-full" onSubmit={form.handleSubmit(onSubmit)}>
      <FieldGroup>

        <Controller name="name" control={form.control} render={({ field, fieldState }) => (
          <Field data-invalid={fieldState.invalid}>
            <Input {...field} id={field.name} aria-invalid={fieldState.invalid} autoComplete="off" placeholder="Your Name" />
            {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
          </Field>
        )}
        />

        <Controller name="email" control={form.control} render={({ field, fieldState }) => (
          <Field data-invalid={fieldState.invalid}>
            <Input {...field} type="email" id={field.name} aria-invalid={fieldState.invalid} autoComplete="off" placeholder="Your Email" />
            {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
          </Field>
        )}
        />

        <Controller name="message" control={form.control} render={({ field, fieldState }) => (
          <Field data-invalid={fieldState.invalid}>
            <Textarea {...field} id={field.name} aria-invalid={fieldState.invalid} rows={4} placeholder="Your Message" />
            {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
          </Field>
        )}
        />

      </FieldGroup>

      <button type="submit" className="!w-full mt-4 btn-primary" disabled={isSubmitting}>
        {isSubmitting ? "Sending..." : "Send"}
      </button>
      {submitted && <p className="mt-2 text-center">Message sent successfully!</p>}
    </form>
  );
}
