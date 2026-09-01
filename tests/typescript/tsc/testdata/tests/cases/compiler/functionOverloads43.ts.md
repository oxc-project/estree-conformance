__ESTREE_TEST__:AST:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo",
        "optional": false,
        "typeAnnotation": null,
        "start": 9,
        "end": 12
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "bar",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSArrayType",
              "elementType": {
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
                      "name": "a",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 20,
                      "end": 21
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 22,
                        "end": 28
                      },
                      "start": 21,
                      "end": 28
                    },
                    "accessibility": null,
                    "static": false,
                    "start": 20,
                    "end": 28
                  }
                ],
                "start": 18,
                "end": 30
              },
              "start": 18,
              "end": 32
            },
            "start": 16,
            "end": 32
          },
          "start": 13,
          "end": 32
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSNumberKeyword",
          "start": 35,
          "end": 41
        },
        "start": 33,
        "end": 41
      },
      "body": null,
      "expression": false,
      "start": 0,
      "end": 42
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo",
        "optional": false,
        "typeAnnotation": null,
        "start": 52,
        "end": 55
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "bar",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSArrayType",
              "elementType": {
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
                      "name": "a",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 63,
                      "end": 64
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSStringKeyword",
                        "start": 65,
                        "end": 71
                      },
                      "start": 64,
                      "end": 71
                    },
                    "accessibility": null,
                    "static": false,
                    "start": 63,
                    "end": 71
                  }
                ],
                "start": 61,
                "end": 73
              },
              "start": 61,
              "end": 75
            },
            "start": 59,
            "end": 75
          },
          "start": 56,
          "end": 75
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSStringKeyword",
          "start": 78,
          "end": 84
        },
        "start": 76,
        "end": 84
      },
      "body": null,
      "expression": false,
      "start": 43,
      "end": 85
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo",
        "optional": false,
        "typeAnnotation": null,
        "start": 95,
        "end": 98
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "ArrayPattern",
          "decorators": [],
          "elements": [
            {
              "type": "Identifier",
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null,
              "start": 100,
              "end": 101
            }
          ],
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSArrayType",
              "elementType": {
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
                      "name": "a",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 106,
                      "end": 107
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSUnionType",
                        "types": [
                          {
                            "type": "TSNumberKeyword",
                            "start": 108,
                            "end": 114
                          },
                          {
                            "type": "TSStringKeyword",
                            "start": 117,
                            "end": 123
                          }
                        ],
                        "start": 108,
                        "end": 123
                      },
                      "start": 107,
                      "end": 123
                    },
                    "accessibility": null,
                    "static": false,
                    "start": 106,
                    "end": 123
                  }
                ],
                "start": 104,
                "end": 125
              },
              "start": 104,
              "end": 127
            },
            "start": 102,
            "end": 127
          },
          "start": 99,
          "end": 127
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSUnionType",
          "types": [
            {
              "type": "TSStringKeyword",
              "start": 130,
              "end": 136
            },
            {
              "type": "TSNumberKeyword",
              "start": 139,
              "end": 145
            }
          ],
          "start": 130,
          "end": 145
        },
        "start": 128,
        "end": 145
      },
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "IfStatement",
            "test": {
              "type": "Identifier",
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null,
              "start": 156,
              "end": 157
            },
            "consequent": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "ReturnStatement",
                  "argument": {
                    "type": "MemberExpression",
                    "object": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 176,
                      "end": 177
                    },
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "a",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 178,
                      "end": 179
                    },
                    "optional": false,
                    "computed": false,
                    "start": 176,
                    "end": 179
                  },
                  "start": 169,
                  "end": 180
                }
              ],
              "start": 159,
              "end": 186
            },
            "alternate": null,
            "start": 152,
            "end": 186
          },
          {
            "type": "ReturnStatement",
            "argument": {
              "type": "Identifier",
              "decorators": [],
              "name": "undefined",
              "optional": false,
              "typeAnnotation": null,
              "start": 203,
              "end": 212
            },
            "start": 196,
            "end": 213
          }
        ],
        "start": 146,
        "end": 215
      },
      "expression": false,
      "start": 86,
      "end": 215
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "x",
            "optional": false,
            "typeAnnotation": null,
            "start": 221,
            "end": 222
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "foo",
              "optional": false,
              "typeAnnotation": null,
              "start": 225,
              "end": 228
            },
            "typeArguments": null,
            "arguments": [
              {
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
                          "name": "a",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 231,
                          "end": 232
                        },
                        "value": {
                          "type": "Literal",
                          "value": "str",
                          "raw": "\"str\"",
                          "start": 234,
                          "end": 239
                        },
                        "method": false,
                        "shorthand": false,
                        "computed": false,
                        "optional": false,
                        "start": 231,
                        "end": 239
                      }
                    ],
                    "start": 230,
                    "end": 240
                  }
                ],
                "start": 229,
                "end": 241
              }
            ],
            "optional": false,
            "start": 225,
            "end": 242
          },
          "definite": false,
          "start": 221,
          "end": 242
        }
      ],
      "declare": false,
      "start": 217,
      "end": 243
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "y",
            "optional": false,
            "typeAnnotation": null,
            "start": 248,
            "end": 249
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "foo",
              "optional": false,
              "typeAnnotation": null,
              "start": 252,
              "end": 255
            },
            "typeArguments": null,
            "arguments": [
              {
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
                          "name": "a",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 258,
                          "end": 259
                        },
                        "value": {
                          "type": "Literal",
                          "value": 100,
                          "raw": "100",
                          "start": 261,
                          "end": 264
                        },
                        "method": false,
                        "shorthand": false,
                        "computed": false,
                        "optional": false,
                        "start": 258,
                        "end": 264
                      }
                    ],
                    "start": 257,
                    "end": 265
                  }
                ],
                "start": 256,
                "end": 266
              }
            ],
            "optional": false,
            "start": 252,
            "end": 267
          },
          "definite": false,
          "start": 248,
          "end": 267
        }
      ],
      "declare": false,
      "start": 244,
      "end": 268
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 268
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
    "value": "foo",
    "start": 9,
    "end": 12
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 12,
    "end": 13
  },
  {
    "type": "Identifier",
    "value": "bar",
    "start": 13,
    "end": 16
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 16,
    "end": 17
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 18,
    "end": 19
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 20,
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
    "value": "number",
    "start": 22,
    "end": 28
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 29,
    "end": 30
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 30,
    "end": 31
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 31,
    "end": 32
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 32,
    "end": 33
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 33,
    "end": 34
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 35,
    "end": 41
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 41,
    "end": 42
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 43,
    "end": 51
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 52,
    "end": 55
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 55,
    "end": 56
  },
  {
    "type": "Identifier",
    "value": "bar",
    "start": 56,
    "end": 59
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 59,
    "end": 60
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 61,
    "end": 62
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 63,
    "end": 64
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 64,
    "end": 65
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 65,
    "end": 71
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 72,
    "end": 73
  },
  {
    "type": "Punctuator",
    "value": "[",
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
    "value": ")",
    "start": 75,
    "end": 76
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 76,
    "end": 77
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 78,
    "end": 84
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 84,
    "end": 85
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 86,
    "end": 94
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 95,
    "end": 98
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 98,
    "end": 99
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 99,
    "end": 100
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 100,
    "end": 101
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 101,
    "end": 102
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 102,
    "end": 103
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 104,
    "end": 105
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 106,
    "end": 107
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 107,
    "end": 108
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 108,
    "end": 114
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 115,
    "end": 116
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 117,
    "end": 123
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 124,
    "end": 125
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 125,
    "end": 126
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 126,
    "end": 127
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 127,
    "end": 128
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 128,
    "end": 129
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 130,
    "end": 136
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 137,
    "end": 138
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 139,
    "end": 145
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 146,
    "end": 147
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 152,
    "end": 154
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 155,
    "end": 156
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 156,
    "end": 157
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 157,
    "end": 158
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 159,
    "end": 160
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 169,
    "end": 175
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 176,
    "end": 177
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 177,
    "end": 178
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 178,
    "end": 179
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 179,
    "end": 180
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 185,
    "end": 186
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 196,
    "end": 202
  },
  {
    "type": "Identifier",
    "value": "undefined",
    "start": 203,
    "end": 212
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 212,
    "end": 213
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 214,
    "end": 215
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 217,
    "end": 220
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 221,
    "end": 222
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 223,
    "end": 224
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 225,
    "end": 228
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 228,
    "end": 229
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 229,
    "end": 230
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 230,
    "end": 231
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 231,
    "end": 232
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 232,
    "end": 233
  },
  {
    "type": "String",
    "value": "\"str\"",
    "start": 234,
    "end": 239
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 239,
    "end": 240
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 240,
    "end": 241
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 241,
    "end": 242
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 242,
    "end": 243
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 244,
    "end": 247
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 248,
    "end": 249
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 250,
    "end": 251
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 252,
    "end": 255
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 255,
    "end": 256
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 256,
    "end": 257
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 257,
    "end": 258
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 258,
    "end": 259
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 259,
    "end": 260
  },
  {
    "type": "Numeric",
    "value": "100",
    "start": 261,
    "end": 264
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 264,
    "end": 265
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 265,
    "end": 266
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 266,
    "end": 267
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 267,
    "end": 268
  }
]
```
