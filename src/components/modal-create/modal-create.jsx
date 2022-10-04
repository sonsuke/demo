import React, { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import "../../styles/modal.css";
const ModalCreate = ({
  selectedItem,
  type,
  show,
  onOkClick,
  onCancelClick,
}) => {
  const [data, setData] = useState({ title: "", content: "" });
  const [error, setError] = useState("");
  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };
  useEffect(() => {
    if (selectedItem) {
      setData(selectedItem);
    }
  }, [selectedItem]);
  const validate = () => {
    const { title, content } = data;
    let flag = true;
    if (!title.trim() || !content.trim()) {
      setError("Missing title or content");
      flag = false;
    }
    return flag;
  };
  const handleOkClick = () => {
    if (!validate()) return;

    onOkClick(data);
  };
  if (!show) return;
  return createPortal(
    <div className="modal__background">
      <div className="modal__wrap">
        <h3 className="modal__heading">{type}</h3>
        <p className="modal__error">{error}</p>
        <input
          name="title"
          type="text"
          value={data?.title}
          onChange={handleChange}
          placeholder="title"
        />
        <input
          placeholder="content"
          type="text"
          name="content"
          value={data?.content}
          onChange={handleChange}
        />
        <div className="button__group">
          <button onClick={handleOkClick} className="button__ok">
            OK
          </button>
          <button onClick={onCancelClick} className="button__cancel">
            Cancel
          </button>
        </div>
      </div>
    </div>,
    document.body
  );
};

export default ModalCreate;
