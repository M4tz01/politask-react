import { useEffect, useRef, useState } from "react";
import "./Chatbot.css";

import { modelPoliBot } from "../../firebase";

const FAQ_QUESTIONS = [
  "¿Cómo publico una tarea?",
  "¿Cómo funcionan los puntos?",
  "¿Qué recompensa puedo canjear?",
  "¿Cómo modifico una tarea?",
];

function Chatbot() {
  const [open, setOpen] = useState(false);

  const [messages, setMessages] = useState([
    {
      sender: "bot",
      text: "¡Hola! Soy PoliBot 🤖. ¿En qué te puedo ayudar hoy?",
    },
  ]);

  const [input, setInput] = useState("");
  const [isTyping, setIsTyping] = useState(false);

  const chatEndRef = useRef(null);

  useEffect(() => {
    if (open) {
      chatEndRef.current?.scrollIntoView({
        behavior: "smooth",
      });
    }
  }, [messages, isTyping, open]);

  const MAX_MENSAJES_CONTEXTO = 6; // últimos 6 mensajes (3 intercambios aprox.)

const handleSend = async (queryText = "") => {
  const textToSend = queryText || input;

  if (!textToSend.trim() || isTyping) {
    return;
  }

  const userMessage = textToSend.trim();

  const mensajesActualizados = [
    ...messages,
    {
      sender: "user",
      text: userMessage,
    },
  ];

  setMessages(mensajesActualizados);
  setInput("");
  setIsTyping(true);

  try {
    const historialReciente = mensajesActualizados
      .slice(-MAX_MENSAJES_CONTEXTO)
      .map((msg) =>
        `${msg.sender === "user" ? "Usuario" : "PoliBot"}: ${msg.text}`
      )
      .join("\n");
    const CONTEXTO_POLITASK = `
    Reglas reales de PoliTask que debes conocer:

REGISTRO Y PUNTOS INICIALES
- Al registrarte (por correo o con Google), recibes 100 puntos iniciales.

PUBLICAR UNA TAREA
- Cualquier estudiante puede publicar una tarea, definiendo un título, categoría,
  descripción y un valor en puntos (entre 1 y 1000).
- Esos puntos se descuentan de tu saldo de inmediato al crear la tarea.
- Si no tienes puntos suficientes, no puedes publicar esa tarea.

ACEPTAR UNA TAREA
- En la sección "Tareas disponibles" (comunidad), puedes ver tareas publicadas
  por otros estudiantes, siempre que estén en estado "Pendiente".
- Al aceptar una tarea, su estado cambia a "En progreso" y queda registrado
  quién la aceptó.
- No puedes aceptar tus propias tareas.

COMPLETAR Y RECIBIR PUNTOS
- El dueño original de la tarea es quien confirma que fue completada.
- Al confirmar, el estado cambia a "Completada" y los puntos de esa tarea
  se transfieren a la persona que la aceptó.
- Los puntos NO se otorgan solo por aceptar la tarea, sino hasta que el
  dueño confirma que se completó.

EDITAR Y ELIMINAR TAREAS
- Solo el dueño de una tarea puede editarla o eliminarla.
- Si eliminas una tarea que sigue "Pendiente" (nadie la ha aceptado), se te
  devuelven los puntos que gastaste al publicarla.
- Si eliminas una tarea que ya está "En progreso" o "Completada", los puntos
  NO se devuelven.

RECOMPENSAS/PREMIOS
- Esta función todavía no está implementada en PoliTask. Si te preguntan por
  canjear premios, indica que próximamente estará disponible.

  Esta aplicación solo se rigue a la Universidad Escuela Politécnina Nacional (EPN)
    `;
    const prompt = `
      Eres PoliBot, el asistente virtual de PoliTask, una app donde estudiantes
      publican y aceptan tareas a cambio de puntos.
      ${CONTEXTO_POLITASK}
      Esta es la conversación reciente (de más antigua a más reciente):
      ${historialReciente}

      Responde el último mensaje del usuario en español, de forma breve, clara y amable,
      usando ÚNICAMENTE la información de las reglas de PoliTask que te di arriba.
      Si te preguntan algo que no está cubierto en esas reglas, dilo honestamente
      en vez de inventar una respuesta, asimismo si te preguntan por algo básico como día, fecha, contestales de manera básica y 
      repíteles que estás ahí solo para atender casos relacionados a POLITASK.
    `;

    const result = await modelPoliBot.generateContent(prompt);

    const responseText = result.response.text();

    setMessages((prev) => [
      ...prev,
      {
        sender: "bot",
        text:
          responseText ||
          "No pude generar una respuesta en este momento.",
      },
    ]);
  } catch (error) {
    console.error("Error al consultar Gemini:", error);

    setMessages((prev) => [
      ...prev,
      {
        sender: "bot",
        text: "No pude conectarme con la inteligencia artificial. Inténtalo nuevamente.",
      },
    ]);
  } finally {
    setIsTyping(false);
  }
};

  return (
    <div className="chatbot-wrapper">
      <button
        className="chatbot-toggle"
        onClick={() => setOpen(!open)}
      >
        {open ? "✕" : "💬 PoliBot"}
      </button>

      {open && (
        <div className="chatbot-window">
          <div className="chatbot-header">
            <h3>PoliBot 🤖</h3>
            <p>Asistente virtual de Poli-Task</p>
          </div>

          <div className="chatbot-messages">
            {messages.map((msg, index) => (
              <div
                key={`${msg.sender}-${index}`}
                className={`chat-message ${msg.sender}`}
              >
                <div className="message-bubble">
                  {msg.text}
                </div>
              </div>
            ))}

            {isTyping && (
              <div className="chat-message bot">
                <div className="message-bubble typing-indicator">
                  <span>.</span>
                  <span>.</span>
                  <span>.</span>
                </div>
              </div>
            )}

            <div ref={chatEndRef} />
          </div>

          <div className="chatbot-faqs">
            <p>Preguntas frecuentes:</p>

            <div className="faq-buttons">
              {FAQ_QUESTIONS.map((question, index) => (
                <button
                  key={index}
                  type="button"
                  disabled={isTyping}
                  onClick={() => handleSend(question)}
                >
                  {question}
                </button>
              ))}
            </div>
          </div>

          <form
            className="chatbot-input-area"
            onSubmit={(event) => {
              event.preventDefault();
              handleSend();
            }}
          >
            <input
              type="text"
              placeholder="Escribe tu mensaje..."
              value={input}
              disabled={isTyping}
              onChange={(event) =>
                setInput(event.target.value)
              }
            />

            <button
              type="submit"
              disabled={isTyping}
            >
              {isTyping ? "Pensando..." : "Enviar"}
            </button>
          </form>
        </div>
      )}
    </div>
  );
}

export default Chatbot;