"use client";

import { useState } from "react";
import Image from "next/image";

type ExosuitTab = "cad" | "kinematics" | "physical" | "electronics";
type StandTab = "assembly" | "clamp" | "physical";

export default function Home() {
  // Tabs state
  const [exosuitTab, setExosuitTab] = useState<ExosuitTab>("cad");
  const [standTab, setStandTab] = useState<StandTab>("assembly");

  // Modal zoom state for blueprints/CAD images
  const [modalImage, setModalImage] = useState<{ src: string; alt: string } | null>(null);

  // Exosuit data
  const exosuitSpecs = [
    { label: "System Classification", value: "Kinematic Assistive Exosuit & Controller" },
    { label: "Degrees of Freedom", value: "5-Axis (Multi-Joint Ergonometrics)" },
    { label: "Primary Materials", value: "Structural PETG / High-Stiffness PLA" },
    { label: "Microcontroller", value: "ESP32 (Dual-Core, Wi-Fi/BT Enabled)" },
    { label: "Actuators", value: "Waveshare ST3215 Serial Bus Servos" },
    { label: "Software Stack", value: "Autodesk Inventor, Bambu Studio, Arduino IDE, C++" },
    { label: "Prototyping Process", value: "FDM 3D Printing, Mechanical Clearance Fits" },
    { label: "Joint Optimization", value: "Low-friction mechanical joint alignment" },
  ];

  // Gas spring phone stand data
  const standSpecs = [
    { label: "Mechanism Type", value: "Dynamic C-Clamp Desk Mount Stand" },
    { label: "Gas Spring Travel", value: "60.0 Degree Center to Top Travel" },
    { label: "Displacement Range", value: "Adjustable 171.5 mm to 205.0 mm" },
    { label: "Mount Adjustment", value: "C-clamp capacity: 9.0 mm to 75.0 mm" },
    { label: "Material Composition", value: "PETG Arms, Carbon Steel Hardware, Gas Springs, Brass Threaded Inserts" },
    { label: "Software Stack", value: "Autodesk Inventor, Bambu Studio" },
  ];

  return (
    <main className="blueprint-bg relative min-h-screen text-slate-100 flex flex-col font-mono selection:bg-blue-500 selection:text-white pb-16">
      {/* Blueprint Grid Vignette Overlay */}
      <div className="blueprint-radial absolute inset-0 pointer-events-none z-0" />

      {/* Main Container */}
      <div className="max-w-[1200px] mx-auto w-full px-4 sm:px-6 py-8 relative z-10 flex-grow">

        {/* ==========================================================
            HUD HEADER SECTION: Standard Engineering Title Block
            ========================================================== */}
        <header className="glass-panel border border-blue-500/20 rounded-lg p-6 mb-10 corner-ticks">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">

            {/* Title / Primary Info */}
            <div className="lg:col-span-8 flex flex-col justify-between border-b lg:border-b-0 lg:border-r border-blue-500/20 pb-6 lg:pb-0 lg:pr-6">
              <div>
                <div className="flex items-center gap-3 mb-2">
                  <span className="h-2.5 w-2.5 rounded-full bg-blue-500 led-active shadow-[0_0_8px_#3b82f6]" />
                  <span className="text-xs tracking-widest text-blue-400 font-bold uppercase">SYSTEM STATUS // ONLINE & DEVELOPING</span>
                </div>
                <h1 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight leading-none mb-1">
                  DEREK LI
                </h1>
                <p className="text-sm sm:text-base text-blue-300 font-sans tracking-wide">
                  Mechanical Engineering Technology Graduate | Aspiring Mechanical Designer
                </p>
              </div>

              <div className="flex flex-wrap gap-4 mt-6 text-xs">
                <a
                  href="mailto:liderek920@gmail.com"
                  className="flex items-center gap-2 px-4 py-2 rounded border border-blue-500/30 bg-blue-950/20 hover:bg-blue-500/20 hover:border-blue-400 transition-all shadow-sm"
                >
                  <svg className="w-4 h-4 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  <span>EMAIL CONTACT</span>
                </a>
                <a
                  href="https://www.linkedin.com/in/derek-li-a527b12b8"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-4 py-2 rounded border border-blue-500/30 bg-blue-950/20 hover:bg-blue-500/20 hover:border-blue-400 transition-all shadow-sm"
                >
                  <svg className="w-4 h-4 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  <span>LINKEDIN PROFILE</span>
                </a>
                <a
                  href="/Derek Li - Resume.pdf"
                  target="_blank"
                  className="flex items-center gap-2 px-4 py-2 rounded border border-cyan-500/30 bg-cyan-950/20 hover:bg-cyan-500/20 hover:border-cyan-400 transition-all shadow-sm"
                >
                  <svg className="w-4 h-4 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                  <span>DOWNLOAD RESUME (PDF)</span>
                </a>
              </div>
            </div>

            {/* Standard Engineering Drawing Blueprint Title Block */}
            <div className="lg:col-span-4 flex flex-col justify-between text-[11px] text-blue-400 font-mono tracking-tight bg-slate-950/40 p-4 rounded border border-blue-500/10">
              <div className="grid grid-cols-2 gap-2 border-b border-blue-500/20 pb-3 mb-3">
                <div>
                  <div className="text-[9px] uppercase opacity-60">DRAWING NO.</div>
                  <div className="font-bold text-white uppercase">DL-MECH-2026</div>
                </div>
                <div>
                  <div className="text-[9px] uppercase opacity-60">VERSION</div>
                  <div className="font-bold text-white uppercase">R-3.0 (PRODUCTION)</div>
                </div>
              </div>
              <div className="grid grid-cols-3 gap-2 border-b border-blue-500/20 pb-3 mb-3">
                <div>
                  <div className="text-[9px] uppercase opacity-60">DESIGNER</div>
                  <div className="font-bold text-slate-200">DEREK LI</div>
                </div>
                <div>
                  <div className="text-[9px] uppercase opacity-60">SCALE</div>
                  <div className="font-bold text-slate-200">1:1 FULL</div>
                </div>
                <div>
                  <div className="text-[9px] uppercase opacity-60">SHEET</div>
                  <div className="font-bold text-slate-200">1 OF 1</div>
                </div>
              </div>
              <div>
                <div className="text-[9px] uppercase opacity-60 mb-1">CORE TOOLSETS</div>
                <div className="flex flex-wrap gap-1 font-bold text-slate-200 uppercase">
                  <span className="px-1.5 py-0.5 rounded bg-blue-500/10 border border-blue-500/20">CAD // INVENTOR</span>
                  <span className="px-1.5 py-0.5 rounded bg-blue-500/10 border border-blue-500/20">CAM // CURA & BAMBU</span>
                  <span className="px-1.5 py-0.5 rounded bg-blue-500/10 border border-blue-500/20">PRINTING // PLA/PETG/TPU</span>
                </div>
              </div>
            </div>

          </div>
        </header>

        {/* ==========================================================
            SECTION 1: 5-AXIS WEARABLE ARM EXOSUIT
            ========================================================== */}
        <section id="exosuit" className="mb-14">

          {/* Section Header */}
          <div className="flex items-center gap-4 mb-6 border-b border-blue-500/20 pb-3">
            <div className="p-2.5 bg-blue-950/30 border border-blue-500/30 rounded-md">
              <svg className="w-6 h-6 text-blue-400 animate-spin" style={{ animationDuration: '12s' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
            </div>
            <div>
              <h2 className="text-xl sm:text-2xl font-bold tracking-tight text-white uppercase">
                01 // Mechanical Engineering Technology
              </h2>
              <p className="text-xs text-blue-400 font-medium">ACADEMIC CAPSTONE DESIGN & PROTOTYPE DEVELOPMENT</p>
            </div>
          </div>

          {/* Project Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">

            {/* Left: Project Specs and Notes */}
            <div className="lg:col-span-5 flex flex-col justify-between gap-6">

              {/* Core Details */}
              <div className="glass-panel border border-slate-800 rounded-lg p-6 hover:border-blue-500/10 transition-all flex-grow">
                <div className="flex justify-between items-center mb-4 border-b border-slate-800 pb-2">
                  <h3 className="font-bold text-white text-base sm:text-lg">
                    5-Axis Wearable Arm Exosuit
                  </h3>
                  <span className="text-[10px] tracking-wider text-blue-400 bg-blue-500/10 border border-blue-500/20 px-2 py-0.5 rounded uppercase">
                    Kinematics
                  </span>
                </div>

                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-sans mb-6">
                  Developed a 5-degree-of-freedom wearable arm exosuit designed as the primary controller for a teleoperated robot. The system captures multi-axis human kinematics to dictate precise robotic actuation over a wireless connection.
                </p>

                {/* Bullets */}
                <ul className="space-y-3 text-xs sm:text-sm text-slate-300 font-sans mb-6">
                  <li className="flex items-start gap-2.5">
                    <span className="mt-1 h-1.5 w-1.5 flex-shrink-0 bg-blue-500 rounded-sm" />
                    <span><strong>Teleoperation Control:</strong> Engineered the exosuit to function as a kinematic input device, translating the user's biological joint movements into synchronized remote robotic articulation.</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <span className="mt-1 h-1.5 w-1.5 flex-shrink-0 bg-blue-500 rounded-sm" />
                    <span><strong>Scope Iteration:</strong> While initial project goals included load-bearing and physical movement assistance, strict time constraints led to a focused pivot purely on perfecting the teleoperation capabilities.</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <span className="mt-1 h-1.5 w-1.5 flex-shrink-0 bg-blue-500 rounded-sm" />
                    <span><strong>Control Strategy:</strong> Originally intended to use IMUs for inverse kinematics, time constraints led to directly mapping joint angles using ST3215 servos. Robust software safety limits were enforced to protect the remote robotic arm.</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <span className="mt-1 h-1.5 w-1.5 flex-shrink-0 bg-blue-500 rounded-sm" />
                    <span><strong>Kinematic Synthesis:</strong> Designed low-friction multi-axis linkages configured to mimic biological human joint dynamics and ensure accurate positional telemetry mapping.</span>
                  </li>
                </ul>

                {/* Engineering Blueprint Drawers - PDF Documents */}
                <div className="mt-2 p-4 bg-slate-950/60 rounded border border-slate-800">
                  <span className="text-[9px] text-blue-400 font-bold uppercase block mb-3">// STRUCTURAL BLUEPRINTS VAULT (PDF)</span>
                  <div className="flex flex-col gap-2">
                    <a
                      href="/Exosuit/Documents/Final_Ver.pdf"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex justify-between items-center text-xs p-2.5 rounded bg-slate-900/50 border border-slate-800 hover:border-blue-500/30 hover:bg-slate-900 transition-all"
                    >
                      <span className="flex items-center gap-2 text-slate-200">
                        <span>📋</span>
                        <span className="font-sans font-medium">Exosuit Final Assembly Blueprint</span>
                      </span>
                      <span className="text-[9px] text-blue-400 font-bold border border-blue-500/20 px-1.5 py-0.5 rounded bg-blue-500/5">VIEW DWG</span>
                    </a>
                  </div>
                </div>
              </div>

              {/* Specification Table */}
              <div className="glass-panel border border-slate-800 rounded-lg p-5">
                <span className="text-[10px] tracking-wider text-blue-400 uppercase font-bold block mb-3">// TECHNICAL SPECIFICATIONS DATASHEET</span>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-2.5 text-xs">
                  {exosuitSpecs.map((spec, idx) => (
                    <div key={idx} className="border-b border-slate-800/60 pb-1.5">
                      <div className="text-[9px] text-slate-400 uppercase tracking-tight">{spec.label}</div>
                      <div className="text-slate-200 font-sans font-medium leading-normal mt-0.5">{spec.value}</div>
                    </div>
                  ))}
                </div>
              </div>

            </div>

            {/* Right: Stateful Workspace Tabs / Visualizer */}
            <div className="lg:col-span-7 flex flex-col">

              {/* Tab Navigation */}
              <div className="flex border-b border-slate-800 bg-slate-950/40 rounded-t-lg p-1.5 gap-1.5">
                <button
                  onClick={() => setExosuitTab("cad")}
                  className={`flex-1 py-2 px-3 text-xs font-bold transition-all uppercase tracking-wider rounded text-center flex items-center justify-center gap-2 border ${exosuitTab === "cad"
                    ? "bg-blue-950/40 text-blue-400 border-blue-500/30 shadow-sm"
                    : "text-slate-400 border-transparent hover:text-slate-200 hover:bg-slate-900/40"
                    }`}
                >
                  <svg className="w-auto h-auto self-stretch shrink-0 max-h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  <span className="hidden sm:inline">3D Solid Models</span>
                  <span className="sm:hidden">3D CAD</span>
                </button>
                <button
                  onClick={() => setExosuitTab("kinematics")}
                  className={`flex-1 py-2 px-3 text-xs font-bold transition-all uppercase tracking-wider rounded text-center flex items-center justify-center gap-2 border ${exosuitTab === "kinematics"
                    ? "bg-blue-950/40 text-blue-400 border-blue-500/30 shadow-sm"
                    : "text-slate-400 border-transparent hover:text-slate-200 hover:bg-slate-900/40"
                    }`}
                >
                  <svg className="w-auto h-auto self-stretch shrink-0 max-h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                  <span className="hidden sm:inline">Custom Linkages</span>
                  <span className="sm:hidden">Linkages</span>
                </button>
                <button
                  onClick={() => setExosuitTab("physical")}
                  className={`flex-1 py-2 px-3 text-xs font-bold transition-all uppercase tracking-wider rounded text-center flex items-center justify-center gap-2 border ${exosuitTab === "physical"
                    ? "bg-blue-950/40 text-blue-400 border-blue-500/30 shadow-sm"
                    : "text-slate-400 border-transparent hover:text-slate-200 hover:bg-slate-900/40"
                    }`}
                >
                  <svg className="w-auto h-auto self-stretch shrink-0 max-h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
                  </svg>
                  <span className="hidden sm:inline">Physical Prototype & Demo</span>
                  <span className="sm:hidden">Demo</span>
                </button>
                <button
                  onClick={() => setExosuitTab("electronics")}
                  className={`flex-1 py-2 px-3 text-xs font-bold transition-all uppercase tracking-wider rounded text-center flex items-center justify-center gap-2 border ${exosuitTab === "electronics"
                    ? "bg-blue-950/40 text-blue-400 border-blue-500/30 shadow-sm"
                    : "text-slate-400 border-transparent hover:text-slate-200 hover:bg-slate-900/40"
                    }`}
                >
                  <svg className="w-auto h-auto self-stretch shrink-0 max-h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
                  </svg>
                  <span className="hidden sm:inline">Electronics & Control</span>
                  <span className="sm:hidden">Control</span>
                </button>
              </div>

              {/* Viewport Frame Panel */}
              <div className="glass-panel border-t-0 border-slate-800 rounded-b-lg p-5 flex-grow flex flex-col justify-between min-h-[380px]">

                {/* Content based on active tab */}
                <div className="flex-grow flex flex-col justify-center">

                  {/* TAB 1: CAD IMAGES */}
                  {exosuitTab === "cad" && (
                    <div>
                      <div className="flex flex-col gap-6 max-w-md mx-auto">
                        <div
                          onClick={() => setModalImage({ src: "/Exosuit/Images/Exoarm.png", alt: "Exosuit Complete CAD Assembly" })}
                          className="group relative aspect-[4/3] w-full rounded overflow-hidden border border-slate-800 cursor-zoom-in hover:border-blue-500/40 transition-all shadow"
                        >
                          <Image
                            src="/Exosuit/Images/Exoarm.png"
                            alt="Exosuit Complete CAD Assembly"
                            width={500}
                            height={375}
                            className="w-full h-full object-cover block group-hover:scale-[1.02] transition-transform duration-300 animate-fadeIn"
                          />
                          <div className="absolute bottom-2 left-2 bg-slate-950/80 text-[10px] text-blue-400 font-mono px-2 py-0.5 rounded border border-blue-500/10">
                            3D SOLID MODEL ASSEMBLY
                          </div>
                        </div>

                        <div
                          onClick={() => setModalImage({ src: "/Exosuit/Images/Final_Ver.png", alt: "Exosuit Assembly Exploded Drawing Blueprint" })}
                          className="group relative aspect-[4/3] w-full rounded overflow-hidden border border-slate-800 cursor-zoom-in hover:border-blue-500/40 transition-all shadow"
                        >
                          <Image
                            src="/Exosuit/Images/Final_Ver.png"
                            alt="Exosuit Assembly Exploded Drawing Blueprint"
                            width={500}
                            height={375}
                            className="w-full h-full object-cover block group-hover:scale-[1.02] transition-transform duration-300 animate-fadeIn"
                          />
                          <div className="absolute bottom-2 left-2 bg-slate-950/80 text-[10px] text-blue-400 font-mono px-2 py-0.5 rounded border border-blue-500/10">
                            EXPLODED DRAWING BLUEPRINT
                          </div>
                        </div>
                      </div>
                      <p className="text-[10px] sm:text-xs text-slate-400 font-sans text-center mt-4">
                        💡 Click on any viewport screen above to expand full high-resolution blueprint drawing.
                      </p>
                    </div>
                  )}

                  {/* TAB 2: CUSTOM LINKAGES */}
                  {exosuitTab === "kinematics" && (
                    <div>
                      <div className="flex flex-col gap-6 max-w-md mx-auto">
                        <div
                          onClick={() => setModalImage({ src: "/Exosuit/Images/Custom Ball Bearing Raceway.png", alt: "Custom Bevel Gear & Ball Bearing Raceway" })}
                          className="group relative aspect-[4/3] w-full rounded overflow-hidden border border-slate-800 cursor-zoom-in hover:border-blue-500/40 transition-all shadow"
                        >
                          <Image
                            src="/Exosuit/Images/Custom Ball Bearing Raceway.png"
                            alt="Custom Bevel Gear & Ball Bearing Raceway"
                            width={500}
                            height={375}
                            className="w-full h-full object-cover block group-hover:scale-[1.02] transition-transform duration-300 animate-fadeIn"
                          />
                          <div className="absolute bottom-2 left-2 bg-slate-950/80 text-[10px] text-blue-400 font-mono px-2 py-0.5 rounded border border-blue-500/10">
                            BEVEL GEAR & RACEWAY INTEGRATION
                          </div>
                        </div>

                        <div
                          onClick={() => setModalImage({ src: "/Exosuit/Images/Suspended Ball Bearing Assembly.png", alt: "Suspended Dual-Row Slewing Ring Bearing Assembly" })}
                          className="group relative aspect-[4/3] w-full rounded overflow-hidden border border-slate-800 cursor-zoom-in hover:border-blue-500/40 transition-all shadow"
                        >
                          <Image
                            src="/Exosuit/Images/Suspended Ball Bearing Assembly.png"
                            alt="Suspended Dual-Row Slewing Ring Bearing Assembly"
                            width={500}
                            height={375}
                            className="w-full h-full object-cover block group-hover:scale-[1.02] transition-transform duration-300 animate-fadeIn"
                          />
                          <div className="absolute bottom-2 left-2 bg-slate-950/80 text-[10px] text-blue-400 font-mono px-2 py-0.5 rounded border border-blue-500/10">
                            SUSPENDED SLEWING BEARING DESIGN
                          </div>
                        </div>
                      </div>
                      <p className="text-[10px] sm:text-xs text-slate-400 font-sans text-center mt-4">
                        💡 Click on any viewport screen above to expand full high-resolution mechanical blueprint.
                      </p>
                    </div>
                  )}

                  {/* TAB 3: PHYSICAL & VIDEO */}
                  {exosuitTab === "physical" && (
                    <div className="flex flex-col items-center">
                      <div className="w-full max-w-[640px] rounded-lg overflow-hidden border border-blue-500/20 bg-black shadow-inner relative flex items-center justify-center p-1.5">
                        <video
                          src="/Exosuit/Exoarm Demo.MOV"
                          autoPlay
                          loop
                          muted
                          playsInline
                          className="w-full h-auto max-h-[340px] object-contain rounded"
                        />
                        <div className="absolute top-4 right-4 bg-blue-500/80 text-[10px] text-white font-mono px-2.5 py-0.5 rounded border border-blue-400/30 animate-pulse uppercase tracking-wider">
                          SYS TELEMETRY FEED
                        </div>
                      </div>
                      <div className="mt-4 text-xs text-slate-300 font-sans text-center max-w-[580px] leading-relaxed">
                        <strong>Telemetry Demonstration:</strong> Looping dynamic 5-axis articulation testing demonstrating coordinate tracking feedback and structural linkage response under low-friction rotational operation.
                      </div>
                    </div>
                  )}

                  {/* TAB 4: ELECTRONICS */}
                  {exosuitTab === "electronics" && (
                    <div className="flex flex-col items-center justify-center h-full gap-6 px-2">
                      <div className="w-full max-w-[640px] rounded-lg overflow-hidden border border-slate-800 bg-slate-950/60 p-6 shadow-inner relative mt-4">
                        <div className="absolute top-0 right-0 bg-blue-500/10 text-[9px] text-blue-400 font-mono px-2 py-1 rounded-bl border-b border-l border-blue-500/20 uppercase">
                          System Architecture
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 items-stretch">
                          <div className="space-y-4">
                            <div>
                              <h4 className="text-sm font-bold text-white uppercase flex items-center gap-2 mb-1">
                                <span className="h-1.5 w-1.5 rounded-full bg-cyan-500 shadow-[0_0_5px_#06b6d4]"></span>
                                ESP32 Microcontroller
                              </h4>
                              <p className="text-xs text-slate-400 font-sans leading-relaxed">
                                Serves as the central processing unit for both the transmitter arm and the receiver system. The complex C++ control logic, handling direct joint angle mapping, telemetry data processing, and safety limit enforcement, was programmed with the assistance of Google Gemini.
                              </p>
                            </div>
                            <div>
                              <h4 className="text-sm font-bold text-white uppercase flex items-center gap-2 mb-1">
                                <span className="h-1.5 w-1.5 rounded-full bg-indigo-500 shadow-[0_0_5px_#6366f1]"></span>
                                Waveshare Serial Driver
                              </h4>
                              <p className="text-xs text-slate-400 font-sans leading-relaxed">
                                The ESP32 connects via UART to a Waveshare serial bus servo driver board. This board acts as the interface bridging the microcontroller logic to the daisy-chained Waveshare ST3215 high-torque (30kg.cm) servos for precise 5-axis articulation.
                              </p>
                            </div>
                            <div>
                              <h4 className="text-sm font-bold text-white uppercase flex items-center gap-2 mb-1">
                                <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 shadow-[0_0_5px_#10b981]"></span>
                                Power Delivery
                              </h4>
                              <p className="text-xs text-slate-400 font-sans leading-relaxed">
                                A single 12V 3S LiPo battery powers the entire system. It connects directly to the Waveshare driver board to handle high-current servo actuation, while a buck converter safely steps down the voltage to power the ESP32 logic.
                              </p>
                            </div>
                          </div>

                          <div className="flex flex-col items-center justify-center border border-slate-800/80 rounded bg-black/40 p-4 h-full">
                            <div className="text-center w-full">
                              <div className="border border-cyan-500/30 bg-cyan-950/30 text-cyan-400 text-xs font-mono py-2 px-4 rounded mb-2 shadow-[0_0_10px_rgba(6,182,212,0.1)] inline-block">
                                ESP32 CORE
                              </div>
                              <div className="flex justify-center my-1 text-slate-600">
                                <svg className="w-4 h-4 animate-pulse" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16V4m0 0L3 8m4-4l4 4m6 0v12m0 0l4-4m-4 4l-4-4" /></svg>
                              </div>
                              <div className="text-[9px] text-slate-500 font-mono mb-1">UART CONNECTION</div>
                              <div className="border border-indigo-500/30 bg-indigo-950/30 text-indigo-400 text-xs font-mono py-2 px-4 rounded mb-2 shadow-[0_0_10px_rgba(99,102,241,0.1)] inline-block">
                                WAVESHARE DRIVER
                              </div>
                              <div className="flex justify-center my-1 text-slate-600">
                                <svg className="w-4 h-4 animate-pulse" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16V4m0 0L3 8m4-4l4 4m6 0v12m0 0l4-4m-4 4l-4-4" /></svg>
                              </div>
                              <div className="text-[9px] text-slate-500 font-mono mb-1">TTL SERIAL BUS DAISY CHAIN</div>
                              <div className="border border-blue-500/30 bg-blue-950/30 text-blue-400 text-xs font-mono py-2 px-4 rounded mt-2 shadow-[0_0_10px_rgba(59,130,246,0.1)] inline-block w-full">
                                ST3215 SERVOS
                                <div className="flex justify-center gap-2 mt-2">
                                  <span className="w-2 h-2 rounded-full bg-blue-400"></span>
                                  <span className="w-2 h-2 rounded-full bg-blue-400"></span>
                                  <span className="w-2 h-2 rounded-full bg-blue-400"></span>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>

                      <p className="text-xs text-slate-300 font-sans text-center max-w-[580px] leading-relaxed">
                        <strong>Mechatronic Integration:</strong> The serial bus topology minimizes wiring complexity through the mechanical linkages while maintaining real-time telemetry from each joint for closed-loop coordinate tracking.
                      </p>
                    </div>
                  )}

                </div>

                {/* Engineering HUD status footer */}
                <div className="border-t border-slate-800/80 mt-6 pt-4 flex flex-wrap justify-between items-center text-[10px] text-blue-400">
                  <div className="flex items-center gap-1.5">
                    <span className="h-1.5 w-1.5 rounded-full bg-blue-500 led-active" />
                    <span>VIEWPORT // DYNAMIC_FEED_01</span>
                  </div>
                  <div>AUTODESK INVENTOR V2026.0</div>
                </div>

              </div>

            </div>

          </div>

        </section>

        {/* ==========================================================
            SECTION 2: PRODUCT DESIGN - GAS SPRING STAND
            ========================================================== */}
        <section id="phone-stand" className="mb-14">

          {/* Section Header */}
          <div className="flex items-center gap-4 mb-6 border-b border-blue-500/20 pb-3">
            <div className="p-2.5 bg-blue-950/30 border border-blue-500/30 rounded-md">
              <svg className="w-6 h-6 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 6h16M4 10h12M4 14h8M4 18h16" />
              </svg>
            </div>
            <div>
              <h2 className="text-xl sm:text-2xl font-bold tracking-tight text-white uppercase">
                02 // Product Design & Hardware Integration
              </h2>
              <p className="text-xs text-blue-400 font-medium">MECHANICAL DRAFTING, ANALYSIS & HARDWARE ASSEMBLY</p>
            </div>
          </div>

          {/* Project Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">

            {/* Left: Project Specs and Notes */}
            <div className="lg:col-span-5 flex flex-col justify-between gap-6">

              {/* Core Details */}
              <div className="glass-panel border border-slate-800 rounded-lg p-6 hover:border-blue-500/10 transition-all flex-grow">
                <div className="flex justify-between items-center mb-4 border-b border-slate-800 pb-2">
                  <h3 className="font-bold text-white text-base sm:text-lg">
                    Heavy-Duty Gas Spring Phone Stand
                  </h3>
                  <span className="text-[10px] tracking-wider text-blue-400 bg-blue-500/10 border border-blue-500/20 px-2 py-0.5 rounded uppercase">
                    Solid Design
                  </span>
                </div>

                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-sans mb-6">
                  Engineered an adjustable structural parallel-arm linkage smartphone/tablet stand integrated with a gas spring cylinder to enable smooth vertical displacement, heavy loading capacity, and variable multi-angle viewing versatility.
                </p>

                {/* Bullets */}
                <ul className="space-y-3 text-xs sm:text-sm text-slate-300 font-sans mb-6">
                  <li className="flex items-start gap-2.5">
                    <span className="mt-1 h-1.5 w-1.5 flex-shrink-0 bg-blue-500 rounded-sm" />
                    <span><strong>Gas Cylinder Integration:</strong> Calibrated mechanical kinematics with a gas spring cylinder featuring 60 degrees of rotation to assist in smooth height adjustments.</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <span className="mt-1 h-1.5 w-1.5 flex-shrink-0 bg-blue-500 rounded-sm" />
                    <span><strong>Adjustable Clamp Sub-assembly:</strong> Designed a robust C-clamp mounting bracket configured to secure rigidly to table surfaces spanning 9.0 mm to 75.0 mm thick.</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <span className="mt-1 h-1.5 w-1.5 flex-shrink-0 bg-blue-500 rounded-sm" />
                    <span><strong>Multi-Axis Articulation:</strong> Combined dual-ended joint inserts and low-friction hinges to provide expanded horizontal sweep, tilt-swivel adjustments, and precise angular orientation.</span>
                  </li>
                </ul>

                {/* Engineering Blueprint Drawers - PDF Documents */}
                <div className="mt-2 p-4 bg-slate-950/60 rounded border border-slate-800">
                  <span className="text-[9px] text-blue-400 font-bold uppercase block mb-3">// STRUCTURAL BLUEPRINTS VAULT (PDF)</span>
                  <div className="flex flex-col gap-2">
                    <a
                      href="/Gas Spring Phone Stand/Documents/MEP - Gas Spring Final Assembly.pdf"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex justify-between items-center text-xs p-2.5 rounded bg-slate-900/50 border border-slate-800 hover:border-blue-500/30 hover:bg-slate-900 transition-all"
                    >
                      <span className="flex items-center gap-2 text-slate-200">
                        <span>📋</span>
                        <span className="font-sans font-medium">Complete System Assembly</span>
                      </span>
                      <span className="text-[9px] text-blue-400 font-bold border border-blue-500/20 px-1.5 py-0.5 rounded bg-blue-500/5">VIEW PACK</span>
                    </a>
                    <a
                      href="/Gas Spring Phone Stand/Documents/MEP - Gas Spring Assembly.pdf"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex justify-between items-center text-xs p-2.5 rounded bg-slate-900/50 border border-slate-800 hover:border-blue-500/30 hover:bg-slate-900 transition-all"
                    >
                      <span className="flex items-center gap-2 text-slate-200">
                        <span>⚙️</span>
                        <span className="font-sans font-medium">Gas Spring Sub-Assembly</span>
                      </span>
                      <span className="text-[9px] text-blue-400 font-bold border border-blue-500/20 px-1.5 py-0.5 rounded bg-blue-500/5">VIEW DWG</span>
                    </a>
                    <a
                      href="/Gas Spring Phone Stand/Documents/MEP - Desk Clamp Assembly.pdf"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex justify-between items-center text-xs p-2.5 rounded bg-slate-900/50 border border-slate-800 hover:border-blue-500/30 hover:bg-slate-900 transition-all"
                    >
                      <span className="flex items-center gap-2 text-slate-200">
                        <span>🗜️</span>
                        <span className="font-sans font-medium">Desk C-Clamp Bracket</span>
                      </span>
                      <span className="text-[9px] text-blue-400 font-bold border border-blue-500/20 px-1.5 py-0.5 rounded bg-blue-500/5">VIEW DWG</span>
                    </a>
                  </div>
                </div>
              </div>

              {/* Specification Table */}
              <div className="glass-panel border border-slate-800 rounded-lg p-5">
                <span className="text-[10px] tracking-wider text-blue-400 uppercase font-bold block mb-3">// TECHNICAL SPECIFICATIONS DATASHEET</span>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-2.5 text-xs">
                  {standSpecs.map((spec, idx) => (
                    <div key={idx} className="border-b border-slate-800/60 pb-1.5">
                      <div className="text-[9px] text-slate-400 uppercase tracking-tight">{spec.label}</div>
                      <div className="text-slate-200 font-sans font-medium leading-normal mt-0.5">{spec.value}</div>
                    </div>
                  ))}
                </div>
              </div>

            </div>

            {/* Right: Stateful Workspace Tabs / Visualizer */}
            <div className="lg:col-span-7 flex flex-col">

              {/* Tab Navigation */}
              <div className="flex border-b border-slate-800 bg-slate-950/40 rounded-t-lg p-1.5 gap-1.5">
                <button
                  onClick={() => setStandTab("assembly")}
                  className={`flex-1 py-2 px-3 text-xs font-bold transition-all uppercase tracking-wider rounded text-center flex items-center justify-center gap-2 border ${standTab === "assembly"
                    ? "bg-blue-950/40 text-blue-400 border-blue-500/30 shadow-sm"
                    : "text-slate-400 border-transparent hover:text-slate-200 hover:bg-slate-900/40"
                    }`}
                >
                  <svg className="w-auto h-auto self-stretch shrink-0 max-h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                  <span className="hidden sm:inline">Assembly Blueprint</span>
                  <span className="sm:hidden">Assembly</span>
                </button>
                <button
                  onClick={() => setStandTab("clamp")}
                  className={`flex-1 py-2 px-3 text-xs font-bold transition-all uppercase tracking-wider rounded text-center flex items-center justify-center gap-2 border ${standTab === "clamp"
                    ? "bg-blue-950/40 text-blue-400 border-blue-500/30 shadow-sm"
                    : "text-slate-400 border-transparent hover:text-slate-200 hover:bg-slate-900/40"
                    }`}
                >
                  <svg className="w-auto h-auto self-stretch shrink-0 max-h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                  </svg>
                  <span className="hidden sm:inline">C-Clamp Subassembly</span>
                  <span className="sm:hidden">C-Clamp</span>
                </button>
                <button
                  onClick={() => setStandTab("physical")}
                  className={`flex-1 py-2 px-3 text-xs font-bold transition-all uppercase tracking-wider rounded text-center flex items-center justify-center gap-2 border ${standTab === "physical"
                    ? "bg-blue-950/40 text-blue-400 border-blue-500/30 shadow-sm"
                    : "text-slate-400 border-transparent hover:text-slate-200 hover:bg-slate-900/40"
                    }`}
                >
                  <svg className="w-auto h-auto self-stretch shrink-0 max-h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 13a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  <span className="hidden sm:inline">Physical Prototype</span>
                  <span className="sm:hidden">Photo</span>
                </button>
              </div>

              {/* Viewport Frame Panel */}
              <div className="glass-panel border-t-0 border-slate-800 rounded-b-lg p-5 flex-grow flex flex-col justify-between min-h-[380px]">

                {/* Content based on active tab */}
                <div className="flex-grow flex flex-col justify-center">

                  {/* TAB 1: ASSEMBLY BLUEPRINT */}
                  {standTab === "assembly" && (
                    <div className="flex flex-col items-center">
                      <div
                        onClick={() => setModalImage({ src: "/Gas Spring Phone Stand/Images/MEP - Gas Spring Assembly.png", alt: "CAD Assembly Drawing Blueprint" })}
                        className="group relative w-full rounded overflow-hidden border border-slate-800 cursor-zoom-in hover:border-blue-500/40 transition-all shadow"
                      >
                        <Image
                          src="/Gas Spring Phone Stand/Images/MEP - Gas Spring Assembly.png"
                          alt="CAD Assembly Drawing Blueprint"
                          width={800}
                          height={600}
                          className="w-full h-auto block group-hover:opacity-95 transition-opacity"
                        />
                        <div className="absolute bottom-2 left-2 bg-slate-950/80 text-[10px] text-blue-400 font-mono px-2 py-0.5 rounded border border-blue-500/10">
                          PARALLEL LINKAGE BLUEPRINT DRAFT
                        </div>
                      </div>
                      <p className="text-[10px] sm:text-xs text-slate-400 font-sans text-center mt-4">
                        💡 Click drafting drawing above to view full high-resolution blueprint.
                      </p>
                    </div>
                  )}

                  {/* TAB 2: C-CLAMP SUBASSEMBLY */}
                  {standTab === "clamp" && (
                    <div className="flex flex-col items-center">
                      <div
                        onClick={() => setModalImage({ src: "/Gas Spring Phone Stand/Images/Desk Clamp Assembly.png", alt: "CAD Complete System Blueprint" })}
                        className="group relative w-full rounded overflow-hidden border border-slate-800 cursor-zoom-in hover:border-blue-500/40 transition-all shadow"
                      >
                        <Image
                          src="/Gas Spring Phone Stand/Images/Desk Clamp Assembly.png"
                          alt="CAD Complete System Blueprint"
                          width={800}
                          height={600}
                          className="w-full h-auto block group-hover:opacity-95 transition-opacity"
                        />
                        <div className="absolute bottom-2 left-2 bg-slate-950/80 text-[10px] text-blue-400 font-mono px-2 py-0.5 rounded border border-blue-500/10">
                          C-CLAMP BRACKET SCHEMATIC
                        </div>
                      </div>
                      <p className="text-[10px] sm:text-xs text-slate-400 font-sans text-center mt-4">
                        💡 Click blueprint draft above to view full high-resolution document.
                      </p>
                    </div>
                  )}

                  {/* TAB 3: PHYSICAL SmartPhone PHOTO */}
                  {standTab === "physical" && (
                    <div className="flex flex-col md:flex-row gap-6 items-center">
                      <div
                        onClick={() => setModalImage({ src: "/Gas Spring Phone Stand/Images/Gas Spring Phone Stand.jpg", alt: "Functional Assembly Photo Profile" })}
                        className="group relative w-full md:w-1/2 max-w-[280px] rounded overflow-hidden border border-slate-800 cursor-zoom-in hover:border-blue-500/40 transition-all shadow flex items-center justify-center mx-auto"
                      >
                        <Image
                          src="/Gas Spring Phone Stand/Images/Gas Spring Phone Stand.jpg"
                          alt="Functional Assembly Photo Profile"
                          width={380}
                          height={500}
                          className="w-full h-auto block group-hover:scale-[1.02] transition-transform duration-300"
                        />
                        <div className="absolute bottom-2 left-2 bg-slate-950/80 text-[10px] text-blue-400 font-mono px-2 py-0.5 rounded border border-blue-500/10">
                          FABRICATED STAND PROFILE
                        </div>
                      </div>
                      <div className="w-full md:w-1/2 flex flex-col justify-center">
                        <span className="text-[10px] text-blue-400 font-bold uppercase tracking-wider block mb-2">// PHYSICAL PROTOTYPE SYSTEM</span>
                        <h4 className="text-sm font-bold text-white uppercase mb-2">3D Print Hardware Synthesis</h4>
                        <p className="text-xs text-slate-300 font-sans leading-relaxed">
                          The actual physical prototype features a high-density, multi-layer PETG structural shell. Tolerances inside pivot linkages were held to +0.15/-0.00 mm to ensure smooth, slide-fit structural integrity and low vibration during height adjustments.
                        </p>
                      </div>
                    </div>
                  )}

                </div>

                {/* Engineering HUD status footer */}
                <div className="border-t border-slate-800/80 mt-6 pt-4 flex flex-wrap justify-between items-center text-[10px] text-blue-400">
                  <div className="flex items-center gap-1.5">
                    <span className="h-1.5 w-1.5 rounded-full bg-blue-500 led-active" />
                    <span>VIEWPORT // TECH_DRAWINGS_02</span>
                  </div>
                  <div>AUTODESK INVENTOR V2026.0</div>
                </div>

              </div>

            </div>

          </div>

        </section>

        {/* ==========================================================
            SECTION 3: TECHNICAL COMPETENCIES / SKILLS GRID
            ========================================================== */}
        <section className="mb-8">

          {/* Section Header */}
          <div className="flex items-center gap-4 mb-6 border-b border-blue-500/20 pb-3">
            <div className="p-2.5 bg-blue-950/30 border border-blue-500/30 rounded-md">
              <svg className="w-6 h-6 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
              </svg>
            </div>
            <div>
              <h2 className="text-xl sm:text-2xl font-bold tracking-tight text-white uppercase">
                03 // Technical Skillsets & Tools
              </h2>
              <p className="text-xs text-blue-400 font-medium">ENGINEERING WORKFLOWS, CAD/CAM & MANUFACTURING PROCESSES</p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

            {/* Core CAD/CAM Card */}
            <div className="glass-panel border border-slate-800 rounded-lg p-5">
              <div className="flex justify-between items-center mb-3 pb-2 border-b border-slate-800">
                <h4 className="text-sm font-bold text-white uppercase tracking-tight">3D CAD Modeling & Kinematics</h4>
                <span className="text-[9px] text-blue-400 font-bold border border-blue-500/20 px-1.5 rounded">01</span>
              </div>
              <ul className="space-y-2 text-xs font-sans text-slate-300">
                <li className="flex justify-between">
                  <span>Autodesk Inventor</span>
                  <span className="text-blue-400 font-bold font-mono">Proficient</span>
                </li>
                <li className="flex justify-between">
                  <span>SolidWorks</span>
                  <span className="text-blue-400 font-bold font-mono">Proficient</span>
                </li>
                <li className="flex justify-between">
                  <span>Kinematic Linkage Design</span>
                  <span className="text-blue-400 font-bold font-mono">Advanced</span>
                </li>
                <li className="flex justify-between">
                  <span>2D Engineering Blueprints</span>
                  <span className="text-blue-400 font-bold font-mono">Proficient</span>
                </li>
              </ul>
            </div>

            {/* Core Manufacturing Card */}
            <div className="glass-panel border border-slate-800 rounded-lg p-5">
              <div className="flex justify-between items-center mb-3 pb-2 border-b border-slate-800">
                <h4 className="text-sm font-bold text-white uppercase tracking-tight">Prototyping & Fabrication</h4>
                <span className="text-[9px] text-blue-400 font-bold border border-blue-500/20 px-1.5 rounded">02</span>
              </div>
              <ul className="space-y-2 text-xs font-sans text-slate-300">
                <li className="flex justify-between">
                  <span>FDM 3D Printing</span>
                  <span className="text-blue-400 font-bold font-mono">PLA, PETG, TPU</span>
                </li>
                <li className="flex justify-between">
                  <span>Tolerancing & Fits</span>
                  <span className="text-blue-400 font-bold font-mono">Clearance & Press for FDM</span>
                </li>
                <li className="flex justify-between">
                  <span>CAM / Slicing Platforms</span>
                  <span className="text-blue-400 font-bold font-mono">Cura, Bambu Studio</span>
                </li>
                <li className="flex justify-between">
                  <span>Hardware Assembly</span>
                  <span className="text-blue-400 font-bold font-mono">Proficient</span>
                </li>
              </ul>
            </div>

            {/* Core Methodologies Card */}
            <div className="glass-panel border border-slate-800 rounded-lg p-5">
              <div className="flex justify-between items-center mb-3 pb-2 border-b border-slate-800">
                <h4 className="text-sm font-bold text-white uppercase tracking-tight">Engineering Analysis</h4>
                <span className="text-[9px] text-blue-400 font-bold border border-blue-500/20 px-1.5 rounded">03</span>
              </div>
              <ul className="space-y-2 text-xs font-sans text-slate-300">
                <li className="flex justify-between">
                  <span>Stress Analysis</span>
                  <span className="text-blue-400 font-bold font-mono">Autodesk Inventor FEA</span>
                </li>
                <li className="flex justify-between">
                  <span>Bill of Materials (BOM)</span>
                  <span className="text-blue-400 font-bold font-mono">Detailed Synthesis</span>
                </li>
                <li className="flex justify-between">
                  <span>GD&T Standards</span>
                  <span className="text-blue-400 font-bold font-mono">Basic Application</span>
                </li>
                <li className="flex justify-between">
                  <span>Kinematic Simulation</span>
                  <span className="text-blue-400 font-bold font-mono">Contact Joints and Gears</span>
                </li>
              </ul>
            </div>

          </div>

        </section>

      </div>

      {/* ==========================================================
          FOOTER PANEL
          ========================================================== */}
      <footer className="w-full mt-10 py-6 border-t border-slate-800/80 relative z-10">
        <div className="max-w-[1200px] mx-auto w-full px-4 sm:px-6 flex flex-col sm:flex-row justify-between items-center gap-4 text-slate-500 text-[10px]">
          <div>
            © {new Date().getFullYear()} DEREK LI // ALL RIGHTS RESERVED.
          </div>
          <div className="flex items-center gap-2 text-blue-500/50 uppercase tracking-widest font-bold">
            <span className="h-1.5 w-1.5 rounded-full bg-blue-500/60 led-active" />
            <span>FABRICATING DESIGN // DRAFTING SOLUTIONS</span>
          </div>
        </div>
      </footer>

      {/* ==========================================================
          HIGH-FIDELITY BLUEPRINT MODAL VISUALIZER (IMAGE EXPANDER)
          ========================================================== */}
      {modalImage && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-md p-4 transition-all duration-300 animate-fadeIn"
          onClick={() => setModalImage(null)}
        >
          {/* Close button */}
          <button
            className="absolute top-4 right-4 text-slate-400 hover:text-white bg-slate-900/60 border border-slate-800 hover:border-slate-600 rounded-full p-2.5 transition-all"
            onClick={() => setModalImage(null)}
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>

          {/* Blueprint Inner Frame with coordinate grid marks */}
          <div
            className="relative max-w-[90vw] max-h-[85vh] rounded-md border-2 border-blue-500/40 p-1.5 bg-white shadow-2xl flex flex-col animate-scaleUp"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Blueprint Grid Coordinates ticks on image frame */}
            <div className="absolute top-0 inset-x-0 h-4 border-b border-blue-500/10 flex justify-between px-6 text-[8px] text-blue-500/40 pointer-events-none">
              <span>A</span><span>B</span><span>C</span><span>D</span><span>E</span><span>F</span>
            </div>

            <div className="overflow-auto max-h-[80vh] bg-white flex items-center justify-center p-2 rounded">
              <img
                src={modalImage.src}
                alt={modalImage.alt}
                className="max-w-full max-h-[75vh] object-contain rounded-sm"
              />
            </div>

            {/* Modal Footer Label */}
            <div className="w-full mt-2 pt-2 border-t border-slate-200 flex justify-between items-center text-[10px] text-slate-500 font-mono">
              <div className="flex items-center gap-1.5">
                <span className="h-1.5 w-1.5 rounded-full bg-blue-500" />
                <span className="font-bold text-slate-700 uppercase">SYS EXPANDED // {modalImage.alt}</span>
              </div>
              <div className="text-slate-400">PRESS OUTSIDE TO EXIT</div>
            </div>
          </div>
        </div>
      )}
    </main>
  );
}
