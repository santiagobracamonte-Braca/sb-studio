import { useState, type FormEvent } from "react";
import { CheckCircle2, Loader2, AlertCircle } from "lucide-react";
import {
  serviceOptions,
  budgetOptions,
  contactMethodOptions,
} from "../config";
import { submitForm } from "../services/submitForm";
import { WhatsAppButton } from "./WhatsAppButton";

type Variant = "full" | "compact";

type LeadFormProps = {
  variant?: Variant;
  presetService?: string;
  onSuccess?: () => void;
};

type Status = "idle" | "loading" | "success" | "error";

const inputClass =
  "w-full rounded-xl border border-slate-300 bg-white px-4 py-2.5 text-sm text-ink-900 placeholder:text-slate-400 " +
  "transition-colors focus:border-brand-500 focus:outline-none focus:ring-2 focus:ring-brand-500/30 " +
  "dark:border-white/10 dark:bg-white/5 dark:text-white dark:placeholder:text-slate-500";

const labelClass =
  "mb-1.5 block text-sm font-medium text-ink-700 dark:text-slate-300";

/**
 * Formulario de captación de leads. Dos variantes:
 *  - "full": cotización completa (todos los campos).
 *  - "compact": modal rápido (nombre, WhatsApp, servicio, mensaje).
 * Envía a config.forms.endpoint (o modo demo si está vacío).
 */
