import getStringByteLength from "../src/getStringByteLength"

test("getStringByteLength(123hello酷儿)) should be 12",()=>{
    expect(getStringByteLength('123hello酷儿')).toBe(12)
})