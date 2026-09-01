__ESTREE_TEST__:AST:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "VariableDeclaration",
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "BAR",
            "optional": false,
            "typeAnnotation": null,
            "start": 6,
            "end": 9
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "MemberExpression",
              "object": {
                "type": "Literal",
                "value": 2,
                "raw": "2.",
                "start": 12,
                "end": 14
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "toFixed",
                "optional": false,
                "typeAnnotation": null,
                "start": 15,
                "end": 22
              },
              "optional": false,
              "computed": false,
              "start": 12,
              "end": 22
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Literal",
                "value": 0,
                "raw": "0",
                "start": 23,
                "end": 24
              }
            ],
            "optional": false,
            "start": 12,
            "end": 25
          },
          "definite": false,
          "start": 6,
          "end": 25
        }
      ],
      "declare": false,
      "start": 0,
      "end": 26
    },
    {
      "type": "TSEnumDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Foo",
        "optional": false,
        "typeAnnotation": null,
        "start": 33,
        "end": 36
      },
      "body": {
        "type": "TSEnumBody",
        "members": [
          {
            "type": "TSEnumMember",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "A",
              "optional": false,
              "typeAnnotation": null,
              "start": 43,
              "end": 44
            },
            "initializer": {
              "type": "TemplateLiteral",
              "quasis": [
                {
                  "type": "TemplateElement",
                  "value": {
                    "raw": "",
                    "cooked": ""
                  },
                  "tail": false,
                  "start": 47,
                  "end": 50
                },
                {
                  "type": "TemplateElement",
                  "value": {
                    "raw": "",
                    "cooked": ""
                  },
                  "tail": true,
                  "start": 53,
                  "end": 55
                }
              ],
              "expressions": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "BAR",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 50,
                  "end": 53
                }
              ],
              "start": 47,
              "end": 55
            },
            "computed": false,
            "start": 43,
            "end": 55
          },
          {
            "type": "TSEnumMember",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "B",
              "optional": false,
              "typeAnnotation": null,
              "start": 61,
              "end": 62
            },
            "initializer": {
              "type": "BinaryExpression",
              "left": {
                "type": "Literal",
                "value": "2",
                "raw": "\"2\"",
                "start": 65,
                "end": 68
              },
              "operator": "+",
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "BAR",
                "optional": false,
                "typeAnnotation": null,
                "start": 71,
                "end": 74
              },
              "start": 65,
              "end": 74
            },
            "computed": false,
            "start": 61,
            "end": 74
          },
          {
            "type": "TSEnumMember",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "C",
              "optional": false,
              "typeAnnotation": null,
              "start": 80,
              "end": 81
            },
            "initializer": {
              "type": "TemplateLiteral",
              "quasis": [
                {
                  "type": "TemplateElement",
                  "value": {
                    "raw": "",
                    "cooked": ""
                  },
                  "tail": false,
                  "start": 85,
                  "end": 88
                },
                {
                  "type": "TemplateElement",
                  "value": {
                    "raw": "",
                    "cooked": ""
                  },
                  "tail": true,
                  "start": 91,
                  "end": 93
                }
              ],
              "expressions": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "BAR",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 88,
                  "end": 91
                }
              ],
              "start": 85,
              "end": 93
            },
            "computed": false,
            "start": 80,
            "end": 94
          },
          {
            "type": "TSEnumMember",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "F",
              "optional": false,
              "typeAnnotation": null,
              "start": 101,
              "end": 102
            },
            "initializer": {
              "type": "Identifier",
              "decorators": [],
              "name": "BAR",
              "optional": false,
              "typeAnnotation": null,
              "start": 105,
              "end": 108
            },
            "computed": false,
            "start": 101,
            "end": 108
          },
          {
            "type": "TSEnumMember",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "G",
              "optional": false,
              "typeAnnotation": null,
              "start": 114,
              "end": 115
            },
            "initializer": {
              "type": "BinaryExpression",
              "left": {
                "type": "Literal",
                "value": 2,
                "raw": "2",
                "start": 118,
                "end": 119
              },
              "operator": "+",
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "BAR",
                "optional": false,
                "typeAnnotation": null,
                "start": 122,
                "end": 125
              },
              "start": 118,
              "end": 125
            },
            "computed": false,
            "start": 114,
            "end": 125
          },
          {
            "type": "TSEnumMember",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "H",
              "optional": false,
              "typeAnnotation": null,
              "start": 132,
              "end": 133
            },
            "initializer": {
              "type": "Identifier",
              "decorators": [],
              "name": "A",
              "optional": false,
              "typeAnnotation": null,
              "start": 136,
              "end": 137
            },
            "computed": false,
            "start": 132,
            "end": 137
          },
          {
            "type": "TSEnumMember",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "I",
              "optional": false,
              "typeAnnotation": null,
              "start": 143,
              "end": 144
            },
            "initializer": {
              "type": "BinaryExpression",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "H",
                "optional": false,
                "typeAnnotation": null,
                "start": 147,
                "end": 148
              },
              "operator": "+",
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "BAR",
                "optional": false,
                "typeAnnotation": null,
                "start": 151,
                "end": 154
              },
              "start": 147,
              "end": 154
            },
            "computed": false,
            "start": 143,
            "end": 154
          },
          {
            "type": "TSEnumMember",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "J",
              "optional": false,
              "typeAnnotation": null,
              "start": 160,
              "end": 161
            },
            "initializer": {
              "type": "Identifier",
              "decorators": [],
              "name": "H",
              "optional": false,
              "typeAnnotation": null,
              "start": 164,
              "end": 165
            },
            "computed": false,
            "start": 160,
            "end": 165
          }
        ],
        "start": 37,
        "end": 167
      },
      "const": false,
      "declare": false,
      "start": 28,
      "end": 167
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 167
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Keyword",
    "value": "const",
    "start": 0,
    "end": 5
  },
  {
    "type": "Identifier",
    "value": "BAR",
    "start": 6,
    "end": 9
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 10,
    "end": 11
  },
  {
    "type": "Numeric",
    "value": "2.",
    "start": 12,
    "end": 14
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 14,
    "end": 15
  },
  {
    "type": "Identifier",
    "value": "toFixed",
    "start": 15,
    "end": 22
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 22,
    "end": 23
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 23,
    "end": 24
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 24,
    "end": 25
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 25,
    "end": 26
  },
  {
    "type": "Keyword",
    "value": "enum",
    "start": 28,
    "end": 32
  },
  {
    "type": "Identifier",
    "value": "Foo",
    "start": 33,
    "end": 36
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 37,
    "end": 38
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 43,
    "end": 44
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 45,
    "end": 46
  },
  {
    "type": "Template",
    "value": "`${",
    "start": 47,
    "end": 50
  },
  {
    "type": "Identifier",
    "value": "BAR",
    "start": 50,
    "end": 53
  },
  {
    "type": "Template",
    "value": "}`",
    "start": 53,
    "end": 55
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 55,
    "end": 56
  },
  {
    "type": "Identifier",
    "value": "B",
    "start": 61,
    "end": 62
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 63,
    "end": 64
  },
  {
    "type": "String",
    "value": "\"2\"",
    "start": 65,
    "end": 68
  },
  {
    "type": "Punctuator",
    "value": "+",
    "start": 69,
    "end": 70
  },
  {
    "type": "Identifier",
    "value": "BAR",
    "start": 71,
    "end": 74
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 74,
    "end": 75
  },
  {
    "type": "Identifier",
    "value": "C",
    "start": 80,
    "end": 81
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 82,
    "end": 83
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 84,
    "end": 85
  },
  {
    "type": "Template",
    "value": "`${",
    "start": 85,
    "end": 88
  },
  {
    "type": "Identifier",
    "value": "BAR",
    "start": 88,
    "end": 91
  },
  {
    "type": "Template",
    "value": "}`",
    "start": 91,
    "end": 93
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 93,
    "end": 94
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 94,
    "end": 95
  },
  {
    "type": "Identifier",
    "value": "F",
    "start": 101,
    "end": 102
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 103,
    "end": 104
  },
  {
    "type": "Identifier",
    "value": "BAR",
    "start": 105,
    "end": 108
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 108,
    "end": 109
  },
  {
    "type": "Identifier",
    "value": "G",
    "start": 114,
    "end": 115
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 116,
    "end": 117
  },
  {
    "type": "Numeric",
    "value": "2",
    "start": 118,
    "end": 119
  },
  {
    "type": "Punctuator",
    "value": "+",
    "start": 120,
    "end": 121
  },
  {
    "type": "Identifier",
    "value": "BAR",
    "start": 122,
    "end": 125
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 125,
    "end": 126
  },
  {
    "type": "Identifier",
    "value": "H",
    "start": 132,
    "end": 133
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 134,
    "end": 135
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 136,
    "end": 137
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 137,
    "end": 138
  },
  {
    "type": "Identifier",
    "value": "I",
    "start": 143,
    "end": 144
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 145,
    "end": 146
  },
  {
    "type": "Identifier",
    "value": "H",
    "start": 147,
    "end": 148
  },
  {
    "type": "Punctuator",
    "value": "+",
    "start": 149,
    "end": 150
  },
  {
    "type": "Identifier",
    "value": "BAR",
    "start": 151,
    "end": 154
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 154,
    "end": 155
  },
  {
    "type": "Identifier",
    "value": "J",
    "start": 160,
    "end": 161
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 162,
    "end": 163
  },
  {
    "type": "Identifier",
    "value": "H",
    "start": 164,
    "end": 165
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 166,
    "end": 167
  }
]
```
