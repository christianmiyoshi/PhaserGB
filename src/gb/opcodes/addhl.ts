import { Cpu, REGISTER_TYPE } from "../cpu";
import { Add, TARGET_ADD_TYPE } from "./add";

export class AddHL extends Add {
    processTarget(
        result: number,
        cpu: Cpu,
        value: number,
        target: TARGET_ADD_TYPE = REGISTER_TYPE.A
    ) {
        const carry = result > 0xff;
        const halfCarry = (cpu.registers.a & 0xf) + (value & 0xf) > 0xf;
        cpu.setRegisterHL(result & 0xffff);
        return { carry, halfCarry };
    }
}

