import { MSH, SFT, MSA, ERR, QAK, QPD, PID, PD1, NK1, PV1, PV2, QRI, DSC } from '@healthcare-interoperability/hl7v2-segments';
import { TriggerEvent } from '@healthcare-interoperability/hl7v2-core';

export class RSP_K32 extends TriggerEvent {
    static TriggerEvent = 'RSP_K32';
    static Structure = {
        versions: {
            2.8: {
                sequences: [
                    {},
                    { identifier: 'MSH', sequence: '1', restrictions: { nillable: false, minOccurs: 1, maxOccurs: 1 }, isGroup: false },
                    { identifier: 'SFT', sequence: '2', restrictions: { nillable: true, minOccurs: 0, maxOccurs: 9999 }, isGroup: false },
                    { identifier: 'MSA', sequence: '3', restrictions: { nillable: false, minOccurs: 1, maxOccurs: 1 }, isGroup: false },
                    { identifier: 'ERR', sequence: '4', restrictions: { nillable: true, minOccurs: 0, maxOccurs: 1 }, isGroup: false },
                    { identifier: 'QAK', sequence: '5', restrictions: { nillable: false, minOccurs: 1, maxOccurs: 1 }, isGroup: false },
                    { identifier: 'QPD', sequence: '6', restrictions: { nillable: false, minOccurs: 1, maxOccurs: 1 }, isGroup: false },
                    { identifier: 'PID', sequence: '7', restrictions: { nillable: false, minOccurs: 1, maxOccurs: 1 }, isGroup: true, groupPath: ['QUERY_RESPONSE'] },
                    { identifier: 'PD1', sequence: '8', restrictions: { nillable: true, minOccurs: 0, maxOccurs: 1 }, isGroup: true, groupPath: ['QUERY_RESPONSE'] },
                    { identifier: 'NK1', sequence: '9', restrictions: { nillable: true, minOccurs: 0, maxOccurs: 9999 }, isGroup: true, groupPath: ['QUERY_RESPONSE'] },
                    { identifier: 'PV1', sequence: '10', restrictions: { nillable: false, minOccurs: 1, maxOccurs: 1 }, isGroup: true, groupPath: ['QUERY_RESPONSE'] },
                    { identifier: 'PV2', sequence: '11', restrictions: { nillable: true, minOccurs: 0, maxOccurs: 1 }, isGroup: true, groupPath: ['QUERY_RESPONSE'] },
                    { identifier: 'QRI', sequence: '12', restrictions: { nillable: true, minOccurs: 0, maxOccurs: 1 }, isGroup: true, groupPath: ['QUERY_RESPONSE'] },
                    { identifier: 'DSC', sequence: '13', restrictions: { nillable: true, minOccurs: 0, maxOccurs: 1 }, isGroup: false },
                ],
                groups: { QUERY_RESPONSE: { sequence: { start: '7', stop: '12' }, restrictions: { nillable: true, minOccurs: 0, maxOccurs: 9999 }, subgroup: {} } },
            },
            2.7: {
                sequences: { ref: '2.8' },
                groups: { ref: '2.8' },
            },
            '2.7.1': {
                sequences: { ref: '2.8' },
                groups: { ref: '2.8' },
            },
        },
        segments: { MSH: MSH, SFT: SFT, MSA: MSA, ERR: ERR, QAK: QAK, QPD: QPD, PID: PID, PD1: PD1, NK1: NK1, PV1: PV1, PV2: PV2, QRI: QRI, DSC: DSC },
    };

    constructor(message, version = null) {
        super(message, version);
    }
}
