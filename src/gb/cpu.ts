export const TYPE_A = "a";
export const TYPE_B = "b";
export const TYPE_C = "c";
export const TYPE_D = "d";
export const TYPE_E = "e";
export const TYPE_F = "f";
export const TYPE_H = "h";
export const TYPE_L = "l";

export enum REGISTER_TYPE {
    A = TYPE_A,
    B = TYPE_B,
    C = TYPE_C,
    D = TYPE_D,
    E = TYPE_E,
    F = TYPE_F,
    H = TYPE_H,
    L = TYPE_L,
}

export const REGISTERS = [
    TYPE_A,
    TYPE_B,
    TYPE_C,
    TYPE_D,
    TYPE_E,
    TYPE_F,
    TYPE_H,
    TYPE_L,
] as const;

export class Cpu {
    registers: { [key: string]: number } = {};

    constructor() {
        this.registers = {};
        for (const register of REGISTERS) {
            this.registers[register] = 0;
        }
    }

    setRegister(register: REGISTER_TYPE, value: number) {
        if (value < 0 || value > 255) {
            throw new Error("Value out of range");
        }
        this.registers[register] = value;
    }

    getRegister(register: REGISTER_TYPE) {
        return this.registers[register];
    }

    getFlagRegister() {
        return this.registers[TYPE_F];
    }

    getFlagZero() {
        return (this.getFlagRegister() >> 7) & 1;
    }

    getFlagSubtract() {
        return (this.getFlagRegister() >> 6) & 1;
    }

    getFlagHalfCarry() {
        return (this.getFlagRegister() >> 5) & 1;
    }

    getFlagCarry() {
        return (this.getFlagRegister() >> 4) & 1;
    }

    setRegisterAF(value: number) {
        this.set16BitRegister(REGISTER_TYPE.A, REGISTER_TYPE.F, value);
    }
    setRegisterBC(value: number) {
        this.set16BitRegister(REGISTER_TYPE.B, REGISTER_TYPE.C, value);
    }
    setRegisterDE(value: number) {
        this.set16BitRegister(REGISTER_TYPE.D, REGISTER_TYPE.E, value);
    }
    setRegisterHL(value: number) {
        this.set16BitRegister(REGISTER_TYPE.H, REGISTER_TYPE.L, value);
    }

    getRegisterAF() {
        return this.get16BitRegister(REGISTER_TYPE.A, REGISTER_TYPE.F);
    }
    getRegisterBC() {
        return this.get16BitRegister(REGISTER_TYPE.B, REGISTER_TYPE.C);
    }
    getRegisterDE() {
        return this.get16BitRegister(REGISTER_TYPE.D, REGISTER_TYPE.E);
    }
    getRegisterHL() {
        return this.get16BitRegister(REGISTER_TYPE.H, REGISTER_TYPE.L);
    }

    set16BitRegister(
        registerMsb: REGISTER_TYPE,
        registerLsb: REGISTER_TYPE,
        value: number
    ) {
        if (value < 0 || value >= 1 << 16) {
            throw new Error("Value out of range 16 Bit register");
        }
        this.setRegister(registerMsb, (value & 0xff00) >> 8);
        this.setRegister(registerLsb, value & 0xff);
    }

    get16BitRegister(registerMsb: REGISTER_TYPE, registerLsb: REGISTER_TYPE) {
        return (this.registers[registerMsb] << 8) | this.registers[registerLsb];
    }
}

