import {NgForm} from '@angular/forms';
import {AfterViewInit, Component, ElementRef, HostListener, OnInit, ViewChild} from '@angular/core';
import {} from '../../assets/build';
import * as THREE from 'three';
import {LoginModel} from '../../../../entities/loginModel.entity';
import {AuthenticationService} from '../../../../services/authentication.service';
import {User} from '../../../../entities/user.entity';

declare let require: any;

const STLLoader = require('three-stl-loader')(THREE);

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit, AfterViewInit {

  @ViewChild('rendererContainer') rendererContainer: ElementRef;
  renderer = new THREE.WebGLRenderer({
    alpha: true,
    antialias: true,
  });
  scene = null;
  camera = null;
  cameraTarget = null;
  loader = null;
  errorMessage = null;

  constructor(private authService: AuthenticationService) {

    this.camera = new THREE.PerspectiveCamera(8, window.innerWidth / window.innerHeight, 1, 1000);
    this.cameraTarget = new THREE.Vector3(0, 0, 0);
    this.scene = new THREE.Scene();

    this.loader = new STLLoader();
    this.loader.load('/assets/logo3d.stl', (geometry) => {
      const material = new THREE.MeshPhongMaterial({color: 0xF35F15, specular: null, shininess: 50});
      material.transparent = true;
      material.opacity = 0.8;
      const mesh = new THREE.Mesh(geometry, material);
      mesh.scale.set(0.035, 0.02, 0.02);
      this.scene.add(mesh);
    });

    // Lights
    this.scene.add(new THREE.HemisphereLight(0x212121, 0x111122));
    this.addShadowedLight(1, 1, -1, 0xEDECEC, 1);
    this.addShadowedLight(1, 1, 1, 0xF69E6E, 1);
    this.addShadowedLight(-1, 1, 1, 0xF69E6E, 1);
  }

  ngAfterViewInit() {
    this.renderer.setSize(window.innerWidth / 8, window.innerHeight / 6);
    this.rendererContainer.nativeElement.appendChild(this.renderer.domElement);
    this.animate();
  }

  animate() {
    window.requestAnimationFrame(() => this.animate());
    const timer = Date.now() * 0.001;
    this.camera.position.x = Math.cos(timer) * 3;
    this.camera.position.z = Math.sin(timer) * 3;
    this.camera.lookAt(this.cameraTarget);
    this.renderer.render(this.scene, this.camera);
  }

  ngOnInit() {
  }


  @HostListener('window:resize', ['$event'])
  onWindowResize(event) {
    this.camera.aspect = window.innerWidth / window.innerHeight;
    this.camera.updateProjectionMatrix();
    this.renderer.setSize(window.innerWidth / 8, window.innerHeight / 6);
  }

  addShadowedLight(x, y, z, color, intensity) {
    const directionalLight = new THREE.DirectionalLight(color, intensity);
    directionalLight.position.set(x, y, z);
    this.scene.add(directionalLight);
    directionalLight.castShadow = true;
    const d = 1;
    directionalLight.shadow.camera.left = -d;
    directionalLight.shadow.camera.right = d;
    directionalLight.shadow.camera.top = d;
    directionalLight.shadow.camera.bottom = -d;
    directionalLight.shadow.camera.near = 1;
    directionalLight.shadow.camera.far = 4;
    directionalLight.shadow.mapSize.width = 1024;
    directionalLight.shadow.mapSize.height = 1024;
    directionalLight.shadow.bias = -0.002;
  }

  submitForm(form: NgForm) {
    const values = form.value;

    const login = new LoginModel();

    login.login = values.username;
    login.password = values.password;

    this.authService.login(login).subscribe(
      (res: User) => {
        this.authService.setLoggedUser(res);
      },
      (err)  => {
        this.errorMessage = err.message;
        form.reset();
      });
  }

}
