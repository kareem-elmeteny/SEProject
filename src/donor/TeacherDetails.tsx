import { useState } from 'react';
import {Link, useNavigate} from 'react-router-dom';

function TeacherDetailsForm({ }) {
    // State variables to store form data
    const [subjects, setSubjects] = useState('');
    const [proBonoClasses, setProBonoClasses] = useState('');
    const [proBonoStudents, setProBonoStudents] = useState('');

    const navigate = useNavigate();

    // Function to handle form submission
    const handleSubmit = (event: { preventDefault: () => void; }) => {
        event.preventDefault();

        console.log({
            subjects,
            proBonoClasses,
            proBonoStudents
        });
        // Handle form submission here
        //onSubmit({ subjects, proBonoClasses, proBonoStudents });
        // Clear form fields after submission
        setSubjects('');
        setProBonoClasses('');
        setProBonoStudents('');

        // Navigate to the donation items page
        navigate('/dashboard2');
    };

    return (
        <div>
            <h2>Teacher Details</h2>
            <nav aria-label="breadcrumb">
                <ol className="breadcrumb">
                    <li className="breadcrumb-item"><Link to="/dashboard2">Dashboard</Link></li>
                    <li className="breadcrumb-item active" aria-current="page">Teacher Deatils Form</li>
                </ol>
            </nav>
            <form onSubmit={handleSubmit}>
                <div className="mb-3">
                    <label className="form-label">Subjects:</label>
                    <input type="text" className="form-control" value={subjects}
                           onChange={(e) => setSubjects(e.target.value)}/>
                </div>
                <div className="mb-3">
                    <label className="form-label">Pro-bono Classes:</label>
                    <input type="number" className="form-control" value={proBonoClasses}
                           onChange={(e) => setProBonoClasses(e.target.value)}/>
                </div>
                <div className="mb-3">
                    <label className="form-label">Pro-bono Students:</label>
                    <input type="number" className="form-control" value={proBonoStudents}
                           onChange={(e) => setProBonoStudents(e.target.value)}/>
                </div>
                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
        </div>
    );
}

export default TeacherDetailsForm;
