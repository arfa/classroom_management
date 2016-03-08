import React from "react";

import * as StudentActions from "../actions/StudentActions";
import StudentStore from "../stores/StudentStore";

export default class Edit extends React.Component {
  render() {
    return (
      <div class="well">
        <form class="form-horizontal">
            <fieldset>
              <legend>Ajouter un Edtudiant:</legend>
              <div class="form-group">
                <label htmlFor="FirstName" class="col-lg-2 control-label">Prénom</label>
                <div class="col-lg-10">
                  <input type="text" class="form-control" id="FirstName" placeholder="Prénom"></input>
                </div>
              </div>
              <div class="form-group">
                <label htmlFor="LastName" class="col-lg-2 control-label">Nom</label>
                <div class="col-lg-10">
                  <input type="text" class="form-control" id="LastName" placeholder="Nom"></input>
                </div>
              </div>
              <div class="form-group">
                <label htmlFor="BirthDay" class="col-lg-2 control-label">{"Date de naissance"}</label>
                <div class="col-lg-10">
                  <input type="date" class="form-control" id="BirthDay" placeholder="Date de naissance"></input>
                </div>
              </div>
              <div class="form-group">
                <label htmlFor="select" class="col-lg-2 control-label">Sexe</label>
                <div class="col-lg-10">
                  <select class="form-control" id="select">
                    <option>Homme</option>
                    <option>Femme</option>
                  </select>
                </div>
              </div>
              <div class="form-group">
                <label htmlFor="Email" class="col-lg-2 control-label">Email</label>
                <div class="col-lg-10">
                  <input type="email" class="form-control" id="Email" placeholder="Email"></input>
                </div>
              </div>
              <div class="form-group">
                <label htmlFor="Id" class="col-lg-2 control-label">Identifiant</label>
                <div class="col-lg-10">
                  <input type="number" class="form-control" id="Id" placeholder="Identifiant"></input>
                </div>
              </div>
              <div class="form-group">
                <div class="col-lg-10 col-lg-offset-2">
                  <button type="submit" class="btn btn-primary">Submit</button>
                </div>
              </div>
            </fieldset>
          </form>
      </div>
    );
  }
}
