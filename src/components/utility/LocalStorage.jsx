const getStoredJobApplication = ()=>{
    const storedJob = localStorage.getItem('job-application');
    if(storedJob){
        return JSON.parse(storedJob)
    }
    return [];
}

const saveJobApplication = id =>{
    const storedJobApplication = getStoredJobApplication();
    const exists = storedJobApplication.find(jobId => jobId === id);
    if (!exists) {
        storedJobApplication.push(id);
        localStorage.setItem('job-application', JSON.stringify(storedJobApplication));
    }
}

export { getStoredJobApplication, saveJobApplication}