import { describe, expect, test } from "@jest/globals";
import { Add, TARGET_ADD } from "../../src/gb/opcodes/add";
import { And } from "../../src/gb/opcodes/and";
import { AddCarry } from "../../src/gb/opcodes/add_carry";
import { Cpu, REGISTER_TYPE } from "../../src/gb/cpu";

describe("Test and opcode", () => {
    test("test simple and", () => {
        const and = new And();
        const cpu = new Cpu();
        cpu.setRegister(REGISTER_TYPE.A, 0xf1);
        cpu.setRegister(REGISTER_TYPE.B, 0x12);
        and.exec(cpu, TARGET_ADD.B);
        expect(cpu.getRegister(REGISTER_TYPE.A)).toBe(0x10);
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

