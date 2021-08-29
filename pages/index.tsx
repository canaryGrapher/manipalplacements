import React from "react";
import { Button } from "antd";
import CardCompoent from "components/CardComponent";
import NotifyModal from "components/NotifyModal";

const IndexPage: React.FC = (props: any) => {
  const [isModalVisible, setIsModalVisible] = React.useState<boolean>(false);

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
        <div className="mt-5">
          <p className="pl-2 pb-0 mb-2">
            Want to get notified when this lists is updated, or when the
            deadline for a company for your branch is nearing?
          </p>
          <Button type="primary" onClick={showModal} className="ml-2">
            Notify me!
          </Button>
          <NotifyModal
            isVisible={isModalVisible}
            handleOk={handleOk}
            handleCancel={handleCancel}
          />
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-20 px-10">
        {props.data.map((item, index) => (
          <CardCompoent key={index} cards={item} />
        ))}
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
