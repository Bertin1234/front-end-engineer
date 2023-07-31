import emoji from 'node-emoji';

export default (tasks) => {
  const correctCount = tasks.reduce((correctCount, task) => {
    if (task.input === task.result) {
      correctCount++;
    }
    return correctCount;
  }, 0);
  const percent = (correctCount * 100) / tasks.length;
  if (percent === 100) {
    return emoji.emojify(
      `:trophy: Conctatiolations, you solved all ${tasks.length} tasks.`
    );
  } else if (percent >= 50) {
    return emoji.emojify(
      `:sunglasses: Very good, you solved ${correctCount} of ${tasks.length} in total.`
    );
  } else if (percent >= 1) {
    return emoji.emojify(
      `:cry: You only solved ${correctCount} of  ${tasks.length} tasks. You can do better.`
    );
  } else {
    return emoji.emojify(
      `:skull_and_crossbones: all of your ${tasks.length} answers were wrong.`
    );
  }
};
