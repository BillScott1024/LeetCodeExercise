--[[
Author: Wang Jun
Date: 2021-11-27 13:42:28
LastEditTime: 2021-11-27 13:42:29
LastEditors: Wang Jun
Description: 测试脚本
FilePath: TestLua.lua

--]]
json = require "Code.Lua.LuaUtils.json"
function test(...)
    local args = {...}
    for k, v in pairs(args) do
        print(k, v)
    end
end

-- Test 1
local obj = {
    a = 1,
    b = 2,
    c = 3
}
-- test(1,2,3,4,5)
-- test(json.encode(obj))

-- Test 2
local data = {
    key1 = 34,
    key2 = "str",
    key3 = {
        key4 = {
            key5 = 56
        },
        key6 = 78
    }
}
json.dump(data, 1)
