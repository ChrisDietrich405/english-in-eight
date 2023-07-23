import PartsOfSpeechDefinition from "@/src/components/PartsOfSpeechDefinition";
import PartsOfSpeechSidebar from "@/src/components/Sidebar";
import React from "react";

const PartsOfSpeech = () => {
  return (
    <div style={{ marginTop: "200px" }}>
      <PartsOfSpeechSidebar />
      <PartsOfSpeechDefinition />
    </div>
  );
};

export default PartsOfSpeech;
