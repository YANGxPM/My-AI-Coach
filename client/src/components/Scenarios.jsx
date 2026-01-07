import { useState, useEffect, useRef } from 'react';
import axios from 'axios';
import ReactMarkdown from 'react-markdown';
import { Target, X, Send, Loader } from 'lucide-react';

const API_URL = 'http://localhost:3001/api';

function Scenarios() {
  const [scenarios, setScenarios] = useState([]);
  const [selectedScenario, setSelectedScenario] = useState(null);
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef(null);

  useEffect(() => {
    fetchScenarios();
  }, []);

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  const fetchScenarios = async () => {
    try {
      const response = await axios.get(`${API_URL}/curriculum/scenarios`);
      setScenarios(response.data);
    } catch (error) {
      console.error('Error fetching scenarios:', error);
    }
  };

  const handleScenarioClick = (scenario) => {
    setSelectedScenario(scenario);
    setMessages([
      {
        role: 'assistant',
        content: `## ${scenario.title}\n\n**Context:**\n${scenario.context}\n\n**Your Challenge:**\n${scenario.challenge}\n\n---\n\nTake your time to think through this scenario. Share your approach, and I'll provide feedback and guidance!`
      }
    ]);
  };

  const handleClose = () => {
    setSelectedScenario(null);
    setMessages([]);
    setInput('');
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!input.trim() || isLoading) return;

    const userMessage = input.trim();
    setInput('');
    setMessages(prev => [...prev, { role: 'user', content: userMessage }]);
    setIsLoading(true);

    try {
      const response = await axios.post(`${API_URL}/chat/scenario/${selectedScenario.id}`, {
        response: userMessage
      });

      setMessages(prev => [
        ...prev,
        { role: 'assistant', content: response.data.content }
      ]);
    } catch (error) {
      console.error('Error sending response:', error);
      setMessages(prev => [
        ...prev,
        { role: 'assistant', content: 'Error processing your response. Please try again.' }
      ]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="scenarios-container">
      {!selectedScenario ? (
        <>
          <div className="page-header">
            <h2>Practice Scenarios</h2>
            <p>Apply your AI PM skills to real-world challenges</p>
          </div>
          <div className="grid">
            {scenarios.map((scenario) => (
              <div
                key={scenario.id}
                className="card"
                onClick={() => handleScenarioClick(scenario)}
              >
                <div className="card-header">
                  <div>
                    <h3 className="card-title">{scenario.title}</h3>
                  </div>
                  <span className={`card-badge badge-${scenario.difficulty.toLowerCase()}`}>
                    {scenario.difficulty}
                  </span>
                </div>
                <p className="card-description">{scenario.context}</p>
                <div className="card-meta">
                  <span><Target size={16} /> {scenario.category}</span>
                </div>
              </div>
            ))}
          </div>
        </>
      ) : (
        <div style={{ flex: 1, display: 'flex', flexDirection: 'column' }}>
          <div style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            marginBottom: '1rem'
          }}>
            <div>
              <h2>{selectedScenario.title}</h2>
              <span className={`card-badge badge-${selectedScenario.difficulty.toLowerCase()}`} style={{ marginTop: '0.5rem', display: 'inline-block' }}>
                {selectedScenario.difficulty}
              </span>
            </div>
            <button
              onClick={handleClose}
              style={{
                background: 'var(--surface-light)',
                border: 'none',
                borderRadius: '0.5rem',
                padding: '0.5rem',
                cursor: 'pointer',
                color: 'var(--text-primary)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              }}
            >
              <X size={24} />
            </button>
          </div>

          <div className="chat-wrapper" style={{ flex: 1 }}>
            <div className="messages">
              {messages.map((message, index) => (
                <div key={index} className={`message ${message.role}`}>
                  <div className="message-avatar">
                    {message.role === 'user' ? '👤' : '🤖'}
                  </div>
                  <div className="message-content">
                    {message.role === 'assistant' ? (
                      <ReactMarkdown>{message.content}</ReactMarkdown>
                    ) : (
                      message.content
                    )}
                  </div>
                </div>
              ))}
              {isLoading && (
                <div className="message assistant">
                  <div className="message-avatar">🤖</div>
                  <div className="message-content">
                    <div className="loading">
                      <Loader size={20} className="loading-spinner" />
                      <span>Analyzing your response...</span>
                    </div>
                  </div>
                </div>
              )}
              <div ref={messagesEndRef} />
            </div>
            <form className="chat-input" onSubmit={handleSubmit}>
              <div className="input-wrapper">
                <input
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  placeholder="Share your approach to this scenario..."
                  disabled={isLoading}
                />
                <button
                  type="submit"
                  className="send-button"
                  disabled={isLoading || !input.trim()}
                >
                  <Send size={20} />
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}

export default Scenarios;
