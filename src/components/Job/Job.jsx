import { MdOutlineLocationOn } from "react-icons/md";
import { AiOutlineDollarCircle } from "react-icons/ai";


const Job = ({ job }) => {
    const { logo, job_title,company_name, remote_or_onsite, location, job_type, salary } = job;
    return (
        <div className="card bg-base-100 shadow-md">
            <figure><img src={logo} alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="card-title text-2xl font-bold">{job_title}</h2>
                <p className="text-xl font-medium my-3">{company_name}</p>
                <div>
                    <button className="px-5 py-2 font-extrabold border rounded border-[#7E90FE] mr-4 text-[#7E90FE]">{remote_or_onsite}</button>
                    <button className="px-5 py-2 font-extrabold border rounded border-[#7E90FE] mr-4 text-[#7E90FE]">{job_type}</button>
                </div>
                <div className="my-4 flex">
                    <h2 className="flex mr-4 items-center">
                        <MdOutlineLocationOn className="text-2xl mr-2" />
                        <span className="text-xl">
                        {location}
                        </span>
                    </h2>
                    <h2 className="flex items-center">
                        <AiOutlineDollarCircle className="text-2xl mr-2" />
                        <span className="text-xl">
                        {salary}
                        </span>
                    </h2>
                </div>
                <div className="card-actions">
                    <button className="btn bg-gradient-to-r from-[#7E90FE] to-[#9873FF] text-white normal-case text-xl font-bold">View Details</button>
                </div>
            </div>
        </div>
    );
};

export default Job;