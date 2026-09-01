__ESTREE_TEST__:AST:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "VariableDeclaration",
      "kind": "let",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "items",
            "optional": false,
            "typeAnnotation": null,
            "start": 60,
            "end": 65
          },
          "init": {
            "type": "ArrayExpression",
            "elements": [
              {
                "type": "ObjectExpression",
                "properties": [
                  {
                    "type": "Property",
                    "kind": "init",
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "name",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 71,
                      "end": 75
                    },
                    "value": {
                      "type": "Literal",
                      "value": "A",
                      "raw": "\"A\"",
                      "start": 77,
                      "end": 80
                    },
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "optional": false,
                    "start": 71,
                    "end": 80
                  }
                ],
                "start": 69,
                "end": 82
              },
              {
                "type": "ObjectExpression",
                "properties": [
                  {
                    "type": "Property",
                    "kind": "init",
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "name",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 86,
                      "end": 90
                    },
                    "value": {
                      "type": "Literal",
                      "value": "C",
                      "raw": "\"C\"",
                      "start": 92,
                      "end": 95
                    },
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "optional": false,
                    "start": 86,
                    "end": 95
                  }
                ],
                "start": 84,
                "end": 97
              },
              {
                "type": "ObjectExpression",
                "properties": [
                  {
                    "type": "Property",
                    "kind": "init",
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "name",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 101,
                      "end": 105
                    },
                    "value": {
                      "type": "Literal",
                      "value": "B",
                      "raw": "\"B\"",
                      "start": 107,
                      "end": 110
                    },
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "optional": false,
                    "start": 101,
                    "end": 110
                  }
                ],
                "start": 99,
                "end": 112
              }
            ],
            "start": 68,
            "end": 113
          },
          "definite": false,
          "start": 60,
          "end": 113
        }
      ],
      "declare": false,
      "start": 56,
      "end": 114
    },
    {
      "type": "ForOfStatement",
      "await": false,
      "left": {
        "type": "VariableDeclaration",
        "kind": "var",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "item",
              "optional": false,
              "typeAnnotation": null,
              "start": 124,
              "end": 128
            },
            "init": null,
            "definite": false,
            "start": 124,
            "end": 128
          }
        ],
        "declare": false,
        "start": 120,
        "end": 128
      },
      "right": {
        "type": "CallExpression",
        "callee": {
          "type": "MemberExpression",
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "items",
            "optional": false,
            "typeAnnotation": null,
            "start": 132,
            "end": 137
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "sort",
            "optional": false,
            "typeAnnotation": null,
            "start": 138,
            "end": 142
          },
          "optional": false,
          "computed": false,
          "start": 132,
          "end": 142
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "ArrowFunctionExpression",
            "expression": true,
            "async": false,
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "a",
                "optional": false,
                "typeAnnotation": null,
                "start": 144,
                "end": 145
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "b",
                "optional": false,
                "typeAnnotation": null,
                "start": 147,
                "end": 148
              }
            ],
            "returnType": null,
            "body": {
              "type": "CallExpression",
              "callee": {
                "type": "MemberExpression",
                "object": {
                  "type": "MemberExpression",
                  "object": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "a",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 153,
                    "end": 154
                  },
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "name",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 155,
                    "end": 159
                  },
                  "optional": false,
                  "computed": false,
                  "start": 153,
                  "end": 159
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "localeCompare",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 160,
                  "end": 173
                },
                "optional": false,
                "computed": false,
                "start": 153,
                "end": 173
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "MemberExpression",
                  "object": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "b",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 174,
                    "end": 175
                  },
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "name",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 176,
                    "end": 180
                  },
                  "optional": false,
                  "computed": false,
                  "start": 174,
                  "end": 180
                }
              ],
              "optional": false,
              "start": 153,
              "end": 181
            },
            "id": null,
            "generator": false,
            "start": 143,
            "end": 181
          }
        ],
        "optional": false,
        "start": 132,
        "end": 182
      },
      "body": {
        "type": "BlockStatement",
        "body": [],
        "start": 184,
        "end": 188
      },
      "start": 115,
      "end": 188
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 56,
  "end": 188
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Keyword",
    "value": "let",
    "start": 56,
    "end": 59
  },
  {
    "type": "Identifier",
    "value": "items",
    "start": 60,
    "end": 65
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 66,
    "end": 67
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 68,
    "end": 69
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 69,
    "end": 70
  },
  {
    "type": "Identifier",
    "value": "name",
    "start": 71,
    "end": 75
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 75,
    "end": 76
  },
  {
    "type": "String",
    "value": "\"A\"",
    "start": 77,
    "end": 80
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 81,
    "end": 82
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 82,
    "end": 83
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 84,
    "end": 85
  },
  {
    "type": "Identifier",
    "value": "name",
    "start": 86,
    "end": 90
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 90,
    "end": 91
  },
  {
    "type": "String",
    "value": "\"C\"",
    "start": 92,
    "end": 95
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 96,
    "end": 97
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 97,
    "end": 98
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 99,
    "end": 100
  },
  {
    "type": "Identifier",
    "value": "name",
    "start": 101,
    "end": 105
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 105,
    "end": 106
  },
  {
    "type": "String",
    "value": "\"B\"",
    "start": 107,
    "end": 110
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 111,
    "end": 112
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 112,
    "end": 113
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 113,
    "end": 114
  },
  {
    "type": "Keyword",
    "value": "for",
    "start": 115,
    "end": 118
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 119,
    "end": 120
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 120,
    "end": 123
  },
  {
    "type": "Identifier",
    "value": "item",
    "start": 124,
    "end": 128
  },
  {
    "type": "Identifier",
    "value": "of",
    "start": 129,
    "end": 131
  },
  {
    "type": "Identifier",
    "value": "items",
    "start": 132,
    "end": 137
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 137,
    "end": 138
  },
  {
    "type": "Identifier",
    "value": "sort",
    "start": 138,
    "end": 142
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 142,
    "end": 143
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 143,
    "end": 144
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 144,
    "end": 145
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 145,
    "end": 146
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 147,
    "end": 148
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 148,
    "end": 149
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 150,
    "end": 152
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 153,
    "end": 154
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 154,
    "end": 155
  },
  {
    "type": "Identifier",
    "value": "name",
    "start": 155,
    "end": 159
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 159,
    "end": 160
  },
  {
    "type": "Identifier",
    "value": "localeCompare",
    "start": 160,
    "end": 173
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 173,
    "end": 174
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 174,
    "end": 175
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 175,
    "end": 176
  },
  {
    "type": "Identifier",
    "value": "name",
    "start": 176,
    "end": 180
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 180,
    "end": 181
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 181,
    "end": 182
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 182,
    "end": 183
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 184,
    "end": 185
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 187,
    "end": 188
  }
]
```
