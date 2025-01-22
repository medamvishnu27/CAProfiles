import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { fetchAccountants } from '../api/FetchAccounts';
import SearchBar from "../components/SearchBar";
import ResultList from "../components/ResultList";  

const Accountes = () => {

  const [accoounts, setAccounts] = useState([]);
  const [loadingg, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const AllAccounts = async () => {
      try {
        const data = await fetchAccountants();
        setAccounts(data);
      } catch (error) {
        console.log("failed to load account", error);
      } finally {
        setLoading(false);
      }
    }

    AllAccounts();
  }, [])

 if (loadingg) {
  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh',marginRight:"500px" }}>
<div className="flex-col gap-4 w-full flex items-center justify-center ">
  <div
    className="w-20 h-20 border-4 border-transparent text-blue-400 text-4xl animate-spin flex items-center justify-center border-t-blue-400 rounded-full"
  >
    <div
      className="w-16 h-16 border-4 border-transparent text-red-400 text-2xl animate-spin flex items-center justify-center border-t-red-400 rounded-full"
    ></div>
  </div>
</div>

    </div>
  );
}
  const handleAccountSelect = (accountant) => {
    navigate(`/details/${accountant.id}`);
  };

  return (
    <>
      <div className="bg-black text-white" style={{paddingTop:"150px"}}>
        <p className="text-center text-6xl font-medium ">CHARTERED ACCOUNTANTS</p>

        <div className="py-10">
          <SearchBar users={accoounts} onSelect={handleAccountSelect} />
        </div>
        <div > 
        <p className="text-center text-4xl font-medium py-12">All Profiles</p>
        <ResultList users={accoounts} />
        </div>
       
      </div>
    </>
  );
}

export default Accountes;
