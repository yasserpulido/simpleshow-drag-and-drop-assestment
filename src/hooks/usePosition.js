const getPosition = (element) => {
  const width = element.width;
  const height = element.height;

  return [
    [element.x, element.x + width],
    [element.y, element.y + height],
  ];
};

const comparePosition = (p1, p2) => {
  const r1 = p1[0] < p2[0] ? p1 : p2;
  const r2 = p1[0] < p2[0] ? p2 : p1;

  return r1[1] > r2[0] || r1[0] === r2[0];
};

const usePosition = (container, element) => {
  const pos1 = getPosition(container);
  const pos2 = getPosition(element);

  return comparePosition(pos1[0], pos2[0]) && comparePosition(pos1[1], pos2[1]);
};

export default usePosition;
