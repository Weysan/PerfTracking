import {GetBBPlatesCount} from './../src/helper'

test("Calculate plates for 90kg weight with 20kg bar", () => {
    plates = GetBBPlatesCount(90, 20)
    expect(plates).toStrictEqual([{
        'weight': 20,
        'unit': 'kg',
        'count': 2
    },{
        'weight': 15,
        'unit': 'kg',
        'count': 2
    }]);
});

test("Calculate plates for 85.5kg weight with 20kg bar", () => {
    plates = GetBBPlatesCount(85.5, 20)
    expect(plates).toStrictEqual([{
        'weight': 20,
        'unit': 'kg',
        'count': 2
    },{
        'weight': 10,
        'unit': 'kg',
        'count': 2
    },{
        'weight': 2.5,
        'unit': 'kg',
        'count': 2
    }]);
});

test("Calculate plates for 90kg weight with 15kg bar", () => {
    plates = GetBBPlatesCount(90, 15)
    expect(plates).toStrictEqual([{
        'weight': 20,
        'unit': 'kg',
        'count': 2
    },{
        'weight': 15,
        'unit': 'kg',
        'count': 2
    },{
        'weight': 2.5,
        'unit': 'kg',
        'count': 2
    }]);
});