import React, { useState, useEffect, useRef } from "react";
import { GoogleGenerativeAI } from "@google/generative-ai";

const VoiceAssistant = () => {
  const [transcript, setTranscript] = useState("");
  const [listening, setListening] = useState(false);
  const recognitionRef = useRef(null);

  useEffect(() => {
    const SpeechRecognition =
      window.SpeechRecognition || window.webkitSpeechRecognition;

    if (!SpeechRecognition) {
      const msg = "Speech recognition is not supported in this browser.";
      speak(msg);
      alert(msg);
      return;
    }

    const recognition = new SpeechRecognition();
    recognition.lang = "en-US";
    recognition.interimResults = false;
    recognition.maxAlternatives = 1;

    recognition.onresult = async (event) => {
      const text = event.results[0][0].transcript;
      setTranscript(text);
      await getAIResponse(text);
    };

    recognition.onerror = (e) => {
      console.error("Speech recognition error:", e);
      speak(
        "There was an error with speech recognition. Please check your microphone."
      );
      setListening(false);
    };

    recognition.onend = () => {
      setListening(false);
    };

    recognitionRef.current = recognition;
  }, []);

  const handleListen = () => {
    if (!recognitionRef.current) return;

    setTranscript("");

    if (listening) {
      recognitionRef.current.stop();
      setListening(false);
    } else {
      recognitionRef.current.start();
      setListening(true);
    }
  };

  const getAIResponse = async (input) => {
    try {
      const genAI = new GoogleGenerativeAI(
        "AIzaSyBN87kkrUpZYnCI9GjTilxrHEQAFtIuoNU"
      );

      const model = genAI.getGenerativeModel({ model: "gemini-1.5-pro" });

      const result = await model.generateContent(input);
      const text = result.response.text();

      speak(text); // speak response instead of showing it
    } catch (error) {
      console.error("Gemini API Error:", error);

      if (error.message.includes("429")) {
        speak("You're sending too many requests. Please wait and try again.");
      } else {
        speak("Sorry, I could not connect to Gemini. Please try again later.");
      }
    }
  };

  const speak = (text) => {
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.rate = 1;
    utterance.pitch = 1;
    utterance.volume = 1;

    window.speechSynthesis.cancel();
    window.speechSynthesis.speak(utterance);
  };

  return (
    <div className="p-6 rounded-xl max-w-xl mx-auto bg-zinc-800 text-white">
      <h1 className="text-3xl font-bold mb-4">
        🎙️ AI Voice Assistant (Gemini)
      </h1>

      <button
        onClick={handleListen}
        className={`px-6 py-3 rounded font-bold ${
          listening ? "bg-red-500" : "bg-blue-500"
        }`}
      >
        {listening ? "🛑 Stop Listening" : "🎤 Start Listening"}
      </button>

      <div className="mt-6">
        <p className="text-blue-300 font-bold">You said:</p>
        <p className="bg-zinc-700 p-3 mt-1 rounded">{transcript || "..."}</p>
        <p className="text-green-300 font-bold mt-4">
          Assistant is responding by voice...
        </p>
      </div>
    </div>
  );
};

export default VoiceAssistant;
