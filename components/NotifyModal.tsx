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
        Дайте мне дышать, ребята! Скоро будет обновление. Не заставлю вас ждать.
      </p>
    </Modal>
  );
};

export default NotifyModal;
