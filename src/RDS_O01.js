import { MSH, NTE, PID, PD1, AL1, PV1, PV2, ORC, RXO, RXR, RXC, RXE, RXD, OBX } from '@healthcare-interoperability/hl7v2-segments';
import { TriggerEvent } from '@healthcare-interoperability/hl7v2-core';

export class RDS_O01 extends TriggerEvent {
    static TriggerEvent = 'RDS_O01';
    static Structure = {
        versions: {
            2.3: {
                sequences: [
                    {},
                    { identifier: 'MSH', sequence: '1', restrictions: { nillable: false, minOccurs: 1, maxOccurs: 1 }, isGroup: false },
                    { identifier: 'NTE', sequence: '2', restrictions: { nillable: true, minOccurs: 0, maxOccurs: 9999 }, isGroup: false },
                    { identifier: 'PID', sequence: '3', restrictions: { nillable: false, minOccurs: 1, maxOccurs: 1 }, isGroup: true, groupPath: ['PATIENT'] },
                    { identifier: 'PD1', sequence: '4', restrictions: { nillable: true, minOccurs: 0, maxOccurs: 1 }, isGroup: true, groupPath: ['PATIENT'] },
                    { identifier: 'NTE', sequence: '5', restrictions: { nillable: true, minOccurs: 0, maxOccurs: 9999 }, isGroup: true, groupPath: ['PATIENT'] },
                    { identifier: 'AL1', sequence: '6', restrictions: { nillable: true, minOccurs: 0, maxOccurs: 9999 }, isGroup: true, groupPath: ['PATIENT'] },
                    { identifier: 'PV1', sequence: '7', restrictions: { nillable: false, minOccurs: 1, maxOccurs: 1 }, isGroup: true, groupPath: ['PATIENT', 'PATIENT_VISIT'] },
                    { identifier: 'PV2', sequence: '8', restrictions: { nillable: true, minOccurs: 0, maxOccurs: 1 }, isGroup: true, groupPath: ['PATIENT', 'PATIENT_VISIT'] },
                    { identifier: 'ORC', sequence: '9', restrictions: { nillable: false, minOccurs: 1, maxOccurs: 1 }, isGroup: true, groupPath: ['ORDER'] },
                    { identifier: 'RXO', sequence: '10', restrictions: { nillable: false, minOccurs: 1, maxOccurs: 1 }, isGroup: true, groupPath: ['ORDER', 'ORDER_DETAIL'] },
                    {
                        identifier: 'NTE',
                        sequence: '11',
                        restrictions: { nillable: false, minOccurs: 1, maxOccurs: 9999 },
                        isGroup: true,
                        groupPath: ['ORDER', 'ORDER_DETAIL', 'ORDER_DETAIL_SUPPLEMENT'],
                    },
                    {
                        identifier: 'RXR',
                        sequence: '12',
                        restrictions: { nillable: false, minOccurs: 1, maxOccurs: 9999 },
                        isGroup: true,
                        groupPath: ['ORDER', 'ORDER_DETAIL', 'ORDER_DETAIL_SUPPLEMENT'],
                    },
                    {
                        identifier: 'RXC',
                        sequence: '13',
                        restrictions: { nillable: false, minOccurs: 1, maxOccurs: 9999 },
                        isGroup: true,
                        groupPath: ['ORDER', 'ORDER_DETAIL', 'ORDER_DETAIL_SUPPLEMENT', 'COMPONENT'],
                    },
                    {
                        identifier: 'NTE',
                        sequence: '14',
                        restrictions: { nillable: true, minOccurs: 0, maxOccurs: 9999 },
                        isGroup: true,
                        groupPath: ['ORDER', 'ORDER_DETAIL', 'ORDER_DETAIL_SUPPLEMENT', 'COMPONENT'],
                    },
                    { identifier: 'RXE', sequence: '15', restrictions: { nillable: false, minOccurs: 1, maxOccurs: 1 }, isGroup: true, groupPath: ['ORDER', 'ENCODING'] },
                    { identifier: 'RXR', sequence: '16', restrictions: { nillable: false, minOccurs: 1, maxOccurs: 9999 }, isGroup: true, groupPath: ['ORDER', 'ENCODING'] },
                    { identifier: 'RXC', sequence: '17', restrictions: { nillable: true, minOccurs: 0, maxOccurs: 9999 }, isGroup: true, groupPath: ['ORDER', 'ENCODING'] },
                    { identifier: 'RXD', sequence: '18', restrictions: { nillable: false, minOccurs: 1, maxOccurs: 1 }, isGroup: true, groupPath: ['ORDER'] },
                    { identifier: 'RXR', sequence: '19', restrictions: { nillable: false, minOccurs: 1, maxOccurs: 9999 }, isGroup: true, groupPath: ['ORDER'] },
                    { identifier: 'RXC', sequence: '20', restrictions: { nillable: true, minOccurs: 0, maxOccurs: 9999 }, isGroup: true, groupPath: ['ORDER'] },
                    { identifier: 'OBX', sequence: '21', restrictions: { nillable: false, minOccurs: 1, maxOccurs: 1 }, isGroup: true, groupPath: ['ORDER', 'OBSERVATION'] },
                    { identifier: 'NTE', sequence: '22', restrictions: { nillable: true, minOccurs: 0, maxOccurs: 9999 }, isGroup: true, groupPath: ['ORDER', 'OBSERVATION'] },
                ],
                groups: {
                    PATIENT: {
                        sequence: { start: '3', stop: null },
                        restrictions: { nillable: true, minOccurs: 0, maxOccurs: 1 },
                        subgroup: { PATIENT_VISIT: { sequence: { start: '7', stop: '8' }, restrictions: { nillable: true, minOccurs: 0, maxOccurs: 1 }, subgroup: {} } },
                    },
                    ORDER: {
                        sequence: { start: '9', stop: null },
                        restrictions: { nillable: false, minOccurs: 1, maxOccurs: 9999 },
                        subgroup: {
                            ORDER_DETAIL: {
                                sequence: { start: '10', stop: null },
                                restrictions: { nillable: true, minOccurs: 0, maxOccurs: 1 },
                                subgroup: {
                                    ORDER_DETAIL_SUPPLEMENT: {
                                        sequence: { start: '11', stop: null },
                                        restrictions: { nillable: true, minOccurs: 0, maxOccurs: 1 },
                                        subgroup: { COMPONENT: { sequence: { start: '13', stop: '14' }, restrictions: { nillable: true, minOccurs: 0, maxOccurs: 1 }, subgroup: {} } },
                                    },
                                },
                            },
                            ENCODING: { sequence: { start: '15', stop: '17' }, restrictions: { nillable: true, minOccurs: 0, maxOccurs: 1 }, subgroup: {} },
                            OBSERVATION: { sequence: { start: '21', stop: '22' }, restrictions: { nillable: false, minOccurs: 1, maxOccurs: 9999 }, subgroup: {} },
                        },
                    },
                },
            },
            '2.3.1': {
                sequences: [
                    {},
                    { identifier: 'MSH', sequence: '1', restrictions: { nillable: false, minOccurs: 1, maxOccurs: 1 }, isGroup: false },
                    { identifier: 'NTE', sequence: '2', restrictions: { nillable: true, minOccurs: 0, maxOccurs: 9999 }, isGroup: false },
                    { identifier: 'PID', sequence: '3', restrictions: { nillable: false, minOccurs: 1, maxOccurs: 1 }, isGroup: true, groupPath: ['PATIENT'] },
                    { identifier: 'PD1', sequence: '4', restrictions: { nillable: true, minOccurs: 0, maxOccurs: 1 }, isGroup: true, groupPath: ['PATIENT'] },
                    { identifier: 'NTE', sequence: '5', restrictions: { nillable: true, minOccurs: 0, maxOccurs: 9999 }, isGroup: true, groupPath: ['PATIENT'] },
                    { identifier: 'AL1', sequence: '6', restrictions: { nillable: true, minOccurs: 0, maxOccurs: 9999 }, isGroup: true, groupPath: ['PATIENT'] },
                    { identifier: 'PV1', sequence: '7', restrictions: { nillable: false, minOccurs: 1, maxOccurs: 1 }, isGroup: true, groupPath: ['PATIENT', 'PATIENT_VISIT'] },
                    { identifier: 'PV2', sequence: '8', restrictions: { nillable: true, minOccurs: 0, maxOccurs: 1 }, isGroup: true, groupPath: ['PATIENT', 'PATIENT_VISIT'] },
                    { identifier: 'ORC', sequence: '9', restrictions: { nillable: false, minOccurs: 1, maxOccurs: 1 }, isGroup: true, groupPath: ['ORDER'] },
                    { identifier: 'RXO', sequence: '10', restrictions: { nillable: false, minOccurs: 1, maxOccurs: 1 }, isGroup: true, groupPath: ['ORDER', 'ORDER_DETAIL'] },
                    {
                        identifier: 'NTE',
                        sequence: '11',
                        restrictions: { nillable: false, minOccurs: 1, maxOccurs: 9999 },
                        isGroup: true,
                        groupPath: ['ORDER', 'ORDER_DETAIL', 'ORDER_DETAIL_SUPPLEMENT'],
                    },
                    {
                        identifier: 'RXR',
                        sequence: '12',
                        restrictions: { nillable: false, minOccurs: 1, maxOccurs: 9999 },
                        isGroup: true,
                        groupPath: ['ORDER', 'ORDER_DETAIL', 'ORDER_DETAIL_SUPPLEMENT'],
                    },
                    {
                        identifier: 'RXC',
                        sequence: '13',
                        restrictions: { nillable: false, minOccurs: 1, maxOccurs: 9999 },
                        isGroup: true,
                        groupPath: ['ORDER', 'ORDER_DETAIL', 'ORDER_DETAIL_SUPPLEMENT', 'COMPONENT'],
                    },
                    {
                        identifier: 'NTE',
                        sequence: '14',
                        restrictions: { nillable: true, minOccurs: 0, maxOccurs: 9999 },
                        isGroup: true,
                        groupPath: ['ORDER', 'ORDER_DETAIL', 'ORDER_DETAIL_SUPPLEMENT', 'COMPONENT'],
                    },
                    { identifier: 'RXE', sequence: '15', restrictions: { nillable: false, minOccurs: 1, maxOccurs: 1 }, isGroup: true, groupPath: ['ORDER', 'ENCODING'] },
                    { identifier: 'RXR', sequence: '16', restrictions: { nillable: false, minOccurs: 1, maxOccurs: 9999 }, isGroup: true, groupPath: ['ORDER', 'ENCODING'] },
                    { identifier: 'RXC', sequence: '17', restrictions: { nillable: true, minOccurs: 0, maxOccurs: 9999 }, isGroup: true, groupPath: ['ORDER', 'ENCODING'] },
                    { identifier: 'RXD', sequence: '18', restrictions: { nillable: false, minOccurs: 1, maxOccurs: 1 }, isGroup: true, groupPath: ['ORDER'] },
                    { identifier: 'RXR', sequence: '19', restrictions: { nillable: false, minOccurs: 1, maxOccurs: 9999 }, isGroup: true, groupPath: ['ORDER'] },
                    { identifier: 'RXC', sequence: '20', restrictions: { nillable: true, minOccurs: 0, maxOccurs: 9999 }, isGroup: true, groupPath: ['ORDER'] },
                    { identifier: 'OBX', sequence: '21', restrictions: { nillable: true, minOccurs: 0, maxOccurs: 1 }, isGroup: true, groupPath: ['ORDER', 'OBSERVATION'] },
                    { identifier: 'NTE', sequence: '22', restrictions: { nillable: true, minOccurs: 0, maxOccurs: 9999 }, isGroup: true, groupPath: ['ORDER', 'OBSERVATION'] },
                ],
                groups: { ref: '2.3' },
            },
        },
        segments: { MSH: MSH, NTE: NTE, PID: PID, PD1: PD1, AL1: AL1, PV1: PV1, PV2: PV2, ORC: ORC, RXO: RXO, RXR: RXR, RXC: RXC, RXE: RXE, RXD: RXD, OBX: OBX },
    };

    constructor(message, version = null) {
        super(message, version);
    }
}
