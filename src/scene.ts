/* Original inline <script>, ported verbatim into a module.
   Only difference from the source: the sphere material colour/emissive
   now use the new palette (signal lime), and a guard so a missing CDN
   library (or a StrictMode double-mount) never double-initialises. */

declare const THREE: any;
declare const gsap: any;

let started = false;

export function initScene() {
  if (started) return;
  started = true;

  // Mail links ("Say hello" button, the address line, footer Email).
  // Top-level page: the browser's native mailto: handling is used as-is.
  // Embedded preview (iframe / webview): a plain mailto: navigation is often
  // swallowed by the host, so route it through the popup path, which hosts
  // hand to the system mail client; fall back to a direct navigation.
  document.querySelectorAll<HTMLAnchorElement>('a[href^="mailto:"]').forEach((a) => {
    a.addEventListener("click", (e) => {
      if (window.self === window.top) return;
      e.preventDefault();
      const popup = window.open(a.href, "_blank");
      if (!popup) window.location.href = a.href;
    });
  });

  if (typeof THREE === "undefined" || typeof gsap === "undefined") return;

  const hero = document.querySelector(".hero") as HTMLElement;

  // Scene setup
  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(25, hero.clientWidth / hero.clientHeight, 0.1, 1000);
  camera.position.z = 24;

  const renderer = new THREE.WebGLRenderer({
    canvas: document.querySelector("#webgl"),
    antialias: true,
    alpha: true
  });
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
  renderer.shadowMap.enabled = true;
  renderer.shadowMap.type = THREE.PCFSoftShadowMap;

  // Orbit Controls (rotate only, so the page can still scroll)
  const controls = new THREE.OrbitControls(camera, renderer.domElement);
  controls.enableDamping = true;
  controls.dampingFactor = 0.05;
  controls.enableZoom = false;
  controls.enablePan = false;
  if (window.matchMedia("(pointer: coarse)").matches) {
    controls.enabled = false;
    renderer.domElement.style.touchAction = "pan-y";
  }

  function sizeScene() {
    const w = hero.clientWidth;
    const h = hero.clientHeight;
    camera.aspect = w / h;
    camera.updateProjectionMatrix();
    // Pull the camera back on narrow screens so the cluster fits
    camera.position.setLength(Math.max(24, 28 / camera.aspect));
    renderer.setSize(w, h);
  }
  sizeScene();

  const radii = [
    1, 0.6, 0.8, 0.4, 0.9, 0.7, 0.9, 0.3, 0.2, 0.5, 0.6, 0.4, 0.5, 0.6, 0.7, 0.3, 0.4, 0.8, 0.7, 0.5, 0.4, 0.6, 0.35, 0.38, 0.9,

    0.3, 0.6, 0.4, 0.2, 0.35, 0.5, 0.15, 0.2, 0.25, 0.4, 0.8, 0.76, 0.8, 1, 0.8, 0.7, 0.8, 0.3, 0.5, 0.6, 0.55, 0.42, 0.75, 0.66,
    0.6, 0.7, 0.5, 0.6, 0.35, 0.35, 0.35, 0.8, 0.6, 0.7, 0.8, 0.4, 0.89, 0.3,

    0.3, 0.6, 0.4, 0.2, 0.52, 0.5, 0.15, 0.2, 0.25, 0.4, 0.8, 0.76, 0.8, 1, 0.8, 0.7, 0.8, 0.3, 0.5, 0.6, 0.8, 0.7, 0.75, 0.66,
    0.6, 0.7, 0.5, 0.6, 0.35, 0.35, 0.35, 0.8, 0.6, 0.7, 0.8, 0.4, 0.89, 0.3
  ];
  const positions = [
    { x: 0, y: 0, z: 0 }, { x: 1.2, y: 0.9, z: -0.5 }, { x: 1.8, y: -0.3, z: 0 }, { x: -1, y: -1, z: 0 },
    { x: -1, y: 1.62, z: 0 }, { x: -1.65, y: 0, z: -0.4 }, { x: -2.13, y: -1.54, z: -0.4 }, { x: 0.8, y: 0.94, z: 0.3 },
    { x: 0.5, y: -1, z: 1.2 }, { x: -0.16, y: -1.2, z: 0.9 }, { x: 1.5, y: 1.2, z: 0.8 }, { x: 0.5, y: -1.58, z: 1.4 },
    { x: -1.5, y: 1, z: 1.15 }, { x: -1.5, y: -1.5, z: 0.99 }, { x: -1.5, y: -1.5, z: -1.9 }, { x: 1.85, y: 0.8, z: 0.05 },
    { x: 1.5, y: -1.2, z: -0.75 }, { x: 0.9, y: -1.62, z: 0.22 }, { x: 0.45, y: 2, z: 0.65 }, { x: 2.5, y: 1.22, z: -0.2 },
    { x: 2.35, y: 0.7, z: 0.55 }, { x: -1.8, y: -0.35, z: 0.85 }, { x: -1.02, y: 0.2, z: 0.9 }, { x: 0.2, y: 1, z: 1 },
    { x: -2.88, y: 0.7, z: 1 },

    { x: -2, y: -0.95, z: 1.5 }, { x: -2.3, y: 2.4, z: -0.1 }, { x: -2.5, y: 1.9, z: 1.2 }, { x: -1.8, y: 0.37, z: 1.2 },
    { x: -2.4, y: 1.42, z: 0.05 }, { x: -2.72, y: -0.9, z: 1.1 }, { x: -1.8, y: -1.34, z: 1.67 }, { x: -1.6, y: 1.66, z: 0.91 },
    { x: -2.8, y: 1.58, z: 1.69 }, { x: -2.97, y: 2.3, z: 0.65 }, { x: 1.1, y: -0.2, z: -1.45 }, { x: -4, y: 1.78, z: 0.38 },
    { x: 0.12, y: 1.4, z: -1.29 }, { x: -1.64, y: 1.4, z: -1.79 }, { x: -3.5, y: -0.58, z: 0.1 }, { x: -0.1, y: -1, z: -2 },
    { x: -4.5, y: 0.55, z: -0.5 }, { x: -3.87, y: 0, z: 1 }, { x: -4.6, y: -0.1, z: 0.65 }, { x: -3, y: 1.5, z: -0.7 },
    { x: -0.5, y: 0.2, z: -1.5 }, { x: -1.3, y: -0.45, z: -1.5 }, { x: -3.35, y: 0.25, z: -1.5 }, { x: -4.76, y: -1.26, z: 0.4 },
    { x: -4.32, y: 0.85, z: 1.4 }, { x: -3.5, y: -1.82, z: 0.9 }, { x: -3.6, y: -0.6, z: 1.46 }, { x: -4.55, y: -1.5, z: 1.63 },
    { x: -3.8, y: -1.15, z: 2.1 }, { x: -2.9, y: -0.25, z: 1.86 }, { x: -2.2, y: -0.4, z: 1.86 }, { x: -5.1, y: -0.24, z: 1.86 },
    { x: -5.27, y: 1.24, z: 0.76 }, { x: -5.27, y: 2, z: -0.4 }, { x: -6.4, y: 0.4, z: 1 }, { x: -5.15, y: 0.95, z: 2 },
    { x: -6.2, y: 0.5, z: -0.8 }, { x: -4, y: 0.08, z: 1.8 },

    { x: 2, y: -0.95, z: 1.5 }, { x: 2.3, y: 2.4, z: -0.1 }, { x: 2.5, y: 1.9, z: 1.2 }, { x: 1.8, y: 0.37, z: 1.2 },
    { x: 3.24, y: 0.6, z: 1.05 }, { x: 2.72, y: -0.9, z: 1.1 }, { x: 1.8, y: -1.34, z: 1.67 }, { x: 1.6, y: 1.99, z: 0.91 },
    { x: 2.8, y: 1.58, z: 1.69 }, { x: 2.97, y: 2.3, z: 0.65 }, { x: -1.3, y: -0.2, z: -2.5 }, { x: 4, y: 1.78, z: 0.38 },
    { x: 1.72, y: 1.4, z: -1.29 }, { x: 2.5, y: -1.2, z: -2 }, { x: 3.5, y: -0.58, z: 0.1 }, { x: 0.1, y: 0.4, z: -2.42 },
    { x: 4.5, y: 0.55, z: -0.5 }, { x: 3.87, y: 0, z: 1 }, { x: 4.6, y: -0.1, z: 0.65 }, { x: 3, y: 1.5, z: -0.7 },
    { x: 2.3, y: 0.6, z: -2.6 }, { x: 4, y: 1.5, z: -1.6 }, { x: 3.35, y: 0.25, z: -1.5 }, { x: 4.76, y: -1.26, z: 0.4 },
    { x: 4.32, y: 0.85, z: 1.4 }, { x: 3.5, y: -1.82, z: 0.9 }, { x: 3.6, y: -0.6, z: 1.46 }, { x: 4.55, y: -1.5, z: 1.63 },
    { x: 3.8, y: -1.15, z: 2.1 }, { x: 2.9, y: -0.25, z: 1.86 }, { x: 2.2, y: -0.4, z: 1.86 }, { x: 5.1, y: -0.24, z: 1.86 },
    { x: 5.27, y: 1.24, z: 0.76 }, { x: 5.27, y: 2, z: -0.4 }, { x: 6.4, y: 0.4, z: 1 }, { x: 5.15, y: 0.95, z: 2 },
    { x: 6.2, y: 0.5, z: -0.8 }, { x: 4, y: 0.08, z: 1.8 }
  ];

  const material = new THREE.MeshLambertMaterial({ color: "#d6ff62", emissive: "#3f5212" });
  const group = new THREE.Group();
  const spheres: any[] = [];

  positions.forEach((pos: any, index: number) => {
    const radius = radii[index];
    const geometry = new THREE.SphereGeometry(radius, 64, 64);
    const sphere = new THREE.Mesh(geometry, material);
    sphere.position.set(pos.x, pos.y, pos.z);
    sphere.userData = { originalPosition: { ...pos }, radius };
    sphere.castShadow = true;
    sphere.receiveShadow = true;
    spheres.push(sphere);
    group.add(sphere);
  });
  scene.add(group);

  // Lighting
  const ambientLight = new THREE.AmbientLight(0xffffff, 1);
  scene.add(ambientLight);

  const spotLight = new THREE.SpotLight(0xffffff, 0.52);
  spotLight.position.set(14, 24, 30);
  spotLight.castShadow = true;
  scene.add(spotLight);

  const directionalLight1 = new THREE.DirectionalLight(0xffffff, 0.2);
  directionalLight1.position.set(0, -4, 0);
  scene.add(directionalLight1);

  const raycaster = new THREE.Raycaster();
  const mouse = new THREE.Vector2();
  const tempVector = new THREE.Vector3();
  const forces = new Map<string, any>();

  const initY = -25;
  const revolutionRadius = 4;
  const revolutionDuration = 2;
  const breathingAmplitude = 0.1;
  const breathingSpeed = 0.002;

  spheres.forEach((sphere) => { sphere.position.y = initY; });

  function initLoadingAnimation() {
    spheres.forEach((sphere: any, i: number) => {
      const delay = i * 0.02;
      gsap.timeline()
        .to(sphere.position, {
          duration: revolutionDuration / 2,
          y: revolutionRadius,
          ease: "power1.out",
          onUpdate: function (this: any) {
            const progress = this.progress();
            sphere.position.z = sphere.userData.originalPosition.z + Math.sin(progress * Math.PI) * revolutionRadius;
          },
          delay: delay
        })
        .to(sphere.position, {
          duration: revolutionDuration / 2,
          y: initY / 5,
          ease: "power1.out",
          onUpdate: function (this: any) {
            const progress = this.progress();
            sphere.position.z = sphere.userData.originalPosition.z - Math.sin(progress * Math.PI) * revolutionRadius;
          }
        })
        .to(sphere.position, {
          duration: 0.6,
          x: sphere.userData.originalPosition.x,
          y: sphere.userData.originalPosition.y,
          z: sphere.userData.originalPosition.z,
          ease: "power1.out"
        });
    });
  }

  if (document.readyState === "complete") {
    initLoadingAnimation();
  } else {
    window.addEventListener("load", initLoadingAnimation);
  }

  const hiddenElements = document.querySelectorAll(".hide-text");
  const main_txt = document.querySelector(".main-txt");

  hiddenElements.forEach((el) => { (el as HTMLElement).style.opacity = "0"; });

  let loadingComplete = false;
  setTimeout(() => {
    loadingComplete = true;
    hiddenElements.forEach((el) => { (el as HTMLElement).style.opacity = "1"; });
    (main_txt as HTMLElement).style.opacity = "0";
  }, (revolutionDuration + 1) * 1000);

  function onMouseMove(event: MouseEvent) {
    if (!loadingComplete) return;

    // Only push spheres while the pointer is over the hero
    const rect = renderer.domElement.getBoundingClientRect();
    if (event.clientY < rect.top || event.clientY > rect.bottom) return;

    mouse.x = ((event.clientX - rect.left) / rect.width) * 2 - 1;
    mouse.y = -((event.clientY - rect.top) / rect.height) * 2 + 1;

    raycaster.setFromCamera(mouse, camera);
    const intersects = raycaster.intersectObjects(spheres);

    if (intersects.length > 0) {
      const hoveredSphere = intersects[0].object;
      const force = new THREE.Vector3();
      force.subVectors(intersects[0].point, hoveredSphere.position).normalize().multiplyScalar(0.2);
      forces.set(hoveredSphere.uuid, force);
    }
  }

  function handleCollisions() {
    for (let i = 0; i < spheres.length; i++) {
      const sphereA = spheres[i];
      const radiusA = sphereA.userData.radius;
      for (let j = i + 1; j < spheres.length; j++) {
        const sphereB = spheres[j];
        const radiusB = sphereB.userData.radius;
        const distance = sphereA.position.distanceTo(sphereB.position);
        const minDistance = (radiusA + radiusB) * 1.2;
        if (distance < minDistance) {
          tempVector.subVectors(sphereB.position, sphereA.position);
          tempVector.normalize();
          const pushStrength = (minDistance - distance) * 0.4;
          sphereA.position.sub(tempVector.multiplyScalar(pushStrength));
          sphereB.position.add(tempVector.multiplyScalar(pushStrength));
        }
      }
    }
  }

  // Pause the 3D work when the hero is scrolled out of view
  let heroVisible = true;
  new IntersectionObserver((entries) => {
    heroVisible = entries[0].isIntersecting;
  }).observe(hero);

  function animate() {
    requestAnimationFrame(animate);
    if (!heroVisible) return;

    if (loadingComplete) {
      const time = Date.now() * breathingSpeed;
      spheres.forEach((sphere: any, i: number) => {
        const offset = i * 0.2;
        const breathingY = Math.sin(time + offset) * breathingAmplitude;
        const breathingZ = Math.cos(time + offset) * breathingAmplitude * 0.5;

        const force = forces.get(sphere.uuid);
        if (force) {
          sphere.position.add(force);
          force.multiplyScalar(0.95);
          if (force.length() < 0.01) forces.delete(sphere.uuid);
        }

        const originalPos = sphere.userData.originalPosition;
        tempVector.set(originalPos.x, originalPos.y + breathingY, originalPos.z + breathingZ);
        sphere.position.lerp(tempVector, 0.018);
      });
      handleCollisions();
    }

    controls.update();
    renderer.render(scene, camera);
  }

  window.addEventListener("mousemove", onMouseMove);
  animate();
  window.addEventListener("resize", sizeScene);

  // Ticket tilt and holographic sheen
  if (window.matchMedia("(pointer: fine)").matches) {
    document.querySelectorAll(".ticket").forEach((t) => {
      (t as HTMLElement).addEventListener("pointermove", (e: PointerEvent) => {
        const el = t as HTMLElement;
        const r = el.getBoundingClientRect();
        const px = (e.clientX - r.left) / r.width;
        const py = (e.clientY - r.top) / r.height;
        const k = parseFloat(el.dataset.tilt || "1");
        el.style.transform = `perspective(900px) rotateX(${(0.5 - py) * 10 * k}deg) rotateY(${(px - 0.5) * 12 * k}deg)`;
        el.style.setProperty("--mx", px * 100 + "%");
        el.style.setProperty("--my", py * 100 + "%");
      });
      (t as HTMLElement).addEventListener("pointerleave", () => {
        const el = t as HTMLElement;
        el.style.transform = "";
        el.style.setProperty("--mx", "50%");
        el.style.setProperty("--my", "30%");
      });
    });
  }

  const band = document.querySelector(".marquee-band") as HTMLElement | null;
  if (band && window.matchMedia("(pointer: fine)").matches) {
    band.addEventListener("pointermove", (e: PointerEvent) => {
      const r = band.getBoundingClientRect();
      band.style.setProperty("--mx", ((e.clientX - r.left) / r.width) * 100 + "%");
      band.style.setProperty("--my", ((e.clientY - r.top) / r.height) * 100 + "%");
    });
  }

  // Scroll reveals and parallax
  if ((window as any).ScrollTrigger) {
    gsap.registerPlugin((window as any).ScrollTrigger);

    gsap.utils.toArray(".reveal").forEach((el: any) => {
      gsap.from(el, {
        y: 60,
        opacity: 0,
        duration: 1.1,
        ease: "power3.out",
        scrollTrigger: { trigger: el, start: "top 88%" }
      });
    });

    gsap.utils.toArray(".parallax").forEach((el: any) => {
      const speed = parseFloat(el.dataset.speed) || 0.2;
      gsap.to(el, {
        y: () => speed * 300,
        ease: "none",
        scrollTrigger: { trigger: ".quote", start: "top bottom", end: "bottom top", scrub: true }
      });
    });

    gsap.from(".footer-word", {
      yPercent: 40,
      opacity: 0,
      ease: "power3.out",
      duration: 1.2,
      scrollTrigger: { trigger: ".footer-word", start: "top 95%" }
    });
  }
}
