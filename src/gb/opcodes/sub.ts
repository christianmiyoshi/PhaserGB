import { Cpu, REGISTER_TYPE } from "../cpu";
import { Add, TARGET_ADD } from "./add";

export class Sub extends Add {
    processResult(cpu: Cpu, target: TARGET_ADD) {
        const value = cpu.registers[target];
        let result = cpu.getRegister(REGISTER_TYPE.A) - value;

        if (result < 0) {
            result = (~result + 1) & 0xff;
        }

        return { result, value };
    }
}

