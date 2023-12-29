import './App.css';
import Employees from './Employees';
import Footer from './Footer';
import Header from './Header'
import GroupedTeamMembers from './GroupedTeamMembers';
import Nav from './Nav';
import NotFound from './NotFound';
import 'bootstrap/dist/css/bootstrap.min.css'
import { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

function App() {
    const [employees, setEmployees] = useState(JSON.parse(localStorage.getItem('employeeList')) || [
        {
            "id": 1,
            "fullname": "Alice Johnson",
            "designation": "Manager",
            "gender": "Female",
            "teamname": "Alpha"
        },
        {
            "id": 2,
            "fullname": "Bob Smith",
            "designation": "Engineer",
            "gender": "Male",
            "teamname": "Beta"
        },
        {
            "id": 3,
            "fullname": "Charlie Brown",
            "designation": "Analyst",
            "gender": "Male",
            "teamname": "Beta"
        },
        {
            "id": 4,
            "fullname": "Diana Williams",
            "designation": "Developer",
            "gender": "Female",
            "teamname": "Delta"
        },
        {
            "id": 5,
            "fullname": "Eva Garcia",
            "designation": "Designer",
            "gender": "Female",
            "teamname": "Delta"
        },
        {
            "id": 6,
            "fullname": "Frank Miller",
            "designation": "Manager",
            "gender": "Male",
            "teamname": "Zeta"
        },
        {
            "id": 7,
            "fullname": "Grace Lee",
            "designation": "Engineer",
            "gender": "Female",
            "teamname": "Zeta"
        },
        {
            "id": 8,
            "fullname": "Henry Davis",
            "designation": "Analyst",
            "gender": "Male",
            "teamname": "Zeta"
        },
        {
            "id": 9,
            "fullname": "Ivy Clark",
            "designation": "Developer",
            "gender": "Female",
            "teamname": "Beta"
        },
        {
            "id": 10,
            "fullname": "Jack Robinson",
            "designation": "Designer",
            "gender": "Male",
            "teamname": "Alpha"
        },
        {
            "id": 11,
            "fullname": "Kelly Anderson",
            "designation": "Manager",
            "gender": "Female",
            "teamname": "Delta"
        },
        {
            "id": 12,
            "fullname": "Leo Martinez",
            "designation": "Engineer",
            "gender": "Male",
            "teamname": "Zeta"
        }
    ]
    )

    const [selectedTeam, setTeam] = useState(JSON.parse(localStorage.getItem('selectedTeam')) || "Alpha")

    useEffect(() => {
        localStorage.setItem('employeeList', JSON.stringify(employees))
    }, [employees])
    useEffect(() => {
        localStorage.setItem('selectedTeam', JSON.stringify(selectedTeam))
    }, [selectedTeam])

    function handleTeamSelectionChange(event) {
        setTeam(event.target.value)
    }


    function handleTeamSelectionChange(event) {
        setTeam(event.target.value)
    }

    function handleEmployeeCardClick(event) {
        let transformedEmployees = employees.map((emp) => {
            if (emp.id === parseInt(event.currentTarget.id)) {
                if (emp.teamname === selectedTeam)
                    return { ...emp, teamname: '' }
                else
                    return { ...emp, teamname: selectedTeam }
            }
            return emp
        })

        setEmployees(transformedEmployees)
    }
    return (
        <>
            <Router>
                <Nav />
                <Header selectedTeam={selectedTeam}
                    count={employees.filter((emp) =>
                        emp.teamname == selectedTeam
                    ).length}
                />
                <Routes>
                    <Route path="/"
                        element={<Employees employees={employees}
                            selectedTeam={selectedTeam}
                            handleEmployeeCardClick={handleEmployeeCardClick}
                            handleTeamSelectionChange={handleTeamSelectionChange}
                        />}>
                    </Route>
                    <Route path="/GroupedTeamMembers"
                        element={<GroupedTeamMembers employees={employees}
                            selectedTeam={selectedTeam}
                            setTeam={setTeam}
                        />}>
                    </Route>
                    <Route path="*"
                        element={<NotFound />}>
                    </Route>
                </Routes>
                <Footer />
            </Router>
        </>
    );
}

export default App;
