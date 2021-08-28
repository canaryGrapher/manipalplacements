import React from "react";
import CardCompoent from "components/CardComponent";
import { Modal, Button } from "antd";

const cardObject = {
  companyName: "Google",
  offerType: "placement",
  eligibleBranches: ["CSE", "ECE"],
};

const IndexPage = () => {
  const fileURL =
    "https://drive.google.com/file/d/" +
    "INSERT FILE ID HERE" +
    "/view?usp=sharing";
  return (
    <React.Fragment>
      <div className="mt-10 max-w-max">
        <h1 className="text-5xl font-bold mb-0 pb-0">
          Campus Placement Bulletin
        </h1>
        <p className="pl-2 pt-2">
          For{" "}
          <span className="font-semibold text-red-600">
            Manipal Institute of Technology
          </span>
        </p>
        <p className="pl-2 text-lg text-gray-600 w-full md:w-1/2">
          Finding it too hard to keep a track of all the companie coming to
          campus? Yeah, me too! <br />
          This is the place where you can find all the companies that are coming
          for campus placements and make sure that you never miss one. I am also
          working on a notification service so you get notified whenever a new
          company comes to campus.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 mt-20 px-10">
        <CardCompoent cards={cardObject} />
      </div>
    </React.Fragment>
  );
};

export default IndexPage;

export async function getServerSideProps(context) {
  const res = await fetch(
    `${process.env.SITE_DOMAIN}/api/postings/getpostings`
  );
  const data = await res.json();
}
