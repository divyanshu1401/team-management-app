import { useState } from "react";
const GroupedTeamMembers = ({ employees, selectedTeam, setTeam }) => {
    const [groupedEmployees, setGroupedData] = useState(groupTeamMembers())

    function groupTeamMembers() {

        let teams = []
        let teamAlphaMembers = employees.filter((emp) => emp.teamname === 'Alpha');
        let teamAlpha = { team: 'Alpha', members: teamAlphaMembers, collapsed: selectedTeam == 'Alpha' ? false : true }
        teams.push(teamAlpha)

        let teamBetaMembers = employees.filter((emp) => emp.teamname === 'Beta');
        let teamBeta = { team: 'Beta', members: teamBetaMembers, collapsed: selectedTeam == 'Beta' ? false : true }
        teams.push(teamBeta)

        let teamZetaMembers = employees.filter((emp) => emp.teamname === 'Zeta');
        let teamZeta = { team: 'Zeta', members: teamZetaMembers, collapsed: selectedTeam == 'Zeta' ? false : true }
        teams.push(teamZeta)

        let teamDeltaMembers = employees.filter((emp) => emp.teamname === 'Delta');
        let teamDelta = { team: 'Delta', members: teamDeltaMembers, collapsed: selectedTeam == 'Delta' ? false : true }
        teams.push(teamDelta)

        return teams;


    }

    function handleTeamClick(event){
        let transformedGroupData = groupedEmployees.map((groupedData)=> groupedData.team === event.currentTarget.id ? 
                                                                                {...groupedData, collapsed: !groupedData.collapsed}
                                                                                :groupedData);
        setGroupedData(transformedGroupData)
        setTeam(event.currentTarget.id)                                                        
    }
    return (
        <main className="container">
            {
                groupedEmployees.map((item) => {
                    return (
                        <div key={item.team} className="card mt-2" style={{ cursor: "pointer" }}>
                            <h4 id={item.team} className="card-header text-secondary bg-white" onClick={handleTeamClick}>
                                Team Name: {item.team}
                            </h4>

                            <div id={"collapse_" + item.team} className={item.collapsed === true ? "collapse" : ""}>
                            <hr />
                            {
                                item.members.map(member => {
                                    return (
                                        <div className="mt-2">
                                            <h5 className="card-title mt-2">
                                                <span className="text-dark">Full Name: {member.fullname}</span>
                                            </h5>
                                            <p>Designation: {member.designation}</p>
                                        </div>
                                    )
                                })
                            }
                            </div>
                        </div>
                    )
                })
            }
        </main>
    )
}

export default GroupedTeamMembers;