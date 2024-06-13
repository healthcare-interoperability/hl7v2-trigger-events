import { MSH, NTE, PID, AL1, PV1, PV2, ORC, RXO, RXR, RXC, RXE, RXG, OBX } from '@healthcare-interoperability/hl7v2-segments';
import { TriggerEvent } from '@healthcare-interoperability/hl7v2-core';

export class RGV_O01 extends TriggerEvent {
    static TriggerEvent = 'RGV_O01';
    static Structure = {
        versions: {
            2.3: {
                sequences: [
                    {},
                    { identifier: 'MSH', sequence: '1', restrictions: { nillable: false, minOccurs: 1, maxOccurs: 1 }, isGroup: false },
                    { identifier: 'NTE', sequence: '2', restrictions: { nillable: true, minOccurs: 0, maxOccurs: 9999 }, isGroup: false },
                    { identifier: 'PID', sequence: '3', restrictions: { nillable: false, minOccurs: 1, maxOccurs: 1 }, isGroup: true, groupPath: ['PATIENT'] },
                    { identifier: 'NTE', sequence: '4', restrictions: { nillable: true, minOccurs: 0, maxOccurs: 9999 }, isGroup: true, groupPath: ['PATIENT'] },
                    { identifier: 'AL1', sequence: '5', restrictions: { nillable: true, minOccurs: 0, maxOccurs: 9999 }, isGroup: true, groupPath: ['PATIENT'] },
                    { identifier: 'PV1', sequence: '6', restrictions: { nillable: false, minOccurs: 1, maxOccurs: 1 }, isGroup: true, groupPath: ['PATIENT', 'PATIENT_VISIT'] },
                    { identifier: 'PV2', sequence: '7', restrictions: { nillable: true, minOccurs: 0, maxOccurs: 1 }, isGroup: true, groupPath: ['PATIENT', 'PATIENT_VISIT'] },
                    { identifier: 'ORC', sequence: '8', restrictions: { nillable: false, minOccurs: 1, maxOccurs: 1 }, isGroup: true, groupPath: ['ORDER'] },
                    { identifier: 'RXO', sequence: '9', restrictions: { nillable: false, minOccurs: 1, maxOccurs: 1 }, isGroup: true, groupPath: ['ORDER', 'ORDER_DETAIL'] },
                    {
                        identifier: 'NTE',
                        sequence: '10',
                        restrictions: { nillable: false, minOccurs: 1, maxOccurs: 9999 },
                        isGroup: true,
                        groupPath: ['ORDER', 'ORDER_DETAIL', 'ORDER_DETAIL_SUPPLEMENT'],
                    },
                    {
                        identifier: 'RXR',
                        sequence: '11',
                        restrictions: { nillable: false, minOccurs: 1, maxOccurs: 9999 },
                        isGroup: true,
                        groupPath: ['ORDER', 'ORDER_DETAIL', 'ORDER_DETAIL_SUPPLEMENT'],
                    },
                    {
                        identifier: 'RXC',
                        sequence: '12',
                        restrictions: { nillable: false, minOccurs: 1, maxOccurs: 9999 },
                        isGroup: true,
                        groupPath: ['ORDER', 'ORDER_DETAIL', 'ORDER_DETAIL_SUPPLEMENT', 'COMPONENTS'],
                    },
                    {
                        identifier: 'NTE',
                        sequence: '13',
                        restrictions: { nillable: true, minOccurs: 0, maxOccurs: 9999 },
                        isGroup: true,
                        groupPath: ['ORDER', 'ORDER_DETAIL', 'ORDER_DETAIL_SUPPLEMENT', 'COMPONENTS'],
                    },
                    { identifier: 'RXE', sequence: '14', restrictions: { nillable: false, minOccurs: 1, maxOccurs: 1 }, isGroup: true, groupPath: ['ORDER', 'ENCODING'] },
                    { identifier: 'RXR', sequence: '15', restrictions: { nillable: false, minOccurs: 1, maxOccurs: 9999 }, isGroup: true, groupPath: ['ORDER', 'ENCODING'] },
                    { identifier: 'RXC', sequence: '16', restrictions: { nillable: true, minOccurs: 0, maxOccurs: 9999 }, isGroup: true, groupPath: ['ORDER', 'ENCODING'] },
                    { identifier: 'RXG', sequence: '17', restrictions: { nillable: false, minOccurs: 1, maxOccurs: 1 }, isGroup: true, groupPath: ['ORDER', 'GIVE'] },
                    { identifier: 'RXR', sequence: '18', restrictions: { nillable: false, minOccurs: 1, maxOccurs: 9999 }, isGroup: true, groupPath: ['ORDER', 'GIVE'] },
                    { identifier: 'RXC', sequence: '19', restrictions: { nillable: true, minOccurs: 0, maxOccurs: 9999 }, isGroup: true, groupPath: ['ORDER', 'GIVE'] },
                    { identifier: 'OBX', sequence: '20', restrictions: { nillable: true, minOccurs: 0, maxOccurs: 1 }, isGroup: true, groupPath: ['ORDER', 'GIVE', 'OBSERVATION'] },
                    { identifier: 'NTE', sequence: '21', restrictions: { nillable: true, minOccurs: 0, maxOccurs: 9999 }, isGroup: true, groupPath: ['ORDER', 'GIVE', 'OBSERVATION'] },
                ],
                groups: {
                    PATIENT: {
                        sequence: { start: '3', stop: null },
                        restrictions: { nillable: true, minOccurs: 0, maxOccurs: 1 },
                        subgroup: { PATIENT_VISIT: { sequence: { start: '6', stop: '7' }, restrictions: { nillable: true, minOccurs: 0, maxOccurs: 1 }, subgroup: {} } },
                    },
                    ORDER: {
                        sequence: { start: '8', stop: null },
                        restrictions: { nillable: false, minOccurs: 1, maxOccurs: 9999 },
                        subgroup: {
                            ORDER_DETAIL: {
                                sequence: { start: '9', stop: null },
                                restrictions: { nillable: true, minOccurs: 0, maxOccurs: 1 },
                                subgroup: {
                                    ORDER_DETAIL_SUPPLEMENT: {
                                        sequence: { start: '10', stop: null },
                                        restrictions: { nillable: true, minOccurs: 0, maxOccurs: 1 },
                                        subgroup: { COMPONENTS: { sequence: { start: '12', stop: '13' }, restrictions: { nillable: true, minOccurs: 0, maxOccurs: 1 }, subgroup: {} } },
                                    },
                                },
                            },
                            ENCODING: { sequence: { start: '14', stop: '16' }, restrictions: { nillable: true, minOccurs: 0, maxOccurs: 1 }, subgroup: {} },
                            GIVE: {
                                sequence: { start: '17', stop: null },
                                restrictions: { nillable: false, minOccurs: 1, maxOccurs: 9999 },
                                subgroup: { OBSERVATION: { sequence: { start: '20', stop: '21' }, restrictions: { nillable: false, minOccurs: 1, maxOccurs: 9999 }, subgroup: {} } },
                            },
                        },
                    },
                },
            },
            '2.3.1': {
                sequences: { ref: '2.3' },
                groups: { ref: '2.3' },
            },
        },
        segments: { MSH: MSH, NTE: NTE, PID: PID, AL1: AL1, PV1: PV1, PV2: PV2, ORC: ORC, RXO: RXO, RXR: RXR, RXC: RXC, RXE: RXE, RXG: RXG, OBX: OBX },
    };

    constructor(message, version = null) {
        super(message, version);
    }
}
