import femaleProfile from './images/femaleProfile.jpg'
import maleProfile from './images/maleProfile.jpg'
const TeamMembers = ({employees, handleEmployeeCardClick, selectedTeam})=> {
    return(
        <div className="card-collection">
                        {
                            employees.map((emp) => 
                                <div key={emp.id} id={emp.id} className={selectedTeam === emp.teamname ? "card m-2 standout" : "card m-2"} style={{ cursor: "pointer" }} onClick={handleEmployeeCardClick}>
                                    <img src={emp.gender === 'Male' ? maleProfile : femaleProfile} alt="" className="card-img-top" />
                                    <div className="card-body">
                                        <h5 className="card-title">Full Name: {emp.fullname}</h5>
                                        <p className="card-text"><b>Designation: </b>{emp.designation}</p>
                                    </div>
                                </div>
                            
                            )
                        }
                    </div>
    )
}

export default TeamMembers;