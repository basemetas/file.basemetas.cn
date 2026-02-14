import { useState } from "react";
import { Base64 } from "js-base64";

import "./index.css";

import data from "./data.ts";

interface DocumentItem {
  id: string;
  name: string;
  type: "ppt" | "excel" | "word" | "flow" | "zip" | "text" | "image" | "other";
}

export default function Home() {
  const [fileUrl, setFileUrl] = useState("");
  const [urlError, setUrlError] = useState("");
  const [searchText, setSearchText] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [activeMenu, setActiveMenu] = useState("home");
  const pageSize = 15;

  const documents: DocumentItem[] = data;

  const getIconColor = (type: string) => {
    switch (type) {
      case "word":
        return "#2b579a";
      case "excel":
        return "#217346";
      case "ppt":
        return "#d24726";
      case "zip":
        return "#fbbf24";
      case "flow":
        return "#8b5cf6";
      case "text":
        return "#6b7280";
      case "image":
        return "#ec4899";
      case "other":
        return "#94a3b8";
      default:
        return "#94a3b8";
    }
  };

  const getIconSvg = (type: string) => {
    switch (type) {
      case "word":
        return (
          <svg width="24" height="24" viewBox="0 0 24 24" fill="white">
            <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8l-6-6z" />
            <path d="M14 2v6h6" />
            <path
              d="M8 12h8M8 16h8"
              stroke="white"
              strokeWidth="1"
              fill="none"
            />
          </svg>
        );
      case "excel":
        return (
          <svg width="24" height="24" viewBox="0 0 24 24" fill="white">
            <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8l-6-6z" />
            <path d="M14 2v6h6" />
            <path
              d="M8 13h8M8 17h8M16 9v8M12 9v8"
              stroke="white"
              strokeWidth="1"
              fill="none"
            />
          </svg>
        );
      case "ppt":
        return (
          <svg width="24" height="24" viewBox="0 0 24 24" fill="white">
            <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8l-6-6z" />
            <path d="M14 2v6h6" />
            <rect x="9" y="11" width="6" height="6" rx="1" />
          </svg>
        );
      case "zip":
        return (
          <svg width="24" height="24" viewBox="0 0 24 24" fill="white">
            <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8l-6-6z" />
            <path d="M14 2v6h6" />
            <path
              d="M12 6v2m0 2v2m0 2v2"
              stroke="white"
              strokeWidth="1.5"
              strokeLinecap="round"
            />
          </svg>
        );
      case "flow":
        return (
          <svg width="24" height="24" viewBox="0 0 24 24" fill="white">
            <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8l-6-6z" />
            <path d="M14 2v6h6" />
            <circle cx="12" cy="12" r="2" />
            <circle cx="12" cy="17" r="1.5" />
            <path d="M12 14v1.5" stroke="white" strokeWidth="1" fill="none" />
          </svg>
        );
      case "text":
        return (
          <svg width="24" height="24" viewBox="0 0 24 24" fill="white">
            <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8l-6-6z" />
            <path d="M14 2v6h6" />
            <path
              d="M8 10h8M8 14h8M8 18h5"
              stroke="white"
              strokeWidth="1"
              fill="none"
            />
          </svg>
        );
      case "image":
        return (
          <svg width="24" height="24" viewBox="0 0 24 24" fill="white">
            <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8l-6-6z" />
            <path d="M14 2v6h6" />
            <circle cx="10" cy="11" r="1.5" />
            <path
              d="M7 17l3-3 2 2 3-3 2 2"
              stroke="white"
              strokeWidth="1"
              fill="none"
            />
          </svg>
        );
      default:
        return (
          <svg width="24" height="24" viewBox="0 0 24 24" fill="white">
            <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8l-6-6z" />
            <path d="M14 2v6h6" />
          </svg>
        );
    }
  };

  // 预览文件
  const handleDocumentClick = (doc: DocumentItem) => {
    const opts = {
      path: doc.path || undefined,
      url: doc.url || undefined,
      displayName: doc.name || undefined,
    };
    console.log(opts);

    // 编码
    const jsonStr = JSON.stringify(opts);
    console.log(jsonStr);
    const base64 = encodeURIComponent(Base64.encode(jsonStr));

    // 解码测试
    // const decodedJsonStr = Base64.decode(decodeURIComponent(base64));
    // console.log(decodedJsonStr);

    // const previewUrl = `http://192.168.3.159:7000/preview/view?data=${base64}`;
    const previewUrl = `https://file.basemetas.cn/preview/view?data=${base64}`;
    window.open(previewUrl, "_blank");
  };

  const validateUrl = (url: string): boolean => {
    const trimmedUrl = url.trim();
    if (!trimmedUrl) {
      setUrlError("请输入文件地址");
      return false;
    }

    const httpPattern = /^https?:\/\/.+/i;
    if (!httpPattern.test(trimmedUrl)) {
      setUrlError("请输入有效的 http 或 https 地址");
      return false;
    }

    setUrlError("");
    return true;
  };

  // 预览远程文件
  const handleOpenRemoteFile = () => {
    if (validateUrl(fileUrl)) {
      handleDocumentClick({ url: fileUrl });
    }
  };

  const filteredDocuments = documents.filter((doc) =>
    doc.name.toLowerCase().includes(searchText.toLowerCase())
  );

  const totalPages = Math.ceil(filteredDocuments.length / pageSize);
  const paginatedDocuments = filteredDocuments.slice(
    (currentPage - 1) * pageSize,
    currentPage * pageSize
  );

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  // 页面跳转
  const handleNavigate = (path: string) => {
    window.location.href = path;
  };

  return (
    <>
      <nav className="top-nav">
        <div className="nav-content">
          <div className="nav-brand">BaseMetas 文件预览在线体验</div>
          <div className="nav-menu">
            <button
              className={`nav-item`}
              onClick={() => handleNavigate("https://fileview.basemetas.cn/")}
            >
              首页
            </button>
            <button
              className={`nav-item`}
              onClick={() =>
                handleNavigate(
                  "https://fileview.basemetas.cn/docs/product/summary"
                )
              }
            >
              产品介绍
            </button>
            <button
              className={`nav-item`}
              onClick={() =>
                handleNavigate(
                  "https://fileview.basemetas.cn/docs/product/formats"
                )
              }
            >
              支持格式
            </button>
            <button
              className={`nav-item`}
              onClick={() =>
                handleNavigate(
                  "https://github.com/basemetas/fileview"
                )
              }
            >
              开源地址
            </button>
          </div>
        </div>
      </nav>

      <div className="home-container">
        <div className="remote-file-input">
          <input
            type="text"
            placeholder="请输入远程文件地址"
            value={fileUrl}
            onChange={(e) => {
              setFileUrl(e.target.value);
              setUrlError("");
            }}
            onKeyPress={(e) => e.key === "Enter" && handleOpenRemoteFile()}
            className={urlError ? "error" : ""}
          />
          <button onClick={handleOpenRemoteFile}>打开文件</button>
          {urlError && <div className="error-message">{urlError}</div>}
        </div>

        <div className="document-list">
          <div className="list-header">
            <span>本地文件</span>
            <input
              type="text"
              className="header-search"
              placeholder="搜索文件名"
              value={searchText}
              onChange={(e) => {
                setSearchText(e.target.value);
                setCurrentPage(1);
              }}
            />
          </div>
          {paginatedDocuments.map((doc) => (
            <div
              key={doc.id}
              className="document-item"
              onClick={() => handleDocumentClick(doc)}
            >
              <div
                className="doc-icon"
                style={{ backgroundColor: getIconColor(doc.type) }}
              >
                {getIconSvg(doc.type)}
              </div>
              <span className="doc-name">{doc.name}</span>
            </div>
          ))}
        </div>

        {totalPages > 1 && (
          <div className="pagination">
            <button
              className="page-btn"
              disabled={currentPage === 1}
              onClick={() => handlePageChange(currentPage - 1)}
            >
              上一页
            </button>
            <div className="page-numbers">
              {Array.from({ length: totalPages }, (_, i) => i + 1).map(
                (page) => (
                  <button
                    key={page}
                    className={`page-number ${
                      currentPage === page ? "active" : ""
                    }`}
                    onClick={() => handlePageChange(page)}
                  >
                    {page}
                  </button>
                )
              )}
            </div>
            <button
              className="page-btn"
              disabled={currentPage === totalPages}
              onClick={() => handlePageChange(currentPage + 1)}
            >
              下一页
            </button>
          </div>
        )}
      </div>

      <footer className="footer">
        <p>© 2026 BaseMetas Fileview</p>
      </footer>
    </>
  );
}
