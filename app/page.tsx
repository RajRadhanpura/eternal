"use client";

import * as THREE from "three";
import { useRef, useReducer, useMemo } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import {
  useGLTF,
  MeshTransmissionMaterial,
  Environment,
  Lightformer,
} from "@react-three/drei";
import {
  CuboidCollider,
  BallCollider,
  Physics,
  RigidBody,
} from "@react-three/rapier";
import { EffectComposer, N8AO } from "@react-three/postprocessing";
import { easing } from "maath";
import { SkeletonUtils } from "three-stdlib";
import { OrbitControls } from "@react-three/drei";
import Animations from "./components/Animations";
import Header from "./components/Header";
import Image from "next/image";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Link from "next/link";
import { FaInfinity, FaTwitter, FaDribbble } from "react-icons/fa";

const accents = ["#ff0000", "#00ff00", "#ff4060", "#ffcc00"];
const shuffle = (accent = 0) => [
  { color: "#444", roughness: 0.1 },
  { color: "#444", roughness: 0.75 },
  { color: "#444", roughness: 0.75 },
  { color: "white", roughness: 0.1 },
  { color: "white", roughness: 0.75 },
  { color: "white", roughness: 0.1 },
  { color: accents[accent], roughness: 0.1, accent: true },
  { color: accents[accent], roughness: 0.75, accent: true },
  { color: accents[accent], roughness: 0.1, accent: true },
];

const projects = [
  {
    title: "Casalgrande Padana",
    image: "./company1.jpg.webp",
  },
  {
    title: "Novabell Cramiche",
    image: "./company2.jpg.webp",
  },
  {
    title: "Impronta Group",
    image: "./company3.jpg.webp",
  },
  {
    title: "Frag Dal 1921",
    image: "./company1.jpg.webp",
  },
];

