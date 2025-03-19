import { Cpu, REGISTER_TYPE } from "../cpu";
import { Add, TARGET_ADD, TARGET_ADD_TYPE } from "./add";

export class Ccf extends Add {
    exec(cpu: Cpu, _target: TARGET_ADD_TYPE) {
        cpu.clearAllFlagRegister();
        cpu.setFlagCarry();
    }
}

