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
    setRegister = true;

    exec(cpu: Cpu, target: TARGET_ADD) {
        var { result, value } = this.processResult(cpu, target);
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

    processResult(cpu: Cpu, target: TARGET_ADD) {
        const value =
            cpu.registers[target] + (this.addCarry ? cpu.getFlagCarry() : 0);
        const result = cpu.registers.a + value;
        return { result, value };
    }

    processTarget(result: number, cpu: Cpu, value: number) {
        const carry = result > 0xff;
        const halfCarry = (cpu.registers.a & 0xf) + (value & 0xf) > 0xf;
        if (this.setRegister) {
            cpu.setRegister(REGISTER_TYPE.A, result & 0xff);
        }
        return { carry, halfCarry };
    }
}

