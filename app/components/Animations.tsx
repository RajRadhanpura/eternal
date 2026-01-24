"use client";

import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function Animations() {
  useEffect(() => {
    // Register plugin safely
    gsap.registerPlugin(ScrollTrigger);

    /* =========================
       MEGA MENU
    ========================== */
    const menuBtn = document.getElementById("menuBtn");
    const megaMenu = document.getElementById("megaMenu");
    const menuPanel = document.getElementById("menuPanel");
    const menuClose = document.getElementById("menuClose");
    const menuBackdrop = document.getElementById("menuBackdrop");
    const menuItems = document.querySelectorAll("#megaMenu .menu-item");
    const labsBtn = document.querySelector("#megaMenu .labs-btn");

    if (
      !menuBtn ||
      !megaMenu ||
      !menuPanel ||
      !menuClose ||
      !menuBackdrop
    )
      return;

    const tl = gsap.timeline({ paused: true });

    gsap.set(megaMenu, { autoAlpha: 0, pointerEvents: "none" });

    tl.to(megaMenu, { autoAlpha: 1, pointerEvents: "auto", duration: 0 })
      .from(menuPanel, {
        y: 40,
        opacity: 0,
        duration: 0.36,
        ease: "power2.out",
      })
      .from(
        menuItems,
        { y: 12, opacity: 0, stagger: 0.06, duration: 0.22 },
        "-=0.2"
      )
      .from(labsBtn, { y: 12, opacity: 0, duration: 0.18 }, "-=0.2");

    const openMenu = () => tl.play(0);
    const closeMenu = () => tl.reverse();

    menuBtn.addEventListener("click", openMenu);
    menuClose.addEventListener("click", closeMenu);
    menuBackdrop.addEventListener("click", closeMenu);

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeMenu();
    };

    window.addEventListener("keydown", onKeyDown);

    tl.eventCallback("onReverseComplete", () => {
      gsap.set(megaMenu, { pointerEvents: "none" });
    });

    /* =========================
       HERO WORD SPLIT
    ========================== */
    const hero = document.getElementById("heroTitle");
    if (hero) {
      const words = hero.textContent?.trim().split(/\s+/) || [];
      hero.innerHTML = words
        .map(
          (w) => `<span class="hero-word inline-block mr-2">${w}</span>`
        )
        .join(" ");

      gsap.set(".hero-word", { y: 18, opacity: 0 });
      gsap.to(".hero-word", {
        y: 0,
        opacity: 1,
        stagger: 0.05,
        duration: 0.6,
        ease: "power3.out",
        delay: 0.18,
      });
    }

    /* =========================
       BIG HERO SCROLL
    ========================== */
    const bigSection = document.querySelector("section.min-h-screen");
    const firstLine = bigSection?.querySelector("h1");

    if (bigSection && firstLine) {
      gsap.to(firstLine, {
        x: "20%",
        ease: "power3.out",
        scrollTrigger: {
          trigger: bigSection,
          start: "top 70%",
          end: "bottom top",
        },
      });
    }

    /* =========================
       SHOWCASE REVEAL
    ========================== */
    const section = document.getElementById("showcase");
    const img = document.getElementById("showcaseImage");
    const content = document.getElementById("showcaseContent");

    if (section) {
      if (img) gsap.set(img, { y: -40, opacity: 0 });
      if (content) gsap.set(content, { y: 24, opacity: 0 });

      ScrollTrigger.create({
        trigger: section,
        start: "top 80%",
        onEnter: () => {
          const t = gsap.timeline();
          if (img)
            t.to(img, {
              y: 0,
              opacity: 1,
              duration: 0.8,
              ease: "power3.out",
            });
          if (content)
            t.to(
              content,
              {
                y: 0,
                opacity: 1,
                duration: 0.8,
                ease: "power3.out",
              },
              "-=0.5"
            );
        },
      });
    }

    /* =========================
       CLEANUP
    ========================== */
    return () => {
      window.removeEventListener("keydown", onKeyDown);
      ScrollTrigger.getAll().forEach((t) => t.kill());
      tl.kill();
    };
  }, []);

  return null; // this component only runs animations
}
