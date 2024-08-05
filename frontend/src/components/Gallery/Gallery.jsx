import React, { useEffect, useState } from "react";
import "./Gallery.css"; // Custom styles if needed

let images = [
  "1.jpeg",
  "105.jpeg",
  "12.jpeg",
  "130.jpeg",
  "19.jpeg",
  "25.jpeg",
  "31.jpeg",
  "111.jpeg",
  "134.png",
  "128.jpeg",
  "143.jpeg",
  "38.jpeg",
  "44.jpeg",
  "50.jpeg",
  "133.png",
  "57.jpg",
  "63.jpeg",
  "135.png",
  "7.jpeg",
  "144.gif",
  "112.jpeg",
  "76.jpeg",
  "82.jpg",
  "89.jpeg",
  "95.jpeg",
  "10.jpeg",
  "106.jpeg",
  "113.jpeg",
  "13.jpeg",
  "2.jpeg",
  "26.jpeg",
  "136.png",
  "32.jpeg",
  "39.jpg",
  "45.jpeg",
  "51.jpeg",
  "58.jpeg",
  "64.jpeg",
  "114.jpeg",
  "70.jpeg",
  "77.jpeg",
  "83.jpeg",
  "9.jpeg",
  "129.jpeg",
  "96.jpeg",
  "100.jpeg",
  "115.jpeg",
  "107.jpeg",
  "14.jpeg",
  "137.png",
  "20.jpeg",
  "27.jpeg",
  "33.jpeg",
  "4.jpeg",
  "46.jpeg",
  "116.jpeg",
  "52.jpeg",
  "59.jpeg",
  "65.jpeg",
  "71.jpeg",
  "78.jpeg",
  "84.jpg",
  "138.png",
  "90.jpeg",
  "117.jpeg",
  "97.jpeg",
  "101.jpeg",
  "108.jpeg",
  "15.jpeg",
  "21.jpeg",
  "28.gif",
  "118.jpeg",
  "126.jpeg",
  "34.jpeg",
  "40.jpeg",
  "47.jpeg",
  "53.jpeg",
  "6.jpeg",
  "66.jpeg",
  "139.png",
  "119.jpeg",
  "72.jpeg",
  "79.jpeg",
  "85.jpeg",
  "91.jpeg",
  "98.jpeg",
  "102.jpeg",
  "145.gif",
  "109.jpeg",
  "16.jpeg",
  "22.jpeg",
  "29.jpeg",
  "35.jpeg",
  "41.jpeg",
  "48.jpeg",
  "120.jpeg",
  "54.jpeg",
  "60.jpeg",
  "67.jpeg",
  "142.jpeg",
  "73.jpeg",
  "121.jpeg",
  "8.jpeg",
  "86.jpeg",
  "92.jpeg",
  "99.jpeg",
  "103.jpeg",
  "11.jpeg",
  "141.jpeg",
  "122.jpeg",
  "17.jpeg",
  "23.jpeg",
  "3.jpeg",
  "36.jpeg",
  "42.jpeg",
  "49.jpeg",
  "123.jpeg",
  "55.jpeg",
  "61.jpeg",
  "68.jpeg",
  "74.jpeg",
  "80.jpeg",
  "87.jpeg",
  "124.jpeg",
  "93.jpeg",
  "104.jpeg",
  "110.jpeg",
  "18.jpeg",
  "131.jpeg",
  "24.jpeg",
  "125.jpeg",
  "30.jpeg",
  "37.jpeg",
  "132.png",
  "43.jpeg",
  "5.jpeg",
  "56.jpeg",
  "140.jpeg",
  "62.jpeg",
  "69.jpeg",
  "75.jpeg",
  "81.jpeg",
  "88.jpeg",
  "94.jpeg",
];

const colors = ["#000", "#222", "#111"];

const shuffleArray = (array) => array.sort(() => Math.random() - 0.5);
const getRandomColor = () => colors[Math.floor(Math.random() * colors.length)];
const getRandomNumber = (min, max) =>
  Math.floor(Math.random() * (max - min + 1)) + min;

const Gallery = () => {
  const [columns, setColumns] = useState(Math.floor(window.innerWidth / 160));
  const [rows, setRows] = useState(Math.floor(window.innerHeight / 150));

  useEffect(() => {
    const handleResize = () => {
      setColumns(Math.floor(window.innerWidth / 160));
      setRows(Math.floor(window.innerHeight / 150));
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    shuffleArray(images);
  }, []);

  const createTile = (index) => (
    <div
      key={index}
      className="tile bg-opacity-50"
      style={{ backgroundColor: getRandomColor() }}
    >
      <img
        src={`../images/${images[index]}`}
        alt={`tile-${index}`}
        className="absolute transform -translate-x-1/2 -translate-y-1/2 pointer-events-none"
        style={{
          zIndex: getRandomNumber(8, 15),
          borderRadius: `${getRandomNumber(0, 12)}px`,
          top: `${getRandomNumber(0, 10)}%`,
          left: `${getRandomNumber(0, 10)}%`,
          height:
            getRandomNumber(1, 2) === 1
              ? `${getRandomNumber(80, 100)}%`
              : "auto",
          width:
            getRandomNumber(1, 2) === 2
              ? `${getRandomNumber(80, 100)}%`
              : "auto",
        }}
        draggable="false"
      />
    </div>
  );

  const tiles = Array.from({ length: columns * rows }).map((_, index) =>
    createTile(index)
  );

  return (
    <div
      className="fixed top-0 left-0 w-full h-full grid"
      style={{
        gridTemplateColumns: `repeat(${columns}, 1fr)`,
        gridTemplateRows: `repeat(${rows}, 1fr)`,
      }}
    >
      {tiles}
    </div>
  );
};

export default Gallery;
