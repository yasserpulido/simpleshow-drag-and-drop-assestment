const useTest = (part, height, width) => {
  switch (part) {
    case "chest":
      if (width >= 1680) {
        return {
          part: {
            x: width / 2 + 244 * 0.9,
            y: height / 2 - 244 * 0.79,
            width: 244,
            height: 244,
            baseX: width / 2 + 244 * 0.9,
            baseY: height / 2 - 244 * 0.79,
          },
          container: {
            x: 587,
            y: 188,
            width: 244,
            height: 244,
          },
        };
      } else if (width >= 1280 && width < 1680) {
        return {
          part: {
            x: width / 2 + 200 * 0.8,
            y: height / 2 - 200 * 0.75,
            width: 200,
            height: 200,
            baseX: width / 2 + 200 * 0.8,
            baseY: height / 2 - 200 * 0.75,
          },
          container: {
            x: 475,
            y: 140,
            width: 200,
            height: 200,
          },
        };
      } else if (width >= 768 && width < 1280) {
        return {
          part: {
            x: width / 2 + 186 * 0.84,
            y: height / 2 - 186 * 0.74,
            width: 186,
            height: 186,
            baseX: width / 2 + 186 * 0.84,
            baseY: height / 2 - 186 * 0.74,
          },
          container: {
            x: 346,
            y: 145,
            width: 186,
            height: 186,
          },
        };
      } else if (width > 412 && width < 768) {
        return {
          part: {
            x: width / 2 + 120 * 0.8,
            y: height / 2 - 120 * 0.77,
            width: 120,
            height: 120,
            baseX: width / 2 + 120 * 0.8,
            baseY: height / 2 - 120 * 0.77,
          },
          container: {
            x: 204,
            y: 220,
            width: 120,
            height: 120,
          },
        };
      } else {
        return {
          part: {
            x: width / 2 + 62 * 0.9,
            y: height / 2 - 62 * 0.78,
            width: 62,
            height: 62,
            baseX: width / 2 + 62 * 0.9,
            baseY: height / 2 - 62 * 0.78,
          },
          container: {
            x: 112,
            y: 390,
            width: 62,
            height: 62,
          },
        };
      }
    case "head":
      if (width >= 1680) {
        return {
          part: {
            x: width / 2 + 100 * 2.8,
            y: height / 2 + 130 * 0.2,
            width: 100,
            height: 130,
            baseX: width / 2 + 100 * 2.8,
            baseY: height / 2 + 130 * 0.2,
          },
          container: {
            x: 664,
            y: 90,
            width: 100,
            height: 130,
          },
        };
      } else if (width >= 1280 && width < 1680) {
        return {
          part: {
            x: width / 2 + 80 * 2.62,
            y: height / 2 + 100 * 0.2,
            width: 80,
            height: 100,
            baseX: width / 2 + 80 * 2.62,
            baseY: height / 2 + 100 * 0.2,
          },
          container: {
            x: 540,
            y: 70,
            width: 80,
            height: 100,
          },
        };
      } else if (width >= 768 && width < 1280) {
        return {
          part: {
            x: width / 2 + 80 * 2.25,
            y: height / 2 + 100 * 0.2,
            width: 68,
            height: 100,
            baseX: width / 2 + 80 * 2.25,
            baseY: height / 2 + 100 * 0.2,
          },
          container: {
            x: 395,
            y: 70,
            width: 68,
            height: 100,
          },
        };
      } else if (width > 412 && width < 768) {
        return {
          part: {
            x: width / 2 + 45 * 2.82,
            y: height / 2 + 60 * 0.2,
            width: 45,
            height: 60,
            baseX: width / 2 + 45 * 2.82,
            baseY: height / 2 + 60 * 0.2,
          },
          container: {
            x: 243,
            y: 185,
            width: 45,
            height: 60,
          },
        };
      } else {
        return {
          part: {
            x: width / 2 + 25 * 2.8,
            y: height / 2 + 30 * 0.2,
            width: 25,
            height: 30,
            baseX: width / 2 + 25 * 2.8,
            baseY: height / 2 + 30 * 0.2,
          },
          container: {
            x: 130,
            y: 365,
            width: 25,
            height: 30,
          },
        };
      }
    case "leftArm":
      if (width >= 1680) {
        return {
          part: {
            x: width / 2 + 110 * 4.22,
            y: height / 2 - 200 * 1.12,
            width: 110,
            height: 200,
            baseX: width / 2 + 110 * 4.22,
            baseY: height / 2 - 200 * 1.12,
          },
          container: {
            x: 520,
            y: 180,
            width: 100,
            height: 100,
          },
        };
      } else if (width >= 1280 && width < 1680) {
        return {
          part: {
            x: width / 2 + 84 * 4.26,
            y: height / 2 - 200 * 0.85,
            width: 84,
            height: 200,
            baseX: width / 2 + 84 * 4.26,
            baseY: height / 2 - 200 * 0.85,
          },
          container: {
            x: 430,
            y: 140,
            width: 84,
            height: 84,
          },
        };
      } else if (width >= 768 && width < 1280) {
        return {
          part: {
            x: width / 2 + 84 * 4.2,
            y: height / 2 - 200 * 0.85,
            width: 84,
            height: 200,
            baseX: width / 2 + 84 * 4.2,
            baseY: height / 2 - 200 * 0.85,
          },
          container: {
            x: 290,
            y: 140,
            width: 84,
            height: 84,
          },
        };
      } else if (width > 412 && width < 768) {
        return {
          part: {
            x: width / 2 + 40 * 5.4,
            y: height / 2 - 60 * 1.7,
            width: 50,
            height: 60,
            baseX: width / 2 + 40 * 5.4,
            baseY: height / 2 - 60 * 1.7,
          },
          container: {
            x: 180,
            y: 220,
            width: 50,
            height: 50,
          },
        };
      } else {
        return {
          part: {
            x: width / 2 + 25 * 4.6,
            y: height / 2 - 30 * 1.9,
            width: 28,
            height: 30,
            baseX: width / 2 + 25 * 4.6,
            baseY: height / 2 - 30 * 1.9,
          },
          container: {
            x: 95,
            y: 385,
            width: 28,
            height: 28,
          },
        };
      }
    case "rightArm":
      if (width >= 1680) {
        return {
          part: {
            x: width / 2 + 110 * 5.22,
            y: height / 2 - 200 * 1.12,
            width: 110,
            height: 200,
            baseX: width / 2 + 110 * 5.22,
            baseY: height / 2 - 200 * 1.12,
          },
          container: {
            x: 795,
            y: 180,
            width: 100,
            height: 100,
          },
        };
      } else if (width >= 1280 && width < 1680) {
        return {
          part: {
            x: width / 2 + 84 * 5.26,
            y: height / 2 - 200 * 0.85,
            width: 84,
            height: 200,
            baseX: width / 2 + 84 * 5.26,
            baseY: height / 2 - 200 * 0.85,
          },
          container: {
            x: 636,
            y: 140,
            width: 84,
            height: 84,
          },
        };
      } else if (width >= 768 && width < 1280) {
        return {
          part: {
            x: width / 2 + 84 * 5.2,
            y: height / 2 - 200 * 0.85,
            width: 84,
            height: 200,
            baseX: width / 2 + 84 * 5.2,
            baseY: height / 2 - 200 * 0.85,
          },
          container: {
            x: 490,
            y: 140,
            width: 84,
            height: 84,
          },
        };
      } else if (width > 412 && width < 768) {
        return {
          part: {
            x: width / 2 + 40 * 6.6,
            y: height / 2 - 60 * 1.7,
            width: 50,
            height: 60,
            baseX: width / 2 + 40 * 6.6,
            baseY: height / 2 - 60 * 1.7,
          },
          container: {
            x: 290,
            y: 220,
            width: 50,
            height: 50,
          },
        };
      } else {
        return {
          part: {
            x: width / 2 + 25 * 5.8,
            y: height / 2 - 30 * 1.9,
            width: 28,
            height: 30,
            baseX: width / 2 + 25 * 5.8,
            baseY: height / 2 - 30 * 1.9,
          },
          container: {
            x: 160,
            y: 385,
            width: 28,
            height: 28,
          },
        };
      }
    case "leftFoot":
      if (width >= 1680) {
        return {
          part: {
            x: width / 2 + 100 * 0.2,
            y: height / 2 - 200 * 0.7,
            width: 100,
            height: 200,
            baseX: width / 2 + 100 * 0.2,
            baseY: height / 2 - 200 * 0.7,
          },
          container: {
            x: 595,
            y: 400,
            width: 100,
            height: 100,
          },
        };
      } else if (width >= 1280 && width < 1680) {
        return {
          part: {
            x: width / 2 + 80 * 0.2,
            y: height / 2 - 200 * 0.6,
            width: 80,
            height: 200,
            baseX: width / 2 + 80 * 0.2,
            baseY: height / 2 - 200 * 0.6,
          },
          container: {
            x: 480,
            y: 310,
            width: 84,
            height: 84,
          },
        };
      } else if (width >= 768 && width < 1280) {
        return {
          part: {
            x: width / 2 + 84 * 0.15,
            y: height / 2 - 200 * 0.58,
            width: 78,
            height: 200,
            baseX: width / 2 + 84 * 0.15,
            baseY: height / 2 - 200 * 0.58,
          },
          container: {
            x: 340,
            y: 310,
            width: 84,
            height: 84,
          },
        };
      } else if (width > 412 && width < 768) {
        return {
          part: {
            x: width / 2 + 50 * 0.2,
            y: height / 2 - 100 * 0.7,
            width: 48,
            height: 100,
            baseX: width / 2 + 50 * 0.2,
            baseY: height / 2 - 100 * 0.7,
          },
          container: {
            x: 210,
            y: 320,
            width: 50,
            height: 50,
          },
        };
      } else {
        return {
          part: {
            x: width / 2 + 26 * 0.18,
            y: height / 2 - 100 * 0.4,
            width: 26,
            height: 100,
            baseX: width / 2 + 26 * 0.18,
            baseY: height / 2 - 100 * 0.4,
          },
          container: {
            x: 110,
            y: 440,
            width: 28,
            height: 28,
          },
        };
      }
    case "rightFoot":
      if (width >= 1680) {
        return {
          part: {
            x: width / 2 + 100 * 1.5,
            y: height / 2 - 200 * 0.7,
            width: 100,
            height: 200,
            baseX: width / 2 + 100 * 1.5,
            baseY: height / 2 - 200 * 0.7,
          },
          container: {
            x: 720,
            y: 400,
            width: 100,
            height: 100,
          },
        };
      } else if (width >= 1280 && width < 1680) {
        return {
          part: {
            x: width / 2 + 80 * 1.4,
            y: height / 2 - 200 * 0.6,
            width: 80,
            height: 200,
            baseX: width / 2 + 80 * 1.4,
            baseY: height / 2 - 200 * 0.6,
          },
          container: {
            x: 585,
            y: 310,
            width: 84,
            height: 84,
          },
        };
      } else if (width >= 768 && width < 1280) {
        return {
          part: {
            x: width / 2 + 84 * 1.3,
            y: height / 2 - 200 * 0.58,
            width: 78,
            height: 200,
            baseX: width / 2 + 84 * 1.3,
            baseY: height / 2 - 200 * 0.58,
          },
          container: {
            x: 440,
            y: 310,
            width: 84,
            height: 84,
          },
        };
      } else if (width > 412 && width < 768) {
        return {
          part: {
            x: width / 2 + 48 * 1.4,
            y: height / 2 - 100 * 0.7,
            width: 48,
            height: 100,
            baseX: width / 2 + 48 * 1.4,
            baseY: height / 2 - 100 * 0.7,
          },
          container: {
            x: 270,
            y: 320,
            width: 50,
            height: 50,
          },
        };
      } else {
        return {
          part: {
            x: width / 2 + 26 * 1.4,
            y: height / 2 - 100 * 0.39,
            width: 26,
            height: 100,
            baseX: width / 2 + 26 * 1.4,
            baseY: height / 2 - 100 * 0.39,
          },
          container: {
            x: 145,
            y: 440,
            width: 28,
            height: 28,
          },
        };
      }
    default:
      return { part: {}, container: {} };
  }
};

export default useTest;
