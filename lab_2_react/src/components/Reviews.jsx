import { useEffect, useState } from 'react';

const VARIANT = 14;
const COMMENTS_URL = `https://jsonplaceholder.typicode.com/posts/${VARIANT}/comments`;

function Reviews() {
  const [comments, setComments] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);


  useEffect(() => {
    let ignore = false; // щоб не оновлювати стан, якщо компонент уже розмонтовано

    async function loadComments() {
      try {
        const response = await fetch(COMMENTS_URL);
        if (!response.ok) {
          throw new Error(`HTTP ${response.status}`);
        }
        const data = await response.json();
        if (!ignore) setComments(data);
      } catch (err) {
        if (!ignore) setError(err.message);
      } finally {
        if (!ignore) setIsLoading(false);
      }
    }

    loadComments();

    return () => {
      ignore = true;
    };
  }, []);

  return (
    <section>
      <h2 className="text-2xl font-bold text-white border-b-2 border-slate-800 pb-2 mb-6 flex items-center gap-2">
        <span className="w-2 h-6 bg-red-600 rounded-sm"></span> Відгуки попередніх роботодавців
      </h2>

      {isLoading && (
        <p role="status" className="text-slate-400 font-mono text-sm animate-pulse">
          [ LOADING_REVIEWS... ]
        </p>
      )}

      {error && (
        <p role="alert" className="text-red-500 font-mono text-sm">
          [ ERROR ] Не вдалося завантажити відгуки ({error})
        </p>
      )}

      <div className="space-y-5">
        {comments.map((comment) => (
          <article
            key={comment.id}
            className="bg-slate-900/50 p-6 rounded-xl border border-slate-800 hover:border-red-500/50 hover:shadow-[0_0_20px_rgba(239,68,68,0.15)] hover:-translate-y-1 transition-all duration-300 group"
          >
            <h3 className="font-bold text-lg text-slate-200 group-hover:text-red-400 transition-colors capitalize">
              {comment.name}
            </h3>
            <p className="text-xs font-mono text-red-500/80 tracking-widest mb-3 mt-1">
              {comment.email}
            </p>
            <p className="text-slate-400 text-sm leading-relaxed">{comment.body}</p>
          </article>
        ))}
      </div>
    </section>
  );
}

export default Reviews;