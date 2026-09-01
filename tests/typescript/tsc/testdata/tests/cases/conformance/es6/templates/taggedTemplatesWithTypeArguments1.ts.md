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
        "name": "f",
        "optional": false,
        "typeAnnotation": null,
        "start": 17,
        "end": 18
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
              "start": 19,
              "end": 20
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 19,
            "end": 20
          }
        ],
        "start": 18,
        "end": 21
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "strs",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "TemplateStringsArray",
                "optional": false,
                "typeAnnotation": null,
                "start": 28,
                "end": 48
              },
              "typeArguments": null,
              "start": 28,
              "end": 48
            },
            "start": 26,
            "end": 48
          },
          "start": 22,
          "end": 48
        },
        {
          "type": "RestElement",
          "decorators": [],
          "argument": {
            "type": "Identifier",
            "decorators": [],
            "name": "callbacks",
            "optional": false,
            "typeAnnotation": null,
            "start": 53,
            "end": 62
          },
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Array",
                "optional": false,
                "typeAnnotation": null,
                "start": 64,
                "end": 69
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "params": [
                  {
                    "type": "TSFunctionType",
                    "typeParameters": null,
                    "params": [
                      {
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
                              "name": "T",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 74,
                              "end": 75
                            },
                            "typeArguments": null,
                            "start": 74,
                            "end": 75
                          },
                          "start": 72,
                          "end": 75
                        },
                        "start": 71,
                        "end": 75
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSAnyKeyword",
                        "start": 80,
                        "end": 83
                      },
                      "start": 77,
                      "end": 83
                    },
                    "start": 70,
                    "end": 83
                  }
                ],
                "start": 69,
                "end": 84
              },
              "start": 64,
              "end": 84
            },
            "start": 62,
            "end": 84
          },
          "value": null,
          "start": 50,
          "end": 84
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSVoidKeyword",
          "start": 87,
          "end": 91
        },
        "start": 85,
        "end": 91
      },
      "body": null,
      "expression": false,
      "start": 0,
      "end": 92
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Stuff",
        "optional": false,
        "typeAnnotation": null,
        "start": 104,
        "end": 109
      },
      "typeParameters": null,
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
              "name": "x",
              "optional": false,
              "typeAnnotation": null,
              "start": 116,
              "end": 117
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 119,
                "end": 125
              },
              "start": 117,
              "end": 125
            },
            "accessibility": null,
            "static": false,
            "start": 116,
            "end": 126
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "y",
              "optional": false,
              "typeAnnotation": null,
              "start": 131,
              "end": 132
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 134,
                "end": 140
              },
              "start": 132,
              "end": 140
            },
            "accessibility": null,
            "static": false,
            "start": 131,
            "end": 141
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "z",
              "optional": false,
              "typeAnnotation": null,
              "start": 146,
              "end": 147
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSBooleanKeyword",
                "start": 149,
                "end": 156
              },
              "start": 147,
              "end": 156
            },
            "accessibility": null,
            "static": false,
            "start": 146,
            "end": 157
          }
        ],
        "start": 110,
        "end": 159
      },
      "declare": false,
      "start": 94,
      "end": 159
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
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
              "typeAnnotation": null,
              "start": 174,
              "end": 175
            },
            "init": {
              "type": "TaggedTemplateExpression",
              "tag": {
                "type": "Identifier",
                "decorators": [],
                "name": "f",
                "optional": false,
                "typeAnnotation": null,
                "start": 178,
                "end": 179
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "params": [
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Stuff",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 180,
                      "end": 185
                    },
                    "typeArguments": null,
                    "start": 180,
                    "end": 185
                  }
                ],
                "start": 179,
                "end": 186
              },
              "quasi": {
                "type": "TemplateLiteral",
                "quasis": [
                  {
                    "type": "TemplateElement",
                    "value": {
                      "raw": "\n    hello\n    ",
                      "cooked": "\n    hello\n    "
                    },
                    "tail": false,
                    "start": 187,
                    "end": 205
                  },
                  {
                    "type": "TemplateElement",
                    "value": {
                      "raw": "\n    brave\n    ",
                      "cooked": "\n    brave\n    "
                    },
                    "tail": false,
                    "start": 221,
                    "end": 239
                  },
                  {
                    "type": "TemplateElement",
                    "value": {
                      "raw": "\n    world\n    ",
                      "cooked": "\n    world\n    "
                    },
                    "tail": false,
                    "start": 255,
                    "end": 273
                  },
                  {
                    "type": "TemplateElement",
                    "value": {
                      "raw": "\n",
                      "cooked": "\n"
                    },
                    "tail": true,
                    "start": 289,
                    "end": 292
                  }
                ],
                "expressions": [
                  {
                    "type": "ArrowFunctionExpression",
                    "expression": true,
                    "async": false,
                    "typeParameters": null,
                    "params": [
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "stuff",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 205,
                        "end": 210
                      }
                    ],
                    "returnType": null,
                    "body": {
                      "type": "MemberExpression",
                      "object": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "stuff",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 214,
                        "end": 219
                      },
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 220,
                        "end": 221
                      },
                      "optional": false,
                      "computed": false,
                      "start": 214,
                      "end": 221
                    },
                    "id": null,
                    "generator": false,
                    "start": 205,
                    "end": 221
                  },
                  {
                    "type": "ArrowFunctionExpression",
                    "expression": true,
                    "async": false,
                    "typeParameters": null,
                    "params": [
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "stuff",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 239,
                        "end": 244
                      }
                    ],
                    "returnType": null,
                    "body": {
                      "type": "MemberExpression",
                      "object": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "stuff",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 248,
                        "end": 253
                      },
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "y",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 254,
                        "end": 255
                      },
                      "optional": false,
                      "computed": false,
                      "start": 248,
                      "end": 255
                    },
                    "id": null,
                    "generator": false,
                    "start": 239,
                    "end": 255
                  },
                  {
                    "type": "ArrowFunctionExpression",
                    "expression": true,
                    "async": false,
                    "typeParameters": null,
                    "params": [
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "stuff",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 273,
                        "end": 278
                      }
                    ],
                    "returnType": null,
                    "body": {
                      "type": "MemberExpression",
                      "object": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "stuff",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 282,
                        "end": 287
                      },
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "z",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 288,
                        "end": 289
                      },
                      "optional": false,
                      "computed": false,
                      "start": 282,
                      "end": 289
                    },
                    "id": null,
                    "generator": false,
                    "start": 273,
                    "end": 289
                  }
                ],
                "start": 187,
                "end": 292
              },
              "start": 178,
              "end": 292
            },
            "definite": false,
            "start": 174,
            "end": 292
          }
        ],
        "declare": false,
        "start": 168,
        "end": 293
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 161,
      "end": 293
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "g",
        "optional": false,
        "typeAnnotation": null,
        "start": 312,
        "end": 313
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
              "name": "Input",
              "optional": false,
              "typeAnnotation": null,
              "start": 314,
              "end": 319
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 314,
            "end": 319
          },
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null,
              "start": 321,
              "end": 322
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 321,
            "end": 322
          },
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "U",
              "optional": false,
              "typeAnnotation": null,
              "start": 324,
              "end": 325
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 324,
            "end": 325
          },
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "V",
              "optional": false,
              "typeAnnotation": null,
              "start": 327,
              "end": 328
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 327,
            "end": 328
          }
        ],
        "start": 313,
        "end": 329
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "strs",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "TemplateStringsArray",
                "optional": false,
                "typeAnnotation": null,
                "start": 341,
                "end": 361
              },
              "typeArguments": null,
              "start": 341,
              "end": 361
            },
            "start": 339,
            "end": 361
          },
          "start": 335,
          "end": 361
        },
        {
          "type": "Identifier",
          "decorators": [],
          "name": "t",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSFunctionType",
              "typeParameters": null,
              "params": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "i",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "Input",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 374,
                        "end": 379
                      },
                      "typeArguments": null,
                      "start": 374,
                      "end": 379
                    },
                    "start": 372,
                    "end": 379
                  },
                  "start": 371,
                  "end": 379
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "T",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 384,
                    "end": 385
                  },
                  "typeArguments": null,
                  "start": 384,
                  "end": 385
                },
                "start": 381,
                "end": 385
              },
              "start": 370,
              "end": 385
            },
            "start": 368,
            "end": 385
          },
          "start": 367,
          "end": 385
        },
        {
          "type": "Identifier",
          "decorators": [],
          "name": "u",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSFunctionType",
              "typeParameters": null,
              "params": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "i",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "Input",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 394,
                        "end": 399
                      },
                      "typeArguments": null,
                      "start": 394,
                      "end": 399
                    },
                    "start": 392,
                    "end": 399
                  },
                  "start": 391,
                  "end": 399
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "U",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 404,
                    "end": 405
                  },
                  "typeArguments": null,
                  "start": 404,
                  "end": 405
                },
                "start": 401,
                "end": 405
              },
              "start": 390,
              "end": 405
            },
            "start": 388,
            "end": 405
          },
          "start": 387,
          "end": 405
        },
        {
          "type": "Identifier",
          "decorators": [],
          "name": "v",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSFunctionType",
              "typeParameters": null,
              "params": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "i",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "Input",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 414,
                        "end": 419
                      },
                      "typeArguments": null,
                      "start": 414,
                      "end": 419
                    },
                    "start": 412,
                    "end": 419
                  },
                  "start": 411,
                  "end": 419
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "V",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 424,
                    "end": 425
                  },
                  "typeArguments": null,
                  "start": 424,
                  "end": 425
                },
                "start": 421,
                "end": 425
              },
              "start": 410,
              "end": 425
            },
            "start": 408,
            "end": 425
          },
          "start": 407,
          "end": 425
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSUnionType",
          "types": [
            {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "T",
                "optional": false,
                "typeAnnotation": null,
                "start": 428,
                "end": 429
              },
              "typeArguments": null,
              "start": 428,
              "end": 429
            },
            {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "U",
                "optional": false,
                "typeAnnotation": null,
                "start": 432,
                "end": 433
              },
              "typeArguments": null,
              "start": 432,
              "end": 433
            },
            {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "V",
                "optional": false,
                "typeAnnotation": null,
                "start": 436,
                "end": 437
              },
              "typeArguments": null,
              "start": 436,
              "end": 437
            }
          ],
          "start": 428,
          "end": 437
        },
        "start": 426,
        "end": 437
      },
      "body": null,
      "expression": false,
      "start": 295,
      "end": 438
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
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
              "typeAnnotation": null,
              "start": 453,
              "end": 454
            },
            "init": {
              "type": "TaggedTemplateExpression",
              "tag": {
                "type": "Identifier",
                "decorators": [],
                "name": "g",
                "optional": false,
                "typeAnnotation": null,
                "start": 457,
                "end": 458
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "params": [
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Stuff",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 459,
                      "end": 464
                    },
                    "typeArguments": null,
                    "start": 459,
                    "end": 464
                  },
                  {
                    "type": "TSNumberKeyword",
                    "start": 466,
                    "end": 472
                  },
                  {
                    "type": "TSStringKeyword",
                    "start": 474,
                    "end": 480
                  },
                  {
                    "type": "TSBooleanKeyword",
                    "start": 482,
                    "end": 489
                  }
                ],
                "start": 458,
                "end": 490
              },
              "quasi": {
                "type": "TemplateLiteral",
                "quasis": [
                  {
                    "type": "TemplateElement",
                    "value": {
                      "raw": "\n    hello\n    ",
                      "cooked": "\n    hello\n    "
                    },
                    "tail": false,
                    "start": 491,
                    "end": 509
                  },
                  {
                    "type": "TemplateElement",
                    "value": {
                      "raw": "\n    brave\n    ",
                      "cooked": "\n    brave\n    "
                    },
                    "tail": false,
                    "start": 525,
                    "end": 543
                  },
                  {
                    "type": "TemplateElement",
                    "value": {
                      "raw": "\n    world\n    ",
                      "cooked": "\n    world\n    "
                    },
                    "tail": false,
                    "start": 559,
                    "end": 577
                  },
                  {
                    "type": "TemplateElement",
                    "value": {
                      "raw": "\n",
                      "cooked": "\n"
                    },
                    "tail": true,
                    "start": 593,
                    "end": 596
                  }
                ],
                "expressions": [
                  {
                    "type": "ArrowFunctionExpression",
                    "expression": true,
                    "async": false,
                    "typeParameters": null,
                    "params": [
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "stuff",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 509,
                        "end": 514
                      }
                    ],
                    "returnType": null,
                    "body": {
                      "type": "MemberExpression",
                      "object": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "stuff",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 518,
                        "end": 523
                      },
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 524,
                        "end": 525
                      },
                      "optional": false,
                      "computed": false,
                      "start": 518,
                      "end": 525
                    },
                    "id": null,
                    "generator": false,
                    "start": 509,
                    "end": 525
                  },
                  {
                    "type": "ArrowFunctionExpression",
                    "expression": true,
                    "async": false,
                    "typeParameters": null,
                    "params": [
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "stuff",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 543,
                        "end": 548
                      }
                    ],
                    "returnType": null,
                    "body": {
                      "type": "MemberExpression",
                      "object": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "stuff",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 552,
                        "end": 557
                      },
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "y",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 558,
                        "end": 559
                      },
                      "optional": false,
                      "computed": false,
                      "start": 552,
                      "end": 559
                    },
                    "id": null,
                    "generator": false,
                    "start": 543,
                    "end": 559
                  },
                  {
                    "type": "ArrowFunctionExpression",
                    "expression": true,
                    "async": false,
                    "typeParameters": null,
                    "params": [
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "stuff",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 577,
                        "end": 582
                      }
                    ],
                    "returnType": null,
                    "body": {
                      "type": "MemberExpression",
                      "object": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "stuff",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 586,
                        "end": 591
                      },
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "z",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 592,
                        "end": 593
                      },
                      "optional": false,
                      "computed": false,
                      "start": 586,
                      "end": 593
                    },
                    "id": null,
                    "generator": false,
                    "start": 577,
                    "end": 593
                  }
                ],
                "start": 491,
                "end": 596
              },
              "start": 457,
              "end": 596
            },
            "definite": false,
            "start": 453,
            "end": 596
          }
        ],
        "declare": false,
        "start": 447,
        "end": 597
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 440,
      "end": 597
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
                      "name": "prop",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 622,
                      "end": 626
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSFunctionType",
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
                                "start": 629,
                                "end": 630
                              },
                              "constraint": null,
                              "default": null,
                              "in": false,
                              "out": false,
                              "const": false,
                              "start": 629,
                              "end": 630
                            }
                          ],
                          "start": 628,
                          "end": 631
                        },
                        "params": [
                          {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "strs",
                            "optional": false,
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "typeAnnotation": {
                                "type": "TSTypeReference",
                                "typeName": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "TemplateStringsArray",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 638,
                                  "end": 658
                                },
                                "typeArguments": null,
                                "start": 638,
                                "end": 658
                              },
                              "start": 636,
                              "end": 658
                            },
                            "start": 632,
                            "end": 658
                          },
                          {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "x",
                            "optional": false,
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "typeAnnotation": {
                                "type": "TSFunctionType",
                                "typeParameters": null,
                                "params": [
                                  {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "input",
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
                                          "start": 671,
                                          "end": 672
                                        },
                                        "typeArguments": null,
                                        "start": 671,
                                        "end": 672
                                      },
                                      "start": 669,
                                      "end": 672
                                    },
                                    "start": 664,
                                    "end": 672
                                  }
                                ],
                                "returnType": {
                                  "type": "TSTypeAnnotation",
                                  "typeAnnotation": {
                                    "type": "TSTypeReference",
                                    "typeName": {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "T",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 677,
                                      "end": 678
                                    },
                                    "typeArguments": null,
                                    "start": 677,
                                    "end": 678
                                  },
                                  "start": 674,
                                  "end": 678
                                },
                                "start": 663,
                                "end": 678
                              },
                              "start": 661,
                              "end": 678
                            },
                            "start": 660,
                            "end": 678
                          }
                        ],
                        "returnType": {
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
                                  "name": "returnedObjProp",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 693,
                                  "end": 708
                                },
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
                                      "start": 710,
                                      "end": 711
                                    },
                                    "typeArguments": null,
                                    "start": 710,
                                    "end": 711
                                  },
                                  "start": 708,
                                  "end": 711
                                },
                                "accessibility": null,
                                "static": false,
                                "start": 693,
                                "end": 711
                              }
                            ],
                            "start": 683,
                            "end": 717
                          },
                          "start": 680,
                          "end": 717
                        },
                        "start": 628,
                        "end": 717
                      },
                      "start": 626,
                      "end": 717
                    },
                    "accessibility": null,
                    "static": false,
                    "start": 622,
                    "end": 717
                  }
                ],
                "start": 616,
                "end": 719
              },
              "start": 614,
              "end": 719
            },
            "start": 611,
            "end": 719
          },
          "init": null,
          "definite": false,
          "start": 611,
          "end": 719
        }
      ],
      "declare": true,
      "start": 599,
      "end": 719
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "VariableDeclaration",
        "kind": "let",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "c",
              "optional": false,
              "typeAnnotation": null,
              "start": 732,
              "end": 733
            },
            "init": {
              "type": "TaggedTemplateExpression",
              "tag": {
                "type": "MemberExpression",
                "object": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "obj",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 736,
                  "end": 739
                },
                "property": {
                  "type": "Literal",
                  "value": "prop",
                  "raw": "\"prop\"",
                  "start": 740,
                  "end": 746
                },
                "optional": false,
                "computed": true,
                "start": 736,
                "end": 747
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "params": [
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Stuff",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 748,
                      "end": 753
                    },
                    "typeArguments": null,
                    "start": 748,
                    "end": 753
                  }
                ],
                "start": 747,
                "end": 754
              },
              "quasi": {
                "type": "TemplateLiteral",
                "quasis": [
                  {
                    "type": "TemplateElement",
                    "value": {
                      "raw": "",
                      "cooked": ""
                    },
                    "tail": false,
                    "start": 755,
                    "end": 758
                  },
                  {
                    "type": "TemplateElement",
                    "value": {
                      "raw": "",
                      "cooked": ""
                    },
                    "tail": true,
                    "start": 783,
                    "end": 785
                  }
                ],
                "expressions": [
                  {
                    "type": "ArrowFunctionExpression",
                    "expression": true,
                    "async": false,
                    "typeParameters": null,
                    "params": [
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "input",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 759,
                        "end": 764
                      }
                    ],
                    "returnType": null,
                    "body": {
                      "type": "ObjectExpression",
                      "properties": [
                        {
                          "type": "SpreadElement",
                          "argument": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "input",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 775,
                            "end": 780
                          },
                          "start": 772,
                          "end": 780
                        }
                      ],
                      "start": 770,
                      "end": 782
                    },
                    "id": null,
                    "generator": false,
                    "start": 758,
                    "end": 783
                  }
                ],
                "start": 755,
                "end": 785
              },
              "start": 736,
              "end": 785
            },
            "definite": false,
            "start": 732,
            "end": 785
          }
        ],
        "declare": false,
        "start": 728,
        "end": 785
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 721,
      "end": 785
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "MemberExpression",
        "object": {
          "type": "MemberExpression",
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "c",
            "optional": false,
            "typeAnnotation": null,
            "start": 786,
            "end": 787
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "returnedObjProp",
            "optional": false,
            "typeAnnotation": null,
            "start": 788,
            "end": 803
          },
          "optional": false,
          "computed": false,
          "start": 786,
          "end": 803
        },
        "property": {
          "type": "Identifier",
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": null,
          "start": 804,
          "end": 805
        },
        "optional": false,
        "computed": false,
        "start": 786,
        "end": 805
      },
      "directive": null,
      "start": 786,
      "end": 806
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "MemberExpression",
        "object": {
          "type": "MemberExpression",
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "c",
            "optional": false,
            "typeAnnotation": null,
            "start": 807,
            "end": 808
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "returnedObjProp",
            "optional": false,
            "typeAnnotation": null,
            "start": 809,
            "end": 824
          },
          "optional": false,
          "computed": false,
          "start": 807,
          "end": 824
        },
        "property": {
          "type": "Identifier",
          "decorators": [],
          "name": "y",
          "optional": false,
          "typeAnnotation": null,
          "start": 825,
          "end": 826
        },
        "optional": false,
        "computed": false,
        "start": 807,
        "end": 826
      },
      "directive": null,
      "start": 807,
      "end": 827
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "MemberExpression",
        "object": {
          "type": "MemberExpression",
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "c",
            "optional": false,
            "typeAnnotation": null,
            "start": 828,
            "end": 829
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "returnedObjProp",
            "optional": false,
            "typeAnnotation": null,
            "start": 830,
            "end": 845
          },
          "optional": false,
          "computed": false,
          "start": 828,
          "end": 845
        },
        "property": {
          "type": "Identifier",
          "decorators": [],
          "name": "z",
          "optional": false,
          "typeAnnotation": null,
          "start": 846,
          "end": 847
        },
        "optional": false,
        "computed": false,
        "start": 828,
        "end": 847
      },
      "directive": null,
      "start": 828,
      "end": 848
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "c",
          "optional": false,
          "typeAnnotation": null,
          "start": 850,
          "end": 851
        },
        "right": {
          "type": "TaggedTemplateExpression",
          "tag": {
            "type": "MemberExpression",
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "obj",
              "optional": false,
              "typeAnnotation": null,
              "start": 854,
              "end": 857
            },
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "prop",
              "optional": false,
              "typeAnnotation": null,
              "start": 858,
              "end": 862
            },
            "optional": false,
            "computed": false,
            "start": 854,
            "end": 862
          },
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "params": [
              {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Stuff",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 863,
                  "end": 868
                },
                "typeArguments": null,
                "start": 863,
                "end": 868
              }
            ],
            "start": 862,
            "end": 869
          },
          "quasi": {
            "type": "TemplateLiteral",
            "quasis": [
              {
                "type": "TemplateElement",
                "value": {
                  "raw": "",
                  "cooked": ""
                },
                "tail": false,
                "start": 870,
                "end": 873
              },
              {
                "type": "TemplateElement",
                "value": {
                  "raw": "",
                  "cooked": ""
                },
                "tail": true,
                "start": 898,
                "end": 900
              }
            ],
            "expressions": [
              {
                "type": "ArrowFunctionExpression",
                "expression": true,
                "async": false,
                "typeParameters": null,
                "params": [
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "input",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 874,
                    "end": 879
                  }
                ],
                "returnType": null,
                "body": {
                  "type": "ObjectExpression",
                  "properties": [
                    {
                      "type": "SpreadElement",
                      "argument": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "input",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 890,
                        "end": 895
                      },
                      "start": 887,
                      "end": 895
                    }
                  ],
                  "start": 885,
                  "end": 897
                },
                "id": null,
                "generator": false,
                "start": 873,
                "end": 898
              }
            ],
            "start": 870,
            "end": 900
          },
          "start": 854,
          "end": 900
        },
        "start": 850,
        "end": 900
      },
      "directive": null,
      "start": 850,
      "end": 900
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "MemberExpression",
        "object": {
          "type": "MemberExpression",
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "c",
            "optional": false,
            "typeAnnotation": null,
            "start": 901,
            "end": 902
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "returnedObjProp",
            "optional": false,
            "typeAnnotation": null,
            "start": 903,
            "end": 918
          },
          "optional": false,
          "computed": false,
          "start": 901,
          "end": 918
        },
        "property": {
          "type": "Identifier",
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": null,
          "start": 919,
          "end": 920
        },
        "optional": false,
        "computed": false,
        "start": 901,
        "end": 920
      },
      "directive": null,
      "start": 901,
      "end": 921
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "MemberExpression",
        "object": {
          "type": "MemberExpression",
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "c",
            "optional": false,
            "typeAnnotation": null,
            "start": 922,
            "end": 923
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "returnedObjProp",
            "optional": false,
            "typeAnnotation": null,
            "start": 924,
            "end": 939
          },
          "optional": false,
          "computed": false,
          "start": 922,
          "end": 939
        },
        "property": {
          "type": "Identifier",
          "decorators": [],
          "name": "y",
          "optional": false,
          "typeAnnotation": null,
          "start": 940,
          "end": 941
        },
        "optional": false,
        "computed": false,
        "start": 922,
        "end": 941
      },
      "directive": null,
      "start": 922,
      "end": 942
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "MemberExpression",
        "object": {
          "type": "MemberExpression",
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "c",
            "optional": false,
            "typeAnnotation": null,
            "start": 943,
            "end": 944
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "returnedObjProp",
            "optional": false,
            "typeAnnotation": null,
            "start": 945,
            "end": 960
          },
          "optional": false,
          "computed": false,
          "start": 943,
          "end": 960
        },
        "property": {
          "type": "Identifier",
          "decorators": [],
          "name": "z",
          "optional": false,
          "typeAnnotation": null,
          "start": 961,
          "end": 962
        },
        "optional": false,
        "computed": false,
        "start": 943,
        "end": 962
      },
      "directive": null,
      "start": 943,
      "end": 963
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 963
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Identifier",
    "value": "declare",
    "start": 0,
    "end": 7
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 8,
    "end": 16
  },
  {
    "type": "Identifier",
    "value": "f",
    "start": 17,
    "end": 18
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 18,
    "end": 19
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 19,
    "end": 20
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 20,
    "end": 21
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 21,
    "end": 22
  },
  {
    "type": "Identifier",
    "value": "strs",
    "start": 22,
    "end": 26
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 26,
    "end": 27
  },
  {
    "type": "Identifier",
    "value": "TemplateStringsArray",
    "start": 28,
    "end": 48
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 48,
    "end": 49
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 50,
    "end": 53
  },
  {
    "type": "Identifier",
    "value": "callbacks",
    "start": 53,
    "end": 62
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 62,
    "end": 63
  },
  {
    "type": "Identifier",
    "value": "Array",
    "start": 64,
    "end": 69
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 69,
    "end": 70
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 70,
    "end": 71
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 71,
    "end": 72
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 72,
    "end": 73
  },
  {
    "type": "Identifier",
    "value": "T",
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
    "value": "=>",
    "start": 77,
    "end": 79
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 80,
    "end": 83
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 83,
    "end": 84
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 84,
    "end": 85
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 85,
    "end": 86
  },
  {
    "type": "Keyword",
    "value": "void",
    "start": 87,
    "end": 91
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 91,
    "end": 92
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 94,
    "end": 103
  },
  {
    "type": "Identifier",
    "value": "Stuff",
    "start": 104,
    "end": 109
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 110,
    "end": 111
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 116,
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
    "value": "number",
    "start": 119,
    "end": 125
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 125,
    "end": 126
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 131,
    "end": 132
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 132,
    "end": 133
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 134,
    "end": 140
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 140,
    "end": 141
  },
  {
    "type": "Identifier",
    "value": "z",
    "start": 146,
    "end": 147
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 147,
    "end": 148
  },
  {
    "type": "Identifier",
    "value": "boolean",
    "start": 149,
    "end": 156
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 156,
    "end": 157
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 158,
    "end": 159
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 161,
    "end": 167
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 168,
    "end": 173
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 174,
    "end": 175
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 176,
    "end": 177
  },
  {
    "type": "Identifier",
    "value": "f",
    "start": 178,
    "end": 179
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 179,
    "end": 180
  },
  {
    "type": "Identifier",
    "value": "Stuff",
    "start": 180,
    "end": 185
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 185,
    "end": 186
  },
  {
    "type": "Template",
    "value": "`\n    hello\n    ${",
    "start": 187,
    "end": 205
  },
  {
    "type": "Identifier",
    "value": "stuff",
    "start": 205,
    "end": 210
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 211,
    "end": 213
  },
  {
    "type": "Identifier",
    "value": "stuff",
    "start": 214,
    "end": 219
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 219,
    "end": 220
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 220,
    "end": 221
  },
  {
    "type": "Template",
    "value": "}\n    brave\n    ${",
    "start": 221,
    "end": 239
  },
  {
    "type": "Identifier",
    "value": "stuff",
    "start": 239,
    "end": 244
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 245,
    "end": 247
  },
  {
    "type": "Identifier",
    "value": "stuff",
    "start": 248,
    "end": 253
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 253,
    "end": 254
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 254,
    "end": 255
  },
  {
    "type": "Template",
    "value": "}\n    world\n    ${",
    "start": 255,
    "end": 273
  },
  {
    "type": "Identifier",
    "value": "stuff",
    "start": 273,
    "end": 278
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 279,
    "end": 281
  },
  {
    "type": "Identifier",
    "value": "stuff",
    "start": 282,
    "end": 287
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 287,
    "end": 288
  },
  {
    "type": "Identifier",
    "value": "z",
    "start": 288,
    "end": 289
  },
  {
    "type": "Template",
    "value": "}\n`",
    "start": 289,
    "end": 292
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 292,
    "end": 293
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 295,
    "end": 302
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 303,
    "end": 311
  },
  {
    "type": "Identifier",
    "value": "g",
    "start": 312,
    "end": 313
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 313,
    "end": 314
  },
  {
    "type": "Identifier",
    "value": "Input",
    "start": 314,
    "end": 319
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 319,
    "end": 320
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 321,
    "end": 322
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 322,
    "end": 323
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 324,
    "end": 325
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 325,
    "end": 326
  },
  {
    "type": "Identifier",
    "value": "V",
    "start": 327,
    "end": 328
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 328,
    "end": 329
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 329,
    "end": 330
  },
  {
    "type": "Identifier",
    "value": "strs",
    "start": 335,
    "end": 339
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 339,
    "end": 340
  },
  {
    "type": "Identifier",
    "value": "TemplateStringsArray",
    "start": 341,
    "end": 361
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 361,
    "end": 362
  },
  {
    "type": "Identifier",
    "value": "t",
    "start": 367,
    "end": 368
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 368,
    "end": 369
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 370,
    "end": 371
  },
  {
    "type": "Identifier",
    "value": "i",
    "start": 371,
    "end": 372
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 372,
    "end": 373
  },
  {
    "type": "Identifier",
    "value": "Input",
    "start": 374,
    "end": 379
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 379,
    "end": 380
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 381,
    "end": 383
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 384,
    "end": 385
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 385,
    "end": 386
  },
  {
    "type": "Identifier",
    "value": "u",
    "start": 387,
    "end": 388
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 388,
    "end": 389
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 390,
    "end": 391
  },
  {
    "type": "Identifier",
    "value": "i",
    "start": 391,
    "end": 392
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 392,
    "end": 393
  },
  {
    "type": "Identifier",
    "value": "Input",
    "start": 394,
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
    "value": "=>",
    "start": 401,
    "end": 403
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 404,
    "end": 405
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 405,
    "end": 406
  },
  {
    "type": "Identifier",
    "value": "v",
    "start": 407,
    "end": 408
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 408,
    "end": 409
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 410,
    "end": 411
  },
  {
    "type": "Identifier",
    "value": "i",
    "start": 411,
    "end": 412
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 412,
    "end": 413
  },
  {
    "type": "Identifier",
    "value": "Input",
    "start": 414,
    "end": 419
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 419,
    "end": 420
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 421,
    "end": 423
  },
  {
    "type": "Identifier",
    "value": "V",
    "start": 424,
    "end": 425
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 425,
    "end": 426
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 426,
    "end": 427
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 428,
    "end": 429
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 430,
    "end": 431
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 432,
    "end": 433
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 434,
    "end": 435
  },
  {
    "type": "Identifier",
    "value": "V",
    "start": 436,
    "end": 437
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 437,
    "end": 438
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 440,
    "end": 446
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 447,
    "end": 452
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 453,
    "end": 454
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 455,
    "end": 456
  },
  {
    "type": "Identifier",
    "value": "g",
    "start": 457,
    "end": 458
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 458,
    "end": 459
  },
  {
    "type": "Identifier",
    "value": "Stuff",
    "start": 459,
    "end": 464
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 464,
    "end": 465
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 466,
    "end": 472
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 472,
    "end": 473
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 474,
    "end": 480
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 480,
    "end": 481
  },
  {
    "type": "Identifier",
    "value": "boolean",
    "start": 482,
    "end": 489
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 489,
    "end": 490
  },
  {
    "type": "Template",
    "value": "`\n    hello\n    ${",
    "start": 491,
    "end": 509
  },
  {
    "type": "Identifier",
    "value": "stuff",
    "start": 509,
    "end": 514
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 515,
    "end": 517
  },
  {
    "type": "Identifier",
    "value": "stuff",
    "start": 518,
    "end": 523
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 523,
    "end": 524
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 524,
    "end": 525
  },
  {
    "type": "Template",
    "value": "}\n    brave\n    ${",
    "start": 525,
    "end": 543
  },
  {
    "type": "Identifier",
    "value": "stuff",
    "start": 543,
    "end": 548
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 549,
    "end": 551
  },
  {
    "type": "Identifier",
    "value": "stuff",
    "start": 552,
    "end": 557
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 557,
    "end": 558
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 558,
    "end": 559
  },
  {
    "type": "Template",
    "value": "}\n    world\n    ${",
    "start": 559,
    "end": 577
  },
  {
    "type": "Identifier",
    "value": "stuff",
    "start": 577,
    "end": 582
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 583,
    "end": 585
  },
  {
    "type": "Identifier",
    "value": "stuff",
    "start": 586,
    "end": 591
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 591,
    "end": 592
  },
  {
    "type": "Identifier",
    "value": "z",
    "start": 592,
    "end": 593
  },
  {
    "type": "Template",
    "value": "}\n`",
    "start": 593,
    "end": 596
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 596,
    "end": 597
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 599,
    "end": 606
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 607,
    "end": 610
  },
  {
    "type": "Identifier",
    "value": "obj",
    "start": 611,
    "end": 614
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 614,
    "end": 615
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 616,
    "end": 617
  },
  {
    "type": "Identifier",
    "value": "prop",
    "start": 622,
    "end": 626
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 626,
    "end": 627
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 628,
    "end": 629
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 629,
    "end": 630
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 630,
    "end": 631
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 631,
    "end": 632
  },
  {
    "type": "Identifier",
    "value": "strs",
    "start": 632,
    "end": 636
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 636,
    "end": 637
  },
  {
    "type": "Identifier",
    "value": "TemplateStringsArray",
    "start": 638,
    "end": 658
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 658,
    "end": 659
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 660,
    "end": 661
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 661,
    "end": 662
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 663,
    "end": 664
  },
  {
    "type": "Identifier",
    "value": "input",
    "start": 664,
    "end": 669
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 669,
    "end": 670
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 671,
    "end": 672
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 672,
    "end": 673
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 674,
    "end": 676
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 677,
    "end": 678
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 678,
    "end": 679
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 680,
    "end": 682
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 683,
    "end": 684
  },
  {
    "type": "Identifier",
    "value": "returnedObjProp",
    "start": 693,
    "end": 708
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 708,
    "end": 709
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 710,
    "end": 711
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 716,
    "end": 717
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 718,
    "end": 719
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 721,
    "end": 727
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 728,
    "end": 731
  },
  {
    "type": "Identifier",
    "value": "c",
    "start": 732,
    "end": 733
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 734,
    "end": 735
  },
  {
    "type": "Identifier",
    "value": "obj",
    "start": 736,
    "end": 739
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 739,
    "end": 740
  },
  {
    "type": "String",
    "value": "\"prop\"",
    "start": 740,
    "end": 746
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 746,
    "end": 747
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 747,
    "end": 748
  },
  {
    "type": "Identifier",
    "value": "Stuff",
    "start": 748,
    "end": 753
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 753,
    "end": 754
  },
  {
    "type": "Template",
    "value": "`${",
    "start": 755,
    "end": 758
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 758,
    "end": 759
  },
  {
    "type": "Identifier",
    "value": "input",
    "start": 759,
    "end": 764
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 764,
    "end": 765
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 766,
    "end": 768
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 769,
    "end": 770
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 770,
    "end": 771
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 772,
    "end": 775
  },
  {
    "type": "Identifier",
    "value": "input",
    "start": 775,
    "end": 780
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 781,
    "end": 782
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 782,
    "end": 783
  },
  {
    "type": "Template",
    "value": "}`",
    "start": 783,
    "end": 785
  },
  {
    "type": "Identifier",
    "value": "c",
    "start": 786,
    "end": 787
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 787,
    "end": 788
  },
  {
    "type": "Identifier",
    "value": "returnedObjProp",
    "start": 788,
    "end": 803
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 803,
    "end": 804
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 804,
    "end": 805
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 805,
    "end": 806
  },
  {
    "type": "Identifier",
    "value": "c",
    "start": 807,
    "end": 808
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 808,
    "end": 809
  },
  {
    "type": "Identifier",
    "value": "returnedObjProp",
    "start": 809,
    "end": 824
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 824,
    "end": 825
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 825,
    "end": 826
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 826,
    "end": 827
  },
  {
    "type": "Identifier",
    "value": "c",
    "start": 828,
    "end": 829
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 829,
    "end": 830
  },
  {
    "type": "Identifier",
    "value": "returnedObjProp",
    "start": 830,
    "end": 845
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 845,
    "end": 846
  },
  {
    "type": "Identifier",
    "value": "z",
    "start": 846,
    "end": 847
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 847,
    "end": 848
  },
  {
    "type": "Identifier",
    "value": "c",
    "start": 850,
    "end": 851
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 852,
    "end": 853
  },
  {
    "type": "Identifier",
    "value": "obj",
    "start": 854,
    "end": 857
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 857,
    "end": 858
  },
  {
    "type": "Identifier",
    "value": "prop",
    "start": 858,
    "end": 862
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 862,
    "end": 863
  },
  {
    "type": "Identifier",
    "value": "Stuff",
    "start": 863,
    "end": 868
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 868,
    "end": 869
  },
  {
    "type": "Template",
    "value": "`${",
    "start": 870,
    "end": 873
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 873,
    "end": 874
  },
  {
    "type": "Identifier",
    "value": "input",
    "start": 874,
    "end": 879
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 879,
    "end": 880
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 881,
    "end": 883
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 884,
    "end": 885
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 885,
    "end": 886
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 887,
    "end": 890
  },
  {
    "type": "Identifier",
    "value": "input",
    "start": 890,
    "end": 895
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 896,
    "end": 897
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 897,
    "end": 898
  },
  {
    "type": "Template",
    "value": "}`",
    "start": 898,
    "end": 900
  },
  {
    "type": "Identifier",
    "value": "c",
    "start": 901,
    "end": 902
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 902,
    "end": 903
  },
  {
    "type": "Identifier",
    "value": "returnedObjProp",
    "start": 903,
    "end": 918
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 918,
    "end": 919
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 919,
    "end": 920
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 920,
    "end": 921
  },
  {
    "type": "Identifier",
    "value": "c",
    "start": 922,
    "end": 923
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 923,
    "end": 924
  },
  {
    "type": "Identifier",
    "value": "returnedObjProp",
    "start": 924,
    "end": 939
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 939,
    "end": 940
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 940,
    "end": 941
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 941,
    "end": 942
  },
  {
    "type": "Identifier",
    "value": "c",
    "start": 943,
    "end": 944
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 944,
    "end": 945
  },
  {
    "type": "Identifier",
    "value": "returnedObjProp",
    "start": 945,
    "end": 960
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 960,
    "end": 961
  },
  {
    "type": "Identifier",
    "value": "z",
    "start": 961,
    "end": 962
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 962,
    "end": 963
  }
]
```
