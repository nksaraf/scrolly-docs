import Foo from "./content/foo.mdx";
import "@code-hike/mdx/dist/index.css";
import { render } from "react-dom";
import "virtual:windi.css";
function Page() {
  return (
    <div style={{ width: 900, margin: "0 auto" }}>
      <Foo />
    </div>
  );
}

render(<Page />, document.getElementById("app"));
