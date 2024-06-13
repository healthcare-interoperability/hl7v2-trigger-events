import { MSH, MSA, ERR, NTE, PID, ORC, OBR, RQD, RQ1, RXO, ODS, ODT, CTI } from '@healthcare-interoperability/hl7v2-segments';
import { TriggerEvent } from '@healthcare-interoperability/hl7v2-core';

export class ORR_O02 extends TriggerEvent {
    static TriggerEvent = 'ORR_O02';
    static Structure = {
        versions: {
            2.3: {
                sequences: [
                    {},
                    { identifier: 'MSH', sequence: '1', restrictions: { nillable: false, minOccurs: 1, maxOccurs: 1 }, isGroup: false },
                    { identifier: 'MSA', sequence: '2', restrictions: { nillable: false, minOccurs: 1, maxOccurs: 1 }, isGroup: false },
                    { identifier: 'ERR', sequence: '3', restrictions: { nillable: true, minOccurs: 0, maxOccurs: 1 }, isGroup: false },
                    { identifier: 'NTE', sequence: '4', restrictions: { nillable: true, minOccurs: 0, maxOccurs: 9999 }, isGroup: false },
                    { identifier: 'PID', sequence: '5', restrictions: { nillable: false, minOccurs: 1, maxOccurs: 1 }, isGroup: true, groupPath: ['RESPONSE', 'PATIENT'] },
                    { identifier: 'NTE', sequence: '6', restrictions: { nillable: true, minOccurs: 0, maxOccurs: 9999 }, isGroup: true, groupPath: ['RESPONSE', 'PATIENT'] },
                    { identifier: 'ORC', sequence: '7', restrictions: { nillable: false, minOccurs: 1, maxOccurs: 1 }, isGroup: true, groupPath: ['RESPONSE', 'ORDER'] },
                    { identifier: 'OBR', sequence: '8', restrictions: { nillable: true, minOccurs: 0, maxOccurs: 1 }, isGroup: true, groupPath: ['RESPONSE', 'ORDER', 'ORDER_DETAIL_SEGMENT'] },
                    { identifier: 'RQD', sequence: '9', restrictions: { nillable: true, minOccurs: 0, maxOccurs: 1 }, isGroup: true, groupPath: ['RESPONSE', 'ORDER', 'ORDER_DETAIL_SEGMENT'] },
                    { identifier: 'RQ1', sequence: '10', restrictions: { nillable: true, minOccurs: 0, maxOccurs: 1 }, isGroup: true, groupPath: ['RESPONSE', 'ORDER', 'ORDER_DETAIL_SEGMENT'] },
                    { identifier: 'RXO', sequence: '11', restrictions: { nillable: true, minOccurs: 0, maxOccurs: 1 }, isGroup: true, groupPath: ['RESPONSE', 'ORDER', 'ORDER_DETAIL_SEGMENT'] },
                    { identifier: 'ODS', sequence: '12', restrictions: { nillable: true, minOccurs: 0, maxOccurs: 1 }, isGroup: true, groupPath: ['RESPONSE', 'ORDER', 'ORDER_DETAIL_SEGMENT'] },
                    { identifier: 'ODT', sequence: '13', restrictions: { nillable: true, minOccurs: 0, maxOccurs: 1 }, isGroup: true, groupPath: ['RESPONSE', 'ORDER', 'ORDER_DETAIL_SEGMENT'] },
                    { identifier: 'NTE', sequence: '14', restrictions: { nillable: true, minOccurs: 0, maxOccurs: 9999 }, isGroup: true, groupPath: ['RESPONSE', 'ORDER'] },
                    { identifier: 'CTI', sequence: '15', restrictions: { nillable: true, minOccurs: 0, maxOccurs: 9999 }, isGroup: true, groupPath: ['RESPONSE', 'ORDER'] },
                ],
                groups: {
                    RESPONSE: {
                        sequence: { start: null, stop: null },
                        restrictions: { nillable: true, minOccurs: 0, maxOccurs: 1 },
                        subgroup: {
                            PATIENT: { sequence: { start: '5', stop: '6' }, restrictions: { nillable: true, minOccurs: 0, maxOccurs: 1 }, subgroup: {} },
                            ORDER: {
                                sequence: { start: '7', stop: '15' },
                                restrictions: { nillable: false, minOccurs: 1, maxOccurs: 9999 },
                                subgroup: { ORDER_DETAIL_SEGMENT: { sequence: { start: '8', stop: '13' }, restrictions: { nillable: true, minOccurs: 0, maxOccurs: 1 }, subgroup: {} } },
                            },
                        },
                    },
                },
            },
            '2.3.1': {
                sequences: { ref: '2.3' },
                groups: { ref: '2.3' },
            },
            2.4: {
                sequences: { ref: '2.3' },
                groups: {
                    RESPONSE: {
                        sequence: { start: null, stop: null },
                        restrictions: { nillable: true, minOccurs: 0, maxOccurs: 1 },
                        subgroup: {
                            PATIENT: { sequence: { start: '5', stop: '6' }, restrictions: { nillable: true, minOccurs: 0, maxOccurs: 1 }, subgroup: {} },
                            ORDER: {
                                sequence: { start: '7', stop: '15' },
                                restrictions: { nillable: false, minOccurs: 1, maxOccurs: 9999 },
                                subgroup: { ORDER_DETAIL_SEGMENT: { sequence: { start: '8', stop: '13' }, restrictions: { nillable: false, minOccurs: 1, maxOccurs: 1 }, subgroup: {} } },
                            },
                        },
                    },
                },
            },
            2.5: {
                sequences: [
                    {},
                    { identifier: 'MSH', sequence: '1', restrictions: { nillable: false, minOccurs: 1, maxOccurs: 1 }, isGroup: false },
                    { identifier: 'MSA', sequence: '2', restrictions: { nillable: false, minOccurs: 1, maxOccurs: 1 }, isGroup: false },
                    { identifier: 'ERR', sequence: '3', restrictions: { nillable: true, minOccurs: 0, maxOccurs: 9999 }, isGroup: false },
                    { identifier: 'NTE', sequence: '4', restrictions: { nillable: true, minOccurs: 0, maxOccurs: 9999 }, isGroup: false },
                    { identifier: 'PID', sequence: '5', restrictions: { nillable: false, minOccurs: 1, maxOccurs: 1 }, isGroup: true, groupPath: ['RESPONSE', 'PATIENT'] },
                    { identifier: 'NTE', sequence: '6', restrictions: { nillable: true, minOccurs: 0, maxOccurs: 9999 }, isGroup: true, groupPath: ['RESPONSE', 'PATIENT'] },
                    { identifier: 'ORC', sequence: '7', restrictions: { nillable: false, minOccurs: 1, maxOccurs: 1 }, isGroup: true, groupPath: ['RESPONSE', 'ORDER'] },
                    { identifier: 'OBR', sequence: '8', restrictions: { nillable: true, minOccurs: 0, maxOccurs: 1 }, isGroup: true, groupPath: ['RESPONSE', 'ORDER', 'ORDER_DETAIL_SEGMENT'] },
                    { identifier: 'RQD', sequence: '9', restrictions: { nillable: true, minOccurs: 0, maxOccurs: 1 }, isGroup: true, groupPath: ['RESPONSE', 'ORDER', 'ORDER_DETAIL_SEGMENT'] },
                    { identifier: 'RQ1', sequence: '10', restrictions: { nillable: true, minOccurs: 0, maxOccurs: 1 }, isGroup: true, groupPath: ['RESPONSE', 'ORDER', 'ORDER_DETAIL_SEGMENT'] },
                    { identifier: 'RXO', sequence: '11', restrictions: { nillable: true, minOccurs: 0, maxOccurs: 1 }, isGroup: true, groupPath: ['RESPONSE', 'ORDER', 'ORDER_DETAIL_SEGMENT'] },
                    { identifier: 'ODS', sequence: '12', restrictions: { nillable: true, minOccurs: 0, maxOccurs: 1 }, isGroup: true, groupPath: ['RESPONSE', 'ORDER', 'ORDER_DETAIL_SEGMENT'] },
                    { identifier: 'ODT', sequence: '13', restrictions: { nillable: true, minOccurs: 0, maxOccurs: 1 }, isGroup: true, groupPath: ['RESPONSE', 'ORDER', 'ORDER_DETAIL_SEGMENT'] },
                    { identifier: 'NTE', sequence: '14', restrictions: { nillable: true, minOccurs: 0, maxOccurs: 9999 }, isGroup: true, groupPath: ['RESPONSE', 'ORDER'] },
                    { identifier: 'CTI', sequence: '15', restrictions: { nillable: true, minOccurs: 0, maxOccurs: 9999 }, isGroup: true, groupPath: ['RESPONSE', 'ORDER'] },
                ],
                groups: { ref: '2.3' },
            },
            '2.5.1': {
                sequences: { ref: '2.5' },
                groups: { ref: '2.3' },
            },
            2.6: {
                sequences: { ref: '2.5' },
                groups: { ref: '2.3' },
            },
        },
        segments: { MSH: MSH, MSA: MSA, ERR: ERR, NTE: NTE, PID: PID, ORC: ORC, OBR: OBR, RQD: RQD, RQ1: RQ1, RXO: RXO, ODS: ODS, ODT: ODT, CTI: CTI },
    };

    constructor(message, version = null) {
        super(message, version);
    }
}
