import React from "react";
import { NavLink } from "react-router-dom";

const ResultList = ({ users }) => {
  // Display a message if no users are found
  if (!users || users.length === 0) {
    return <p className="text-center text-gray-100">No accounts Found</p>;
  }

  return (
    <div className="grid gap-10 py-5 sm:grid-cols-1 font-Parkinsans md:grid-cols-2 lg:grid-cols-3" style={{marginLeft:"250px"}}>
      {users.map((account) => (
        <div
          key={account.id}
          className="relative flex w-60 flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-md"
          style={{width:"500px"}}
        >
          <div className="relative mx-4 -mt-6 h-40 overflow-hidden rounded-xl shadow-lg">
            <img
              src={account.image}
              alt={account.name}
              className="w-full h-full object-cover font-semibold bg-gradient-to-r"
            />
          </div>
          <div className="p-6">
            <h5 className="mb-2 block text-xl font-semibold text-center leading-snug text-blue-gray-900">
              {account.name}
            </h5>
            <p className="text-sm text-gray-500">{account.email}</p>
          </div>
          <div className="flex items-center justify-center py-6">
            <NavLink
              to={`/details/${account.id}`}
              className="cursor-pointer bg-gradient-to-b from-blue-500 to-blue-950 shadow-[0px_4px_32px_0_rgba(99,102,241,.70)] px-8 py-2 rounded-xl border-[1px] border-slate-500 text-white font-medium group"
            >
              <div className="relative overflow-hidden">
                <p className="group-hover:-translate-y-7 duration-[1.125s] ease-[cubic-bezier(0.19,1,0.22,1)]">
                  View
                </p>
                <p class="absolute top-7 left-0 group-hover:top-0 duration-[1.125s] ease-[cubic-bezier(0.19,1,0.22,1)]">
                  More
                </p>
              </div>
            </NavLink>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ResultList;