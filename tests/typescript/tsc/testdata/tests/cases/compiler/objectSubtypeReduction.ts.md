__ESTREE_TEST__:AST:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo",
        "optional": false,
        "typeAnnotation": null,
        "start": 69,
        "end": 72
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "x",
          "optional": true,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSObjectKeyword",
              "start": 77,
              "end": 83
            },
            "start": 75,
            "end": 83
          },
          "start": 73,
          "end": 83
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ReturnStatement",
            "argument": {
              "type": "CallExpression",
              "callee": {
                "type": "MemberExpression",
                "object": {
                  "type": "CallExpression",
                  "callee": {
                    "type": "MemberExpression",
                    "object": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Object",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 98,
                      "end": 104
                    },
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "entries",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 105,
                      "end": 112
                    },
                    "optional": false,
                    "computed": false,
                    "start": 98,
                    "end": 112
                  },
                  "typeArguments": null,
                  "arguments": [
                    {
                      "type": "LogicalExpression",
                      "left": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 113,
                        "end": 114
                      },
                      "operator": "||",
                      "right": {
                        "type": "ObjectExpression",
                        "properties": [],
                        "start": 118,
                        "end": 120
                      },
                      "start": 113,
                      "end": 120
                    }
                  ],
                  "optional": false,
                  "start": 98,
                  "end": 121
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "sort",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 131,
                  "end": 135
                },
                "optional": false,
                "computed": false,
                "start": 98,
                "end": 135
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
                      "type": "ArrayPattern",
                      "decorators": [],
                      "elements": [
                        {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "k1",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 138,
                          "end": 140
                        },
                        {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "v1",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 142,
                          "end": 144
                        }
                      ],
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 137,
                      "end": 145
                    },
                    {
                      "type": "ArrayPattern",
                      "decorators": [],
                      "elements": [
                        {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "k2",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 148,
                          "end": 150
                        },
                        {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "v2",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 152,
                          "end": 154
                        }
                      ],
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 147,
                      "end": 155
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
                          "name": "v1",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 160,
                          "end": 162
                        },
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "name",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 163,
                          "end": 167
                        },
                        "optional": false,
                        "computed": false,
                        "start": 160,
                        "end": 167
                      },
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "localeCompare",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 168,
                        "end": 181
                      },
                      "optional": false,
                      "computed": false,
                      "start": 160,
                      "end": 181
                    },
                    "typeArguments": null,
                    "arguments": [
                      {
                        "type": "MemberExpression",
                        "object": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "v2",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 182,
                          "end": 184
                        },
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "name",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 185,
                          "end": 189
                        },
                        "optional": false,
                        "computed": false,
                        "start": 182,
                        "end": 189
                      }
                    ],
                    "optional": false,
                    "start": 160,
                    "end": 190
                  },
                  "id": null,
                  "generator": false,
                  "start": 136,
                  "end": 190
                }
              ],
              "optional": false,
              "start": 98,
              "end": 191
            },
            "start": 91,
            "end": 192
          }
        ],
        "start": 85,
        "end": 194
      },
      "expression": false,
      "start": 60,
      "end": 194
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 60,
  "end": 194
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Keyword",
    "value": "function",
    "start": 60,
    "end": 68
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 69,
    "end": 72
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 72,
    "end": 73
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 73,
    "end": 74
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 74,
    "end": 75
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 75,
    "end": 76
  },
  {
    "type": "Identifier",
    "value": "object",
    "start": 77,
    "end": 83
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 83,
    "end": 84
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 85,
    "end": 86
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 91,
    "end": 97
  },
  {
    "type": "Identifier",
    "value": "Object",
    "start": 98,
    "end": 104
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 104,
    "end": 105
  },
  {
    "type": "Identifier",
    "value": "entries",
    "start": 105,
    "end": 112
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 112,
    "end": 113
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 113,
    "end": 114
  },
  {
    "type": "Punctuator",
    "value": "||",
    "start": 115,
    "end": 117
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 118,
    "end": 119
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 119,
    "end": 120
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 120,
    "end": 121
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 130,
    "end": 131
  },
  {
    "type": "Identifier",
    "value": "sort",
    "start": 131,
    "end": 135
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 135,
    "end": 136
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 136,
    "end": 137
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 137,
    "end": 138
  },
  {
    "type": "Identifier",
    "value": "k1",
    "start": 138,
    "end": 140
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 140,
    "end": 141
  },
  {
    "type": "Identifier",
    "value": "v1",
    "start": 142,
    "end": 144
  },
  {
    "type": "Punctuator",
    "value": "]",
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
    "type": "Punctuator",
    "value": "[",
    "start": 147,
    "end": 148
  },
  {
    "type": "Identifier",
    "value": "k2",
    "start": 148,
    "end": 150
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 150,
    "end": 151
  },
  {
    "type": "Identifier",
    "value": "v2",
    "start": 152,
    "end": 154
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 154,
    "end": 155
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 155,
    "end": 156
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 157,
    "end": 159
  },
  {
    "type": "Identifier",
    "value": "v1",
    "start": 160,
    "end": 162
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 162,
    "end": 163
  },
  {
    "type": "Identifier",
    "value": "name",
    "start": 163,
    "end": 167
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 167,
    "end": 168
  },
  {
    "type": "Identifier",
    "value": "localeCompare",
    "start": 168,
    "end": 181
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 181,
    "end": 182
  },
  {
    "type": "Identifier",
    "value": "v2",
    "start": 182,
    "end": 184
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 184,
    "end": 185
  },
  {
    "type": "Identifier",
    "value": "name",
    "start": 185,
    "end": 189
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 189,
    "end": 190
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 190,
    "end": 191
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 191,
    "end": 192
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 193,
    "end": 194
  }
]
```
