import { MSH, FAC, PSH, PDC, NTE } from '@healthcare-interoperability/hl7v2-segments';
import { TriggerEvent } from '@healthcare-interoperability/hl7v2-core';

export class SUR_P09 extends TriggerEvent {
    static TriggerEvent = 'SUR_P09';
    static Structure = {
        versions: {
            2.3: {
                sequences: [
                    {},
                    { identifier: 'MSH', sequence: '1', restrictions: { nillable: false, minOccurs: 1, maxOccurs: 1 }, isGroup: false },
                    { identifier: 'FAC', sequence: '2', restrictions: { nillable: false, minOccurs: 1, maxOccurs: 1 }, isGroup: true, groupPath: ['FACILITY'] },
                    { identifier: 'PSH', sequence: '3', restrictions: { nillable: false, minOccurs: 1, maxOccurs: 1 }, isGroup: true, groupPath: ['FACILITY', 'PRODUCT'] },
                    { identifier: 'PDC', sequence: '4', restrictions: { nillable: false, minOccurs: 1, maxOccurs: 1 }, isGroup: true, groupPath: ['FACILITY', 'PRODUCT'] },
                    { identifier: 'PSH', sequence: '5', restrictions: { nillable: false, minOccurs: 1, maxOccurs: 1 }, isGroup: true, groupPath: ['FACILITY'] },
                    { identifier: 'FAC', sequence: '6', restrictions: { nillable: false, minOccurs: 1, maxOccurs: 1 }, isGroup: true, groupPath: ['FACILITY', 'FACILITY_DETAIL'] },
                    { identifier: 'PDC', sequence: '7', restrictions: { nillable: false, minOccurs: 1, maxOccurs: 1 }, isGroup: true, groupPath: ['FACILITY', 'FACILITY_DETAIL'] },
                    { identifier: 'NTE', sequence: '8', restrictions: { nillable: false, minOccurs: 1, maxOccurs: 1 }, isGroup: true, groupPath: ['FACILITY', 'FACILITY_DETAIL'] },
                ],
                groups: {
                    FACILITY: {
                        sequence: { start: '2', stop: null },
                        restrictions: { nillable: false, minOccurs: 1, maxOccurs: 9999 },
                        subgroup: {
                            PRODUCT: { sequence: { start: '3', stop: '4' }, restrictions: { nillable: false, minOccurs: 1, maxOccurs: 9999 }, subgroup: {} },
                            FACILITY_DETAIL: { sequence: { start: '6', stop: '8' }, restrictions: { nillable: false, minOccurs: 1, maxOccurs: 9999 }, subgroup: {} },
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
                groups: { ref: '2.3' },
            },
            2.5: {
                sequences: { ref: '2.3' },
                groups: { ref: '2.3' },
            },
            '2.5.1': {
                sequences: { ref: '2.3' },
                groups: { ref: '2.3' },
            },
            2.6: {
                sequences: { ref: '2.3' },
                groups: { ref: '2.3' },
            },
        },
        segments: { MSH: MSH, FAC: FAC, PSH: PSH, PDC: PDC, NTE: NTE },
    };

    constructor(message, version = null) {
        super(message, version);
    }
}
