// User.jsx
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Stats from "./Stats";
import "./shadow.css";

const User = () => {
  const { handle } = useParams();
  const [userDetails, setUserDetails] = useState(null);
  const [userStats, setUserStats] = useState(null);

  useEffect(() => {
    const fetchUserDetails = async () => {
      await fetch(`https://codeforces.com/api/user.info?handles=${handle}`)
        .then((response) => response.json())
        .then((data) => setUserDetails(data.result[0]));
      await fetch(
        `https://codeforces.com/api/user.status?handle=${handle}&from=1`
      )
        .then((response) => response.json())
        .then((data) => setUserStats(data.result));
    };

    fetchUserDetails();
  }, [handle]);

  if (!userDetails) {
    return <p>Loading...</p>;
  }

  let renderedStats;

  if (userStats) {
    // userStats exists, so you can safely map over it
    renderedStats = <Stats stats={userStats} handle={handle} />;
  } else {
    // userStats is null, rendering loading or some fallback content
    renderedStats = <p>Loading...</p>;
  }

  function convertUnixTimeToDateTime(unixTime) {
    // Multiply by 1000 to convert seconds to milliseconds
    const date = new Date(unixTime * 1000);

    // Get date components
    const year = date.getFullYear();
    const month = (date.getMonth() + 1).toString().padStart(2, "0");
    const day = date.getDate().toString().padStart(2, "0");
    const hours = date.getHours().toString().padStart(2, "0");
    const minutes = date.getMinutes().toString().padStart(2, "0");
    const seconds = date.getSeconds().toString().padStart(2, "0");

    // Construct the date-time string
    const dateTimeString = `${year}-${month}-${day} ${hours}:${minutes}:${seconds}`;

    return dateTimeString;
  }

  return (
    <div>
      <div className="flex shadow-[0_2.8px_2.2px_rgba(0,_0,_0,_0.034),_0_6.7px_5.3px_rgba(0,_0,_0,_0.048),_0_12.5px_10px_rgba(0,_0,_0,_0.06),_0_22.3px_17.9px_rgba(0,_0,_0,_0.072),_0_41.8px_33.4px_rgba(0,_0,_0,_0.086),_0_100px_80px_rgba(0,_0,_0,_0.12)]">
        <div className="flex-none w-64 px-10 py-10 h-128">
          <span className="text-centre">
            <img
              src={userDetails.avatar}
              alt="Profile picture"
              className="w-24 h-24 mx-10 mb-4 rounded-full"
            />
            <h2 className="mb-4 text-2xl font-bold">{`@${handle}`}</h2>
          </span>
        </div>
        <div className="flex-1">
          <dl className="grid grid-cols-1 md:grid-cols-4 gap-x-4 gap-y-8 ">
            <div className="shadow-[0_2.8px_2.2px_rgba(0,_0,_0,_0.034),_0_6.7px_5.3px_rgba(0,_0,_0,_0.048),_0_12.5px_10px_rgba(0,_0,_0,_0.06),_0_22.3px_17.9px_rgba(0,_0,_0,_0.072),_0_41.8px_33.4px_rgba(0,_0,_0,_0.086),_0_100px_80px_rgba(0,_0,_0,_0.12)]">
              <div className="block p-6 bg-white rounded-lg bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 hover:from-pink-500 hover:to-yellow-500">
                <h5 className="mb-2 text-xl font-medium leading-tight text-neutral-800 dark:text-neutral-50">
                  Name
                </h5>
                <p className="mb-4 text-base text-neutral-600 dark:text-pink-400">
                  {userDetails.firstName || "N/A"}{" "}
                  {userDetails.lastName || "N/A"}
                </p>
              </div>
            </div>

            <div>
              <div className="block p-6 bg-white rounded-lg bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 hover:from-pink-500 hover:to-yellow-500">
                <h5 className="mb-2 text-xl font-medium leading-tight text-neutral-800 dark:text-neutral-50">
                  Country
                </h5>
                <p className="mb-4 text-base text-neutral-600 dark:text-pink-400">
                  {userDetails.country || "N/A"}
                </p>
              </div>
            </div>

            <div>
              <div className="block p-6 bg-white rounded-lg bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 hover:from-pink-500 hover:to-yellow-500">
                <h5 className="mb-2 text-xl font-medium leading-tight text-neutral-800 dark:text-neutral-50">
                  City
                </h5>
                <p className="mb-4 text-base text-neutral-600 dark:text-pink-400">
                  {userDetails.city || "N/A"}
                </p>
              </div>
            </div>
            <div>
              <div className="block p-6 bg-white rounded-lg bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 hover:from-pink-500 hover:to-yellow-500">
                <h5 className="mb-2 text-xl font-medium leading-tight text-neutral-800 dark:text-neutral-50">
                  Organization
                </h5>
                <p className="mb-4 text-base text-neutral-600 dark:text-pink-400">
                  {userDetails.organization || "N/A"}
                </p>
              </div>
            </div>

            <div>
              <div className="block p-6 bg-white rounded-lg bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 hover:from-pink-500 hover:to-yellow-500">
                <h5 className="mb-2 text-xl font-medium leading-tight text-neutral-800 dark:text-neutral-50">
                  Contribution
                </h5>
                <p className="mb-4 text-base text-neutral-600 dark:text-pink-400">
                  {userDetails.contribution || "N/A"}
                </p>
              </div>
            </div>
            <div>
              <div className="block p-6 bg-white rounded-lg bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 hover:from-pink-500 hover:to-yellow-500">
                <h5 className="mb-2 text-xl font-medium leading-tight text-neutral-800 dark:text-neutral-50">
                  Rank
                </h5>
                <p className="mb-4 text-base text-neutral-600 dark:text-pink-400">
                  {userDetails.rank || "N/A"}
                </p>
              </div>
            </div>

            <div>
              <div className="block p-6 bg-white rounded-lg bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 hover:from-pink-500 hover:to-yellow-500">
                <h5 className="mb-2 text-xl font-medium leading-tight text-neutral-800 dark:text-neutral-50">
                  Rating
                </h5>
                <p className="mb-4 text-base text-neutral-600 dark:text-pink-400">
                  {userDetails.rating || "N/A"}
                </p>
              </div>
            </div>
            <div>
              <div className="block p-6 bg-white rounded-lg bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 hover:from-pink-500 hover:to-yellow-500">
                <h5 className="mb-2 text-xl font-medium leading-tight text-neutral-800 dark:text-neutral-50">
                  Max Rank
                </h5>
                <p className="mb-4 text-base text-neutral-600 dark:text-pink-400">
                  {userDetails.maxRank || "N/A"}
                </p>
              </div>
            </div>

            <div>
              <div className="block p-6 bg-white rounded-lg bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 hover:from-pink-500 hover:to-yellow-500">
                <h5 className="mb-2 text-xl font-medium leading-tight text-neutral-800 dark:text-neutral-50">
                  Max Rating
                </h5>
                <p className="mb-4 text-base text-neutral-600 dark:text-pink-400">
                  {userDetails.maxRating || "N/A"}
                </p>
              </div>
            </div>
            <div>
              <div className="block p-6 bg-white rounded-lg bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 hover:from-pink-500 hover:to-yellow-500">
                <h5 className="mb-2 text-xl font-medium leading-tight text-neutral-800 dark:text-neutral-50">
                  Last Online
                </h5>
                <p className="mb-4 text-base text-neutral-600 dark:text-pink-400">
                  {convertUnixTimeToDateTime(
                    userDetails.lastOnlineTimeSeconds
                  ) || "N/A"}
                </p>
              </div>
            </div>
            <div>
              <div className="block p-6 bg-white rounded-lg bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 hover:from-pink-500 hover:to-yellow-500">
                <h5 className="mb-2 text-xl font-medium leading-tight text-neutral-800 dark:text-neutral-50">
                  Date Joined
                </h5>
                <p className="mb-4 text-base text-neutral-600 dark:text-pink-400">
                  {convertUnixTimeToDateTime(
                    userDetails.registrationTimeSeconds
                  ) || "N/A"}
                </p>
              </div>
            </div>
          </dl>

          <div className="pt-48 ">{renderedStats}</div>
        </div>
      </div>
    </div>
  );
};

export default User;
