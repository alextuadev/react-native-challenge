import React from "react";
import PropTypes from "prop-types";
import { View, StyleSheet, Text } from "react-native";
import { FlatList } from "react-native-gesture-handler";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as actions from "../actions/blocks";
import Status from "./Status";
import { Subtitle } from "material-bread";

const renderItem = ({ item }) => (
  <View style={styles.blockContainer}>
    <Text style={styles.topNumber}>{item.id.padStart(3, "0")}</Text>
    <Text style={styles.textContentBlock}>{item.attributes.data}</Text>
  </View>
);

export class Blocks extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    const { node } = this.props;
    this.props.actions.getBlocksNode(node);
  }

  componentDidUpdate() {
    console.log("Update", this.props)
  }


  render() {
    const { blocks } = this.props;

    return (
      <>
        {
          blocks.failure &&
          <View style={styles.loadingContainer}>
            <Status loading={false} online={false} />
            <Subtitle
              type={4}
              text={"Something wrongs"}
            />
          </View>
        }
        {
          blocks.loading ?
            <View style={styles.loadingContainer}>
              <Status loading={blocks.loading} online={blocks.loading} />
            </View> :

            <FlatList
              data={blocks.list}
              renderItem={renderItem}
              keyExtractor={item => item.id} />
        }
      </>
    );
  }
}
Blocks.propTypes = {
  actions: PropTypes.object.isRequired,
};

const styles = StyleSheet.create({
  loadingContainer: {
    paddingVertical: 10
  },
  blockContainer: {
    backgroundColor: "rgba(0, 0, 0, 0.12)",
    borderRadius: 2,
    marginTop: 10,
    padding: 8
  },
  textContentBlock: {
    fontSize: 14,
    color: "#263238"
  },
  topNumber: {
    color: "#304FFE",
    fontSize: 10
  },

  container: {
    padding: 10,
    marginVertical: 10,
    marginHorizontal: 30
  },

});


function mapStateToProps(state) {
  return {
    blocks: state.blocks,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(actions, dispatch)
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Blocks);
