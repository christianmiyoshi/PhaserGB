import { CPU } from "../cpu";

class Add {
    static exec(cpu: CPU) {
        const value = cpu.registers[register];
        const result = cpu.registers.a + value;
        const carry = result > 0xff;
        const halfCarry = (cpu.registers.a & 0xf) + (value & 0xf) > 0xf;
        cpu.registers.a = result & 0xff;
        cpu.registers.f = 0;
        if (carry) cpu.registers.f |= Flags.CARRY;
        if (halfCarry) cpu.registers.f |= Flags.HALF_CARRY;
        if (cpu.registers.a === 0) cpu.registers.f |= Flags.ZERO;
    }
}

