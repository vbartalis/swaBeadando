var clover = new Object();

// JSON: {classes : [{name, id, sl, el,  methods : [{sl, el}, ...]}, ...]}
clover.pageData = {"classes":[{"el":299,"id":380,"methods":[{"el":35,"sc":5,"sl":13},{"el":159,"sc":5,"sl":37},{"el":283,"sc":5,"sl":160},{"el":298,"sc":5,"sl":285}],"name":"LevelTest","sl":12}]}

// JSON: {test_ID : {"methods": [ID1, ID2, ID3...], "name" : "testXXX() void"}, ...};
clover.testTargets = {}

// JSON: { lines : [{tests : [testid1, testid2, testid3, ...]}, ...]};
clover.srcFileLines = $jsonSrcFileLines