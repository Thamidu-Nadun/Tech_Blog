import React from "react";

function ImageBlock({
  image_url = "https://images.unsplash.com/photo-1587620962725-abab7fe55159?w=400&h=250&fit=crop",
  position = "center",
}) {
  return (
    <div className={`w-full flex justify-${position}`}>
      <img src={image_url} className="aspect-square rounded-2xl" />
    </div>
  );
}

export default ImageBlock;
