const Header = ({ selectedTeam, count }) => {
    return (
        <header className="container">
            <div className="row justify-content-center mt-3 mb-4">
                <div className="col-8">
                    <h1>Team members allocation</h1>
                    <h1>{selectedTeam} has {count} members</h1>
                </div>
            </div>
        </header>
    )
}

export default Header;