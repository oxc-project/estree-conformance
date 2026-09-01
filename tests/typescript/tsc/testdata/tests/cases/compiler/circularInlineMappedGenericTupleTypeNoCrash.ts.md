__ESTREE_TEST__:AST:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Foo",
        "optional": false,
        "typeAnnotation": null,
        "start": 6,
        "end": 9
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "params": [
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "Elements",
              "optional": false,
              "typeAnnotation": null,
              "start": 10,
              "end": 18
            },
            "constraint": {
              "type": "TSTypeOperator",
              "operator": "readonly",
              "typeAnnotation": {
                "type": "TSArrayType",
                "elementType": {
                  "type": "TSUnknownKeyword",
                  "start": 36,
                  "end": 43
                },
                "start": 36,
                "end": 45
              },
              "start": 27,
              "end": 45
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 10,
            "end": 45
          }
        ],
        "start": 9,
        "end": 46
      },
      "superClass": null,
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "body": [
          {
            "type": "PropertyDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "elements",
              "optional": false,
              "typeAnnotation": null,
              "start": 67,
              "end": 75
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSMappedType",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "P",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 80,
                  "end": 81
                },
                "constraint": {
                  "type": "TSTypeOperator",
                  "operator": "keyof",
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Elements",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 91,
                      "end": 99
                    },
                    "typeArguments": null,
                    "start": 91,
                    "end": 99
                  },
                  "start": 85,
                  "end": 99
                },
                "nameType": null,
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
                        "name": "bar",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 104,
                        "end": 107
                      },
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSIndexedAccessType",
                          "objectType": {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "Elements",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 109,
                              "end": 117
                            },
                            "typeArguments": null,
                            "start": 109,
                            "end": 117
                          },
                          "indexType": {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "P",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 118,
                              "end": 119
                            },
                            "typeArguments": null,
                            "start": 118,
                            "end": 119
                          },
                          "start": 109,
                          "end": 120
                        },
                        "start": 107,
                        "end": 120
                      },
                      "accessibility": null,
                      "static": false,
                      "start": 104,
                      "end": 120
                    }
                  ],
                  "start": 102,
                  "end": 122
                },
                "optional": false,
                "readonly": null,
                "start": 77,
                "end": 124
              },
              "start": 75,
              "end": 124
            },
            "value": null,
            "computed": false,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": true,
            "accessibility": "public",
            "start": 51,
            "end": 125
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "constructor",
              "optional": false,
              "typeAnnotation": null,
              "start": 136,
              "end": 147
            },
            "value": {
              "type": "FunctionExpression",
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [
                {
                  "type": "RestElement",
                  "decorators": [],
                  "argument": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "elements",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 156,
                    "end": 164
                  },
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSMappedType",
                      "key": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "P",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 169,
                        "end": 170
                      },
                      "constraint": {
                        "type": "TSTypeOperator",
                        "operator": "keyof",
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "Elements",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 180,
                            "end": 188
                          },
                          "typeArguments": null,
                          "start": 180,
                          "end": 188
                        },
                        "start": 174,
                        "end": 188
                      },
                      "nameType": null,
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
                              "name": "bar",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 193,
                              "end": 196
                            },
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "typeAnnotation": {
                                "type": "TSIndexedAccessType",
                                "objectType": {
                                  "type": "TSTypeReference",
                                  "typeName": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "Elements",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 198,
                                    "end": 206
                                  },
                                  "typeArguments": null,
                                  "start": 198,
                                  "end": 206
                                },
                                "indexType": {
                                  "type": "TSTypeReference",
                                  "typeName": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "P",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 207,
                                    "end": 208
                                  },
                                  "typeArguments": null,
                                  "start": 207,
                                  "end": 208
                                },
                                "start": 198,
                                "end": 209
                              },
                              "start": 196,
                              "end": 209
                            },
                            "accessibility": null,
                            "static": false,
                            "start": 193,
                            "end": 209
                          }
                        ],
                        "start": 191,
                        "end": 211
                      },
                      "optional": false,
                      "readonly": null,
                      "start": 166,
                      "end": 213
                    },
                    "start": 164,
                    "end": 213
                  },
                  "value": null,
                  "start": 153,
                  "end": 213
                }
              ],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "AssignmentExpression",
                      "operator": "=",
                      "left": {
                        "type": "MemberExpression",
                        "object": {
                          "type": "ThisExpression",
                          "start": 224,
                          "end": 228
                        },
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "elements",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 229,
                          "end": 237
                        },
                        "optional": false,
                        "computed": false,
                        "start": 224,
                        "end": 237
                      },
                      "right": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "elements",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 240,
                        "end": 248
                      },
                      "start": 224,
                      "end": 248
                    },
                    "directive": null,
                    "start": 224,
                    "end": 249
                  }
                ],
                "start": 218,
                "end": 253
              },
              "expression": false,
              "start": 147,
              "end": 253
            },
            "kind": "constructor",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": "public",
            "start": 129,
            "end": 253
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "add",
              "optional": false,
              "typeAnnotation": null,
              "start": 264,
              "end": 267
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
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Foo",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 271,
                    "end": 274
                  },
                  "typeArguments": {
                    "type": "TSTypeParameterInstantiation",
                    "params": [
                      {
                        "type": "TSTupleType",
                        "elementTypes": [
                          {
                            "type": "TSRestType",
                            "typeAnnotation": {
                              "type": "TSTypeReference",
                              "typeName": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "Elements",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 279,
                                "end": 287
                              },
                              "typeArguments": null,
                              "start": 279,
                              "end": 287
                            },
                            "start": 276,
                            "end": 287
                          },
                          {
                            "type": "TSLiteralType",
                            "literal": {
                              "type": "Literal",
                              "value": "abc",
                              "raw": "\"abc\"",
                              "start": 289,
                              "end": 294
                            },
                            "start": 289,
                            "end": 294
                          }
                        ],
                        "start": 275,
                        "end": 295
                      }
                    ],
                    "start": 274,
                    "end": 296
                  },
                  "start": 271,
                  "end": 296
                },
                "start": 269,
                "end": 296
              },
              "body": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "ReturnStatement",
                    "argument": {
                      "type": "NewExpression",
                      "callee": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "Foo",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 314,
                        "end": 317
                      },
                      "typeArguments": {
                        "type": "TSTypeParameterInstantiation",
                        "params": [
                          {
                            "type": "TSTupleType",
                            "elementTypes": [
                              {
                                "type": "TSRestType",
                                "typeAnnotation": {
                                  "type": "TSTypeReference",
                                  "typeName": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "Elements",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 322,
                                    "end": 330
                                  },
                                  "typeArguments": null,
                                  "start": 322,
                                  "end": 330
                                },
                                "start": 319,
                                "end": 330
                              },
                              {
                                "type": "TSLiteralType",
                                "literal": {
                                  "type": "Literal",
                                  "value": "abc",
                                  "raw": "\"abc\"",
                                  "start": 332,
                                  "end": 337
                                },
                                "start": 332,
                                "end": 337
                              }
                            ],
                            "start": 318,
                            "end": 338
                          }
                        ],
                        "start": 317,
                        "end": 339
                      },
                      "arguments": [
                        {
                          "type": "SpreadElement",
                          "argument": {
                            "type": "MemberExpression",
                            "object": {
                              "type": "ThisExpression",
                              "start": 343,
                              "end": 347
                            },
                            "property": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "elements",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 348,
                              "end": 356
                            },
                            "optional": false,
                            "computed": false,
                            "start": 343,
                            "end": 356
                          },
                          "start": 340,
                          "end": 356
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
                                "name": "bar",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 360,
                                "end": 363
                              },
                              "value": {
                                "type": "Literal",
                                "value": "abc",
                                "raw": "\"abc\"",
                                "start": 365,
                                "end": 370
                              },
                              "method": false,
                              "shorthand": false,
                              "computed": false,
                              "optional": false,
                              "start": 360,
                              "end": 370
                            }
                          ],
                          "start": 358,
                          "end": 372
                        }
                      ],
                      "start": 310,
                      "end": 373
                    },
                    "start": 303,
                    "end": 374
                  }
                ],
                "start": 297,
                "end": 378
              },
              "expression": false,
              "start": 267,
              "end": 378
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": "public",
            "start": 257,
            "end": 378
          }
        ],
        "start": 47,
        "end": 380
      },
      "abstract": false,
      "declare": false,
      "start": 0,
      "end": 380
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 380
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Keyword",
    "value": "class",
    "start": 0,
    "end": 5
  },
  {
    "type": "Identifier",
    "value": "Foo",
    "start": 6,
    "end": 9
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 9,
    "end": 10
  },
  {
    "type": "Identifier",
    "value": "Elements",
    "start": 10,
    "end": 18
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 19,
    "end": 26
  },
  {
    "type": "Identifier",
    "value": "readonly",
    "start": 27,
    "end": 35
  },
  {
    "type": "Identifier",
    "value": "unknown",
    "start": 36,
    "end": 43
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 43,
    "end": 44
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 44,
    "end": 45
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 45,
    "end": 46
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 47,
    "end": 48
  },
  {
    "type": "Keyword",
    "value": "public",
    "start": 51,
    "end": 57
  },
  {
    "type": "Identifier",
    "value": "readonly",
    "start": 58,
    "end": 66
  },
  {
    "type": "Identifier",
    "value": "elements",
    "start": 67,
    "end": 75
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 75,
    "end": 76
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 77,
    "end": 78
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 79,
    "end": 80
  },
  {
    "type": "Identifier",
    "value": "P",
    "start": 80,
    "end": 81
  },
  {
    "type": "Keyword",
    "value": "in",
    "start": 82,
    "end": 84
  },
  {
    "type": "Identifier",
    "value": "keyof",
    "start": 85,
    "end": 90
  },
  {
    "type": "Identifier",
    "value": "Elements",
    "start": 91,
    "end": 99
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 99,
    "end": 100
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 100,
    "end": 101
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 102,
    "end": 103
  },
  {
    "type": "Identifier",
    "value": "bar",
    "start": 104,
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
    "value": "Elements",
    "start": 109,
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
    "value": "P",
    "start": 118,
    "end": 119
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 119,
    "end": 120
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 121,
    "end": 122
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 123,
    "end": 124
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 124,
    "end": 125
  },
  {
    "type": "Keyword",
    "value": "public",
    "start": 129,
    "end": 135
  },
  {
    "type": "Identifier",
    "value": "constructor",
    "start": 136,
    "end": 147
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 147,
    "end": 148
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 153,
    "end": 156
  },
  {
    "type": "Identifier",
    "value": "elements",
    "start": 156,
    "end": 164
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 164,
    "end": 165
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 166,
    "end": 167
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 168,
    "end": 169
  },
  {
    "type": "Identifier",
    "value": "P",
    "start": 169,
    "end": 170
  },
  {
    "type": "Keyword",
    "value": "in",
    "start": 171,
    "end": 173
  },
  {
    "type": "Identifier",
    "value": "keyof",
    "start": 174,
    "end": 179
  },
  {
    "type": "Identifier",
    "value": "Elements",
    "start": 180,
    "end": 188
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 188,
    "end": 189
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 189,
    "end": 190
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 191,
    "end": 192
  },
  {
    "type": "Identifier",
    "value": "bar",
    "start": 193,
    "end": 196
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 196,
    "end": 197
  },
  {
    "type": "Identifier",
    "value": "Elements",
    "start": 198,
    "end": 206
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 206,
    "end": 207
  },
  {
    "type": "Identifier",
    "value": "P",
    "start": 207,
    "end": 208
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 208,
    "end": 209
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 210,
    "end": 211
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 212,
    "end": 213
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 216,
    "end": 217
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 218,
    "end": 219
  },
  {
    "type": "Keyword",
    "value": "this",
    "start": 224,
    "end": 228
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 228,
    "end": 229
  },
  {
    "type": "Identifier",
    "value": "elements",
    "start": 229,
    "end": 237
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 238,
    "end": 239
  },
  {
    "type": "Identifier",
    "value": "elements",
    "start": 240,
    "end": 248
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 248,
    "end": 249
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 252,
    "end": 253
  },
  {
    "type": "Keyword",
    "value": "public",
    "start": 257,
    "end": 263
  },
  {
    "type": "Identifier",
    "value": "add",
    "start": 264,
    "end": 267
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 267,
    "end": 268
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 268,
    "end": 269
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 269,
    "end": 270
  },
  {
    "type": "Identifier",
    "value": "Foo",
    "start": 271,
    "end": 274
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 274,
    "end": 275
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 275,
    "end": 276
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 276,
    "end": 279
  },
  {
    "type": "Identifier",
    "value": "Elements",
    "start": 279,
    "end": 287
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 287,
    "end": 288
  },
  {
    "type": "String",
    "value": "\"abc\"",
    "start": 289,
    "end": 294
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 294,
    "end": 295
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 295,
    "end": 296
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 297,
    "end": 298
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 303,
    "end": 309
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 310,
    "end": 313
  },
  {
    "type": "Identifier",
    "value": "Foo",
    "start": 314,
    "end": 317
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 317,
    "end": 318
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 318,
    "end": 319
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 319,
    "end": 322
  },
  {
    "type": "Identifier",
    "value": "Elements",
    "start": 322,
    "end": 330
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 330,
    "end": 331
  },
  {
    "type": "String",
    "value": "\"abc\"",
    "start": 332,
    "end": 337
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 337,
    "end": 338
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 338,
    "end": 339
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 339,
    "end": 340
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 340,
    "end": 343
  },
  {
    "type": "Keyword",
    "value": "this",
    "start": 343,
    "end": 347
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 347,
    "end": 348
  },
  {
    "type": "Identifier",
    "value": "elements",
    "start": 348,
    "end": 356
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 356,
    "end": 357
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 358,
    "end": 359
  },
  {
    "type": "Identifier",
    "value": "bar",
    "start": 360,
    "end": 363
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 363,
    "end": 364
  },
  {
    "type": "String",
    "value": "\"abc\"",
    "start": 365,
    "end": 370
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 371,
    "end": 372
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 372,
    "end": 373
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 373,
    "end": 374
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 377,
    "end": 378
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 379,
    "end": 380
  }
]
```
