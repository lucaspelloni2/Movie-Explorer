import React from "react";
import styled from "styled-components";
import classNames from "classnames";
import Dropzone from "react-dropzone";
import Icon from "../helpers/Icon";
import queryString from "querystring";
import { getDomain } from "../helpers/getDomain";

const DropContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  border: ${props =>
    props.isDragActive ? "3px dashed rgb(218, 223, 227)" : null};
  padding: 10px;
  align-self: center;
  border-radius: 6px;
  background-image: linear-gradient(to right, #e2564c 0%, #f15d5d 100%);
  width: 500px;
  margin: 20px 0;
`;

const DropTextContainer = styled.div`
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const DropTitle = styled.div`
  font-size: 25px;
  text-transform: uppercase;
  letter-spacing: 1px;
`;
const DropButton = styled.div`
  background: white;
  color: #e2564c;
  padding: 4px 10px;
  border-radius: 4px;
  cursor: pointer;
`;

const DropSub = styled.div`
  font-size: 13px;
  margin: 10px 0;
`;

const DragDropZone = ({ isDragActive }) => {
  return (
    <DropTextContainer isDragActive={isDragActive}>
      <DropTitle>Drag & Drop</DropTitle>
      <Icon color={"white"} width={50} height={50} icon={"drag"} />
      <DropSub>your files here</DropSub>
      <DropButton>or click here to browse</DropButton>
    </DropTextContainer>
  );
};

class FolderSelector extends React.Component {
  constructor() {
    super();
  }

  onDrop = files => {
    this.props.onLoading(true);
    let titles = [];
    files.forEach(file => {
      titles.push(file.name);
    });
    const body = queryString.stringify({ title: titles });
    fetch(`${getDomain()}/api/movies/find?${body}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json"
      }
    })
      .then(response => response.json())
      .then(async response => {
        const films = response.data;
        this.props.onLoadedData(films);
        this.props.onLoading(false);
      })
      .catch(err => {
        console.log(err);
        this.props.onLoading(false);
      });
  };

  render() {
    return (
      <Dropzone onDrop={this.onDrop}>
        {({ getRootProps, getInputProps, isDragActive }) => {
          return (
            <DropContainer
              isDragActive={isDragActive}
              {...getRootProps()}
              className={classNames("dropzone", {
                "dropzone--isActive": isDragActive
              })}
            >
              <input {...getInputProps()} />
              <DragDropZone isDragActive={isDragActive} />
            </DropContainer>
          );
        }}
      </Dropzone>
    );
  }
}

export default FolderSelector;
