import { describe, expect, test } from "@jest/globals";
import { Add, TARGET_ADD } from "../../src/gb/opcodes/add";
import { Xor } from "../../src/gb/opcodes/xor";
import { AddCarry } from "../../src/gb/opcodes/add_carry";
import { Cpu, REGISTER_TYPE } from "../../src/gb/cpu";

describe("Test xor opcode", () => {
    test("test simple xor", () => {
        const and = new Xor();
        const cpu = new Cpu();
        cpu.setRegister(REGISTER_TYPE.A, 0x0f);
        cpu.setRegister(REGISTER_TYPE.B, 0xff);
        and.exec(cpu, TARGET_ADD.B);
        expect(cpu.getRegister(REGISTER_TYPE.A)).toBe(0xf0);
    });

    // test("test carry", () => {
    //     const add = new AddCarry();
    //     const cpu = new Cpu();
    //     cpu.setRegister(REGISTER_TYPE.A, 0xff);
    //     cpu.setRegister(REGISTER_TYPE.B, 0);
    //     cpu.setFlagCarry();
    //     add.exec(cpu, TARGET_ADD.B);
    //     expect(cpu.getRegister(REGISTER_TYPE.A)).toBe(0);
    //     expect(cpu.getFlagCarry()).toBe(1);
    // });

    // test("test zero", () => {
    //     const add = new AddCarry();
    //     const cpu = new Cpu();
    //     cpu.setRegister(REGISTER_TYPE.A, 0xff);
    //     cpu.setRegister(REGISTER_TYPE.B, 0);
    //     cpu.setFlagCarry();
    //     add.exec(cpu, TARGET_ADD.B);
    //     expect(cpu.getRegister(REGISTER_TYPE.A)).toBe(0);
    //     expect(cpu.getFlagZero()).toBe(1);
    // });

    // test("test half carry", () => {
    //     const add = new AddCarry();
    //     const cpu = new Cpu();
    //     cpu.setRegister(REGISTER_TYPE.A, 0xf);
    //     cpu.setRegister(REGISTER_TYPE.B, 0x0);
    //     cpu.setFlagCarry();
    //     add.exec(cpu, TARGET_ADD.B);
    //     expect(cpu.getFlagHalfCarry()).toBe(1);
    // });
});

