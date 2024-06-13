import { MSH, ARQ, APR, NTE, PID, PV1, PV2, OBX, PRT, DG1, RGS, AIS, AIG, AIL, AIP } from '@healthcare-interoperability/hl7v2-segments';
import { TriggerEvent } from '@healthcare-interoperability/hl7v2-core';

export class SRM_S11 extends TriggerEvent {
    static TriggerEvent = 'SRM_S11';
    static Structure = {
        versions: {
            2.8: {
                sequences: [
                    {},
                    { identifier: 'MSH', sequence: '1', restrictions: { nillable: false, minOccurs: 1, maxOccurs: 1 }, isGroup: false },
                    { identifier: 'ARQ', sequence: '2', restrictions: { nillable: false, minOccurs: 1, maxOccurs: 1 }, isGroup: false },
                    { identifier: 'APR', sequence: '3', restrictions: { nillable: true, minOccurs: 0, maxOccurs: 1 }, isGroup: false },
                    { identifier: 'NTE', sequence: '4', restrictions: { nillable: true, minOccurs: 0, maxOccurs: 9999 }, isGroup: false },
                    { identifier: 'PID', sequence: '5', restrictions: { nillable: false, minOccurs: 1, maxOccurs: 1 }, isGroup: true, groupPath: ['PATIENT'] },
                    { identifier: 'PV1', sequence: '6', restrictions: { nillable: true, minOccurs: 0, maxOccurs: 1 }, isGroup: true, groupPath: ['PATIENT'] },
                    { identifier: 'PV2', sequence: '7', restrictions: { nillable: true, minOccurs: 0, maxOccurs: 1 }, isGroup: true, groupPath: ['PATIENT'] },
                    { identifier: 'OBX', sequence: '8', restrictions: { nillable: false, minOccurs: 1, maxOccurs: 1 }, isGroup: true, groupPath: ['PATIENT', 'OBSERVATION'] },
                    { identifier: 'PRT', sequence: '9', restrictions: { nillable: true, minOccurs: 0, maxOccurs: 9999 }, isGroup: true, groupPath: ['PATIENT', 'OBSERVATION'] },
                    { identifier: 'DG1', sequence: '10', restrictions: { nillable: true, minOccurs: 0, maxOccurs: 9999 }, isGroup: true, groupPath: ['PATIENT'] },
                    { identifier: 'RGS', sequence: '11', restrictions: { nillable: false, minOccurs: 1, maxOccurs: 1 }, isGroup: true, groupPath: ['RESOURCES'] },
                    { identifier: 'AIS', sequence: '12', restrictions: { nillable: false, minOccurs: 1, maxOccurs: 1 }, isGroup: true, groupPath: ['RESOURCES', 'SERVICE'] },
                    { identifier: 'APR', sequence: '13', restrictions: { nillable: true, minOccurs: 0, maxOccurs: 1 }, isGroup: true, groupPath: ['RESOURCES', 'SERVICE'] },
                    { identifier: 'NTE', sequence: '14', restrictions: { nillable: true, minOccurs: 0, maxOccurs: 9999 }, isGroup: true, groupPath: ['RESOURCES', 'SERVICE'] },
                    { identifier: 'AIG', sequence: '15', restrictions: { nillable: false, minOccurs: 1, maxOccurs: 1 }, isGroup: true, groupPath: ['RESOURCES', 'GENERAL_RESOURCE'] },
                    { identifier: 'APR', sequence: '16', restrictions: { nillable: true, minOccurs: 0, maxOccurs: 1 }, isGroup: true, groupPath: ['RESOURCES', 'GENERAL_RESOURCE'] },
                    { identifier: 'NTE', sequence: '17', restrictions: { nillable: true, minOccurs: 0, maxOccurs: 9999 }, isGroup: true, groupPath: ['RESOURCES', 'GENERAL_RESOURCE'] },
                    { identifier: 'AIL', sequence: '18', restrictions: { nillable: false, minOccurs: 1, maxOccurs: 1 }, isGroup: true, groupPath: ['RESOURCES', 'LOCATION_RESOURCE'] },
                    { identifier: 'APR', sequence: '19', restrictions: { nillable: true, minOccurs: 0, maxOccurs: 1 }, isGroup: true, groupPath: ['RESOURCES', 'LOCATION_RESOURCE'] },
                    { identifier: 'NTE', sequence: '20', restrictions: { nillable: true, minOccurs: 0, maxOccurs: 9999 }, isGroup: true, groupPath: ['RESOURCES', 'LOCATION_RESOURCE'] },
                    { identifier: 'AIP', sequence: '21', restrictions: { nillable: false, minOccurs: 1, maxOccurs: 1 }, isGroup: true, groupPath: ['RESOURCES', 'PERSONNEL_RESOURCE'] },
                    { identifier: 'APR', sequence: '22', restrictions: { nillable: true, minOccurs: 0, maxOccurs: 1 }, isGroup: true, groupPath: ['RESOURCES', 'PERSONNEL_RESOURCE'] },
                    { identifier: 'NTE', sequence: '23', restrictions: { nillable: true, minOccurs: 0, maxOccurs: 9999 }, isGroup: true, groupPath: ['RESOURCES', 'PERSONNEL_RESOURCE'] },
                ],
                groups: {
                    PATIENT: {
                        sequence: { start: '5', stop: '10' },
                        restrictions: { nillable: true, minOccurs: 0, maxOccurs: 9999 },
                        subgroup: { OBSERVATION: { sequence: { start: '8', stop: '9' }, restrictions: { nillable: true, minOccurs: 0, maxOccurs: 9999 }, subgroup: {} } },
                    },
                    RESOURCES: {
                        sequence: { start: '11', stop: null },
                        restrictions: { nillable: false, minOccurs: 1, maxOccurs: 9999 },
                        subgroup: {
                            SERVICE: { sequence: { start: '12', stop: '14' }, restrictions: { nillable: true, minOccurs: 0, maxOccurs: 9999 }, subgroup: {} },
                            GENERAL_RESOURCE: { sequence: { start: '15', stop: '17' }, restrictions: { nillable: true, minOccurs: 0, maxOccurs: 9999 }, subgroup: {} },
                            LOCATION_RESOURCE: { sequence: { start: '18', stop: '20' }, restrictions: { nillable: true, minOccurs: 0, maxOccurs: 9999 }, subgroup: {} },
                            PERSONNEL_RESOURCE: { sequence: { start: '21', stop: '23' }, restrictions: { nillable: true, minOccurs: 0, maxOccurs: 9999 }, subgroup: {} },
                        },
                    },
                },
            },
            2.3: {
                sequences: [
                    {},
                    { identifier: 'MSH', sequence: '1', restrictions: { nillable: false, minOccurs: 1, maxOccurs: 1 }, isGroup: false },
                    { identifier: 'ARQ', sequence: '2', restrictions: { nillable: false, minOccurs: 1, maxOccurs: 1 }, isGroup: false },
                    { identifier: 'APR', sequence: '3', restrictions: { nillable: true, minOccurs: 0, maxOccurs: 1 }, isGroup: false },
                    { identifier: 'NTE', sequence: '4', restrictions: { nillable: true, minOccurs: 0, maxOccurs: 9999 }, isGroup: false },
                    { identifier: 'PID', sequence: '5', restrictions: { nillable: false, minOccurs: 1, maxOccurs: 1 }, isGroup: true, groupPath: ['PATIENT'] },
                    { identifier: 'PV1', sequence: '6', restrictions: { nillable: true, minOccurs: 0, maxOccurs: 1 }, isGroup: true, groupPath: ['PATIENT'] },
                    { identifier: 'PV2', sequence: '7', restrictions: { nillable: true, minOccurs: 0, maxOccurs: 1 }, isGroup: true, groupPath: ['PATIENT'] },
                    { identifier: 'OBX', sequence: '8', restrictions: { nillable: true, minOccurs: 0, maxOccurs: 9999 }, isGroup: true, groupPath: ['PATIENT'] },
                    { identifier: 'DG1', sequence: '9', restrictions: { nillable: true, minOccurs: 0, maxOccurs: 9999 }, isGroup: true, groupPath: ['PATIENT'] },
                    { identifier: 'RGS', sequence: '10', restrictions: { nillable: false, minOccurs: 1, maxOccurs: 1 }, isGroup: true, groupPath: ['RESOURCES'] },
                    { identifier: 'AIS', sequence: '11', restrictions: { nillable: false, minOccurs: 1, maxOccurs: 1 }, isGroup: true, groupPath: ['RESOURCES', 'SERVICE'] },
                    { identifier: 'APR', sequence: '12', restrictions: { nillable: true, minOccurs: 0, maxOccurs: 1 }, isGroup: true, groupPath: ['RESOURCES', 'SERVICE'] },
                    { identifier: 'NTE', sequence: '13', restrictions: { nillable: true, minOccurs: 0, maxOccurs: 9999 }, isGroup: true, groupPath: ['RESOURCES', 'SERVICE'] },
                    { identifier: 'AIG', sequence: '14', restrictions: { nillable: false, minOccurs: 1, maxOccurs: 1 }, isGroup: true, groupPath: ['RESOURCES', 'GENERAL_RESOURCE'] },
                    { identifier: 'APR', sequence: '15', restrictions: { nillable: true, minOccurs: 0, maxOccurs: 1 }, isGroup: true, groupPath: ['RESOURCES', 'GENERAL_RESOURCE'] },
                    { identifier: 'NTE', sequence: '16', restrictions: { nillable: true, minOccurs: 0, maxOccurs: 9999 }, isGroup: true, groupPath: ['RESOURCES', 'GENERAL_RESOURCE'] },
                    { identifier: 'AIL', sequence: '17', restrictions: { nillable: false, minOccurs: 1, maxOccurs: 1 }, isGroup: true, groupPath: ['RESOURCES', 'LOCATION_RESOURCE'] },
                    { identifier: 'APR', sequence: '18', restrictions: { nillable: true, minOccurs: 0, maxOccurs: 1 }, isGroup: true, groupPath: ['RESOURCES', 'LOCATION_RESOURCE'] },
                    { identifier: 'NTE', sequence: '19', restrictions: { nillable: true, minOccurs: 0, maxOccurs: 9999 }, isGroup: true, groupPath: ['RESOURCES', 'LOCATION_RESOURCE'] },
                    { identifier: 'AIP', sequence: '20', restrictions: { nillable: false, minOccurs: 1, maxOccurs: 1 }, isGroup: true, groupPath: ['RESOURCES', 'PERSONNEL_RESOURCE'] },
                    { identifier: 'APR', sequence: '21', restrictions: { nillable: true, minOccurs: 0, maxOccurs: 1 }, isGroup: true, groupPath: ['RESOURCES', 'PERSONNEL_RESOURCE'] },
                    { identifier: 'NTE', sequence: '22', restrictions: { nillable: true, minOccurs: 0, maxOccurs: 9999 }, isGroup: true, groupPath: ['RESOURCES', 'PERSONNEL_RESOURCE'] },
                ],
                groups: {
                    PATIENT: { sequence: { start: '5', stop: '9' }, restrictions: { nillable: true, minOccurs: 0, maxOccurs: 9999 }, subgroup: {} },
                    RESOURCES: {
                        sequence: { start: '10', stop: null },
                        restrictions: { nillable: false, minOccurs: 1, maxOccurs: 9999 },
                        subgroup: {
                            SERVICE: { sequence: { start: '11', stop: '13' }, restrictions: { nillable: true, minOccurs: 0, maxOccurs: 9999 }, subgroup: {} },
                            GENERAL_RESOURCE: { sequence: { start: '14', stop: '16' }, restrictions: { nillable: true, minOccurs: 0, maxOccurs: 9999 }, subgroup: {} },
                            LOCATION_RESOURCE: { sequence: { start: '17', stop: '19' }, restrictions: { nillable: true, minOccurs: 0, maxOccurs: 9999 }, subgroup: {} },
                            PERSONNEL_RESOURCE: { sequence: { start: '20', stop: '22' }, restrictions: { nillable: true, minOccurs: 0, maxOccurs: 9999 }, subgroup: {} },
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
            2.7: {
                sequences: { ref: '2.3' },
                groups: { ref: '2.3' },
            },
            '2.7.1': {
                sequences: { ref: '2.3' },
                groups: { ref: '2.3' },
            },
        },
        segments: { MSH: MSH, ARQ: ARQ, APR: APR, NTE: NTE, PID: PID, PV1: PV1, PV2: PV2, OBX: OBX, PRT: PRT, DG1: DG1, RGS: RGS, AIS: AIS, AIG: AIG, AIL: AIL, AIP: AIP },
    };

    constructor(message, version = null) {
        super(message, version);
    }
}
