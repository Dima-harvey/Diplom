import namor from 'namor';

const range = (len) => {
  const arr = [];
  for (let i = 0; i < len; i++) {
    arr.push(i);
  }
  return arr;
};

const newPerson = () => {
  const statusChance = Math.random();
  return {
    Name: namor.generate({ words: 1, numbers: 0 }),
    Executor: namor.generate({ words: 1, numbers: 0 }),
    Age: Math.floor(Math.random() * 30),
    Category: Math.floor(Math.random() * 100),
    service: Math.floor(Math.random() * 100),
    Cost: statusChance > 0.66 ? 'relationship' : statusChance > 0.33 ? 'complicated' : 'single',
  };
};

export default function makeData(...lens) {
  const makeDataLevel = (depth = 0) => {
    const len = lens[depth];
    return range(len).map((d) => {
      return {
        ...newPerson(),
        subRows: lens[depth + 1] ? makeDataLevel(depth + 1) : undefined,
      };
    });
  };

  return makeDataLevel();
}
