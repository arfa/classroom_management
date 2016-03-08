import React from "react";
import Formsy from "formsy-react";

import StudentSelect from "./StudentSelect";
import StudentInput from "./StudentInput";

//export default class StudentAddForm extends React.Component {
export default React.createClass({

    getInitialState: function () {
      return {
        canSubmit: false
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

    submit: function (model) {
      //someDep.saveEmail(model.email);
      console.log(model)
    },

    render: function () {
      return (
        <div class="well">
          <Formsy.Form class="form-horizontal" onValidSubmit={this.submit} onValid={this.enableButton} onInvalid={this.disableButton}>
              <fieldset>
                <legend>Ajouter un Edtudiant:</legend>
                <StudentInput name="FirstName" title="Prénom" validations="isAlpha" validationError="Le prénom doit contenir des lettres uniquement" required/>
                <StudentInput name="LastName" title="Nom" validations="isAlpha" validationError="Le nom doit contenir des lettres uniquement" required/>
                <StudentInput name="BirthDay" title="Date de naissance" type="date" required/>
                <StudentSelect name="Gender" title="Sexe" options={[{title:"Homme"}, {title:"Femme"}]} required/>
                <StudentInput name="Email" title="Email" validations="isEmail" validationError="Ce n'est pas un email valide" required/>
                <StudentInput name="Id" title="Identifiant" validations="isNumeric" validationError="L'Identifiant' doit contenir des chiffres uniquement" required/>

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