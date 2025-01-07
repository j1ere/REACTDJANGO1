import React, { useState } from 'react';
import axios from 'axios';

const WordCount = () => {
    const [text, setText] = useState('');
    const [wordCount, setWordCount] = useState(null);

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://127.0.0.1:8000/api/wordcount/', { text });
            setWordCount(response.data.word_count);
        } catch (error) {
            console.error('Error fetching word count:', error);
        }
    };

    return (
        <div style={{ padding: '20px', maxWidth: '600px', margin: 'auto' }}>
            <h1>Word Count Application</h1>
            <form onSubmit={handleSubmit}>
                <textarea
                    rows="5"
                    style={{ width: '100%', marginBottom: '10px' }}
                    placeholder="Enter your text here..."
                    value={text}
                    onChange={(e) => setText(e.target.value)}
                />
                <button type="submit" style={{ display: 'block', width: '100%' }}>
                    Count Words
                </button>
            </form>
            {wordCount !== null && (
                <p style={{ marginTop: '20px' }}>
                    Word Count: <strong>{wordCount}</strong>
                </p>
            )}
        </div>
    );
};

export default WordCount;