export default function ScenePage() {
  useEffect(() => {
    AOS.init({
      duration: 1000, // animation duration in ms
      once: true, // animate only once
    });
  }, []);
  return (
    <div>
      <Header />
      <Animations />
      <div className="_3d-container extra">
        <Scene style={{ borderRadius: 15 }} />
      </div>

      <section className="pt-5 pb-10" data-aos="fade-up" data-aos-delay="0">
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
          <div className="text-2xl">
            <Image src="/eternal.png" alt="Logo" width={30} height={80}></Image>
          </div>
          <div className="text-2xl">
            <Image src="/eternal.png" alt="Logo" width={30} height={80}></Image>
          </div>
          <div className="text-xs tracking-widest text-gray-500 font-semibold">
            SCROLL TO EXPLORE
          </div>
          <div className="text-2xl">
            <Image src="/eternal.png" alt="Logo" width={30} height={80}></Image>
          </div>
          <div className="text-2xl">
            <Image src="/eternal.png" alt="Logo" width={30} height={80}></Image>
          </div>
        </div>
      </section>
      {/* <section className="pb-50"></section> */}
      <section className="min-h-screen w-full">
        {/* Hero Headline */}
        <div className="w-full mt-[10vh] leading-[1.2] text-black">
          <h1 className="text-[8vw]" data-aos="fade-up" data-aos-delay="100">
            Beyond Visions
          </h1>
          <h1 className="text-[8vw]" data-aos="fade-up" data-aos-delay="200">
            Within Reach
          </h1>
        </div>

        {/* Showcase Section */}
        <section id="showcase" className="pb-20">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              {/* Left Column Content */}
              <div
                className="lg:col-span-7"
                data-aos="fade-right"
                data-aos-delay="300"
              ></div>

              {/* Right Column Text */}
              <div className="lg:col-span-5 pl-10">
                <div
                  id="showcaseContent"
                  className="space-y-6 max-w-xl lg:ml-auto mt-6"
                  data-aos="fade-left"
                  data-aos-delay="400"
                >
                  <p className="text-base text-[#111827]/90">
                    Started in 2014 Essence Tiles, We have emerged as a global
                    leader in premium vitrified porcelain tiles. Headquartered
                    in India, we leverage our state-of-the-art manufacturing
                    capabilities across 8 facilities to produce a staggering 8
                    million square meters of exquisite tiles & an annual
                    turnover of approximately $43 million annually.
                  </p>
                  <div className="flex items-center mt-2 gap-4">
                    <button
                      id="talkBtn"
                      className="bg-[#1f2937] text-white rounded-full px-6 py-3 font-semibold shadow-md min-w-[190px] flex items-center justify-center gap-3"
                    >
                      ABOUT US
                      <span className="w-2 h-2 bg-white rounded-full opacity-90" />
                    </button>
                  </div>
                </div>
              </div>

              {/* Left Column Video */}
              <div
                className="lg:col-span-7"
                data-aos="fade-up"
                data-aos-delay="500"
              >
                <div
                  id="showcaseImage"
                  className="rounded-2xl -mt-[8vh] overflow-hidden shadow-lg"
                >
                  <video
                    autoPlay
                    muted
                    loop
                    playsInline
                    className="w-full h-auto block object-cover"
                  >
                    <source src="/desktop.mp4" type="video/mp4" />
                  </video>
                </div>
              </div>
            </div>
          </div>
        </section>
      </section>

      <section id="featured" className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          {/* Header */}
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-4xl md:text-5xl font-extrabold">
              Featured Work
            </h2>
            <a
              href="#"
              className="text-sm uppercase tracking-wider text-gray-600 hidden md:inline"
            >
              See all projects →
            </a>
          </div>

          {/* Projects Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {projects.map((project, idx) => (
              <article
                key={idx}
                className="bg-[#f2f4f9] rounded-2xl overflow-hidden"
                data-aos="fade-up"
                data-aos-delay={idx * 100}
              >
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-80 md:h-96 lg:h-[350px] object-cover rounded-t-2xl"
                />
                <div className="px-3 py-3">
                  <a href="#" className="group">
                    <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold leading-tight text-center group-hover:text-gray-700 transition-colors">
                      {project.title}
                    </h3>
                  </a>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="p-10" data-aos="fade-up"
                data-aos-delay="100">
        <div
          id="showcaseImage"
          className="rounded-2xl -mt-[8vh] overflow-hidden shadow-lg"
        >
          <video
            autoPlay
            muted
            loop
            playsInline
            className="w-full h-auto block object-cover"
          >
            <source src="/desktop.mp4" type="video/mp4" />
          </video>
        </div>
      </section>

       <footer className="bg-black text-white">
      <div className="max-w-7xl mx-auto px-6 py-16 grid grid-cols-1 md:grid-cols-3 gap-10">
        
        {/* Left Section */}
        <div className="space-y-6">
          {/* Social Icons */}
          <div className="flex gap-6 text-xl">
            <FaInfinity className="cursor-pointer hover:opacity-70" />
            <FaTwitter className="cursor-pointer hover:opacity-70" />
            <FaDribbble className="cursor-pointer hover:opacity-70" />
          </div>

          {/* Logo */}
          <div className="mt-15">
            <Image src="/logo-white.svg" alt="Logo" width={250} height={80}></Image>
          </div>

          {/* Copyright */}
          <p className="text-sm text-gray-400 pt-6">
            © 2025 Eternal Home. All rights reserved.
          </p>

          <p className="text-sm text-gray-400">
            Powered by <span className="text-white">Feelmarks</span>
          </p>
        </div>

        {/* Middle - Quick Links */}
        <div>
          <h3 className="text-lg mb-6">Quick Links</h3>
          <ul className="space-y-3 text-gray-400">
            <li><Link href="#">About us</Link></li>
            <li><Link href="#">Our Brands</Link></li>
            <li><Link href="#">Product Portfolio</Link></li>
            <li><Link href="#">Exhibitions</Link></li>
          </ul>
        </div>

        {/* Right - Brands */}
        <div>
          <h3 className="text-lg mb-6">Brands</h3>
          <ul className="space-y-3 text-gray-400">
            <li>Casalgrande Padana</li>
            <li>Novabell Cramiche</li>
            <li>Impronta Group</li>
            <li>Frag Dal 1921</li>
          </ul>
        </div>
      </div>
    </footer>
    </div>
  );
}

