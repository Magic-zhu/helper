import typeOf from "../src/typeOf"

test('typeOf 123 should be Number', () => {
    expect(typeOf(123)).toBe('Number')
})

