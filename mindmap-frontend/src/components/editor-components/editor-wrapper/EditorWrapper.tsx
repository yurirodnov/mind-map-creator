import { ReactFlowProvider } from "@xyflow/react";
import { Editor } from "../editor/Editor";

import styles from "./EditorWrapper.module.css";

export const EditorWrapper = () => {
  return (
    <div className={styles.editorWrapper}>
      <ReactFlowProvider>
        <Editor />
      </ReactFlowProvider>
    </div>
  );
};
