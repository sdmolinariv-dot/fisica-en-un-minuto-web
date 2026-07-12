"use client";

import { useMemo, useState } from "react";
import { Loader2, Send } from "lucide-react";
import { cn } from "@/lib/utils";

export type ContactFormField = {
  name: string;
  label: string;
  type?: "text" | "email" | "tel" | "date" | "textarea" | "select";
  required?: boolean;
  options?: readonly string[];
  placeholder?: string;
  autoComplete?: string;
};

type ContactFormProps = {
  formName: string;
  fields: readonly ContactFormField[];
  submitLabel: string;
  successMessage?: string;
  className?: string;
};

type FormStatus = "idle" | "loading" | "success" | "error";

export function ContactForm({
  formName,
  fields,
  submitLabel,
  successMessage = "Gracias. El formulario quedó listo para envío en modo demostración.",
  className
}: ContactFormProps) {
  const initialValues = useMemo(
    () => Object.fromEntries(fields.map((field) => [field.name, ""])) as Record<string, string>,
    [fields]
  );
  const [values, setValues] = useState(initialValues);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [status, setStatus] = useState<FormStatus>("idle");

  function updateValue(name: string, value: string) {
    setValues((current) => ({ ...current, [name]: value }));
    setErrors((current) => {
      const next = { ...current };
      delete next[name];
      return next;
    });
  }

  function validate() {
    const nextErrors: Record<string, string> = {};

    fields.forEach((field) => {
      const value = values[field.name]?.trim() ?? "";
      if (field.required && !value) {
        nextErrors[field.name] = "Este campo es obligatorio.";
      }
      if (field.type === "email" && value && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) {
        nextErrors[field.name] = "Ingresa un correo válido.";
      }
    });

    setErrors(nextErrors);
    return Object.keys(nextErrors).length === 0;
  }

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("idle");

    const formData = new FormData(event.currentTarget);
    if (String(formData.get("website") ?? "").trim()) {
      setStatus("success");
      return;
    }

    if (!validate()) {
      setStatus("error");
      return;
    }

    setStatus("loading");

    try {
      const payload = {
        formName,
        submittedAt: new Date().toISOString(),
        fields: values
      };

      // Connect a real sender here. For Formspree, Resend through an API route,
      // or a custom endpoint, set NEXT_PUBLIC_FORM_ENDPOINT to a safe public URL.
      // Never expose private API keys in this client component.
      const endpoint = process.env.NEXT_PUBLIC_FORM_ENDPOINT;

      if (endpoint) {
        const response = await fetch(endpoint, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(payload)
        });

        if (!response.ok) {
          throw new Error("El endpoint rechazó el envío.");
        }
      } else {
        await new Promise((resolve) => setTimeout(resolve, 650));
        console.info("Formulario en modo demostración:", payload);
      }

      setStatus("success");
      setValues(initialValues);
    } catch (error) {
      console.error(error);
      setStatus("error");
    }
  }

  return (
    <form
      className={cn("rounded-lg border border-ink/10 bg-white p-5 shadow-soft sm:p-8", className)}
      onSubmit={handleSubmit}
      noValidate
    >
      <input type="hidden" name="formName" value={formName} />
      <div className="absolute -left-[9999px] top-auto h-px w-px overflow-hidden">
        <label htmlFor={`${formName}-website`}>Sitio web</label>
        <input id={`${formName}-website`} name="website" tabIndex={-1} autoComplete="off" />
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        {fields.map((field) => {
          const fieldId = `${formName}-${field.name}`;
          const error = errors[field.name];
          const commonProps = {
            id: fieldId,
            name: field.name,
            value: values[field.name] ?? "",
            onChange: (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) =>
              updateValue(field.name, event.target.value),
            required: field.required,
            "aria-invalid": Boolean(error),
            "aria-describedby": error ? `${fieldId}-error` : undefined,
            className: "field-base"
          };

          return (
            <div key={field.name} className={field.type === "textarea" ? "sm:col-span-2" : undefined}>
              <label htmlFor={fieldId} className="mb-2 block text-sm font-semibold text-ink">
                {field.label}
                {field.required ? <span className="text-violet"> *</span> : null}
              </label>

              {field.type === "textarea" ? (
                <textarea {...commonProps} rows={5} placeholder={field.placeholder} />
              ) : field.type === "select" ? (
                <select {...commonProps}>
                  <option value="">Selecciona una opción</option>
                  {field.options?.map((option) => (
                    <option key={option} value={option}>
                      {option}
                    </option>
                  ))}
                </select>
              ) : (
                <input
                  {...commonProps}
                  type={field.type ?? "text"}
                  placeholder={field.placeholder}
                  autoComplete={field.autoComplete}
                />
              )}

              {error ? (
                <p id={`${fieldId}-error`} className="mt-2 text-sm font-medium text-red-600">
                  {error}
                </p>
              ) : null}
            </div>
          );
        })}
      </div>

      <div className="mt-6 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <p className="text-sm leading-6 text-ink-soft">
          Los campos marcados con <span className="font-semibold text-violet">*</span> son obligatorios.
        </p>
        <button
          type="submit"
          disabled={status === "loading"}
          className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-ink px-6 py-3 text-sm font-semibold text-white transition hover:bg-deep-purple disabled:cursor-not-allowed disabled:opacity-70"
        >
          {status === "loading" ? (
            <Loader2 aria-hidden="true" className="h-4 w-4 animate-spin" />
          ) : (
            <Send aria-hidden="true" className="h-4 w-4" />
          )}
          <span>{status === "loading" ? "Enviando" : submitLabel}</span>
        </button>
      </div>

      <div aria-live="polite" className="mt-5">
        {status === "success" ? (
          <p className="rounded-lg border border-emerald-200 bg-emerald-50 px-4 py-3 text-sm font-medium text-emerald-800">
            {successMessage}
          </p>
        ) : null}
        {status === "error" ? (
          <p className="rounded-lg border border-red-200 bg-red-50 px-4 py-3 text-sm font-medium text-red-700">
            Revisa los campos requeridos o intenta nuevamente.
          </p>
        ) : null}
      </div>
    </form>
  );
}
