import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import HeaderPost from "../components/header-post/header-post";
import ModalCreate from "../components/modal-create/modal-create";
import PostList from "../components/post-list/post-list";
import useToggle from "../hooks/useToggle";

const Posts = () => {
  const navigation = useNavigate();
  const [isShowCreate, handleToggleCreate] = useToggle(false);
  const [isShowEdit, handleToggleEdit] = useToggle(false);
  const [selected, setSelected] = useState(null);
  const [postList, setPostList] = useState([
    {
      title: "hihi",
      content:
        "hihihihihihihihihihihihihihihihihihihihihihihihihihihihihihihihihihihihihihihihihihihihihihihihihihihihihihihihihihihihihihihihihihihihihihihihihihihihihihihihihihi",
    },
    { title: "hihi", content: "hihi" },
  ]);
  const handleOkCreate = (data) => {
    setPostList([...postList, data]);
    handleToggleCreate();
  };
  const handleOkEdit = (data) => {
    let listData = [...postList];
    listData[selected] = data;
    setPostList(listData);
    handleToggleEdit();
  };

  const handleEditClick = (index) => {
    setSelected(index);
    handleToggleEdit();
  };
  const handleDelete = (index) => {
    const listData = [...postList].filter((item, idx) => idx !== index && item);
    setPostList(listData);
  };
  const handleLogout = () => {
    localStorage.removeItem("demo");
    navigation("/login");
  };
  useEffect(() => {
    const token = localStorage.getItem("demo");
    if (!token) navigation("/login");
  }, [navigation]);
  return (
    <>
      <HeaderPost onCreateClick={handleToggleCreate} onLogout={handleLogout} />
      <PostList
        list={postList}
        onDeleteClick={handleDelete}
        onEditClick={handleEditClick}
      />
      <ModalCreate
        type="Create"
        show={isShowCreate}
        onCancelClick={handleToggleCreate}
        onOkClick={handleOkCreate}
      />
      <ModalCreate
        type="Edit"
        selectedItem={postList[selected]}
        show={isShowEdit}
        onCancelClick={handleToggleEdit}
        onOkClick={handleOkEdit}
      />
    </>
  );
};

export default Posts;
