const scene = new THREE.Scene();
	  const c = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );

	  const renderer = new THREE.WebGLRenderer();
	  renderer.setSize( window.innerWidth, window.innerHeight );
	  document.body.img.appendChild( renderer.domElement );

	  const geometry = new THREE.BoxGeometry();
	  const material = new THREE.MeshBasicMaterial( { color: 0xffff00 } );
	  const cube = new THREE.Mesh( geometry, material );
	  scene.add( cube );
      console.log(cube)
	  c.position.z = 5;

	  function animate() {
		  requestAnimationFrame( animate );

		  cube.rotation.x += 0.1;
		  cube.rotation.y += 0.1;

		  renderer.render( scene, c );
};

animate();