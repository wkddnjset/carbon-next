function isCorrect(obj1: any): boolean {
  console.log('obj1 : ', obj1);
  const result = obj1.question.filter((o: any) => o.answer === true);
  console.log('result : ', result);
  return result.length > 0;
}

export default isCorrect;
