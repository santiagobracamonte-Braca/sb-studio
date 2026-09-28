import { forms, site } from "../config";

export type SubmitResult =
  | { ok: true; demo: boolean }
  | { ok: false; error: string };

/**
 * Envía los datos del formulario al endpoint configurado en config.ts.
 *
 * - Si NO hay endpoint configurado, funciona en "modo demostración":
 *   simula un envío exitoso (útil mientras conectas Formspree/Web3Forms).
 * - Compatible con Formspree y Web3Forms (envía JSON).
 *
 * Seguridad: solo se envían los campos del formulario. No hay claves secretas
 * en el frontend; el Access Key de Web3Forms es una key pública por diseño.
 */
export async function submitForm(
  data: Record<string, string>
): Promise<SubmitResult> {
  const endpoint = forms.endpoint.trim();

  // Modo demostración: sin endpoint aún.
  if (!endpoint) {
    await new Promise((r) => setTimeout(r, 800));
    // eslint-disable-next-line no-console
    console.info("[SB Studio] Formulario en modo demo (sin endpoint):", data);
    return { ok: true, demo: true };
  }

  try {
    const payload: Record<string, string> = {
      ...data,
      _subject: `Nueva solicitud desde ${site.brandName}`,
      origen: site.domain,
    };

    // Web3Forms requiere access_key
    if (forms.web3formsAccessKey.trim()) {
      payload.access_key = forms.web3formsAccessKey.trim();
    }

    const res = await fetch(endpoint, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify(payload),
    });

    if (!res.ok) {
      return {
        ok: false,
        error: "No se pudo enviar la solicitud. Intenta de nuevo o escríbeme por WhatsApp.",
      };
    }

    return { ok: true, demo: false };
  } catch {
    return {
      ok: false,
      error: "Hubo un problema de conexión. Intenta de nuevo o escríbeme por WhatsApp.",
    };
  }
}
