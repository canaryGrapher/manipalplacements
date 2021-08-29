import React from "react";
import { Card } from "interfaces/Card";
import { Tooltip, Divider } from "antd";
import {
  WarningOutlined,
  InfoOutlined,
  CloseCircleOutlined,
} from "@ant-design/icons";

interface CardProps {
  cards: Card;
}

const CardComponent: React.FC<CardProps> = ({ cards }: CardProps) => {
  const dateToday = new Date();
  const deadline = new Date(cards.deadline);
  const remainingBanner = `${deadline.getDate() - dateToday.getDate()} ${
    deadline.getDate() - dateToday.getDate() === 1 ? "day" : "days"
  } left`;
  const fileURL =
    "https://drive.google.com/file/d/" + cards.file + "/view?usp=sharing";
  return (
    <div className="w-100 rounded-xl hover:shadow-2xl relative h-full flex flex-col justify-between my-3 bg-white border border-gray-400 hover:border-white">
      {/* Company banner */}
      <div>
        {deadline.getDate() - dateToday.getDate() <= 5 &&
        deadline.getDate() - dateToday.getDate() >= 0 ? (
          <div className="w-full bg-yellow-500 text-white flex flex-row justify-center mb-3 rounded-t-lg">
            <WarningOutlined className="my-auto pr-2" />
            <p className="my-auto py-1 font-medium text-lg">
              {remainingBanner}
            </p>
          </div>
        ) : null}
        {deadline.getDate() - dateToday.getDate() < 0 ? (
          <div className="w-full bg-red-500 text-white flex flex-row justify-center mb-3 rounded-t-lg">
            <CloseCircleOutlined className="my-auto pr-2" />
            <p className="my-auto py-1 font-medium text-lg">Deadline over</p>
          </div>
        ) : null}
      </div>
      {/* All company related information */}
      <div className="mx-2 group-hover:text-white">
        <div className="flex flex-col mx-5 text-center">
          <div className="grid grid-cols-2">
            <img
              src={`${cards.companyImage}`}
              alt={cards.companyName + " Placement"}
              className="w-32 h-32 object-fit mx-auto"
            />
            <div className="text-left flex flex-col justify-center">
              <h2 className="text-3xl font-medium text-gray-600 mb-0 pb-0">
                {cards.companyName}
              </h2>
              <p className="text-blue-400 text-xl py-0 my-0">
                Systems Engineer
              </p>
              <p className="text-gray-500 text-sm font-medium my-0 py-0">
                {cards.offerType}
              </p>
            </div>
          </div>
          <p className="pt-2 mx-0 md:mx-1 lg:mx-2">{cards.description}</p>
        </div>
        <div>
          <Tooltip title="Link to the document">
            <a
              href={fileURL}
              target="_blank"
              rel="noopener noreferrer"
              className="pb-4"
            >
              <div className="w-full bg-gray-500 hover:bg-black h-8 text-white text-center font-bold cursor-pointer mb-1">
                <div className="flex flex-row justify-center h-full my-auto">
                  <InfoOutlined className="my-auto border border-white rounded-full mr-2" />
                  <span className="my-auto">Link to the official document</span>
                </div>
              </div>
            </a>
          </Tooltip>
          <div
            className="px-3 py-2 text-white font-bold w-full text-center"
            style={{ backgroundColor: "#0164FF" }}
          >
            <span>{cards.ctc}</span>
          </div>
          <div className="flex flex-col md:flex-row justify-evenly mb-5 mt-1 text-center">
            <Tooltip
              title={
                cards.backlogsAllowed
                  ? "Backlogs are allowed"
                  : "Backlogs aren't allowed"
              }
              placement="bottom"
              color={"#000000dd"}
            >
              <div
                className={
                  cards.backlogsAllowed
                    ? "px-3 py-2 border-2 border-white bg-green-400 text-white font-bold cursor-pointer w-full md:w-1/2"
                    : "px-3 py-2 border-2 border-white bg-red-500 text-white font-bold cursor-pointer w-full md:w-1/2"
                }
              >
                <span>Backlogs</span>
              </div>
            </Tooltip>
            <Tooltip
              title={
                cards.standbyOffer
                  ? "This is a stand-by offer. You can sit for other companies"
                  : "This is not a stand-by offer"
              }
              placement="bottom"
              color={"#000000dd"}
            >
              <div
                className={
                  cards.standbyOffer
                    ? "px-3 py-2 border-2 border-white bg-green-400 text-white font-bold cursor-pointer w-full md:w-1/2"
                    : "px-3 py-2 border-2 border-white bg-red-500 text-white font-bold cursor-pointer w-full md:w-1/2"
                }
              >
                <span>Stand-by</span>
              </div>
            </Tooltip>
          </div>
        </div>
        <Divider style={{}}>
          <p className="text-center font-medium text-lg text-gray-600 mt-2 mb-1">
            Eligible Branches
          </p>
        </Divider>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-2 justify-center mb-5">
          {cards.eligibleBranches
            .split("<BR/>")
            .map((branch: string, index: number) => (
              <div
                className="py-2 text-gray-600 font-light text-sm rounded-lg w-full text-center px-1 flex flex-col justify-center border-2 border-blue-400"
                key={index}
              >
                <span className="font-medium my-auto">{branch}</span>
              </div>
            ))}
        </div>
      </div>
      {/* Application links */}
      <div>
        <div className="w-full bg-purple-400 py-1 text-center text-white">
          Apply before{" "}
          <span className="font-medium">{deadline.toDateString()}</span>
        </div>
        <a
          href={cards.registrationLink}
          target="_blank"
          rel="noopener noreferrer"
        >
          <div className="w-full bg-purple-600 hover:bg-black text-xl py-3 text-center font-medium text-white rounded-b-xl cursor-pointer">
            Apply now
          </div>
        </a>
      </div>
    </div>
  );
};

export default CardComponent;
