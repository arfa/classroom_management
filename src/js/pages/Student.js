import React from "react";

export default class Student extends React.Component {
  render() {
    return (
      <div>
        <h1>{"L'etudiant Marwen Arfa,"} </h1>
        <Formsy.Form class="form-horizontal" onValidSubmit={this.submit} onValid={this.enableButton} onInvalid={this.disableButton}>
            <fieldset>
              <legend>Modifier les informations:</legend>
              <StudentInput name="FirstName" title="Prénom" validations="isAlpha" validationError="Le prénom doit contenir des lettres uniquement" required/>
              <StudentInput name="LastName" title="Nom" validations="isAlpha" validationError="Le nom doit contenir des lettres uniquement" required/>
              <StudentInput name="BirthDay" title="Date de naissance" type="date" required/>
              <StudentSelect name="Gender" title="Sexe" options={[{title:"Homme"}, {title:"Femme"}]} required/>
              <StudentInput name="Email" title="Email" validations="isEmail" validationError="Ce n'est pas un email valide" required/>
              <StudentInput name="Id" title="Identifiant" validations="isNumeric" validationError="L'Identifiant' doit contenir des chiffres uniquement" required/>
              <StudentSelect name="Classroom" title="Classe" options={[{title:"A"}, {title:"B"}]} required/>

              <div class="form-group">
                <div class="col-lg-10 col-lg-offset-2">
                  <button type="reset" class="btn btn-default">Cancel</button>
                  <button type="submit" class="btn btn-primary"  disabled={!this.state.canSubmit}>Submit</button>
                </div>
              </div>
            </fieldset>
        </Formsy.Form>
      </div>
    );
  }
}
