import React, { useState, useCallback, useRef } from "react";
import { Button, View, Alert, Dimensions } from "react-native";
import YoutubePlayer from "react-native-youtube-iframe";

export default function YoutubeEmbed(props) {
  const [playing, setPlaying] = useState(false);

  const onStateChange = useCallback((state) => {
    if (state === "ended") {
      setPlaying(false);
      Alert.alert("video has finished playing!");
    }
  }, []);

  const togglePlaying = useCallback(() => {
    setPlaying((prev) => !prev);
  }, []);

  const videoHeight = Dimensions.get("screen").width * .9 * (9/16)
  console.log((videoHeight))

  return (
    <View>
      <YoutubePlayer
        height={videoHeight}
        
        videoId={props.URLExtension}
        // onChangeState={onStateChange}
      />
      {/* <Button title={playing ? "pause" : "play"} onPress={togglePlaying} /> */}
    </View>
  );
}