import { describe, expect, test } from "@jest/globals";
import { Add, TARGET_ADD } from "../../src/gb/opcodes/add";
import { AddHL } from "../../src/gb/opcodes/addhl";
import { AddCarry } from "../../src/gb/opcodes/add_carry";
import { Cpu, REGISTER_TYPE } from "../../src/gb/cpu";

describe("Test add hl opcode", () => {
    test("test simple add", () => {
        const add = new AddHL();
        const cpu = new Cpu();
        cpu.setRegister(REGISTER_TYPE.A, 0xff);
        cpu.setRegister(REGISTER_TYPE.B, 0x1);
        add.exec(cpu, REGISTER_TYPE.B);
        expect(cpu.getRegisterHL()).toBe(0x100);
    });

    // test("test carry", () => {
    //     const add = new AddCarry();
    //     const cpu = new Cpu();
    //     cpu.setRegister(REGISTER_TYPE.A, 0xff);
    //     cpu.setRegister(REGISTER_TYPE.B, 0);
    //     cpu.setFlagCarry();
    //     add.exec(cpu, REGISTER_TYPE.B);
    //     expect(cpu.getRegister(REGISTER_TYPE.A)).toBe(0);
    //     expect(cpu.getFlagCarry()).toBe(1);
    // });

    // test("test zero", () => {
    //     const add = new AddCarry();
    //     const cpu = new Cpu();
    //     cpu.setRegister(REGISTER_TYPE.A, 0xff);
    //     cpu.setRegister(REGISTER_TYPE.B, 0);
    //     cpu.setFlagCarry();
    //     add.exec(cpu, REGISTER_TYPE.B);
    //     expect(cpu.getRegister(REGISTER_TYPE.A)).toBe(0);
    //     expect(cpu.getFlagZero()).toBe(1);
    // });

    // test("test half carry", () => {
    //     const add = new AddCarry();
    //     const cpu = new Cpu();
    //     cpu.setRegister(REGISTER_TYPE.A, 0xf);
    //     cpu.setRegister(REGISTER_TYPE.B, 0x0);
    //     cpu.setFlagCarry();
    //     add.exec(cpu, REGISTER_TYPE.B);
    //     expect(cpu.getFlagHalfCarry()).toBe(1);
    // });
});

