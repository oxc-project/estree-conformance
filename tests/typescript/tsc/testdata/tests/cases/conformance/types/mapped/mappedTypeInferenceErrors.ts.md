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
        "name": "ComputedOf",
        "optional": false,
        "typeAnnotation": null,
        "start": 27,
        "end": 37
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "params": [
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null,
              "start": 38,
              "end": 39
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 38,
            "end": 39
          }
        ],
        "start": 37,
        "end": 40
      },
      "typeAnnotation": {
        "type": "TSMappedType",
        "key": {
          "type": "Identifier",
          "decorators": [],
          "name": "K",
          "optional": false,
          "typeAnnotation": null,
          "start": 50,
          "end": 51
        },
        "constraint": {
          "type": "TSTypeOperator",
          "operator": "keyof",
          "typeAnnotation": {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null,
              "start": 61,
              "end": 62
            },
            "typeArguments": null,
            "start": 61,
            "end": 62
          },
          "start": 55,
          "end": 62
        },
        "nameType": null,
        "typeAnnotation": {
          "type": "TSFunctionType",
          "typeParameters": null,
          "params": [],
          "returnType": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSIndexedAccessType",
              "objectType": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "T",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 71,
                  "end": 72
                },
                "typeArguments": null,
                "start": 71,
                "end": 72
              },
              "indexType": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "K",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 73,
                  "end": 74
                },
                "typeArguments": null,
                "start": 73,
                "end": 74
              },
              "start": 71,
              "end": 75
            },
            "start": 68,
            "end": 75
          },
          "start": 65,
          "end": 75
        },
        "optional": false,
        "readonly": null,
        "start": 43,
        "end": 78
      },
      "declare": false,
      "start": 22,
      "end": 78
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo",
        "optional": false,
        "typeAnnotation": null,
        "start": 97,
        "end": 100
      },
      "generator": false,
      "async": false,
      "declare": true,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "params": [
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "P",
              "optional": false,
              "typeAnnotation": null,
              "start": 101,
              "end": 102
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 101,
            "end": 102
          },
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "C",
              "optional": false,
              "typeAnnotation": null,
              "start": 104,
              "end": 105
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 104,
            "end": 105
          }
        ],
        "start": 100,
        "end": 106
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "options",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSIntersectionType",
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
                        "name": "props",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 118,
                        "end": 123
                      },
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "P",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 125,
                            "end": 126
                          },
                          "typeArguments": null,
                          "start": 125,
                          "end": 126
                        },
                        "start": 123,
                        "end": 126
                      },
                      "accessibility": null,
                      "static": false,
                      "start": 118,
                      "end": 127
                    },
                    {
                      "type": "TSPropertySignature",
                      "computed": false,
                      "optional": false,
                      "readonly": false,
                      "key": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "computed",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 128,
                        "end": 136
                      },
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "ComputedOf",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 138,
                            "end": 148
                          },
                          "typeArguments": {
                            "type": "TSTypeParameterInstantiation",
                            "params": [
                              {
                                "type": "TSTypeReference",
                                "typeName": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "C",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 149,
                                  "end": 150
                                },
                                "typeArguments": null,
                                "start": 149,
                                "end": 150
                              }
                            ],
                            "start": 148,
                            "end": 151
                          },
                          "start": 138,
                          "end": 151
                        },
                        "start": 136,
                        "end": 151
                      },
                      "accessibility": null,
                      "static": false,
                      "start": 128,
                      "end": 151
                    }
                  ],
                  "start": 116,
                  "end": 153
                },
                {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "ThisType",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 156,
                    "end": 164
                  },
                  "typeArguments": {
                    "type": "TSTypeParameterInstantiation",
                    "params": [
                      {
                        "type": "TSIntersectionType",
                        "types": [
                          {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "P",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 165,
                              "end": 166
                            },
                            "typeArguments": null,
                            "start": 165,
                            "end": 166
                          },
                          {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "C",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 169,
                              "end": 170
                            },
                            "typeArguments": null,
                            "start": 169,
                            "end": 170
                          }
                        ],
                        "start": 165,
                        "end": 170
                      }
                    ],
                    "start": 164,
                    "end": 171
                  },
                  "start": 156,
                  "end": 171
                }
              ],
              "start": 116,
              "end": 171
            },
            "start": 114,
            "end": 171
          },
          "start": 107,
          "end": 171
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSVoidKeyword",
          "start": 174,
          "end": 178
        },
        "start": 172,
        "end": 178
      },
      "body": null,
      "expression": false,
      "start": 80,
      "end": 179
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "foo",
          "optional": false,
          "typeAnnotation": null,
          "start": 181,
          "end": 184
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "ObjectExpression",
            "properties": [
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "props",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 191,
                  "end": 196
                },
                "value": {
                  "type": "ObjectExpression",
                  "properties": [
                    {
                      "type": "Property",
                      "kind": "init",
                      "key": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 200,
                        "end": 201
                      },
                      "value": {
                        "type": "Literal",
                        "value": 10,
                        "raw": "10",
                        "start": 203,
                        "end": 205
                      },
                      "method": false,
                      "shorthand": false,
                      "computed": false,
                      "optional": false,
                      "start": 200,
                      "end": 205
                    },
                    {
                      "type": "Property",
                      "kind": "init",
                      "key": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "y",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 207,
                        "end": 208
                      },
                      "value": {
                        "type": "Literal",
                        "value": 20,
                        "raw": "20",
                        "start": 210,
                        "end": 212
                      },
                      "method": false,
                      "shorthand": false,
                      "computed": false,
                      "optional": false,
                      "start": 207,
                      "end": 212
                    }
                  ],
                  "start": 198,
                  "end": 214
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 191,
                "end": 214
              },
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "computed",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 220,
                  "end": 228
                },
                "value": {
                  "type": "ObjectExpression",
                  "properties": [
                    {
                      "type": "Property",
                      "kind": "init",
                      "key": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "bar",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 240,
                        "end": 243
                      },
                      "value": {
                        "type": "FunctionExpression",
                        "id": null,
                        "generator": false,
                        "async": false,
                        "declare": false,
                        "typeParameters": null,
                        "params": [],
                        "returnType": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSNumberKeyword",
                            "start": 247,
                            "end": 253
                          },
                          "start": 245,
                          "end": 253
                        },
                        "body": {
                          "type": "BlockStatement",
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
                                    "name": "z",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 272,
                                    "end": 273
                                  },
                                  "init": {
                                    "type": "MemberExpression",
                                    "object": {
                                      "type": "ThisExpression",
                                      "start": 276,
                                      "end": 280
                                    },
                                    "property": {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "bar",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 281,
                                      "end": 284
                                    },
                                    "optional": false,
                                    "computed": false,
                                    "start": 276,
                                    "end": 284
                                  },
                                  "definite": false,
                                  "start": 272,
                                  "end": 284
                                }
                              ],
                              "declare": false,
                              "start": 268,
                              "end": 285
                            },
                            {
                              "type": "ReturnStatement",
                              "argument": {
                                "type": "Literal",
                                "value": 42,
                                "raw": "42",
                                "start": 305,
                                "end": 307
                              },
                              "start": 298,
                              "end": 308
                            }
                          ],
                          "start": 254,
                          "end": 318
                        },
                        "expression": false,
                        "start": 243,
                        "end": 318
                      },
                      "method": true,
                      "shorthand": false,
                      "computed": false,
                      "optional": false,
                      "start": 240,
                      "end": 318
                    },
                    {
                      "type": "Property",
                      "kind": "init",
                      "key": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "baz",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 328,
                        "end": 331
                      },
                      "value": {
                        "type": "Literal",
                        "value": 42,
                        "raw": "42",
                        "start": 333,
                        "end": 335
                      },
                      "method": false,
                      "shorthand": false,
                      "computed": false,
                      "optional": false,
                      "start": 328,
                      "end": 335
                    }
                  ],
                  "start": 230,
                  "end": 341
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 220,
                "end": 341
              }
            ],
            "start": 185,
            "end": 343
          }
        ],
        "optional": false,
        "start": 181,
        "end": 344
      },
      "directive": null,
      "start": 181,
      "end": 345
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 22,
  "end": 345
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Identifier",
    "value": "type",
    "start": 22,
    "end": 26
  },
  {
    "type": "Identifier",
    "value": "ComputedOf",
    "start": 27,
    "end": 37
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 37,
    "end": 38
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 38,
    "end": 39
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 39,
    "end": 40
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 41,
    "end": 42
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 43,
    "end": 44
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 49,
    "end": 50
  },
  {
    "type": "Identifier",
    "value": "K",
    "start": 50,
    "end": 51
  },
  {
    "type": "Keyword",
    "value": "in",
    "start": 52,
    "end": 54
  },
  {
    "type": "Identifier",
    "value": "keyof",
    "start": 55,
    "end": 60
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 61,
    "end": 62
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 62,
    "end": 63
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 63,
    "end": 64
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 65,
    "end": 66
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 66,
    "end": 67
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 68,
    "end": 70
  },
  {
    "type": "Identifier",
    "value": "T",
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
    "type": "Identifier",
    "value": "K",
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
    "type": "Punctuator",
    "value": "}",
    "start": 77,
    "end": 78
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 80,
    "end": 87
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 88,
    "end": 96
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 97,
    "end": 100
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 100,
    "end": 101
  },
  {
    "type": "Identifier",
    "value": "P",
    "start": 101,
    "end": 102
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 102,
    "end": 103
  },
  {
    "type": "Identifier",
    "value": "C",
    "start": 104,
    "end": 105
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 105,
    "end": 106
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 106,
    "end": 107
  },
  {
    "type": "Identifier",
    "value": "options",
    "start": 107,
    "end": 114
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 114,
    "end": 115
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 116,
    "end": 117
  },
  {
    "type": "Identifier",
    "value": "props",
    "start": 118,
    "end": 123
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 123,
    "end": 124
  },
  {
    "type": "Identifier",
    "value": "P",
    "start": 125,
    "end": 126
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 126,
    "end": 127
  },
  {
    "type": "Identifier",
    "value": "computed",
    "start": 128,
    "end": 136
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 136,
    "end": 137
  },
  {
    "type": "Identifier",
    "value": "ComputedOf",
    "start": 138,
    "end": 148
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 148,
    "end": 149
  },
  {
    "type": "Identifier",
    "value": "C",
    "start": 149,
    "end": 150
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 150,
    "end": 151
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 152,
    "end": 153
  },
  {
    "type": "Punctuator",
    "value": "&",
    "start": 154,
    "end": 155
  },
  {
    "type": "Identifier",
    "value": "ThisType",
    "start": 156,
    "end": 164
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 164,
    "end": 165
  },
  {
    "type": "Identifier",
    "value": "P",
    "start": 165,
    "end": 166
  },
  {
    "type": "Punctuator",
    "value": "&",
    "start": 167,
    "end": 168
  },
  {
    "type": "Identifier",
    "value": "C",
    "start": 169,
    "end": 170
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 170,
    "end": 171
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 171,
    "end": 172
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 172,
    "end": 173
  },
  {
    "type": "Keyword",
    "value": "void",
    "start": 174,
    "end": 178
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 178,
    "end": 179
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 181,
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
    "value": "{",
    "start": 185,
    "end": 186
  },
  {
    "type": "Identifier",
    "value": "props",
    "start": 191,
    "end": 196
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 196,
    "end": 197
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 198,
    "end": 199
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 200,
    "end": 201
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 201,
    "end": 202
  },
  {
    "type": "Numeric",
    "value": "10",
    "start": 203,
    "end": 205
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 205,
    "end": 206
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 207,
    "end": 208
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 208,
    "end": 209
  },
  {
    "type": "Numeric",
    "value": "20",
    "start": 210,
    "end": 212
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 213,
    "end": 214
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 214,
    "end": 215
  },
  {
    "type": "Identifier",
    "value": "computed",
    "start": 220,
    "end": 228
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 228,
    "end": 229
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 230,
    "end": 231
  },
  {
    "type": "Identifier",
    "value": "bar",
    "start": 240,
    "end": 243
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 243,
    "end": 244
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 244,
    "end": 245
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 245,
    "end": 246
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 247,
    "end": 253
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 254,
    "end": 255
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 268,
    "end": 271
  },
  {
    "type": "Identifier",
    "value": "z",
    "start": 272,
    "end": 273
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 274,
    "end": 275
  },
  {
    "type": "Keyword",
    "value": "this",
    "start": 276,
    "end": 280
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 280,
    "end": 281
  },
  {
    "type": "Identifier",
    "value": "bar",
    "start": 281,
    "end": 284
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 284,
    "end": 285
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 298,
    "end": 304
  },
  {
    "type": "Numeric",
    "value": "42",
    "start": 305,
    "end": 307
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 307,
    "end": 308
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 317,
    "end": 318
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 318,
    "end": 319
  },
  {
    "type": "Identifier",
    "value": "baz",
    "start": 328,
    "end": 331
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 331,
    "end": 332
  },
  {
    "type": "Numeric",
    "value": "42",
    "start": 333,
    "end": 335
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 340,
    "end": 341
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 342,
    "end": 343
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 343,
    "end": 344
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 344,
    "end": 345
  }
]
```
