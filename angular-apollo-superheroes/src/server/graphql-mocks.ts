import {MockList} from 'graphql-tools';
import * as faker from 'faker';

export const mocks = {
  String: () => faker.name.jobDescriptor(),
  Superhero: () => ({
    name: () => mockedSuperheros(),
    features: () => new MockList([2, 10]),
  }),
  Villain: () => ({
    name: () => mockedVillains(),
    features: () => new MockList([2, 10]),
  }),
  Query: () => ({
    superheroes: () => new MockList([100, 300]),
    villains: () => new MockList([100, 300]),
  })
}


export function mockedSuperheros() {
  let superheroes = ['Ant-Man', 'Aquaman', 'Asterix', 'The Atom', 'The Avengers', 'Batgirl', 'Batman', 'Batwoman', 'Black Canary', 'Black Panther', 'Captain America', 'Captain Marvel', 'Catwoman', 'Conan the Barbarian', 'Daredevil', 'The Defenders', 'Doc Savage', 'Doctor Strange', 'Elektra', 'Fantastic Four', 'Ghost Rider', 'Green Arrow', 'Green Lantern', 'Guardians of the Galaxy', 'Hawkeye', 'Hellboy', 'Incredible Hulk', 'Iron Fist', 'Iron Man', 'Marvelman', 'Robin', 'The Rocketeer', 'The Shadow', 'Spider-Man', 'Sub-Mariner', 'Supergirl', 'Superman', 'Teenage Mutant Ninja Turtles', 'Thor', 'The Wasp', 'Watchmen', 'Wolverine', 'Wonder Woman', 'X-Men', 'Zatanna', 'Zatara'];
  let randomNumber = Math.floor(Math.random() * superheroes.length);
  return superheroes[randomNumber];
};

export function mockedVillains() {
  let villains = ['Magneto', 'Joker', 'Doctor Doom', 'Lex Luthor', 'Galactus', 'Darkseid', 'Loki', 'Kingpin', 'Two Face', 'Red Skull', 'Black Adam', 'Mystique', 'Juggernaut', 'Bullseye', 'Venom', 'Ultron', 'Apocalypse', 'Bane', 'Sentinels', 'Shredder', 'Thanos', 'Penguin'];
  let randomNumber = Math.floor(Math.random() * villains.length);
  return villains[randomNumber];
};

