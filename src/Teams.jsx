const Teams = ({selectedTeam, handleTeamSelectionChange}) => {
    return (
        <>
        <select className="form-select form-select-lg" value={selectedTeam} onChange={handleTeamSelectionChange}>
                        <option value="Alpha">Alpha</option>
                        <option value="Beta">Beta</option>
                        <option value="Delta">Delta</option>
                        <option value="Zeta">Zeta</option>
                    </select>
        </>
    )
}

export default Teams;