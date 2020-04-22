import {MockList} from 'graphql-tools';
import * as faker from 'faker';

export const mocks = {
  String: () => faker.name.jobDescriptor(),
  Character: () => ({
    name: () => mockedCharacters(),
    age: () => faker.random.number([1,200])
  }),
  Query: () => ({
    characters: () => new MockList([100, 300]),
  }),
  MutationResult: () => ({
    successful: () => true,
  })
}

const superheroes = ['Ant-Man', 'Aquaman', 'Asterix', 'The Atom', 'The Avengers', 'Batgirl', 'Batman', 'Batwoman', 'Black Canary', 'Black Panther', 'Captain America', 'Captain Marvel', 'Catwoman', 'Conan the Barbarian', 'Daredevil', 'The Defenders', 'Doc Savage', 'Doctor Strange', 'Elektra', 'Fantastic Four', 'Ghost Rider', 'Green Arrow', 'Green Lantern', 'Guardians of the Galaxy', 'Hawkeye', 'Hellboy', 'Incredible Hulk', 'Iron Fist', 'Iron Man', 'Marvelman', 'Robin', 'The Rocketeer', 'The Shadow', 'Spider-Man', 'Sub-Mariner', 'Supergirl', 'Superman', 'Teenage Mutant Ninja Turtles', 'Thor', 'The Wasp', 'Watchmen', 'Wolverine', 'Wonder Woman', 'X-Men', 'Zatanna', 'Zatara'];
const villains = ['Magneto', 'Joker', 'Doctor Doom', 'Lex Luthor', 'Galactus', 'Darkseid', 'Loki', 'Kingpin', 'Two Face', 'Red Skull', 'Black Adam', 'Mystique', 'Juggernaut', 'Bullseye', 'Venom', 'Ultron', 'Apocalypse', 'Bane', 'Sentinels', 'Shredder', 'Thanos', 'Penguin'];


export function mockedCharacters() {
  let characters = [...superheroes, ...villains];
  let randomNumber = Math.floor(Math.random() * characters.length);
  return characters[randomNumber];
};

