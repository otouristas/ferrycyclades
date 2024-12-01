import { LatLngExpression } from 'leaflet';

export const generateCurvedPath = (
  start: [number, number],
  end: [number, number]
): LatLngExpression[] => {
  // Calculate the midpoint
  const midX = (start[0] + end[0]) / 2;
  const midY = (start[1] + end[1]) / 2;

  // Calculate the distance between points
  const dx = end[0] - start[0];
  const dy = end[1] - start[1];
  const distance = Math.sqrt(dx * dx + dy * dy);

  // Adjust curve height based on distance
  const curveHeight = distance * 0.15;

  // Calculate control point (perpendicular to the midpoint)
  const angle = Math.atan2(dy, dx) + Math.PI / 2;
  const controlX = midX + Math.cos(angle) * curveHeight;
  const controlY = midY + Math.sin(angle) * curveHeight;

  // Generate points along the quadratic Bezier curve
  const points: LatLngExpression[] = [];
  const steps = 100;

  for (let i = 0; i <= steps; i++) {
    const t = i / steps;
    const t2 = t * t;
    const mt = 1 - t;
    const mt2 = mt * mt;

    const x = mt2 * start[0] + 2 * mt * t * controlX + t2 * end[0];
    const y = mt2 * start[1] + 2 * mt * t * controlY + t2 * end[1];

    points.push([x, y]);
  }

  return points;
};

export const mapStyles = {
  defaultStyle: 'https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}.png',
  watercolor: 'https://stamen-tiles.a.ssl.fastly.net/watercolor/{z}/{x}/{y}.jpg',
  attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>'
};