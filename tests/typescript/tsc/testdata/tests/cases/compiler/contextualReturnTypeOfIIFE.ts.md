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
            "name": "test1",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Promise",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 13,
                  "end": 20
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "params": [
                    {
                      "type": "TSTupleType",
                      "elementTypes": [
                        {
                          "type": "TSNamedTupleMember",
                          "label": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "one",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 22,
                            "end": 25
                          },
                          "elementType": {
                            "type": "TSNumberKeyword",
                            "start": 27,
                            "end": 33
                          },
                          "optional": false,
                          "start": 22,
                          "end": 33
                        },
                        {
                          "type": "TSNamedTupleMember",
                          "label": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "two",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 35,
                            "end": 38
                          },
                          "elementType": {
                            "type": "TSStringKeyword",
                            "start": 40,
                            "end": 46
                          },
                          "optional": false,
                          "start": 35,
                          "end": 46
                        }
                      ],
                      "start": 21,
                      "end": 47
                    }
                  ],
                  "start": 20,
                  "end": 48
                },
                "start": 13,
                "end": 48
              },
              "start": 11,
              "end": 48
            },
            "start": 6,
            "end": 48
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "ArrowFunctionExpression",
              "expression": false,
              "async": true,
              "typeParameters": null,
              "params": [],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "ReturnStatement",
                    "argument": {
                      "type": "ArrayExpression",
                      "elements": [
                        {
                          "type": "Literal",
                          "value": 1,
                          "raw": "1",
                          "start": 78,
                          "end": 79
                        },
                        {
                          "type": "Literal",
                          "value": "two",
                          "raw": "'two'",
                          "start": 81,
                          "end": 86
                        }
                      ],
                      "start": 77,
                      "end": 87
                    },
                    "start": 70,
                    "end": 88
                  }
                ],
                "start": 64,
                "end": 90
              },
              "id": null,
              "generator": false,
              "start": 52,
              "end": 90
            },
            "typeArguments": null,
            "arguments": [],
            "optional": false,
            "start": 51,
            "end": 93
          },
          "definite": false,
          "start": 6,
          "end": 93
        }
      ],
      "declare": false,
      "start": 0,
      "end": 94
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
            "name": "test2",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Promise",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 109,
                  "end": 116
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "params": [
                    {
                      "type": "TSTupleType",
                      "elementTypes": [
                        {
                          "type": "TSNamedTupleMember",
                          "label": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "one",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 118,
                            "end": 121
                          },
                          "elementType": {
                            "type": "TSNumberKeyword",
                            "start": 123,
                            "end": 129
                          },
                          "optional": false,
                          "start": 118,
                          "end": 129
                        },
                        {
                          "type": "TSNamedTupleMember",
                          "label": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "two",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 131,
                            "end": 134
                          },
                          "elementType": {
                            "type": "TSStringKeyword",
                            "start": 136,
                            "end": 142
                          },
                          "optional": false,
                          "start": 131,
                          "end": 142
                        }
                      ],
                      "start": 117,
                      "end": 143
                    }
                  ],
                  "start": 116,
                  "end": 144
                },
                "start": 109,
                "end": 144
              },
              "start": 107,
              "end": 144
            },
            "start": 102,
            "end": 144
          },
          "init": {
            "type": "NewExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "Promise",
              "optional": false,
              "typeAnnotation": null,
              "start": 151,
              "end": 158
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
                    "name": "resolve",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 165,
                    "end": 172
                  }
                ],
                "returnType": null,
                "body": {
                  "type": "CallExpression",
                  "callee": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "resolve",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 177,
                    "end": 184
                  },
                  "typeArguments": null,
                  "arguments": [
                    {
                      "type": "ArrayExpression",
                      "elements": [
                        {
                          "type": "Literal",
                          "value": 1,
                          "raw": "1",
                          "start": 186,
                          "end": 187
                        },
                        {
                          "type": "Literal",
                          "value": "two",
                          "raw": "'two'",
                          "start": 189,
                          "end": 194
                        }
                      ],
                      "start": 185,
                      "end": 195
                    }
                  ],
                  "optional": false,
                  "start": 177,
                  "end": 196
                },
                "id": null,
                "generator": false,
                "start": 164,
                "end": 196
              }
            ],
            "start": 147,
            "end": 199
          },
          "definite": false,
          "start": 102,
          "end": 199
        }
      ],
      "declare": false,
      "start": 96,
      "end": 200
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
            "name": "obj",
            "optional": false,
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
                      "name": "foo",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 215,
                      "end": 218
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSTupleType",
                        "elementTypes": [
                          {
                            "type": "TSNamedTupleMember",
                            "label": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "one",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 221,
                              "end": 224
                            },
                            "elementType": {
                              "type": "TSNumberKeyword",
                              "start": 226,
                              "end": 232
                            },
                            "optional": false,
                            "start": 221,
                            "end": 232
                          },
                          {
                            "type": "TSNamedTupleMember",
                            "label": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "two",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 234,
                              "end": 237
                            },
                            "elementType": {
                              "type": "TSStringKeyword",
                              "start": 239,
                              "end": 245
                            },
                            "optional": false,
                            "start": 234,
                            "end": 245
                          }
                        ],
                        "start": 220,
                        "end": 246
                      },
                      "start": 218,
                      "end": 246
                    },
                    "accessibility": null,
                    "static": false,
                    "start": 215,
                    "end": 246
                  }
                ],
                "start": 213,
                "end": 248
              },
              "start": 211,
              "end": 248
            },
            "start": 208,
            "end": 248
          },
          "init": {
            "type": "ObjectExpression",
            "properties": [
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "foo",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 257,
                  "end": 260
                },
                "value": {
                  "type": "CallExpression",
                  "callee": {
                    "type": "ArrowFunctionExpression",
                    "expression": true,
                    "async": false,
                    "typeParameters": null,
                    "params": [],
                    "returnType": null,
                    "body": {
                      "type": "ArrayExpression",
                      "elements": [
                        {
                          "type": "Literal",
                          "value": 1,
                          "raw": "1",
                          "start": 270,
                          "end": 271
                        },
                        {
                          "type": "Literal",
                          "value": "two",
                          "raw": "'two'",
                          "start": 273,
                          "end": 278
                        }
                      ],
                      "start": 269,
                      "end": 279
                    },
                    "id": null,
                    "generator": false,
                    "start": 263,
                    "end": 279
                  },
                  "typeArguments": null,
                  "arguments": [],
                  "optional": false,
                  "start": 262,
                  "end": 282
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 257,
                "end": 282
              }
            ],
            "start": 251,
            "end": 284
          },
          "definite": false,
          "start": 208,
          "end": 284
        }
      ],
      "declare": false,
      "start": 202,
      "end": 285
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 285
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
    "value": "test1",
    "start": 6,
    "end": 11
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 11,
    "end": 12
  },
  {
    "type": "Identifier",
    "value": "Promise",
    "start": 13,
    "end": 20
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 20,
    "end": 21
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 21,
    "end": 22
  },
  {
    "type": "Identifier",
    "value": "one",
    "start": 22,
    "end": 25
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 25,
    "end": 26
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 27,
    "end": 33
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 33,
    "end": 34
  },
  {
    "type": "Identifier",
    "value": "two",
    "start": 35,
    "end": 38
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 38,
    "end": 39
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 40,
    "end": 46
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 46,
    "end": 47
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 47,
    "end": 48
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 49,
    "end": 50
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 51,
    "end": 52
  },
  {
    "type": "Identifier",
    "value": "async",
    "start": 52,
    "end": 57
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 58,
    "end": 59
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 59,
    "end": 60
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 61,
    "end": 63
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 64,
    "end": 65
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 70,
    "end": 76
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 77,
    "end": 78
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 78,
    "end": 79
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 79,
    "end": 80
  },
  {
    "type": "String",
    "value": "'two'",
    "start": 81,
    "end": 86
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 86,
    "end": 87
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 87,
    "end": 88
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 89,
    "end": 90
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 90,
    "end": 91
  },
  {
    "type": "Punctuator",
    "value": "(",
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
    "value": ";",
    "start": 93,
    "end": 94
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 96,
    "end": 101
  },
  {
    "type": "Identifier",
    "value": "test2",
    "start": 102,
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
    "value": "Promise",
    "start": 109,
    "end": 116
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 116,
    "end": 117
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 117,
    "end": 118
  },
  {
    "type": "Identifier",
    "value": "one",
    "start": 118,
    "end": 121
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 121,
    "end": 122
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 123,
    "end": 129
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 129,
    "end": 130
  },
  {
    "type": "Identifier",
    "value": "two",
    "start": 131,
    "end": 134
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 134,
    "end": 135
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 136,
    "end": 142
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 142,
    "end": 143
  },
  {
    "type": "Punctuator",
    "value": ">",
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
    "type": "Keyword",
    "value": "new",
    "start": 147,
    "end": 150
  },
  {
    "type": "Identifier",
    "value": "Promise",
    "start": 151,
    "end": 158
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 158,
    "end": 159
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 164,
    "end": 165
  },
  {
    "type": "Identifier",
    "value": "resolve",
    "start": 165,
    "end": 172
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 172,
    "end": 173
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 174,
    "end": 176
  },
  {
    "type": "Identifier",
    "value": "resolve",
    "start": 177,
    "end": 184
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 184,
    "end": 185
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 185,
    "end": 186
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 186,
    "end": 187
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 187,
    "end": 188
  },
  {
    "type": "String",
    "value": "'two'",
    "start": 189,
    "end": 194
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 194,
    "end": 195
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 195,
    "end": 196
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 196,
    "end": 197
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 198,
    "end": 199
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 199,
    "end": 200
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 202,
    "end": 207
  },
  {
    "type": "Identifier",
    "value": "obj",
    "start": 208,
    "end": 211
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 211,
    "end": 212
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 213,
    "end": 214
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 215,
    "end": 218
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 218,
    "end": 219
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 220,
    "end": 221
  },
  {
    "type": "Identifier",
    "value": "one",
    "start": 221,
    "end": 224
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 224,
    "end": 225
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 226,
    "end": 232
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 232,
    "end": 233
  },
  {
    "type": "Identifier",
    "value": "two",
    "start": 234,
    "end": 237
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 237,
    "end": 238
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 239,
    "end": 245
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 245,
    "end": 246
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 247,
    "end": 248
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 249,
    "end": 250
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 251,
    "end": 252
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 257,
    "end": 260
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 260,
    "end": 261
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 262,
    "end": 263
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 263,
    "end": 264
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 264,
    "end": 265
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 266,
    "end": 268
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 269,
    "end": 270
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 270,
    "end": 271
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 271,
    "end": 272
  },
  {
    "type": "String",
    "value": "'two'",
    "start": 273,
    "end": 278
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 278,
    "end": 279
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 279,
    "end": 280
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 280,
    "end": 281
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 281,
    "end": 282
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 283,
    "end": 284
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 284,
    "end": 285
  }
]
```
