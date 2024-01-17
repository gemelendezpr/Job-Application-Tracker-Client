import { useEffect, useState, useContext } from 'react';

import { useNavigate } from 'react-router-dom';

import { get } from '../services/authService';

import { AuthContext } from '../context/auth.context';

import CreatableSelect from 'react-select/creatable';

const AddInterview = () => {

    const { user } = useContext(AuthContext)

    const [companies, setCompanies] = useState([])

    const [interview, setInterview] = useState({
            user: user?._id,
            company: "",
            position: "",
            review: "",
            jobDetails: "",
            location: "",
            challenges: "",
            interviewType: "",
            interviewDifficulty: "",
            interviewDate: Date.now(),
            interviewer: "",
            linkedin: "",
            userNotes: "",
    })

    const navigate = useNavigate()

    const getCompanies = () => {
        get('/company')
            .then((response) => {
                console.log("Found companies ===>", response.data)
                setCompanies(response.data)
            })
            .catch((err) => {
                console.log(err)
            })
    }

    const sort = (array) => {
        return array.sort((a, b) => a.companyName.localeCompare(b.companyName))
    }

    const theseCompanies = companies.length ? [...sort(companies), {_id: "", companyName: "Add new Company"}].map((company) => {
        return { 
            key: company._id,
            label: company.companyName,
            value: company.companyName   
        }
    }) : []

    const theseOptions = companies.length ? theseCompanies : [{key: "", label: "Add new Company", value: "Add new Company"}]

    const handleSelectChange = (e) => {

        console.log("Select change")

        if (!e) {
            setInterview(() => ({        
                user: user?._id,
                company: "",
                position: "",
                review: "",
                jobDetails: "",
                location: "",
                challenges: "",
                interviewType: "",
                interviewDifficulty: "",
                interviewDate: Date.now(),
                interviewer: "",
                linkedin: "",
                userNotes: "",
            }))
        } else {
            if (e.value === 'Add new Company') {
                navigate('/add-company')
            } else {
                setInterview({        
                    user: user?._id,
                    company: e.key,
                    position: "",
                    review: "",
                    jobDetails: "",
                    location: "",
                    challenges: "",
                    interviewType: "",
                    interviewDifficulty: "",
                    interviewDate: Date.now(),
                    interviewer: "",
                    linkedin: "",
                    userNotes: "",
                })
            }
        }
    
    }

    const handleCreate = (name) => {
        navigate(`/add-company/${name}`)
      };

    useEffect(() => {
        getCompanies()
    }, []) 

  return (
    <div>
        <h1>AddInterview</h1>

        <CreatableSelect id="selector" isClearable options={theseOptions} onChange={handleSelectChange} onCreateOption={handleCreate}/>

        </div>
  )
}

export default AddInterview