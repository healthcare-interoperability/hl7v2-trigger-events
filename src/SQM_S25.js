import { MSH, QRD, QRF, ARQ, APR, PID, RGS, AIS, AIG, AIP, AIL, DSC } from '@healthcare-interoperability/hl7v2-segments';
import { TriggerEvent } from '@healthcare-interoperability/hl7v2-core';

export class SQM_S25 extends TriggerEvent {
    static TriggerEvent = 'SQM_S25';
    static Structure = {
        versions: {
            2.3: {
                sequences: [
                    {},
                    { identifier: 'MSH', sequence: '1', restrictions: { nillable: false, minOccurs: 1, maxOccurs: 1 }, isGroup: false },
                    { identifier: 'QRD', sequence: '2', restrictions: { nillable: false, minOccurs: 1, maxOccurs: 1 }, isGroup: false },
                    { identifier: 'QRF', sequence: '3', restrictions: { nillable: true, minOccurs: 0, maxOccurs: 1 }, isGroup: false },
                    { identifier: 'ARQ', sequence: '4', restrictions: { nillable: false, minOccurs: 1, maxOccurs: 1 }, isGroup: true, groupPath: ['REQUEST'] },
                    { identifier: 'APR', sequence: '5', restrictions: { nillable: true, minOccurs: 0, maxOccurs: 1 }, isGroup: true, groupPath: ['REQUEST'] },
                    { identifier: 'PID', sequence: '6', restrictions: { nillable: true, minOccurs: 0, maxOccurs: 1 }, isGroup: true, groupPath: ['REQUEST'] },
                    { identifier: 'RGS', sequence: '7', restrictions: { nillable: false, minOccurs: 1, maxOccurs: 1 }, isGroup: true, groupPath: ['REQUEST', 'RESOURCES'] },
                    { identifier: 'AIS', sequence: '8', restrictions: { nillable: false, minOccurs: 1, maxOccurs: 1 }, isGroup: true, groupPath: ['REQUEST', 'RESOURCES', 'SERVICE'] },
                    { identifier: 'APR', sequence: '9', restrictions: { nillable: true, minOccurs: 0, maxOccurs: 1 }, isGroup: true, groupPath: ['REQUEST', 'RESOURCES', 'SERVICE'] },
                    { identifier: 'AIG', sequence: '10', restrictions: { nillable: false, minOccurs: 1, maxOccurs: 1 }, isGroup: true, groupPath: ['REQUEST', 'RESOURCES', 'GENERAL_RESOURCE'] },
                    { identifier: 'APR', sequence: '11', restrictions: { nillable: true, minOccurs: 0, maxOccurs: 1 }, isGroup: true, groupPath: ['REQUEST', 'RESOURCES', 'GENERAL_RESOURCE'] },
                    { identifier: 'AIP', sequence: '12', restrictions: { nillable: false, minOccurs: 1, maxOccurs: 1 }, isGroup: true, groupPath: ['REQUEST', 'RESOURCES', 'PERSONNEL_RESOURCE'] },
                    { identifier: 'APR', sequence: '13', restrictions: { nillable: true, minOccurs: 0, maxOccurs: 1 }, isGroup: true, groupPath: ['REQUEST', 'RESOURCES', 'PERSONNEL_RESOURCE'] },
                    { identifier: 'AIL', sequence: '14', restrictions: { nillable: false, minOccurs: 1, maxOccurs: 1 }, isGroup: true, groupPath: ['REQUEST', 'RESOURCES', 'LOCATION_RESOURCE'] },
                    { identifier: 'APR', sequence: '15', restrictions: { nillable: true, minOccurs: 0, maxOccurs: 1 }, isGroup: true, groupPath: ['REQUEST', 'RESOURCES', 'LOCATION_RESOURCE'] },
                    { identifier: 'DSC', sequence: '16', restrictions: { nillable: true, minOccurs: 0, maxOccurs: 1 }, isGroup: false },
                ],
                groups: {
                    REQUEST: {
                        sequence: { start: '4', stop: null },
                        restrictions: { nillable: true, minOccurs: 0, maxOccurs: 1 },
                        subgroup: {
                            RESOURCES: {
                                sequence: { start: '7', stop: null },
                                restrictions: { nillable: false, minOccurs: 1, maxOccurs: 9999 },
                                subgroup: {
                                    SERVICE: { sequence: { start: '8', stop: '9' }, restrictions: { nillable: true, minOccurs: 0, maxOccurs: 9999 }, subgroup: {} },
                                    GENERAL_RESOURCE: { sequence: { start: '10', stop: '11' }, restrictions: { nillable: true, minOccurs: 0, maxOccurs: 9999 }, subgroup: {} },
                                    PERSONNEL_RESOURCE: { sequence: { start: '12', stop: '13' }, restrictions: { nillable: true, minOccurs: 0, maxOccurs: 9999 }, subgroup: {} },
                                    LOCATION_RESOURCE: { sequence: { start: '14', stop: '15' }, restrictions: { nillable: true, minOccurs: 0, maxOccurs: 9999 }, subgroup: {} },
                                },
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
        segments: { MSH: MSH, QRD: QRD, QRF: QRF, ARQ: ARQ, APR: APR, PID: PID, RGS: RGS, AIS: AIS, AIG: AIG, AIP: AIP, AIL: AIL, DSC: DSC },
    };

    constructor(message, version = null) {
        super(message, version);
    }
}
