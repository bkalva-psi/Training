import '../BookCard.css';

export default function BookCard({ id, status, onToggle, onDelete, title = 'Definetly a good book Title', author = 'Yet To be Decided', onSelect, pages, rating = 0 }) {

    const statusClass =
        status === "completed" ? "book-card__badge--completed"
      : status === "reading"   ? "book-card__badge--reading"
      :                          "book-card__badge--default";

    return (
        <div className="book-card">
            <div className="book-card__content">
                <h2 className="book-card__title">{title}</h2>
                <p className="book-card__author">Book Id: {id}</p>
                <p className="book-card__author">{author}</p>
                <p className="book-card__author">No of Pages: {pages}</p>
                <p className="book-card__author">Rated as: {rating}</p>

                <button className="book-card__badge" onClick={() => onSelect(id)}>
                    Press me!
                </button>
                <button className="book-card__badge" onClick={() => onDelete(id)}>
                    Delete me!
                </button>
                <button className="book-card__badge" onClick={() => onToggle(id)}>
                    Toggle Status
                </button>
            </div>

            <div className="book-card__header">
                <span className={`book-card__badge ${statusClass}`}>{status}</span>
            </div>
        </div>
    );
}