function Scene(props) {
  const [accent, click] = useReducer((state) => ++state % accents.length, 0);
  // const connectors = useMemo(() => shuffle(accent), [accent])
  // const COUNT = 27;

  // const connectors = useMemo(() => {
  //   const radius = 4;
  //   return shuffle(accent)
  //     .slice(0, COUNT)
  //     .map((item, i) => {
  //       const angle = (i / COUNT) * Math.PI * 2;
  //       return {
  //         ...item,
  //         position: [
  //           Math.cos(angle) * radius,
  //           Math.sin(angle) * radius * 0.6,
  //           (Math.random() - 0.5) * 5,
  //         ],
  //       };
  //     });
  // }, [accent]);

  const COUNT = 15;

  const COLORS = [
    "#2b2824",
    "#9cb3a3",
    "#0c3e49",
    "#e5ddd2",
    "#a1452c",
    "#95a36d",
  ];

  const connectors = useMemo(() => {
    const radius = 5;
    return Array.from({ length: COUNT }, (_, i) => {
      const angle = (i / COUNT) * Math.PI * 2;
      return {
        // color: "#444",
        // color: COLORS[i % COLORS.length],
        color: `hsl(${Math.random() * 360}, 80%, 60%)`,
        roughness: 0.3,
        position: [
          Math.cos(angle) * radius,
          Math.sin(angle) * radius * 0.6,
          (Math.random() - 0.5) * 5,
        ],
      };
    });
  }, [accent]);

  return (
    <Canvas
      onClick={click}
      shadows
      dpr={[1, 1.5]}
      // gl={{ antialias: false }}
      gl={{
        physicallyCorrectLights: true,
        toneMapping: THREE.ACESFilmicToneMapping,
        toneMappingExposure: 1.5,
      }}
      camera={{ position: [0, 0, 15], fov: 17.5, near: 1, far: 20 }}
      style={{ width: "100%", height: "250px" }}
      {...props}
    >
      <color attach="background" args={["#141622"]} />
      <ambientLight intensity={0.4} />
      <spotLight
        position={[10, 10, 10]}
        angle={0.15}
        penumbra={1}
        intensity={1}
        castShadow
      />
      <Physics /*debug*/ gravity={[0, 0, 0]}>
        <Pointer />
        {
          connectors.map((props, i) => <Connector key={i} {...props} />) /* prettier-ignore */
        }
        <Connector position={[10, 10, 5]}>
          <Model>
            <MeshTransmissionMaterial
              clearcoat={1}
              thickness={0.1}
              anisotropicBlur={0.1}
              chromaticAberration={0.1}
              samples={8}
              resolution={512}
            />
          </Model>
        </Connector>
      </Physics>
      <EffectComposer disableNormalPass multisampling={8}>
        <N8AO distanceFalloff={1} aoRadius={1} intensity={4} />
      </EffectComposer>
      <Environment resolution={256}>
        <group rotation={[-Math.PI / 3, 0, 1]}>
          <Lightformer
            form="circle"
            intensity={4}
            rotation-x={Math.PI / 2}
            position={[0, 5, -9]}
            scale={2}
          />
          <Lightformer
            form="circle"
            intensity={2}
            rotation-y={Math.PI / 2}
            position={[-5, 1, -1]}
            scale={2}
          />
          <Lightformer
            form="circle"
            intensity={2}
            rotation-y={Math.PI / 2}
            position={[-5, -1, -1]}
            scale={2}
          />
          <Lightformer
            form="circle"
            intensity={2}
            rotation-y={-Math.PI / 2}
            position={[10, 1, 0]}
            scale={8}
          />
        </group>
      </Environment>
    </Canvas>
  );
}

function Connector({
  position,
  children,
  vec = new THREE.Vector3(),
  scale,
  r = THREE.MathUtils.randFloatSpread,
  accent,
  ...props
}) {
  const api = useRef();
  const pos = useMemo(() => position || [r(10), r(10), r(10)], []);
  useFrame((state, delta) => {
    delta = Math.min(0.1, delta);
    api.current?.applyImpulse(
      vec.copy(api.current.translation()).negate().multiplyScalar(0.2),
    );
  });
  return (
    <RigidBody
      linearDamping={4}
      angularDamping={4}
      friction={1}
      position={pos}
      ref={api}
      colliders={false}
    >
      <CuboidCollider args={[0.38, 1.27, 0.38]} />
      <CuboidCollider args={[1.27, 0.38, 0.38]} />
      <CuboidCollider args={[0.38, 0.38, 1.27]} />
      {children ? children : <Model {...props} />}
      {accent && (
        <pointLight intensity={4} distance={2.5} color={props.color} />
      )}
    </RigidBody>
  );
}
function Pointer({ vec = new THREE.Vector3() }) {
  const ref = useRef();
  useFrame(({ mouse, viewport }) => {
    ref.current?.setNextKinematicTranslation(
      vec.set(
        (mouse.x * viewport.width) / 5,
        (mouse.y * viewport.height) / 5,
        0,
      ),
    );
  });
  return (
    <RigidBody
      position={[0, 0, 0]}
      type="kinematicPosition"
      colliders={false}
      ref={ref}
    >
      <BallCollider args={[1]} />
    </RigidBody>
  );
}

// function Model({ children, color = 'white', roughness = 0.3 }) {
//   const { scene } = useGLTF('/E2.glb')
//   const clonedScene = useMemo(() => SkeletonUtils.clone(scene), [scene])
//   useFrame((state, delta) => {
//     clonedScene.traverse((obj) => {
//       if (obj.isMesh && obj.material?.color) {
//         easing.dampC(obj.material.color, color, 0.2, delta)
//         obj.material.roughness = roughness
//       }
//     })
//   })

//   return <primitive object={clonedScene} scale={0.28} castShadow receiveShadow />
// }

function Model({ color = "white", roughness = 0.3 }) {
  const { scene } = useGLTF("/E2.glb");
  const clonedScene = useMemo(() => SkeletonUtils.clone(scene), [scene]);

  useMemo(() => {
    clonedScene.traverse((obj) => {
      if (obj.isMesh) {
        obj.material = new THREE.MeshStandardMaterial({
          color: new THREE.Color(color),
          roughness,
          metalness: 0.1,
        });
      }
    });
  }, [color, roughness, clonedScene]);

  return <primitive object={clonedScene} scale={0.3} />;
}
