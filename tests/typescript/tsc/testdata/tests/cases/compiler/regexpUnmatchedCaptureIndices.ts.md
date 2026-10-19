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
            "name": "match",
            "optional": false,
            "typeAnnotation": null,
            "start": 6,
            "end": 11
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "MemberExpression",
              "object": {
                "type": "Literal",
                "value": null,
                "raw": "/(section)?/d",
                "regex": {
                  "pattern": "(section)?",
                  "flags": "d"
                },
                "start": 14,
                "end": 27
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "exec",
                "optional": false,
                "typeAnnotation": null,
                "start": 28,
                "end": 32
              },
              "optional": false,
              "computed": false,
              "start": 14,
              "end": 32
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Literal",
                "value": "",
                "raw": "\"\"",
                "start": 33,
                "end": 35
              }
            ],
            "optional": false,
            "start": 14,
            "end": 36
          },
          "definite": false,
          "start": 6,
          "end": 36
        }
      ],
      "declare": false,
      "start": 0,
      "end": 37
    },
    {
      "type": "IfStatement",
      "test": {
        "type": "Identifier",
        "decorators": [],
        "name": "match",
        "optional": false,
        "typeAnnotation": null,
        "start": 42,
        "end": 47
      },
      "consequent": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "MemberExpression",
              "object": {
                "type": "MemberExpression",
                "object": {
                  "type": "TSNonNullExpression",
                  "expression": {
                    "type": "MemberExpression",
                    "object": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "match",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 55,
                      "end": 60
                    },
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "indices",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 61,
                      "end": 68
                    },
                    "optional": false,
                    "computed": false,
                    "start": 55,
                    "end": 68
                  },
                  "start": 55,
                  "end": 69
                },
                "property": {
                  "type": "Literal",
                  "value": 1,
                  "raw": "1",
                  "start": 70,
                  "end": 71
                },
                "optional": false,
                "computed": true,
                "start": 55,
                "end": 72
              },
              "property": {
                "type": "Literal",
                "value": 0,
                "raw": "0",
                "start": 73,
                "end": 74
              },
              "optional": false,
              "computed": true,
              "start": 55,
              "end": 75
            },
            "directive": null,
            "start": 55,
            "end": 76
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "MemberExpression",
              "object": {
                "type": "MemberExpression",
                "object": {
                  "type": "TSNonNullExpression",
                  "expression": {
                    "type": "MemberExpression",
                    "object": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "match",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 81,
                      "end": 86
                    },
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "indices",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 87,
                      "end": 94
                    },
                    "optional": false,
                    "computed": false,
                    "start": 81,
                    "end": 94
                  },
                  "start": 81,
                  "end": 95
                },
                "property": {
                  "type": "Literal",
                  "value": 1,
                  "raw": "1",
                  "start": 96,
                  "end": 97
                },
                "optional": false,
                "computed": true,
                "start": 81,
                "end": 98
              },
              "property": {
                "type": "Literal",
                "value": 1,
                "raw": "1",
                "start": 99,
                "end": 100
              },
              "optional": false,
              "computed": true,
              "start": 81,
              "end": 101
            },
            "directive": null,
            "start": 81,
            "end": 102
          },
          {
            "type": "VariableDeclaration",
            "kind": "const",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "id": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "indices",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 114,
                  "end": 121
                },
                "init": {
                  "type": "MemberExpression",
                  "object": {
                    "type": "TSNonNullExpression",
                    "expression": {
                      "type": "MemberExpression",
                      "object": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "match",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 124,
                        "end": 129
                      },
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "indices",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 130,
                        "end": 137
                      },
                      "optional": false,
                      "computed": false,
                      "start": 124,
                      "end": 137
                    },
                    "start": 124,
                    "end": 138
                  },
                  "property": {
                    "type": "Literal",
                    "value": 1,
                    "raw": "1",
                    "start": 139,
                    "end": 140
                  },
                  "optional": false,
                  "computed": true,
                  "start": 124,
                  "end": 141
                },
                "definite": false,
                "start": 114,
                "end": 141
              }
            ],
            "declare": false,
            "start": 108,
            "end": 142
          },
          {
            "type": "IfStatement",
            "test": {
              "type": "Identifier",
              "decorators": [],
              "name": "indices",
              "optional": false,
              "typeAnnotation": null,
              "start": 151,
              "end": 158
            },
            "consequent": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "MemberExpression",
                    "object": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "indices",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 170,
                      "end": 177
                    },
                    "property": {
                      "type": "Literal",
                      "value": 0,
                      "raw": "0",
                      "start": 178,
                      "end": 179
                    },
                    "optional": false,
                    "computed": true,
                    "start": 170,
                    "end": 180
                  },
                  "directive": null,
                  "start": 170,
                  "end": 181
                },
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "MemberExpression",
                    "object": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "indices",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 190,
                      "end": 197
                    },
                    "property": {
                      "type": "Literal",
                      "value": 1,
                      "raw": "1",
                      "start": 198,
                      "end": 199
                    },
                    "optional": false,
                    "computed": true,
                    "start": 190,
                    "end": 200
                  },
                  "directive": null,
                  "start": 190,
                  "end": 201
                }
              ],
              "start": 160,
              "end": 207
            },
            "alternate": null,
            "start": 147,
            "end": 207
          }
        ],
        "start": 49,
        "end": 209
      },
      "alternate": null,
      "start": 38,
      "end": 209
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 209
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
    "value": "match",
    "start": 6,
    "end": 11
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 12,
    "end": 13
  },
  {
    "type": "RegularExpression",
    "value": "/(section)?/d",
    "regex": {
      "pattern": "(section)?",
      "flags": "d"
    },
    "start": 14,
    "end": 27
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 27,
    "end": 28
  },
  {
    "type": "Identifier",
    "value": "exec",
    "start": 28,
    "end": 32
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 32,
    "end": 33
  },
  {
    "type": "String",
    "value": "\"\"",
    "start": 33,
    "end": 35
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 35,
    "end": 36
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 36,
    "end": 37
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 38,
    "end": 40
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 41,
    "end": 42
  },
  {
    "type": "Identifier",
    "value": "match",
    "start": 42,
    "end": 47
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 47,
    "end": 48
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 49,
    "end": 50
  },
  {
    "type": "Identifier",
    "value": "match",
    "start": 55,
    "end": 60
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 60,
    "end": 61
  },
  {
    "type": "Identifier",
    "value": "indices",
    "start": 61,
    "end": 68
  },
  {
    "type": "Punctuator",
    "value": "!",
    "start": 68,
    "end": 69
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 69,
    "end": 70
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 70,
    "end": 71
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 71,
    "end": 72
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 72,
    "end": 73
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 73,
    "end": 74
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 74,
    "end": 75
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 75,
    "end": 76
  },
  {
    "type": "Identifier",
    "value": "match",
    "start": 81,
    "end": 86
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 86,
    "end": 87
  },
  {
    "type": "Identifier",
    "value": "indices",
    "start": 87,
    "end": 94
  },
  {
    "type": "Punctuator",
    "value": "!",
    "start": 94,
    "end": 95
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 95,
    "end": 96
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 96,
    "end": 97
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 97,
    "end": 98
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 98,
    "end": 99
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 99,
    "end": 100
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 100,
    "end": 101
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 101,
    "end": 102
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 108,
    "end": 113
  },
  {
    "type": "Identifier",
    "value": "indices",
    "start": 114,
    "end": 121
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 122,
    "end": 123
  },
  {
    "type": "Identifier",
    "value": "match",
    "start": 124,
    "end": 129
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 129,
    "end": 130
  },
  {
    "type": "Identifier",
    "value": "indices",
    "start": 130,
    "end": 137
  },
  {
    "type": "Punctuator",
    "value": "!",
    "start": 137,
    "end": 138
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 138,
    "end": 139
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 139,
    "end": 140
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 140,
    "end": 141
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 141,
    "end": 142
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 147,
    "end": 149
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 150,
    "end": 151
  },
  {
    "type": "Identifier",
    "value": "indices",
    "start": 151,
    "end": 158
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 158,
    "end": 159
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 160,
    "end": 161
  },
  {
    "type": "Identifier",
    "value": "indices",
    "start": 170,
    "end": 177
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 177,
    "end": 178
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 178,
    "end": 179
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 179,
    "end": 180
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 180,
    "end": 181
  },
  {
    "type": "Identifier",
    "value": "indices",
    "start": 190,
    "end": 197
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 197,
    "end": 198
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 198,
    "end": 199
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 199,
    "end": 200
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 200,
    "end": 201
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 206,
    "end": 207
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 208,
    "end": 209
  }
]
```
