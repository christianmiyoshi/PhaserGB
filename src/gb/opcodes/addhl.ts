import { Cpu } from "../cpu";
import { Add } from "./add";

export class AddHL extends Add {
    processTarget(result: number, cpu: Cpu, value: number) {
        const carry = result > 0xff;
        const halfCarry = (cpu.registers.a & 0xf) + (value & 0xf) > 0xf;
        cpu.setRegisterHL(result & 0xffff);
        return { carry, halfCarry };
    }
}

