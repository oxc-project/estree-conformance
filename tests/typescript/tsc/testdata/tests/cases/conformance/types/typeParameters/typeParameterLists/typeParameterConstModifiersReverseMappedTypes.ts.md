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
        "name": "test1",
        "optional": false,
        "typeAnnotation": null,
        "start": 17,
        "end": 22
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
              "start": 29,
              "end": 30
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": true,
            "start": 23,
            "end": 30
          }
        ],
        "start": 22,
        "end": 31
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
              "type": "TSMappedType",
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "K",
                "optional": false,
                "typeAnnotation": null,
                "start": 42,
                "end": 43
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
                    "start": 53,
                    "end": 54
                  },
                  "typeArguments": null,
                  "start": 53,
                  "end": 54
                },
                "start": 47,
                "end": 54
              },
              "nameType": null,
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
                    "start": 57,
                    "end": 58
                  },
                  "typeArguments": null,
                  "start": 57,
                  "end": 58
                },
                "indexType": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "K",
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
                "end": 61
              },
              "optional": false,
              "readonly": null,
              "start": 37,
              "end": 64
            },
            "start": 35,
            "end": 64
          },
          "start": 32,
          "end": 64
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSTupleType",
          "elementTypes": [
            {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "T",
                "optional": false,
                "typeAnnotation": null,
                "start": 68,
                "end": 69
              },
              "typeArguments": null,
              "start": 68,
              "end": 69
            },
            {
              "type": "TSTypeQuery",
              "exprName": {
                "type": "Identifier",
                "decorators": [],
                "name": "obj",
                "optional": false,
                "typeAnnotation": null,
                "start": 78,
                "end": 81
              },
              "typeArguments": null,
              "start": 71,
              "end": 81
            }
          ],
          "start": 67,
          "end": 82
        },
        "start": 65,
        "end": 82
      },
      "body": null,
      "expression": false,
      "start": 0,
      "end": 83
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
            "name": "result1",
            "optional": false,
            "typeAnnotation": null,
            "start": 91,
            "end": 98
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "test1",
              "optional": false,
              "typeAnnotation": null,
              "start": 101,
              "end": 106
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
                      "name": "prop",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 111,
                      "end": 115
                    },
                    "value": {
                      "type": "Literal",
                      "value": "foo",
                      "raw": "\"foo\"",
                      "start": 117,
                      "end": 122
                    },
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "optional": false,
                    "start": 111,
                    "end": 122
                  },
                  {
                    "type": "Property",
                    "kind": "init",
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "nested",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 126,
                      "end": 132
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
                            "name": "nestedProp",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 140,
                            "end": 150
                          },
                          "value": {
                            "type": "Literal",
                            "value": "bar",
                            "raw": "\"bar\"",
                            "start": 152,
                            "end": 157
                          },
                          "method": false,
                          "shorthand": false,
                          "computed": false,
                          "optional": false,
                          "start": 140,
                          "end": 157
                        }
                      ],
                      "start": 134,
                      "end": 162
                    },
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "optional": false,
                    "start": 126,
                    "end": 162
                  }
                ],
                "start": 107,
                "end": 165
              }
            ],
            "optional": false,
            "start": 101,
            "end": 166
          },
          "definite": false,
          "start": 91,
          "end": 166
        }
      ],
      "declare": false,
      "start": 85,
      "end": 167
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "test2",
        "optional": false,
        "typeAnnotation": null,
        "start": 186,
        "end": 191
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
              "start": 198,
              "end": 199
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": true,
            "start": 192,
            "end": 199
          }
        ],
        "start": 191,
        "end": 200
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
              "type": "TSMappedType",
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "K",
                "optional": false,
                "typeAnnotation": null,
                "start": 220,
                "end": 221
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
                    "start": 231,
                    "end": 232
                  },
                  "typeArguments": null,
                  "start": 231,
                  "end": 232
                },
                "start": 225,
                "end": 232
              },
              "nameType": null,
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
                    "start": 235,
                    "end": 236
                  },
                  "typeArguments": null,
                  "start": 235,
                  "end": 236
                },
                "indexType": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "K",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 237,
                    "end": 238
                  },
                  "typeArguments": null,
                  "start": 237,
                  "end": 238
                },
                "start": 235,
                "end": 239
              },
              "optional": false,
              "readonly": true,
              "start": 206,
              "end": 242
            },
            "start": 204,
            "end": 242
          },
          "start": 201,
          "end": 242
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSTupleType",
          "elementTypes": [
            {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "T",
                "optional": false,
                "typeAnnotation": null,
                "start": 246,
                "end": 247
              },
              "typeArguments": null,
              "start": 246,
              "end": 247
            },
            {
              "type": "TSTypeQuery",
              "exprName": {
                "type": "Identifier",
                "decorators": [],
                "name": "obj",
                "optional": false,
                "typeAnnotation": null,
                "start": 256,
                "end": 259
              },
              "typeArguments": null,
              "start": 249,
              "end": 259
            }
          ],
          "start": 245,
          "end": 260
        },
        "start": 243,
        "end": 260
      },
      "body": null,
      "expression": false,
      "start": 169,
      "end": 261
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
            "name": "result2",
            "optional": false,
            "typeAnnotation": null,
            "start": 269,
            "end": 276
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "test2",
              "optional": false,
              "typeAnnotation": null,
              "start": 279,
              "end": 284
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
                      "name": "prop",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 289,
                      "end": 293
                    },
                    "value": {
                      "type": "Literal",
                      "value": "foo",
                      "raw": "\"foo\"",
                      "start": 295,
                      "end": 300
                    },
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "optional": false,
                    "start": 289,
                    "end": 300
                  },
                  {
                    "type": "Property",
                    "kind": "init",
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "nested",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 304,
                      "end": 310
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
                            "name": "nestedProp",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 318,
                            "end": 328
                          },
                          "value": {
                            "type": "Literal",
                            "value": "bar",
                            "raw": "\"bar\"",
                            "start": 330,
                            "end": 335
                          },
                          "method": false,
                          "shorthand": false,
                          "computed": false,
                          "optional": false,
                          "start": 318,
                          "end": 335
                        }
                      ],
                      "start": 312,
                      "end": 340
                    },
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "optional": false,
                    "start": 304,
                    "end": 340
                  }
                ],
                "start": 285,
                "end": 343
              }
            ],
            "optional": false,
            "start": 279,
            "end": 344
          },
          "definite": false,
          "start": 269,
          "end": 344
        }
      ],
      "declare": false,
      "start": 263,
      "end": 345
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "test3",
        "optional": false,
        "typeAnnotation": null,
        "start": 364,
        "end": 369
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
              "start": 376,
              "end": 377
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": true,
            "start": 370,
            "end": 377
          }
        ],
        "start": 369,
        "end": 378
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
              "type": "TSMappedType",
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "K",
                "optional": false,
                "typeAnnotation": null,
                "start": 399,
                "end": 400
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
                    "start": 410,
                    "end": 411
                  },
                  "typeArguments": null,
                  "start": 410,
                  "end": 411
                },
                "start": 404,
                "end": 411
              },
              "nameType": null,
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
                    "start": 414,
                    "end": 415
                  },
                  "typeArguments": null,
                  "start": 414,
                  "end": 415
                },
                "indexType": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "K",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 416,
                    "end": 417
                  },
                  "typeArguments": null,
                  "start": 416,
                  "end": 417
                },
                "start": 414,
                "end": 418
              },
              "optional": false,
              "readonly": "-",
              "start": 384,
              "end": 421
            },
            "start": 382,
            "end": 421
          },
          "start": 379,
          "end": 421
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSTupleType",
          "elementTypes": [
            {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "T",
                "optional": false,
                "typeAnnotation": null,
                "start": 425,
                "end": 426
              },
              "typeArguments": null,
              "start": 425,
              "end": 426
            },
            {
              "type": "TSTypeQuery",
              "exprName": {
                "type": "Identifier",
                "decorators": [],
                "name": "obj",
                "optional": false,
                "typeAnnotation": null,
                "start": 435,
                "end": 438
              },
              "typeArguments": null,
              "start": 428,
              "end": 438
            }
          ],
          "start": 424,
          "end": 439
        },
        "start": 422,
        "end": 439
      },
      "body": null,
      "expression": false,
      "start": 347,
      "end": 440
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
            "name": "result3",
            "optional": false,
            "typeAnnotation": null,
            "start": 448,
            "end": 455
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "test3",
              "optional": false,
              "typeAnnotation": null,
              "start": 458,
              "end": 463
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
                      "name": "prop",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 468,
                      "end": 472
                    },
                    "value": {
                      "type": "Literal",
                      "value": "foo",
                      "raw": "\"foo\"",
                      "start": 474,
                      "end": 479
                    },
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "optional": false,
                    "start": 468,
                    "end": 479
                  },
                  {
                    "type": "Property",
                    "kind": "init",
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "nested",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 483,
                      "end": 489
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
                            "name": "nestedProp",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 497,
                            "end": 507
                          },
                          "value": {
                            "type": "Literal",
                            "value": "bar",
                            "raw": "\"bar\"",
                            "start": 509,
                            "end": 514
                          },
                          "method": false,
                          "shorthand": false,
                          "computed": false,
                          "optional": false,
                          "start": 497,
                          "end": 514
                        }
                      ],
                      "start": 491,
                      "end": 519
                    },
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "optional": false,
                    "start": 483,
                    "end": 519
                  }
                ],
                "start": 464,
                "end": 522
              }
            ],
            "optional": false,
            "start": 458,
            "end": 523
          },
          "definite": false,
          "start": 448,
          "end": 523
        }
      ],
      "declare": false,
      "start": 442,
      "end": 524
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "test4",
        "optional": false,
        "typeAnnotation": null,
        "start": 543,
        "end": 548
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
              "start": 555,
              "end": 556
            },
            "constraint": {
              "type": "TSTypeOperator",
              "operator": "readonly",
              "typeAnnotation": {
                "type": "TSArrayType",
                "elementType": {
                  "type": "TSUnknownKeyword",
                  "start": 574,
                  "end": 581
                },
                "start": 574,
                "end": 583
              },
              "start": 565,
              "end": 583
            },
            "default": null,
            "in": false,
            "out": false,
            "const": true,
            "start": 549,
            "end": 583
          }
        ],
        "start": 548,
        "end": 584
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "arr",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSMappedType",
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "K",
                "optional": false,
                "typeAnnotation": null,
                "start": 595,
                "end": 596
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
                    "start": 606,
                    "end": 607
                  },
                  "typeArguments": null,
                  "start": 606,
                  "end": 607
                },
                "start": 600,
                "end": 607
              },
              "nameType": null,
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
                    "start": 610,
                    "end": 611
                  },
                  "typeArguments": null,
                  "start": 610,
                  "end": 611
                },
                "indexType": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "K",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 612,
                    "end": 613
                  },
                  "typeArguments": null,
                  "start": 612,
                  "end": 613
                },
                "start": 610,
                "end": 614
              },
              "optional": false,
              "readonly": null,
              "start": 590,
              "end": 617
            },
            "start": 588,
            "end": 617
          },
          "start": 585,
          "end": 617
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
            "start": 620,
            "end": 621
          },
          "typeArguments": null,
          "start": 620,
          "end": 621
        },
        "start": 618,
        "end": 621
      },
      "body": null,
      "expression": false,
      "start": 526,
      "end": 622
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
            "name": "result4",
            "optional": false,
            "typeAnnotation": null,
            "start": 630,
            "end": 637
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "test4",
              "optional": false,
              "typeAnnotation": null,
              "start": 640,
              "end": 645
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "ArrayExpression",
                "elements": [
                  {
                    "type": "Literal",
                    "value": "1",
                    "raw": "\"1\"",
                    "start": 647,
                    "end": 650
                  },
                  {
                    "type": "Literal",
                    "value": 2,
                    "raw": "2",
                    "start": 652,
                    "end": 653
                  }
                ],
                "start": 646,
                "end": 654
              }
            ],
            "optional": false,
            "start": 640,
            "end": 655
          },
          "definite": false,
          "start": 630,
          "end": 655
        }
      ],
      "declare": false,
      "start": 624,
      "end": 656
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "test5",
        "optional": false,
        "typeAnnotation": null,
        "start": 675,
        "end": 680
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
              "start": 687,
              "end": 688
            },
            "constraint": {
              "type": "TSTypeOperator",
              "operator": "readonly",
              "typeAnnotation": {
                "type": "TSArrayType",
                "elementType": {
                  "type": "TSUnknownKeyword",
                  "start": 706,
                  "end": 713
                },
                "start": 706,
                "end": 715
              },
              "start": 697,
              "end": 715
            },
            "default": null,
            "in": false,
            "out": false,
            "const": true,
            "start": 681,
            "end": 715
          }
        ],
        "start": 680,
        "end": 716
      },
      "params": [
        {
          "type": "RestElement",
          "decorators": [],
          "argument": {
            "type": "Identifier",
            "decorators": [],
            "name": "args",
            "optional": false,
            "typeAnnotation": null,
            "start": 723,
            "end": 727
          },
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSMappedType",
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "K",
                "optional": false,
                "typeAnnotation": null,
                "start": 736,
                "end": 737
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
                    "start": 747,
                    "end": 748
                  },
                  "typeArguments": null,
                  "start": 747,
                  "end": 748
                },
                "start": 741,
                "end": 748
              },
              "nameType": null,
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
                    "start": 751,
                    "end": 752
                  },
                  "typeArguments": null,
                  "start": 751,
                  "end": 752
                },
                "indexType": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "K",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 753,
                    "end": 754
                  },
                  "typeArguments": null,
                  "start": 753,
                  "end": 754
                },
                "start": 751,
                "end": 755
              },
              "optional": false,
              "readonly": null,
              "start": 729,
              "end": 760
            },
            "start": 727,
            "end": 760
          },
          "value": null,
          "start": 720,
          "end": 760
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
            "start": 764,
            "end": 765
          },
          "typeArguments": null,
          "start": 764,
          "end": 765
        },
        "start": 762,
        "end": 765
      },
      "body": null,
      "expression": false,
      "start": 658,
      "end": 766
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
            "name": "result5",
            "optional": false,
            "typeAnnotation": null,
            "start": 774,
            "end": 781
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "test5",
              "optional": false,
              "typeAnnotation": null,
              "start": 784,
              "end": 789
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
                      "name": "a",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 792,
                      "end": 793
                    },
                    "value": {
                      "type": "Literal",
                      "value": "foo",
                      "raw": "\"foo\"",
                      "start": 795,
                      "end": 800
                    },
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "optional": false,
                    "start": 792,
                    "end": 800
                  }
                ],
                "start": 790,
                "end": 802
              }
            ],
            "optional": false,
            "start": 784,
            "end": 803
          },
          "definite": false,
          "start": 774,
          "end": 803
        }
      ],
      "declare": false,
      "start": 768,
      "end": 804
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 804
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
    "value": "test1",
    "start": 17,
    "end": 22
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 22,
    "end": 23
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 23,
    "end": 28
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 29,
    "end": 30
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 30,
    "end": 31
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 31,
    "end": 32
  },
  {
    "type": "Identifier",
    "value": "obj",
    "start": 32,
    "end": 35
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 35,
    "end": 36
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 37,
    "end": 38
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 41,
    "end": 42
  },
  {
    "type": "Identifier",
    "value": "K",
    "start": 42,
    "end": 43
  },
  {
    "type": "Keyword",
    "value": "in",
    "start": 44,
    "end": 46
  },
  {
    "type": "Identifier",
    "value": "keyof",
    "start": 47,
    "end": 52
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 53,
    "end": 54
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 54,
    "end": 55
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 55,
    "end": 56
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 57,
    "end": 58
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 58,
    "end": 59
  },
  {
    "type": "Identifier",
    "value": "K",
    "start": 59,
    "end": 60
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 60,
    "end": 61
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 61,
    "end": 62
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 63,
    "end": 64
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 64,
    "end": 65
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 65,
    "end": 66
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 67,
    "end": 68
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 68,
    "end": 69
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 69,
    "end": 70
  },
  {
    "type": "Keyword",
    "value": "typeof",
    "start": 71,
    "end": 77
  },
  {
    "type": "Identifier",
    "value": "obj",
    "start": 78,
    "end": 81
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 81,
    "end": 82
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 82,
    "end": 83
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 85,
    "end": 90
  },
  {
    "type": "Identifier",
    "value": "result1",
    "start": 91,
    "end": 98
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 99,
    "end": 100
  },
  {
    "type": "Identifier",
    "value": "test1",
    "start": 101,
    "end": 106
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 106,
    "end": 107
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 107,
    "end": 108
  },
  {
    "type": "Identifier",
    "value": "prop",
    "start": 111,
    "end": 115
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 115,
    "end": 116
  },
  {
    "type": "String",
    "value": "\"foo\"",
    "start": 117,
    "end": 122
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 122,
    "end": 123
  },
  {
    "type": "Identifier",
    "value": "nested",
    "start": 126,
    "end": 132
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 132,
    "end": 133
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 134,
    "end": 135
  },
  {
    "type": "Identifier",
    "value": "nestedProp",
    "start": 140,
    "end": 150
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 150,
    "end": 151
  },
  {
    "type": "String",
    "value": "\"bar\"",
    "start": 152,
    "end": 157
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 157,
    "end": 158
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 161,
    "end": 162
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 162,
    "end": 163
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 164,
    "end": 165
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 165,
    "end": 166
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 166,
    "end": 167
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 169,
    "end": 176
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 177,
    "end": 185
  },
  {
    "type": "Identifier",
    "value": "test2",
    "start": 186,
    "end": 191
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 191,
    "end": 192
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 192,
    "end": 197
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 198,
    "end": 199
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 199,
    "end": 200
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 200,
    "end": 201
  },
  {
    "type": "Identifier",
    "value": "obj",
    "start": 201,
    "end": 204
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 204,
    "end": 205
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 206,
    "end": 207
  },
  {
    "type": "Identifier",
    "value": "readonly",
    "start": 210,
    "end": 218
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 219,
    "end": 220
  },
  {
    "type": "Identifier",
    "value": "K",
    "start": 220,
    "end": 221
  },
  {
    "type": "Keyword",
    "value": "in",
    "start": 222,
    "end": 224
  },
  {
    "type": "Identifier",
    "value": "keyof",
    "start": 225,
    "end": 230
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 231,
    "end": 232
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 232,
    "end": 233
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 233,
    "end": 234
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 235,
    "end": 236
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 236,
    "end": 237
  },
  {
    "type": "Identifier",
    "value": "K",
    "start": 237,
    "end": 238
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 238,
    "end": 239
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 239,
    "end": 240
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 241,
    "end": 242
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 242,
    "end": 243
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 243,
    "end": 244
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 245,
    "end": 246
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 246,
    "end": 247
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 247,
    "end": 248
  },
  {
    "type": "Keyword",
    "value": "typeof",
    "start": 249,
    "end": 255
  },
  {
    "type": "Identifier",
    "value": "obj",
    "start": 256,
    "end": 259
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 259,
    "end": 260
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 260,
    "end": 261
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 263,
    "end": 268
  },
  {
    "type": "Identifier",
    "value": "result2",
    "start": 269,
    "end": 276
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 277,
    "end": 278
  },
  {
    "type": "Identifier",
    "value": "test2",
    "start": 279,
    "end": 284
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 284,
    "end": 285
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 285,
    "end": 286
  },
  {
    "type": "Identifier",
    "value": "prop",
    "start": 289,
    "end": 293
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 293,
    "end": 294
  },
  {
    "type": "String",
    "value": "\"foo\"",
    "start": 295,
    "end": 300
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 300,
    "end": 301
  },
  {
    "type": "Identifier",
    "value": "nested",
    "start": 304,
    "end": 310
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 310,
    "end": 311
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 312,
    "end": 313
  },
  {
    "type": "Identifier",
    "value": "nestedProp",
    "start": 318,
    "end": 328
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 328,
    "end": 329
  },
  {
    "type": "String",
    "value": "\"bar\"",
    "start": 330,
    "end": 335
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 335,
    "end": 336
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 339,
    "end": 340
  },
  {
    "type": "Punctuator",
    "value": ",",
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
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 347,
    "end": 354
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 355,
    "end": 363
  },
  {
    "type": "Identifier",
    "value": "test3",
    "start": 364,
    "end": 369
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 369,
    "end": 370
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 370,
    "end": 375
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 376,
    "end": 377
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 377,
    "end": 378
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 378,
    "end": 379
  },
  {
    "type": "Identifier",
    "value": "obj",
    "start": 379,
    "end": 382
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 382,
    "end": 383
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 384,
    "end": 385
  },
  {
    "type": "Punctuator",
    "value": "-",
    "start": 388,
    "end": 389
  },
  {
    "type": "Identifier",
    "value": "readonly",
    "start": 389,
    "end": 397
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 398,
    "end": 399
  },
  {
    "type": "Identifier",
    "value": "K",
    "start": 399,
    "end": 400
  },
  {
    "type": "Keyword",
    "value": "in",
    "start": 401,
    "end": 403
  },
  {
    "type": "Identifier",
    "value": "keyof",
    "start": 404,
    "end": 409
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 410,
    "end": 411
  },
  {
    "type": "Punctuator",
    "value": "]",
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
    "value": "T",
    "start": 414,
    "end": 415
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 415,
    "end": 416
  },
  {
    "type": "Identifier",
    "value": "K",
    "start": 416,
    "end": 417
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 417,
    "end": 418
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 418,
    "end": 419
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 420,
    "end": 421
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 421,
    "end": 422
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 422,
    "end": 423
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 424,
    "end": 425
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 425,
    "end": 426
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 426,
    "end": 427
  },
  {
    "type": "Keyword",
    "value": "typeof",
    "start": 428,
    "end": 434
  },
  {
    "type": "Identifier",
    "value": "obj",
    "start": 435,
    "end": 438
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 438,
    "end": 439
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 439,
    "end": 440
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 442,
    "end": 447
  },
  {
    "type": "Identifier",
    "value": "result3",
    "start": 448,
    "end": 455
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 456,
    "end": 457
  },
  {
    "type": "Identifier",
    "value": "test3",
    "start": 458,
    "end": 463
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 463,
    "end": 464
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 464,
    "end": 465
  },
  {
    "type": "Identifier",
    "value": "prop",
    "start": 468,
    "end": 472
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 472,
    "end": 473
  },
  {
    "type": "String",
    "value": "\"foo\"",
    "start": 474,
    "end": 479
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 479,
    "end": 480
  },
  {
    "type": "Identifier",
    "value": "nested",
    "start": 483,
    "end": 489
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 489,
    "end": 490
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 491,
    "end": 492
  },
  {
    "type": "Identifier",
    "value": "nestedProp",
    "start": 497,
    "end": 507
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 507,
    "end": 508
  },
  {
    "type": "String",
    "value": "\"bar\"",
    "start": 509,
    "end": 514
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 514,
    "end": 515
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 518,
    "end": 519
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 519,
    "end": 520
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 521,
    "end": 522
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 522,
    "end": 523
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 523,
    "end": 524
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 526,
    "end": 533
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 534,
    "end": 542
  },
  {
    "type": "Identifier",
    "value": "test4",
    "start": 543,
    "end": 548
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 548,
    "end": 549
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 549,
    "end": 554
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 555,
    "end": 556
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 557,
    "end": 564
  },
  {
    "type": "Identifier",
    "value": "readonly",
    "start": 565,
    "end": 573
  },
  {
    "type": "Identifier",
    "value": "unknown",
    "start": 574,
    "end": 581
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 581,
    "end": 582
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 582,
    "end": 583
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 583,
    "end": 584
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 584,
    "end": 585
  },
  {
    "type": "Identifier",
    "value": "arr",
    "start": 585,
    "end": 588
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 588,
    "end": 589
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 590,
    "end": 591
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 594,
    "end": 595
  },
  {
    "type": "Identifier",
    "value": "K",
    "start": 595,
    "end": 596
  },
  {
    "type": "Keyword",
    "value": "in",
    "start": 597,
    "end": 599
  },
  {
    "type": "Identifier",
    "value": "keyof",
    "start": 600,
    "end": 605
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 606,
    "end": 607
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 607,
    "end": 608
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 608,
    "end": 609
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 610,
    "end": 611
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 611,
    "end": 612
  },
  {
    "type": "Identifier",
    "value": "K",
    "start": 612,
    "end": 613
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 613,
    "end": 614
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 614,
    "end": 615
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 616,
    "end": 617
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 617,
    "end": 618
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 618,
    "end": 619
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 620,
    "end": 621
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 621,
    "end": 622
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 624,
    "end": 629
  },
  {
    "type": "Identifier",
    "value": "result4",
    "start": 630,
    "end": 637
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 638,
    "end": 639
  },
  {
    "type": "Identifier",
    "value": "test4",
    "start": 640,
    "end": 645
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 645,
    "end": 646
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 646,
    "end": 647
  },
  {
    "type": "String",
    "value": "\"1\"",
    "start": 647,
    "end": 650
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 650,
    "end": 651
  },
  {
    "type": "Numeric",
    "value": "2",
    "start": 652,
    "end": 653
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 653,
    "end": 654
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 654,
    "end": 655
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 655,
    "end": 656
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 658,
    "end": 665
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 666,
    "end": 674
  },
  {
    "type": "Identifier",
    "value": "test5",
    "start": 675,
    "end": 680
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 680,
    "end": 681
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 681,
    "end": 686
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 687,
    "end": 688
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 689,
    "end": 696
  },
  {
    "type": "Identifier",
    "value": "readonly",
    "start": 697,
    "end": 705
  },
  {
    "type": "Identifier",
    "value": "unknown",
    "start": 706,
    "end": 713
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 713,
    "end": 714
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 714,
    "end": 715
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 715,
    "end": 716
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 716,
    "end": 717
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 720,
    "end": 723
  },
  {
    "type": "Identifier",
    "value": "args",
    "start": 723,
    "end": 727
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 727,
    "end": 728
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 729,
    "end": 730
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 735,
    "end": 736
  },
  {
    "type": "Identifier",
    "value": "K",
    "start": 736,
    "end": 737
  },
  {
    "type": "Keyword",
    "value": "in",
    "start": 738,
    "end": 740
  },
  {
    "type": "Identifier",
    "value": "keyof",
    "start": 741,
    "end": 746
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 747,
    "end": 748
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 748,
    "end": 749
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 749,
    "end": 750
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 751,
    "end": 752
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 752,
    "end": 753
  },
  {
    "type": "Identifier",
    "value": "K",
    "start": 753,
    "end": 754
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 754,
    "end": 755
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 755,
    "end": 756
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 759,
    "end": 760
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 761,
    "end": 762
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 762,
    "end": 763
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 764,
    "end": 765
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 765,
    "end": 766
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 768,
    "end": 773
  },
  {
    "type": "Identifier",
    "value": "result5",
    "start": 774,
    "end": 781
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 782,
    "end": 783
  },
  {
    "type": "Identifier",
    "value": "test5",
    "start": 784,
    "end": 789
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 789,
    "end": 790
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 790,
    "end": 791
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 792,
    "end": 793
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 793,
    "end": 794
  },
  {
    "type": "String",
    "value": "\"foo\"",
    "start": 795,
    "end": 800
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 801,
    "end": 802
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 802,
    "end": 803
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 803,
    "end": 804
  }
]
```
