import React from "react";
import { Card } from "interfaces/Card";

import { Tooltip } from "antd";
import { WarningOutlined, InfoOutlined } from "@ant-design/icons";

interface CardProps {
  cards: Card;
}

const colorList: Array<string> = [
  "orange",
  "blue",
  "green",
  "red",
  "volcano",
  "gold",
];

const CardComponent: React.FC<CardProps> = ({ cards }: CardProps) => {
  return (
    <div className="w-100 rounded-xl shadow-lg relative">
      <Tooltip title="Link to the document">
        <div className="absolute top-3 right-5 rounded-full bg-gray-500 hover:bg-black h-6 w-6 text-white text-center font-bold cursor-pointer">
          <span className="flex flex-col justify-center h-full">
            <InfoOutlined />
          </span>
        </div>
      </Tooltip>
      <img
        src={
          "https://drive.google.com/uc?export=view&id=17KsADrO7K1EDcE50tjBzvzvBRDRNGNFr"
        }
        alt={"Cognizant Placement"}
        className="rounded-t-xl w-full h-42 object-cover"
      />
      <div className="w-full bg-red-500 text-white flex flex-row justify-center mb-3">
        <WarningOutlined className="my-auto pr-2" />
        <p className="my-auto py-1 font-medium text-lg">3 days left</p>
      </div>
      <div className="flex flex-col mx-5 text-center">
        <h2 className="text-3xl font-medium text-gray-600">
          {cards.companyName}
        </h2>
        <p className="text-blue-400 text-xl py-0 my-0">Systems Engineer</p>
        <p className="text-gray-500 text-sm font-medium my-0 py-0">
          {cards.offerType}
        </p>
        <p className="pt-2 mx-0 md:mx-1 lg:mx-2">
          Capgemini description is really good if you want to get into google
          Capgemini description is really good if you want to get into google.
        </p>
      </div>
      <div className="flex flex-row justify-evenly mb-5 mt-2">
        <div className="px-3 py-1 bg-yellow-400 text-white font-bold">
          <span>{"42 LPA"}</span>
        </div>
        <Tooltip
          title="Red background indicates non-acceptance, green indicated acceptance"
          placement="bottom"
          color={"#000000dd"}
        >
          <div className="px-3 py-1 bg-red-500 text-white font-bold cursor-pointer">
            <span>Backlogs</span>
          </div>
        </Tooltip>
        <Tooltip
          title="Red background - It is not a stand-by offer"
          placement="bottom"
          color={"#000000dd"}
        >
          <div className="px-3 py-1 bg-green-500 text-white font-bold cursor-pointer">
            <span>Stand-by</span>
          </div>
        </Tooltip>
      </div>
      <p className="text-center font-medium text-base mt-5 mb-1">
        Eligible branches
      </p>
      <div className="flex flex-row justify-center mb-5">
        {cards.eligibleBranches.map((branch: string, index: number) => (
          <div
            className="px-2 py-1 mx-1 text-white font-light text-sm rounded-lg"
            key={index}
            style={{ backgroundColor: colorList[index] }}
          >
            <span>{branch}</span>
          </div>
        ))}
      </div>
      <div className="w-full bg-purple-400 py-1 text-center text-white">
        Apply before {"August 30, 2021"}
      </div>
      <div className="w-full bg-purple-600 hover:bg-black text-xl py-3 text-center font-medium text-white rounded-b-xl cursor-pointer">
        Apply now
      </div>
    </div>
  );
};

export default CardComponent;
