import { useState, useEffect } from 'react';
import axios from 'axios';
import ReactMarkdown from 'react-markdown';
import { Clock, Award, X, Loader } from 'lucide-react';

const API_URL = 'http://localhost:3001/api';

function Lessons() {
  const [lessons, setLessons] = useState([]);
  const [selectedLesson, setSelectedLesson] = useState(null);
  const [lessonContent, setLessonContent] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    fetchLessons();
  }, []);

  const fetchLessons = async () => {
    try {
      const response = await axios.get(`${API_URL}/curriculum/lessons`);
      setLessons(response.data);
    } catch (error) {
      console.error('Error fetching lessons:', error);
    }
  };

  const handleLessonClick = async (lesson) => {
    setSelectedLesson(lesson);
    setIsLoading(true);
    setLessonContent(null);

    try {
      const response = await axios.post(`${API_URL}/chat/lesson/${lesson.id}`);
      setLessonContent(response.data.content);
    } catch (error) {
      console.error('Error fetching lesson content:', error);
      setLessonContent('Error loading lesson. Please make sure the API server is running.');
    } finally {
      setIsLoading(false);
    }
  };

  const handleClose = () => {
    setSelectedLesson(null);
    setLessonContent(null);
  };

  return (
    <div className="lessons-container">
      {!selectedLesson ? (
        <>
          <div className="page-header">
            <h2>AI PM Learning Path</h2>
            <p>Master AI Product Management with these structured lessons</p>
          </div>
          <div className="grid">
            {lessons.map((lesson) => (
              <div
                key={lesson.id}
                className="card"
                onClick={() => handleLessonClick(lesson)}
              >
                <div className="card-header">
                  <div>
                    <h3 className="card-title">{lesson.title}</h3>
                  </div>
                  <span className={`card-badge badge-${lesson.difficulty.toLowerCase()}`}>
                    {lesson.difficulty}
                  </span>
                </div>
                <p className="card-description">{lesson.description}</p>
                <div className="card-meta">
                  <span><Clock size={16} /> {lesson.duration}</span>
                  <span><Award size={16} /> {lesson.topics.length} topics</span>
                </div>
              </div>
            ))}
          </div>
        </>
      ) : (
        <div className="lesson-view">
          <div className="lesson-header">
            <div>
              <h2>{selectedLesson.title}</h2>
              <p style={{ color: 'var(--text-secondary)', marginTop: '0.5rem' }}>
                {selectedLesson.description}
              </p>
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
          <div
            className="lesson-content"
            style={{
              background: 'var(--surface)',
              borderRadius: '1rem',
              padding: '2rem',
              marginTop: '2rem',
              lineHeight: '1.8'
            }}
          >
            {isLoading ? (
              <div className="loading" style={{ justifyContent: 'center', padding: '3rem' }}>
                <Loader size={24} className="loading-spinner" />
                <span>Loading lesson...</span>
              </div>
            ) : (
              <ReactMarkdown>{lessonContent}</ReactMarkdown>
            )}
          </div>
        </div>
      )}
    </div>
  );
}

export default Lessons;
