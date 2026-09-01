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
        "name": "X",
        "optional": false,
        "typeAnnotation": null,
        "start": 79,
        "end": 80
      },
      "typeParameters": null,
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
              "name": "propertyX",
              "optional": false,
              "typeAnnotation": null,
              "start": 83,
              "end": 92
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 94,
                "end": 97
              },
              "start": 92,
              "end": 97
            },
            "value": null,
            "computed": false,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": null,
            "start": 83,
            "end": 98
          },
          {
            "type": "PropertyDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "propertyX1",
              "optional": false,
              "typeAnnotation": null,
              "start": 99,
              "end": 109
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 111,
                "end": 117
              },
              "start": 109,
              "end": 117
            },
            "value": null,
            "computed": false,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": null,
            "start": 99,
            "end": 118
          },
          {
            "type": "PropertyDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "propertyX2",
              "optional": false,
              "typeAnnotation": null,
              "start": 119,
              "end": 129
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 131,
                "end": 137
              },
              "start": 129,
              "end": 137
            },
            "value": null,
            "computed": false,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": null,
            "start": 119,
            "end": 137
          }
        ],
        "start": 81,
        "end": 139
      },
      "abstract": false,
      "declare": false,
      "start": 73,
      "end": 139
    },
    {
      "type": "EmptyStatement",
      "start": 139,
      "end": 140
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "A",
        "optional": false,
        "typeAnnotation": null,
        "start": 147,
        "end": 148
      },
      "typeParameters": null,
      "superClass": {
        "type": "Identifier",
        "decorators": [],
        "name": "X",
        "optional": false,
        "typeAnnotation": null,
        "start": 157,
        "end": 158
      },
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
              "name": "propertyA",
              "optional": false,
              "typeAnnotation": null,
              "start": 161,
              "end": 170
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 172,
                "end": 178
              },
              "start": 170,
              "end": 178
            },
            "value": null,
            "computed": false,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": null,
            "start": 161,
            "end": 178
          }
        ],
        "start": 159,
        "end": 180
      },
      "abstract": false,
      "declare": false,
      "start": 141,
      "end": 180
    },
    {
      "type": "EmptyStatement",
      "start": 180,
      "end": 181
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "B",
        "optional": false,
        "typeAnnotation": null,
        "start": 188,
        "end": 189
      },
      "typeParameters": null,
      "superClass": {
        "type": "Identifier",
        "decorators": [],
        "name": "X",
        "optional": false,
        "typeAnnotation": null,
        "start": 198,
        "end": 199
      },
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
              "name": "propertyB",
              "optional": false,
              "typeAnnotation": null,
              "start": 202,
              "end": 211
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 213,
                "end": 219
              },
              "start": 211,
              "end": 219
            },
            "value": null,
            "computed": false,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": null,
            "start": 202,
            "end": 219
          }
        ],
        "start": 200,
        "end": 221
      },
      "abstract": false,
      "declare": false,
      "start": 182,
      "end": 221
    },
    {
      "type": "EmptyStatement",
      "start": 221,
      "end": 222
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
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "X",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 231,
                  "end": 232
                },
                "typeArguments": null,
                "start": 231,
                "end": 232
              },
              "start": 229,
              "end": 232
            },
            "start": 228,
            "end": 232
          },
          "init": null,
          "definite": false,
          "start": 228,
          "end": 232
        }
      ],
      "declare": false,
      "start": 224,
      "end": 233
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
                  "start": 241,
                  "end": 242
                },
                "typeArguments": null,
                "start": 241,
                "end": 242
              },
              "start": 239,
              "end": 242
            },
            "start": 238,
            "end": 242
          },
          "init": null,
          "definite": false,
          "start": 238,
          "end": 242
        }
      ],
      "declare": false,
      "start": 234,
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
            "name": "b",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "B",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 251,
                  "end": 252
                },
                "typeArguments": null,
                "start": 251,
                "end": 252
              },
              "start": 249,
              "end": 252
            },
            "start": 248,
            "end": 252
          },
          "init": null,
          "definite": false,
          "start": 248,
          "end": 252
        }
      ],
      "declare": false,
      "start": 244,
      "end": 253
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "ConditionalExpression",
        "test": {
          "type": "Literal",
          "value": true,
          "raw": "true",
          "start": 327,
          "end": 331
        },
        "consequent": {
          "type": "Identifier",
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": null,
          "start": 334,
          "end": 335
        },
        "alternate": {
          "type": "Identifier",
          "decorators": [],
          "name": "a",
          "optional": false,
          "typeAnnotation": null,
          "start": 338,
          "end": 339
        },
        "start": 327,
        "end": 339
      },
      "directive": null,
      "start": 327,
      "end": 340
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
            "name": "result1",
            "optional": false,
            "typeAnnotation": null,
            "start": 345,
            "end": 352
          },
          "init": {
            "type": "ConditionalExpression",
            "test": {
              "type": "Literal",
              "value": true,
              "raw": "true",
              "start": 355,
              "end": 359
            },
            "consequent": {
              "type": "Identifier",
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null,
              "start": 362,
              "end": 363
            },
            "alternate": {
              "type": "Identifier",
              "decorators": [],
              "name": "a",
              "optional": false,
              "typeAnnotation": null,
              "start": 366,
              "end": 367
            },
            "start": 355,
            "end": 367
          },
          "definite": false,
          "start": 345,
          "end": 367
        }
      ],
      "declare": false,
      "start": 341,
      "end": 368
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "ConditionalExpression",
        "test": {
          "type": "Literal",
          "value": true,
          "raw": "true",
          "start": 401,
          "end": 405
        },
        "consequent": {
          "type": "ObjectExpression",
          "properties": [],
          "start": 408,
          "end": 410
        },
        "alternate": {
          "type": "Literal",
          "value": 1,
          "raw": "1",
          "start": 413,
          "end": 414
        },
        "start": 401,
        "end": 414
      },
      "directive": null,
      "start": 401,
      "end": 415
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "ConditionalExpression",
        "test": {
          "type": "Literal",
          "value": true,
          "raw": "true",
          "start": 416,
          "end": 420
        },
        "consequent": {
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
                "start": 425,
                "end": 426
              },
              "value": {
                "type": "Literal",
                "value": 1,
                "raw": "1",
                "start": 428,
                "end": 429
              },
              "method": false,
              "shorthand": false,
              "computed": false,
              "optional": false,
              "start": 425,
              "end": 429
            }
          ],
          "start": 423,
          "end": 431
        },
        "alternate": {
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
                "start": 436,
                "end": 437
              },
              "value": {
                "type": "Literal",
                "value": 2,
                "raw": "2",
                "start": 439,
                "end": 440
              },
              "method": false,
              "shorthand": false,
              "computed": false,
              "optional": false,
              "start": 436,
              "end": 440
            },
            {
              "type": "Property",
              "kind": "init",
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "b",
                "optional": false,
                "typeAnnotation": null,
                "start": 442,
                "end": 443
              },
              "value": {
                "type": "Literal",
                "value": "string",
                "raw": "'string'",
                "start": 445,
                "end": 453
              },
              "method": false,
              "shorthand": false,
              "computed": false,
              "optional": false,
              "start": 442,
              "end": 453
            }
          ],
          "start": 434,
          "end": 455
        },
        "start": 416,
        "end": 455
      },
      "directive": null,
      "start": 416,
      "end": 456
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
            "name": "result2",
            "optional": false,
            "typeAnnotation": null,
            "start": 461,
            "end": 468
          },
          "init": {
            "type": "ConditionalExpression",
            "test": {
              "type": "Literal",
              "value": true,
              "raw": "true",
              "start": 471,
              "end": 475
            },
            "consequent": {
              "type": "ObjectExpression",
              "properties": [],
              "start": 478,
              "end": 480
            },
            "alternate": {
              "type": "Literal",
              "value": 1,
              "raw": "1",
              "start": 483,
              "end": 484
            },
            "start": 471,
            "end": 484
          },
          "definite": false,
          "start": 461,
          "end": 484
        }
      ],
      "declare": false,
      "start": 457,
      "end": 485
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
            "name": "result3",
            "optional": false,
            "typeAnnotation": null,
            "start": 490,
            "end": 497
          },
          "init": {
            "type": "ConditionalExpression",
            "test": {
              "type": "Literal",
              "value": true,
              "raw": "true",
              "start": 500,
              "end": 504
            },
            "consequent": {
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
                    "start": 509,
                    "end": 510
                  },
                  "value": {
                    "type": "Literal",
                    "value": 1,
                    "raw": "1",
                    "start": 512,
                    "end": 513
                  },
                  "method": false,
                  "shorthand": false,
                  "computed": false,
                  "optional": false,
                  "start": 509,
                  "end": 513
                }
              ],
              "start": 507,
              "end": 515
            },
            "alternate": {
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
                    "start": 520,
                    "end": 521
                  },
                  "value": {
                    "type": "Literal",
                    "value": 2,
                    "raw": "2",
                    "start": 523,
                    "end": 524
                  },
                  "method": false,
                  "shorthand": false,
                  "computed": false,
                  "optional": false,
                  "start": 520,
                  "end": 524
                },
                {
                  "type": "Property",
                  "kind": "init",
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "b",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 526,
                    "end": 527
                  },
                  "value": {
                    "type": "Literal",
                    "value": "string",
                    "raw": "'string'",
                    "start": 529,
                    "end": 537
                  },
                  "method": false,
                  "shorthand": false,
                  "computed": false,
                  "optional": false,
                  "start": 526,
                  "end": 537
                }
              ],
              "start": 518,
              "end": 539
            },
            "start": 500,
            "end": 539
          },
          "definite": false,
          "start": 490,
          "end": 539
        }
      ],
      "declare": false,
      "start": 486,
      "end": 540
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
            "name": "resultIsX1",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "X",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 579,
                  "end": 580
                },
                "typeArguments": null,
                "start": 579,
                "end": 580
              },
              "start": 577,
              "end": 580
            },
            "start": 567,
            "end": 580
          },
          "init": {
            "type": "ConditionalExpression",
            "test": {
              "type": "Literal",
              "value": true,
              "raw": "true",
              "start": 583,
              "end": 587
            },
            "consequent": {
              "type": "Identifier",
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null,
              "start": 590,
              "end": 591
            },
            "alternate": {
              "type": "Identifier",
              "decorators": [],
              "name": "a",
              "optional": false,
              "typeAnnotation": null,
              "start": 594,
              "end": 595
            },
            "start": 583,
            "end": 595
          },
          "definite": false,
          "start": 567,
          "end": 595
        }
      ],
      "declare": false,
      "start": 563,
      "end": 596
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
            "name": "result4",
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
                    "name": "t",
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
                          "start": 614,
                          "end": 615
                        },
                        "typeArguments": null,
                        "start": 614,
                        "end": 615
                      },
                      "start": 612,
                      "end": 615
                    },
                    "start": 611,
                    "end": 615
                  }
                ],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSAnyKeyword",
                    "start": 620,
                    "end": 623
                  },
                  "start": 617,
                  "end": 623
                },
                "start": 610,
                "end": 623
              },
              "start": 608,
              "end": 623
            },
            "start": 601,
            "end": 623
          },
          "init": {
            "type": "ConditionalExpression",
            "test": {
              "type": "Literal",
              "value": true,
              "raw": "true",
              "start": 626,
              "end": 630
            },
            "consequent": {
              "type": "ArrowFunctionExpression",
              "expression": true,
              "async": false,
              "typeParameters": null,
              "params": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "m",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 634,
                  "end": 635
                }
              ],
              "returnType": null,
              "body": {
                "type": "MemberExpression",
                "object": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "m",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 640,
                  "end": 641
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "propertyX",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 642,
                  "end": 651
                },
                "optional": false,
                "computed": false,
                "start": 640,
                "end": 651
              },
              "id": null,
              "generator": false,
              "start": 633,
              "end": 651
            },
            "alternate": {
              "type": "ArrowFunctionExpression",
              "expression": true,
              "async": false,
              "typeParameters": null,
              "params": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "n",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 655,
                  "end": 656
                }
              ],
              "returnType": null,
              "body": {
                "type": "MemberExpression",
                "object": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "n",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 661,
                  "end": 662
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "propertyA",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 663,
                  "end": 672
                },
                "optional": false,
                "computed": false,
                "start": 661,
                "end": 672
              },
              "id": null,
              "generator": false,
              "start": 654,
              "end": 672
            },
            "start": 626,
            "end": 672
          },
          "definite": false,
          "start": 601,
          "end": 672
        }
      ],
      "declare": false,
      "start": 597,
      "end": 673
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "ConditionalExpression",
        "test": {
          "type": "Literal",
          "value": true,
          "raw": "true",
          "start": 747,
          "end": 751
        },
        "consequent": {
          "type": "Identifier",
          "decorators": [],
          "name": "a",
          "optional": false,
          "typeAnnotation": null,
          "start": 754,
          "end": 755
        },
        "alternate": {
          "type": "Identifier",
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": null,
          "start": 758,
          "end": 759
        },
        "start": 747,
        "end": 759
      },
      "directive": null,
      "start": 747,
      "end": 760
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
            "name": "result5",
            "optional": false,
            "typeAnnotation": null,
            "start": 765,
            "end": 772
          },
          "init": {
            "type": "ConditionalExpression",
            "test": {
              "type": "Literal",
              "value": true,
              "raw": "true",
              "start": 775,
              "end": 779
            },
            "consequent": {
              "type": "Identifier",
              "decorators": [],
              "name": "a",
              "optional": false,
              "typeAnnotation": null,
              "start": 782,
              "end": 783
            },
            "alternate": {
              "type": "Identifier",
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null,
              "start": 786,
              "end": 787
            },
            "start": 775,
            "end": 787
          },
          "definite": false,
          "start": 765,
          "end": 787
        }
      ],
      "declare": false,
      "start": 761,
      "end": 788
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "ConditionalExpression",
        "test": {
          "type": "Literal",
          "value": true,
          "raw": "true",
          "start": 821,
          "end": 825
        },
        "consequent": {
          "type": "Literal",
          "value": 1,
          "raw": "1",
          "start": 828,
          "end": 829
        },
        "alternate": {
          "type": "ObjectExpression",
          "properties": [],
          "start": 832,
          "end": 834
        },
        "start": 821,
        "end": 834
      },
      "directive": null,
      "start": 821,
      "end": 835
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "ConditionalExpression",
        "test": {
          "type": "Literal",
          "value": true,
          "raw": "true",
          "start": 836,
          "end": 840
        },
        "consequent": {
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
                "start": 845,
                "end": 846
              },
              "value": {
                "type": "Literal",
                "value": 2,
                "raw": "2",
                "start": 848,
                "end": 849
              },
              "method": false,
              "shorthand": false,
              "computed": false,
              "optional": false,
              "start": 845,
              "end": 849
            },
            {
              "type": "Property",
              "kind": "init",
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "b",
                "optional": false,
                "typeAnnotation": null,
                "start": 851,
                "end": 852
              },
              "value": {
                "type": "Literal",
                "value": "string",
                "raw": "'string'",
                "start": 854,
                "end": 862
              },
              "method": false,
              "shorthand": false,
              "computed": false,
              "optional": false,
              "start": 851,
              "end": 862
            }
          ],
          "start": 843,
          "end": 864
        },
        "alternate": {
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
                "start": 869,
                "end": 870
              },
              "value": {
                "type": "Literal",
                "value": 1,
                "raw": "1",
                "start": 872,
                "end": 873
              },
              "method": false,
              "shorthand": false,
              "computed": false,
              "optional": false,
              "start": 869,
              "end": 873
            }
          ],
          "start": 867,
          "end": 875
        },
        "start": 836,
        "end": 875
      },
      "directive": null,
      "start": 836,
      "end": 876
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
            "name": "result6",
            "optional": false,
            "typeAnnotation": null,
            "start": 881,
            "end": 888
          },
          "init": {
            "type": "ConditionalExpression",
            "test": {
              "type": "Literal",
              "value": true,
              "raw": "true",
              "start": 891,
              "end": 895
            },
            "consequent": {
              "type": "Literal",
              "value": 1,
              "raw": "1",
              "start": 898,
              "end": 899
            },
            "alternate": {
              "type": "ObjectExpression",
              "properties": [],
              "start": 902,
              "end": 904
            },
            "start": 891,
            "end": 904
          },
          "definite": false,
          "start": 881,
          "end": 904
        }
      ],
      "declare": false,
      "start": 877,
      "end": 905
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
            "name": "result7",
            "optional": false,
            "typeAnnotation": null,
            "start": 910,
            "end": 917
          },
          "init": {
            "type": "ConditionalExpression",
            "test": {
              "type": "Literal",
              "value": true,
              "raw": "true",
              "start": 920,
              "end": 924
            },
            "consequent": {
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
                    "start": 929,
                    "end": 930
                  },
                  "value": {
                    "type": "Literal",
                    "value": 2,
                    "raw": "2",
                    "start": 932,
                    "end": 933
                  },
                  "method": false,
                  "shorthand": false,
                  "computed": false,
                  "optional": false,
                  "start": 929,
                  "end": 933
                },
                {
                  "type": "Property",
                  "kind": "init",
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "b",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 935,
                    "end": 936
                  },
                  "value": {
                    "type": "Literal",
                    "value": "string",
                    "raw": "'string'",
                    "start": 938,
                    "end": 946
                  },
                  "method": false,
                  "shorthand": false,
                  "computed": false,
                  "optional": false,
                  "start": 935,
                  "end": 946
                }
              ],
              "start": 927,
              "end": 948
            },
            "alternate": {
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
                    "start": 953,
                    "end": 954
                  },
                  "value": {
                    "type": "Literal",
                    "value": 1,
                    "raw": "1",
                    "start": 956,
                    "end": 957
                  },
                  "method": false,
                  "shorthand": false,
                  "computed": false,
                  "optional": false,
                  "start": 953,
                  "end": 957
                }
              ],
              "start": 951,
              "end": 959
            },
            "start": 920,
            "end": 959
          },
          "definite": false,
          "start": 910,
          "end": 959
        }
      ],
      "declare": false,
      "start": 906,
      "end": 960
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
            "name": "resultIsX2",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "X",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 999,
                  "end": 1000
                },
                "typeArguments": null,
                "start": 999,
                "end": 1000
              },
              "start": 997,
              "end": 1000
            },
            "start": 987,
            "end": 1000
          },
          "init": {
            "type": "ConditionalExpression",
            "test": {
              "type": "Literal",
              "value": true,
              "raw": "true",
              "start": 1003,
              "end": 1007
            },
            "consequent": {
              "type": "Identifier",
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null,
              "start": 1010,
              "end": 1011
            },
            "alternate": {
              "type": "Identifier",
              "decorators": [],
              "name": "a",
              "optional": false,
              "typeAnnotation": null,
              "start": 1014,
              "end": 1015
            },
            "start": 1003,
            "end": 1015
          },
          "definite": false,
          "start": 987,
          "end": 1015
        }
      ],
      "declare": false,
      "start": 983,
      "end": 1016
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
            "name": "result8",
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
                    "name": "t",
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
                          "start": 1034,
                          "end": 1035
                        },
                        "typeArguments": null,
                        "start": 1034,
                        "end": 1035
                      },
                      "start": 1032,
                      "end": 1035
                    },
                    "start": 1031,
                    "end": 1035
                  }
                ],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSAnyKeyword",
                    "start": 1040,
                    "end": 1043
                  },
                  "start": 1037,
                  "end": 1043
                },
                "start": 1030,
                "end": 1043
              },
              "start": 1028,
              "end": 1043
            },
            "start": 1021,
            "end": 1043
          },
          "init": {
            "type": "ConditionalExpression",
            "test": {
              "type": "Literal",
              "value": true,
              "raw": "true",
              "start": 1046,
              "end": 1050
            },
            "consequent": {
              "type": "ArrowFunctionExpression",
              "expression": true,
              "async": false,
              "typeParameters": null,
              "params": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "m",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1054,
                  "end": 1055
                }
              ],
              "returnType": null,
              "body": {
                "type": "MemberExpression",
                "object": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "m",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1060,
                  "end": 1061
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "propertyA",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1062,
                  "end": 1071
                },
                "optional": false,
                "computed": false,
                "start": 1060,
                "end": 1071
              },
              "id": null,
              "generator": false,
              "start": 1053,
              "end": 1071
            },
            "alternate": {
              "type": "ArrowFunctionExpression",
              "expression": true,
              "async": false,
              "typeParameters": null,
              "params": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "n",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1075,
                  "end": 1076
                }
              ],
              "returnType": null,
              "body": {
                "type": "MemberExpression",
                "object": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "n",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1081,
                  "end": 1082
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "propertyX",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1083,
                  "end": 1092
                },
                "optional": false,
                "computed": false,
                "start": 1081,
                "end": 1092
              },
              "id": null,
              "generator": false,
              "start": 1074,
              "end": 1092
            },
            "start": 1046,
            "end": 1092
          },
          "definite": false,
          "start": 1021,
          "end": 1092
        }
      ],
      "declare": false,
      "start": 1017,
      "end": 1093
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
            "name": "resultIsX3",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "X",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1186,
                  "end": 1187
                },
                "typeArguments": null,
                "start": 1186,
                "end": 1187
              },
              "start": 1184,
              "end": 1187
            },
            "start": 1174,
            "end": 1187
          },
          "init": {
            "type": "ConditionalExpression",
            "test": {
              "type": "Literal",
              "value": true,
              "raw": "true",
              "start": 1190,
              "end": 1194
            },
            "consequent": {
              "type": "Identifier",
              "decorators": [],
              "name": "a",
              "optional": false,
              "typeAnnotation": null,
              "start": 1197,
              "end": 1198
            },
            "alternate": {
              "type": "Identifier",
              "decorators": [],
              "name": "b",
              "optional": false,
              "typeAnnotation": null,
              "start": 1201,
              "end": 1202
            },
            "start": 1190,
            "end": 1202
          },
          "definite": false,
          "start": 1174,
          "end": 1202
        }
      ],
      "declare": false,
      "start": 1170,
      "end": 1203
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
            "name": "result10",
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
                    "name": "t",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "X",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 1222,
                          "end": 1223
                        },
                        "typeArguments": null,
                        "start": 1222,
                        "end": 1223
                      },
                      "start": 1220,
                      "end": 1223
                    },
                    "start": 1219,
                    "end": 1223
                  }
                ],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSAnyKeyword",
                    "start": 1228,
                    "end": 1231
                  },
                  "start": 1225,
                  "end": 1231
                },
                "start": 1218,
                "end": 1231
              },
              "start": 1216,
              "end": 1231
            },
            "start": 1208,
            "end": 1231
          },
          "init": {
            "type": "ConditionalExpression",
            "test": {
              "type": "Literal",
              "value": true,
              "raw": "true",
              "start": 1234,
              "end": 1238
            },
            "consequent": {
              "type": "ArrowFunctionExpression",
              "expression": true,
              "async": false,
              "typeParameters": null,
              "params": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "m",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1242,
                  "end": 1243
                }
              ],
              "returnType": null,
              "body": {
                "type": "MemberExpression",
                "object": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "m",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1248,
                  "end": 1249
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "propertyX1",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1250,
                  "end": 1260
                },
                "optional": false,
                "computed": false,
                "start": 1248,
                "end": 1260
              },
              "id": null,
              "generator": false,
              "start": 1241,
              "end": 1260
            },
            "alternate": {
              "type": "ArrowFunctionExpression",
              "expression": true,
              "async": false,
              "typeParameters": null,
              "params": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "n",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1264,
                  "end": 1265
                }
              ],
              "returnType": null,
              "body": {
                "type": "MemberExpression",
                "object": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "n",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1270,
                  "end": 1271
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "propertyX2",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1272,
                  "end": 1282
                },
                "optional": false,
                "computed": false,
                "start": 1270,
                "end": 1282
              },
              "id": null,
              "generator": false,
              "start": 1263,
              "end": 1282
            },
            "start": 1234,
            "end": 1282
          },
          "definite": false,
          "start": 1208,
          "end": 1282
        }
      ],
      "declare": false,
      "start": 1204,
      "end": 1283
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
            "name": "result11",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 1330,
                "end": 1333
              },
              "start": 1328,
              "end": 1333
            },
            "start": 1320,
            "end": 1333
          },
          "init": {
            "type": "ConditionalExpression",
            "test": {
              "type": "Literal",
              "value": true,
              "raw": "true",
              "start": 1336,
              "end": 1340
            },
            "consequent": {
              "type": "Literal",
              "value": 1,
              "raw": "1",
              "start": 1343,
              "end": 1344
            },
            "alternate": {
              "type": "Literal",
              "value": "string",
              "raw": "'string'",
              "start": 1347,
              "end": 1355
            },
            "start": 1336,
            "end": 1355
          },
          "definite": false,
          "start": 1320,
          "end": 1355
        }
      ],
      "declare": false,
      "start": 1316,
      "end": 1356
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 73,
  "end": 1356
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Keyword",
    "value": "class",
    "start": 73,
    "end": 78
  },
  {
    "type": "Identifier",
    "value": "X",
    "start": 79,
    "end": 80
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 81,
    "end": 82
  },
  {
    "type": "Identifier",
    "value": "propertyX",
    "start": 83,
    "end": 92
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 92,
    "end": 93
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 94,
    "end": 97
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 97,
    "end": 98
  },
  {
    "type": "Identifier",
    "value": "propertyX1",
    "start": 99,
    "end": 109
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 109,
    "end": 110
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 111,
    "end": 117
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 117,
    "end": 118
  },
  {
    "type": "Identifier",
    "value": "propertyX2",
    "start": 119,
    "end": 129
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 129,
    "end": 130
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 131,
    "end": 137
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 138,
    "end": 139
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 139,
    "end": 140
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 141,
    "end": 146
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 147,
    "end": 148
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 149,
    "end": 156
  },
  {
    "type": "Identifier",
    "value": "X",
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
    "type": "Identifier",
    "value": "propertyA",
    "start": 161,
    "end": 170
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 170,
    "end": 171
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 172,
    "end": 178
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 179,
    "end": 180
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 180,
    "end": 181
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 182,
    "end": 187
  },
  {
    "type": "Identifier",
    "value": "B",
    "start": 188,
    "end": 189
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 190,
    "end": 197
  },
  {
    "type": "Identifier",
    "value": "X",
    "start": 198,
    "end": 199
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 200,
    "end": 201
  },
  {
    "type": "Identifier",
    "value": "propertyB",
    "start": 202,
    "end": 211
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 211,
    "end": 212
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 213,
    "end": 219
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 220,
    "end": 221
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 221,
    "end": 222
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 224,
    "end": 227
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 228,
    "end": 229
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 229,
    "end": 230
  },
  {
    "type": "Identifier",
    "value": "X",
    "start": 231,
    "end": 232
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 232,
    "end": 233
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 234,
    "end": 237
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 238,
    "end": 239
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 239,
    "end": 240
  },
  {
    "type": "Identifier",
    "value": "A",
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
    "value": "b",
    "start": 248,
    "end": 249
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 249,
    "end": 250
  },
  {
    "type": "Identifier",
    "value": "B",
    "start": 251,
    "end": 252
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 252,
    "end": 253
  },
  {
    "type": "Boolean",
    "value": "true",
    "start": 327,
    "end": 331
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 332,
    "end": 333
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 334,
    "end": 335
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 336,
    "end": 337
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 338,
    "end": 339
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 339,
    "end": 340
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 341,
    "end": 344
  },
  {
    "type": "Identifier",
    "value": "result1",
    "start": 345,
    "end": 352
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 353,
    "end": 354
  },
  {
    "type": "Boolean",
    "value": "true",
    "start": 355,
    "end": 359
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 360,
    "end": 361
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 362,
    "end": 363
  },
  {
    "type": "Punctuator",
    "value": ":",
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
  },
  {
    "type": "Boolean",
    "value": "true",
    "start": 401,
    "end": 405
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 406,
    "end": 407
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 408,
    "end": 409
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 409,
    "end": 410
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 411,
    "end": 412
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 413,
    "end": 414
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 414,
    "end": 415
  },
  {
    "type": "Boolean",
    "value": "true",
    "start": 416,
    "end": 420
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 421,
    "end": 422
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 423,
    "end": 424
  },
  {
    "type": "Identifier",
    "value": "a",
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
    "type": "Numeric",
    "value": "1",
    "start": 428,
    "end": 429
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 430,
    "end": 431
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 432,
    "end": 433
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 434,
    "end": 435
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 436,
    "end": 437
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 437,
    "end": 438
  },
  {
    "type": "Numeric",
    "value": "2",
    "start": 439,
    "end": 440
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 440,
    "end": 441
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 442,
    "end": 443
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 443,
    "end": 444
  },
  {
    "type": "String",
    "value": "'string'",
    "start": 445,
    "end": 453
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 454,
    "end": 455
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 455,
    "end": 456
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 457,
    "end": 460
  },
  {
    "type": "Identifier",
    "value": "result2",
    "start": 461,
    "end": 468
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 469,
    "end": 470
  },
  {
    "type": "Boolean",
    "value": "true",
    "start": 471,
    "end": 475
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 476,
    "end": 477
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 478,
    "end": 479
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 479,
    "end": 480
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 481,
    "end": 482
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 483,
    "end": 484
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 484,
    "end": 485
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 486,
    "end": 489
  },
  {
    "type": "Identifier",
    "value": "result3",
    "start": 490,
    "end": 497
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 498,
    "end": 499
  },
  {
    "type": "Boolean",
    "value": "true",
    "start": 500,
    "end": 504
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 505,
    "end": 506
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 507,
    "end": 508
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 509,
    "end": 510
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 510,
    "end": 511
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 512,
    "end": 513
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 514,
    "end": 515
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 516,
    "end": 517
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 518,
    "end": 519
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 520,
    "end": 521
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 521,
    "end": 522
  },
  {
    "type": "Numeric",
    "value": "2",
    "start": 523,
    "end": 524
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 524,
    "end": 525
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 526,
    "end": 527
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 527,
    "end": 528
  },
  {
    "type": "String",
    "value": "'string'",
    "start": 529,
    "end": 537
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 538,
    "end": 539
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 539,
    "end": 540
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 563,
    "end": 566
  },
  {
    "type": "Identifier",
    "value": "resultIsX1",
    "start": 567,
    "end": 577
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 577,
    "end": 578
  },
  {
    "type": "Identifier",
    "value": "X",
    "start": 579,
    "end": 580
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 581,
    "end": 582
  },
  {
    "type": "Boolean",
    "value": "true",
    "start": 583,
    "end": 587
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 588,
    "end": 589
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 590,
    "end": 591
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 592,
    "end": 593
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 594,
    "end": 595
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 595,
    "end": 596
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 597,
    "end": 600
  },
  {
    "type": "Identifier",
    "value": "result4",
    "start": 601,
    "end": 608
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 608,
    "end": 609
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 610,
    "end": 611
  },
  {
    "type": "Identifier",
    "value": "t",
    "start": 611,
    "end": 612
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 612,
    "end": 613
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 614,
    "end": 615
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 615,
    "end": 616
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 617,
    "end": 619
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 620,
    "end": 623
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 624,
    "end": 625
  },
  {
    "type": "Boolean",
    "value": "true",
    "start": 626,
    "end": 630
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 631,
    "end": 632
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 633,
    "end": 634
  },
  {
    "type": "Identifier",
    "value": "m",
    "start": 634,
    "end": 635
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 635,
    "end": 636
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 637,
    "end": 639
  },
  {
    "type": "Identifier",
    "value": "m",
    "start": 640,
    "end": 641
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 641,
    "end": 642
  },
  {
    "type": "Identifier",
    "value": "propertyX",
    "start": 642,
    "end": 651
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 652,
    "end": 653
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 654,
    "end": 655
  },
  {
    "type": "Identifier",
    "value": "n",
    "start": 655,
    "end": 656
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 656,
    "end": 657
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 658,
    "end": 660
  },
  {
    "type": "Identifier",
    "value": "n",
    "start": 661,
    "end": 662
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 662,
    "end": 663
  },
  {
    "type": "Identifier",
    "value": "propertyA",
    "start": 663,
    "end": 672
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 672,
    "end": 673
  },
  {
    "type": "Boolean",
    "value": "true",
    "start": 747,
    "end": 751
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 752,
    "end": 753
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 754,
    "end": 755
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 756,
    "end": 757
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 758,
    "end": 759
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 759,
    "end": 760
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 761,
    "end": 764
  },
  {
    "type": "Identifier",
    "value": "result5",
    "start": 765,
    "end": 772
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 773,
    "end": 774
  },
  {
    "type": "Boolean",
    "value": "true",
    "start": 775,
    "end": 779
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 780,
    "end": 781
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 782,
    "end": 783
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 784,
    "end": 785
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 786,
    "end": 787
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 787,
    "end": 788
  },
  {
    "type": "Boolean",
    "value": "true",
    "start": 821,
    "end": 825
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 826,
    "end": 827
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 828,
    "end": 829
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 830,
    "end": 831
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 832,
    "end": 833
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 833,
    "end": 834
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 834,
    "end": 835
  },
  {
    "type": "Boolean",
    "value": "true",
    "start": 836,
    "end": 840
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 841,
    "end": 842
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 843,
    "end": 844
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 845,
    "end": 846
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 846,
    "end": 847
  },
  {
    "type": "Numeric",
    "value": "2",
    "start": 848,
    "end": 849
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 849,
    "end": 850
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 851,
    "end": 852
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 852,
    "end": 853
  },
  {
    "type": "String",
    "value": "'string'",
    "start": 854,
    "end": 862
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 863,
    "end": 864
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 865,
    "end": 866
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 867,
    "end": 868
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 869,
    "end": 870
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 870,
    "end": 871
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 872,
    "end": 873
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 874,
    "end": 875
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 875,
    "end": 876
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 877,
    "end": 880
  },
  {
    "type": "Identifier",
    "value": "result6",
    "start": 881,
    "end": 888
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 889,
    "end": 890
  },
  {
    "type": "Boolean",
    "value": "true",
    "start": 891,
    "end": 895
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 896,
    "end": 897
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 898,
    "end": 899
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 900,
    "end": 901
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 902,
    "end": 903
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 903,
    "end": 904
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 904,
    "end": 905
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 906,
    "end": 909
  },
  {
    "type": "Identifier",
    "value": "result7",
    "start": 910,
    "end": 917
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 918,
    "end": 919
  },
  {
    "type": "Boolean",
    "value": "true",
    "start": 920,
    "end": 924
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 925,
    "end": 926
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 927,
    "end": 928
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 929,
    "end": 930
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 930,
    "end": 931
  },
  {
    "type": "Numeric",
    "value": "2",
    "start": 932,
    "end": 933
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 933,
    "end": 934
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 935,
    "end": 936
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 936,
    "end": 937
  },
  {
    "type": "String",
    "value": "'string'",
    "start": 938,
    "end": 946
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 947,
    "end": 948
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 949,
    "end": 950
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 951,
    "end": 952
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 953,
    "end": 954
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 954,
    "end": 955
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 956,
    "end": 957
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 958,
    "end": 959
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 959,
    "end": 960
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 983,
    "end": 986
  },
  {
    "type": "Identifier",
    "value": "resultIsX2",
    "start": 987,
    "end": 997
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 997,
    "end": 998
  },
  {
    "type": "Identifier",
    "value": "X",
    "start": 999,
    "end": 1000
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1001,
    "end": 1002
  },
  {
    "type": "Boolean",
    "value": "true",
    "start": 1003,
    "end": 1007
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 1008,
    "end": 1009
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1010,
    "end": 1011
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1012,
    "end": 1013
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 1014,
    "end": 1015
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1015,
    "end": 1016
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 1017,
    "end": 1020
  },
  {
    "type": "Identifier",
    "value": "result8",
    "start": 1021,
    "end": 1028
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1028,
    "end": 1029
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1030,
    "end": 1031
  },
  {
    "type": "Identifier",
    "value": "t",
    "start": 1031,
    "end": 1032
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1032,
    "end": 1033
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 1034,
    "end": 1035
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1035,
    "end": 1036
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 1037,
    "end": 1039
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 1040,
    "end": 1043
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1044,
    "end": 1045
  },
  {
    "type": "Boolean",
    "value": "true",
    "start": 1046,
    "end": 1050
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 1051,
    "end": 1052
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1053,
    "end": 1054
  },
  {
    "type": "Identifier",
    "value": "m",
    "start": 1054,
    "end": 1055
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1055,
    "end": 1056
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 1057,
    "end": 1059
  },
  {
    "type": "Identifier",
    "value": "m",
    "start": 1060,
    "end": 1061
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1061,
    "end": 1062
  },
  {
    "type": "Identifier",
    "value": "propertyA",
    "start": 1062,
    "end": 1071
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1072,
    "end": 1073
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1074,
    "end": 1075
  },
  {
    "type": "Identifier",
    "value": "n",
    "start": 1075,
    "end": 1076
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1076,
    "end": 1077
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 1078,
    "end": 1080
  },
  {
    "type": "Identifier",
    "value": "n",
    "start": 1081,
    "end": 1082
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1082,
    "end": 1083
  },
  {
    "type": "Identifier",
    "value": "propertyX",
    "start": 1083,
    "end": 1092
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1092,
    "end": 1093
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 1170,
    "end": 1173
  },
  {
    "type": "Identifier",
    "value": "resultIsX3",
    "start": 1174,
    "end": 1184
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1184,
    "end": 1185
  },
  {
    "type": "Identifier",
    "value": "X",
    "start": 1186,
    "end": 1187
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1188,
    "end": 1189
  },
  {
    "type": "Boolean",
    "value": "true",
    "start": 1190,
    "end": 1194
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 1195,
    "end": 1196
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 1197,
    "end": 1198
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1199,
    "end": 1200
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 1201,
    "end": 1202
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1202,
    "end": 1203
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 1204,
    "end": 1207
  },
  {
    "type": "Identifier",
    "value": "result10",
    "start": 1208,
    "end": 1216
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1216,
    "end": 1217
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1218,
    "end": 1219
  },
  {
    "type": "Identifier",
    "value": "t",
    "start": 1219,
    "end": 1220
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1220,
    "end": 1221
  },
  {
    "type": "Identifier",
    "value": "X",
    "start": 1222,
    "end": 1223
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1223,
    "end": 1224
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 1225,
    "end": 1227
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 1228,
    "end": 1231
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1232,
    "end": 1233
  },
  {
    "type": "Boolean",
    "value": "true",
    "start": 1234,
    "end": 1238
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 1239,
    "end": 1240
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1241,
    "end": 1242
  },
  {
    "type": "Identifier",
    "value": "m",
    "start": 1242,
    "end": 1243
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1243,
    "end": 1244
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 1245,
    "end": 1247
  },
  {
    "type": "Identifier",
    "value": "m",
    "start": 1248,
    "end": 1249
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1249,
    "end": 1250
  },
  {
    "type": "Identifier",
    "value": "propertyX1",
    "start": 1250,
    "end": 1260
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1261,
    "end": 1262
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1263,
    "end": 1264
  },
  {
    "type": "Identifier",
    "value": "n",
    "start": 1264,
    "end": 1265
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1265,
    "end": 1266
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 1267,
    "end": 1269
  },
  {
    "type": "Identifier",
    "value": "n",
    "start": 1270,
    "end": 1271
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1271,
    "end": 1272
  },
  {
    "type": "Identifier",
    "value": "propertyX2",
    "start": 1272,
    "end": 1282
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1282,
    "end": 1283
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 1316,
    "end": 1319
  },
  {
    "type": "Identifier",
    "value": "result11",
    "start": 1320,
    "end": 1328
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1328,
    "end": 1329
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 1330,
    "end": 1333
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1334,
    "end": 1335
  },
  {
    "type": "Boolean",
    "value": "true",
    "start": 1336,
    "end": 1340
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 1341,
    "end": 1342
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 1343,
    "end": 1344
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1345,
    "end": 1346
  },
  {
    "type": "String",
    "value": "'string'",
    "start": 1347,
    "end": 1355
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1355,
    "end": 1356
  }
]
```
