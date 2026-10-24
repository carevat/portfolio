import { useEffect } from "react";
import { pageHtml } from "./page";
import { initScene } from "./scene";

export default function App() {
  useEffect(() => {
    initScene();
  }, []);

  // Single static markup block, rendered verbatim so the original DOM
  // structure (ids, classes, inline ticket vars) is preserved exactly.
  return <div dangerouslySetInnerHTML={{ __html: pageHtml }} />;
}
