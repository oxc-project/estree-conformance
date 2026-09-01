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
        "name": "C1",
        "optional": false,
        "typeAnnotation": null,
        "start": 6,
        "end": 8
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
              "name": "p1",
              "optional": false,
              "typeAnnotation": null,
              "start": 15,
              "end": 17
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 19,
                "end": 25
              },
              "start": 17,
              "end": 25
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
            "start": 15,
            "end": 26
          }
        ],
        "start": 9,
        "end": 28
      },
      "abstract": false,
      "declare": false,
      "start": 0,
      "end": 28
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "C2",
        "optional": false,
        "typeAnnotation": null,
        "start": 35,
        "end": 37
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
              "name": "p2",
              "optional": false,
              "typeAnnotation": null,
              "start": 44,
              "end": 46
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 48,
                "end": 54
              },
              "start": 46,
              "end": 54
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
            "start": 44,
            "end": 55
          }
        ],
        "start": 38,
        "end": 57
      },
      "abstract": false,
      "declare": false,
      "start": 29,
      "end": 57
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "D1",
        "optional": false,
        "typeAnnotation": null,
        "start": 64,
        "end": 66
      },
      "typeParameters": null,
      "superClass": {
        "type": "Identifier",
        "decorators": [],
        "name": "C1",
        "optional": false,
        "typeAnnotation": null,
        "start": 75,
        "end": 77
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
              "name": "p3",
              "optional": false,
              "typeAnnotation": null,
              "start": 84,
              "end": 86
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 88,
                "end": 94
              },
              "start": 86,
              "end": 94
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
            "start": 84,
            "end": 95
          }
        ],
        "start": 78,
        "end": 97
      },
      "abstract": false,
      "declare": false,
      "start": 58,
      "end": 97
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
            "name": "str",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 107,
                "end": 113
              },
              "start": 105,
              "end": 113
            },
            "start": 102,
            "end": 113
          },
          "init": null,
          "definite": false,
          "start": 102,
          "end": 113
        }
      ],
      "declare": false,
      "start": 98,
      "end": 114
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
            "name": "num",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 124,
                "end": 130
              },
              "start": 122,
              "end": 130
            },
            "start": 119,
            "end": 130
          },
          "init": null,
          "definite": false,
          "start": 119,
          "end": 130
        }
      ],
      "declare": false,
      "start": 115,
      "end": 131
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
            "name": "strOrNum",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSUnionType",
                "types": [
                  {
                    "type": "TSStringKeyword",
                    "start": 146,
                    "end": 152
                  },
                  {
                    "type": "TSNumberKeyword",
                    "start": 155,
                    "end": 161
                  }
                ],
                "start": 146,
                "end": 161
              },
              "start": 144,
              "end": 161
            },
            "start": 136,
            "end": 161
          },
          "init": null,
          "definite": false,
          "start": 136,
          "end": 161
        }
      ],
      "declare": false,
      "start": 132,
      "end": 162
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "isC1",
        "optional": false,
        "typeAnnotation": null,
        "start": 173,
        "end": 177
      },
      "generator": false,
      "async": false,
      "declare": false,
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
              "type": "TSAnyKeyword",
              "start": 181,
              "end": 184
            },
            "start": 179,
            "end": 184
          },
          "start": 178,
          "end": 184
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSTypePredicate",
          "parameterName": {
            "type": "Identifier",
            "decorators": [],
            "name": "x",
            "optional": false,
            "typeAnnotation": null,
            "start": 187,
            "end": 188
          },
          "asserts": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "C1",
                "optional": false,
                "typeAnnotation": null,
                "start": 192,
                "end": 194
              },
              "typeArguments": null,
              "start": 192,
              "end": 194
            },
            "start": 192,
            "end": 194
          },
          "start": 187,
          "end": 194
        },
        "start": 185,
        "end": 194
      },
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ReturnStatement",
            "argument": {
              "type": "Literal",
              "value": true,
              "raw": "true",
              "start": 208,
              "end": 212
            },
            "start": 201,
            "end": 213
          }
        ],
        "start": 195,
        "end": 215
      },
      "expression": false,
      "start": 164,
      "end": 215
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "isC2",
        "optional": false,
        "typeAnnotation": null,
        "start": 226,
        "end": 230
      },
      "generator": false,
      "async": false,
      "declare": false,
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
              "type": "TSAnyKeyword",
              "start": 234,
              "end": 237
            },
            "start": 232,
            "end": 237
          },
          "start": 231,
          "end": 237
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSTypePredicate",
          "parameterName": {
            "type": "Identifier",
            "decorators": [],
            "name": "x",
            "optional": false,
            "typeAnnotation": null,
            "start": 240,
            "end": 241
          },
          "asserts": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "C2",
                "optional": false,
                "typeAnnotation": null,
                "start": 245,
                "end": 247
              },
              "typeArguments": null,
              "start": 245,
              "end": 247
            },
            "start": 245,
            "end": 247
          },
          "start": 240,
          "end": 247
        },
        "start": 238,
        "end": 247
      },
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ReturnStatement",
            "argument": {
              "type": "Literal",
              "value": true,
              "raw": "true",
              "start": 261,
              "end": 265
            },
            "start": 254,
            "end": 266
          }
        ],
        "start": 248,
        "end": 268
      },
      "expression": false,
      "start": 217,
      "end": 268
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "isD1",
        "optional": false,
        "typeAnnotation": null,
        "start": 279,
        "end": 283
      },
      "generator": false,
      "async": false,
      "declare": false,
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
              "type": "TSAnyKeyword",
              "start": 287,
              "end": 290
            },
            "start": 285,
            "end": 290
          },
          "start": 284,
          "end": 290
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSTypePredicate",
          "parameterName": {
            "type": "Identifier",
            "decorators": [],
            "name": "x",
            "optional": false,
            "typeAnnotation": null,
            "start": 293,
            "end": 294
          },
          "asserts": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "D1",
                "optional": false,
                "typeAnnotation": null,
                "start": 298,
                "end": 300
              },
              "typeArguments": null,
              "start": 298,
              "end": 300
            },
            "start": 298,
            "end": 300
          },
          "start": 293,
          "end": 300
        },
        "start": 291,
        "end": 300
      },
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ReturnStatement",
            "argument": {
              "type": "Literal",
              "value": true,
              "raw": "true",
              "start": 314,
              "end": 318
            },
            "start": 307,
            "end": 319
          }
        ],
        "start": 301,
        "end": 321
      },
      "expression": false,
      "start": 270,
      "end": 321
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
            "name": "c1Orc2",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSUnionType",
                "types": [
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "C1",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 335,
                      "end": 337
                    },
                    "typeArguments": null,
                    "start": 335,
                    "end": 337
                  },
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "C2",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 340,
                      "end": 342
                    },
                    "typeArguments": null,
                    "start": 340,
                    "end": 342
                  }
                ],
                "start": 335,
                "end": 342
              },
              "start": 333,
              "end": 342
            },
            "start": 327,
            "end": 342
          },
          "init": null,
          "definite": false,
          "start": 327,
          "end": 342
        }
      ],
      "declare": false,
      "start": 323,
      "end": 343
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "str",
          "optional": false,
          "typeAnnotation": null,
          "start": 344,
          "end": 347
        },
        "right": {
          "type": "LogicalExpression",
          "left": {
            "type": "CallExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "isC1",
              "optional": false,
              "typeAnnotation": null,
              "start": 350,
              "end": 354
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "c1Orc2",
                "optional": false,
                "typeAnnotation": null,
                "start": 355,
                "end": 361
              }
            ],
            "optional": false,
            "start": 350,
            "end": 362
          },
          "operator": "&&",
          "right": {
            "type": "MemberExpression",
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "c1Orc2",
              "optional": false,
              "typeAnnotation": null,
              "start": 366,
              "end": 372
            },
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "p1",
              "optional": false,
              "typeAnnotation": null,
              "start": 373,
              "end": 375
            },
            "optional": false,
            "computed": false,
            "start": 366,
            "end": 375
          },
          "start": 350,
          "end": 375
        },
        "start": 344,
        "end": 375
      },
      "directive": null,
      "start": 344,
      "end": 376
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "num",
          "optional": false,
          "typeAnnotation": null,
          "start": 383,
          "end": 386
        },
        "right": {
          "type": "LogicalExpression",
          "left": {
            "type": "CallExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "isC2",
              "optional": false,
              "typeAnnotation": null,
              "start": 389,
              "end": 393
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "c1Orc2",
                "optional": false,
                "typeAnnotation": null,
                "start": 394,
                "end": 400
              }
            ],
            "optional": false,
            "start": 389,
            "end": 401
          },
          "operator": "&&",
          "right": {
            "type": "MemberExpression",
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "c1Orc2",
              "optional": false,
              "typeAnnotation": null,
              "start": 405,
              "end": 411
            },
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "p2",
              "optional": false,
              "typeAnnotation": null,
              "start": 412,
              "end": 414
            },
            "optional": false,
            "computed": false,
            "start": 405,
            "end": 414
          },
          "start": 389,
          "end": 414
        },
        "start": 383,
        "end": 414
      },
      "directive": null,
      "start": 383,
      "end": 415
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "str",
          "optional": false,
          "typeAnnotation": null,
          "start": 422,
          "end": 425
        },
        "right": {
          "type": "LogicalExpression",
          "left": {
            "type": "CallExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "isD1",
              "optional": false,
              "typeAnnotation": null,
              "start": 428,
              "end": 432
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "c1Orc2",
                "optional": false,
                "typeAnnotation": null,
                "start": 433,
                "end": 439
              }
            ],
            "optional": false,
            "start": 428,
            "end": 440
          },
          "operator": "&&",
          "right": {
            "type": "MemberExpression",
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "c1Orc2",
              "optional": false,
              "typeAnnotation": null,
              "start": 444,
              "end": 450
            },
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "p1",
              "optional": false,
              "typeAnnotation": null,
              "start": 451,
              "end": 453
            },
            "optional": false,
            "computed": false,
            "start": 444,
            "end": 453
          },
          "start": 428,
          "end": 453
        },
        "start": 422,
        "end": 453
      },
      "directive": null,
      "start": 422,
      "end": 454
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "num",
          "optional": false,
          "typeAnnotation": null,
          "start": 461,
          "end": 464
        },
        "right": {
          "type": "LogicalExpression",
          "left": {
            "type": "CallExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "isD1",
              "optional": false,
              "typeAnnotation": null,
              "start": 467,
              "end": 471
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "c1Orc2",
                "optional": false,
                "typeAnnotation": null,
                "start": 472,
                "end": 478
              }
            ],
            "optional": false,
            "start": 467,
            "end": 479
          },
          "operator": "&&",
          "right": {
            "type": "MemberExpression",
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "c1Orc2",
              "optional": false,
              "typeAnnotation": null,
              "start": 483,
              "end": 489
            },
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "p3",
              "optional": false,
              "typeAnnotation": null,
              "start": 490,
              "end": 492
            },
            "optional": false,
            "computed": false,
            "start": 483,
            "end": 492
          },
          "start": 467,
          "end": 492
        },
        "start": 461,
        "end": 492
      },
      "directive": null,
      "start": 461,
      "end": 493
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
            "name": "c2Ord1",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSUnionType",
                "types": [
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "C2",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 513,
                      "end": 515
                    },
                    "typeArguments": null,
                    "start": 513,
                    "end": 515
                  },
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "D1",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 518,
                      "end": 520
                    },
                    "typeArguments": null,
                    "start": 518,
                    "end": 520
                  }
                ],
                "start": 513,
                "end": 520
              },
              "start": 511,
              "end": 520
            },
            "start": 505,
            "end": 520
          },
          "init": null,
          "definite": false,
          "start": 505,
          "end": 520
        }
      ],
      "declare": false,
      "start": 501,
      "end": 521
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "num",
          "optional": false,
          "typeAnnotation": null,
          "start": 522,
          "end": 525
        },
        "right": {
          "type": "LogicalExpression",
          "left": {
            "type": "CallExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "isC2",
              "optional": false,
              "typeAnnotation": null,
              "start": 528,
              "end": 532
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "c2Ord1",
                "optional": false,
                "typeAnnotation": null,
                "start": 533,
                "end": 539
              }
            ],
            "optional": false,
            "start": 528,
            "end": 540
          },
          "operator": "&&",
          "right": {
            "type": "MemberExpression",
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "c2Ord1",
              "optional": false,
              "typeAnnotation": null,
              "start": 544,
              "end": 550
            },
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "p2",
              "optional": false,
              "typeAnnotation": null,
              "start": 551,
              "end": 553
            },
            "optional": false,
            "computed": false,
            "start": 544,
            "end": 553
          },
          "start": 528,
          "end": 553
        },
        "start": 522,
        "end": 553
      },
      "directive": null,
      "start": 522,
      "end": 554
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "num",
          "optional": false,
          "typeAnnotation": null,
          "start": 561,
          "end": 564
        },
        "right": {
          "type": "LogicalExpression",
          "left": {
            "type": "CallExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "isD1",
              "optional": false,
              "typeAnnotation": null,
              "start": 567,
              "end": 571
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "c2Ord1",
                "optional": false,
                "typeAnnotation": null,
                "start": 572,
                "end": 578
              }
            ],
            "optional": false,
            "start": 567,
            "end": 579
          },
          "operator": "&&",
          "right": {
            "type": "MemberExpression",
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "c2Ord1",
              "optional": false,
              "typeAnnotation": null,
              "start": 583,
              "end": 589
            },
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "p3",
              "optional": false,
              "typeAnnotation": null,
              "start": 590,
              "end": 592
            },
            "optional": false,
            "computed": false,
            "start": 583,
            "end": 592
          },
          "start": 567,
          "end": 592
        },
        "start": 561,
        "end": 592
      },
      "directive": null,
      "start": 561,
      "end": 593
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "str",
          "optional": false,
          "typeAnnotation": null,
          "start": 600,
          "end": 603
        },
        "right": {
          "type": "LogicalExpression",
          "left": {
            "type": "CallExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "isD1",
              "optional": false,
              "typeAnnotation": null,
              "start": 606,
              "end": 610
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "c2Ord1",
                "optional": false,
                "typeAnnotation": null,
                "start": 611,
                "end": 617
              }
            ],
            "optional": false,
            "start": 606,
            "end": 618
          },
          "operator": "&&",
          "right": {
            "type": "MemberExpression",
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "c2Ord1",
              "optional": false,
              "typeAnnotation": null,
              "start": 622,
              "end": 628
            },
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "p1",
              "optional": false,
              "typeAnnotation": null,
              "start": 629,
              "end": 631
            },
            "optional": false,
            "computed": false,
            "start": 622,
            "end": 631
          },
          "start": 606,
          "end": 631
        },
        "start": 600,
        "end": 631
      },
      "directive": null,
      "start": 600,
      "end": 632
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
            "name": "r2",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSUnionType",
                "types": [
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "C2",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 647,
                      "end": 649
                    },
                    "typeArguments": null,
                    "start": 647,
                    "end": 649
                  },
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "D1",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 652,
                      "end": 654
                    },
                    "typeArguments": null,
                    "start": 652,
                    "end": 654
                  }
                ],
                "start": 647,
                "end": 654
              },
              "start": 645,
              "end": 654
            },
            "start": 643,
            "end": 654
          },
          "init": {
            "type": "LogicalExpression",
            "left": {
              "type": "CallExpression",
              "callee": {
                "type": "Identifier",
                "decorators": [],
                "name": "isC1",
                "optional": false,
                "typeAnnotation": null,
                "start": 657,
                "end": 661
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "c2Ord1",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 662,
                  "end": 668
                }
              ],
              "optional": false,
              "start": 657,
              "end": 669
            },
            "operator": "&&",
            "right": {
              "type": "Identifier",
              "decorators": [],
              "name": "c2Ord1",
              "optional": false,
              "typeAnnotation": null,
              "start": 673,
              "end": 679
            },
            "start": 657,
            "end": 679
          },
          "definite": false,
          "start": 643,
          "end": 679
        }
      ],
      "declare": false,
      "start": 639,
      "end": 680
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 691
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
    "value": "C1",
    "start": 6,
    "end": 8
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 9,
    "end": 10
  },
  {
    "type": "Identifier",
    "value": "p1",
    "start": 15,
    "end": 17
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 17,
    "end": 18
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 19,
    "end": 25
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 25,
    "end": 26
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 27,
    "end": 28
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 29,
    "end": 34
  },
  {
    "type": "Identifier",
    "value": "C2",
    "start": 35,
    "end": 37
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 38,
    "end": 39
  },
  {
    "type": "Identifier",
    "value": "p2",
    "start": 44,
    "end": 46
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 46,
    "end": 47
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 48,
    "end": 54
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 54,
    "end": 55
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 56,
    "end": 57
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 58,
    "end": 63
  },
  {
    "type": "Identifier",
    "value": "D1",
    "start": 64,
    "end": 66
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 67,
    "end": 74
  },
  {
    "type": "Identifier",
    "value": "C1",
    "start": 75,
    "end": 77
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 78,
    "end": 79
  },
  {
    "type": "Identifier",
    "value": "p3",
    "start": 84,
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
    "value": "number",
    "start": 88,
    "end": 94
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 94,
    "end": 95
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 96,
    "end": 97
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 98,
    "end": 101
  },
  {
    "type": "Identifier",
    "value": "str",
    "start": 102,
    "end": 105
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 105,
    "end": 106
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 107,
    "end": 113
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 113,
    "end": 114
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 115,
    "end": 118
  },
  {
    "type": "Identifier",
    "value": "num",
    "start": 119,
    "end": 122
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 122,
    "end": 123
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 124,
    "end": 130
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 130,
    "end": 131
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 132,
    "end": 135
  },
  {
    "type": "Identifier",
    "value": "strOrNum",
    "start": 136,
    "end": 144
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 144,
    "end": 145
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 146,
    "end": 152
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 153,
    "end": 154
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 155,
    "end": 161
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 161,
    "end": 162
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 164,
    "end": 172
  },
  {
    "type": "Identifier",
    "value": "isC1",
    "start": 173,
    "end": 177
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 177,
    "end": 178
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 178,
    "end": 179
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 179,
    "end": 180
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 181,
    "end": 184
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 184,
    "end": 185
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 185,
    "end": 186
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 187,
    "end": 188
  },
  {
    "type": "Identifier",
    "value": "is",
    "start": 189,
    "end": 191
  },
  {
    "type": "Identifier",
    "value": "C1",
    "start": 192,
    "end": 194
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 195,
    "end": 196
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 201,
    "end": 207
  },
  {
    "type": "Boolean",
    "value": "true",
    "start": 208,
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
    "value": "function",
    "start": 217,
    "end": 225
  },
  {
    "type": "Identifier",
    "value": "isC2",
    "start": 226,
    "end": 230
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 230,
    "end": 231
  },
  {
    "type": "Identifier",
    "value": "x",
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
    "type": "Identifier",
    "value": "any",
    "start": 234,
    "end": 237
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 237,
    "end": 238
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 238,
    "end": 239
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 240,
    "end": 241
  },
  {
    "type": "Identifier",
    "value": "is",
    "start": 242,
    "end": 244
  },
  {
    "type": "Identifier",
    "value": "C2",
    "start": 245,
    "end": 247
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 248,
    "end": 249
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 254,
    "end": 260
  },
  {
    "type": "Boolean",
    "value": "true",
    "start": 261,
    "end": 265
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 265,
    "end": 266
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 267,
    "end": 268
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 270,
    "end": 278
  },
  {
    "type": "Identifier",
    "value": "isD1",
    "start": 279,
    "end": 283
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 283,
    "end": 284
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 284,
    "end": 285
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 285,
    "end": 286
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 287,
    "end": 290
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 290,
    "end": 291
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 291,
    "end": 292
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 293,
    "end": 294
  },
  {
    "type": "Identifier",
    "value": "is",
    "start": 295,
    "end": 297
  },
  {
    "type": "Identifier",
    "value": "D1",
    "start": 298,
    "end": 300
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 301,
    "end": 302
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 307,
    "end": 313
  },
  {
    "type": "Boolean",
    "value": "true",
    "start": 314,
    "end": 318
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 318,
    "end": 319
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 320,
    "end": 321
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 323,
    "end": 326
  },
  {
    "type": "Identifier",
    "value": "c1Orc2",
    "start": 327,
    "end": 333
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 333,
    "end": 334
  },
  {
    "type": "Identifier",
    "value": "C1",
    "start": 335,
    "end": 337
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 338,
    "end": 339
  },
  {
    "type": "Identifier",
    "value": "C2",
    "start": 340,
    "end": 342
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 342,
    "end": 343
  },
  {
    "type": "Identifier",
    "value": "str",
    "start": 344,
    "end": 347
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 348,
    "end": 349
  },
  {
    "type": "Identifier",
    "value": "isC1",
    "start": 350,
    "end": 354
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 354,
    "end": 355
  },
  {
    "type": "Identifier",
    "value": "c1Orc2",
    "start": 355,
    "end": 361
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 361,
    "end": 362
  },
  {
    "type": "Punctuator",
    "value": "&&",
    "start": 363,
    "end": 365
  },
  {
    "type": "Identifier",
    "value": "c1Orc2",
    "start": 366,
    "end": 372
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 372,
    "end": 373
  },
  {
    "type": "Identifier",
    "value": "p1",
    "start": 373,
    "end": 375
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 375,
    "end": 376
  },
  {
    "type": "Identifier",
    "value": "num",
    "start": 383,
    "end": 386
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 387,
    "end": 388
  },
  {
    "type": "Identifier",
    "value": "isC2",
    "start": 389,
    "end": 393
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 393,
    "end": 394
  },
  {
    "type": "Identifier",
    "value": "c1Orc2",
    "start": 394,
    "end": 400
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 400,
    "end": 401
  },
  {
    "type": "Punctuator",
    "value": "&&",
    "start": 402,
    "end": 404
  },
  {
    "type": "Identifier",
    "value": "c1Orc2",
    "start": 405,
    "end": 411
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 411,
    "end": 412
  },
  {
    "type": "Identifier",
    "value": "p2",
    "start": 412,
    "end": 414
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 414,
    "end": 415
  },
  {
    "type": "Identifier",
    "value": "str",
    "start": 422,
    "end": 425
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 426,
    "end": 427
  },
  {
    "type": "Identifier",
    "value": "isD1",
    "start": 428,
    "end": 432
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 432,
    "end": 433
  },
  {
    "type": "Identifier",
    "value": "c1Orc2",
    "start": 433,
    "end": 439
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 439,
    "end": 440
  },
  {
    "type": "Punctuator",
    "value": "&&",
    "start": 441,
    "end": 443
  },
  {
    "type": "Identifier",
    "value": "c1Orc2",
    "start": 444,
    "end": 450
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 450,
    "end": 451
  },
  {
    "type": "Identifier",
    "value": "p1",
    "start": 451,
    "end": 453
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 453,
    "end": 454
  },
  {
    "type": "Identifier",
    "value": "num",
    "start": 461,
    "end": 464
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 465,
    "end": 466
  },
  {
    "type": "Identifier",
    "value": "isD1",
    "start": 467,
    "end": 471
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 471,
    "end": 472
  },
  {
    "type": "Identifier",
    "value": "c1Orc2",
    "start": 472,
    "end": 478
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 478,
    "end": 479
  },
  {
    "type": "Punctuator",
    "value": "&&",
    "start": 480,
    "end": 482
  },
  {
    "type": "Identifier",
    "value": "c1Orc2",
    "start": 483,
    "end": 489
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 489,
    "end": 490
  },
  {
    "type": "Identifier",
    "value": "p3",
    "start": 490,
    "end": 492
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 492,
    "end": 493
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 501,
    "end": 504
  },
  {
    "type": "Identifier",
    "value": "c2Ord1",
    "start": 505,
    "end": 511
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 511,
    "end": 512
  },
  {
    "type": "Identifier",
    "value": "C2",
    "start": 513,
    "end": 515
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 516,
    "end": 517
  },
  {
    "type": "Identifier",
    "value": "D1",
    "start": 518,
    "end": 520
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 520,
    "end": 521
  },
  {
    "type": "Identifier",
    "value": "num",
    "start": 522,
    "end": 525
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 526,
    "end": 527
  },
  {
    "type": "Identifier",
    "value": "isC2",
    "start": 528,
    "end": 532
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 532,
    "end": 533
  },
  {
    "type": "Identifier",
    "value": "c2Ord1",
    "start": 533,
    "end": 539
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 539,
    "end": 540
  },
  {
    "type": "Punctuator",
    "value": "&&",
    "start": 541,
    "end": 543
  },
  {
    "type": "Identifier",
    "value": "c2Ord1",
    "start": 544,
    "end": 550
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 550,
    "end": 551
  },
  {
    "type": "Identifier",
    "value": "p2",
    "start": 551,
    "end": 553
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 553,
    "end": 554
  },
  {
    "type": "Identifier",
    "value": "num",
    "start": 561,
    "end": 564
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 565,
    "end": 566
  },
  {
    "type": "Identifier",
    "value": "isD1",
    "start": 567,
    "end": 571
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 571,
    "end": 572
  },
  {
    "type": "Identifier",
    "value": "c2Ord1",
    "start": 572,
    "end": 578
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 578,
    "end": 579
  },
  {
    "type": "Punctuator",
    "value": "&&",
    "start": 580,
    "end": 582
  },
  {
    "type": "Identifier",
    "value": "c2Ord1",
    "start": 583,
    "end": 589
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 589,
    "end": 590
  },
  {
    "type": "Identifier",
    "value": "p3",
    "start": 590,
    "end": 592
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 592,
    "end": 593
  },
  {
    "type": "Identifier",
    "value": "str",
    "start": 600,
    "end": 603
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 604,
    "end": 605
  },
  {
    "type": "Identifier",
    "value": "isD1",
    "start": 606,
    "end": 610
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 610,
    "end": 611
  },
  {
    "type": "Identifier",
    "value": "c2Ord1",
    "start": 611,
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
    "value": "&&",
    "start": 619,
    "end": 621
  },
  {
    "type": "Identifier",
    "value": "c2Ord1",
    "start": 622,
    "end": 628
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 628,
    "end": 629
  },
  {
    "type": "Identifier",
    "value": "p1",
    "start": 629,
    "end": 631
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 631,
    "end": 632
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 639,
    "end": 642
  },
  {
    "type": "Identifier",
    "value": "r2",
    "start": 643,
    "end": 645
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 645,
    "end": 646
  },
  {
    "type": "Identifier",
    "value": "C2",
    "start": 647,
    "end": 649
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 650,
    "end": 651
  },
  {
    "type": "Identifier",
    "value": "D1",
    "start": 652,
    "end": 654
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 655,
    "end": 656
  },
  {
    "type": "Identifier",
    "value": "isC1",
    "start": 657,
    "end": 661
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 661,
    "end": 662
  },
  {
    "type": "Identifier",
    "value": "c2Ord1",
    "start": 662,
    "end": 668
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 668,
    "end": 669
  },
  {
    "type": "Punctuator",
    "value": "&&",
    "start": 670,
    "end": 672
  },
  {
    "type": "Identifier",
    "value": "c2Ord1",
    "start": 673,
    "end": 679
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 679,
    "end": 680
  }
]
```
