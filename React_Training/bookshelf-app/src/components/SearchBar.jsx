function SearchBar({onSearch}) {
    return (
        <div style={styles.wrapper}>
            <form 
                // onSubmit={(e) => {
                //     e.preventDefault();
                //      console.log(e.target)}
                // }
                onSubmit={(e)=>{
                    e.preventDefault();
                    onSearch(e.target.searchbar.value)
                }
                }

                className="input-group"
                style={{ maxWidth: "400px" }}
            >
                <input
                    type="text"
                    name='searchbar'
                    className="form-control"
                    placeholder="Search books..."
                />
                <button type="submit" className="btn btn-primary">
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
    }
}

export default SearchBar