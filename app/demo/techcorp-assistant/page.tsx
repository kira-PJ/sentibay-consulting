"use client";

import { useState, useRef, useEffect } from "react";
import {
  Send,
  Bot,
  User,
  FileText,
  RotateCcw,
  Sparkles,
  Shield,
  Database,
  Zap,
  ChevronDown,
  ChevronUp,
  Loader2,
} from "lucide-react";

interface Citation {
  document: string;
  uri: string;
}

interface TraceStep {
  type: "thinking" | "action" | "knowledge_base";
  text: string;
}

interface Message {
  id: string;
  role: "user" | "assistant";
  content: string;
  citations?: Citation[];
  trace?: TraceStep[];
  timestamp: Date;
  isStreaming?: boolean;
}

const SUGGESTED_QUESTIONS = [
  "What is the annual leave policy for new employees?",
  "How many leave days do I have remaining?",
  "I want to request 3 days off starting next Monday",
  "My laptop keeps disconnecting from wifi — can you help?",
  "What's the process for resetting my password?",
  "Create an IT ticket for my monitor not working",
];

export default function TechCorpAssistantPage() {
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [sessionId, setSessionId] = useState<string>("");
  const [showTrace, setShowTrace] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLTextAreaElement>(null);

  useEffect(() => {
    setSessionId(crypto.randomUUID());
  }, []);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const handleSend = async (text?: string) => {
    const messageText = text || input.trim();
    if (!messageText || isLoading) return;

    const userMessage: Message = {
      id: crypto.randomUUID(),
      role: "user",
      content: messageText,
      timestamp: new Date(),
    };

    setMessages((prev) => [...prev, userMessage]);
    setInput("");
    setIsLoading(true);

    // Add placeholder assistant message for streaming effect
    const assistantId = crypto.randomUUID();
    const assistantMessage: Message = {
      id: assistantId,
      role: "assistant",
      content: "",
      timestamp: new Date(),
      isStreaming: true,
    };
    setMessages((prev) => [...prev, assistantMessage]);

    try {
      const response = await fetch("/api/bedrock-chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          message: messageText,
          session_id: sessionId,
        }),
      });

      if (!response.ok) {
        throw new Error(`API error: ${response.status}`);
      }

      const data = await response.json();

      setMessages((prev) =>
        prev.map((msg) =>
          msg.id === assistantId
            ? {
                ...msg,
                content: data.response,
                citations: data.citations || [],
                trace: data.trace || [],
                isStreaming: false,
              }
            : msg
        )
      );

      if (data.session_id) {
        setSessionId(data.session_id);
      }
    } catch (error) {
      setMessages((prev) =>
        prev.map((msg) =>
          msg.id === assistantId
            ? {
                ...msg,
                content:
                  "I'm sorry, I encountered an error processing your request. Please try again.",
                isStreaming: false,
              }
            : msg
        )
      );
    } finally {
      setIsLoading(false);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  const handleNewConversation = () => {
    setMessages([]);
    setSessionId(crypto.randomUUID());
    inputRef.current?.focus();
  };

  return (
    <div className="flex h-screen">
      {/* Sidebar */}
      <aside className="hidden lg:flex flex-col w-80 bg-[#0f1b3d] text-white">
        <div className="p-6 border-b border-white/10">
          <div className="flex items-center gap-3 mb-2">
            <div className="w-10 h-10 rounded-lg bg-blue-500 flex items-center justify-center">
              <Bot className="w-6 h-6" />
            </div>
            <div>
              <h1 className="font-bold text-lg">TechCorp</h1>
              <p className="text-xs text-blue-300">AI Assistant</p>
            </div>
          </div>
        </div>

        <div className="flex-1 overflow-y-auto p-6 space-y-6">
          <div>
            <h3 className="text-sm font-semibold text-blue-300 uppercase tracking-wider mb-3">
              Try asking
            </h3>
            <div className="space-y-2">
              {SUGGESTED_QUESTIONS.map((q, i) => (
                <button
                  key={i}
                  onClick={() => handleSend(q)}
                  disabled={isLoading}
                  className="w-full text-left text-sm p-3 rounded-lg bg-white/5 hover:bg-white/10 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {q}
                </button>
              ))}
            </div>
          </div>

          <div className="border-t border-white/10 pt-6">
            <h3 className="text-sm font-semibold text-blue-300 uppercase tracking-wider mb-3">
              Capabilities
            </h3>
            <div className="space-y-3">
              <div className="flex items-center gap-3 text-sm text-gray-300">
                <Database className="w-4 h-4 text-blue-400 shrink-0" />
                <span>Knowledge Base (RAG)</span>
              </div>
              <div className="flex items-center gap-3 text-sm text-gray-300">
                <Zap className="w-4 h-4 text-yellow-400 shrink-0" />
                <span>Agent Actions (HR, IT)</span>
              </div>
              <div className="flex items-center gap-3 text-sm text-gray-300">
                <Shield className="w-4 h-4 text-green-400 shrink-0" />
                <span>Guardrails (Safety)</span>
              </div>
              <div className="flex items-center gap-3 text-sm text-gray-300">
                <Sparkles className="w-4 h-4 text-purple-400 shrink-0" />
                <span>Claude 3.5 Sonnet</span>
              </div>
            </div>
          </div>
        </div>

        <div className="p-6 border-t border-white/10">
          <button
            onClick={handleNewConversation}
            className="w-full flex items-center justify-center gap-2 py-2.5 px-4 rounded-lg bg-blue-600 hover:bg-blue-500 transition-colors text-sm font-medium"
          >
            <RotateCcw className="w-4 h-4" />
            New Conversation
          </button>
          <div className="mt-4 flex items-center gap-2 text-xs text-gray-400">
            <label htmlFor="trace-toggle" className="cursor-pointer">Show reasoning trace</label>
            <input
              id="trace-toggle"
              type="checkbox"
              checked={showTrace}
              onChange={(e) => setShowTrace(e.target.checked)}
              className="ml-auto accent-blue-500"
            />
          </div>
        </div>
      </aside>

      {/* Main Chat Area */}
      <div className="flex-1 flex flex-col">
        {/* Header */}
        <header className="bg-white border-b border-gray-200 px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-[#1a237e] to-[#0d47a1] flex items-center justify-center lg:hidden">
              <Bot className="w-5 h-5 text-white" />
            </div>
            <div>
              <h2 className="font-semibold text-gray-900">TechCorp AI Assistant</h2>
              <p className="text-xs text-gray-500">
                Ask about policies, submit leave requests, or create IT tickets
              </p>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-green-100 text-green-700 text-xs font-medium">
              <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
              Online
            </span>
            <button
              onClick={handleNewConversation}
              className="lg:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
              aria-label="New conversation"
            >
              <RotateCcw className="w-4 h-4 text-gray-500" />
            </button>
          </div>
        </header>

        {/* Messages */}
        <div className="flex-1 overflow-y-auto px-4 py-6 space-y-6">
          {messages.length === 0 && (
            <div className="flex flex-col items-center justify-center h-full text-center px-4">
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[#1a237e] to-[#0d47a1] flex items-center justify-center mb-6">
                <Bot className="w-9 h-9 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Welcome to TechCorp AI Assistant
              </h3>
              <p className="text-gray-500 max-w-md mb-8">
                I can help you with company policies, leave requests, IT support, and more.
                Ask me anything or try one of the suggestions.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 w-full max-w-lg">
                {SUGGESTED_QUESTIONS.slice(0, 4).map((q, i) => (
                  <button
                    key={i}
                    onClick={() => handleSend(q)}
                    className="text-left text-sm p-4 rounded-xl border border-gray-200 hover:border-blue-300 hover:bg-blue-50 transition-all"
                  >
                    {q}
                  </button>
                ))}
              </div>
            </div>
          )}

          {messages.map((message) => (
            <MessageBubble
              key={message.id}
              message={message}
              showTrace={showTrace}
            />
          ))}
          <div ref={messagesEndRef} />
        </div>

        {/* Input Area */}
        <div className="border-t border-gray-200 bg-white px-4 py-4">
          <div className="max-w-3xl mx-auto">
            <div className="flex items-end gap-3 bg-gray-50 rounded-2xl border border-gray-200 focus-within:border-blue-400 focus-within:ring-2 focus-within:ring-blue-100 transition-all px-4 py-3">
              <textarea
                ref={inputRef}
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={handleKeyDown}
                placeholder="Ask me anything about TechCorp..."
                rows={1}
                className="flex-1 bg-transparent resize-none focus:outline-none text-gray-900 placeholder-gray-400 text-sm leading-6 max-h-32"
                style={{ minHeight: "24px" }}
                disabled={isLoading}
              />
              <button
                onClick={() => handleSend()}
                disabled={!input.trim() || isLoading}
                className="shrink-0 w-9 h-9 rounded-xl bg-blue-600 hover:bg-blue-700 disabled:bg-gray-300 disabled:cursor-not-allowed flex items-center justify-center transition-colors"
                aria-label="Send message"
              >
                {isLoading ? (
                  <Loader2 className="w-4 h-4 text-white animate-spin" />
                ) : (
                  <Send className="w-4 h-4 text-white" />
                )}
              </button>
            </div>
            <p className="text-xs text-gray-400 text-center mt-2">
              Powered by Amazon Bedrock • Claude 3.5 Sonnet • Knowledge Base + Agent + Guardrails
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

/* ---------- Message Bubble Component ---------- */

function MessageBubble({
  message,
  showTrace,
}: {
  message: Message;
  showTrace: boolean;
}) {
  const [citationsExpanded, setCitationsExpanded] = useState(false);
  const [traceExpanded, setTraceExpanded] = useState(false);
  const isUser = message.role === "user";

  return (
    <div className={`flex gap-3 max-w-3xl mx-auto ${isUser ? "justify-end" : ""}`}>
      {!isUser && (
        <div className="shrink-0 w-8 h-8 rounded-lg bg-gradient-to-br from-[#1a237e] to-[#0d47a1] flex items-center justify-center mt-1">
          <Bot className="w-4 h-4 text-white" />
        </div>
      )}

      <div className={`flex flex-col ${isUser ? "items-end" : "items-start"} max-w-[80%]`}>
        <div
          className={`rounded-2xl px-4 py-3 text-sm leading-relaxed ${
            isUser
              ? "bg-blue-600 text-white rounded-br-md"
              : "bg-white border border-gray-200 text-gray-800 rounded-bl-md shadow-sm"
          }`}
        >
          {message.isStreaming ? (
            <div className="flex items-center gap-2 text-gray-500">
              <Loader2 className="w-4 h-4 animate-spin" />
              <span>Thinking...</span>
            </div>
          ) : (
            <div className="whitespace-pre-wrap">{message.content}</div>
          )}
        </div>

        {/* Citations */}
        {!isUser && message.citations && message.citations.length > 0 && (
          <div className="mt-2 w-full">
            <button
              onClick={() => setCitationsExpanded(!citationsExpanded)}
              className="inline-flex items-center gap-1.5 text-xs text-blue-600 hover:text-blue-800 font-medium"
            >
              <FileText className="w-3.5 h-3.5" />
              {message.citations.length} source{message.citations.length > 1 ? "s" : ""}
              {citationsExpanded ? (
                <ChevronUp className="w-3 h-3" />
              ) : (
                <ChevronDown className="w-3 h-3" />
              )}
            </button>
            {citationsExpanded && (
              <div className="mt-1.5 space-y-1">
                {message.citations.map((citation, i) => (
                  <div
                    key={i}
                    className="flex items-center gap-2 text-xs bg-blue-50 border border-blue-100 rounded-lg px-3 py-2 text-blue-800"
                  >
                    <FileText className="w-3.5 h-3.5 shrink-0" />
                    <span className="truncate">{citation.document}</span>
                  </div>
                ))}
              </div>
            )}
          </div>
        )}

        {/* Trace / Reasoning */}
        {!isUser && showTrace && message.trace && message.trace.length > 0 && (
          <div className="mt-2 w-full">
            <button
              onClick={() => setTraceExpanded(!traceExpanded)}
              className="inline-flex items-center gap-1.5 text-xs text-purple-600 hover:text-purple-800 font-medium"
            >
              <Sparkles className="w-3.5 h-3.5" />
              Reasoning ({message.trace.length} steps)
              {traceExpanded ? (
                <ChevronUp className="w-3 h-3" />
              ) : (
                <ChevronDown className="w-3 h-3" />
              )}
            </button>
            {traceExpanded && (
              <div className="mt-1.5 space-y-1">
                {message.trace.map((step, i) => (
                  <div
                    key={i}
                    className="flex items-start gap-2 text-xs bg-purple-50 border border-purple-100 rounded-lg px-3 py-2 text-purple-800"
                  >
                    <span className="shrink-0 font-mono text-purple-500">
                      {step.type === "thinking" ? "🧠" : step.type === "action" ? "⚡" : "📚"}
                    </span>
                    <span>{step.text}</span>
                  </div>
                ))}
              </div>
            )}
          </div>
        )}

        <span className="text-[10px] text-gray-400 mt-1 px-1">
          {message.timestamp.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })}
        </span>
      </div>

      {isUser && (
        <div className="shrink-0 w-8 h-8 rounded-lg bg-gray-200 flex items-center justify-center mt-1">
          <User className="w-4 h-4 text-gray-600" />
        </div>
      )}
    </div>
  );
}
