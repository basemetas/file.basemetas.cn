interface DataItem {
  id: string;
  name: string;
  path: string;
  type: string;
}

const rawData = [
  // Word 文档
  {
    name: "《城镇房屋租赁合同（示范文本）》（GF—2025—2614）.docx",
    path: "/var/files/《城镇房屋租赁合同（示范文本）》（GF—2025—2614）.docx",
    type: "word",
  },
  // 部门文件套红模板（文头：中共重庆师范大学委员会）.doc
  {
    name: "部门文件套红模板（文头：中共重庆师范大学委员会）.doc",
    path: "/var/files/部门文件套红模板（文头：中共重庆师范大学委员会）.doc",
    type: "word",
  },
  // PDF 文件
  {
    name: "审批服务指南.pdf",
    path: "/var/files/审批服务指南.pdf",
    type: "other",
  },
  {
    name: "某某局文件.ofd",
    path: "/var/files/某某局文件.ofd",
    type: "other",
  },
  {
    name: "电子发票1735203685507.pdf",
    path: "/var/files/电子发票1735203685507.pdf",
    type: "other",
  },
  {
    name: "便携式电量记录分析仪软件集成系统.docx",
    path: "/var/files/便携式电量记录分析仪软件集成系统.docx",
    type: "word",
  },
  {
    name: "前海财险百万意外主协议.docx",
    path: "/var/files/前海财险百万意外主协议.docx",
    type: "word",
  },
  // Excel 表格
  {
    name: "200K_000.xlsx",
    path: "/var/files/200K_000.xlsx",
    type: "excel",
  },
  {
    name: "sample1.xls",
    path: "/var/files/sample1.xls",
    type: "excel",
  },
  {
    name: "囚徒健身.xlsx",
    path: "/var/files/囚徒健身.xlsx",
    type: "excel",
  },
  // PPT 演示文稿
  {
    name: "蓝色大气年终汇报PPT模板.pptx",
    path: "/var/files/蓝色大气年终汇报PPT模板.pptx",
    type: "ppt",
  },
  // 流程图
  {
    name: "BCG矩阵.xmind",
    path: "/var/files/BCG矩阵.xmind",
    type: "flow",
  },
  {
    name: "MVPSession1SimpleTimeline.vsd",
    path: "/var/files/MVPSession1SimpleTimeline.vsd",
    type: "flow",
  },
  {
    name: "diagram.bpmn",
    path: "/var/files/diagram.bpmn",
    type: "flow",
  },
  {
    name: "test.drawio",
    path: "/var/files/test.drawio",
    type: "flow",
  },
  {
    name: "tf16403429.vsdx",
    path: "/var/files/tf16403429.vsdx",
    type: "flow",
  },
  // 压缩包
  {
    name: "sample1.rar",
    path: "/var/files/sample1.rar",
    type: "zip",
  },
  {
    name: "sample_archivea.zip",
    path: "/var/files/sample_archivea.zip",
    type: "zip",
  },
  {
    name: "文件组合.7z",
    path: "/var/files/文件组合.7z",
    type: "zip",
  },
  {
    name: "人类简史.epub",
    path: "/var/files/人类简史（多看）V1.0.epub",
    type: "other",
  },
  // 文本文件
  {
    name: "example.md",
    path: "/var/files/example.md",
    type: "text",
  },
  {
    name: "pom.xml",
    path: "/var/files/pom.xml",
    type: "text",
  },
  {
    name: "vite.config.ts",
    path: "/var/files/vite.config.ts",
    type: "text",
  },
  // 图片
  {
    name: "React-icon.svg",
    path: "/var/files/React-icon.svg",
    type: "image",
  },
  {
    name: "example.emf",
    path: "/var/files/example.emf",
    type: "image",
  },
  {
    name: "sample.wmf",
    path: "/var/files/sample.wmf",
    type: "image",
  },
  {
    name: "转盘底图.psd",
    path: "/var/files/转盘底图.psd",
    type: "image",
  },
  // 其他文件
  {
    name: "Astronaut.glb",
    path: "/var/files/Astronaut.glb",
    type: "other",
  },
  {
    name: "PC1080.dxf",
    path: "/var/files/PC1080.dxf",
    type: "other",
  },
  {
    name: "Pistons.3dm",
    path: "/var/files/Pistons.3dm",
    type: "other",
  },
  {
    name: "Xbot.glb",
    path: "/var/files/Xbot.glb",
    type: "other",
  },
  {
    name: "file_example_MP3_1MG.mp3",
    path: "/var/files/file_example_MP3_1MG.mp3",
    type: "other",
  },
  {
    name: "pg1513-images-3.epub",
    path: "/var/files/pg1513-images-3.epub",
    type: "other",
  },
];

const data: DataItem[] = rawData.map((item, index) => ({
  ...item,
  id: `item-${index}`,
}));

export default data;
