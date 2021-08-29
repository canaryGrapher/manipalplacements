import React from "react";
import { Button, Select } from "antd";
import CardComponent from "components/CardComponent";
import NotifyModal from "components/NotifyModal";
import { Card } from "interfaces/Card";
import { BranchList } from "utils/branchList";

const { Option } = Select;

const IndexPage: React.FC = (props: any) => {
  const [isModalVisible, setIsModalVisible] = React.useState<boolean>(false);
  const [sortValue, setSortValue] = React.useState<string>("No Filter");

  //functions related to modal operation
  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleOk = () => {
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  const onChange = (value: string) => {
    setSortValue(value);
  };

  return (
    <React.Fragment>
      <div className="mt-10 max-w-max mx-10">
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

      <div className="w-full bg-gray-200 p-10">
        <div className="text-center">
          <h3 className="text-2xl font-medium mx-auto">Sort</h3>
        </div>
        <div className="flex flex-row justify-center">
          <Select
            showSearch
            style={{ width: 300 }}
            placeholder="Select a person"
            optionFilterProp="children"
            onChange={onChange}
            className="mx-auto"
          >
            {BranchList.map((item: string, key: React.Key) => (
              <Option key={key} value={item}>
                {item}
              </Option>
            ))}
          </Select>
          ,
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mt-20 px-5 py-5 md:px-10">
        {props.data.map((item: Card, index: React.Key) => {
          if (sortValue === "No Filter") {
            return <CardComponent key={index} cards={item} />;
          } else if (
            item.eligibleBranches.split("<BR/>").includes(sortValue) ||
            item.eligibleBranches.split("<BR/>").includes("All Branches")
          ) {
            return <CardComponent key={index} cards={item} />;
          } else {
            return null;
          }
        })}
      </div>

      <div className="onesignal-customlink-container">
        <div className="mt-16 p-10 bg-gray-300">
          <h3 className="text-2xl font-medium">Notifications</h3>
          <p className="pb-0 mb-2">
            Want to get notified when this lists is updated, or when the
            deadline for a company for your branch is nearing?
          </p>
          <Button type="primary" onClick={showModal}>
            Notify me!
          </Button>
          <NotifyModal
            isVisible={isModalVisible}
            handleOk={handleOk}
            handleCancel={handleCancel}
          />
        </div>
      </div>
    </React.Fragment>
  );
};

export default IndexPage;

export async function getServerSideProps() {
  const res = await fetch(
    `${process.env.SITE_DOMAIN}/api/postings/getpostings`
  );
  const data = await res.json();

  // passing the data to the page via props
  return { props: { data } };
}
