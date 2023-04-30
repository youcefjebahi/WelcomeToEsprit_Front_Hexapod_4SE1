import { Injectable } from '@angular/core';
import {AdmissionCandidacy } from '../models/admission-candidacy';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class AdmissioncandidacyService {
  
  url="http://localhost:1111/welcometoesprit/api/admission";

  constructor(private http: HttpClient) { }
  addNewAdmissionCandidacy(admissionCandidacy: any): Observable<any> {
    const formData: FormData = new FormData();
    formData.append('bac', admissionCandidacy.bac);
    formData.append('bacYear', admissionCandidacy.bacYear);
    formData.append('bacEstablishment', admissionCandidacy.bacEstablishment);
    formData.append('bacGovernorate', admissionCandidacy.bacGovernorate);
    if (admissionCandidacy.docBacDiploma) {
      formData.append('docBacDiploma', admissionCandidacy.docBacDiploma);
    }
    if (admissionCandidacy.bacMoy) {
      formData.append('bacMoy', admissionCandidacy.bacMoy.toString());
    }
    if (admissionCandidacy.docBacReleve) {
      formData.append('docBacReleve', admissionCandidacy.docBacReleve);
    }
    if (admissionCandidacy.moy1) {
      formData.append('moy1', admissionCandidacy.moy1.toString());
    }
    if (admissionCandidacy.docReleve1) {
      formData.append('docReleve1', admissionCandidacy.docReleve1);
    }
    if (admissionCandidacy.moy2) {
      formData.append('moy2', admissionCandidacy.moy2.toString());
    }
    if (admissionCandidacy.docReleve2) {
      formData.append('docReleve2', admissionCandidacy.docReleve2);
    }
    if (admissionCandidacy.docCertificate) {
      formData.append('docCertificate', admissionCandidacy.docCertificate);
    }
    if (admissionCandidacy.moy3) {
      formData.append('moy3', admissionCandidacy.moy3.toString());
    }
    if (admissionCandidacy.docReleve3) {
      formData.append('docReleve3', admissionCandidacy.docReleve3);
    }
    if (admissionCandidacy.moy4) {
      formData.append('moy4', admissionCandidacy.moy4.toString());
    }
    if (admissionCandidacy.docReleve4) {
      formData.append('docReleve4', admissionCandidacy.docReleve4);
    }
    if (admissionCandidacy.diploma) {
      formData.append('diploma', admissionCandidacy.diploma);
    }
    if (admissionCandidacy.docDiploma) {
      formData.append('docDiploma', admissionCandidacy.docDiploma);
    }
    formData.append('level', admissionCandidacy.level);
    formData.append('speciality', admissionCandidacy.speciality);
    formData.append('day', admissionCandidacy.day);
    formData.append('hour', admissionCandidacy.hour);

    const headers = new HttpHeaders();
    headers.append('Content-Type', 'multipart/form-data');
    headers.append('Accept', 'application/json');

    return this.http.post(this.url + '/createNewAdmissionCandidacy', formData, { headers: headers });
  }
}
