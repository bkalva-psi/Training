import AppLogo from '../assets/Logo.png'
function Header({ onAddBook }) {
    return (
        <header style={styles.header}>
            <img src={AppLogo} alt="logo" style={styles.logo}/>
            <h1 style={styles.title}>The Bookshelf</h1>

            <button style={styles.button} onClick={onAddBook}>
                Add Book
            </button>
        </header>
    );
}

const styles = {
    header: {
        position: "relative",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        padding: "20px 40px",
        marginBottom: "20px",
        background: "linear-gradient(145deg, #ffffff, #f0f0f0)",
        boxShadow: "0 10px 25px rgba(0,0,0,0.08)",
        borderRadius: "16px",
        fontFamily: "'Inter', sans-serif"
    },

    title: {
        margin: 0,
        fontSize: "28px",
        fontWeight: "600",
        color: "#222"
    },
    logo: {
        position:"absolute",
        left:"20px",
    height: "45px",
    objectFit: "contain"
},

    button: {
        position: "absolute",  
        right: "40px",
        background: "linear-gradient(135deg, #4facfe, #00f2fe)",
        color: "#fff",
        padding: "10px 16px",
        borderRadius: "999px",
        border: "none",
        fontSize: "14px",
        fontWeight: "500",
        cursor: "pointer",
        boxShadow: "0 4px 10px rgba(0,0,0,0.1)"
    }
};

export default Header;