import { useEffect } from "react";
import "./App.css";
import { ConfigProvider } from "antd";
import "antd/dist/antd.css";
import zhCN from "antd/es/locale/zh_CN";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import NotFound from "@/pages/notfound";
import Home from "@/pages/home";

function App() {
  useEffect(() => {}, []);

  return (
    <ConfigProvider locale={zhCN}>
      <BrowserRouter>
        <Routes>
          <Route path={`/`} element={<Home />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </ConfigProvider>
  );
}

export default App;
