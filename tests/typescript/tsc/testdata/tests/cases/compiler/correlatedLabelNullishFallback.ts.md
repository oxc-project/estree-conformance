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
        "name": "label",
        "optional": false,
        "typeAnnotation": null,
        "start": 9,
        "end": 14
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "options",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSUnionType",
              "types": [
                {
                  "type": "TSTypeLiteral",
                  "members": [
                    {
                      "type": "TSPropertySignature",
                      "computed": false,
                      "optional": false,
                      "readonly": false,
                      "key": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "label",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 26,
                        "end": 31
                      },
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSStringKeyword",
                          "start": 33,
                          "end": 39
                        },
                        "start": 31,
                        "end": 39
                      },
                      "accessibility": null,
                      "static": false,
                      "start": 26,
                      "end": 40
                    },
                    {
                      "type": "TSPropertySignature",
                      "computed": false,
                      "optional": false,
                      "readonly": false,
                      "key": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "alias",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 41,
                        "end": 46
                      },
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSStringKeyword",
                          "start": 48,
                          "end": 54
                        },
                        "start": 46,
                        "end": 54
                      },
                      "accessibility": null,
                      "static": false,
                      "start": 41,
                      "end": 54
                    }
                  ],
                  "start": 24,
                  "end": 56
                },
                {
                  "type": "TSTypeLiteral",
                  "members": [
                    {
                      "type": "TSPropertySignature",
                      "computed": false,
                      "optional": false,
                      "readonly": false,
                      "key": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "label",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 61,
                        "end": 66
                      },
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSObjectKeyword",
                          "start": 68,
                          "end": 74
                        },
                        "start": 66,
                        "end": 74
                      },
                      "accessibility": null,
                      "static": false,
                      "start": 61,
                      "end": 75
                    },
                    {
                      "type": "TSPropertySignature",
                      "computed": false,
                      "optional": true,
                      "readonly": false,
                      "key": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "alias",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 76,
                        "end": 81
                      },
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSStringKeyword",
                          "start": 84,
                          "end": 90
                        },
                        "start": 82,
                        "end": 90
                      },
                      "accessibility": null,
                      "static": false,
                      "start": 76,
                      "end": 90
                    }
                  ],
                  "start": 59,
                  "end": 92
                }
              ],
              "start": 24,
              "end": 92
            },
            "start": 22,
            "end": 92
          },
          "start": 15,
          "end": 92
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "IfStatement",
            "test": {
              "type": "BinaryExpression",
              "left": {
                "type": "UnaryExpression",
                "operator": "typeof",
                "argument": {
                  "type": "MemberExpression",
                  "object": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "options",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 111,
                    "end": 118
                  },
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "label",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 119,
                    "end": 124
                  },
                  "optional": false,
                  "computed": false,
                  "start": 111,
                  "end": 124
                },
                "prefix": true,
                "start": 104,
                "end": 124
              },
              "operator": "===",
              "right": {
                "type": "Literal",
                "value": "string",
                "raw": "\"string\"",
                "start": 129,
                "end": 137
              },
              "start": 104,
              "end": 137
            },
            "consequent": {
              "type": "ReturnStatement",
              "argument": {
                "type": "LogicalExpression",
                "left": {
                  "type": "MemberExpression",
                  "object": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "options",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 146,
                    "end": 153
                  },
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "alias",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 154,
                    "end": 159
                  },
                  "optional": false,
                  "computed": false,
                  "start": 146,
                  "end": 159
                },
                "operator": "??",
                "right": {
                  "type": "MemberExpression",
                  "object": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "options",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 163,
                    "end": 170
                  },
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "label",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 171,
                    "end": 176
                  },
                  "optional": false,
                  "computed": false,
                  "start": 163,
                  "end": 176
                },
                "start": 146,
                "end": 176
              },
              "start": 139,
              "end": 177
            },
            "alternate": null,
            "start": 100,
            "end": 177
          }
        ],
        "start": 94,
        "end": 179
      },
      "expression": false,
      "start": 0,
      "end": 179
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 179
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Keyword",
    "value": "function",
    "start": 0,
    "end": 8
  },
  {
    "type": "Identifier",
    "value": "label",
    "start": 9,
    "end": 14
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 14,
    "end": 15
  },
  {
    "type": "Identifier",
    "value": "options",
    "start": 15,
    "end": 22
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 22,
    "end": 23
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 24,
    "end": 25
  },
  {
    "type": "Identifier",
    "value": "label",
    "start": 26,
    "end": 31
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 31,
    "end": 32
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 33,
    "end": 39
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 39,
    "end": 40
  },
  {
    "type": "Identifier",
    "value": "alias",
    "start": 41,
    "end": 46
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 46,
    "end": 47
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 48,
    "end": 54
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 55,
    "end": 56
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 57,
    "end": 58
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 59,
    "end": 60
  },
  {
    "type": "Identifier",
    "value": "label",
    "start": 61,
    "end": 66
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 66,
    "end": 67
  },
  {
    "type": "Identifier",
    "value": "object",
    "start": 68,
    "end": 74
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 74,
    "end": 75
  },
  {
    "type": "Identifier",
    "value": "alias",
    "start": 76,
    "end": 81
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 81,
    "end": 82
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 82,
    "end": 83
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 84,
    "end": 90
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 91,
    "end": 92
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 92,
    "end": 93
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 94,
    "end": 95
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 100,
    "end": 102
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 103,
    "end": 104
  },
  {
    "type": "Keyword",
    "value": "typeof",
    "start": 104,
    "end": 110
  },
  {
    "type": "Identifier",
    "value": "options",
    "start": 111,
    "end": 118
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 118,
    "end": 119
  },
  {
    "type": "Identifier",
    "value": "label",
    "start": 119,
    "end": 124
  },
  {
    "type": "Punctuator",
    "value": "===",
    "start": 125,
    "end": 128
  },
  {
    "type": "String",
    "value": "\"string\"",
    "start": 129,
    "end": 137
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 137,
    "end": 138
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 139,
    "end": 145
  },
  {
    "type": "Identifier",
    "value": "options",
    "start": 146,
    "end": 153
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 153,
    "end": 154
  },
  {
    "type": "Identifier",
    "value": "alias",
    "start": 154,
    "end": 159
  },
  {
    "type": "Punctuator",
    "value": "??",
    "start": 160,
    "end": 162
  },
  {
    "type": "Identifier",
    "value": "options",
    "start": 163,
    "end": 170
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 170,
    "end": 171
  },
  {
    "type": "Identifier",
    "value": "label",
    "start": 171,
    "end": 176
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 176,
    "end": 177
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 178,
    "end": 179
  }
]
```
