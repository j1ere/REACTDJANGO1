import React, { useState } from "react";
import axios from "axios";
import styles from "./WordCount.module.css";
import Cookies from "js-cookie";

//add this before sending any axios requests
axios.defaults.xsrfCookieName = "csrftoken";
axios.defaults.xsrfHeaderName = "X-CSRFToken";

const WordCount = () => {
  const [text, setText] = useState("");
  const [wordCount, setWordCount] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const token = Cookies.get('jwtToken');//retrieve token from cookies
    try {
      const response = await axios.post(
        "http://127.0.0.1:8000/api/wordcount/",
        { text },
        {
            headers: {
                Authorization: `Token ${token}`,//include token in headers
            }, 
        }
      );
      setWordCount(response.data.word_count);
    } catch (error) {
      console.error("Error fetching word count:", error);
    }
  };

  return (
    <div className={styles.container}>
      <h1 className={styles.heading}>Word Count Application</h1>
      <form onSubmit={handleSubmit}>
        <textarea
          className={styles.textarea}
          placeholder="Enter your text here..."
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
        <button type="submit" className={styles.button}>
          Count Words
        </button>
      </form>
      {wordCount !== null && (
        <p className={styles.wordCount}>
          Word Count: <strong>{wordCount}</strong>
        </p>
      )}
    </div>
  );
};

export default WordCount;

// const WordCount = () => {
//     const [text, setText] = useState('');
//     const [wordCount, setWordCount] = useState(null);

//     const handleSubmit = async (e) => {
//         e.preventDefault();
//         try {
//             const response = await axios.post('http://127.0.0.1:8000/api/wordcount/', { text });
//             setWordCount(response.data.word_count);
//         } catch (error) {
//             console.error('Error fetching word count:', error);
//         }
//     };

//     return (
//         <div style={{ padding: '20px', maxWidth: '600px', margin: 'auto' }}>
//             <h1>Word Count Application</h1>
//             <form onSubmit={handleSubmit}>
//                 <textarea
//                     rows="5"
//                     style={{ width: '100%', marginBottom: '10px' }}
//                     placeholder="Enter your text here..."
//                     value={text}
//                     onChange={(e) => setText(e.target.value)}
//                 />
//                 <button type="submit" style={{ display: 'block', width: '100%' }}>
//                     Count Words
//                 </button>
//             </form>
//             {wordCount !== null && (
//                 <p style={{ marginTop: '20px' }}>
//                     Word Count: <strong>{wordCount}</strong>
//                 </p>
//             )}
//         </div>
//     );
// };

// export default WordCount;
