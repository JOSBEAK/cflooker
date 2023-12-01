// User.jsx
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const User = () => {
  const { handle } = useParams();
  const [userDetails, setUserDetails] = useState(null);

  const fetchUserDetails = async () => {
    try {
      const response = await fetch(
        `https://codeforces.com/api/user.info?handles=${handle}`
      );
      if (!response.ok) {
        throw new Error("Error fetching userDetails details");
      }
      const { result } = await response.json();
      if (result.length > 0) {
        setUserDetails(result[0]); // Assuming the response contains userDetails details
      } else {
        console.error("User not found");
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  //   function convertUnixTimeToDateTime(unixTime) {
  //     // Multiply by 1000 to convert seconds to milliseconds
  //     const date = new Date(unixTime * 1000);

  //     // Get date components
  //     const year = date.getFullYear();
  //     const month = (date.getMonth() + 1).toString().padStart(2, "0");
  //     const day = date.getDate().toString().padStart(2, "0");
  //     const hours = date.getHours().toString().padStart(2, "0");
  //     const minutes = date.getMinutes().toString().padStart(2, "0");
  //     const seconds = date.getSeconds().toString().padStart(2, "0");

  //     // Construct the date-time string
  //     const dateTimeString = `${year}-${month}-${day} ${hours}:${minutes}:${seconds}`;

  //     return dateTimeString;
  //   }

  useEffect(() => {
    fetchUserDetails();
  }, [handle]);

  if (!userDetails) {
    return <p>Loading...</p>;
  }

  return (
    <div className="card card-compact w-96 bg-base-100 shadow-xl">
      <div className="text-center">
        <img
          src={userDetails.avatar}
          alt="Profile picture"
          className="rounded-full mx-auto w-16 h-16 mb-2"
        />
        <h2 className="text-2xl font-bold mb-4">{`@${handle}`}</h2>
      </div>

      <dl className="grid grid-cols-1 md:grid-cols-2 gap-x-4 gap-y-8">
        <div>
          <dt className="text-sm font-medium text-gray-500">First Name</dt>
          <dd className="mt-1 text-sm text-pink-400">
            {userDetails.firstName || "N/A"}
          </dd>
        </div>
        <div>
          <dt className="text-sm font-medium text-gray-500">Last Name</dt>
          <dd className="mt-1 text-sm text-pink-400">
            {userDetails.lastName || "N/A"}
          </dd>
        </div>
        <div>
          <dt className="text-sm font-medium text-gray-500">Country</dt>
          <dd className="mt-1 text-sm text-pink-400">
            {userDetails.country || "N/A"}
          </dd>
        </div>
        <div>
          <dt className="text-sm font-medium text-gray-500">City</dt>
          <dd className="mt-1 text-sm text-pink-400">
            {userDetails.city || "N/A"}
          </dd>
        </div>
        <div>
          <dt className="text-sm font-medium text-gray-500">Organization</dt>
          <dd className="mt-1 text-sm text-pink-400">
            {userDetails.organization || "N/A"}
          </dd>
        </div>
        <div>
          <dt className="text-sm font-medium text-gray-500">Contribution</dt>
          <dd className="mt-1 text-sm text-pink-400">
            {userDetails.contribution || "N/A"}
          </dd>
        </div>
        <div>
          <dt className="text-sm font-medium text-gray-500">Rank</dt>
          <dd className="mt-1 text-sm text-pink-400">
            {userDetails.rank || "N/A"}
          </dd>
        </div>
        <div>
          <dt className="text-sm font-medium text-gray-500">Rating</dt>
          <dd className="mt-1 text-sm text-pink-400">
            {userDetails.rating || "N/A"}
          </dd>
        </div>
        <div>
          <dt className="text-sm font-medium text-gray-500">Max Rank</dt>
          <dd className="mt-1 text-sm text-pink-400">
            {userDetails.maxRank || "N/A"}
          </dd>
        </div>
        <div>
          <dt className="text-sm font-medium text-gray-500">Max Rating</dt>
          <dd className="mt-1 text-sm text-pink-400">
            {userDetails.maxRating || "N/A"}
          </dd>
        </div>
      </dl>
    </div>
  );
};

export default User;
