import { MSH, SFT, UAC, SHP, PRT, OBX, PAC, SPM, SAC, PID, ARV, NK1, PV1 } from '@healthcare-interoperability/hl7v2-segments';
import { TriggerEvent } from '@healthcare-interoperability/hl7v2-core';

export class OSM_R26 extends TriggerEvent {
    static TriggerEvent = 'OSM_R26';
    static Structure = {
        versions: {
            2.8: {
                sequences: [
                    {},
                    { identifier: 'MSH', sequence: '1', restrictions: { nillable: false, minOccurs: 1, maxOccurs: 1 }, isGroup: false },
                    { identifier: 'SFT', sequence: '2', restrictions: { nillable: true, minOccurs: 0, maxOccurs: 9999 }, isGroup: false },
                    { identifier: 'UAC', sequence: '3', restrictions: { nillable: true, minOccurs: 0, maxOccurs: 1 }, isGroup: false },
                    { identifier: 'SHP', sequence: '4', restrictions: { nillable: false, minOccurs: 1, maxOccurs: 1 }, isGroup: true, groupPath: ['SHIPMENT'] },
                    { identifier: 'PRT', sequence: '5', restrictions: { nillable: false, minOccurs: 1, maxOccurs: 9999 }, isGroup: true, groupPath: ['SHIPMENT'] },
                    { identifier: 'OBX', sequence: '6', restrictions: { nillable: false, minOccurs: 1, maxOccurs: 1 }, isGroup: true, groupPath: ['SHIPMENT', 'SHIPPING_OBSERVATION'] },
                    { identifier: 'PRT', sequence: '7', restrictions: { nillable: true, minOccurs: 0, maxOccurs: 9999 }, isGroup: true, groupPath: ['SHIPMENT', 'SHIPPING_OBSERVATION'] },
                    { identifier: 'PAC', sequence: '8', restrictions: { nillable: false, minOccurs: 1, maxOccurs: 1 }, isGroup: true, groupPath: ['SHIPMENT', 'PACKAGE'] },
                    { identifier: 'PRT', sequence: '9', restrictions: { nillable: true, minOccurs: 0, maxOccurs: 9999 }, isGroup: true, groupPath: ['SHIPMENT', 'PACKAGE'] },
                    { identifier: 'SPM', sequence: '10', restrictions: { nillable: false, minOccurs: 1, maxOccurs: 1 }, isGroup: true, groupPath: ['SHIPMENT', 'PACKAGE', 'SPECIMEN'] },
                    { identifier: 'PRT', sequence: '11', restrictions: { nillable: true, minOccurs: 0, maxOccurs: 9999 }, isGroup: true, groupPath: ['SHIPMENT', 'PACKAGE', 'SPECIMEN'] },
                    {
                        identifier: 'OBX',
                        sequence: '12',
                        restrictions: { nillable: false, minOccurs: 1, maxOccurs: 1 },
                        isGroup: true,
                        groupPath: ['SHIPMENT', 'PACKAGE', 'SPECIMEN', 'SPECIMEN_OBSERVATION'],
                    },
                    {
                        identifier: 'PRT',
                        sequence: '13',
                        restrictions: { nillable: true, minOccurs: 0, maxOccurs: 9999 },
                        isGroup: true,
                        groupPath: ['SHIPMENT', 'PACKAGE', 'SPECIMEN', 'SPECIMEN_OBSERVATION'],
                    },
                    { identifier: 'SAC', sequence: '14', restrictions: { nillable: false, minOccurs: 1, maxOccurs: 1 }, isGroup: true, groupPath: ['SHIPMENT', 'PACKAGE', 'SPECIMEN', 'CONTAINER'] },
                    {
                        identifier: 'OBX',
                        sequence: '15',
                        restrictions: { nillable: false, minOccurs: 1, maxOccurs: 1 },
                        isGroup: true,
                        groupPath: ['SHIPMENT', 'PACKAGE', 'SPECIMEN', 'CONTAINER', 'CONTAINER_OBSERVATION'],
                    },
                    {
                        identifier: 'PRT',
                        sequence: '16',
                        restrictions: { nillable: true, minOccurs: 0, maxOccurs: 9999 },
                        isGroup: true,
                        groupPath: ['SHIPMENT', 'PACKAGE', 'SPECIMEN', 'CONTAINER', 'CONTAINER_OBSERVATION'],
                    },
                    {
                        identifier: 'PID',
                        sequence: '17',
                        restrictions: { nillable: false, minOccurs: 1, maxOccurs: 1 },
                        isGroup: true,
                        groupPath: ['SHIPMENT', 'PACKAGE', 'SPECIMEN', 'SUBJECT_PERSON_ANIMAL_IDENTIFICATION'],
                    },
                    {
                        identifier: 'PRT',
                        sequence: '18',
                        restrictions: { nillable: true, minOccurs: 0, maxOccurs: 9999 },
                        isGroup: true,
                        groupPath: ['SHIPMENT', 'PACKAGE', 'SPECIMEN', 'SUBJECT_PERSON_ANIMAL_IDENTIFICATION'],
                    },
                    {
                        identifier: 'ARV',
                        sequence: '19',
                        restrictions: { nillable: true, minOccurs: 0, maxOccurs: 9999 },
                        isGroup: true,
                        groupPath: ['SHIPMENT', 'PACKAGE', 'SPECIMEN', 'SUBJECT_PERSON_ANIMAL_IDENTIFICATION'],
                    },
                    {
                        identifier: 'OBX',
                        sequence: '20',
                        restrictions: { nillable: false, minOccurs: 1, maxOccurs: 1 },
                        isGroup: true,
                        groupPath: ['SHIPMENT', 'PACKAGE', 'SPECIMEN', 'SUBJECT_PERSON_ANIMAL_IDENTIFICATION', 'PATIENT_OBSERVATION'],
                    },
                    {
                        identifier: 'PRT',
                        sequence: '21',
                        restrictions: { nillable: true, minOccurs: 0, maxOccurs: 9999 },
                        isGroup: true,
                        groupPath: ['SHIPMENT', 'PACKAGE', 'SPECIMEN', 'SUBJECT_PERSON_ANIMAL_IDENTIFICATION', 'PATIENT_OBSERVATION'],
                    },
                    {
                        identifier: 'NK1',
                        sequence: '22',
                        restrictions: { nillable: true, minOccurs: 0, maxOccurs: 9999 },
                        isGroup: true,
                        groupPath: ['SHIPMENT', 'PACKAGE', 'SPECIMEN', 'SUBJECT_PERSON_ANIMAL_IDENTIFICATION'],
                    },
                    {
                        identifier: 'PV1',
                        sequence: '23',
                        restrictions: { nillable: false, minOccurs: 1, maxOccurs: 1 },
                        isGroup: true,
                        groupPath: ['SHIPMENT', 'PACKAGE', 'SPECIMEN', 'SUBJECT_POPULATION_LOCATION_IDENTIFICATION'],
                    },
                    {
                        identifier: 'PRT',
                        sequence: '24',
                        restrictions: { nillable: true, minOccurs: 0, maxOccurs: 9999 },
                        isGroup: true,
                        groupPath: ['SHIPMENT', 'PACKAGE', 'SPECIMEN', 'SUBJECT_POPULATION_LOCATION_IDENTIFICATION'],
                    },
                    {
                        identifier: 'OBX',
                        sequence: '25',
                        restrictions: { nillable: false, minOccurs: 1, maxOccurs: 1 },
                        isGroup: true,
                        groupPath: ['SHIPMENT', 'PACKAGE', 'SPECIMEN', 'SUBJECT_POPULATION_LOCATION_IDENTIFICATION', 'PATIENT_VISIT_OBSERVATION'],
                    },
                    {
                        identifier: 'PRT',
                        sequence: '26',
                        restrictions: { nillable: true, minOccurs: 0, maxOccurs: 9999 },
                        isGroup: true,
                        groupPath: ['SHIPMENT', 'PACKAGE', 'SPECIMEN', 'SUBJECT_POPULATION_LOCATION_IDENTIFICATION', 'PATIENT_VISIT_OBSERVATION'],
                    },
                    {
                        identifier: 'PID',
                        sequence: '27',
                        restrictions: { nillable: true, minOccurs: 0, maxOccurs: 1 },
                        isGroup: true,
                        groupPath: ['SHIPMENT', 'PACKAGE', 'SPECIMEN', 'SUBJECT_POPULATION_LOCATION_IDENTIFICATION'],
                    },
                    {
                        identifier: 'PRT',
                        sequence: '28',
                        restrictions: { nillable: true, minOccurs: 0, maxOccurs: 9999 },
                        isGroup: true,
                        groupPath: ['SHIPMENT', 'PACKAGE', 'SPECIMEN', 'SUBJECT_POPULATION_LOCATION_IDENTIFICATION'],
                    },
                    {
                        identifier: 'NK1',
                        sequence: '29',
                        restrictions: { nillable: true, minOccurs: 0, maxOccurs: 9999 },
                        isGroup: true,
                        groupPath: ['SHIPMENT', 'PACKAGE', 'SPECIMEN', 'SUBJECT_POPULATION_LOCATION_IDENTIFICATION'],
                    },
                ],
                groups: {
                    SHIPMENT: {
                        sequence: { start: '4', stop: null },
                        restrictions: { nillable: false, minOccurs: 1, maxOccurs: 9999 },
                        subgroup: {
                            SHIPPING_OBSERVATION: { sequence: { start: '6', stop: '7' }, restrictions: { nillable: true, minOccurs: 0, maxOccurs: 9999 }, subgroup: {} },
                            PACKAGE: {
                                sequence: { start: '8', stop: null },
                                restrictions: { nillable: false, minOccurs: 1, maxOccurs: 9999 },
                                subgroup: {
                                    SPECIMEN: {
                                        sequence: { start: '10', stop: null },
                                        restrictions: { nillable: true, minOccurs: 0, maxOccurs: 9999 },
                                        subgroup: {
                                            SPECIMEN_OBSERVATION: { sequence: { start: '12', stop: '13' }, restrictions: { nillable: true, minOccurs: 0, maxOccurs: 9999 }, subgroup: {} },
                                            CONTAINER: {
                                                sequence: { start: '14', stop: null },
                                                restrictions: { nillable: true, minOccurs: 0, maxOccurs: 9999 },
                                                subgroup: {
                                                    CONTAINER_OBSERVATION: { sequence: { start: '15', stop: '16' }, restrictions: { nillable: true, minOccurs: 0, maxOccurs: 9999 }, subgroup: {} },
                                                },
                                            },
                                            SUBJECT_PERSON_ANIMAL_IDENTIFICATION: {
                                                sequence: { start: '17', stop: '22' },
                                                restrictions: { nillable: true, minOccurs: 0, maxOccurs: 1 },
                                                subgroup: {
                                                    PATIENT_OBSERVATION: { sequence: { start: '20', stop: '21' }, restrictions: { nillable: true, minOccurs: 0, maxOccurs: 9999 }, subgroup: {} },
                                                },
                                            },
                                            SUBJECT_POPULATION_LOCATION_IDENTIFICATION: {
                                                sequence: { start: '23', stop: '29' },
                                                restrictions: { nillable: true, minOccurs: 0, maxOccurs: 1 },
                                                subgroup: {
                                                    PATIENT_VISIT_OBSERVATION: { sequence: { start: '25', stop: '26' }, restrictions: { nillable: true, minOccurs: 0, maxOccurs: 9999 }, subgroup: {} },
                                                },
                                            },
                                        },
                                    },
                                },
                            },
                        },
                    },
                },
            },
            2.7: {
                sequences: [
                    {},
                    { identifier: 'MSH', sequence: '1', restrictions: { nillable: false, minOccurs: 1, maxOccurs: 1 }, isGroup: false },
                    { identifier: 'SFT', sequence: '2', restrictions: { nillable: true, minOccurs: 0, maxOccurs: 9999 }, isGroup: false },
                    { identifier: 'UAC', sequence: '3', restrictions: { nillable: true, minOccurs: 0, maxOccurs: 1 }, isGroup: false },
                    { identifier: 'SHP', sequence: '4', restrictions: { nillable: false, minOccurs: 1, maxOccurs: 1 }, isGroup: true, groupPath: ['SHIPMENT'] },
                    { identifier: 'PRT', sequence: '5', restrictions: { nillable: false, minOccurs: 1, maxOccurs: 9999 }, isGroup: true, groupPath: ['SHIPMENT'] },
                    { identifier: 'OBX', sequence: '6', restrictions: { nillable: false, minOccurs: 1, maxOccurs: 1 }, isGroup: true, groupPath: ['SHIPMENT', 'SHIPPING_OBSERVATION'] },
                    { identifier: 'PRT', sequence: '7', restrictions: { nillable: true, minOccurs: 0, maxOccurs: 9999 }, isGroup: true, groupPath: ['SHIPMENT', 'SHIPPING_OBSERVATION'] },
                    { identifier: 'PAC', sequence: '8', restrictions: { nillable: false, minOccurs: 1, maxOccurs: 1 }, isGroup: true, groupPath: ['SHIPMENT', 'PACKAGE'] },
                    { identifier: 'PRT', sequence: '9', restrictions: { nillable: true, minOccurs: 0, maxOccurs: 9999 }, isGroup: true, groupPath: ['SHIPMENT', 'PACKAGE'] },
                    { identifier: 'SPM', sequence: '10', restrictions: { nillable: false, minOccurs: 1, maxOccurs: 1 }, isGroup: true, groupPath: ['SHIPMENT', 'PACKAGE', 'SPECIMEN'] },
                    { identifier: 'PRT', sequence: '11', restrictions: { nillable: true, minOccurs: 0, maxOccurs: 9999 }, isGroup: true, groupPath: ['SHIPMENT', 'PACKAGE', 'SPECIMEN'] },
                    {
                        identifier: 'OBX',
                        sequence: '12',
                        restrictions: { nillable: false, minOccurs: 1, maxOccurs: 1 },
                        isGroup: true,
                        groupPath: ['SHIPMENT', 'PACKAGE', 'SPECIMEN', 'SPECIMEN_OBSERVATION'],
                    },
                    {
                        identifier: 'PRT',
                        sequence: '13',
                        restrictions: { nillable: true, minOccurs: 0, maxOccurs: 9999 },
                        isGroup: true,
                        groupPath: ['SHIPMENT', 'PACKAGE', 'SPECIMEN', 'SPECIMEN_OBSERVATION'],
                    },
                    { identifier: 'SAC', sequence: '14', restrictions: { nillable: false, minOccurs: 1, maxOccurs: 1 }, isGroup: true, groupPath: ['SHIPMENT', 'PACKAGE', 'SPECIMEN', 'CONTAINER'] },
                    {
                        identifier: 'OBX',
                        sequence: '15',
                        restrictions: { nillable: false, minOccurs: 1, maxOccurs: 1 },
                        isGroup: true,
                        groupPath: ['SHIPMENT', 'PACKAGE', 'SPECIMEN', 'CONTAINER', 'CONTAINER_OBSERVATION'],
                    },
                    {
                        identifier: 'PRT',
                        sequence: '16',
                        restrictions: { nillable: true, minOccurs: 0, maxOccurs: 9999 },
                        isGroup: true,
                        groupPath: ['SHIPMENT', 'PACKAGE', 'SPECIMEN', 'CONTAINER', 'CONTAINER_OBSERVATION'],
                    },
                    {
                        identifier: 'PID',
                        sequence: '17',
                        restrictions: { nillable: false, minOccurs: 1, maxOccurs: 1 },
                        isGroup: true,
                        groupPath: ['SHIPMENT', 'PACKAGE', 'SPECIMEN', 'SUBJECT_PERSON_ANIMAL_IDENTIFICATION'],
                    },
                    {
                        identifier: 'PRT',
                        sequence: '18',
                        restrictions: { nillable: true, minOccurs: 0, maxOccurs: 9999 },
                        isGroup: true,
                        groupPath: ['SHIPMENT', 'PACKAGE', 'SPECIMEN', 'SUBJECT_PERSON_ANIMAL_IDENTIFICATION'],
                    },
                    {
                        identifier: 'OBX',
                        sequence: '19',
                        restrictions: { nillable: false, minOccurs: 1, maxOccurs: 1 },
                        isGroup: true,
                        groupPath: ['SHIPMENT', 'PACKAGE', 'SPECIMEN', 'SUBJECT_PERSON_ANIMAL_IDENTIFICATION', 'PATIENT_OBSERVATION'],
                    },
                    {
                        identifier: 'PRT',
                        sequence: '20',
                        restrictions: { nillable: true, minOccurs: 0, maxOccurs: 9999 },
                        isGroup: true,
                        groupPath: ['SHIPMENT', 'PACKAGE', 'SPECIMEN', 'SUBJECT_PERSON_ANIMAL_IDENTIFICATION', 'PATIENT_OBSERVATION'],
                    },
                    {
                        identifier: 'NK1',
                        sequence: '21',
                        restrictions: { nillable: true, minOccurs: 0, maxOccurs: 9999 },
                        isGroup: true,
                        groupPath: ['SHIPMENT', 'PACKAGE', 'SPECIMEN', 'SUBJECT_PERSON_ANIMAL_IDENTIFICATION'],
                    },
                    {
                        identifier: 'PV1',
                        sequence: '22',
                        restrictions: { nillable: false, minOccurs: 1, maxOccurs: 1 },
                        isGroup: true,
                        groupPath: ['SHIPMENT', 'PACKAGE', 'SPECIMEN', 'SUBJECT_POPULATION_LOCATION_IDENTIFICATION'],
                    },
                    {
                        identifier: 'PRT',
                        sequence: '23',
                        restrictions: { nillable: true, minOccurs: 0, maxOccurs: 9999 },
                        isGroup: true,
                        groupPath: ['SHIPMENT', 'PACKAGE', 'SPECIMEN', 'SUBJECT_POPULATION_LOCATION_IDENTIFICATION'],
                    },
                    {
                        identifier: 'OBX',
                        sequence: '24',
                        restrictions: { nillable: false, minOccurs: 1, maxOccurs: 1 },
                        isGroup: true,
                        groupPath: ['SHIPMENT', 'PACKAGE', 'SPECIMEN', 'SUBJECT_POPULATION_LOCATION_IDENTIFICATION', 'PATIENT_VISIT_OBSERVATION'],
                    },
                    {
                        identifier: 'PRT',
                        sequence: '25',
                        restrictions: { nillable: true, minOccurs: 0, maxOccurs: 9999 },
                        isGroup: true,
                        groupPath: ['SHIPMENT', 'PACKAGE', 'SPECIMEN', 'SUBJECT_POPULATION_LOCATION_IDENTIFICATION', 'PATIENT_VISIT_OBSERVATION'],
                    },
                    {
                        identifier: 'PID',
                        sequence: '26',
                        restrictions: { nillable: true, minOccurs: 0, maxOccurs: 1 },
                        isGroup: true,
                        groupPath: ['SHIPMENT', 'PACKAGE', 'SPECIMEN', 'SUBJECT_POPULATION_LOCATION_IDENTIFICATION'],
                    },
                    {
                        identifier: 'PRT',
                        sequence: '27',
                        restrictions: { nillable: true, minOccurs: 0, maxOccurs: 9999 },
                        isGroup: true,
                        groupPath: ['SHIPMENT', 'PACKAGE', 'SPECIMEN', 'SUBJECT_POPULATION_LOCATION_IDENTIFICATION'],
                    },
                    {
                        identifier: 'NK1',
                        sequence: '28',
                        restrictions: { nillable: true, minOccurs: 0, maxOccurs: 9999 },
                        isGroup: true,
                        groupPath: ['SHIPMENT', 'PACKAGE', 'SPECIMEN', 'SUBJECT_POPULATION_LOCATION_IDENTIFICATION'],
                    },
                ],
                groups: {
                    SHIPMENT: {
                        sequence: { start: '4', stop: null },
                        restrictions: { nillable: false, minOccurs: 1, maxOccurs: 9999 },
                        subgroup: {
                            SHIPPING_OBSERVATION: { sequence: { start: '6', stop: '7' }, restrictions: { nillable: true, minOccurs: 0, maxOccurs: 9999 }, subgroup: {} },
                            PACKAGE: {
                                sequence: { start: '8', stop: null },
                                restrictions: { nillable: false, minOccurs: 1, maxOccurs: 9999 },
                                subgroup: {
                                    SPECIMEN: {
                                        sequence: { start: '10', stop: null },
                                        restrictions: { nillable: true, minOccurs: 0, maxOccurs: 9999 },
                                        subgroup: {
                                            SPECIMEN_OBSERVATION: { sequence: { start: '12', stop: '13' }, restrictions: { nillable: true, minOccurs: 0, maxOccurs: 9999 }, subgroup: {} },
                                            CONTAINER: {
                                                sequence: { start: '14', stop: null },
                                                restrictions: { nillable: true, minOccurs: 0, maxOccurs: 9999 },
                                                subgroup: {
                                                    CONTAINER_OBSERVATION: { sequence: { start: '15', stop: '16' }, restrictions: { nillable: true, minOccurs: 0, maxOccurs: 9999 }, subgroup: {} },
                                                },
                                            },
                                            SUBJECT_PERSON_ANIMAL_IDENTIFICATION: {
                                                sequence: { start: '17', stop: '21' },
                                                restrictions: { nillable: true, minOccurs: 0, maxOccurs: 1 },
                                                subgroup: {
                                                    PATIENT_OBSERVATION: { sequence: { start: '19', stop: '20' }, restrictions: { nillable: true, minOccurs: 0, maxOccurs: 9999 }, subgroup: {} },
                                                },
                                            },
                                            SUBJECT_POPULATION_LOCATION_IDENTIFICATION: {
                                                sequence: { start: '22', stop: '28' },
                                                restrictions: { nillable: true, minOccurs: 0, maxOccurs: 1 },
                                                subgroup: {
                                                    PATIENT_VISIT_OBSERVATION: { sequence: { start: '24', stop: '25' }, restrictions: { nillable: true, minOccurs: 0, maxOccurs: 9999 }, subgroup: {} },
                                                },
                                            },
                                        },
                                    },
                                },
                            },
                        },
                    },
                },
            },
            '2.7.1': {
                sequences: { ref: '2.7' },
                groups: { ref: '2.7' },
            },
        },
        segments: { MSH: MSH, SFT: SFT, UAC: UAC, SHP: SHP, PRT: PRT, OBX: OBX, PAC: PAC, SPM: SPM, SAC: SAC, PID: PID, ARV: ARV, NK1: NK1, PV1: PV1 },
    };

    constructor(message, version = null) {
        super(message, version);
    }
}
