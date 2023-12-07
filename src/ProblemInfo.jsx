import PropTypes from "prop-types";

function ProblemInfo({
  totalCount,
  solvedCount,
  avgAttempts,
  maxAttempts,
  oneSubmission,
  maxAccepted,
}) {
  return (
    <div>
      <div>
        <p>totalcount : {totalCount}</p>
        <p>solvedCount : {solvedCount}</p>
        <p>avgAttempts : {avgAttempts}</p>
        <p>maxAttempts : {maxAttempts}</p>
        <p>oneSubmission : {oneSubmission}</p>
        <p>maxAccepted : {maxAccepted}</p>
      </div>
    </div>
  );
}

ProblemInfo.propTypes = {
  totalCount: PropTypes.number,
  solvedCount: PropTypes.number,
  avgAttempts: PropTypes.string,
  maxAttempts: PropTypes.number,
  oneSubmission: PropTypes.number,
  maxAccepted: PropTypes.number,
};
export default ProblemInfo;
