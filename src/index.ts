import { Cpu } from './cpu';
import { Mmu } from './ram'

const mem = new Mmu();
const cpu = new Cpu(mem);

console.log()