__ESTREE_TEST__:AST:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Result",
        "optional": false,
        "typeAnnotation": null,
        "start": 5,
        "end": 11
      },
      "typeParameters": null,
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
                  "name": "error",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 16,
                  "end": 21
                },
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSStringKeyword",
                    "start": 23,
                    "end": 29
                  },
                  "start": 21,
                  "end": 29
                },
                "accessibility": null,
                "static": false,
                "start": 16,
                "end": 30
              },
              {
                "type": "TSPropertySignature",
                "computed": false,
                "optional": true,
                "readonly": false,
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "details",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 31,
                  "end": 38
                },
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSNeverKeyword",
                    "start": 41,
                    "end": 46
                  },
                  "start": 39,
                  "end": 46
                },
                "accessibility": null,
                "static": false,
                "start": 31,
                "end": 46
              }
            ],
            "start": 14,
            "end": 48
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
                  "name": "details",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 53,
                  "end": 60
                },
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
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
                          "name": "link",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 64,
                          "end": 68
                        },
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSStringKeyword",
                            "start": 70,
                            "end": 76
                          },
                          "start": 68,
                          "end": 76
                        },
                        "accessibility": null,
                        "static": false,
                        "start": 64,
                        "end": 76
                      }
                    ],
                    "start": 62,
                    "end": 78
                  },
                  "start": 60,
                  "end": 78
                },
                "accessibility": null,
                "static": false,
                "start": 53,
                "end": 79
              },
              {
                "type": "TSPropertySignature",
                "computed": false,
                "optional": true,
                "readonly": false,
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "error",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 80,
                  "end": 85
                },
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSNeverKeyword",
                    "start": 88,
                    "end": 93
                  },
                  "start": 86,
                  "end": 93
                },
                "accessibility": null,
                "static": false,
                "start": 80,
                "end": 93
              }
            ],
            "start": 51,
            "end": 95
          }
        ],
        "start": 14,
        "end": 95
      },
      "declare": false,
      "start": 0,
      "end": 96
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "read",
        "optional": false,
        "typeAnnotation": null,
        "start": 106,
        "end": 110
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "result",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Result",
                "optional": false,
                "typeAnnotation": null,
                "start": 119,
                "end": 125
              },
              "typeArguments": null,
              "start": 119,
              "end": 125
            },
            "start": 117,
            "end": 125
          },
          "start": 111,
          "end": 125
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "IfStatement",
            "test": {
              "type": "LogicalExpression",
              "left": {
                "type": "MemberExpression",
                "object": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "result",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 137,
                  "end": 143
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "error",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 144,
                  "end": 149
                },
                "optional": false,
                "computed": false,
                "start": 137,
                "end": 149
              },
              "operator": "||",
              "right": {
                "type": "UnaryExpression",
                "operator": "!",
                "argument": {
                  "type": "MemberExpression",
                  "object": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "result",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 154,
                    "end": 160
                  },
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "details",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 161,
                    "end": 168
                  },
                  "optional": false,
                  "computed": false,
                  "start": 154,
                  "end": 168
                },
                "prefix": true,
                "start": 153,
                "end": 168
              },
              "start": 137,
              "end": 168
            },
            "consequent": {
              "type": "ReturnStatement",
              "argument": null,
              "start": 170,
              "end": 177
            },
            "alternate": null,
            "start": 133,
            "end": 177
          },
          {
            "type": "ReturnStatement",
            "argument": {
              "type": "MemberExpression",
              "object": {
                "type": "MemberExpression",
                "object": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "result",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 189,
                  "end": 195
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "details",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 196,
                  "end": 203
                },
                "optional": false,
                "computed": false,
                "start": 189,
                "end": 203
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "link",
                "optional": false,
                "typeAnnotation": null,
                "start": 204,
                "end": 208
              },
              "optional": false,
              "computed": false,
              "start": 189,
              "end": 208
            },
            "start": 182,
            "end": 209
          }
        ],
        "start": 127,
        "end": 211
      },
      "expression": false,
      "start": 97,
      "end": 211
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 211
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Identifier",
    "value": "type",
    "start": 0,
    "end": 4
  },
  {
    "type": "Identifier",
    "value": "Result",
    "start": 5,
    "end": 11
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 12,
    "end": 13
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 14,
    "end": 15
  },
  {
    "type": "Identifier",
    "value": "error",
    "start": 16,
    "end": 21
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 21,
    "end": 22
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 23,
    "end": 29
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 29,
    "end": 30
  },
  {
    "type": "Identifier",
    "value": "details",
    "start": 31,
    "end": 38
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 38,
    "end": 39
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 39,
    "end": 40
  },
  {
    "type": "Identifier",
    "value": "never",
    "start": 41,
    "end": 46
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 47,
    "end": 48
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 49,
    "end": 50
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 51,
    "end": 52
  },
  {
    "type": "Identifier",
    "value": "details",
    "start": 53,
    "end": 60
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 60,
    "end": 61
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 62,
    "end": 63
  },
  {
    "type": "Identifier",
    "value": "link",
    "start": 64,
    "end": 68
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 68,
    "end": 69
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 70,
    "end": 76
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 77,
    "end": 78
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 78,
    "end": 79
  },
  {
    "type": "Identifier",
    "value": "error",
    "start": 80,
    "end": 85
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 85,
    "end": 86
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 86,
    "end": 87
  },
  {
    "type": "Identifier",
    "value": "never",
    "start": 88,
    "end": 93
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 94,
    "end": 95
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 95,
    "end": 96
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 97,
    "end": 105
  },
  {
    "type": "Identifier",
    "value": "read",
    "start": 106,
    "end": 110
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 110,
    "end": 111
  },
  {
    "type": "Identifier",
    "value": "result",
    "start": 111,
    "end": 117
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 117,
    "end": 118
  },
  {
    "type": "Identifier",
    "value": "Result",
    "start": 119,
    "end": 125
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 125,
    "end": 126
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 127,
    "end": 128
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 133,
    "end": 135
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 136,
    "end": 137
  },
  {
    "type": "Identifier",
    "value": "result",
    "start": 137,
    "end": 143
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 143,
    "end": 144
  },
  {
    "type": "Identifier",
    "value": "error",
    "start": 144,
    "end": 149
  },
  {
    "type": "Punctuator",
    "value": "||",
    "start": 150,
    "end": 152
  },
  {
    "type": "Punctuator",
    "value": "!",
    "start": 153,
    "end": 154
  },
  {
    "type": "Identifier",
    "value": "result",
    "start": 154,
    "end": 160
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 160,
    "end": 161
  },
  {
    "type": "Identifier",
    "value": "details",
    "start": 161,
    "end": 168
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 168,
    "end": 169
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 170,
    "end": 176
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 176,
    "end": 177
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 182,
    "end": 188
  },
  {
    "type": "Identifier",
    "value": "result",
    "start": 189,
    "end": 195
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 195,
    "end": 196
  },
  {
    "type": "Identifier",
    "value": "details",
    "start": 196,
    "end": 203
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 203,
    "end": 204
  },
  {
    "type": "Identifier",
    "value": "link",
    "start": 204,
    "end": 208
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 208,
    "end": 209
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 210,
    "end": 211
  }
]
```
