//import React, { useState, useEffect } from "react";
import { JaaSMeeting } from "@jitsi/react-sdk";

const JitsiMeetingComponent = ({ roomName , token , onMeetingEnd}) => {

  return (
    <div>
     
      {/* Jitsi meeting component */}
      <JaaSMeeting
        appId={"vpaas-magic-cookie-3b77f06727bf40449f82968dd34470c9"}
        roomName={roomName}
        getIFrameRef={(node) => (node.style.height = "800px")}
        jwt={token}
        configOverwrite={{
          disableThirdPartyRequests: true,
          disableLocalVideoFlip: true,
          backgroundAlpha: 0.5,
        }}
        interfaceConfigOverwrite={{
          VIDEO_LAYOUT_FIT: "nocrop",
          MOBILE_APP_PROMO: false,
          TILE_VIEW_MAX_COLUMNS: 4,
        }}
        onApiReady={(externalApi) => {
          // You can attach custom event listeners to the Jitsi external API here
          console.log("Jitsi API is ready", externalApi);
        }}
        onReadyToClose={onMeetingEnd}

      />
    </div>
  );
};

export default JitsiMeetingComponent;
