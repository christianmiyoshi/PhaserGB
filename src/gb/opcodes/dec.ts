import { Cpu, REGISTER_TYPE } from "../cpu";
import { TARGET_ADD_TYPE } from "./add";
import { Inc } from "./inc";

export const enum TARGET_ADD {
    A = REGISTER_TYPE.A,
    B = REGISTER_TYPE.B,
    C = REGISTER_TYPE.C,
    D = REGISTER_TYPE.D,
    E = REGISTER_TYPE.E,
    H = REGISTER_TYPE.H,
    L = REGISTER_TYPE.L,
}

export class Dec extends Inc {
    processResult(cpu: Cpu, target: TARGET_ADD_TYPE) {
        const value = cpu.registers[target] - 1;
        const result = cpu.registers.a + value;
        return { result, value };
    }
}

