'use client';

import { useRef, useMemo, useEffect, useState } from 'react';

/* ⭐ Star display */
function StarRow({ rating }) {
  const full = Math.round(Number(rating) || 0);
  return <p className="stars" aria-label={`Rating ${full} out of 5`}>
    {'★★★★★☆☆☆☆☆'.slice(5 - full, 10 - full)}
  </p>;
}

function formatDate(d) {
  const date = new Date(d);
  if (Number.isNaN(date.getTime())) return '';
  return date.toLocaleDateString('en-IN', {
    day: 'numeric',
    month: 'long',
    year: 'numeric'
  });
}

export default function Testimonials() {
  const [reviews, setReviews] = useState([]);
  const [loading, setLoading] = useState(true);
  const trackRef = useRef(null);

  /* Fetch reviews */
  useEffect(() => {
    let cancelled = false;

    async function load() {
      try {
        setLoading(true);
        const res = await fetch('/api/reviews');
        if (!res.ok) throw new Error('Failed to fetch reviews');
        const data = await res.json();

        const mapped = (Array.isArray(data) ? data : []).map(item => ({
          author_name: item.reviewer_name ?? '',
          text: item.review_text ?? '',
          date: item.review_date ?? item.created_at,
          rating: item.rating ?? 0,
        }));

        if (!cancelled) setReviews(mapped);
      } catch (err) {
        console.error('Failed to load reviews:', err);
        if (!cancelled) setReviews([]);
      } finally {
        if (!cancelled) setLoading(false);
      }
    }

    load();
    return () => (cancelled = true);
  }, []);

  const sorted = useMemo(() => {
    return [...reviews].sort(
      (a, b) => new Date(b.date || 0) - new Date(a.date || 0)
    );
  }, [reviews]);

  const total = sorted.length;
  const avg =
    total === 0
      ? 0
      : Math.round(
          (sorted.reduce((s, r) => s + (Number(r.rating) || 0), 0) / total) * 10
        ) / 10;

  const scrollByCards = (dir = 1) => {
    const el = trackRef.current;
    if (!el) return;
    const card = el.querySelector('.testimonial-card');
    if (!card) return;
    const gap = 16;
    const cardWidth = card.getBoundingClientRect().width + gap;
    el.scrollBy({ left: dir * cardWidth, behavior: 'smooth' });
  };

  return (
    <section className="testimonials-section text-center">
      <div className="container">

        {/* ✅ SEO + Brand Heading */}
        <h2>Customer Reviews of Khodiyar Oil Mill</h2>

        <p className="subtitle">
          Trusted by families across Jamnagar, Kalavad, and Gujarat for
          pure, chemical-free groundnut oil made using traditional methods.
        </p>

        {total > 0 && (
          <p className="overall">
            ⭐ <strong>{avg.toFixed(1)}</strong> / 5 rating based on
            <strong> {total}</strong> customer reviews
          </p>
        )}

        <div className="carousel">
          <button
            className="nav-btn prev"
            onClick={() => scrollByCards(-1)}
            aria-label="Previous reviews"
          >
            ‹
          </button>

          <div className="track" ref={trackRef}>
            {sorted.map((r, i) => (
              <div className="testimonial-card" key={i}>
                <StarRow rating={r.rating} />
                <h4>{r.author_name}</h4>
                <p className="date">{formatDate(r.date)}</p>
                {r.text && <p>“{r.text}”</p>}
              </div>
            ))}

            {/* Fallback */}
            {sorted.length === 0 && !loading && (
              <>
                <div className="testimonial-card">
                  <p className="stars">★★★★★</p>
                  <h4>Tushar</h4>
                  <p className="date">7 July 2025</p>
                </div>
                <div className="testimonial-card">
                  <p className="stars">★★★★★</p>
                  <h4>King</h4>
                  <p className="date">7 July 2025</p>
                </div>
                <div className="testimonial-card">
                  <p className="stars">★★★★★</p>
                  <h4>Jenil Umretiya</h4>
                  <p className="date">10 June 2025</p>
                  <p>“I have best experience in shop”</p>
                </div>
              </>
            )}
          </div>

          <button
            className="nav-btn next"
            onClick={() => scrollByCards(1)}
            aria-label="Next reviews"
          >
            ›
          </button>
        </div>
      </div>
    </section>
  );
}
