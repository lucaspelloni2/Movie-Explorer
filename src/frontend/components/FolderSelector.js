import React from "react";
import styled from "styled-components";
import classNames from "classnames";
import Dropzone from "react-dropzone";

const DropContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px dashed white;
  padding: 10px;
  align-self: center;
`;

class FolderSelector extends React.Component {
  constructor() {
    super();
  }

  onDrop = files => {
    console.log(files);
  };

  render() {
    return (
      <Dropzone onDrop={this.onDrop}>
        {({ getRootProps, getInputProps, isDragActive }) => {
          return (
            <DropContainer
              {...getRootProps()}
              className={classNames("dropzone", {
                "dropzone--isActive": isDragActive
              })}
            >
              <input {...getInputProps()} />
              {isDragActive ? (
                <p>Drop files here...</p>
              ) : (
                <p>
                  Try dropping some files here, or click to select files to
                  upload.
                </p>
              )}
            </DropContainer>
          );
        }}
      </Dropzone>
    );
  }
}

export default FolderSelector;