export function LeadForm({ variant = "full", presetService, onSuccess }: LeadFormProps) {
  const [status, setStatus] = useState<Status>("idle");
  const [errorMsg, setErrorMsg] = useState("");
  const [wasDemo, setWasDemo] = useState(false);

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("loading");
    setErrorMsg("");

    const form = e.currentTarget;
    const fd = new FormData(form);

    // Honeypot anti-spam: si el campo oculto viene lleno, es un bot.
    if ((fd.get("company_website") as string)?.trim()) {
      setStatus("success"); // fingimos éxito, no enviamos
      return;
    }

    const data: Record<string, string> = {};
    fd.forEach((value, key) => {
      if (key !== "company_website") data[key] = String(value).trim();
    });

    const result = await submitForm(data);

    if (result.ok) {
      setWasDemo(result.demo);
      setStatus("success");
      form.reset();
      onSuccess?.();
    } else {
      setErrorMsg(result.error);
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <div className="flex flex-col items-center gap-4 rounded-2xl border border-emerald-500/30 bg-emerald-500/5 p-8 text-center">
        <CheckCircle2 className="h-12 w-12 text-emerald-500" />
        <p className="text-lg font-semibold text-ink-900 dark:text-white">
          ¡Gracias! Recibí tu solicitud.
        </p>
        <p className="max-w-md text-sm text-ink-600 dark:text-slate-400">
          Me pondré en contacto contigo para conocer mejor tu proyecto.
        </p>
        {wasDemo && (
          <p className="rounded-lg bg-amber-500/10 px-3 py-2 text-xs text-amber-600 dark:text-amber-400">
            Nota para el administrador: el formulario está en modo demostración.
            Configura <code>forms.endpoint</code> en <code>src/config.ts</code>{" "}
            para recibir los mensajes.
          </p>
        )}
        <WhatsAppButton
          message="Hola Santiago, acabo de enviar el formulario en tu página web."
          label="O escríbeme por WhatsApp"
          variant="outline"
          className="mt-2"
        />
      </div>
    );
  }

  const loading = status === "loading";

  return (
    <form onSubmit={handleSubmit} noValidate className="space-y-4">
      {/* Honeypot (oculto para humanos) */}
      <div className="absolute left-[-9999px]" aria-hidden="true">
        <label htmlFor="company_website">No llenar</label>
        <input
          id="company_website"
          name="company_website"
          type="text"
          tabIndex={-1}
          autoComplete="off"
        />
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label htmlFor="nombre" className={labelClass}>
            Nombre <span className="text-brand-500">*</span>
          </label>
          <input id="nombre" name="nombre" type="text" required className={inputClass} placeholder="Tu nombre" />
        </div>

        <div>
          <label htmlFor="whatsapp" className={labelClass}>
            WhatsApp <span className="text-brand-500">*</span>
          </label>
          <input
            id="whatsapp"
            name="whatsapp"
            type="tel"
            required
            inputMode="tel"
            className={inputClass}
            placeholder="Ej: 300 123 4567"
          />
        </div>
      </div>

      {variant === "full" && (
        <div className="grid gap-4 sm:grid-cols-2">
          <div>
            <label htmlFor="empresa" className={labelClass}>
              Empresa / negocio
            </label>
            <input id="empresa" name="empresa" type="text" className={inputClass} placeholder="Opcional" />
          </div>
          <div>
            <label htmlFor="correo" className={labelClass}>
              Correo
            </label>
            <input id="correo" name="correo" type="email" className={inputClass} placeholder="tu@correo.com" />
          </div>
        </div>
      )}

      <div className={variant === "full" ? "grid gap-4 sm:grid-cols-2" : ""}>
        <div>
          <label htmlFor="servicio" className={labelClass}>
            Servicio que necesitas <span className="text-brand-500">*</span>
          </label>
          <select
            id="servicio"
            name="servicio"
            required
            defaultValue={presetService ?? ""}
            className={inputClass}
          >
            <option value="" disabled>
              Selecciona un servicio
            </option>
            {serviceOptions.map((s) => (
              <option key={s} value={s}>
                {s}
              </option>
            ))}
          </select>
        </div>

        {variant === "full" && (
          <div>
            <label htmlFor="presupuesto" className={labelClass}>
              Presupuesto aproximado
            </label>
            <select id="presupuesto" name="presupuesto" defaultValue="" className={inputClass}>
              <option value="" disabled>
                Selecciona (opcional)
              </option>
              {budgetOptions.map((b) => (
                <option key={b} value={b}>
                  {b}
                </option>
              ))}
            </select>
          </div>
        )}
      </div>

      {variant === "full" && (
        <div className="grid gap-4 sm:grid-cols-2">
          <div>
            <label htmlFor="fecha" className={labelClass}>
              Fecha estimada
            </label>
            <input id="fecha" name="fecha" type="date" className={inputClass} />
          </div>
          <div>
            <label htmlFor="metodo" className={labelClass}>
              Método preferido de contacto
            </label>
            <select id="metodo" name="metodo" defaultValue={contactMethodOptions[0]} className={inputClass}>
              {contactMethodOptions.map((m) => (
                <option key={m} value={m}>
                  {m}
                </option>
              ))}
            </select>
          </div>
        </div>
      )}

      <div>
        <label htmlFor="mensaje" className={labelClass}>
          {variant === "full" ? "Descripción del proyecto" : "Mensaje"}{" "}
          <span className="text-brand-500">*</span>
        </label>
        <textarea
          id="mensaje"
          name="mensaje"
          required
          rows={variant === "full" ? 4 : 3}
          className={inputClass}
          placeholder="Cuéntame qué necesitas…"
        />
      </div>

      {status === "error" && (
        <div className="flex items-start gap-2 rounded-xl border border-red-500/30 bg-red-500/5 p-3 text-sm text-red-600 dark:text-red-400">
          <AlertCircle className="mt-0.5 h-4 w-4 shrink-0" />
          <span>{errorMsg}</span>
        </div>
      )}

      <button type="submit" disabled={loading} className="btn-primary w-full">
        {loading ? (
          <>
            <Loader2 className="h-4 w-4 animate-spin" /> Enviando…
          </>
        ) : (
          "Solicitar cotización"
        )}
      </button>

      <p className="text-center text-xs text-ink-500 dark:text-slate-500">
        Respuesta personalizada · Solicita una cotización sin compromiso.
      </p>
    </form>
  );
}
