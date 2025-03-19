import { Cpu, REGISTER_TYPE } from "../cpu";
import { Add, TARGET_ADD } from "./add";

export class And extends Add {
    addCarry = true;
    processResult(cpu: Cpu, target: TARGET_ADD) {
        const value = cpu.registers[target];
        let result = cpu.getRegister(REGISTER_TYPE.A) & value;
        return { result, value };
    }
}

