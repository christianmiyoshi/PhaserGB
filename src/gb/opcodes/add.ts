import { Cpu, REGISTER_TYPE } from "../cpu";

export const enum TARGET_ADD {
    A = REGISTER_TYPE.A,
    B = REGISTER_TYPE.B,
    C = REGISTER_TYPE.C,
    D = REGISTER_TYPE.D,
    E = REGISTER_TYPE.E,
    H = REGISTER_TYPE.H,
    L = REGISTER_TYPE.L,
}

export class Add {
    addCarry = false;

    exec(cpu: Cpu, target: TARGET_ADD) {
        let value = cpu.registers[target];

        if (this.addCarry) {
            value++;
        }

        const result = cpu.registers.a + value;
        const { carry, halfCarry } = this.processTarget(result, cpu, value);
        cpu.clearAllFlagRegister();
        if (carry) {
            cpu.setFlagCarry();
        }
        if (halfCarry) {
            cpu.setFlagHalfCarry();
        }
        if (cpu.getRegister(REGISTER_TYPE.A) === 0) {
            cpu.setFlagZero();
        }
    }

    processTarget(result: number, cpu: Cpu, value: number) {
        const carry = result > 0xff;
        const halfCarry = (cpu.registers.a & 0xf) + (value & 0xf) > 0xf;
        cpu.setRegister(REGISTER_TYPE.A, result & 0xff);
        return { carry, halfCarry };
    }
}
