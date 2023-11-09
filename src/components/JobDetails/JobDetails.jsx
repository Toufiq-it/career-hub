import { useLoaderData, useParams } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { saveJobApplication } from "../utility/LocalStorage";

const JobDetails = () => {
    const jobs = useLoaderData();
    const {id} = useParams();
    const idInt = parseInt(id);
    const job = jobs.find(job=> job.id === idInt);
    console.log(job);

    const handleApplyJob = ()=>{
        saveJobApplication(idInt)
        toast('You Have Applied Successfully');
    };

    return (
        <div>
            
            <div className="grid gap-5 md:grid-cols-3">
                <div className="border md:col-span-2">
                    <h2 className="text-4xl">Details Coming hare</h2>
                    <h2>Job Details of : {job.job_title}</h2>
                    <p>{job.company_name}</p>
                </div>
                <div className="border">
                    <h2 className="text-3xl">side things</h2>
                    <button onClick={handleApplyJob} className="btn btn-primary w-full">Apply now</button>
                </div>
            </div>
            <ToastContainer />
        </div>
    );
};

export default JobDetails;