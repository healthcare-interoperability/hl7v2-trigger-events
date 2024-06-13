import { MSH, QRD, QRF, NCK, NST, NSC, SFT, UAC } from '@healthcare-interoperability/hl7v2-segments';
import { TriggerEvent } from '@healthcare-interoperability/hl7v2-core';

export class NMQ_N01 extends TriggerEvent {
    static TriggerEvent = 'NMQ_N01';
    static Structure = {
        versions: {
            2.3: {
                sequences: [
                    {},
                    { identifier: 'MSH', sequence: '1', restrictions: { nillable: false, minOccurs: 1, maxOccurs: 1 }, isGroup: false },
                    { identifier: 'QRD', sequence: '2', restrictions: { nillable: false, minOccurs: 1, maxOccurs: 1 }, isGroup: true, groupPath: ['QRY_WITH_DETAIL'] },
                    { identifier: 'QRF', sequence: '3', restrictions: { nillable: true, minOccurs: 0, maxOccurs: 1 }, isGroup: true, groupPath: ['QRY_WITH_DETAIL'] },
                    { identifier: 'NCK', sequence: '4', restrictions: { nillable: true, minOccurs: 0, maxOccurs: 1 }, isGroup: true, groupPath: ['CLOCK_AND_STATISTICS'] },
                    { identifier: 'NST', sequence: '5', restrictions: { nillable: true, minOccurs: 0, maxOccurs: 1 }, isGroup: true, groupPath: ['CLOCK_AND_STATISTICS'] },
                    { identifier: 'NSC', sequence: '6', restrictions: { nillable: true, minOccurs: 0, maxOccurs: 1 }, isGroup: true, groupPath: ['CLOCK_AND_STATISTICS'] },
                ],
                groups: {
                    QRY_WITH_DETAIL: { sequence: { start: '2', stop: '3' }, restrictions: { nillable: true, minOccurs: 0, maxOccurs: 1 }, subgroup: {} },
                    CLOCK_AND_STATISTICS: { sequence: { start: '4', stop: '6' }, restrictions: { nillable: false, minOccurs: 1, maxOccurs: 9999 }, subgroup: {} },
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
                    { identifier: 'QRD', sequence: '3', restrictions: { nillable: false, minOccurs: 1, maxOccurs: 1 }, isGroup: true, groupPath: ['QRY_WITH_DETAIL'] },
                    { identifier: 'QRF', sequence: '4', restrictions: { nillable: true, minOccurs: 0, maxOccurs: 1 }, isGroup: true, groupPath: ['QRY_WITH_DETAIL'] },
                    { identifier: 'NCK', sequence: '5', restrictions: { nillable: true, minOccurs: 0, maxOccurs: 1 }, isGroup: true, groupPath: ['CLOCK_AND_STATISTICS'] },
                    { identifier: 'NST', sequence: '6', restrictions: { nillable: true, minOccurs: 0, maxOccurs: 1 }, isGroup: true, groupPath: ['CLOCK_AND_STATISTICS'] },
                    { identifier: 'NSC', sequence: '7', restrictions: { nillable: true, minOccurs: 0, maxOccurs: 1 }, isGroup: true, groupPath: ['CLOCK_AND_STATISTICS'] },
                ],
                groups: {
                    QRY_WITH_DETAIL: { sequence: { start: '3', stop: '4' }, restrictions: { nillable: true, minOccurs: 0, maxOccurs: 1 }, subgroup: {} },
                    CLOCK_AND_STATISTICS: { sequence: { start: '5', stop: '7' }, restrictions: { nillable: false, minOccurs: 1, maxOccurs: 9999 }, subgroup: {} },
                },
            },
            '2.5.1': {
                sequences: { ref: '2.5' },
                groups: { ref: '2.5' },
            },
            2.6: {
                sequences: [
                    {},
                    { identifier: 'MSH', sequence: '1', restrictions: { nillable: false, minOccurs: 1, maxOccurs: 1 }, isGroup: false },
                    { identifier: 'SFT', sequence: '2', restrictions: { nillable: true, minOccurs: 0, maxOccurs: 9999 }, isGroup: false },
                    { identifier: 'UAC', sequence: '3', restrictions: { nillable: true, minOccurs: 0, maxOccurs: 1 }, isGroup: false },
                    { identifier: 'QRD', sequence: '4', restrictions: { nillable: false, minOccurs: 1, maxOccurs: 1 }, isGroup: true, groupPath: ['QRY_WITH_DETAIL'] },
                    { identifier: 'QRF', sequence: '5', restrictions: { nillable: true, minOccurs: 0, maxOccurs: 1 }, isGroup: true, groupPath: ['QRY_WITH_DETAIL'] },
                    { identifier: 'NCK', sequence: '6', restrictions: { nillable: true, minOccurs: 0, maxOccurs: 1 }, isGroup: true, groupPath: ['CLOCK_AND_STATISTICS'] },
                    { identifier: 'NST', sequence: '7', restrictions: { nillable: true, minOccurs: 0, maxOccurs: 1 }, isGroup: true, groupPath: ['CLOCK_AND_STATISTICS'] },
                    { identifier: 'NSC', sequence: '8', restrictions: { nillable: true, minOccurs: 0, maxOccurs: 1 }, isGroup: true, groupPath: ['CLOCK_AND_STATISTICS'] },
                ],
                groups: {
                    QRY_WITH_DETAIL: { sequence: { start: '4', stop: '5' }, restrictions: { nillable: true, minOccurs: 0, maxOccurs: 1 }, subgroup: {} },
                    CLOCK_AND_STATISTICS: { sequence: { start: '6', stop: '8' }, restrictions: { nillable: false, minOccurs: 1, maxOccurs: 9999 }, subgroup: {} },
                },
            },
        },
        segments: { MSH: MSH, QRD: QRD, QRF: QRF, NCK: NCK, NST: NST, NSC: NSC, SFT: SFT, UAC: UAC },
    };

    constructor(message, version = null) {
        super(message, version);
    }
}
