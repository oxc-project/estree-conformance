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
        "name": "A",
        "optional": false,
        "typeAnnotation": null,
        "start": 50,
        "end": 51
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
              "name": "foo",
              "optional": false,
              "typeAnnotation": null,
              "start": 58,
              "end": 61
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 63,
                "end": 69
              },
              "start": 61,
              "end": 69
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
            "start": 58,
            "end": 70
          }
        ],
        "start": 52,
        "end": 72
      },
      "abstract": false,
      "declare": false,
      "start": 44,
      "end": 72
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
        "start": 80,
        "end": 81
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
              "name": "foo",
              "optional": false,
              "typeAnnotation": null,
              "start": 88,
              "end": 91
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSBooleanKeyword",
                "start": 93,
                "end": 100
              },
              "start": 91,
              "end": 100
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
            "start": 88,
            "end": 101
          }
        ],
        "start": 82,
        "end": 103
      },
      "abstract": false,
      "declare": false,
      "start": 74,
      "end": 103
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "C",
        "optional": false,
        "typeAnnotation": null,
        "start": 111,
        "end": 112
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
              "start": 113,
              "end": 114
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 113,
            "end": 114
          }
        ],
        "start": 112,
        "end": 115
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
              "name": "foo",
              "optional": false,
              "typeAnnotation": null,
              "start": 122,
              "end": 125
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
                  "start": 127,
                  "end": 128
                },
                "typeArguments": null,
                "start": 127,
                "end": 128
              },
              "start": 125,
              "end": 128
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
            "start": 122,
            "end": 129
          }
        ],
        "start": 116,
        "end": 131
      },
      "abstract": false,
      "declare": false,
      "start": 105,
      "end": 131
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "I",
        "optional": false,
        "typeAnnotation": null,
        "start": 143,
        "end": 144
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
              "name": "foo",
              "optional": false,
              "typeAnnotation": null,
              "start": 151,
              "end": 154
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Date",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 156,
                  "end": 160
                },
                "typeArguments": null,
                "start": 156,
                "end": 160
              },
              "start": 154,
              "end": 160
            },
            "accessibility": null,
            "static": false,
            "start": 151,
            "end": 161
          }
        ],
        "start": 145,
        "end": 163
      },
      "declare": false,
      "start": 133,
      "end": 163
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
                      "start": 174,
                      "end": 177
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "RegExp",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 179,
                          "end": 185
                        },
                        "typeArguments": null,
                        "start": 179,
                        "end": 185
                      },
                      "start": 177,
                      "end": 185
                    },
                    "accessibility": null,
                    "static": false,
                    "start": 174,
                    "end": 186
                  }
                ],
                "start": 172,
                "end": 188
              },
              "start": 170,
              "end": 188
            },
            "start": 169,
            "end": 188
          },
          "init": null,
          "definite": false,
          "start": 169,
          "end": 188
        }
      ],
      "declare": false,
      "start": 165,
      "end": 188
    },
    {
      "type": "TSEnumDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "E",
        "optional": false,
        "typeAnnotation": null,
        "start": 194,
        "end": 195
      },
      "body": {
        "type": "TSEnumBody",
        "members": [
          {
            "type": "TSEnumMember",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "A",
              "optional": false,
              "typeAnnotation": null,
              "start": 198,
              "end": 199
            },
            "initializer": null,
            "computed": false,
            "start": 198,
            "end": 199
          }
        ],
        "start": 196,
        "end": 201
      },
      "const": false,
      "declare": false,
      "start": 189,
      "end": 201
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
            "typeAnnotation": null,
            "start": 206,
            "end": 207
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
                  "start": 212,
                  "end": 215
                },
                "value": {
                  "type": "MemberExpression",
                  "object": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "E",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 217,
                    "end": 218
                  },
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "A",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 219,
                    "end": 220
                  },
                  "optional": false,
                  "computed": false,
                  "start": 217,
                  "end": 220
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 212,
                "end": 220
              }
            ],
            "start": 210,
            "end": 222
          },
          "definite": false,
          "start": 206,
          "end": 222
        }
      ],
      "declare": false,
      "start": 202,
      "end": 223
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo5",
        "optional": false,
        "typeAnnotation": null,
        "start": 234,
        "end": 238
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
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "A",
                "optional": false,
                "typeAnnotation": null,
                "start": 242,
                "end": 243
              },
              "typeArguments": null,
              "start": 242,
              "end": 243
            },
            "start": 240,
            "end": 243
          },
          "start": 239,
          "end": 243
        }
      ],
      "returnType": null,
      "body": null,
      "expression": false,
      "start": 225,
      "end": 245
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo5",
        "optional": false,
        "typeAnnotation": null,
        "start": 255,
        "end": 259
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
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "B",
                "optional": false,
                "typeAnnotation": null,
                "start": 263,
                "end": 264
              },
              "typeArguments": null,
              "start": 263,
              "end": 264
            },
            "start": 261,
            "end": 264
          },
          "start": 260,
          "end": 264
        }
      ],
      "returnType": null,
      "body": null,
      "expression": false,
      "start": 246,
      "end": 266
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo5",
        "optional": false,
        "typeAnnotation": null,
        "start": 282,
        "end": 286
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
              "start": 290,
              "end": 293
            },
            "start": 288,
            "end": 293
          },
          "start": 287,
          "end": 293
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [],
        "start": 295,
        "end": 298
      },
      "expression": false,
      "start": 273,
      "end": 298
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo5b",
        "optional": false,
        "typeAnnotation": null,
        "start": 309,
        "end": 314
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
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "A",
                "optional": false,
                "typeAnnotation": null,
                "start": 318,
                "end": 319
              },
              "typeArguments": null,
              "start": 318,
              "end": 319
            },
            "start": 316,
            "end": 319
          },
          "start": 315,
          "end": 319
        }
      ],
      "returnType": null,
      "body": null,
      "expression": false,
      "start": 300,
      "end": 321
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo5b",
        "optional": false,
        "typeAnnotation": null,
        "start": 331,
        "end": 336
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
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "C",
                "optional": false,
                "typeAnnotation": null,
                "start": 340,
                "end": 341
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "params": [
                  {
                    "type": "TSStringKeyword",
                    "start": 342,
                    "end": 348
                  }
                ],
                "start": 341,
                "end": 349
              },
              "start": 340,
              "end": 349
            },
            "start": 338,
            "end": 349
          },
          "start": 337,
          "end": 349
        }
      ],
      "returnType": null,
      "body": null,
      "expression": false,
      "start": 322,
      "end": 351
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo5b",
        "optional": false,
        "typeAnnotation": null,
        "start": 367,
        "end": 372
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
              "start": 376,
              "end": 379
            },
            "start": 374,
            "end": 379
          },
          "start": 373,
          "end": 379
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [],
        "start": 381,
        "end": 384
      },
      "expression": false,
      "start": 358,
      "end": 384
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo6",
        "optional": false,
        "typeAnnotation": null,
        "start": 395,
        "end": 399
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
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "A",
                "optional": false,
                "typeAnnotation": null,
                "start": 403,
                "end": 404
              },
              "typeArguments": null,
              "start": 403,
              "end": 404
            },
            "start": 401,
            "end": 404
          },
          "start": 400,
          "end": 404
        }
      ],
      "returnType": null,
      "body": null,
      "expression": false,
      "start": 386,
      "end": 406
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo6",
        "optional": false,
        "typeAnnotation": null,
        "start": 416,
        "end": 420
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
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "I",
                "optional": false,
                "typeAnnotation": null,
                "start": 424,
                "end": 425
              },
              "typeArguments": null,
              "start": 424,
              "end": 425
            },
            "start": 422,
            "end": 425
          },
          "start": 421,
          "end": 425
        }
      ],
      "returnType": null,
      "body": null,
      "expression": false,
      "start": 407,
      "end": 427
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo6",
        "optional": false,
        "typeAnnotation": null,
        "start": 443,
        "end": 447
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
              "start": 451,
              "end": 454
            },
            "start": 449,
            "end": 454
          },
          "start": 448,
          "end": 454
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [],
        "start": 456,
        "end": 459
      },
      "expression": false,
      "start": 434,
      "end": 459
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo7",
        "optional": false,
        "typeAnnotation": null,
        "start": 470,
        "end": 474
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
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "A",
                "optional": false,
                "typeAnnotation": null,
                "start": 478,
                "end": 479
              },
              "typeArguments": null,
              "start": 478,
              "end": 479
            },
            "start": 476,
            "end": 479
          },
          "start": 475,
          "end": 479
        }
      ],
      "returnType": null,
      "body": null,
      "expression": false,
      "start": 461,
      "end": 481
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo7",
        "optional": false,
        "typeAnnotation": null,
        "start": 491,
        "end": 495
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
              "type": "TSTypeQuery",
              "exprName": {
                "type": "Identifier",
                "decorators": [],
                "name": "a",
                "optional": false,
                "typeAnnotation": null,
                "start": 506,
                "end": 507
              },
              "typeArguments": null,
              "start": 499,
              "end": 507
            },
            "start": 497,
            "end": 507
          },
          "start": 496,
          "end": 507
        }
      ],
      "returnType": null,
      "body": null,
      "expression": false,
      "start": 482,
      "end": 509
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo7",
        "optional": false,
        "typeAnnotation": null,
        "start": 525,
        "end": 529
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
              "start": 533,
              "end": 536
            },
            "start": 531,
            "end": 536
          },
          "start": 530,
          "end": 536
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [],
        "start": 538,
        "end": 541
      },
      "expression": false,
      "start": 516,
      "end": 541
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo8",
        "optional": false,
        "typeAnnotation": null,
        "start": 552,
        "end": 556
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
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "B",
                "optional": false,
                "typeAnnotation": null,
                "start": 560,
                "end": 561
              },
              "typeArguments": null,
              "start": 560,
              "end": 561
            },
            "start": 558,
            "end": 561
          },
          "start": 557,
          "end": 561
        }
      ],
      "returnType": null,
      "body": null,
      "expression": false,
      "start": 543,
      "end": 563
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo8",
        "optional": false,
        "typeAnnotation": null,
        "start": 573,
        "end": 577
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
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "I",
                "optional": false,
                "typeAnnotation": null,
                "start": 581,
                "end": 582
              },
              "typeArguments": null,
              "start": 581,
              "end": 582
            },
            "start": 579,
            "end": 582
          },
          "start": 578,
          "end": 582
        }
      ],
      "returnType": null,
      "body": null,
      "expression": false,
      "start": 564,
      "end": 584
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo8",
        "optional": false,
        "typeAnnotation": null,
        "start": 600,
        "end": 604
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
              "start": 608,
              "end": 611
            },
            "start": 606,
            "end": 611
          },
          "start": 605,
          "end": 611
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [],
        "start": 613,
        "end": 616
      },
      "expression": false,
      "start": 591,
      "end": 616
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo9",
        "optional": false,
        "typeAnnotation": null,
        "start": 627,
        "end": 631
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
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "B",
                "optional": false,
                "typeAnnotation": null,
                "start": 635,
                "end": 636
              },
              "typeArguments": null,
              "start": 635,
              "end": 636
            },
            "start": 633,
            "end": 636
          },
          "start": 632,
          "end": 636
        }
      ],
      "returnType": null,
      "body": null,
      "expression": false,
      "start": 618,
      "end": 638
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo9",
        "optional": false,
        "typeAnnotation": null,
        "start": 648,
        "end": 652
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
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "C",
                "optional": false,
                "typeAnnotation": null,
                "start": 656,
                "end": 657
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "params": [
                  {
                    "type": "TSStringKeyword",
                    "start": 658,
                    "end": 664
                  }
                ],
                "start": 657,
                "end": 665
              },
              "start": 656,
              "end": 665
            },
            "start": 654,
            "end": 665
          },
          "start": 653,
          "end": 665
        }
      ],
      "returnType": null,
      "body": null,
      "expression": false,
      "start": 639,
      "end": 667
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo9",
        "optional": false,
        "typeAnnotation": null,
        "start": 683,
        "end": 687
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
              "start": 691,
              "end": 694
            },
            "start": 689,
            "end": 694
          },
          "start": 688,
          "end": 694
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [],
        "start": 696,
        "end": 699
      },
      "expression": false,
      "start": 674,
      "end": 699
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo10",
        "optional": false,
        "typeAnnotation": null,
        "start": 710,
        "end": 715
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
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "B",
                "optional": false,
                "typeAnnotation": null,
                "start": 719,
                "end": 720
              },
              "typeArguments": null,
              "start": 719,
              "end": 720
            },
            "start": 717,
            "end": 720
          },
          "start": 716,
          "end": 720
        }
      ],
      "returnType": null,
      "body": null,
      "expression": false,
      "start": 701,
      "end": 722
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo10",
        "optional": false,
        "typeAnnotation": null,
        "start": 732,
        "end": 737
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
              "type": "TSTypeQuery",
              "exprName": {
                "type": "Identifier",
                "decorators": [],
                "name": "a",
                "optional": false,
                "typeAnnotation": null,
                "start": 748,
                "end": 749
              },
              "typeArguments": null,
              "start": 741,
              "end": 749
            },
            "start": 739,
            "end": 749
          },
          "start": 738,
          "end": 749
        }
      ],
      "returnType": null,
      "body": null,
      "expression": false,
      "start": 723,
      "end": 751
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo10",
        "optional": false,
        "typeAnnotation": null,
        "start": 767,
        "end": 772
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
              "start": 776,
              "end": 779
            },
            "start": 774,
            "end": 779
          },
          "start": 773,
          "end": 779
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [],
        "start": 781,
        "end": 784
      },
      "expression": false,
      "start": 758,
      "end": 784
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo11",
        "optional": false,
        "typeAnnotation": null,
        "start": 795,
        "end": 800
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
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "B",
                "optional": false,
                "typeAnnotation": null,
                "start": 804,
                "end": 805
              },
              "typeArguments": null,
              "start": 804,
              "end": 805
            },
            "start": 802,
            "end": 805
          },
          "start": 801,
          "end": 805
        }
      ],
      "returnType": null,
      "body": null,
      "expression": false,
      "start": 786,
      "end": 807
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo11",
        "optional": false,
        "typeAnnotation": null,
        "start": 817,
        "end": 822
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
              "type": "TSTypeQuery",
              "exprName": {
                "type": "Identifier",
                "decorators": [],
                "name": "b",
                "optional": false,
                "typeAnnotation": null,
                "start": 833,
                "end": 834
              },
              "typeArguments": null,
              "start": 826,
              "end": 834
            },
            "start": 824,
            "end": 834
          },
          "start": 823,
          "end": 834
        }
      ],
      "returnType": null,
      "body": null,
      "expression": false,
      "start": 808,
      "end": 836
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo11",
        "optional": false,
        "typeAnnotation": null,
        "start": 852,
        "end": 857
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
              "start": 861,
              "end": 864
            },
            "start": 859,
            "end": 864
          },
          "start": 858,
          "end": 864
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [],
        "start": 866,
        "end": 869
      },
      "expression": false,
      "start": 843,
      "end": 869
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo12",
        "optional": false,
        "typeAnnotation": null,
        "start": 880,
        "end": 885
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
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "I",
                "optional": false,
                "typeAnnotation": null,
                "start": 889,
                "end": 890
              },
              "typeArguments": null,
              "start": 889,
              "end": 890
            },
            "start": 887,
            "end": 890
          },
          "start": 886,
          "end": 890
        }
      ],
      "returnType": null,
      "body": null,
      "expression": false,
      "start": 871,
      "end": 892
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo12",
        "optional": false,
        "typeAnnotation": null,
        "start": 902,
        "end": 907
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
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "C",
                "optional": false,
                "typeAnnotation": null,
                "start": 911,
                "end": 912
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "params": [
                  {
                    "type": "TSStringKeyword",
                    "start": 913,
                    "end": 919
                  }
                ],
                "start": 912,
                "end": 920
              },
              "start": 911,
              "end": 920
            },
            "start": 909,
            "end": 920
          },
          "start": 908,
          "end": 920
        }
      ],
      "returnType": null,
      "body": null,
      "expression": false,
      "start": 893,
      "end": 922
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo12",
        "optional": false,
        "typeAnnotation": null,
        "start": 938,
        "end": 943
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
              "start": 947,
              "end": 950
            },
            "start": 945,
            "end": 950
          },
          "start": 944,
          "end": 950
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [],
        "start": 952,
        "end": 955
      },
      "expression": false,
      "start": 929,
      "end": 955
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo13",
        "optional": false,
        "typeAnnotation": null,
        "start": 966,
        "end": 971
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
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "I",
                "optional": false,
                "typeAnnotation": null,
                "start": 975,
                "end": 976
              },
              "typeArguments": null,
              "start": 975,
              "end": 976
            },
            "start": 973,
            "end": 976
          },
          "start": 972,
          "end": 976
        }
      ],
      "returnType": null,
      "body": null,
      "expression": false,
      "start": 957,
      "end": 978
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo13",
        "optional": false,
        "typeAnnotation": null,
        "start": 988,
        "end": 993
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
              "type": "TSTypeQuery",
              "exprName": {
                "type": "Identifier",
                "decorators": [],
                "name": "a",
                "optional": false,
                "typeAnnotation": null,
                "start": 1004,
                "end": 1005
              },
              "typeArguments": null,
              "start": 997,
              "end": 1005
            },
            "start": 995,
            "end": 1005
          },
          "start": 994,
          "end": 1005
        }
      ],
      "returnType": null,
      "body": null,
      "expression": false,
      "start": 979,
      "end": 1007
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo13",
        "optional": false,
        "typeAnnotation": null,
        "start": 1023,
        "end": 1028
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
              "start": 1032,
              "end": 1035
            },
            "start": 1030,
            "end": 1035
          },
          "start": 1029,
          "end": 1035
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [],
        "start": 1037,
        "end": 1040
      },
      "expression": false,
      "start": 1014,
      "end": 1040
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo14",
        "optional": false,
        "typeAnnotation": null,
        "start": 1051,
        "end": 1056
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
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "I",
                "optional": false,
                "typeAnnotation": null,
                "start": 1060,
                "end": 1061
              },
              "typeArguments": null,
              "start": 1060,
              "end": 1061
            },
            "start": 1058,
            "end": 1061
          },
          "start": 1057,
          "end": 1061
        }
      ],
      "returnType": null,
      "body": null,
      "expression": false,
      "start": 1042,
      "end": 1063
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo14",
        "optional": false,
        "typeAnnotation": null,
        "start": 1073,
        "end": 1078
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
              "type": "TSTypeQuery",
              "exprName": {
                "type": "Identifier",
                "decorators": [],
                "name": "b",
                "optional": false,
                "typeAnnotation": null,
                "start": 1089,
                "end": 1090
              },
              "typeArguments": null,
              "start": 1082,
              "end": 1090
            },
            "start": 1080,
            "end": 1090
          },
          "start": 1079,
          "end": 1090
        }
      ],
      "returnType": null,
      "body": null,
      "expression": false,
      "start": 1064,
      "end": 1092
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo14",
        "optional": false,
        "typeAnnotation": null,
        "start": 1108,
        "end": 1113
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
              "start": 1117,
              "end": 1120
            },
            "start": 1115,
            "end": 1120
          },
          "start": 1114,
          "end": 1120
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [],
        "start": 1122,
        "end": 1125
      },
      "expression": false,
      "start": 1099,
      "end": 1125
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 44,
  "end": 1125
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Keyword",
    "value": "class",
    "start": 44,
    "end": 49
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 50,
    "end": 51
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 52,
    "end": 53
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 58,
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
    "value": "number",
    "start": 63,
    "end": 69
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 69,
    "end": 70
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 71,
    "end": 72
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 74,
    "end": 79
  },
  {
    "type": "Identifier",
    "value": "B",
    "start": 80,
    "end": 81
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 82,
    "end": 83
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 88,
    "end": 91
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 91,
    "end": 92
  },
  {
    "type": "Identifier",
    "value": "boolean",
    "start": 93,
    "end": 100
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 100,
    "end": 101
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 102,
    "end": 103
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 105,
    "end": 110
  },
  {
    "type": "Identifier",
    "value": "C",
    "start": 111,
    "end": 112
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 112,
    "end": 113
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 113,
    "end": 114
  },
  {
    "type": "Punctuator",
    "value": ">",
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
    "value": "foo",
    "start": 122,
    "end": 125
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 125,
    "end": 126
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 127,
    "end": 128
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 128,
    "end": 129
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 130,
    "end": 131
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 133,
    "end": 142
  },
  {
    "type": "Identifier",
    "value": "I",
    "start": 143,
    "end": 144
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 145,
    "end": 146
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 151,
    "end": 154
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 154,
    "end": 155
  },
  {
    "type": "Identifier",
    "value": "Date",
    "start": 156,
    "end": 160
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 160,
    "end": 161
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 162,
    "end": 163
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 165,
    "end": 168
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 169,
    "end": 170
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 170,
    "end": 171
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 172,
    "end": 173
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 174,
    "end": 177
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 177,
    "end": 178
  },
  {
    "type": "Identifier",
    "value": "RegExp",
    "start": 179,
    "end": 185
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 185,
    "end": 186
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 187,
    "end": 188
  },
  {
    "type": "Keyword",
    "value": "enum",
    "start": 189,
    "end": 193
  },
  {
    "type": "Identifier",
    "value": "E",
    "start": 194,
    "end": 195
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 196,
    "end": 197
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 198,
    "end": 199
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 200,
    "end": 201
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 202,
    "end": 205
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 206,
    "end": 207
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 208,
    "end": 209
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 210,
    "end": 211
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 212,
    "end": 215
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 215,
    "end": 216
  },
  {
    "type": "Identifier",
    "value": "E",
    "start": 217,
    "end": 218
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 218,
    "end": 219
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 219,
    "end": 220
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 221,
    "end": 222
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 222,
    "end": 223
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 225,
    "end": 233
  },
  {
    "type": "Identifier",
    "value": "foo5",
    "start": 234,
    "end": 238
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 238,
    "end": 239
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 239,
    "end": 240
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 240,
    "end": 241
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 242,
    "end": 243
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 243,
    "end": 244
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 244,
    "end": 245
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 246,
    "end": 254
  },
  {
    "type": "Identifier",
    "value": "foo5",
    "start": 255,
    "end": 259
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 259,
    "end": 260
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 260,
    "end": 261
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 261,
    "end": 262
  },
  {
    "type": "Identifier",
    "value": "B",
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
    "value": ";",
    "start": 265,
    "end": 266
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 273,
    "end": 281
  },
  {
    "type": "Identifier",
    "value": "foo5",
    "start": 282,
    "end": 286
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 286,
    "end": 287
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 287,
    "end": 288
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 288,
    "end": 289
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 290,
    "end": 293
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 293,
    "end": 294
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 295,
    "end": 296
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 297,
    "end": 298
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 300,
    "end": 308
  },
  {
    "type": "Identifier",
    "value": "foo5b",
    "start": 309,
    "end": 314
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 314,
    "end": 315
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 315,
    "end": 316
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 316,
    "end": 317
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 318,
    "end": 319
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 319,
    "end": 320
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 320,
    "end": 321
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 322,
    "end": 330
  },
  {
    "type": "Identifier",
    "value": "foo5b",
    "start": 331,
    "end": 336
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 336,
    "end": 337
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 337,
    "end": 338
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 338,
    "end": 339
  },
  {
    "type": "Identifier",
    "value": "C",
    "start": 340,
    "end": 341
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 341,
    "end": 342
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 342,
    "end": 348
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 348,
    "end": 349
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 349,
    "end": 350
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 350,
    "end": 351
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 358,
    "end": 366
  },
  {
    "type": "Identifier",
    "value": "foo5b",
    "start": 367,
    "end": 372
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 372,
    "end": 373
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 373,
    "end": 374
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 374,
    "end": 375
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 376,
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
    "value": "{",
    "start": 381,
    "end": 382
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 383,
    "end": 384
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 386,
    "end": 394
  },
  {
    "type": "Identifier",
    "value": "foo6",
    "start": 395,
    "end": 399
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 399,
    "end": 400
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 400,
    "end": 401
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 401,
    "end": 402
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 403,
    "end": 404
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 404,
    "end": 405
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 405,
    "end": 406
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 407,
    "end": 415
  },
  {
    "type": "Identifier",
    "value": "foo6",
    "start": 416,
    "end": 420
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 420,
    "end": 421
  },
  {
    "type": "Identifier",
    "value": "x",
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
    "type": "Identifier",
    "value": "I",
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
    "value": ";",
    "start": 426,
    "end": 427
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 434,
    "end": 442
  },
  {
    "type": "Identifier",
    "value": "foo6",
    "start": 443,
    "end": 447
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 447,
    "end": 448
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 448,
    "end": 449
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 449,
    "end": 450
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 451,
    "end": 454
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 454,
    "end": 455
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 456,
    "end": 457
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 458,
    "end": 459
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 461,
    "end": 469
  },
  {
    "type": "Identifier",
    "value": "foo7",
    "start": 470,
    "end": 474
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 474,
    "end": 475
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 475,
    "end": 476
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 476,
    "end": 477
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 478,
    "end": 479
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 479,
    "end": 480
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 480,
    "end": 481
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 482,
    "end": 490
  },
  {
    "type": "Identifier",
    "value": "foo7",
    "start": 491,
    "end": 495
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 495,
    "end": 496
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 496,
    "end": 497
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 497,
    "end": 498
  },
  {
    "type": "Keyword",
    "value": "typeof",
    "start": 499,
    "end": 505
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 506,
    "end": 507
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 507,
    "end": 508
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 508,
    "end": 509
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 516,
    "end": 524
  },
  {
    "type": "Identifier",
    "value": "foo7",
    "start": 525,
    "end": 529
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 529,
    "end": 530
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 530,
    "end": 531
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 531,
    "end": 532
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 533,
    "end": 536
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 536,
    "end": 537
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 538,
    "end": 539
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 540,
    "end": 541
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 543,
    "end": 551
  },
  {
    "type": "Identifier",
    "value": "foo8",
    "start": 552,
    "end": 556
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 556,
    "end": 557
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 557,
    "end": 558
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 558,
    "end": 559
  },
  {
    "type": "Identifier",
    "value": "B",
    "start": 560,
    "end": 561
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 561,
    "end": 562
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 562,
    "end": 563
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 564,
    "end": 572
  },
  {
    "type": "Identifier",
    "value": "foo8",
    "start": 573,
    "end": 577
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 577,
    "end": 578
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 578,
    "end": 579
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 579,
    "end": 580
  },
  {
    "type": "Identifier",
    "value": "I",
    "start": 581,
    "end": 582
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 582,
    "end": 583
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 583,
    "end": 584
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 591,
    "end": 599
  },
  {
    "type": "Identifier",
    "value": "foo8",
    "start": 600,
    "end": 604
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 604,
    "end": 605
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 605,
    "end": 606
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 606,
    "end": 607
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 608,
    "end": 611
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 611,
    "end": 612
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 613,
    "end": 614
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 615,
    "end": 616
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 618,
    "end": 626
  },
  {
    "type": "Identifier",
    "value": "foo9",
    "start": 627,
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
    "value": "x",
    "start": 632,
    "end": 633
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 633,
    "end": 634
  },
  {
    "type": "Identifier",
    "value": "B",
    "start": 635,
    "end": 636
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 636,
    "end": 637
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 637,
    "end": 638
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 639,
    "end": 647
  },
  {
    "type": "Identifier",
    "value": "foo9",
    "start": 648,
    "end": 652
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 652,
    "end": 653
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 653,
    "end": 654
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 654,
    "end": 655
  },
  {
    "type": "Identifier",
    "value": "C",
    "start": 656,
    "end": 657
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 657,
    "end": 658
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 658,
    "end": 664
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 664,
    "end": 665
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 665,
    "end": 666
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 666,
    "end": 667
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 674,
    "end": 682
  },
  {
    "type": "Identifier",
    "value": "foo9",
    "start": 683,
    "end": 687
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 687,
    "end": 688
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 688,
    "end": 689
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 689,
    "end": 690
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 691,
    "end": 694
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 694,
    "end": 695
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 696,
    "end": 697
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 698,
    "end": 699
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 701,
    "end": 709
  },
  {
    "type": "Identifier",
    "value": "foo10",
    "start": 710,
    "end": 715
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 715,
    "end": 716
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 716,
    "end": 717
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 717,
    "end": 718
  },
  {
    "type": "Identifier",
    "value": "B",
    "start": 719,
    "end": 720
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 720,
    "end": 721
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 721,
    "end": 722
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 723,
    "end": 731
  },
  {
    "type": "Identifier",
    "value": "foo10",
    "start": 732,
    "end": 737
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 737,
    "end": 738
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 738,
    "end": 739
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 739,
    "end": 740
  },
  {
    "type": "Keyword",
    "value": "typeof",
    "start": 741,
    "end": 747
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 748,
    "end": 749
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 749,
    "end": 750
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 750,
    "end": 751
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 758,
    "end": 766
  },
  {
    "type": "Identifier",
    "value": "foo10",
    "start": 767,
    "end": 772
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 772,
    "end": 773
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 773,
    "end": 774
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 774,
    "end": 775
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 776,
    "end": 779
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 779,
    "end": 780
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 781,
    "end": 782
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 783,
    "end": 784
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 786,
    "end": 794
  },
  {
    "type": "Identifier",
    "value": "foo11",
    "start": 795,
    "end": 800
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 800,
    "end": 801
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 801,
    "end": 802
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 802,
    "end": 803
  },
  {
    "type": "Identifier",
    "value": "B",
    "start": 804,
    "end": 805
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 805,
    "end": 806
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 806,
    "end": 807
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 808,
    "end": 816
  },
  {
    "type": "Identifier",
    "value": "foo11",
    "start": 817,
    "end": 822
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 822,
    "end": 823
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 823,
    "end": 824
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 824,
    "end": 825
  },
  {
    "type": "Keyword",
    "value": "typeof",
    "start": 826,
    "end": 832
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 833,
    "end": 834
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 834,
    "end": 835
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 835,
    "end": 836
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 843,
    "end": 851
  },
  {
    "type": "Identifier",
    "value": "foo11",
    "start": 852,
    "end": 857
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 857,
    "end": 858
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 858,
    "end": 859
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 859,
    "end": 860
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 861,
    "end": 864
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 864,
    "end": 865
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 866,
    "end": 867
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 868,
    "end": 869
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 871,
    "end": 879
  },
  {
    "type": "Identifier",
    "value": "foo12",
    "start": 880,
    "end": 885
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 885,
    "end": 886
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 886,
    "end": 887
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 887,
    "end": 888
  },
  {
    "type": "Identifier",
    "value": "I",
    "start": 889,
    "end": 890
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 890,
    "end": 891
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 891,
    "end": 892
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 893,
    "end": 901
  },
  {
    "type": "Identifier",
    "value": "foo12",
    "start": 902,
    "end": 907
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 907,
    "end": 908
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 908,
    "end": 909
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 909,
    "end": 910
  },
  {
    "type": "Identifier",
    "value": "C",
    "start": 911,
    "end": 912
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 912,
    "end": 913
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 913,
    "end": 919
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 919,
    "end": 920
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 920,
    "end": 921
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 921,
    "end": 922
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 929,
    "end": 937
  },
  {
    "type": "Identifier",
    "value": "foo12",
    "start": 938,
    "end": 943
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 943,
    "end": 944
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 944,
    "end": 945
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 945,
    "end": 946
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 947,
    "end": 950
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 950,
    "end": 951
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 952,
    "end": 953
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 954,
    "end": 955
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 957,
    "end": 965
  },
  {
    "type": "Identifier",
    "value": "foo13",
    "start": 966,
    "end": 971
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 971,
    "end": 972
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 972,
    "end": 973
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 973,
    "end": 974
  },
  {
    "type": "Identifier",
    "value": "I",
    "start": 975,
    "end": 976
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 976,
    "end": 977
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 977,
    "end": 978
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 979,
    "end": 987
  },
  {
    "type": "Identifier",
    "value": "foo13",
    "start": 988,
    "end": 993
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 993,
    "end": 994
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 994,
    "end": 995
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 995,
    "end": 996
  },
  {
    "type": "Keyword",
    "value": "typeof",
    "start": 997,
    "end": 1003
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 1004,
    "end": 1005
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1005,
    "end": 1006
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1006,
    "end": 1007
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1014,
    "end": 1022
  },
  {
    "type": "Identifier",
    "value": "foo13",
    "start": 1023,
    "end": 1028
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1028,
    "end": 1029
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1029,
    "end": 1030
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1030,
    "end": 1031
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 1032,
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
    "value": "{",
    "start": 1037,
    "end": 1038
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1039,
    "end": 1040
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1042,
    "end": 1050
  },
  {
    "type": "Identifier",
    "value": "foo14",
    "start": 1051,
    "end": 1056
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1056,
    "end": 1057
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1057,
    "end": 1058
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1058,
    "end": 1059
  },
  {
    "type": "Identifier",
    "value": "I",
    "start": 1060,
    "end": 1061
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1061,
    "end": 1062
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1062,
    "end": 1063
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1064,
    "end": 1072
  },
  {
    "type": "Identifier",
    "value": "foo14",
    "start": 1073,
    "end": 1078
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1078,
    "end": 1079
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1079,
    "end": 1080
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1080,
    "end": 1081
  },
  {
    "type": "Keyword",
    "value": "typeof",
    "start": 1082,
    "end": 1088
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 1089,
    "end": 1090
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1090,
    "end": 1091
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1091,
    "end": 1092
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1099,
    "end": 1107
  },
  {
    "type": "Identifier",
    "value": "foo14",
    "start": 1108,
    "end": 1113
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1113,
    "end": 1114
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1114,
    "end": 1115
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1115,
    "end": 1116
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 1117,
    "end": 1120
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1120,
    "end": 1121
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1122,
    "end": 1123
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1124,
    "end": 1125
  }
]
```
