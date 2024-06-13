import { MSH, MSA, ERR, QAK, SCH, NTE, PID, PV1, PV2, DG1, RGS, AIS, AIG, AIP, AIL, DSC, TQ1 } from '@healthcare-interoperability/hl7v2-segments';
import { TriggerEvent } from '@healthcare-interoperability/hl7v2-core';

export class SQR_S25 extends TriggerEvent {
    static TriggerEvent = 'SQR_S25';
    static Structure = {
        versions: {
            2.3: {
                sequences: [
                    {},
                    { identifier: 'MSH', sequence: '1', restrictions: { nillable: false, minOccurs: 1, maxOccurs: 1 }, isGroup: false },
                    { identifier: 'MSA', sequence: '2', restrictions: { nillable: false, minOccurs: 1, maxOccurs: 1 }, isGroup: false },
                    { identifier: 'ERR', sequence: '3', restrictions: { nillable: true, minOccurs: 0, maxOccurs: 1 }, isGroup: false },
                    { identifier: 'QAK', sequence: '4', restrictions: { nillable: false, minOccurs: 1, maxOccurs: 1 }, isGroup: false },
                    { identifier: 'SCH', sequence: '5', restrictions: { nillable: false, minOccurs: 1, maxOccurs: 1 }, isGroup: true, groupPath: ['SCHEDULE'] },
                    { identifier: 'NTE', sequence: '6', restrictions: { nillable: true, minOccurs: 0, maxOccurs: 9999 }, isGroup: true, groupPath: ['SCHEDULE'] },
                    { identifier: 'PID', sequence: '7', restrictions: { nillable: false, minOccurs: 1, maxOccurs: 1 }, isGroup: true, groupPath: ['SCHEDULE', 'PATIENT'] },
                    { identifier: 'PV1', sequence: '8', restrictions: { nillable: true, minOccurs: 0, maxOccurs: 1 }, isGroup: true, groupPath: ['SCHEDULE', 'PATIENT'] },
                    { identifier: 'PV2', sequence: '9', restrictions: { nillable: true, minOccurs: 0, maxOccurs: 1 }, isGroup: true, groupPath: ['SCHEDULE', 'PATIENT'] },
                    { identifier: 'DG1', sequence: '10', restrictions: { nillable: true, minOccurs: 0, maxOccurs: 1 }, isGroup: true, groupPath: ['SCHEDULE', 'PATIENT'] },
                    { identifier: 'RGS', sequence: '11', restrictions: { nillable: false, minOccurs: 1, maxOccurs: 1 }, isGroup: true, groupPath: ['SCHEDULE', 'RESOURCES'] },
                    { identifier: 'AIS', sequence: '12', restrictions: { nillable: false, minOccurs: 1, maxOccurs: 1 }, isGroup: true, groupPath: ['SCHEDULE', 'RESOURCES', 'SERVICE'] },
                    { identifier: 'NTE', sequence: '13', restrictions: { nillable: true, minOccurs: 0, maxOccurs: 9999 }, isGroup: true, groupPath: ['SCHEDULE', 'RESOURCES', 'SERVICE'] },
                    { identifier: 'AIG', sequence: '14', restrictions: { nillable: false, minOccurs: 1, maxOccurs: 1 }, isGroup: true, groupPath: ['SCHEDULE', 'RESOURCES', 'GENERAL_RESOURCE'] },
                    { identifier: 'NTE', sequence: '15', restrictions: { nillable: true, minOccurs: 0, maxOccurs: 9999 }, isGroup: true, groupPath: ['SCHEDULE', 'RESOURCES', 'GENERAL_RESOURCE'] },
                    { identifier: 'AIP', sequence: '16', restrictions: { nillable: false, minOccurs: 1, maxOccurs: 1 }, isGroup: true, groupPath: ['SCHEDULE', 'RESOURCES', 'PERSONNEL_RESOURCE'] },
                    { identifier: 'NTE', sequence: '17', restrictions: { nillable: true, minOccurs: 0, maxOccurs: 9999 }, isGroup: true, groupPath: ['SCHEDULE', 'RESOURCES', 'PERSONNEL_RESOURCE'] },
                    { identifier: 'AIL', sequence: '18', restrictions: { nillable: false, minOccurs: 1, maxOccurs: 1 }, isGroup: true, groupPath: ['SCHEDULE', 'RESOURCES', 'LOCATION_RESOURCE'] },
                    { identifier: 'NTE', sequence: '19', restrictions: { nillable: true, minOccurs: 0, maxOccurs: 9999 }, isGroup: true, groupPath: ['SCHEDULE', 'RESOURCES', 'LOCATION_RESOURCE'] },
                    { identifier: 'DSC', sequence: '20', restrictions: { nillable: true, minOccurs: 0, maxOccurs: 1 }, isGroup: false },
                ],
                groups: {
                    SCHEDULE: {
                        sequence: { start: '5', stop: null },
                        restrictions: { nillable: true, minOccurs: 0, maxOccurs: 9999 },
                        subgroup: {
                            PATIENT: { sequence: { start: '7', stop: '10' }, restrictions: { nillable: true, minOccurs: 0, maxOccurs: 1 }, subgroup: {} },
                            RESOURCES: {
                                sequence: { start: '11', stop: null },
                                restrictions: { nillable: false, minOccurs: 1, maxOccurs: 9999 },
                                subgroup: {
                                    SERVICE: { sequence: { start: '12', stop: '13' }, restrictions: { nillable: true, minOccurs: 0, maxOccurs: 9999 }, subgroup: {} },
                                    GENERAL_RESOURCE: { sequence: { start: '14', stop: '15' }, restrictions: { nillable: true, minOccurs: 0, maxOccurs: 9999 }, subgroup: {} },
                                    PERSONNEL_RESOURCE: { sequence: { start: '16', stop: '17' }, restrictions: { nillable: true, minOccurs: 0, maxOccurs: 9999 }, subgroup: {} },
                                    LOCATION_RESOURCE: { sequence: { start: '18', stop: '19' }, restrictions: { nillable: true, minOccurs: 0, maxOccurs: 9999 }, subgroup: {} },
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
                sequences: [
                    {},
                    { identifier: 'MSH', sequence: '1', restrictions: { nillable: false, minOccurs: 1, maxOccurs: 1 }, isGroup: false },
                    { identifier: 'MSA', sequence: '2', restrictions: { nillable: false, minOccurs: 1, maxOccurs: 1 }, isGroup: false },
                    { identifier: 'ERR', sequence: '3', restrictions: { nillable: true, minOccurs: 0, maxOccurs: 9999 }, isGroup: false },
                    { identifier: 'QAK', sequence: '4', restrictions: { nillable: false, minOccurs: 1, maxOccurs: 1 }, isGroup: false },
                    { identifier: 'SCH', sequence: '5', restrictions: { nillable: false, minOccurs: 1, maxOccurs: 1 }, isGroup: true, groupPath: ['SCHEDULE'] },
                    { identifier: 'TQ1', sequence: '6', restrictions: { nillable: true, minOccurs: 0, maxOccurs: 9999 }, isGroup: true, groupPath: ['SCHEDULE'] },
                    { identifier: 'NTE', sequence: '7', restrictions: { nillable: true, minOccurs: 0, maxOccurs: 9999 }, isGroup: true, groupPath: ['SCHEDULE'] },
                    { identifier: 'PID', sequence: '8', restrictions: { nillable: false, minOccurs: 1, maxOccurs: 1 }, isGroup: true, groupPath: ['SCHEDULE', 'PATIENT'] },
                    { identifier: 'PV1', sequence: '9', restrictions: { nillable: true, minOccurs: 0, maxOccurs: 1 }, isGroup: true, groupPath: ['SCHEDULE', 'PATIENT'] },
                    { identifier: 'PV2', sequence: '10', restrictions: { nillable: true, minOccurs: 0, maxOccurs: 1 }, isGroup: true, groupPath: ['SCHEDULE', 'PATIENT'] },
                    { identifier: 'DG1', sequence: '11', restrictions: { nillable: true, minOccurs: 0, maxOccurs: 1 }, isGroup: true, groupPath: ['SCHEDULE', 'PATIENT'] },
                    { identifier: 'RGS', sequence: '12', restrictions: { nillable: false, minOccurs: 1, maxOccurs: 1 }, isGroup: true, groupPath: ['SCHEDULE', 'RESOURCES'] },
                    { identifier: 'AIS', sequence: '13', restrictions: { nillable: false, minOccurs: 1, maxOccurs: 1 }, isGroup: true, groupPath: ['SCHEDULE', 'RESOURCES', 'SERVICE'] },
                    { identifier: 'NTE', sequence: '14', restrictions: { nillable: true, minOccurs: 0, maxOccurs: 9999 }, isGroup: true, groupPath: ['SCHEDULE', 'RESOURCES', 'SERVICE'] },
                    { identifier: 'AIG', sequence: '15', restrictions: { nillable: false, minOccurs: 1, maxOccurs: 1 }, isGroup: true, groupPath: ['SCHEDULE', 'RESOURCES', 'GENERAL_RESOURCE'] },
                    { identifier: 'NTE', sequence: '16', restrictions: { nillable: true, minOccurs: 0, maxOccurs: 9999 }, isGroup: true, groupPath: ['SCHEDULE', 'RESOURCES', 'GENERAL_RESOURCE'] },
                    { identifier: 'AIP', sequence: '17', restrictions: { nillable: false, minOccurs: 1, maxOccurs: 1 }, isGroup: true, groupPath: ['SCHEDULE', 'RESOURCES', 'PERSONNEL_RESOURCE'] },
                    { identifier: 'NTE', sequence: '18', restrictions: { nillable: true, minOccurs: 0, maxOccurs: 9999 }, isGroup: true, groupPath: ['SCHEDULE', 'RESOURCES', 'PERSONNEL_RESOURCE'] },
                    { identifier: 'AIL', sequence: '19', restrictions: { nillable: false, minOccurs: 1, maxOccurs: 1 }, isGroup: true, groupPath: ['SCHEDULE', 'RESOURCES', 'LOCATION_RESOURCE'] },
                    { identifier: 'NTE', sequence: '20', restrictions: { nillable: true, minOccurs: 0, maxOccurs: 9999 }, isGroup: true, groupPath: ['SCHEDULE', 'RESOURCES', 'LOCATION_RESOURCE'] },
                    { identifier: 'DSC', sequence: '21', restrictions: { nillable: true, minOccurs: 0, maxOccurs: 1 }, isGroup: false },
                ],
                groups: {
                    SCHEDULE: {
                        sequence: { start: '5', stop: null },
                        restrictions: { nillable: true, minOccurs: 0, maxOccurs: 9999 },
                        subgroup: {
                            PATIENT: { sequence: { start: '8', stop: '11' }, restrictions: { nillable: true, minOccurs: 0, maxOccurs: 1 }, subgroup: {} },
                            RESOURCES: {
                                sequence: { start: '12', stop: null },
                                restrictions: { nillable: false, minOccurs: 1, maxOccurs: 9999 },
                                subgroup: {
                                    SERVICE: { sequence: { start: '13', stop: '14' }, restrictions: { nillable: true, minOccurs: 0, maxOccurs: 9999 }, subgroup: {} },
                                    GENERAL_RESOURCE: { sequence: { start: '15', stop: '16' }, restrictions: { nillable: true, minOccurs: 0, maxOccurs: 9999 }, subgroup: {} },
                                    PERSONNEL_RESOURCE: { sequence: { start: '17', stop: '18' }, restrictions: { nillable: true, minOccurs: 0, maxOccurs: 9999 }, subgroup: {} },
                                    LOCATION_RESOURCE: { sequence: { start: '19', stop: '20' }, restrictions: { nillable: true, minOccurs: 0, maxOccurs: 9999 }, subgroup: {} },
                                },
                            },
                        },
                    },
                },
            },
            '2.5.1': {
                sequences: { ref: '2.5' },
                groups: { ref: '2.5' },
            },
            2.6: {
                sequences: { ref: '2.5' },
                groups: { ref: '2.5' },
            },
        },
        segments: { MSH: MSH, MSA: MSA, ERR: ERR, QAK: QAK, SCH: SCH, NTE: NTE, PID: PID, PV1: PV1, PV2: PV2, DG1: DG1, RGS: RGS, AIS: AIS, AIG: AIG, AIP: AIP, AIL: AIL, DSC: DSC, TQ1: TQ1 },
    };

    constructor(message, version = null) {
        super(message, version);
    }
}
