declare class TsCardRidgeProps {
  constructor(std?: string);

  read(addr: Uint16Array);
  selectRomBank(bankNR: Uint16Array);
}