
import TeamMembers from './TeamMembers'
import Teams from './Teams'
const Employees = ({selectedTeam, employees, handleEmployeeCardClick, handleTeamSelectionChange}) => {
    return (
        <main className="container">
            <div className="row justify-content-center mt-3 mb-3">
                <div className="col-6">
                    <Teams handleTeamSelectionChange={handleTeamSelectionChange} selectedTeam={selectedTeam}/>
                </div>
                <div className="col-8">
                    <TeamMembers employees={employees} selectedTeam = {selectedTeam} handleEmployeeCardClick = {handleEmployeeCardClick}/>
                </div>
            </div>
        </main>
    )
}

export default Employees;