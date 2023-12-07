import PropTypes from "prop-types";

function ContestInfo({ contestCount, bestRank, worstRank, maxUp, maxDown }) {
  return (
    <div>
      <div>
        <p>Total Contests : {contestCount}</p>
        <p>Best Contest Rank : {bestRank}</p>
        <p>Worst Contest Rank : {worstRank}</p>
        <p>Maximum Rating+ : {maxUp}</p>
        <p>Maximum Rating- : {maxDown}</p>
      </div>
    </div>
  );
}
ContestInfo.propTypes = {
  contestCount: PropTypes.number,
  bestRank: PropTypes.number,
  worstRank: PropTypes.number,
  maxUp: PropTypes.number,
  maxDown: PropTypes.number,
};
export default ContestInfo;
