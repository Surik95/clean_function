function lifeIndication({ name, health }) {
  switch (true) {
    case health >= 50:
      return 'healthy';
    case health >= 15 && health < 50:
      return 'wounded';
    default:
      return 'critical';
  }
}
