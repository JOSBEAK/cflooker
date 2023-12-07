import PropTypes from "prop-types";
import BarGraph from "./BarGraph";
import PieGraph from "./PieChart";
import ProblemInfo from "./ProblemInfo";
import ContestInfo from "./ContestInfo";
import LineGraph from "./LineGraph";
import { useEffect, useState } from "react";

function Stats({ stats, handle }) {
  let solvedList = {}; ///[name][attempt_count]
  let tagList = {}; //[tag][count]
  let acceptedCount = 0;
  let totalCount = 0;
  let uniqueArray;
  let languageList = {}; //[lang][count]
  let ratingList = {};
  let levelList = {};
  let verdictList = {};
  let maxAttempts = 0;
  let oneSubmission = 0;
  let maxAccepted = 0;
  let contestCount = 0;
  let bestRank = 0;
  let worstRank = 0;
  let maxUp = 0;
  let maxDown = 0;
  let ratingData = [];
  //hello
  const [contestRating, setContestRating] = useState(null);

  useEffect(() => {
    const fetchContestDetails = async () => {
      await fetch(`https://codeforces.com/api/user.rating?handle=${handle}`)
        .then((response) => response.json())
        .then((data) => setContestRating(data.result));
    };
    fetchContestDetails();
  }, []);

  if (contestRating) {
    contestRating.forEach((rating) => {
      ratingData.push(rating.newRating);
    });
  }

  stats.forEach((stat) => {
    if (stat.verdict && stat.verdict === "OK") {
      acceptedCount++; // accepted solutions

      ////-------- problem count ---------///
      solvedList[stat.problem.name]
        ? solvedList[stat.problem.name]++ //incrementing map value for every attempt on a single value
        : (solvedList[stat.problem.name] = 1); //setting map value to 1

      //// --------rating -----------///
      ratingList[stat.problem.rating]
        ? ratingList[stat.problem.rating]++ //incrementing map value for every attempt on a single value
        : (ratingList[stat.problem.rating] = 1); //setting map value to 1

      //// --------Level -----------///
      levelList[stat.problem.index]
        ? levelList[stat.problem.index]++ //incrementing map value for every attempt on a single value
        : (levelList[stat.problem.index] = 1); //setting map value to 1
      /// ---------- tags -------///
      const stringArray = Array.from(stat.problem.tags);
      uniqueArray = [...new Set(stringArray)]; // converting string list back to array

      uniqueArray.forEach((tag) => {
        tagList[tag] ? tagList[tag]++ : (tagList[tag] = 1); // iterating on arary for each individual value of tag
      });
    }
    totalCount++;

    /// -------------counting number of languages used------------  ///
    languageList[stat.programmingLanguage]
      ? languageList[stat.programmingLanguage]++
      : (languageList[stat.programmingLanguage] = 1);

    verdictList[stat.verdict]
      ? verdictList[stat.verdict]++
      : (verdictList[stat.verdict] = 1);
  });
  const solvedCount = Object.keys(solvedList).length; //total number of problems solved
  const acceptancePercentage = ((acceptedCount / totalCount) * 100).toFixed(2); // Percentage accepted
  const avgAttempts = (totalCount / acceptedCount).toFixed(2);
  return (
    <div className="grid grid-cols-1 gap-4 p-16 rounded-md shadow-[0_2.8px_2.2px_rgba(0,_0,_0,_0.034),_0_6.7px_5.3px_rgba(0,_0,_0,_0.048),_0_12.5px_10px_rgba(0,_0,_0,_0.06),_0_22.3px_17.9px_rgba(0,_0,_0,_0.072),_0_41.8px_33.4px_rgba(0,_0,_0,_0.086),_0_100px_80px_rgba(0,_0,_0,_0.12)] md:grid-cols-1 lg:grid-cols-1">
      {/* Solved Count */}
      {/* <div className="mb-4">
        <h3 className="mb-2 text-lg font-semibold">Solved Count</h3>
        <p className="text-gray-900">{solvedCount}</p>
      </div> */}

      {/* Acceptance Percentage */}
      {/* <div className="mb-4">
        <h3 className="mb-2 text-lg font-semibold">Acceptance Percentage</h3>
        <p className="text-gray-900">{`${acceptancePercentage}%`}</p>
      </div> */}

      {/* Question Tags Graph (replace with your actual graph component) */}
      <div className="flex ">
        <span className="pr-1">
          {" "}
          <div className="mb-4 rounded-md shadow-[0_2.8px_2.2px_rgba(0,_0,_0,_0.034),_0_6.7px_5.3px_rgba(0,_0,_0,_0.048),_0_12.5px_10px_rgba(0,_0,_0,_0.06),_0_22.3px_17.9px_rgba(0,_0,_0,_0.072),_0_41.8px_33.4px_rgba(0,_0,_0,_0.086),_0_100px_80px_rgba(0,_0,_0,_0.12)] text-slate-100 bg-gradient-to-br from-gray-800 to-gray-900">
            <h3 className="mb-2 text-lg font-semibold">Tags</h3>
            {/* Your graph component goes here */}
            <PieGraph chartData={tagList} />
          </div>
        </span>

        <span className="pl-1">
          <div className="mb-4 rounded-md shadow-[0_2.8px_2.2px_rgba(0,_0,_0,_0.034),_0_6.7px_5.3px_rgba(0,_0,_0,_0.048),_0_12.5px_10px_rgba(0,_0,_0,_0.06),_0_22.3px_17.9px_rgba(0,_0,_0,_0.072),_0_41.8px_33.4px_rgba(0,_0,_0,_0.086),_0_100px_80px_rgba(0,_0,_0,_0.12)] text-slate-100 bg-gradient-to-br from-gray-800 to-gray-900">
            <h3 className="mb-2 text-lg font-semibold">Tags</h3>
            {/* Your graph component goes here */}
            <PieGraph chartData={verdictList} />
          </div>
        </span>
      </div>

      {/* Rating Graph (replace with your actual graph component) */}
      <div className="mb-4 rounded-md shadow-[0_2.8px_2.2px_rgba(0,_0,_0,_0.034),_0_6.7px_5.3px_rgba(0,_0,_0,_0.048),_0_12.5px_10px_rgba(0,_0,_0,_0.06),_0_22.3px_17.9px_rgba(0,_0,_0,_0.072),_0_41.8px_33.4px_rgba(0,_0,_0,_0.086),_0_100px_80px_rgba(0,_0,_0,_0.12)] text-slate-100 bg-gradient-to-br from-gray-800 to-gray-900">
        <h3 className="mb-2 text-lg font-semibold ">Rating Graph</h3>
        {/* Your graph component goes here */}
        <span>
          <LineGraph ratingData={ratingData} />
        </span>
      </div>

      {/* Language Graph (replace with your actual graph component) */}
      <div className="mb-4 rounded-md shadow-[0_2.8px_2.2px_rgba(0,_0,_0,_0.034),_0_6.7px_5.3px_rgba(0,_0,_0,_0.048),_0_12.5px_10px_rgba(0,_0,_0,_0.06),_0_22.3px_17.9px_rgba(0,_0,_0,_0.072),_0_41.8px_33.4px_rgba(0,_0,_0,_0.086),_0_100px_80px_rgba(0,_0,_0,_0.12)] text-slate-100 bg-gradient-to-br from-gray-800 to-gray-900">
        <h3 className="mb-2 text-lg font-semibold">Language Graph</h3>
        {/* Your graph component goes here */}
        <div>
          <BarGraph chartData={languageList} />
        </div>
      </div>
      {/* Language Graph (replace with your actual graph component) */}
      <div className="mb-4 rounded-md shadow-[0_2.8px_2.2px_rgba(0,_0,_0,_0.034),_0_6.7px_5.3px_rgba(0,_0,_0,_0.048),_0_12.5px_10px_rgba(0,_0,_0,_0.06),_0_22.3px_17.9px_rgba(0,_0,_0,_0.072),_0_41.8px_33.4px_rgba(0,_0,_0,_0.086),_0_100px_80px_rgba(0,_0,_0,_0.12)] text-slate-100 bg-gradient-to-br from-gray-800 to-gray-900">
        <h3 className="mb-2 text-lg font-semibold">Rating Graph</h3>
        {/* Your graph component goes here */}
        <BarGraph chartData={ratingList} />
      </div>
      {/* Language Graph (replace with your actual graph component) */}
      <div className="mb-4 rounded-md shadow-[0_2.8px_2.2px_rgba(0,_0,_0,_0.034),_0_6.7px_5.3px_rgba(0,_0,_0,_0.048),_0_12.5px_10px_rgba(0,_0,_0,_0.06),_0_22.3px_17.9px_rgba(0,_0,_0,_0.072),_0_41.8px_33.4px_rgba(0,_0,_0,_0.086),_0_100px_80px_rgba(0,_0,_0,_0.12)] text-slate-100 bg-gradient-to-br from-gray-800 to-gray-900">
        <h3 className="mb-2 text-lg font-semibold">Level Graph</h3>
        {/* Your graph component goes here */}
        <BarGraph chartData={levelList} />
      </div>

      <div className="flex flex-row">
        <div className="mb-4 col-span-full">
          <h3 className="mb-2 text-lg font-semibold">info</h3>
          {/* Your graph component goes here */}
          <ProblemInfo
            totalCount={totalCount}
            solvedCount={solvedCount}
            avgAttempts={avgAttempts}
            maxAttempts={maxAttempts}
            oneSubmission={oneSubmission}
            maxAccepted={maxAccepted}
          />
        </div>
        <div className="mb-4 col-span-full">
          <h3 className="mb-2 text-lg font-semibold">contest</h3>
          {/* Your graph component goes here */}
          <ContestInfo
            contestCount={contestCount}
            bestRank={bestRank}
            worstRank={worstRank}
            maxUp={maxUp}
            maxDown={maxDown}
          />
        </div>
      </div>
    </div>
  );
}

Stats.propTypes = {
  stats: PropTypes.array,
  handle: PropTypes.string,
};
export default Stats;
