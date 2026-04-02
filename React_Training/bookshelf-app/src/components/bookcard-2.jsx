function BookCard() {
    return (
        <div style={styles.card}>
            

            <div style={styles.content}>
                <h2 style={styles.title}>As a man Thinketh</h2>
                <p style={styles.author}>James Allen</p>
            </div>
            <div style={styles.header}>
                <span style={styles.badge}>Reading</span>
            </div>
        </div>
    )
}

const styles = {
    card: {
        width: "260px",
        padding: "20px",
        borderRadius: "16px",
        background: "linear-gradient(145deg, #ffffff, #f0f0f0)",
        boxShadow: "0 10px 25px rgba(0,0,0,0.08)",
        fontFamily: "'Inter', sans-serif",
        transition: "all 0.3s ease",
        cursor: "pointer"
    },

    header: {
        display: "flex",
        justifyContent: "flex-end",
        marginBottom: "10px"
    },

    content: {
        display: "flex",
        flexDirection: "column",
        gap: "6px"
    },

    title: {
        margin: 0,
        fontSize: "22px",
        fontWeight: "600",
        color: "#222",
        lineHeight: "1.3"
    },

    author: {
        margin: 0,
        fontSize: "14px",
        color: "#777",
        letterSpacing: "0.5px"
    },

    badge: {
        background: "linear-gradient(135deg, #4facfe, #00f2fe)",
        color: "#fff",
        padding: "6px 12px",
        borderRadius: "999px",
        fontSize: "12px",
        fontWeight: "500",
        boxShadow: "0 4px 10px rgba(0,0,0,0.1)"
    }
}

export default BookCard