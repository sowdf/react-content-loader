import React from "react"
import renderer from "react-test-renderer"

import BulletListStyle from "../../src/stylized/BulletListStyle"

describe("BulletListStyle", () => {
  const wrapper = renderer.create(
    <BulletListStyle uniquekey="BulletListStyle" speed={20} />
  )

  test("renders correctly", () => {
    const tree = wrapper.toJSON()

    expect(tree).toMatchSnapshot()
  })

  test("props are propagated ", () => {
    expect(wrapper.root.props.speed).toEqual(20)
    expect(wrapper.root.props.uniquekey).toEqual("BulletListStyle")
  })
})
