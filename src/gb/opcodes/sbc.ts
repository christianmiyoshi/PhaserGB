import { Cpu, REGISTER_TYPE } from "../cpu";
import { Add, TARGET_ADD, TARGET_ADD_TYPE } from "./add";

export class Sbc extends Add {
    addCarry = true;
    processResult(cpu: Cpu, target: TARGET_ADD_TYPE) {
        const value = cpu.registers[target];
        let result =
            cpu.getRegister(REGISTER_TYPE.A) -
            value -
            (this.addCarry ? cpu.getFlagCarry() : 0);

        if (result < 0) {
            result = (~result + 1) & 0xff;
        }

        return { result, value };
    }
}

