import React from "react";
import { Modal } from "antd";

interface ModalProps {
  isVisible: boolean;
  handleCancel: () => void;
  handleOk: () => void;
}

const NotifyModal: React.FC<ModalProps> = (props) => {
  return (
    <Modal
      title="Notification Settings"
      visible={props.isVisible}
      onOk={props.handleOk}
      onCancel={props.handleCancel}
    >
      <p>Coming soon</p>
      <p className="text-xl">
        If you clicked on 'Allow' for the notifications, you will receive
        notifications usually. I am working on customizing notifications so that
        you get only those notifications that you need. Cheers!
      </p>
    </Modal>
  );
};

export default NotifyModal;
