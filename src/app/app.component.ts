import {Component, OnInit, ElementRef, ViewChild, ViewEncapsulation} from '@angular/core';
import {AuthService} from './auth/auth.service';
import {EstadosWebService} from './estados-web/estados-web.service'
import {viewAttached} from "@angular/core/src/render3/instructions";
import {ActivatedRoute, Router} from "@angular/router";


declare let $: any;

/**
 * The app component. This component is the base of CMSites-Front
 */
@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css'],
    encapsulation: ViewEncapsulation.None
})
export class AppComponent implements OnInit {

    /**
     * The title that appears on the NavBar and the web browser
     */
    title: String;
    name: String;
    navLinks: any[];

    selectedIndex;

    @ViewChild('LoginModal') loginModal : ElementRef;
    @ViewChild('RegisterAdminModal') registerAdminModal : ElementRef;
    @ViewChild('createEstadoWebModal') createEstadoWebModal : ElementRef;
    @ViewChild('loginComponent') logincomponent :ElementRef;
    @ViewChild('authSignUpComponent') registercomponent :ElementRef;

    @ViewChild('activo') barActivo :ElementRef;
    @ViewChild('inactivo') barInactivo :ElementRef;
    @ViewChild('falla') barDalla :ElementRef;
    @ViewChild('otros') barOtros :ElementRef;

    /**
     * Assigns a title to the web page
     */
    ngOnInit(): void {
        this.selectedIndex=1;
        this.title = "CMSites";
        this.authService.start();
        document.getElementById("DetailModal");
        this.setUserName();
        this.establecerBarra();
        if(this.router.url.includes('users'))
        {
            this.selectedIndex=0;
        }
    }

       /**
     * @ignore
     */
    constructor(private authService: AuthService,private statesService:EstadosWebService, public router: Router, private route: ActivatedRoute) {
           this.navLinks = [
               {
                   label: 'Usuarios',
                   link: './users',
                   index: 0
               }, {
                   label: 'Paginas',
                   link: './SiteList',
                   index: 1
               }, {
                   label: 'Detalle',
                   link: './third',
                   index: 2
               },
           ];
       }

    logout(): void {
        this.authService.logout()
    }

    selectTab(index: number): void {
        this.selectedIndex = index;
    }

    showUserTab()
    {
        this.selectedIndex=0;
        this.router.navigate(["../", {outlets: {siteDetail: null}}]);
        this.router.navigate(['/users',{ outlets: { users: ['list'] } }]);
    }
    showMainTab()
    {
        this.selectedIndex=1;
        this.router.navigate(["/home", {outlets: {siteDetail: null}}]);
        this.router.navigate(['/home']);

    }
    showDetailTab(site:number)
    {
        this.selectedIndex=2;
        this.router.navigate(['/websites',{ outlets: { siteDetail: [site] } }]);
    }

    showRegisterAdminPane():void
    {
        $(this.registerAdminModal.nativeElement).modal('show');
         this.router.navigate([{outlets: {register: 'register'}}]);
    }
    showRegisterUserPane():void
    {
        $(this.registerAdminModal.nativeElement).modal('show');
        this.router.navigate([{outlets: {register: 'registerUser'}}]);
    }
    showLoginPane():void
    {
        $(this.loginModal.nativeElement).modal('show');
    }
    showCreateEstadoModal():void
    {
        $(this.createEstadoWebModal.nativeElement).modal('show');
    }
    setUserName():void
    {
        this.name = localStorage.getItem('name');

    }

    establecerBarra():void
    {
        this.statesService.getStatesValues().subscribe(value => {
            let strActivo:string;
            let strInactivo:string;
            let strFalla:string;
            let strOtro:string;

            strActivo=value.active+"%";
            strInactivo=value.inactive+"%";
            strFalla=value.onfailure+"%";
            strOtro=value.other+"%";


            document.getElementById("activo").style.cssText="width: "+strActivo
            document.getElementById("incativo").style.cssText="width: "+strInactivo
            document.getElementById("falla").style.cssText="width: "+strFalla
            document.getElementById("otros").style.cssText="width: "+strOtro

        });
    }

}