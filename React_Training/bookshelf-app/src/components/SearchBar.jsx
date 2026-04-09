function SearchBar({onSearch}) {
    return (
        <div style={styles.wrapper}>
            <form 
                onSubmit={(e)=>{
                    e.preventDefault();
                    onSearch(e.target.searchbar.value)
                }
                }
                 style={styles.form}
            >
                <input
                    type="text"
                    name='searchbar'
                    className="form-control"
                    placeholder="Search books..."
                     style={styles.form}
                />
                <button type="submit"style={styles.button}>
                    Search
                </button>
            </form>
        </div>
    )
}

const styles = {
    wrapper: {
    display: "flex",
    justifyContent: "center",
    marginBottom: "30px"
},
container: {
    width: "100%",
    maxWidth: "500px",
    padding: "15px",
    borderRadius: "16px",
    background: "linear-gradient(145deg, #ffffff, #f0f0f0)",
    boxShadow: "0 10px 25px rgba(0,0,0,0.08)"
},form: {
    display: "flex",
    gap: "10px"
},

input: {
    flex: 1,
    padding: "10px 14px",
    borderRadius: "999px",
    border: "1px solid #ddd",
    outline: "none",
    fontSize: "14px"
},

button: {
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
}

export default SearchBar