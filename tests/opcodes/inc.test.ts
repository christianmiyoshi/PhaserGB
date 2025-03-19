import { describe, expect, test } from "@jest/globals";
import { Add, TARGET_ADD } from "../../src/gb/opcodes/add";
import { Inc } from "../../src/gb/opcodes/inc";
import { Cpu, REGISTER_TYPE } from "../../src/gb/cpu";

describe("Test inc opcode", () => {
    test("test simple add", () => {
        const add = new Inc();
        const cpu = new Cpu();
        cpu.setRegister(REGISTER_TYPE.B, 2);
        add.exec(cpu, REGISTER_TYPE.B);
        expect(cpu.getRegister(REGISTER_TYPE.B)).toBe(3);
    });

    // test("test carry", () => {
    //     const add = new Add();
    //     const cpu = new Cpu();
    //     cpu.setRegister(REGISTER_TYPE.A, 0xff);
    //     cpu.setRegister(REGISTER_TYPE.B, 1);
    //     add.exec(cpu, REGISTER_TYPE.B);
    //     expect(cpu.getRegister(REGISTER_TYPE.A)).toBe(0);
    //     expect(cpu.getFlagCarry()).toBe(1);
    // });

    // test("test zero", () => {
    //     const add = new Add();
    //     const cpu = new Cpu();
    //     cpu.setRegister(REGISTER_TYPE.A, 0);
    //     cpu.setRegister(REGISTER_TYPE.B, 0);
    //     add.exec(cpu, REGISTER_TYPE.B);
    //     expect(cpu.getRegister(REGISTER_TYPE.A)).toBe(0);
    //     expect(cpu.getFlagZero()).toBe(1);
    // });

    // test("test half carry", () => {
    //     const add = new Add();
    //     const cpu = new Cpu();
    //     cpu.setRegister(REGISTER_TYPE.A, 0xf);
    //     cpu.setRegister(REGISTER_TYPE.B, 0x1);
    //     add.exec(cpu, REGISTER_TYPE.B);
    //     expect(cpu.getFlagHalfCarry()).toBe(1);
    // });
});

