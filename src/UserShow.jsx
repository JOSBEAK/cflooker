import PropTypes from "prop-types";
import { Link } from "react-router-dom";

function UserShow({ avatar, handle, rating }) {
  return (
    <div className="container mx-auto">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 p-4">
        <div className="bg-white rounded-lg shadow p-4">
          <div className="mb-2">
            <img
              className="rounded-full w-24 h-24 mx-auto"
              src={avatar}
              alt="Profile picture"
            />
          </div>
          <div className="text-center">
            <h3 className="text-gray-500 mb-2">{`@${handle}`}</h3>
            <div className="text-green-600">
              <p>{rating}</p>
            </div>
            <Link
              to={`/user/${handle}`}
              className="bg-black text-white font-bold py-1 px-4 rounded-full transition duration-300 hover:bg-blue-700"
            >
              Visit Profile
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
UserShow.propTypes = {
  avatar: PropTypes.string,
  handle: PropTypes.string,
  rating: PropTypes.number,
};
export default UserShow;
