import React from "react";
import Formsy from "formsy-react";

import * as StudentActions from "../actions/StudentActions";
import StudentStore from "../stores/StudentStore";

import StudentSelect from "./StudentSelect";
import StudentInput from "./StudentInput";

export default React.createClass({

    getInitialState: function () {
      return {
        canSubmit: false,
        student: StudentStore.byId(this.props.params.id)
      }
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

    /*componentWillMount: function () {
      StudentStore.on("change", this.backHome);
    },

    componentWillUnmount: function () {
      StudentStore.removeListener("change", this.backHome);
    },

    backHome: function () {
      this.props.history.push("/");
    },*/

    submit: function (model) {
      model.id = parseInt(this.props.params.id, 10);
      StudentActions.updateStudent(model);
    },

    render: function () {
      return (
        <div class="well">
          <Formsy.Form class="form-horizontal"  ref="form" onValidSubmit={this.submit} onValid={this.enableButton} onInvalid={this.disableButton}>
              <fieldset>
                <legend>Ajouter un Edtudiant:</legend>
                <StudentInput name="firstname" value={this.state.student.firstname} title="Prénom" validations="isAlpha" validationError="Le prénom doit contenir des lettres uniquement" required/>
                <StudentInput name="lastname" value={this.state.student.lastname} title="Nom" validations="isAlpha" validationError="Le nom doit contenir des lettres uniquement" required/>
                <StudentInput name="birthday" value={this.state.student.birthday} title="Date de naissance" type="date" required/>
                <StudentSelect name="gender" value={this.state.student.gender} title="Sexe" options={[{title:"Homme"}, {title:"Femme"}]} required/>
                <StudentInput name="email" value={this.state.student.email} title="Email" validations="isEmail" validationError="Ce n'est pas un email valide" required/>
                <StudentSelect name="classroom" value={this.state.student.classroom} title="Classe" options={[{title:"A", value:"a"}, {title:"B", value:"b"}]} disabled={true}/>

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
