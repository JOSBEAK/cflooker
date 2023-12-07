import { useContext } from "react";
import VizContext from "./Context/vizcontext";
import SearchUser from "./SearchUser";
import UserShow from "./UserShow";
function Home() {
  const { userData } = useContext(VizContext);

  const renderedItems = userData.map((user, index) => {
    return (
      <UserShow
        avatar={user.avatar}
        handle={user.handle}
        rating={user.rating}
        key={index}
      />
    );
  });
  return (
    <>
      <div>
        <SearchUser />
      </div>
      <div>{renderedItems}</div>
    </>
  );
}

export default Home;
