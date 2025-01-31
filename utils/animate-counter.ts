const animateCounter = (counterElement: HTMLDivElement | null) => {
  if (counterElement !== null) {
    const target = parseInt(
      counterElement.getAttribute("data-target") as string
    );

    const countUp = () => {
      const currentValue = parseInt(counterElement.textContent as string);
      const increment = Math.ceil(target / 200);
      if (currentValue < target) {
        counterElement.textContent = (currentValue + increment).toString();
        setTimeout(countUp, 1);
      }
    };

    countUp();
  }
};

export default animateCounter;
