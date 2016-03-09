import React from "react";
import Formsy from "formsy-react";

import * as StudentActions from "../actions/StudentActions";
import StudentStore from "../stores/StudentStore";

import StudentSelect from "./StudentSelect";
import StudentInput from "./StudentInput";

//export default class StudentAddForm extends React.Component {
export default React.createClass({

    getInitialState: function () {
      return {
        canSubmit: false
      }
    },

    componentWillMount: function () {
      StudentStore.on("change", this.resetForm);
    },

    componentWillUnmount: function () {
      StudentStore.removeListener("change", this.resetForm);
    },

    resetForm: function () {
      this.refs.form.reset();
    },

    enableButton: function () {
      this.setState({
        canSubmit: true
      });
    },

    disableButton: function () {
      this.setState({
        canSubmit: false
      });
    },

    submit: function (model) {
      model.classroom = StudentStore.getFilter();
      StudentActions.createStudent(model);
    },

    render: function () {
      return (
        <div class="well">
          <Formsy.Form class="form-horizontal" ref="form" onValidSubmit={this.submit} onValid={this.enableButton} onInvalid={this.disableButton}>
              <fieldset>
                <legend>Ajouter un Edtudiant:</legend>
                <StudentInput name="firstname" title="Prénom" validations="isAlpha" validationError="Le prénom doit contenir des lettres uniquement" required/>
                <StudentInput name="lastname" title="Nom" validations="isAlpha" validationError="Le nom doit contenir des lettres uniquement" required/>
                <StudentInput name="birthday" title="Date de naissance" type="date" required/>
                <StudentSelect name="gender" title="Sexe" options={[{title:"Homme"}, {title:"Femme"}]} required/>
                <StudentInput name="email" title="Email" validations="isEmail" validationError="Ce n'est pas un email valide" required/>

                <div class="form-group">
                  <div class="col-lg-4 col-lg-offset-2">
                    <button type="submit" class="btn btn-primary btn-block"  disabled={!this.state.canSubmit}>Envoyer</button>
                  </div>
                </div>
              </fieldset>
          </Formsy.Form>
        </div>
      );
    }
})
