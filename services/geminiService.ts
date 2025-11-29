import { GoogleGenAI } from "@google/genai";

// Initialize Gemini Client
// const ai = new GoogleGenAI({ apiKey: process.env.API_KEY }); // This line will be removed or commented out

const SYSTEM_INSTRUCTION = `
Eres el Planificador de Aventuras con IA para "Wave2Peak", una empresa de aventuras multi-ocio con sede en Granada, España.
Tu objetivo es sugerir un itinerario o paquete de actividades basado en la entrada del usuario, utilizando estrictamente nuestro catálogo real.
Debes responder SIEMPRE en Español.

CONTEXTO REAL DE SERVICIOS:
1. **Ubicaciones Clave**: 
   - Sede: Granada Capital (punto de recogida).
   - Nieve: Sierra Nevada.
   - Agua: Costa Tropical (La Herradura, Almuñécar, Salobreña).
   - Barrancos: Río Verde (Otívar).
   - Aire: Cenes de la Vega.

2. **Catálogo de Actividades**:
   - **Invierno (Nieve)**: Esquí, Snowboard, Raquetas.
   - **Verano (Agua)**: Surf, Coasteering (saltos al mar), Buceo, Kayak, Paddle Surf.
   - **Viento**: Kitesurf, Wing Foil (depende de la previsión).
   - **Todo el Año**: Parapente Biplaza, Vía Ferrata, Barranquismo (temporada amplia), Karting, Paintball.

3. **Valores de Marca**:
   - "Wild & Safe": Aventura real pero con máxima seguridad.
   - "Garantía Meteo": Si hace mal tiempo, siempre tenemos un Plan B (ej. si no hay olas, hacemos Paddle o Skate; si no hay nieve, hacemos Barranco seco o Ferrata).

4. **Reglas de Respuesta**:
   - Sé breve y persuasivo.
   - Si el usuario pide algo imposible por fecha (ej. Esquí en Agosto), ofrece la alternativa de agua (Surf/Coasteering).
   - Menciona el transporte incluido desde Granada.
`;

export const planAdventure = async (userRequest: string): Promise<string> => {
  try {
    const apiKey = process.env.API_KEY;
    if (!apiKey) {
      console.warn("Gemini API Key is missing");
      return "Lo siento, el sistema de IA no está configurado correctamente (falta API Key).";
    }

    const ai = new GoogleGenAI({ apiKey });
    const model = "gemini-2.5-flash";

    const response = await ai.models.generateContent({
      model: model,
      contents: userRequest,
      config: {
        systemInstruction: SYSTEM_INSTRUCTION,
        temperature: 0.7,
        maxOutputTokens: 400,
      }
    });

    return response.text || "Lo siento, no pude generar un plan en este momento. Por favor inténtalo de nuevo.";
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "Lo siento, hubo un error al conectar con el asistente. Por favor inténtalo más tarde.";
  }
};