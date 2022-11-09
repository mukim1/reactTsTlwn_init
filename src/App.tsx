import { useState } from "react";
import Layout from "./components/Layouts/Layout";

function App() {
  const [count, setCount] = useState(0);

  return (
    <Layout>
      <p className="p-5">
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Accusamus,
        excepturi quis reiciendis, velit optio at voluptates expedita molestiae
        maiores exercitationem ab, explicabo numquam? Consequatur consequuntur
        excepturi, commodi vel at reprehenderit?
      </p>
    </Layout>
  );
}

export default App;
