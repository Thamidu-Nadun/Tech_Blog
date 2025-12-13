import { Lightbulb } from "lucide-react";
import React from "react";

function Callout({ Icon = Lightbulb }) {
  return (
    <div className="article_callout border-l-4 border-green-500 p-4 shadow shadow-green-800 my-4">
      <div className="callout_header flex gap-4 items-center text-green-500">
        <Icon size={20} className="callout_icon" />
        <h3 className="callout_title text-bold">Callout Title</h3>
      </div>
      <div className="callout_body p-2">
        <p className="text-gray-200">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit.
          Reprehenderit culpa totam atque quo iusto, blanditiis commodi cumque
          ratione optio.
        </p>
      </div>
    </div>
  );
}

export default Callout;
