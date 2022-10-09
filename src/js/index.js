export default function lifeIndication({ name, health }) {
  switch (true) {
    case health >= 50:
      return `${name} healthy`;
    case health >= 15 && health < 50:
      return `${name} wounded`;
    default:
      return `${name} critical`;
  }
}

lifeIndication({ name: 'Маг', health: 90 });
