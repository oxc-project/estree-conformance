__ESTREE_TEST__:AST:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "TSDeclareFunction",
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "foo",
          "optional": false,
          "typeAnnotation": null,
          "start": 47,
          "end": 50
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
                "name": "T",
                "optional": false,
                "typeAnnotation": null,
                "start": 51,
                "end": 52
              },
              "constraint": null,
              "default": null,
              "in": false,
              "out": false,
              "const": false,
              "start": 51,
              "end": 52
            }
          ],
          "start": 50,
          "end": 53
        },
        "params": [
          {
            "type": "Identifier",
            "decorators": [],
            "name": "obj",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "T",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 59,
                  "end": 60
                },
                "typeArguments": null,
                "start": 59,
                "end": 60
              },
              "start": 57,
              "end": 60
            },
            "start": 54,
            "end": 60
          }
        ],
        "returnType": {
          "type": "TSTypeAnnotation",
          "typeAnnotation": {
            "type": "TSConditionalType",
            "checkType": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "T",
                "optional": false,
                "typeAnnotation": null,
                "start": 63,
                "end": 64
              },
              "typeArguments": null,
              "start": 63,
              "end": 64
            },
            "extendsType": {
              "type": "TSFunctionType",
              "typeParameters": null,
              "params": [],
              "returnType": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSInferType",
                  "typeParameter": {
                    "type": "TSTypeParameter",
                    "name": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "P",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 85,
                      "end": 86
                    },
                    "constraint": null,
                    "default": null,
                    "in": false,
                    "out": false,
                    "const": false,
                    "start": 85,
                    "end": 86
                  },
                  "start": 79,
                  "end": 86
                },
                "start": 76,
                "end": 86
              },
              "start": 73,
              "end": 86
            },
            "trueType": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "P",
                "optional": false,
                "typeAnnotation": null,
                "start": 89,
                "end": 90
              },
              "typeArguments": null,
              "start": 89,
              "end": 90
            },
            "falseType": {
              "type": "TSNeverKeyword",
              "start": 93,
              "end": 98
            },
            "start": 63,
            "end": 98
          },
          "start": 61,
          "end": 98
        },
        "body": null,
        "expression": false,
        "start": 30,
        "end": 99
      },
      "specifiers": [],
      "source": null,
      "exportKind": "type",
      "attributes": [],
      "start": 23,
      "end": 99
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "FunctionDeclaration",
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "bar",
          "optional": false,
          "typeAnnotation": null,
          "start": 116,
          "end": 119
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
                "name": "T",
                "optional": false,
                "typeAnnotation": null,
                "start": 120,
                "end": 121
              },
              "constraint": null,
              "default": null,
              "in": false,
              "out": false,
              "const": false,
              "start": 120,
              "end": 121
            }
          ],
          "start": 119,
          "end": 122
        },
        "params": [
          {
            "type": "Identifier",
            "decorators": [],
            "name": "obj",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "T",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 128,
                  "end": 129
                },
                "typeArguments": null,
                "start": 128,
                "end": 129
              },
              "start": 126,
              "end": 129
            },
            "start": 123,
            "end": 129
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
                  "type": "Identifier",
                  "decorators": [],
                  "name": "foo",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 144,
                  "end": 147
                },
                "typeArguments": null,
                "arguments": [
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "obj",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 148,
                    "end": 151
                  }
                ],
                "optional": false,
                "start": 144,
                "end": 152
              },
              "start": 137,
              "end": 153
            }
          ],
          "start": 131,
          "end": 155
        },
        "expression": false,
        "start": 107,
        "end": 155
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 100,
      "end": 155
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "TSTypeAliasDeclaration",
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "BadNested",
          "optional": false,
          "typeAnnotation": null,
          "start": 169,
          "end": 178
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
                "start": 179,
                "end": 180
              },
              "constraint": null,
              "default": null,
              "in": false,
              "out": false,
              "const": false,
              "start": 179,
              "end": 180
            }
          ],
          "start": 178,
          "end": 181
        },
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
                "name": "x",
                "optional": false,
                "typeAnnotation": null,
                "start": 186,
                "end": 187
              },
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSConditionalType",
                  "checkType": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "T",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 189,
                      "end": 190
                    },
                    "typeArguments": null,
                    "start": 189,
                    "end": 190
                  },
                  "extendsType": {
                    "type": "TSNumberKeyword",
                    "start": 199,
                    "end": 205
                  },
                  "trueType": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "T",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 208,
                      "end": 209
                    },
                    "typeArguments": null,
                    "start": 208,
                    "end": 209
                  },
                  "falseType": {
                    "type": "TSStringKeyword",
                    "start": 212,
                    "end": 218
                  },
                  "start": 189,
                  "end": 218
                },
                "start": 187,
                "end": 218
              },
              "accessibility": null,
              "static": false,
              "start": 186,
              "end": 218
            }
          ],
          "start": 184,
          "end": 220
        },
        "declare": false,
        "start": 164,
        "end": 221
      },
      "specifiers": [],
      "source": null,
      "exportKind": "type",
      "attributes": [],
      "start": 157,
      "end": 221
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "TSDeclareFunction",
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "foo2",
          "optional": false,
          "typeAnnotation": null,
          "start": 247,
          "end": 251
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
                "name": "T",
                "optional": false,
                "typeAnnotation": null,
                "start": 252,
                "end": 253
              },
              "constraint": null,
              "default": null,
              "in": false,
              "out": false,
              "const": false,
              "start": 252,
              "end": 253
            }
          ],
          "start": 251,
          "end": 254
        },
        "params": [
          {
            "type": "Identifier",
            "decorators": [],
            "name": "obj",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "T",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 260,
                  "end": 261
                },
                "typeArguments": null,
                "start": 260,
                "end": 261
              },
              "start": 258,
              "end": 261
            },
            "start": 255,
            "end": 261
          }
        ],
        "returnType": {
          "type": "TSTypeAnnotation",
          "typeAnnotation": {
            "type": "TSConditionalType",
            "checkType": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "T",
                "optional": false,
                "typeAnnotation": null,
                "start": 264,
                "end": 265
              },
              "typeArguments": null,
              "start": 264,
              "end": 265
            },
            "extendsType": {
              "type": "TSMappedType",
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "K",
                "optional": false,
                "typeAnnotation": null,
                "start": 277,
                "end": 278
              },
              "constraint": {
                "type": "TSTypeOperator",
                "operator": "keyof",
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "BadNested",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 288,
                    "end": 297
                  },
                  "typeArguments": {
                    "type": "TSTypeParameterInstantiation",
                    "params": [
                      {
                        "type": "TSInferType",
                        "typeParameter": {
                          "type": "TSTypeParameter",
                          "name": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "P",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 304,
                            "end": 305
                          },
                          "constraint": null,
                          "default": null,
                          "in": false,
                          "out": false,
                          "const": false,
                          "start": 304,
                          "end": 305
                        },
                        "start": 298,
                        "end": 305
                      }
                    ],
                    "start": 297,
                    "end": 306
                  },
                  "start": 288,
                  "end": 306
                },
                "start": 282,
                "end": 306
              },
              "nameType": null,
              "typeAnnotation": {
                "type": "TSIndexedAccessType",
                "objectType": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "BadNested",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 309,
                    "end": 318
                  },
                  "typeArguments": {
                    "type": "TSTypeParameterInstantiation",
                    "params": [
                      {
                        "type": "TSInferType",
                        "typeParameter": {
                          "type": "TSTypeParameter",
                          "name": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "P",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 325,
                            "end": 326
                          },
                          "constraint": null,
                          "default": null,
                          "in": false,
                          "out": false,
                          "const": false,
                          "start": 325,
                          "end": 326
                        },
                        "start": 319,
                        "end": 326
                      }
                    ],
                    "start": 318,
                    "end": 327
                  },
                  "start": 309,
                  "end": 327
                },
                "indexType": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "K",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 328,
                    "end": 329
                  },
                  "typeArguments": null,
                  "start": 328,
                  "end": 329
                },
                "start": 309,
                "end": 330
              },
              "optional": false,
              "readonly": null,
              "start": 274,
              "end": 332
            },
            "trueType": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "P",
                "optional": false,
                "typeAnnotation": null,
                "start": 335,
                "end": 336
              },
              "typeArguments": null,
              "start": 335,
              "end": 336
            },
            "falseType": {
              "type": "TSNeverKeyword",
              "start": 339,
              "end": 344
            },
            "start": 264,
            "end": 344
          },
          "start": 262,
          "end": 344
        },
        "body": null,
        "expression": false,
        "start": 230,
        "end": 345
      },
      "specifiers": [],
      "source": null,
      "exportKind": "type",
      "attributes": [],
      "start": 223,
      "end": 345
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "FunctionDeclaration",
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "bar2",
          "optional": false,
          "typeAnnotation": null,
          "start": 362,
          "end": 366
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
                "name": "T",
                "optional": false,
                "typeAnnotation": null,
                "start": 367,
                "end": 368
              },
              "constraint": null,
              "default": null,
              "in": false,
              "out": false,
              "const": false,
              "start": 367,
              "end": 368
            }
          ],
          "start": 366,
          "end": 369
        },
        "params": [
          {
            "type": "Identifier",
            "decorators": [],
            "name": "obj",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "T",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 375,
                  "end": 376
                },
                "typeArguments": null,
                "start": 375,
                "end": 376
              },
              "start": 373,
              "end": 376
            },
            "start": 370,
            "end": 376
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
                  "type": "Identifier",
                  "decorators": [],
                  "name": "foo2",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 391,
                  "end": 395
                },
                "typeArguments": null,
                "arguments": [
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "obj",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 396,
                    "end": 399
                  }
                ],
                "optional": false,
                "start": 391,
                "end": 400
              },
              "start": 384,
              "end": 401
            }
          ],
          "start": 378,
          "end": 403
        },
        "expression": false,
        "start": 353,
        "end": 403
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 346,
      "end": 403
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Weird",
        "optional": false,
        "typeAnnotation": null,
        "start": 433,
        "end": 438
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSConditionalType",
        "checkType": {
          "type": "TSAnyKeyword",
          "start": 441,
          "end": 444
        },
        "extendsType": {
          "type": "TSInferType",
          "typeParameter": {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "U",
              "optional": false,
              "typeAnnotation": null,
              "start": 459,
              "end": 460
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 459,
            "end": 460
          },
          "start": 453,
          "end": 460
        },
        "trueType": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "U",
            "optional": false,
            "typeAnnotation": null,
            "start": 463,
            "end": 464
          },
          "typeArguments": null,
          "start": 463,
          "end": 464
        },
        "falseType": {
          "type": "TSNeverKeyword",
          "start": 467,
          "end": 472
        },
        "start": 441,
        "end": 472
      },
      "declare": false,
      "start": 428,
      "end": 473
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "AlsoWeird",
        "optional": false,
        "typeAnnotation": null,
        "start": 479,
        "end": 488
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSConditionalType",
        "checkType": {
          "type": "TSUnknownKeyword",
          "start": 491,
          "end": 498
        },
        "extendsType": {
          "type": "TSInferType",
          "typeParameter": {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "U",
              "optional": false,
              "typeAnnotation": null,
              "start": 513,
              "end": 514
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 513,
            "end": 514
          },
          "start": 507,
          "end": 514
        },
        "trueType": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "U",
            "optional": false,
            "typeAnnotation": null,
            "start": 517,
            "end": 518
          },
          "typeArguments": null,
          "start": 517,
          "end": 518
        },
        "falseType": {
          "type": "TSNeverKeyword",
          "start": 521,
          "end": 526
        },
        "start": 491,
        "end": 526
      },
      "declare": false,
      "start": 474,
      "end": 527
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
            "name": "a",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Weird",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 538,
                  "end": 543
                },
                "typeArguments": null,
                "start": 538,
                "end": 543
              },
              "start": 536,
              "end": 543
            },
            "start": 535,
            "end": 543
          },
          "init": {
            "type": "Literal",
            "value": null,
            "raw": "null",
            "start": 546,
            "end": 550
          },
          "definite": false,
          "start": 535,
          "end": 550
        }
      ],
      "declare": false,
      "start": 529,
      "end": 551
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
            "name": "b",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 561,
                "end": 567
              },
              "start": 559,
              "end": 567
            },
            "start": 558,
            "end": 567
          },
          "init": {
            "type": "Identifier",
            "decorators": [],
            "name": "a",
            "optional": false,
            "typeAnnotation": null,
            "start": 570,
            "end": 571
          },
          "definite": false,
          "start": 558,
          "end": 571
        }
      ],
      "declare": false,
      "start": 552,
      "end": 572
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 23,
  "end": 572
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
    "type": "Identifier",
    "value": "declare",
    "start": 30,
    "end": 37
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 38,
    "end": 46
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 47,
    "end": 50
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 50,
    "end": 51
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 51,
    "end": 52
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 52,
    "end": 53
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 53,
    "end": 54
  },
  {
    "type": "Identifier",
    "value": "obj",
    "start": 54,
    "end": 57
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 57,
    "end": 58
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 59,
    "end": 60
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 60,
    "end": 61
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 61,
    "end": 62
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 63,
    "end": 64
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 65,
    "end": 72
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 73,
    "end": 74
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 74,
    "end": 75
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 76,
    "end": 78
  },
  {
    "type": "Identifier",
    "value": "infer",
    "start": 79,
    "end": 84
  },
  {
    "type": "Identifier",
    "value": "P",
    "start": 85,
    "end": 86
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 87,
    "end": 88
  },
  {
    "type": "Identifier",
    "value": "P",
    "start": 89,
    "end": 90
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 91,
    "end": 92
  },
  {
    "type": "Identifier",
    "value": "never",
    "start": 93,
    "end": 98
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 98,
    "end": 99
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 100,
    "end": 106
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 107,
    "end": 115
  },
  {
    "type": "Identifier",
    "value": "bar",
    "start": 116,
    "end": 119
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 119,
    "end": 120
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 120,
    "end": 121
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 121,
    "end": 122
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 122,
    "end": 123
  },
  {
    "type": "Identifier",
    "value": "obj",
    "start": 123,
    "end": 126
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 126,
    "end": 127
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 128,
    "end": 129
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 129,
    "end": 130
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 131,
    "end": 132
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 137,
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
    "value": "(",
    "start": 147,
    "end": 148
  },
  {
    "type": "Identifier",
    "value": "obj",
    "start": 148,
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
    "value": ";",
    "start": 152,
    "end": 153
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 154,
    "end": 155
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 157,
    "end": 163
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 164,
    "end": 168
  },
  {
    "type": "Identifier",
    "value": "BadNested",
    "start": 169,
    "end": 178
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 178,
    "end": 179
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 179,
    "end": 180
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 180,
    "end": 181
  },
  {
    "type": "Punctuator",
    "value": "=",
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
    "type": "Identifier",
    "value": "x",
    "start": 186,
    "end": 187
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 187,
    "end": 188
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 189,
    "end": 190
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 191,
    "end": 198
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 199,
    "end": 205
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 206,
    "end": 207
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 208,
    "end": 209
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 210,
    "end": 211
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 212,
    "end": 218
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 219,
    "end": 220
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 220,
    "end": 221
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 223,
    "end": 229
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 230,
    "end": 237
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 238,
    "end": 246
  },
  {
    "type": "Identifier",
    "value": "foo2",
    "start": 247,
    "end": 251
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 251,
    "end": 252
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 252,
    "end": 253
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 253,
    "end": 254
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 254,
    "end": 255
  },
  {
    "type": "Identifier",
    "value": "obj",
    "start": 255,
    "end": 258
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 258,
    "end": 259
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 260,
    "end": 261
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 261,
    "end": 262
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 262,
    "end": 263
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 264,
    "end": 265
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 266,
    "end": 273
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 274,
    "end": 275
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 276,
    "end": 277
  },
  {
    "type": "Identifier",
    "value": "K",
    "start": 277,
    "end": 278
  },
  {
    "type": "Keyword",
    "value": "in",
    "start": 279,
    "end": 281
  },
  {
    "type": "Identifier",
    "value": "keyof",
    "start": 282,
    "end": 287
  },
  {
    "type": "Identifier",
    "value": "BadNested",
    "start": 288,
    "end": 297
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 297,
    "end": 298
  },
  {
    "type": "Identifier",
    "value": "infer",
    "start": 298,
    "end": 303
  },
  {
    "type": "Identifier",
    "value": "P",
    "start": 304,
    "end": 305
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 305,
    "end": 306
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 306,
    "end": 307
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 307,
    "end": 308
  },
  {
    "type": "Identifier",
    "value": "BadNested",
    "start": 309,
    "end": 318
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 318,
    "end": 319
  },
  {
    "type": "Identifier",
    "value": "infer",
    "start": 319,
    "end": 324
  },
  {
    "type": "Identifier",
    "value": "P",
    "start": 325,
    "end": 326
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 326,
    "end": 327
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 327,
    "end": 328
  },
  {
    "type": "Identifier",
    "value": "K",
    "start": 328,
    "end": 329
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 329,
    "end": 330
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 331,
    "end": 332
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 333,
    "end": 334
  },
  {
    "type": "Identifier",
    "value": "P",
    "start": 335,
    "end": 336
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 337,
    "end": 338
  },
  {
    "type": "Identifier",
    "value": "never",
    "start": 339,
    "end": 344
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 344,
    "end": 345
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 346,
    "end": 352
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 353,
    "end": 361
  },
  {
    "type": "Identifier",
    "value": "bar2",
    "start": 362,
    "end": 366
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 366,
    "end": 367
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 367,
    "end": 368
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 368,
    "end": 369
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 369,
    "end": 370
  },
  {
    "type": "Identifier",
    "value": "obj",
    "start": 370,
    "end": 373
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 373,
    "end": 374
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 375,
    "end": 376
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 376,
    "end": 377
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 378,
    "end": 379
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 384,
    "end": 390
  },
  {
    "type": "Identifier",
    "value": "foo2",
    "start": 391,
    "end": 395
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 395,
    "end": 396
  },
  {
    "type": "Identifier",
    "value": "obj",
    "start": 396,
    "end": 399
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 399,
    "end": 400
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 400,
    "end": 401
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 402,
    "end": 403
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 428,
    "end": 432
  },
  {
    "type": "Identifier",
    "value": "Weird",
    "start": 433,
    "end": 438
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 439,
    "end": 440
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 441,
    "end": 444
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 445,
    "end": 452
  },
  {
    "type": "Identifier",
    "value": "infer",
    "start": 453,
    "end": 458
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 459,
    "end": 460
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 461,
    "end": 462
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 463,
    "end": 464
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 465,
    "end": 466
  },
  {
    "type": "Identifier",
    "value": "never",
    "start": 467,
    "end": 472
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 472,
    "end": 473
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 474,
    "end": 478
  },
  {
    "type": "Identifier",
    "value": "AlsoWeird",
    "start": 479,
    "end": 488
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 489,
    "end": 490
  },
  {
    "type": "Identifier",
    "value": "unknown",
    "start": 491,
    "end": 498
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 499,
    "end": 506
  },
  {
    "type": "Identifier",
    "value": "infer",
    "start": 507,
    "end": 512
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 513,
    "end": 514
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 515,
    "end": 516
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 517,
    "end": 518
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 519,
    "end": 520
  },
  {
    "type": "Identifier",
    "value": "never",
    "start": 521,
    "end": 526
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 526,
    "end": 527
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 529,
    "end": 534
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 535,
    "end": 536
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 536,
    "end": 537
  },
  {
    "type": "Identifier",
    "value": "Weird",
    "start": 538,
    "end": 543
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 544,
    "end": 545
  },
  {
    "type": "Null",
    "value": "null",
    "start": 546,
    "end": 550
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 550,
    "end": 551
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 552,
    "end": 557
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 558,
    "end": 559
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 559,
    "end": 560
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 561,
    "end": 567
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 568,
    "end": 569
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 570,
    "end": 571
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 571,
    "end": 572
  }
]
```
