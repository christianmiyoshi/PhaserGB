import { Cpu, REGISTER_TYPE } from "../cpu";
import { Add, TARGET_ADD } from "./add";

export class Ccf extends Add {
    exec(cpu: Cpu, _target: TARGET_ADD) {
        cpu.clearAllFlagRegister();
        cpu.setFlagCarry();
    }
}

