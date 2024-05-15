export const Header = ({deleteSelected})=>{
    return <div className="headerContainer">
        <h1 className="header">Todo List</h1>
        <button onClick={deleteSelected} className="btn">Delete Selected</button>
    </div>
}
