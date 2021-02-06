import React from "react";
import AddOption from "./addOption";
import Header from "./header";
import Action from "./action";
import Options from "./options";
import OptionModal from "./optionModal";
export default class IndesicionApp extends React.Component {
  state = {
    options: ["Example 1", "Example 2"],
    selectedOption: false,
    theOption: ""
  };
  removeAll = () => {
    this.setState(() => ({ options: [] }));
  };
  removeOne = (optionToRemove) => {
    this.setState((prevState) => ({
      options: prevState.options.filter((option) => {
        return !(option === optionToRemove);
      })
    }));
  };
  pickOne = () => {
    let randomNum = Math.floor(Math.random() * this.state.options.length);
    let selected = this.state.options[randomNum];
    this.setState((prevState) => {
      return {
        selectedOption: !prevState.selectedOption
      };
    });
    this.setState(() => {
      return {
        theOption: selected
      };
    });
  };
  back = () => {
    this.setState((prevState) => {
      return {
        selectedOption: !prevState.selectedOption
      };
    });
  };
  addOption = (option) => {
    if (!option) {
      return "Enter a valid value";
    } else if (this.state.options.indexOf(option) > -1) {
      return "This value already exist";
    }

    this.setState((prevState) => ({
      options: prevState.options.concat([option])
    }));
  };
  render() {
    const title = "Indesicion";
    const subtitle = "Put your life in the hands of a computer";
    return (
      <div>
        <Header title={title} subtitle={subtitle} />
        <div className="container">
          <Action
            hasOption={this.state.options.length > 0}
            pickOne={this.pickOne}
          />
          <div className="widget">
            <Options
              options={this.state.options}
              removeAll={this.removeAll}
              removeOne={this.removeOne}
            />
            <AddOption addOption={this.addOption} />
          </div>
        </div>
        <OptionModal
          selectedOption={this.state.selectedOption}
          theOption={this.state.theOption}
          back={this.back}
        />
      </div>
    );
  }
}
IndesicionApp.defaultProps = {
  options: []
};
