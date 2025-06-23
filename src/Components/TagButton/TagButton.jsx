import React from 'react';

function TagButton({tag_title = 'Default Tag', isActive = false}) {
  return (
    <div className="relative shine-effect w-fit rounded-full px-2 py-1 bg-gradient-to-r from-orange-600/20 to-amber-500/20 border border-orange-500/30 text-orange-400">
      {tag_title}
    </div>
  );
}

export default TagButton;
