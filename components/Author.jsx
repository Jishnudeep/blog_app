import React from "react";
import Image from "next/Image";

const Author = ({ author }) => {
  return (
    <div className="bg-black shadow-lg p-12 mt-20 mb-20 text-center relative rounded-lg bg-opacity-20">
      <div className="absolute left-0 right-0 -top-14">
        <Image
          unoptimized
          src={author.photo.url}
          alt={author.name}
          height="100px"
          width="100px"
          className="align-middle rounded-full"
        />
      </div>
      <h3 className="text-white my-4 text-xl font-bold">{author.name}</h3>
      <p className="text-white text-lg">{author.bio}</p>
    </div>
  );
};

export default Author;
