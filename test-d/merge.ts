import {expectType} from 'tsd';
import {Merge} from '..';

type Foo = {
	a: number;
	b: string;
};

type Bar = {
	b: number;
};

const ab: Merge<Foo, Bar> = {a: 1, b: 2};
expectType<{a: number; b: number}>(ab);

type Bas = {
	b: string;
};
const ab2: Merge<Foo, Bas> = {a: 1, b: '2'};
expectType<{a: number; b: string}>(ab2);
