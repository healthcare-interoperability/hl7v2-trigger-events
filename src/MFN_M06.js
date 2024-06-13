import { MSH, SFT, UAC, MFI, MFE, CM0, CM1, CM2 } from '@healthcare-interoperability/hl7v2-segments';
import { TriggerEvent } from '@healthcare-interoperability/hl7v2-core';

export class MFN_M06 extends TriggerEvent {
    static TriggerEvent = 'MFN_M06';
    static Structure = {
        versions: {
            2.8: {
                sequences: [
                    {},
                    { identifier: 'MSH', sequence: '1', restrictions: { nillable: false, minOccurs: 1, maxOccurs: 1 }, isGroup: false },
                    { identifier: 'SFT', sequence: '2', restrictions: { nillable: true, minOccurs: 0, maxOccurs: 9999 }, isGroup: false },
                    { identifier: 'UAC', sequence: '3', restrictions: { nillable: true, minOccurs: 0, maxOccurs: 1 }, isGroup: false },
                    { identifier: 'MFI', sequence: '4', restrictions: { nillable: false, minOccurs: 1, maxOccurs: 1 }, isGroup: false },
                    { identifier: 'MFE', sequence: '5', restrictions: { nillable: false, minOccurs: 1, maxOccurs: 1 }, isGroup: true, groupPath: ['MF_CLIN_STUDY'] },
                    { identifier: 'CM0', sequence: '6', restrictions: { nillable: false, minOccurs: 1, maxOccurs: 1 }, isGroup: true, groupPath: ['MF_CLIN_STUDY'] },
                    { identifier: 'CM1', sequence: '7', restrictions: { nillable: false, minOccurs: 1, maxOccurs: 1 }, isGroup: true, groupPath: ['MF_CLIN_STUDY', 'MF_PHASE_SCHED_DETAIL'] },
                    { identifier: 'CM2', sequence: '8', restrictions: { nillable: true, minOccurs: 0, maxOccurs: 9999 }, isGroup: true, groupPath: ['MF_CLIN_STUDY', 'MF_PHASE_SCHED_DETAIL'] },
                ],
                groups: {
                    MF_CLIN_STUDY: {
                        sequence: { start: '5', stop: null },
                        restrictions: { nillable: false, minOccurs: 1, maxOccurs: 9999 },
                        subgroup: { MF_PHASE_SCHED_DETAIL: { sequence: { start: '7', stop: '8' }, restrictions: { nillable: true, minOccurs: 0, maxOccurs: 9999 }, subgroup: {} } },
                    },
                },
            },
            2.6: {
                sequences: { ref: '2.8' },
                groups: { ref: '2.8' },
            },
            2.7: {
                sequences: { ref: '2.8' },
                groups: { ref: '2.8' },
            },
            '2.7.1': {
                sequences: { ref: '2.8' },
                groups: { ref: '2.8' },
            },
            2.3: {
                sequences: [
                    {},
                    { identifier: 'MSH', sequence: '1', restrictions: { nillable: false, minOccurs: 1, maxOccurs: 1 }, isGroup: false },
                    { identifier: 'MFI', sequence: '2', restrictions: { nillable: false, minOccurs: 1, maxOccurs: 1 }, isGroup: false },
                    { identifier: 'MFE', sequence: '3', restrictions: { nillable: false, minOccurs: 1, maxOccurs: 1 }, isGroup: true, groupPath: ['MF_CLIN_STUDY'] },
                    { identifier: 'CM0', sequence: '4', restrictions: { nillable: false, minOccurs: 1, maxOccurs: 1 }, isGroup: true, groupPath: ['MF_CLIN_STUDY'] },
                    { identifier: 'CM1', sequence: '5', restrictions: { nillable: false, minOccurs: 1, maxOccurs: 1 }, isGroup: true, groupPath: ['MF_CLIN_STUDY', 'MF_PHASE_SCHED_DETAIL'] },
                    { identifier: 'CM2', sequence: '6', restrictions: { nillable: true, minOccurs: 0, maxOccurs: 9999 }, isGroup: true, groupPath: ['MF_CLIN_STUDY', 'MF_PHASE_SCHED_DETAIL'] },
                ],
                groups: {
                    MF_CLIN_STUDY: {
                        sequence: { start: '3', stop: null },
                        restrictions: { nillable: false, minOccurs: 1, maxOccurs: 9999 },
                        subgroup: { MF_PHASE_SCHED_DETAIL: { sequence: { start: '5', stop: '6' }, restrictions: { nillable: true, minOccurs: 0, maxOccurs: 9999 }, subgroup: {} } },
                    },
                },
            },
            '2.3.1': {
                sequences: { ref: '2.3' },
                groups: { ref: '2.3' },
            },
            2.4: {
                sequences: { ref: '2.3' },
                groups: { ref: '2.3' },
            },
            2.5: {
                sequences: [
                    {},
                    { identifier: 'MSH', sequence: '1', restrictions: { nillable: false, minOccurs: 1, maxOccurs: 1 }, isGroup: false },
                    { identifier: 'SFT', sequence: '2', restrictions: { nillable: true, minOccurs: 0, maxOccurs: 9999 }, isGroup: false },
                    { identifier: 'MFI', sequence: '3', restrictions: { nillable: false, minOccurs: 1, maxOccurs: 1 }, isGroup: false },
                    { identifier: 'MFE', sequence: '4', restrictions: { nillable: false, minOccurs: 1, maxOccurs: 1 }, isGroup: true, groupPath: ['MF_CLIN_STUDY'] },
                    { identifier: 'CM0', sequence: '5', restrictions: { nillable: false, minOccurs: 1, maxOccurs: 1 }, isGroup: true, groupPath: ['MF_CLIN_STUDY'] },
                    { identifier: 'CM1', sequence: '6', restrictions: { nillable: false, minOccurs: 1, maxOccurs: 1 }, isGroup: true, groupPath: ['MF_CLIN_STUDY', 'MF_PHASE_SCHED_DETAIL'] },
                    { identifier: 'CM2', sequence: '7', restrictions: { nillable: true, minOccurs: 0, maxOccurs: 9999 }, isGroup: true, groupPath: ['MF_CLIN_STUDY', 'MF_PHASE_SCHED_DETAIL'] },
                ],
                groups: {
                    MF_CLIN_STUDY: {
                        sequence: { start: '4', stop: null },
                        restrictions: { nillable: false, minOccurs: 1, maxOccurs: 9999 },
                        subgroup: { MF_PHASE_SCHED_DETAIL: { sequence: { start: '6', stop: '7' }, restrictions: { nillable: true, minOccurs: 0, maxOccurs: 9999 }, subgroup: {} } },
                    },
                },
            },
            '2.5.1': {
                sequences: { ref: '2.5' },
                groups: { ref: '2.5' },
            },
        },
        segments: { MSH: MSH, SFT: SFT, UAC: UAC, MFI: MFI, MFE: MFE, CM0: CM0, CM1: CM1, CM2: CM2 },
    };

    constructor(message, version = null) {
        super(message, version);
    }
}