import Character from '../character';

test(('class Character'), () => {
  const zomb = new Character('Petr', 'Zombie');
  expect(zomb.name).toBe('Petr');
  expect(zomb.type).toBe('Zombie');
});

test(('class Character'), () => {
  expect(() => new Character('Z', 'Zombie')).toThrow('field name must have type string & length must be from 2 to 10 character');
});

test(('class Character'), () => {
  expect(() => new Character('Zooker', 'Krys')).toThrow('This type Krys is wrong');
});
