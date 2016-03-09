import React from "react";
import Formsy from "formsy-react";

export default React.createClass({

  // Add the Formsy Mixin
  mixins: [Formsy.Mixin],

  changeValue: function (event) {
    this.setValue(event.currentTarget.value);
  },

  render: function () {

    const className = 'form-group' + (this.props.className || ' ') + (this.showRequired() ? 'required' : this.showError() ? 'error' : '');

    const errorMessage = this.getErrorMessage();

    const options = this.props.options.map((option, i) => (
      <option key={option.title+option.value} value={option.value}>
        {option.title}
      </option>
    ));

    return (
      <div className={className}>
        <label htmlFor={this.props.name} class="col-lg-2 control-label">{this.props.title}</label>
        <div class="col-lg-10">
          <select name={this.props.name} onChange={this.changeValue} value={this.getValue()||""} disabled={this.props.disabled} class="form-control">
            <option value=""></option>
            {options}
          </select>
        </div>
        <span className='validation-error'>{errorMessage}</span>
      </div>
    );
  }
});
