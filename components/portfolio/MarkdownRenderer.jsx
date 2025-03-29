import React, { useEffect, useState } from 'react';
import ReactMarkdown from 'react-markdown';

const MarkdownRenderer = ({ markdownFile }) => {
  const [content, setContent] = useState('');
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchMarkdown = async () => {
      try {
        const response = await fetch(markdownFile);
        
        if (!response.ok) {
          throw new Error('Failed to fetch markdown');
        }

        const text = await response.text();
        setContent(text);
      } catch (err) {
        setError(err.message);
      }
    };

    fetchMarkdown();
  }, [markdownFile]);

  if (error) {
    return <div className="error">{error}</div>;
  }

  return (
    <div className="markdown-content">
      <ReactMarkdown>{content}</ReactMarkdown>
    </div>
  );
};

export default MarkdownRenderer;
