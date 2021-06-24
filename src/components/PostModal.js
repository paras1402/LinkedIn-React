import React, { useState } from "react";
import styled from "styled-components";
import ReactPlayer from "react-player";
import { useDispatch, useSelector } from "react-redux";
import { selectUser } from "../features/userSlice";
import db, { storage } from "../firebase";
import firebase from "firebase";
import { selectArticleLoading } from "../features/articleSlice";
import { setLoadingBar } from "../features/articleSlice";
const PostModal = (props) => {
  const [editorText, setEditorText] = useState("");
  const [sharedImage, setSharedImage] = useState("");
  const [videoLink, setVideoLink] = useState("");
  const [assetArea, setAssetArea] = useState("");

  const user = useSelector(selectUser);

  const dispatch = useDispatch();
  const loading = useSelector(selectArticleLoading);

  const imageupload = (payload) => {
    dispatch(setLoadingBar(true));

    console.log("loading status", loading);
    if (payload.image) {
      const uploadTask = storage
        .ref(`/images/${payload.image.name}`)
        .put(payload.image);
      uploadTask.on(
        "state_changed",
        (snapshot) => {
          const progress =
            (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
          console.log(`progress:${progress}%`);
          if (snapshot.state === "running") {
            console.log(`progress:${progress}%`);
          }
        },
        (error) => {
          console.log(error.code);
        },
        async () => {
          const downloadURL = await uploadTask.snapshot.ref.getDownloadURL();
          db.collection("articles").add({
            actor: {
              email: payload.user.email,
              title: payload.user.displayName,
              date: payload.timestamp,
              image: payload.user.photo,
            },

            video: payload.video,
            sharedImg: downloadURL,
            comments: 0,
            description: payload.description,
          });
          dispatch(setLoadingBar(false));
        }
      );
    } else if (payload.video) {
      db.collection("articles").add({
        actor: {
          email: payload.user.email,
          title: payload.user.displayName,
          date: payload.timestamp,
          image: payload.user.photo,
        },
        video: payload.video,
        sharedImg: "",
        comments: 0,
        description: payload.description,
      });
      dispatch(setLoadingBar(false));
    } else {
      db.collection("articles").add({
        actor: {
          email: payload.user.email,
          title: payload.user.displayName,
          date: payload.timestamp,
          image: payload.user.photo,
        },
        video: "",
        sharedImg: "",
        comments: 0,
        description: payload.description,
      });
      dispatch(setLoadingBar(false));
    }
    dispatch(setLoadingBar(false));
    console.log("loading status", loading);
  };

  const imageChangeHandler = (e) => {
    const image = e.target.files[0];
    if (image === "" || image === undefined) {
      alert(`not image, type is ${typeof image}`);
      return;
    } else {
      setSharedImage(image);
    }
  };

  const switchAssetArea = (area) => {
    setSharedImage("");
    setVideoLink("");
    setAssetArea(area);
  };

  const postArticle = (e) => {
    e.preventDefault();
    if (e.target !== e.currentTarget) {
      return;
    }

    const payload = {
      image: sharedImage,
      video: videoLink,
      user: user,
      description: editorText,
      timestamp: firebase.firestore.Timestamp.now(),
    };

    imageupload(payload);
    handler();
  };

  const handler = () => {
    setEditorText("");
    setSharedImage("");
    setVideoLink("");
    setAssetArea("");
    props.onClose();
  };
  return (
    <Container>
      <Content>
        <Header>
          <h2>Create a post</h2>
          <button onClick={handler}>
            <img src="/images/close.svg" alt="" />
          </button>
        </Header>

        <SharedContent>
          <UserInfo>
            {user?.photo ? (
              <img src={user.photo}></img>
            ) : (
              <img src="/images/user.svg" alt="" />
            )}

            <span>{user?.displayName}</span>
          </UserInfo>
          <Editor>
            <textarea
              value={editorText}
              onChange={(e) => setEditorText(e.target.value)}
              placeholder="What's on your mind?"
              autoFocus={false}
            />
            {assetArea === "image" ? (
              <UploadImage>
                <input
                  type="file"
                  accept="image/gif, image/png, image/jpg"
                  name="image"
                  id="file"
                  style={{ display: "none" }}
                  onChange={imageChangeHandler}
                />
                <p>
                  <label htmlFor="file">Select an image to share</label>
                </p>
                {sharedImage && <img src={URL.createObjectURL(sharedImage)} />}
              </UploadImage>
            ) : (
              assetArea === "media" && (
                <>
                  <input
                    type="text"
                    placeholder="Please input a video link"
                    value={videoLink}
                    onChange={(e) => setVideoLink(e.target.value)}
                  />
                  {videoLink && (
                    <ReactPlayer width={"100%"} url={videoLink}></ReactPlayer>
                  )}
                </>
              )
            )}
          </Editor>
        </SharedContent>
        <ShareCreation>
          <AttachAsset>
            <AssetButton onClick={() => switchAssetArea("image")}>
              <img src="https://img.icons8.com/color-glass/48/000000/image.png" />
            </AssetButton>
            <AssetButton onClick={() => switchAssetArea("media")}>
              <img src="https://img.icons8.com/dusk/64/000000/video.png" />
            </AssetButton>
          </AttachAsset>

          <ShareComment>
            <AssetButton>
              <img src="https://img.icons8.com/fluent/48/000000/send-comment.png" />
              Comment
            </AssetButton>
          </ShareComment>

          <PostButton
            onClick={(event) => {
              postArticle(event);
            }}
            disabled={!editorText ? true : false}
          >
            Post
          </PostButton>
        </ShareCreation>
      </Content>
    </Container>
  );
};

const Container = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1000;
  right: 0;
  bottom: 0;
  color: black;
  background-color: rgba(0, 0, 0, 0.8);

  animation: fadeIn 0.3s;
`;
const Content = styled.div`
  width: 100%;
  max-width: 552px;
  background-color: white;
  max-height: 90%;
  overflow: initial;
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  position: relative;
  top: 32px;
  margin: 0 auto;
`;

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid rgba(0, 0, 0, 0.15);
  padding: 16px 20px;
  font-size: 16px;
  line-height: 1.5;
  color: rgba(0, 0, 0, 0.6);
  font-weight: 400;

  & > button {
    height: 40px;
    width: 40px;
    display: flex;
    justify-content: center;
    align-items: center;
    background: transparent;
    outline: none;
    border: none;
  }
  & > button:hover {
    background-color: rgba(0, 0, 0, 0.1);
    border-radius: 50%;
    cursor: pointer;
  }
`;

const SharedContent = styled.div`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  overflow-y: auto;
  background: transparent;
  padding: 8px 12px;
`;
const UserInfo = styled.div`
  display: flex;
  align-items: center;
  padding: 12px 24px;
  svg,
  img {
    width: 48px;
    height: 48px;
    border-radius: 50%;
    border: 2px solid transparent;
    background-clip: content-box;
  }
  span {
    font-weight: 600;
    font-size: 16px;
    line-height: 1.5;
    margin-left: 5px;
  }
`;

const ShareCreation = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 12px 24px 12px 16px;
`;

const AttachAsset = styled.div`
  align-items: center;
  display: flex;
  padding-right: 8px;
`;
const AssetButton = styled.button`
  display: flex;
  align-items: center;
  height: 40px;
  min-width: auto;
  color: rgba(0, 0, 0, 0.5);
  background: transparent;
  border: none;
  img {
    height: 100%;
  }
`;
const ShareComment = styled.div`
  padding-left: 8px;
  margin-right: auto;
  border-left: 1px solid rgba(0, 0, 0, 0.15);
`;

const PostButton = styled.button`
  min-width: 60px;
  padding: 0 16px;
  border-radius: 20px;
  background: #0a66c2;
  color: white;
  &:hover {
    background: #004182;
  }
  &:disabled {
    display: none;
  }
`;

const Editor = styled.div`
  padding: 12px 24px;
  textarea {
    width: 100%;
    min-height: 100px;
    resize: none;
  }
  input {
    /* padding: 10px; */

    width: 100%;
    height: 35px;
    font-size: 16px;
    margin-bottom: 20px;
  }
`;

const UploadImage = styled.div`
  text-align: center;
  img {
    width: 100%;
  }
`;

export default PostModal;
