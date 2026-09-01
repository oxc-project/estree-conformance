__ESTREE_TEST__:AST:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "TSInterfaceDeclaration",
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "CalcObj",
          "optional": false,
          "typeAnnotation": null,
          "start": 40,
          "end": 47
        },
        "typeParameters": {
          "type": "TSTypeParameterDeclaration",
          "params": [
            {
              "type": "TSTypeParameter",
              "name": {
                "type": "Identifier",
                "decorators": [],
                "name": "O",
                "optional": false,
                "typeAnnotation": null,
                "start": 48,
                "end": 49
              },
              "constraint": null,
              "default": null,
              "in": false,
              "out": false,
              "const": false,
              "start": 48,
              "end": 49
            }
          ],
          "start": 47,
          "end": 50
        },
        "extends": [],
        "body": {
          "type": "TSInterfaceBody",
          "body": [
            {
              "type": "TSPropertySignature",
              "computed": false,
              "optional": false,
              "readonly": false,
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "read",
                "optional": false,
                "typeAnnotation": null,
                "start": 57,
                "end": 61
              },
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSFunctionType",
                  "typeParameters": null,
                  "params": [
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "origin",
                      "optional": false,
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "O",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 72,
                            "end": 73
                          },
                          "typeArguments": null,
                          "start": 72,
                          "end": 73
                        },
                        "start": 70,
                        "end": 73
                      },
                      "start": 64,
                      "end": 73
                    }
                  ],
                  "returnType": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "CalcValue",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 78,
                        "end": 87
                      },
                      "typeArguments": {
                        "type": "TSTypeParameterInstantiation",
                        "params": [
                          {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "O",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 88,
                              "end": 89
                            },
                            "typeArguments": null,
                            "start": 88,
                            "end": 89
                          }
                        ],
                        "start": 87,
                        "end": 90
                      },
                      "start": 78,
                      "end": 90
                    },
                    "start": 75,
                    "end": 90
                  },
                  "start": 63,
                  "end": 90
                },
                "start": 61,
                "end": 90
              },
              "accessibility": null,
              "static": false,
              "start": 57,
              "end": 91
            }
          ],
          "start": 51,
          "end": 93
        },
        "declare": false,
        "start": 30,
        "end": 93
      },
      "specifiers": [],
      "source": null,
      "exportKind": "type",
      "attributes": [],
      "start": 23,
      "end": 93
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "TSTypeAliasDeclaration",
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "CalcValue",
          "optional": false,
          "typeAnnotation": null,
          "start": 107,
          "end": 116
        },
        "typeParameters": {
          "type": "TSTypeParameterDeclaration",
          "params": [
            {
              "type": "TSTypeParameter",
              "name": {
                "type": "Identifier",
                "decorators": [],
                "name": "O",
                "optional": false,
                "typeAnnotation": null,
                "start": 117,
                "end": 118
              },
              "constraint": null,
              "default": null,
              "in": false,
              "out": false,
              "const": false,
              "start": 117,
              "end": 118
            }
          ],
          "start": 116,
          "end": 119
        },
        "typeAnnotation": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "CalcObj",
            "optional": false,
            "typeAnnotation": null,
            "start": 122,
            "end": 129
          },
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "params": [
              {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "O",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 130,
                  "end": 131
                },
                "typeArguments": null,
                "start": 130,
                "end": 131
              }
            ],
            "start": 129,
            "end": 132
          },
          "start": 122,
          "end": 132
        },
        "declare": false,
        "start": 102,
        "end": 133
      },
      "specifiers": [],
      "source": null,
      "exportKind": "type",
      "attributes": [],
      "start": 95,
      "end": 133
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo",
        "optional": false,
        "typeAnnotation": null,
        "start": 144,
        "end": 147
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "params": [
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "O",
              "optional": false,
              "typeAnnotation": null,
              "start": 148,
              "end": 149
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 148,
            "end": 149
          }
        ],
        "start": 147,
        "end": 150
      },
      "params": [],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
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
                  "name": "unk",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "CalcObj",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 170,
                        "end": 177
                      },
                      "typeArguments": {
                        "type": "TSTypeParameterInstantiation",
                        "params": [
                          {
                            "type": "TSUnknownKeyword",
                            "start": 178,
                            "end": 185
                          }
                        ],
                        "start": 177,
                        "end": 186
                      },
                      "start": 170,
                      "end": 186
                    },
                    "start": 168,
                    "end": 186
                  },
                  "start": 165,
                  "end": 186
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
                        "name": "read",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 191,
                        "end": 195
                      },
                      "value": {
                        "type": "ArrowFunctionExpression",
                        "expression": true,
                        "async": false,
                        "typeParameters": null,
                        "params": [
                          {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "origin",
                            "optional": false,
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "typeAnnotation": {
                                "type": "TSUnknownKeyword",
                                "start": 206,
                                "end": 213
                              },
                              "start": 204,
                              "end": 213
                            },
                            "start": 198,
                            "end": 213
                          }
                        ],
                        "returnType": null,
                        "body": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "unk",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 218,
                          "end": 221
                        },
                        "id": null,
                        "generator": false,
                        "start": 197,
                        "end": 221
                      },
                      "method": false,
                      "shorthand": false,
                      "computed": false,
                      "optional": false,
                      "start": 191,
                      "end": 221
                    }
                  ],
                  "start": 189,
                  "end": 223
                },
                "definite": false,
                "start": 165,
                "end": 223
              }
            ],
            "declare": false,
            "start": 159,
            "end": 223
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
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "CalcObj",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 237,
                        "end": 244
                      },
                      "typeArguments": {
                        "type": "TSTypeParameterInstantiation",
                        "params": [
                          {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "O",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 245,
                              "end": 246
                            },
                            "typeArguments": null,
                            "start": 245,
                            "end": 246
                          }
                        ],
                        "start": 244,
                        "end": 247
                      },
                      "start": 237,
                      "end": 247
                    },
                    "start": 235,
                    "end": 247
                  },
                  "start": 234,
                  "end": 247
                },
                "init": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "unk",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 250,
                  "end": 253
                },
                "definite": false,
                "start": 234,
                "end": 253
              }
            ],
            "declare": false,
            "start": 228,
            "end": 254
          }
        ],
        "start": 153,
        "end": 256
      },
      "expression": false,
      "start": 135,
      "end": 256
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "A",
        "optional": false,
        "typeAnnotation": null,
        "start": 263,
        "end": 264
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
              "start": 265,
              "end": 266
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 265,
            "end": 266
          }
        ],
        "start": 264,
        "end": 267
      },
      "typeAnnotation": {
        "type": "TSTypeReference",
        "typeName": {
          "type": "Identifier",
          "decorators": [],
          "name": "B",
          "optional": false,
          "typeAnnotation": null,
          "start": 270,
          "end": 271
        },
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "params": [
            {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "T",
                "optional": false,
                "typeAnnotation": null,
                "start": 272,
                "end": 273
              },
              "typeArguments": null,
              "start": 272,
              "end": 273
            }
          ],
          "start": 271,
          "end": 274
        },
        "start": 270,
        "end": 274
      },
      "declare": false,
      "start": 258,
      "end": 275
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "B",
        "optional": false,
        "typeAnnotation": null,
        "start": 287,
        "end": 288
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
              "start": 289,
              "end": 290
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 289,
            "end": 290
          }
        ],
        "start": 288,
        "end": 291
      },
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "body": [
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "prop",
              "optional": false,
              "typeAnnotation": null,
              "start": 298,
              "end": 302
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "A",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 304,
                  "end": 305
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "params": [
                    {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "T",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 306,
                        "end": 307
                      },
                      "typeArguments": null,
                      "start": 306,
                      "end": 307
                    }
                  ],
                  "start": 305,
                  "end": 308
                },
                "start": 304,
                "end": 308
              },
              "start": 302,
              "end": 308
            },
            "accessibility": null,
            "static": false,
            "start": 298,
            "end": 309
          }
        ],
        "start": 292,
        "end": 311
      },
      "declare": false,
      "start": 277,
      "end": 311
    },
    {
      "type": "VariableDeclaration",
      "kind": "let",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "a",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "A",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 328,
                  "end": 329
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "params": [
                    {
                      "type": "TSNumberKeyword",
                      "start": 330,
                      "end": 336
                    }
                  ],
                  "start": 329,
                  "end": 337
                },
                "start": 328,
                "end": 337
              },
              "start": 326,
              "end": 337
            },
            "start": 325,
            "end": 337
          },
          "init": null,
          "definite": false,
          "start": 325,
          "end": 337
        }
      ],
      "declare": true,
      "start": 313,
      "end": 338
    },
    {
      "type": "VariableDeclaration",
      "kind": "let",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "b",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "A",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 354,
                  "end": 355
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "params": [
                    {
                      "type": "TSLiteralType",
                      "literal": {
                        "type": "Literal",
                        "value": 3,
                        "raw": "3",
                        "start": 356,
                        "end": 357
                      },
                      "start": 356,
                      "end": 357
                    }
                  ],
                  "start": 355,
                  "end": 358
                },
                "start": 354,
                "end": 358
              },
              "start": 352,
              "end": 358
            },
            "start": 351,
            "end": 358
          },
          "init": null,
          "definite": false,
          "start": 351,
          "end": 358
        }
      ],
      "declare": true,
      "start": 339,
      "end": 359
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "b",
          "optional": false,
          "typeAnnotation": null,
          "start": 362,
          "end": 363
        },
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "a",
          "optional": false,
          "typeAnnotation": null,
          "start": 366,
          "end": 367
        },
        "start": 362,
        "end": 367
      },
      "directive": null,
      "start": 362,
      "end": 368
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 23,
  "end": 368
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Keyword",
    "value": "export",
    "start": 23,
    "end": 29
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 30,
    "end": 39
  },
  {
    "type": "Identifier",
    "value": "CalcObj",
    "start": 40,
    "end": 47
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 47,
    "end": 48
  },
  {
    "type": "Identifier",
    "value": "O",
    "start": 48,
    "end": 49
  },
  {
    "type": "Punctuator",
    "value": ">",
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
    "value": "read",
    "start": 57,
    "end": 61
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 61,
    "end": 62
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 63,
    "end": 64
  },
  {
    "type": "Identifier",
    "value": "origin",
    "start": 64,
    "end": 70
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 70,
    "end": 71
  },
  {
    "type": "Identifier",
    "value": "O",
    "start": 72,
    "end": 73
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 73,
    "end": 74
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 75,
    "end": 77
  },
  {
    "type": "Identifier",
    "value": "CalcValue",
    "start": 78,
    "end": 87
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 87,
    "end": 88
  },
  {
    "type": "Identifier",
    "value": "O",
    "start": 88,
    "end": 89
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 89,
    "end": 90
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 90,
    "end": 91
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 92,
    "end": 93
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 95,
    "end": 101
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 102,
    "end": 106
  },
  {
    "type": "Identifier",
    "value": "CalcValue",
    "start": 107,
    "end": 116
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 116,
    "end": 117
  },
  {
    "type": "Identifier",
    "value": "O",
    "start": 117,
    "end": 118
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 118,
    "end": 119
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 120,
    "end": 121
  },
  {
    "type": "Identifier",
    "value": "CalcObj",
    "start": 122,
    "end": 129
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 129,
    "end": 130
  },
  {
    "type": "Identifier",
    "value": "O",
    "start": 130,
    "end": 131
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 131,
    "end": 132
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 132,
    "end": 133
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 135,
    "end": 143
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 144,
    "end": 147
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 147,
    "end": 148
  },
  {
    "type": "Identifier",
    "value": "O",
    "start": 148,
    "end": 149
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 149,
    "end": 150
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 150,
    "end": 151
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 151,
    "end": 152
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 153,
    "end": 154
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 159,
    "end": 164
  },
  {
    "type": "Identifier",
    "value": "unk",
    "start": 165,
    "end": 168
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 168,
    "end": 169
  },
  {
    "type": "Identifier",
    "value": "CalcObj",
    "start": 170,
    "end": 177
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 177,
    "end": 178
  },
  {
    "type": "Identifier",
    "value": "unknown",
    "start": 178,
    "end": 185
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 185,
    "end": 186
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 187,
    "end": 188
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 189,
    "end": 190
  },
  {
    "type": "Identifier",
    "value": "read",
    "start": 191,
    "end": 195
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 195,
    "end": 196
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 197,
    "end": 198
  },
  {
    "type": "Identifier",
    "value": "origin",
    "start": 198,
    "end": 204
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 204,
    "end": 205
  },
  {
    "type": "Identifier",
    "value": "unknown",
    "start": 206,
    "end": 213
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 213,
    "end": 214
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 215,
    "end": 217
  },
  {
    "type": "Identifier",
    "value": "unk",
    "start": 218,
    "end": 221
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 222,
    "end": 223
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 228,
    "end": 233
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 234,
    "end": 235
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 235,
    "end": 236
  },
  {
    "type": "Identifier",
    "value": "CalcObj",
    "start": 237,
    "end": 244
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 244,
    "end": 245
  },
  {
    "type": "Identifier",
    "value": "O",
    "start": 245,
    "end": 246
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 246,
    "end": 247
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 248,
    "end": 249
  },
  {
    "type": "Identifier",
    "value": "unk",
    "start": 250,
    "end": 253
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 253,
    "end": 254
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 255,
    "end": 256
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 258,
    "end": 262
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 263,
    "end": 264
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 264,
    "end": 265
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 265,
    "end": 266
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 266,
    "end": 267
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 268,
    "end": 269
  },
  {
    "type": "Identifier",
    "value": "B",
    "start": 270,
    "end": 271
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 271,
    "end": 272
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 272,
    "end": 273
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 273,
    "end": 274
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 274,
    "end": 275
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 277,
    "end": 286
  },
  {
    "type": "Identifier",
    "value": "B",
    "start": 287,
    "end": 288
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 288,
    "end": 289
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 289,
    "end": 290
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 290,
    "end": 291
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 292,
    "end": 293
  },
  {
    "type": "Identifier",
    "value": "prop",
    "start": 298,
    "end": 302
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 302,
    "end": 303
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 304,
    "end": 305
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 305,
    "end": 306
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 306,
    "end": 307
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 307,
    "end": 308
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 308,
    "end": 309
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 310,
    "end": 311
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 313,
    "end": 320
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 321,
    "end": 324
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 325,
    "end": 326
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 326,
    "end": 327
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 328,
    "end": 329
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 329,
    "end": 330
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 330,
    "end": 336
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 336,
    "end": 337
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 337,
    "end": 338
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 339,
    "end": 346
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 347,
    "end": 350
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 351,
    "end": 352
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 352,
    "end": 353
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 354,
    "end": 355
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 355,
    "end": 356
  },
  {
    "type": "Numeric",
    "value": "3",
    "start": 356,
    "end": 357
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 357,
    "end": 358
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 358,
    "end": 359
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 362,
    "end": 363
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 364,
    "end": 365
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 366,
    "end": 367
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 367,
    "end": 368
  }
]
```
