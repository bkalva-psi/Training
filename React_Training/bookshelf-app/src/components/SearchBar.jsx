function SearchBar() {
    return (
        <div style={styles.wrapper}>
            <div className="input-group" style={{ maxWidth: "400px" }}>
                <input
                    type="text"
                    className="form-control"
                    placeholder="🔍 Search books..."
                />
                <button className="btn btn-primary">
                    Search
                </button>
            </div>
        </div>
    )
}

const styles = {
    wrapper: {
        display: "flex",
        justifyContent: "center",
        marginBottom: "30px"
    }
}

export default SearchBar