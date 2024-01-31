let scene, camera, renderer, pointLight, sun;

// ページの読み込みを待つ
window.addEventListener("load", init);

function init() {
  // サイズを指定
  const width = 960;
  const height = 540;
  let rot = 0;

  // レンダラーを作成
  renderer = new THREE.WebGLRenderer({
    canvas: document.querySelector("#myCanvas"),
  });
  renderer.setSize(window.innerWidth, window.innerHeight);

  // シーンを作成
  scene = new THREE.Scene();

  // カメラを作成
  camera = new THREE.PerspectiveCamera(45, width / height);
  //   camera.position.z = 2000;

  // 球体作成
  const geometry = new THREE.SphereGeometry(100, 30, 30);
  // マテリアルを作成
  const material = new THREE.MeshStandardMaterial({
    map: new THREE.TextureLoader().load("images/earthmap.jpg"),
    side: THREE.DoubleSide,
  });
  // 地球メッシュを作成
  const earth = new THREE.Mesh(geometry, material);
  // 3D空間にメッシュを追加
  scene.add(earth);

  // 平行光源
  const directionalLight = new THREE.DirectionalLight(0xffffff, 1.9);
  directionalLight.position.set(1, 1, 1);
  scene.add(directionalLight);

  // ポイント光源
  pointLight = new THREE.PointLight(0xffffff, 2, 1000);
  scene.add(pointLight);
  const pointLightHelper = new THREE.PointLightHelper(pointLight, 30);
  scene.add(pointLightHelper);

  /* 星屑追加 */
  createStarField();

/* 星屑作成 */
function createStarField() {
	
  /* x,y,z座標の値がランダムに入った配列を1000個作成 */
  const vertices = [];
  for (let i = 0; i < 1000; i++) {
    const x = 3000 * (Math.random() - 0.5);
    const y = 3000 * (Math.random() - 0.5);
    const z = 3000 * (Math.random() - 0.5);

    vertices.push(x, y, z);
  }

    /* 形状データ作成 */
    const geometry = new THREE.BufferGeometry();
    geometry.setAttribute(
      "position",
      new THREE.Float32BufferAttribute(vertices, 3)
    );

    /* マテリアル作成 */
    const material = new THREE.PointsMaterial({
      size: 5,
      color: 0xffffff,
    });

    /* 物体を作成 */
    const stars = new THREE.Points(geometry, material);
    scene.add(stars);
  }

  /* マウス座標はマウスが動いた時のみ取得 */
  document.addEventListener("mousemove", (e) => {
    mouseX = e.pageX;
  });

 // ポイント光源を太陽のような球体に変更
const sunGeometry = new THREE.SphereGeometry(40, 32, 32); // 半径が20の球体
const sunMaterial = new THREE.MeshStandardMaterial({
  color: 0x444444, // 太陽の色
  normalMap: new THREE.TextureLoader().load('./images/moon.jpg'), // 法線マップのパスを指定
});

sun = new THREE.Mesh(sunGeometry, sunMaterial);


// 法線マップのテクスチャを読み込む
const normalMapTexture = new THREE.TextureLoader().load('./images/moon.jpg');

// 太陽の光源を追加
const sunLight = new THREE.PointLight(0xffffff, 1, 2000);
sun.add(sunLight);

scene.add(sun);

  // ポイント光源の位置を太陽の位置に合わせる
  function updateSunPosition() {
    sun.position.set(
      700 * Math.cos(Date.now() / 1000),
      // 500 * Math.sin(Date.now() / 1000),
      700 * Math.sin(Date.now() / 1000)
    );
  }

  // 毎フレームごとに太陽の位置を更新
  function tick() {
    rot += 0.2;

    const radian = (rot * Math.PI) / 180;

    camera.position.x = 1000 * Math.sin(radian);
    camera.position.z = 2000 * Math.cos(radian);
    camera.lookAt(new THREE.Vector3(0, 0, -400));

    // ライトを周回させる
    updateSunPosition();

    // レンダリング
    renderer.render(scene, camera);
    requestAnimationFrame(tick);
  }

  tick();
  window.addEventListener("resize", onWindowResize);

  /* ウィンドウ変更時にサイズを維持する処理 */
  function onWindowResize() {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
  }
}


