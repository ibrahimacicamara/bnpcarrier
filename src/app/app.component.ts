import { AfterViewInit, Component, ElementRef, Renderer2, ViewChild } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {MatIconModule} from '@angular/material/icon';
import { SecondSectionComponent } from "./second-section/second-section.component";
import { ThirdSectionComponent } from "./third-section/third-section.component";
import { FourthSectionComponent } from "./fourth-section/fourth-section.component";
import { FifthSectionComponent } from "./fifth-section/fifth-section.component";
import { FirstSectionComponent } from './first-section/first-section.component';
import { BarComponent } from "./bar/bar.component";
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,NgIf,MatIconModule, FirstSectionComponent, SecondSectionComponent, ThirdSectionComponent, FourthSectionComponent, FifthSectionComponent, FirstSectionComponent, BarComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements AfterViewInit{

  works:{name:string,link:string,comment:string,image:string}[]=[
    { name:"Commercial et Relation Client",
    link:"https://group.bnpparibas/emploi-carriere/metiers/commercial-et-relation-client",
    comment:"Travailler au sein de la filière Commerciale et Relation Client de BNP Paribas, c’est...",
    image:"https://cdn-group.bnpparibas.com/media/images/cache/teaser_rh_domain/uploads/image/header_commercial_et_relation_client_gettyimages_1292475584.jpg"},
    { name:"IT, Tech et Data",
    link:"https://group.bnpparibas/emploi-carriere/metiers/it-tech-et-data",
    comment:"Au-delà d’être un groupe financier, BNP Paribas est aussi une entreprise technologique. Les...",
    image:"https://cdn-group.bnpparibas.com/media/images/cache/teaser_rh_domain/uploads/image/header_it_tech_et_data_gettyimages_475967893.jpg"},
    { name:"Financement et Investissement",
    link:"https://group.bnpparibas/emploi-carriere/metiers/financement-et-investissement",
    comment:"Travailler dans les métiers du financement et de l’investissement chez BNP Paribas c’est...",
    image:"https://cdn-group.bnpparibas.com/media/images/cache/teaser_rh_domain/uploads/image/header_financement_et_investissement_gettyimages_1363976739.jpg"},
    { name:"Audit, Conformité, Risques et Juridique",
    link:"https://group.bnpparibas/emploi-carriere/metiers/audit-conformite-risques-et-juridique",
    comment:"Pour exercer un métier à fortes responsabilités et prendre part à des décisions...",
    image:"https://cdn-group.bnpparibas.com/media/images/cache/teaser_rh_domain/uploads/image/header_audit_conformite_risques_et_juridique.jpg"},
    { name:"Consulting et Transformation",
    link:"https://group.bnpparibas/emploi-carriere/metiers/consulting-et-transformation",
    comment:"Des missions stratégiques, des projets structurants pour le Groupe, découvrez les métiers du...",
    image:"https://cdn-group.bnpparibas.com/media/images/cache/teaser_rh_domain/uploads/image/header_consulting_et_transformation.jpg"},
    { name:"Finance d'entreprise",
    link:"https://group.bnpparibas/emploi-carriere/metiers/finance-dentreprise",
    comment:"La Finance d’entreprise regroupe les métiers de gestion des finances internes de BNP Paribas...",
    image:"https://cdn-group.bnpparibas.com/media/images/cache/teaser_rh_domain/uploads/image/header_jeune_pro_gettyimages_1165314750.jpg"},
    { name:"Fonctions transverses",
    link:"https://group.bnpparibas/emploi-carriere/metiers/fonctions-transverses",
    comment:"Intégrer des métiers comme les Achats, le Marketing ou bien la Ressources Humaines, c’est",
    image:"https://cdn-group.bnpparibas.com/media/images/cache/teaser_rh_domain/uploads/image/header_experimente_gettyimages_1156954211.jpg"},
    { name:"Gestion des opérations",
    link:"https://group.bnpparibas/emploi-carriere/metiers/gestion-des-operations",
    comment:"Maillons indispensables au bon fonctionnement de notre Groupe, les métiers de Gestion des...",
    image:"https://cdn-group.bnpparibas.com/media/images/cache/teaser_rh_domain/uploads/image/header_gestion_des_operations.jpg"},
    { name:"Actuariat",
    link:"https://group.bnpparibas/emploi-carriere/metiers/actuariat",
    comment:"Être actuaire, c’est mettre son expertise en mathématiques appliquées ou statistiques au...",
    image:"https://cdn-group.bnpparibas.com/media/images/cache/teaser_rh_domain/uploads/image/header_actuariat.jpg"
  },
  ]


  @ViewChild('appbar') private appBar:ElementRef={} as ElementRef;
  title = 'bnp-carrier';

  isVisible = false;
  constructor(private rendered: Renderer2){}
  ngAfterViewInit(): void {
    

  }
 
  changeHide(val: boolean) {
    this.isVisible = val;
    if(this.isVisible){
      this.rendered.setStyle(this.appBar.nativeElement,"display","none");
      console.log(this.isVisible);
    }else{
      this.rendered.setStyle(this.appBar.nativeElement,"display","flex");
      this.rendered.setStyle(this.appBar.nativeElement,"position","sticky");
      this.rendered.setStyle(this.appBar.nativeElement,"top","0px");
    }
    
  }
}
