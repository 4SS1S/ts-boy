/// <reference path="cpu.d.ts" />
export class Cpu implements TsBoyCPUProps {
  constructor(mem: TsBoyMemProps) {
    //
  }

  cycle() {
    let cycles = new Int8Array(0);

    // CurrentInstruction = NextInstruction
  }
}