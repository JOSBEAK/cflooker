import { useContext, useState } from "react";
import VizContext from "./Context/vizcontext";

function SearchUser() {
  const [text, setText] = useState("");
  const { setSearchValue } = useContext(VizContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSearchValue(text);
  };
  const handleInputChange = (e) => {
    setText(e.target.value);
  };

  return (
    <div>
      <form
        className="mt-4 space-y-4"
        action="/search"
        method="POST"
        onSubmit={handleSubmit}
      >
        <div className="rounded-md shadow-sm -space-y-px">
          <div>
            <label htmlFor="search-input" className="sr-only">
              Search
            </label>
            <input
              id="search-input"
              name="search-input"
              value={text}
              onChange={handleInputChange}
              type="text"
              required
              className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-white rounded-t-md focus:outline-none focus:ring-yellow-500 focus:border-yellow-500 focus:z-10 sm:text-sm"
              placeholder="Search..."
            />
          </div>
        </div>
        <div>
          <button
            type="submit"
            className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-yellow-600 hover:bg-yellow-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-yellow-500"
          >
            Search
          </button>
        </div>
      </form>
    </div>
  );
}

export default SearchUser;
