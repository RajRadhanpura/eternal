"use client";
import { useEffect } from "react";
import gsap from "gsap";

export default function Loader() {
  useEffect(() => {
    const onesColumn = document.querySelector(".third-counter");
    const tensColumn = document.querySelector(".second-counter");
    const hundredsColumn = document.querySelector(".first-counter");

    if (!onesColumn || !tensColumn || !hundredsColumn) return;

    function buildColumn(counterEl, digits) {
      counterEl.innerHTML = "";
      for (const d of digits) {
        const div = document.createElement("div");
        div.className = "num";
        div.textContent = d;
        counterEl.appendChild(div);
      }
      const tail = document.createElement("div");
      tail.className = "num";
      tail.textContent = digits[0];
      counterEl.appendChild(tail);
    }

    buildColumn(hundredsColumn, [0, 1]);
    buildColumn(tensColumn, [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]);
    buildColumn(onesColumn, [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]);

    const digitHeight =
      onesColumn.querySelector(".num")?.getBoundingClientRect().height || 0;
    if (!digitHeight) return;

    const path = document.querySelector(".inf-path");
    let pathLength = 0;

    if (path) {
      pathLength = path.getTotalLength();
      gsap.set(path, {
        strokeDasharray: pathLength,
        strokeDashoffset: pathLength,
        fill: "none",
      });
    }

    const setOnesY = gsap.quickSetter(onesColumn, "y", "px");
    const setTensY = gsap.quickSetter(tensColumn, "y", "px");
    const setHundredsY = gsap.quickSetter(hundredsColumn, "y", "px");
    const setDash = path
      ? gsap.quickSetter(path, "strokeDashoffset", "px")
      : null;

    const progress = { value: 0 };
    const MASTER_DURATION = 5;

    function render(v) {
      const clamped = gsap.utils.clamp(0, 100, v);
      const ones = clamped % 10;
      const tens = (clamped / 10) % 10;
      const hundreds = clamped / 100;

      setOnesY(-ones * digitHeight);
      setTensY(-tens * digitHeight);
      setHundredsY(-hundreds * digitHeight);

      if (setDash && pathLength) {
        setDash(pathLength * (1 - clamped / 100));
      }
    }

    const tl = gsap.timeline();

    render(0);

    tl.to(progress, {
      value: 100,
      duration: MASTER_DURATION,
      ease: "power3.inOut",
      onUpdate: () => render(progress.value),
      onStart: () => render(0),
    });

    tl.to(".chrono-counter", {
      y: -150,
      opacity: 0,
      duration: 0.7,
      ease: "power4.inOut",
    });

    tl.to(".loader", { background: "none", duration: 0.1 });
    tl.to(".loader", {
      scale: 80,
      duration: 1,
      ease: "power4.inOut",
    });

    // tl.to(".loading", {
    //   opacity: 0,
    //   duration: 0.6,
    //   onComplete: () => {
    //     document.querySelector(".loading")?.classList.add("not-active");
    //   },
    // });
    tl.to(".loading", {
      opacity: 0,
      duration: 0.6,
      onComplete: () => {
        const loader = document.querySelector(".loading");
        if (loader) {
          loader.style.display = "none"; // 👈 fully removes overlay
        }
      },
    });

    return () => {
      tl.kill();
    };
  }, []);

  return (
    <div className="loading">
      <div className="loader">
        <svg
          className="infinity"
          viewBox="0 0 15478.62 15165"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
        >
          <path
            className="inf-path"
            d="M4408.36 7203.6l1272.59 20.52c328.4,-20.52 738.92,20.52 779.96,431.04 20.52,123.16 0,246.3 -102.62,348.94 -143.68,164.2 -369.46,184.72 -595.24,205.25l0 0 -1334.16 0 0 0c-1067.33,-123.15 -1826.77,-266.83 -2709.37,-964.7 -821.02,-656.82 -1436.79,-1580.46 -1642.04,-2647.79 -184.73,-923.64 -41.06,-1929.4 451.56,-2770.94 410.5,-677.34 1005.74,-1211 1724.14,-1518.89 1169.96,-492.61 2524.64,-369.46 3612.49,205.26 1026.28,554.19 1724.14,1395.74 2093.6,2504.11 287.36,862.07 328.41,1744.67 328.41,2627.27l-102.63 3263.55 0 0c0,205.26 20.53,431.04 0,636.29 0,1457.3 102.63,2709.36 1231.53,3735.64 903.12,821.02 2257.81,1149.43 3427.77,677.34 574.71,-246.3 1026.27,-656.82 1313.62,-1211 184.73,-328.41 287.36,-697.87 328.41,-1067.33 143.68,-1477.84 -800.5,-2873.57 -2134.65,-3427.76 -205.26,-102.62 -389.98,-184.73 -389.98,-513.14 0,-266.84 225.78,-492.62 492.61,-492.62 123.16,0 184.73,20.53 184.73,41.06 410.5,143.68 800.5,369.46 1190.48,677.34 821.02,656.82 1395.74,1600.99 1580.46,2647.79 164.21,903.12 41.06,1908.87 -451.56,2729.89 -595.24,944.18 -1477.84,1580.46 -2565.69,1765.19 -944.17,164.2 -1949.92,-20.52 -2770.94,-472.09 -1026.28,-554.18 -1724.14,-1375.2 -2093.6,-2483.58 -287.36,-841.55 -348.94,-1744.67 -328.41,-2647.79 20.52,-431.04 0,-862.07 20.52,-1293.11 41.06,-431.03 20.53,-882.6 41.06,-1313.62 20.52,-102.63 0,-205.26 0,-307.89 0,-123.15 20.52,-225.78 20.52,-328.4 20.53,-205.26 0,-431.04 0,-636.29 20.53,-677.34 -20.52,-1375.2 -184.72,-2011.5 -164.2,-656.82 -472.09,-1272.58 -985.23,-1703.62 -697.86,-595.24 -1539.4,-964.7 -2463.06,-923.64 -759.44,61.57 -1477.84,389.98 -1970.45,964.7 -738.92,821.02 -882.6,1908.86 -492.61,2894.09 554.18,1498.36 1662.56,2216.75 3222.5,2360.43z"
            fill="none"
          />
        </svg>
      </div>

      <div className="chrono-counter">
        <div className="first-counter counter">
          <div className="num">0</div>
          <div className="num num1offset1">1</div>
        </div>

        <div className="second-counter counter">
          {["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "0"].map(
            (n, i) => (
              <div key={i} className={`num ${i === 1 ? "num1offset2" : ""}`}>
                {n}
              </div>
            ),
          )}
        </div>

        <div className="third-counter counter">
          {["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "0"].map(
            (n, i) => (
              <div key={i} className={`num ${i === 1 ? "num1offset2" : ""}`}>
                {n}
              </div>
            ),
          )}
        </div>
      </div>
    </div>
  );
}
