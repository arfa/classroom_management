import React from "react";
import Formsy from "formsy-react";

import * as StudentActions from "../actions/StudentActions";
import StudentStore from "../stores/StudentStore";

import StudentSelect from "./StudentSelect";
import StudentInput from "./StudentInput";

export default React.createClass({

    getInitialState: function () {
      return {
        student: StudentStore.byId(this.props.params.id)
      }
    },

    backHome: function () {
      this.props.history.push("/");
    },

    render: function () {
      return (
        <div class="well">
          <Formsy.Form class="form-horizontal"  ref="form">
              <fieldset>
                <legend>Ajouter un Edtudiant:</legend>
                <StudentInput name="firstname" value={this.state.student.firstname} title="Prénom" disabled/>
                <StudentInput name="lastname" value={this.state.student.lastname} title="Nom" disabled/>
                <StudentInput name="birthday" value={this.state.student.birthday} title="Date de naissance" type="date" disabled/>
                <StudentSelect name="gender" value={this.state.student.gender} title="Sexe" options={[{title:"Homme"}, {title:"Femme"}]} disabled/>
                <StudentInput name="email" value={this.state.student.email} title="Email" disabled/>
                <StudentSelect name="classroom" value={this.state.student.classroom} title="Classe" options={[{title:"A", value:"a"}, {title:"B", value:"b"}]} disabled={true}/>

                <div class="form-group">
                  <div class="col-lg-4 col-lg-offset-2">
                    <button type="submit" class="btn btn-primary btn-block"  onClick={this.backHome}>Annuler</button>
                  </div>
                </div>
              </fieldset>
          </Formsy.Form>
        </div>
      );
    }
})
