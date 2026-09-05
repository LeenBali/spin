/* eslint-disable react-hooks/purity */
"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { Environment } from "@react-three/drei";
import { useRef, useMemo } from "react";
import * as THREE from "three";

// 🌟 مكون الجسيمات المتحركة
const Particles = () => {
  const particlesRef = useRef();

  // إنشاء 500 جسيم
  const particles = useMemo(() => {
    const positions = [];
    const colors = [];
    const sizes = [];

    for (let i = 0; i < 500; i++) {
      // توزيع عشوائي في الفضاء
      positions.push(
        (Math.random() - 0.5) * 20, // x
        (Math.random() - 0.5) * 20, // y
        (Math.random() - 0.5) * 20, // z
      );

      // ألوان متدرجة (أزرق/بنفسجي/أبيض)
      const color = new THREE.Color();
      color.setHSL(0.7 + Math.random() * 0.2, 0.8, 0.5 + Math.random() * 0.3);
      colors.push(color.r, color.g, color.b);

      // أحجام مختلفة
      sizes.push(0.02 + Math.random() * 0.08);
    }

    return {
      positions: new Float32Array(positions),
      colors: new Float32Array(colors),
      sizes: new Float32Array(sizes),
    };
  }, []);

  useFrame(({ clock }) => {
    if (particlesRef.current) {
      // حركة بطيئة للجسيمات
      const time = clock.getElapsedTime();
      const positions = particlesRef.current.geometry.attributes.position.array;

      // تحديث المواقع بحركة دائرية بطيئة
      for (let i = 0; i < positions.length; i += 3) {
        const index = i / 3;
        const speed = 0.1;
        const radius = 0.5 + Math.sin(index) * 0.3;
        const angle = time * 0.05 + index * 0.01;

        // حركة خفيفة جداً حول المحور Y
        positions[i] += Math.sin(angle) * 0.001;
        positions[i + 1] += Math.cos(angle * 0.7) * 0.001;
        positions[i + 2] += Math.sin(angle * 1.3) * 0.001;
      }

      particlesRef.current.geometry.attributes.position.needsUpdate = true;
    }
  });

  return (
    <points ref={particlesRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={particles.positions.length / 3}
          array={particles.positions}
          itemSize={3}
        />
        <bufferAttribute
          attach="attributes-color"
          count={particles.colors.length / 3}
          array={particles.colors}
          itemSize={3}
        />
        <bufferAttribute
          attach="attributes-size"
          count={particles.sizes.length}
          array={particles.sizes}
          itemSize={1}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.1}
        vertexColors
        transparent
        opacity={0.8}
        blending={THREE.AdditiveBlending}
        depthWrite={false}
      />
    </points>
  );
};

// 🌟 مكون الحلقات المتوهجة
const GlowingRings = () => {
  const groupRef = useRef();

  useFrame(({ clock }) => {
    if (groupRef.current) {
      const time = clock.getElapsedTime();
      groupRef.current.rotation.x = Math.sin(time * 0.05) * 0.1;
      groupRef.current.rotation.y = time * 0.03;
    }
  });

  return (
    <group ref={groupRef}>
      {[1.5, 2.5, 3.5].map((radius, index) => (
        <mesh key={index} rotation={[index * 0.3, 0, 0]}>
          <torusGeometry args={[radius, 0.03, 16, 100]} />
          <meshStandardMaterial
            color={
              index === 0 ? "#6366f1" : index === 1 ? "#06b6d4" : "#8b5cf6"
            }
            emissive={
              index === 0 ? "#6366f1" : index === 1 ? "#06b6d4" : "#8b5cf6"
            }
            emissiveIntensity={0.3}
            transparent
            opacity={0.3 - index * 0.05}
            metalness={0.8}
            roughness={0.2}
          />
        </mesh>
      ))}
    </group>
  );
};

// 🎯 المكون الرئيسي
const Scene3D = () => {
  return (
    <div
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100vw",
        height: "100vh",
        zIndex: -1,
      }}
    >
      <Canvas
        camera={{ position: [0, 0, 6] }}
        style={{ background: "#000000" }}
      >
        {/* خلفية سوداء */}
        <color attach="background" args={["#000000"]} />

        {/* إضاءة خفيفة */}
        <ambientLight intensity={0.1} />
        <pointLight position={[5, 5, 5]} intensity={0.5} color="#6366f1" />
        <pointLight position={[-5, -5, 5]} intensity={0.3} color="#8b5cf6" />

        {/* الجسيمات */}
        <Particles />

        {/* الحلقات المتوهجة */}
        <GlowingRings />

        {/* كرة وسطية خفيفة */}
        <mesh>
          <sphereGeometry args={[0.3, 32, 32]} />
          <meshStandardMaterial
            color="#6366f1"
            emissive="#6366f1"
            emissiveIntensity={0.5}
            transparent
            opacity={0.6}
          />
        </mesh>
      </Canvas>
    </div>
  );
};

export default Scene3D;
