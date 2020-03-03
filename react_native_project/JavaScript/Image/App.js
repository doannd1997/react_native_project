/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from "react";
import {Image, View, Button, ScrollView} from "react-native"
import CameraRoll from "@react-native-community/cameraroll";
const resource = require("../../JavaScript/Res").default;

class MainView extends React.Component {
  state = {photos: []};
  _handleButtonPress = () => {
    CameraRoll.getPhotos({
      first: 20,
      assetType: 'Photos',
    })
    .then(r => {
      this.setState({ photos: r.edges });
    })
    .catch((err) => {
       //Error Loading Images
       console.log("err loading image " + err.toString())
    });
  };
  render() {
    return (
      <View>
        <Button title="Load Images" onPress={this._handleButtonPress} />
        <ScrollView>
          {this.state.photos.map((p, i) => {
          return (
            <Image
              key={i}
              style={{
                width: 300,
                height: 300,
              } }
              source={{ uri: p.node.image.uri }}
            />
          );
        })}
        </ScrollView>
      </View>
    );
  }
}

export default MainView;