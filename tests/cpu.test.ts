import { describe, expect, test } from "@jest/globals";
import { Cpu, REGISTERS, REGISTER_TYPE } from "../src/gb/cpu";

describe("Cpu Module", () => {
    test("test set register", () => {
        const cpu = new Cpu();
        for (const register of REGISTERS) {
            expect(cpu.registers[register]).toBe(0);
        }
        cpu.setRegister(REGISTER_TYPE.A, 255);
        expect(cpu.registers[REGISTER_TYPE.A]).toBe(255);
    });

    test("test set register with invalid value", () => {
        const cpu = new Cpu();
        expect(() => {
            cpu.setRegister(REGISTER_TYPE.B, 256);
        }).toThrowError("Value out of range");
    });

    test("test set register 16 bits", () => {
        const cpu = new Cpu();
        cpu.setRegisterHL(0x1234);
        expect(cpu.registers[REGISTER_TYPE.H]).toBe(0x12);
        expect(cpu.registers[REGISTER_TYPE.L]).toBe(0x34);
    });

    test("test get register 16 bits", () => {
        const cpu = new Cpu();
        cpu.setRegister(REGISTER_TYPE.B, 0x12);
        cpu.setRegister(REGISTER_TYPE.C, 0x34);
        expect(cpu.getRegisterBC()).toBe(0x1234);
    });

    test("test get/set register 16 bits", () => {
        const cpu = new Cpu();
        cpu.setRegisterAF(0x1234);
        expect(cpu.getRegisterAF()).toBe(0x1234);

        cpu.setRegisterBC(0x5678);
        expect(cpu.getRegisterBC()).toBe(0x5678);

        cpu.setRegisterDE(0x9abc);
        expect(cpu.getRegisterDE()).toBe(0x9abc);

        cpu.setRegisterHL(0xdef0);
        expect(cpu.getRegisterHL()).toBe(0xdef0);

        expect(cpu.getRegister(REGISTER_TYPE.A)).toBe(0x12);
        expect(cpu.getRegister(REGISTER_TYPE.F)).toBe(0x34);
        expect(cpu.getRegister(REGISTER_TYPE.B)).toBe(0x56);
        expect(cpu.getRegister(REGISTER_TYPE.C)).toBe(0x78);
        expect(cpu.getRegister(REGISTER_TYPE.D)).toBe(0x9a);
        expect(cpu.getRegister(REGISTER_TYPE.E)).toBe(0xbc);
        expect(cpu.getRegister(REGISTER_TYPE.H)).toBe(0xde);
        expect(cpu.getRegister(REGISTER_TYPE.L)).toBe(0xf0);
    });
});

