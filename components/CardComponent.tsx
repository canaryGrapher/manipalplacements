import React from "react";
import { Card } from "interfaces/Card";

import { Tooltip } from "antd";
import {
  WarningOutlined,
  InfoOutlined,
  CloseCircleOutlined,
} from "@ant-design/icons";

interface CardProps {
  cards: Card;
}

const colorList: Array<string> = [
  "#68C60E",
  "#DA3E1C",
  "#4B27E8",
  "#C70039",
  "#00B9AA",
  "#900C3F",
  "#E90FD4",
  "#EE822E",
  "#471071",
  "#FFC300",
  "#000000",
];

const CardComponent: React.FC<CardProps> = ({ cards }: CardProps) => {
  console.log(cards.eligibleBranches);

  const dateToday = new Date();
  const deadline = new Date(cards.deadline);
  const remainingBanner = `${deadline.getDate() - dateToday.getDate()} ${
    deadline.getDate() - dateToday.getDate() === 1 ? "day" : "days"
  } left`;
  const fileURL =
    "https://drive.google.com/file/d/" + cards.file + "/view?usp=sharing";
  return (
    <div className="w-100 rounded-xl shadow-2xl relative h-full flex flex-col justify-between my-6">
      {/* Company banner */}
      <div>
        <Tooltip title="Link to the document">
          <a href={fileURL} target="_blank" rel="noopener noreferrer">
            <div className="absolute top-3 right-5 rounded-full bg-gray-500 hover:bg-black h-6 w-6 text-white text-center font-bold cursor-pointer">
              <span className="flex flex-col justify-center h-full">
                <InfoOutlined />
              </span>
            </div>
          </a>
        </Tooltip>
        <img
          src={`${cards.companyImage}`}
          alt={cards.companyName + " Placement"}
          className="rounded-t-xl w-full h-42 object-cover"
        />
        {deadline.getDate() - dateToday.getDate() <= 5 &&
        deadline.getDate() - dateToday.getDate() >= 0 ? (
          <div className="w-full bg-yellow-500 text-white flex flex-row justify-center mb-3">
            <WarningOutlined className="my-auto pr-2" />
            <p className="my-auto py-1 font-medium text-lg">
              {remainingBanner}
            </p>
          </div>
        ) : null}
        {deadline.getDate() - dateToday.getDate() < 0 ? (
          <div className="w-full bg-red-500 text-white flex flex-row justify-center mb-3">
            <CloseCircleOutlined className="my-auto pr-2" />
            <p className="my-auto py-1 font-medium text-lg">Deadline over</p>
          </div>
        ) : null}
      </div>
      {/* All company related information */}
      <div>
        <div className="flex flex-col mx-5 text-center">
          <h2 className="text-3xl font-medium text-gray-600">
            {cards.companyName}
          </h2>
          <p className="text-blue-400 text-xl py-0 my-0">Systems Engineer</p>
          <p className="text-gray-500 text-sm font-medium my-0 py-0">
            {cards.offerType}
          </p>
          <p className="pt-2 mx-0 md:mx-1 lg:mx-2">{cards.description}</p>
        </div>
        <div>
          <div className="flex flex-row justify-evenly mb-5 mt-2 text-center">
            <div className="px-3 py-2 border-2 border-white bg-yellow-400 text-white font-bold w-1/3">
              <span>{cards.ctc}</span>
            </div>
            <Tooltip
              title="Red background indicates non-acceptance, green indicated acceptance"
              placement="bottom"
              color={"#000000dd"}
            >
              <div
                className={
                  cards.backlogsAllowed
                    ? "px-3 py-2 border-2 border-white bg-green-400 text-white font-bold cursor-pointer w-1/3"
                    : "px-3 py-2 border-2 border-white bg-red-500 text-white font-bold cursor-pointer w-1/3"
                }
              >
                <span>Backlogs</span>
              </div>
            </Tooltip>
            <Tooltip
              title="Red background - It is not a stand-by offer"
              placement="bottom"
              color={"#000000dd"}
            >
              <div
                className={
                  cards.standbyOffer
                    ? "px-3 py-2 border-2 border-white bg-green-400 text-white font-bold cursor-pointer w-1/3"
                    : "px-3 py-2 border-2 border-white bg-red-500 text-white font-bold cursor-pointer w-1/3"
                }
              >
                <span>Stand-by</span>
              </div>
            </Tooltip>
          </div>
        </div>
        <p className="text-center font-medium text-base mt-5 mb-1">
          Eligible branches
        </p>
        <div className="flex flex-row justify-center mb-5">
          {cards.eligibleBranches
            .split("<BR/>")
            .map((branch: string, index: number) => (
              <div
                className="px-2 py-1 mx-1 text-white font-light text-sm rounded-lg"
                key={index}
                style={{
                  backgroundColor: `${
                    colorList[
                      Math.floor(Math.random() * (colorList.length + 1))
                    ]
                  }`,
                }}
              >
                <span className="font-medium">{branch}</span>
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
