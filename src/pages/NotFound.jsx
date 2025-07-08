import React, {use, useEffect, useRef} from 'react';
import {Link} from 'react-router-dom';
import {Home} from 'lucide-react';
import * as THREE from 'three';

function NotFound () {
  const canvasRef = useRef (null);

  useEffect (() => {
    if (!canvasRef.current) return;

    const canvas = canvasRef.current;

    const sizes = {
      width: window.innerWidth,
      height: window.innerHeight,
    };
    const mouse = {x: 0, y: 0};
    window.addEventListener ('mousemove', e => {
      (mouse.x = e.clientX / sizes.width - 0.5), (mouse.y =
        e.clientY / sizes.height - 0.5);
    });
    const scene = new THREE.Scene ();

    const geometry = new THREE.TorusKnotGeometry (0.6, 0.25, 100, 16);
    const material = new THREE.MeshNormalMaterial ();
    const mesh = new THREE.Mesh (geometry, material);
    mesh.position.y = 1;
    scene.add (mesh);

    const camera = new THREE.PerspectiveCamera (
      75,
      sizes.width / sizes.height,
      0.1,
      50
    );
    camera.position.z = 4;
    scene.add (camera);

    const renderer = new THREE.WebGLRenderer ({
      canvas: canvas,
      alpha: true, // Make canvas transparent to see background styles
    });
    renderer.setSize (sizes.width, sizes.height);
    renderer.setPixelRatio (Math.min (window.devicePixelRatio, 2));

    const loop = () => {
      mesh.rotation.y = mouse.x * 4;
      mesh.rotation.x = mouse.y * 2;
      mesh.position.x = mouse.x * 5;
      mesh.position.y = -(mouse.y * 5);
      renderer.render (scene, camera);
      requestAnimationFrame (loop);
    };
    loop ();

    const handleResize = () => {
      sizes.width = window.innerWidth;
      sizes.height = window.innerHeight;

      camera.aspect = sizes.width / sizes.height;
      camera.updateProjectionMatrix ();

      renderer.setSize (sizes.width, sizes.height);
      renderer.setPixelRatio (Math.min (window.devicePixelRatio, 2));
    };

    window.addEventListener ('resize', handleResize);

    // Cleanup function to run when the component unmounts
    return () => {
      window.removeEventListener ('resize', handleResize);
      renderer.dispose ();
      geometry.dispose ();
      material.dispose ();
    };
  }, []); // Empty dependency array ensures this runs only once

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-900 text-white overflow--x-hidden">
      <div className="absolute inset-0 z-0 opacity-20">
        <div className="absolute bg-orange-500/30 rounded-full -left-20 -top-20 w-96 h-96 blur-3xl animate-pulse" />
        <div className="absolute bg-blue-500/30 rounded-full -right-20 -bottom-40 w-96 h-96 blur-3xl animate-pulse animation-delay-4000" />
      </div>

      {/* This canvas will be used by Three.js */}
      <canvas
        ref={canvasRef}
        className="absolute top-0 left-0 w-full h-full z-0"
      />

      <div className="text-center z-10">
        <h1 className="text-8xl md:text-9xl font-bold font-mono text-white drop-shadow-lg">
          404
        </h1>
        <p className="text-2xl md:text-3xl font-light mt-4">
          Lost in the Digital Cosmos
        </p>
        <p className="mt-4 text-lg text-gray-400">
          It seems you've ventured into uncharted territory. Let's get you back on track.
        </p>
        <Link
          to="/"
          className="mt-8 inline-flex items-center px-8 py-4 text-lg font-bold text-white bg-gradient-to-r from-orange-500 to-amber-500 rounded-full hover:scale-105 transform transition-transform duration-300 ease-in-out shadow-lg shadow-orange-500/20"
        >
          <Home className="mr-2" />
          Return to Home Base
        </Link>
      </div>
    </div>
  );
}

export default NotFound;
