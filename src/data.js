import { v4 as uuidv4 } from "uuid";

const musicData = () => {
  return [
    {
      name: "The Loveliest Dream",
      cover:
        "https://chillhop.com/wp-content/uploads/2022/10/8b7ba4cdad98f47e0411cfe94c50cce4a68cb848-1024x1024.jpg",
      artist: "Sofasound",
      audio: "https://mp3.chillhop.com/serve.php/?mp3=55310",
      color: ["#e8c0da", "#6491cc"],
      id: uuidv4(),
      active: false,
    },
    {
      name: "chillhop beat tapes: J.Folk",
      cover:
        "https://chillhop.com/wp-content/uploads/2022/08/113a9b73235cab31646ef0059864aec70e793dd2-1024x1024.jpg",
      artist: "J.Folk",
      audio: "https://mp3.chillhop.com/serve.php/?mp3=43902",
      color: ["#4EBFA5", "#EBEBC5"],
      id: uuidv4(),
      active: false,
    },
    {
      name: "Changing Winds",
      cover:
        "https://chillhop.com/wp-content/uploads/2022/06/312458b974ab45c795d75ec3f0259caa3989103a-1024x1024.jpg",
      artist: "Knowmadic",
      audio: "https://mp3.chillhop.com/serve.php/?mp3=41656",
      color: ["#EE9494", "#FFF3D3"],
      id: uuidv4(),
      active: false,
    },
    {
      name: "Chillhop Essentials Summer 2022",
      cover:
        "https://chillhop.com/wp-content/uploads/2022/04/73f23095038f6f023083520706f3e5345f5dd682-1024x1024.jpg",
      artist: "Chillhop Music",
      audio: "https://mp3.chillhop.com/serve.php/?mp3=32860",
      color: ["#63B4DB", "#F9F4B0"],
      id: uuidv4(),
      active: false,
    },
    {
      name: "LA BOHÈME",
      cover:
        "https://chillhop.com/wp-content/uploads/2022/04/8cc8bdc59b30dd1f9d401cb485b8537d909e1f50-1024x1024.jpg",
      artist: "C Y G N",
      audio: "https://mp3.chillhop.com/serve.php/?mp3=31589",
      color: ["#30A437", "#F4DFE4"],
      id: uuidv4(),
      active: false,
    },
    {
      name: "Bliss",
      cover:
        "https://chillhop.com/wp-content/uploads/2020/09/5bff1a6f1bd0e2168d29b4c841b811598135e457-1024x1024.jpg",
      artist: "Misha, Jussi Halme",
      audio: "https://mp3.chillhop.com/serve.php/?mp3=9248",
      color: ["#F5939F", "#35588E"],
      id: uuidv4(),
      active: false,
    },
  ];
};

export default musicData;
