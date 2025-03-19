import { Cpu, REGISTER_TYPE } from "../cpu";
import { Add, TARGET_ADD_TYPE } from "./add";

export const enum TARGET_ADD {
    A = REGISTER_TYPE.A,
    B = REGISTER_TYPE.B,
    C = REGISTER_TYPE.C,
    D = REGISTER_TYPE.D,
    E = REGISTER_TYPE.E,
    H = REGISTER_TYPE.H,
    L = REGISTER_TYPE.L,
}

export class Inc extends Add {
    processResult(cpu: Cpu, target: TARGET_ADD_TYPE) {
        const value = cpu.registers[target] + 1;
        const result = cpu.registers.a + value;
        return { result, value };
    }

    processTarget(
        result: number,
        cpu: Cpu,
        value: number,
        target: TARGET_ADD_TYPE = REGISTER_TYPE.A
    ) {
        const carry = result > 0xff;
        const halfCarry = (cpu.registers.a & 0xf) + (value & 0xf) > 0xf;
        cpu.setRegister(target, result & 0xff);
        return { carry, halfCarry };
    }
}

