import {GetBBPlatesCount, GetCurrentPerformance, GetGraphPerformances} from './../src/helper'

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

test("Get max performance with no performance list", () => {
    mockPerformance = [];
    maxPerformance = GetCurrentPerformance(mockPerformance)
    expect(maxPerformance).toStrictEqual(null);
});

test("Get max performance with one performance list", () => {
    mockPerformance = [
        {"date": "2023-07-02T13:38:03.876Z", "unit": "kg", "weight": "80"}
    ];
    maxPerformance = GetCurrentPerformance(mockPerformance)
    expect(maxPerformance).toStrictEqual({"date": "2023-07-02T13:38:03.876Z", "unit": "kg", "weight": "80"});
});

test("Get last performance with three performance list", () => {
    mockPerformance = [
        {"date": "2023-07-04T13:38:03.876Z", "unit": "kg", "weight": "80"},
        {"date": "2023-07-02T13:38:03.876Z", "unit": "kg", "weight": "85"},
        {"date": "2023-06-04T13:38:03.876Z", "unit": "kg", "weight": "83"}
    ];
    maxPerformance = GetCurrentPerformance(mockPerformance)
    expect(maxPerformance).toStrictEqual({"date": "2023-07-04T13:38:03.876Z", "unit": "kg", "weight": "80"});
});

test("Get last performanceof a specific month with multiple entries", () => {
    mockPerformance = [
        {"date": "2023-07-04T13:38:03.876Z", "unit": "kg", "weight": "80"},
        {"date": "2023-07-02T13:38:03.876Z", "unit": "kg", "weight": "85"},
        {"date": "2023-06-04T13:38:03.876Z", "unit": "kg", "weight": "83"}
    ];
    maxPerformance = GetGraphPerformances(mockPerformance, 6, 2023)
    expect(maxPerformance).toStrictEqual(80);
});

test("Get last performance of a specific month with 1 entry", () => {
    mockPerformance = [
        {"date": "2023-07-04T13:38:03.876Z", "unit": "kg", "weight": "80"},
        {"date": "2023-07-02T13:38:03.876Z", "unit": "kg", "weight": "85"},
        {"date": "2023-06-04T13:38:03.876Z", "unit": "kg", "weight": "83"}
    ];
    maxPerformance = GetGraphPerformances(mockPerformance, 5, 2023)
    expect(maxPerformance).toStrictEqual(83);
});

test("Get last performance of a specific month with no entry", () => {
    mockPerformance = [
        {"date": "2023-07-04T13:38:03.876Z", "unit": "kg", "weight": "80"},
        {"date": "2023-07-02T13:38:03.876Z", "unit": "kg", "weight": "85"},
        {"date": "2023-06-04T13:38:03.876Z", "unit": "kg", "weight": "83"}
    ];
    maxPerformance = GetGraphPerformances(mockPerformance, 1, 2023)
    expect(maxPerformance).toStrictEqual(0);
});